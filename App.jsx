import React from "react";
import Accordian from "./accordian/src/Accordian";
import ImageSlider from './image_slider/src/Image Slider';
import LoadMore from "./load_more/src/LoadMore";
import menus from "./nested_tree_menu/src/menus";
import TreeMenu from "./nested_tree_menu/src/TreeMenu";
import RandomColor from "./random_color_generator/src/RandomColor";
import StarRating from "./star_rating/src/StarRating";
import QRCodeComp from "./qr_code_generator/src/QRCode";
import LightDarkMode from "./theme_switch/src/LightDarkMode";
import ScrollIndicator from "./scroll_indicator/src/ScrollIndicator";
import TabContent from './tabs/src/TabContent';
import ModalPop from "./modal_popup/src/ModalPop";
import GithubSearch from "./github_search/src/GithubSearch";
import SearchAutoComp from './search_auto_complete/src/SearchAutoComp';
import TicTacToe from "./tic_tac_toe/src/TicTacToe";

export default function App(){
	const urlProds = "https://picsum.photos/v2/list";
	const urlLoad = "https://dummyjson.com/products";
	const userUrl = "https://dummyjson.com/users"

	const page = 1;
	const imgLimit = 10;

	return (
		<>
			<Accordian />
			<ImageSlider url = {urlProds} page = {page} limit = {imgLimit} />
			<LoadMore url= {urlLoad} />
			<TreeMenu menus = {menus}/>
			<RandomColor />
			<StarRating />
			<QRCodeComp />
			<LightDarkMode />
			<ScrollIndicator url = {urlLoad} />
			<TabContent />
			<ModalPop />
			<GithubSearch />
			<SearchAutoComp url = {userUrl}/>
			<TicTacToe />
		</>
	);
}