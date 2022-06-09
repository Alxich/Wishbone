function MenuNav(props) {
    return(
        <li key={props.id}>
            <a href={props.link} target="_self">
                {props.text}
            </a>
        </li>
    )
}

export default MenuNav;