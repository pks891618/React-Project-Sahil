export default function TabButton({children, onSelect, isSelected}){
    console.log("children>>>",children)
    return(
      //  <li><button>{props.children}</button></li> //change parameter from (desructuring children to props.)
          <li><button className={isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button></li>
      )
}