import React from "react"

import "../common.css"
import "./ProgressBar.css"

const ProgressBar = () => {
  return <div className="container"
              title="Progress bar represents number of tasks grouped by their completion status. Hover bar items for details. Click actions describe how items list below is filtered. Active groups are highlighted so the user understands what item list represents exactly. Highlighting is different (e.g. dashed) for categories that are only partially included. Default: all unblocked incomplete items">
    <div className="info-widget">?</div>
    <div className="item overdue-high active" title="4-11 days overdue. Click/Alt-Click: only these" style={{width:5+'%'}}>5</div>
    <div className="item overdue active" title="1-4 days overdue. Click: these and overdue-high items. Alt-Click: only these" style={{width:3+'%'}}>3</div>
    <div className="item overdue-soon active" title="Overdue tomorrow. Click: these and all overdue items. Alt-Click: only these" style={{width:2+'%'}}>2</div>
    <div className="item due active" title="To be done. Click: all due and overdue. Alt-click: all due" style={{width:8+'%'}}>8</div>
    <div className="item unblocked active" title="Unblocked but not due yet. Click: these and all due and overdue. Alt-Click: only these" style={{width:4+'%'}}>4</div>
    <div className="item blocked-required" title="Blocked required. Click: all blocked. Alt-Click: only these" style={{width:55+'%'}}>55</div>
    <div className="item blocked-non-required" title="Blocked non-required. Click: all blocked. Alt-Click: only these" style={{width:13+'%'}}>13</div>
    <div className="item resolved" title="Resolved. Click/Alt-Click: only these" style={{width:10+'%'}}>10</div>
  </div>
}

export default ProgressBar
