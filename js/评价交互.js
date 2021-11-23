/*
 * @Author: Dudu
 * @Date: 2021-11-23 19:45:24
 * @LastEditTime: 2021-11-23 19:45:24
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \daily-practice\js\评价交互.js
 */
const badColor = "#ff5722",
	okColor = "#ff9800",
	goodColor = "#36d896",
	greatColor = "#3f51b5";

// 获取元素
const slider = document.querySelector("input");

const iconList = document.querySelector(".icon-list");

const sliderHandle = () => {
	// 获取值
	const value = slider.value;

	// 改变滑动条的背景颜色
	slider.style.background = `linear-gradient(to right,${
		value < 25
			? badColor
			: value < 50
			? okColor
			: value < 75
			? goodColor
			: greatColor
	} ${value}%, #eaeef4 ${value}%)`;

	// 改变图标
	iconList.style.transform = `translateY(-${
		value < 25 ? 0 : value < 50 ? 50 : value < 75 ? 100 : 150
	}px)`;
};

// 封装成一个函数 初始调一下
sliderHandle();

// 添加滑动条变化事件
slider.addEventListener("input", () => {
	sliderHandle();
});