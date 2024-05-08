const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const tabs = $$(".tab-item");
const panes = $$(".tab-pane");
const tabActive = $(".tab-item.active");
const lines = $(".tabs .line");
lines.style.left = tabActive.offsetLeft + "px";
lines.style.width = tabActive.offsetWidth + "px";
tabs.forEach((tab, index) => {
  const pane = panes[index];
  tab.onclick = function () {
    const activeTab = $(".tab-item.active");
    const activePane = $(".tab-pane.active");
    activeTab.classList.remove("active");
    activePane.classList.remove("active");
    lines.style.left = this.offsetLeft + "px";
    lines.style.width = this.offsetWidth + "px";
    this.classList.add("active");
    pane.classList.add("active");
  };
});
