const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const tabs = $$(".tab-item");
const panes = $$(".tab-pane");
const tabsLenngth = tabs.length;
const activeTab = $('.tab-item.active');
const lines = $('.tabs .line');
lines.style.left = activeTab.offsetLeft + 'px';
lines.style.width = activeTab.offsetWidth + 'px'
for (let i = 0; i < tabsLenngth; i++) {
  const tab = tabs[i];
  const pane = panes[i];
  tab.onclick = function () {
    const tabActive = $(".tab-item.active");
    const paneActive = $(".tab-pane.active");
    tabActive.classList.remove("active");
    paneActive.classList.remove("active");
    lines.style.left = this.offsetLeft + 'px';
    lines.style.width = this.offsetWidth + 'px'
    this.classList.add("active");
    pane.classList.add("active");

  }
}
