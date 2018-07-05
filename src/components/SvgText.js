import React, { Component } from 'react';

export class SvgText extends Component{
    render(){
      return (
          <svg width={196} height={598} xmlns="http://www.w3.org/2000/svg">
           <g>
            <rect x={-1} y={-1} width={198} height={600} id="canvas_background" fill="none" />
            <g id="canvasGrid" display="none">
              <rect id="svg_2" width="100%" height="100%" x={0} y={0} strokeWidth={0} fill="url(#gridpattern)" />
            </g>
          </g>
          <g>
            <title>Layer 1</title>
            <text fill="#000000" strokeWidth={0} x="45.063204" y="229.448018" id="svg_1" fontSize={24} fontFamily="Helvetica, Arial, sans-serif" textAnchor="start" xmlSpace="preserve" transform="rotate(-90 99.02463531494148,298.83920288085943) matrix(5.419701746635014,0,0,6.740844706083735,-412.3811124751828,-1205.8305094237799) " stroke="#000">{this.props.text}</text>
          </g>
        </svg>
      );
    }
  };

  export function getSvgUrl(text){
    var mySVG = `<svg width={196} height={598} xmlns="http://www.w3.org/2000/svg">
    <g>
     <rect x={-1} y={-1} width={198} height={600} id="canvas_background" fill="none" />
     <g id="canvasGrid" display="none">
       <rect id="svg_2" width="100%" height="100%" x={0} y={0} strokeWidth={0} fill="url(#gridpattern)" />
     </g>
   </g>
   <g>
     <title>Layer 1</title>
     <text fill="#000000" strokeWidth={0} x="45.063204" y="229.448018" id="svg_1" fontSize={24} fontFamily="Helvetica, Arial, sans-serif" textAnchor="start" xmlSpace="preserve" transform="rotate(-90 99.02463531494148,298.83920288085943) matrix(5.419701746635014,0,0,6.740844706083735,-412.3811124751828,-1205.8305094237799) " stroke="#000">${text}</text>
   </g>
 </svg>`;
    var mySVG64 = window.btoa(mySVG);
    return  mySVG64;
}