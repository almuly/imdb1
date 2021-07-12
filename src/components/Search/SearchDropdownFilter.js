import React, {useContext} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import {NativeSelect} from "@material-ui/core";
import {ArrowDropDownOutlined} from "@material-ui/icons";
import {DataType} from "../../constants/DataTypes";
import {GlobalContext} from "../../context/GlobalContext";

const useStyles = makeStyles(() => ({
    formControl: {
        maxWidth: 120,
        paddingLeft:26,
    },
    selectControl: {
        padding: 0
    }
}));
export default function SearchDropdownFilter() {
    const classes = useStyles();
    const {searchType, setSearchType} = useContext(GlobalContext)

    const handleChange = (event) => {
        setSearchType(event.target.value);
        console.log(event.target.value)
    };
    return (
        <div>
            <FormControl className={classes.formControl}>
                <NativeSelect
                    value={searchType.filter}
                    onChange={handleChange}
                    className={classes.selectControl}
                    name="filter"
                    variant="outlined"
                    disableUnderline={true}
                    IconComponent={ArrowDropDownOutlined}
                >
                    {DataType.map((item, index) =>
                        <option key={index}  value={`${item.type}`}>
                            {item.type_title}
                        </option>)}
                </NativeSelect>
            </FormControl>
        </div>
    );
}
