/**
 * This function is used to render project data in my projects section
 * @param {number} projectId - includes the project id from project list 
 * @returns - html div tag
 */
function getMobileProjectTemplate(projectId){
    return `<div class="mobile-project-content">
                <div class="head-content">
                    <span class="head-span">${projects[projectId].title}</span>
                    <span class="tec-span">Technologien: 
                        ${projects[projectId].tecText[0]}, ${projects[projectId].tecText[1]}, ${projects[projectId].tecText[2]} 
                    </span>
                    <span class="tec-span">Dauer: ${projects[projectId].duration}</span>
                    <div class="image-container">
                        <div class="mobile-image-border">
                            <img src="${projects[projectId].imagePath}" alt="screen of project content">
                        </div>
                    </div>
                </div>
                <ul class="project-list-content">
                    <li>
                        <div class="mobile-caption-box">
                            <span class="mobile-caption">${projects[projectId].list[0].description}</span>
                        </div>
                    </li>
                    <span class="mobile-li-text">${projects[projectId].list[0].content}</span>
                    <li>
                        <div class="mobile-caption-box">
                            <span class="mobile-caption">${projects[projectId].list[1].description}</span>
                        </div>
                    </li>
                    <span class="mobile-li-text">${projects[projectId].list[1].content}</span>
                    <li>
                        <div class="mobile-caption-box">
                            <span class="mobile-caption">${projects[projectId].list[2].description}</span>
                        </div>
                    </li>
                    <span class="mobile-li-text">${projects[projectId].list[2].content}</span>
                </ul>
                <div class="mobile-project-ctrl-container">
                    <div class="live-test-btn-mobile" onclick="openWebsite('${projects[projectId].liveTestPath}')">
                        <span class="live-test-span-mobile">Live test</span>
                    </div>
                    <div class="github-btn-mobile" onclick="openWebsite('${projects[projectId].githubPath}')">
                        <span class="github-span-mobile">GitHub</span>
                    </div>
                </div>
            </div>`;
}

/**
 * This function is used to render project data in my projects section
 * @param {number} projectId - includes the project id from project list 
 * @returns - html div tag
 */
function getMobileOngoingProjectTemplate(projectId){
    return `<div class="mobile-project-content">
                <div class="head-content">
                    <span class="head-span">${projects[projectId].title}</span>
                    <span class="tec-span">Technologien: 
                        ${projects[projectId].tecText[0]}, ${projects[projectId].tecText[1]}, ${projects[projectId].tecText[2]}, 
                         ${projects[projectId].tecText[3]}, ${projects[projectId].tecText[4]}, ${projects[projectId].tecText[5]}
                    </span>
                    <div class="image-container">
                        <div class="mobile-image-border-ongoing">
                            <img src="${projects[projectId].imagePath}" alt="screen of project content">
                            <span>Comming soon...</span>
                        </div>
                    </div>
                </div>
                <ul class="project-list-content">
                    <li>
                        <div class="mobile-caption-box">
                            <span class="mobile-caption">${projects[projectId].list.description}</span>
                        </div>
                    </li>
                    <span class="mobile-li-text">${projects[projectId].list.content}</span>
                </ul>
            </div>`;
}

/**
 * This function is used to render project data in english
 * @param {number} projectId - includes the project id from project list 
 * @returns - html div tag
 */
function getMobileProjectTemplateEnglish(projectId){
    return `<div class="mobile-project-content">
                <div class="head-content">
                    <span class="head-span">${projectsEnglish[projectId].title}</span>
                    <span class="tec-span">Technologies: 
                        ${projectsEnglish[projectId].tecText[0]}, ${projectsEnglish[projectId].tecText[1]}, ${projectsEnglish[projectId].tecText[2]} 
                    </span>
                    <span class="tec-span">Duration: ${projectsEnglish[projectId].duration}</span>
                    <div class="image-container">
                        <div class="mobile-image-border">
                            <img src="${projectsEnglish[projectId].imagePath}" alt="screen of project content">
                        </div>
                    </div>
                </div>
                <ul class="project-list-content">
                    <li>
                        <div class="mobile-caption-box">
                            <span class="mobile-caption">${projectsEnglish[projectId].list[0].description}</span>
                        </div>
                    </li>
                    <span class="mobile-li-text">${projectsEnglish[projectId].list[0].content}</span>
                    <li>
                        <div class="mobile-caption-box">
                            <span class="mobile-caption">${projectsEnglish[projectId].list[1].description}</span>
                        </div>
                    </li>
                    <span class="mobile-li-text">${projectsEnglish[projectId].list[1].content}</span>
                    <li>
                        <div class="mobile-caption-box">
                            <span class="mobile-caption">${projectsEnglish[projectId].list[2].description}</span>
                        </div>
                    </li>
                    <span class="mobile-li-text">${projectsEnglish[projectId].list[2].content}</span>
                </ul>
                <div class="mobile-project-ctrl-container">
                    <div class="live-test-btn-mobile" onclick="openWebsite('${projectsEnglish[projectId].liveTestPath}')">
                        <span class="live-test-span-mobile">Live test</span>
                    </div>
                    <div class="github-btn-mobile" onclick="openWebsite('${projectsEnglish[projectId].githubPath}')">
                        <span class="github-span-mobile">GitHub</span>
                    </div>
                </div>
            </div>`;
}

/**
 * This function is used to render project data in english
 * @param {number} projectId - includes the project id from project list 
 * @returns - html div tag
 */
function getMobileOngoingProjectTemplateEnglish(projectId){
    return `<div class="mobile-project-content">
                <div class="head-content">
                    <span class="head-span">${projectsEnglish[projectId].title}</span>
                    <span class="tec-span">Technologies: 
                        ${projectsEnglish[projectId].tecText[0]}, ${projectsEnglish[projectId].tecText[1]}, ${projectsEnglish[projectId].tecText[2]}, 
                         ${projectsEnglish[projectId].tecText[3]}, ${projectsEnglish[projectId].tecText[4]}, ${projectsEnglish[projectId].tecText[5]}
                    </span>
                    <div class="image-container">
                        <div class="mobile-image-border-ongoing">
                            <img src="${projectsEnglish[projectId].imagePath}" alt="screen of project content">
                            <span>Comming soon...</span>
                        </div>
                    </div>
                </div>
                <ul class="project-list-content">
                    <li>
                        <div class="mobile-caption-box">
                            <span class="mobile-caption">${projectsEnglish[projectId].list.description}</span>
                        </div>
                    </li>
                    <span class="mobile-li-text">${projectsEnglish[projectId].list.content}</span>
                </ul>
            </div>`;
}