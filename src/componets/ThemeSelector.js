import "./ThemeSelector.css"
import { useTheme } from "../hooks/useTheme"
import modeIcon from "../assets/mode-icon.svg"

export default function ThemeSelector() {
    const {changeColor, changeMode, mode} = useTheme()
    const themeColors = ['#58249c','#249c6b','#b70233']

    const toogleMode= ()=>{
        changeMode(mode ==='dark'?'light':'dark')
    }
    console.log(mode)

  return (
    <div className="theme-selector">
      <div className="mode-toggle">
        <img
         src={modeIcon} 
         onClick={toogleMode}
         alt="dark/light toogle"
         style={{filter:mode=='dark'? 'invert(100%)':'invert(20%)'}}
         />
      </div>
    <div className="theme-buttons">
        {themeColors.map((color)=>(
            <div
            key={color}
            onClick={()=> changeColor(color)}
            style={{background: color}}
            />
        ))}
    </div>
    </div>
  )
}

