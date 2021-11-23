/*
 * @Author: Dudu
 * @Date: 2021-11-23 20:08:24
 * @LastEditTime: 2021-11-23 20:08:24
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \daily-practice\js\加入购物车动画.js
 */
const addToCart = document.querySelector(".addToCart");
addToCart.addEventListener("click", () => {
	addToCart.classList.toggle("added");
});