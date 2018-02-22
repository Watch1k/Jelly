/**
 * Home page scripts.
 *
 * @module Home
 */

export default class Home {
	constructor() {
		this.init();
	}
	
	init() {
		const options = {
			paths: '#pentagon-path',     // Shape we want to draw
			pointsNumber: 10,            // Number of points
			maxDistance: 40,             // Max distance among points
			color: '#5C1523',
			intensity: 0.9,
			fastness: 1 / 10
			//centroid: '.centroid-text'   // Element to move accordingly with the centroid of the shape
			// debug: true               // Uncomment this to see the points
		};
		
		/* Initializing jelly */
		
		const jelly = new Jelly('.jelly-canvas', options);
	}
}
