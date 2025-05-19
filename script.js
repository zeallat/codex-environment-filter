// ==UserScript==
// @name         codex-environment-filter
// @version      0.3.2
// @description  프로젝트별 필터 드롭다운(플로팅) + 새로고침 유지 / 브라우저 재시작 초기화
// @match        https://chatgpt.com/codex
// @grant        none
// ==/UserScript==

(() => {
  const LIST_WRAPPER = ".flex.flex-col.justify-center.pt-2";
  const ITEM = ".group.task-row-container";
  const PROJECT_SPAN = ".text-token-text-tertiary span.truncate:last-child";
  const ALL_VALUE = "__all";
  const STORAGE_KEY = "codexProjectFilter";

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  const waitFor = (sel, t = 10_000) =>
    new Promise((res, rej) => {
      if ($(sel)) return res($(sel));
      const mo = new MutationObserver(
        () => $(sel) && (mo.disconnect(), res($(sel)))
      );
      mo.observe(document, { childList: true, subtree: true });
      setTimeout(() => (mo.disconnect(), rej("timeout")), t);
    });

  waitFor(LIST_WRAPPER)
    .then((list) => {
      /* 드롭다운 */
      const select = document.createElement("select");
      Object.assign(select.style, {
        position: "fixed",
        top: "10px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 9999,
        padding: "4px 8px",
        border: "2px solid #ccc",
        borderRadius: "6px",
        background: "#fff",
        fontSize: "1.4em",
        fontWeight: "bold",
      });
      document.body.appendChild(select);

      let current = sessionStorage.getItem(STORAGE_KEY) || ALL_VALUE;

      const applyFilter = () => {
        $$(ITEM, list).forEach((row) => {
          const proj = $(PROJECT_SPAN, row)?.textContent.trim() || "";
          row.style.display =
            current === ALL_VALUE || proj === current ? "" : "none";
        });
      };

      const refreshOptions = () => {
        const set = new Set();
        $$(ITEM, list).forEach((r) => {
          const name = $(PROJECT_SPAN, r)?.textContent.trim();
          if (name) set.add(name);
        });

        const wanted = [ALL_VALUE, ...set];
        const now = Array.from(select.options).map((o) => o.value);
        if (
          wanted.length === now.length &&
          wanted.every((v, i) => v === now[i])
        )
          return;

        select.innerHTML = "";
        select.add(new Option("All", ALL_VALUE));
        set.forEach((p) => select.add(new Option(p, p)));

        // current 가 아직 목록에 없으면 hidden 옵션으로 유지
        if (!wanted.includes(current) && current !== ALL_VALUE) {
          const hidden = new Option(current, current);
          hidden.style.display = "none";
          select.add(hidden);
        }
        select.value = current;
      };

      select.addEventListener("change", (e) => {
        current = e.target.value;
        sessionStorage.setItem(STORAGE_KEY, current);
        applyFilter();
      });

      refreshOptions();
      applyFilter();

      new MutationObserver(() => {
        refreshOptions();
        applyFilter();
      }).observe(list, { childList: true, subtree: true });
    })
    .catch(console.error);
})();
