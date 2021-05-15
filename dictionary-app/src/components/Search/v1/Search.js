import React from 'react'
import styles from './Search.module.css'

const search = (props) => {
    const searchPlaceholder = "Enter what you want to know about...";
    return(
        <input 
            defaultValue={props.curValue}
            type="text" 
            id={styles.SearchField} 
            name="search" 
            placeholder={searchPlaceholder}
            onChange={props.typed}
             />
    )
}

export default search;