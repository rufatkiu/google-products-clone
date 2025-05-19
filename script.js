// 团队成员数据
const teamMembers = [
    {
        name: "张伟",
        position: "产品经理",
        description: "负责产品规划和需求分析",
        detail: `
            <h3>张伟 - 产品经理</h3>
            <p>5年产品管理经验，擅长需求分析和产品设计。</p>
            <p><strong>专业技能：</strong></p>
            <ul>
                <li>用户需求分析</li>
                <li>产品原型设计</li>
                <li>项目管理</li>
            </ul>
        `
    },
    {
        name: "李娜",
        position: "前端开发",
        description: "负责界面设计和功能实现",
        detail: `
            <h3>李娜 - 前端开发</h3>
            <p>3年前端开发经验，精通现代前端技术栈。</p>
            <p><strong>技术栈：</strong></p>
            <ul>
                <li>HTML5/CSS3</li>
                <li>JavaScript/TypeScript</li>
                <li>React/Vue</li>
            </ul>
        `
    },
    {
        name: "王强",
        position: "后端开发",
        description: "负责数据处理和API开发",
        detail: `
            <h3>王强 - 后端开发</h3>
            <p>4年后端开发经验，专注高性能服务架构。</p>
            <p><strong>技术栈：</strong></p>
            <ul>
                <li>Node.js/Java</li>
                <li>MySQL/MongoDB</li>
                <li>微服务架构</li>
            </ul>
        `
    }
];

// 示例产品数据
const products = [
    {
        name: "搜索",
        description: "Google 搜索可以帮助您找到最相关的信息",
        icon: "images/search.png",
        link: "https://www.google.com",
        detail: `
            <h3>Google 搜索</h3>
            <p>全球最流行的搜索引擎，帮助您快速找到所需信息。</p>
            <ul>
                <li>智能搜索建议</li>
                <li>即时答案卡片</li>
                <li>语音搜索支持</li>
                <li>多语言翻译</li>
            </ul>
            <p><strong>特色功能：</strong></p>
            <p>知识图谱、计算器、单位转换、实时股票信息等。</p>
        `
    },
    {
        name: "地图",
        description: "探索世界地图和获取路线指引",
        icon: "images/maps.png",
        link: "https://maps.google.com",
        detail: `
            <h3>Google 地图</h3>
            <p>全球领先的数字地图服务，提供精准导航和位置信息。</p>
            <ul>
                <li>实时路况信息</li>
                <li>街景视图</li>
                <li>公交路线规划</li>
                <li>地点评价和照片</li>
            </ul>
        `
    },
    {
        name: "Gmail",
        description: "安全、智能且易于使用的电子邮件服务",
        icon: "images/gmail.png",
        link: "https://mail.google.com",
        detail: `
            <h3>Gmail</h3>
            <p>Google的免费电子邮件服务，提供15GB存储空间。</p>
            <ul>
                <li>智能分类(主要、社交、促销)</li>
                <li>强大的垃圾邮件过滤</li>
                <li>集成Google Meet</li>
                <li>支持多账户管理</li>
            </ul>
        `
    },
    {
        name: "云端硬盘",
        description: "安全地存储、访问和共享您的文件",
        icon: "images/drive.png",
        link: "https://drive.google.com",
        detail: `
            <h3>Google 云端硬盘</h3>
            <p>云存储服务，可安全存储文件并在任何设备上访问。</p>
            <ul>
                <li>15GB免费存储空间</li>
                <li>实时协作编辑</li>
                <li>版本历史记录</li>
                <li>强大的搜索功能</li>
            </ul>
        `
    },
    {
        name: "相册",
        description: "存储、整理和分享您的照片",
        icon: "images/photos.png",
        link: "https://photos.google.com",
        detail: `
            <h3>Google 相册</h3>
            <p>智能照片存储和管理服务，提供强大的搜索和组织功能。</p>
            <ul>
                <li>无限高质量照片存储</li>
                <li>自动分类和标签</li>
                <li>智能相册和动画</li>
                <li>人脸和物体识别</li>
            </ul>
        `
    },
    {
        name: "翻译",
        description: "快速翻译文字、网页和文档",
        icon: "images/translate.png",
        link: "https://translate.google.com",
        detail: `
            <h3>Google 翻译</h3>
            <p>支持100多种语言的免费翻译服务。</p>
            <ul>
                <li>文本翻译</li>
                <li>网站即时翻译</li>
                <li>文档翻译</li>
                <li>实时对话翻译</li>
            </ul>
        `
    },
    {
        name: "日历",
        description: "轻松安排时间并与他人协调",
        icon: "images/calendar.png",
        link: "https://calendar.google.com",
        detail: `
            <h3>Google 日历</h3>
            <p>智能日程管理工具，帮助您高效安排时间。</p>
            <ul>
                <li>多日历视图</li>
                <li>活动提醒</li>
                <li>会议室预订</li>
                <li>与Gmail集成</li>
            </ul>
        `
    },
    {
        name: "Meet",
        description: "高质量的视频会议解决方案",
        icon: "images/meet.png",
        link: "https://meet.google.com",
        detail: `
            <h3>Google Meet</h3>
            <p>安全可靠的高质量视频会议解决方案。</p>
            <ul>
                <li>高清视频和音频</li>
                <li>实时字幕</li>
                <li>屏幕共享</li>
                <li>支持大规模会议</li>
            </ul>
        `
    },
    {
        name: "Chrome",
        description: "快速、安全且易于使用的网络浏览器",
        icon: "images/chrome.png",
        link: "https://www.google.com/chrome",
        detail: `
            <h3>Google Chrome</h3>
            <p>快速、简单且安全的网络浏览器。</p>
            <ul>
                <li>同步书签和历史记录</li>
                <li>强大的扩展库</li>
                <li>内置翻译功能</li>
                <li>隐身浏览模式</li>
            </ul>
        `
    },
    {
        name: "Play 商店",
        description: "发现数百万款应用和游戏",
        icon: "images/play.png",
        link: "https://play.google.com",
        detail: `
            <h3>Google Play 商店</h3>
            <p>Android设备的官方应用商店。</p>
            <ul>
                <li>数百万款应用和游戏</li>
                <li>书籍、电影和音乐</li>
                <li>家庭共享功能</li>
                <li>定期特惠和免费内容</li>
            </ul>
        `
    },
    {
        name: "YouTube",
        description: "观看、分享和上传视频",
        icon: "images/youtube.png",
        link: "https://www.youtube.com",
        detail: `
            <h3>YouTube</h3>
            <p>全球最大的视频分享平台。</p>
            <ul>
                <li>海量视频内容</li>
                <li>个性化推荐</li>
                <li>创作者社区</li>
                <li>YouTube Premium无广告体验</li>
            </ul>
        `
    },
    {
        name: "新闻",
        description: "全面、个性化的新闻体验",
        icon: "images/news.png",
        link: "https://news.google.com",
        detail: `
            <h3>Google 新闻</h3>
            <p>个性化新闻聚合服务，提供全面的新闻覆盖。</p>
            <ul>
                <li>定制新闻源</li>
                <li>本地新闻</li>
                <li>事实核查功能</li>
                <li>支持离线阅读</li>
            </ul>
        `
    }
];

