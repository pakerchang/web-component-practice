import { defineCustomElement } from "vue";
import MyCustomElement from "@/elements/MyCustomElement.ce.vue";

// 定義一個模組，註冊在 windows 元件下
window.customElements.define("custom-element", defineCustomElement(MyCustomElement));
