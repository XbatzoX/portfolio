function getProjectTemplate(projectId){
    return `<div class="content-box">
                <div class="left-side">
                    <ul class="description-list">
                        <li>
                            <div class="li-content">
                                <div class="caption-box">
                                    <span class="caption">${projects[projectId].list[0].description}</span>
                                    <span class="project-duration">Dauer: ${projects[projectId].duration}</span>
                                </div>
                                <span class="li-text">${projects[projectId].list[0].content}</span>
                            </div>
                        </li>
                        <li>
                            <div class="li-content">
                                <span class="caption">${projects[projectId].list[1].description}</span>
                                <span class="li-text">${projects[projectId].list[1].content}</span>
                            </div>
                        </li>
                        <li>
                            <div class="li-content">
                                <span class="caption">${projects[projectId].list[2].description}</span>
                                <span class="li-text">${projects[projectId].list[2].content}</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="right-side">
                    <div class="tec-box">
                        <span class="project-duration">Technologien</span>
                        <div class="tec-icon-box">
                            <img src="${projects[projectId].tecIcons[0]}">
                            <img src="${projects[projectId].tecIcons[1]}">
                            <img src="${projects[projectId].tecIcons[2]}">
                        </div>
                        <img src="${projects[projectId].imagePath}">
                        <div class="tec-ctrl-box">
                            <div id="live_test_0" class="live-test-btn">
                                <span>Live Test</span>
                            </div>
                            <div id="github_0" class="github-btn">
                                <span>GitHub</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
}