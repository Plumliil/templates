import DOMPurify from "isomorphic-dompurify";

// src/directives/myDirective.js
export default {
  mounted(el: HTMLElement, binding: any) {
    // 将指令值作为HTML内容插入到元素中
    if (binding.value) {
      let clean = DOMPurify.sanitize(binding.value);
      el.innerHTML = clean;
    }
  },
  updated(el: HTMLElement, binding: any) {
    if (binding.value) {
      let clean = DOMPurify.sanitize(binding.value);
      el.innerHTML = clean;
    }
  },
};
