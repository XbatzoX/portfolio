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
                    <div class="live-test-btn-mobile">
                        <span class="live-test-span-mobile">Live test</span>
                    </div>
                    <div class="github-btn-mobile" onclick="openWebsite('${projects[projectId].githubPath}')">
                        <span class="github-span-mobile">GitHub</span>
                    </div>
                </div>
            </div>`;
}