import React from 'react';

/**
 * Paste in your SVG logo and return it from this component.
 * Make sure you have a height set for your logo.
 * It is recommended to keep the height within 25-35px.
 * Logo comes with a property value called `fill`. `fill` is useful 
 * when you want to change your logo depending on the theme you are on. 
 */
export default function Logo({ fill }) {
  return (    

<svg width="200px" height="54px" viewBox="0 0 200 54" version="1.1" xmlns="http://www.w3.org/2000/svg">
	<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Group"><rect id="Rectangle" fill='#1d2128' x="0" y="0" width="200" height="54"></rect>
		<text id="Sorin-Cojocaru" font-family="Menlo-Bold, Menlo" font-size="25" font-weight="bold" line-spacing="31" fill="#fff">
		<tspan x="33.141113" y="33">Sorin Cojocaru</tspan></text></g></g></svg>
  );
}

