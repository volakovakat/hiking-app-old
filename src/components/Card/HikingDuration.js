import * as React from "react";
import TrendingDownOutlinedIcon from '@mui/icons-material/TrendingDownOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import HikingOutlinedIcon from '@mui/icons-material/HikingOutlined';
import "./HikingDuration.css"

const HikingDuration = ({hikeTimeRange, carTimeRange, ascent, descent}) => {
    return (
        <div className="c-icon-text-group">
            <span className="c-icon-text"><HikingOutlinedIcon color="disabled"/> {hikeTimeRange}</span>
            <span className="c-icon-text"><DirectionsCarFilledOutlinedIcon color="disabled"/> {carTimeRange}</span>
            <span className="c-icon-text"><TrendingUpOutlinedIcon color="disabled"/> {ascent}</span>
        </div>
    )

}
export default HikingDuration;