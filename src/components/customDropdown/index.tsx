import React, { useState } from "react";
import styled from "styled-components";

const MDropdown = styled("div")`
  position:relative;
  
  `;
  const MDropdownBtn = styled("div")`
  font-weight: 500;
  font-family:Gellix; 
  color: #4F4F4F;
  cursor:pointer;
`;

const MDropdownTitle = styled("div")`
font-family:Gellix; 
  font-size:14px;
  line-height:14px;
  color:#fff;
  opacity:0.4;
  text-transform:uppercase;
  margin-bottom:8px
`;

const MDropdownContent = styled("div")`
position:absolute;
top:120%;
right:0;
padding:1rem;

width:210px;
border-radius:4px;

background:#212121;
`;

const MDropdownUl = styled("ul")`
margin:0;
padding:0;
height:255px;
overflow-y:scroll;
&::-webkit-scrollbar
{
	width: 4px;
	background-color: trasparent;
};
&::-webkit-scrollbar-thumb
{
	border-radius: 8px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #434343;
}
`;

const MDropdownItem = styled("li")`
  cursor:pointer;
  color:#fff;
  margin:0;
  padding-bottom:5px;
  list-style:none;
  font-family:Gellix; 
  font-size:14px;
`;



function CustomDropdown(){
   const [isActive, setIsActive] = useState(false)
    return(
        <>
        <MDropdown>
            <MDropdownBtn onClick ={
              (e) => setIsActive(!isActive)
            }>All </MDropdownBtn>
            {isActive && (

            <MDropdownContent>
              <MDropdownTitle>ICONS</MDropdownTitle>
              <MDropdownUl>
                    <MDropdownItem>
                          Icon 1 Icon 1
                    </MDropdownItem>
                    <MDropdownItem>
                          Icon 1 Icon 1
                    </MDropdownItem>
                    <MDropdownItem>
                          Icon 1 Icon 1
                    </MDropdownItem>
                    <MDropdownItem>
                          Icon 1 Icon 1
                    </MDropdownItem>
                    <MDropdownItem>
                          Icon 1 Icon 1
                    </MDropdownItem>
                    <MDropdownItem>
                          Icon 1 Icon 1
                    </MDropdownItem>
                    <MDropdownItem>
                          Icon 1 Icon 1
                    </MDropdownItem>
                    <MDropdownItem>
                          Icon 1 Icon 1
                    </MDropdownItem>
                    <MDropdownItem>
                          Icon 1 Icon 1
                    </MDropdownItem>
                    <MDropdownItem>
                          Icon 1 Icon 1
                    </MDropdownItem>
                    <MDropdownItem>
                          Icon 1 Icon 1
                    </MDropdownItem>
                    <MDropdownItem>
                          Icon 1 Icon 1
                    </MDropdownItem>
                    <MDropdownItem>
                          Icon 1 Icon 1
                    </MDropdownItem>      
                    <MDropdownItem>
                          Icon 1
                    </MDropdownItem>
                    <MDropdownItem>
                          Icon 1
                    </MDropdownItem>
                    <MDropdownItem>
                          Icon 1
                    </MDropdownItem>
                    <MDropdownItem>
                          Icon 1
                    </MDropdownItem>

              </MDropdownUl>
            </MDropdownContent>
            )}
        </MDropdown>
 
        </>
    )
}

export default CustomDropdown;