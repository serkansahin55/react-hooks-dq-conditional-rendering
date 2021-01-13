import React from "react";

function MenuBar({selectedPage, onMenuClick}) {
  /*

  The 'span' tags below are the menu items. Think about the way a menu 
  should work. When you click a menu item, the button typically becomes
  'active' to indicate that it is currently selected. How could we achieve
  this programatically? What other behavior do we expect when we click
  on a menu item? Do we need state in this component, and if not, how can
  this component be made aware of what is currently the active menu item?

  */

  return (
    <div className="ui four item menu">
      <span onClick={() => onMenuClick(selectedPage.Profile)} className="item active">
        <i className="user large icon" />
      </span>

      <span onClick={() => onMenuClick(selectedPage.Photos)} className="item">
        <i className="photo large icon" />
      </span>

      <span onClick={() => onMenuClick(selectedPage.Cocktails)} className="item">
        <i className="cocktail large icon" />
      </span>

      <span onClick={() => onMenuClick(selectedPage.Pokemon)} className="item">
        <i className=" themeisle large icon" />
      </span>
    </div>
  );
}

export default MenuBar;
