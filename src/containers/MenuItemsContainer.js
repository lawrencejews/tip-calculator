import { MenuItems } from "../components/MenuItems";
import { connect } from "react-redux";

const mapStateToProps = () => {
    return {
        items: state.items
    };
};

export const MenuItemsContainer = connect(mapStateToProps)(MenuItems)