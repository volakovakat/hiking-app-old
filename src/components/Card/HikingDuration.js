import * as React from "react";
import TrendingDownOutlinedIcon from '@mui/icons-material/TrendingDownOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import HikingOutlinedIcon from '@mui/icons-material/HikingOutlined';
import "./HikingDuration.css"

const HikingDuration = ({timeRange, ascent, descent}) => {
    return (
        <div className="c-icon-text">
            <span><HikingOutlinedIcon/> {timeRange}</span>
            <span><TrendingUpOutlinedIcon/> {ascent}</span>
            <span><TrendingDownOutlinedIcon/> {descent}</span>
        </div>

    )

}
export default HikingDuration;