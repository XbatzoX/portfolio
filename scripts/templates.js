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
            </div>`
}