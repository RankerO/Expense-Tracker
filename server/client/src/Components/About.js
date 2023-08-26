import React from 'react'
import { FaGithub } from "react-icons/fa";
import Icon from './Icon';
import { ExternalLink } from 'react-external-link';
import { UserContext } from "../App";
import { useContext, useEffect } from "react";

export const About = (props) => {
    const GithubBackground = "linear-gradient(to right,#171515 0%, #171515 100%)"
    const { state, dispatch } = useContext(UserContext);
    useEffect(() => {
        dispatch({ type: "USER", payload: props.value });
        console.log(state);
    }, [])

    return (
        <div className="mainAbout">
            <ExternalLink className="IconsContainer" href="https://github.com/RankerO">
                <h1>Ankit Pandey</h1>
                <Icon color={GithubBackground}>
                    <FaGithub />
                </Icon>
            </ExternalLink>
            <ExternalLink className="IconsContainer" href="https://github.com/ayushsingh2411">
                <h1>Ayush Singh</h1>
                <Icon color={GithubBackground}>
                    <FaGithub />
                </Icon>
            </ExternalLink>
            <ExternalLink className="IconsContainer" href="https://github.com/">
                <h1>Shiv Gond</h1>
                <Icon color={GithubBackground}>
                    <FaGithub />
                </Icon>
            </ExternalLink>
        </div>
    )
}

export default About;