// DOM元素
const productsGrid = document.getElementById('productsGrid');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

// 获取模态窗口元素
const modal = document.getElementById('productModal');
const modalProductName = document.getElementById('modalProductName');
const modalProductDetail = document.getElementById('modalProductDetail');
const productLink = document.getElementById('productLink');
const closeBtn = document.querySelector('.close');

// 渲染产品卡片
function renderProducts(productsToRender) {
    productsGrid.innerHTML = '';
    
    productsToRender.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-icon">
                <img src="${product.icon}" alt="${product.name}图标" onerror="this.parentElement.textContent='${product.name[0]}'">
            </div>
            <h3 class="product-name">${product.name}</h3>
            <p class="product-desc">${product.description}</p>
            <div class="product-actions">
                <span class="product-link">了解更多 →</span>
                <a href="${product.link}" target="_blank" class="go-now-btn">立即前往</a>
            </div>
        `;
        
        // 只给"了解更多"添加点击事件
        const learnMore = productCard.querySelector('.product-link');
        learnMore.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            openModal(product);
        });
        
        productsGrid.appendChild(productCard);
    });
}

// 打开模态窗口
function openModal(product) {
    modal.style.opacity = 0;
    modal.style.display = 'block';
    modal.style.transform = 'translateY(20px)';
    
    modalProductName.textContent = product.name;
    modalProductDetail.innerHTML = product.detail;
    productLink.href = product.link;
    
    // 动画效果
    setTimeout(() => {
        modal.style.opacity = 1;
        modal.style.transform = 'translateY(0)';
    }, 10);
}

// 滚动动画
function animateOnScroll() {
    const elements = document.querySelectorAll('.product-card, .team-member');
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.style.opacity = 1;
            el.style.transform = 'translateY(0)';
        }
    });
}

// 初始化滚动动画
document.querySelectorAll('.product-card, .team-member').forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)';
});

// 监听滚动事件
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// 关闭模态窗口
function closeModal() {
    modal.style.display = 'none';
}

// 点击关闭按钮
closeBtn.addEventListener('click', closeModal);

// 点击模态窗口外部关闭
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// 绑定团队成员详情按钮事件
document.addEventListener('DOMContentLoaded', function() {
    const detailBtns = document.querySelectorAll('.member-detail-btn');
    detailBtns.forEach((btn, index) => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const member = teamMembers[index];
            modal.classList.add('team-modal'); // 添加专属类
            modalProductName.textContent = `${member.name} - ${member.position}`;
            modalProductDetail.innerHTML = member.detail;
            productLink.style.display = 'none'; // 隐藏官网按钮
            modal.style.display = 'block';
        });
    });
});

// 恢复官网按钮显示并移除团队样式
closeBtn.addEventListener('click', () => {
    modal.classList.remove('team-modal');
    productLink.style.display = 'block';
});

// 搜索功能
function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) || 
        product.description.toLowerCase().includes(searchTerm)
    );
    renderProducts(filteredProducts);
}

// 事件监听
searchButton.addEventListener('click', handleSearch);
searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        handleSearch();
    }
});

// 初始渲染
renderProducts(products);