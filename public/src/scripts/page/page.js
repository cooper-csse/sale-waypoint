import AuthManager from "../authManager.js";

/**
 * Abstract Page class
 * @abstract
 */
export default class Page {
	/**
	 * Singleton instance
	 * @type Page
	 */
	static instance;
	static fade = 200;

	/**
	 * Url parameters
	 * @type URLSearchParams
	 */
	urlParams;

	constructor() {
		this.urlParams = new URLSearchParams(window.location.search);

		$("#linkSales").on("click", this.redirect.bind(this, "./sales.html"));
		$("#linkWishlist").on("click", this.redirect.bind(this, "./wishlist.html"));
		$("#linkAbout").on("click", this.redirect.bind(this, "./about.html"));
		$("#logout").on("click", AuthManager.signOut);
		$("#content").animate({opacity: 1}, Page.fade);
	}

	redirect(url) {
		// TODO: persist settings
		$("#content").animate({opacity: 0}, Page.fade, () => {
			window.location.href = url;
		})
	}

	/**
	 * This page's main method, where you set up the controllers, etc.
	 * This is the equivalent of what we were doing in the follow-alongs
	 * @abstract
	 */
	main() {}
}
