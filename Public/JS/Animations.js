document.addEventListener('DOMContentLoaded', () => {
    // Initialize all stop motion animations
    initStopMotionHero();
    initStopMotionAbout();
    initProjectStopMotion();
  
    // Add scroll-triggered animation effects
    initScrollAnimations();
  });
  
  // Hero Section Stop Motion Animation
  function initStopMotionHero() {
    const container = document.getElementById('stop-motion-hero');
    if (!container) return;
  
    // Create frames for the hero animation (developer coding)
    const frameCount = 12;
    const frames = [];
  
    // Create frame elements
    for (let i = 0; i < frameCount; i++) {
      const frame = document.createElement('div');
      frame.classList.add('frame');
      frame.style.backgroundColor = '#1a1a1a';
  
      // Create a different "frame" of a developer coding animation
      // We're simulating frames with HTML/CSS here
      const content = document.createElement('div');
      content.style.padding = '20px';
      content.style.height = '100%';
      content.style.display = 'flex';
      content.style.flexDirection = 'column';
      content.style.justifyContent = 'center';
      content.style.alignItems = 'center';
  
      // Code editor-like element
      const editor = document.createElement('div');
      editor.style.width = '80%';
      editor.style.height = '70%';
      editor.style.backgroundColor = '#0f0f0f';
      editor.style.borderRadius = '4px';
      editor.style.padding = '20px';
      editor.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
      editor.style.position = 'relative';
      editor.style.fontFamily = 'monospace';
      editor.style.color = '#f5f5f5';
      editor.style.fontSize = '14px';
      editor.style.overflow = 'hidden';
  
      // Add code lines with slightly different "typed" content for each frame
      const codeLines = [
        '<span style="color: #ff6b6b;">function</span> <span style="color: #4ecdc4;">createAnimation</span>() {',
        '  <span style="color: #ffd166;">const</span> frames = [];',
        '  ',
        '  <span style="color: #ff6b6b;">for</span> (<span style="color: #ffd166;">let</span> i = 0; i < frameCount; i++) {',
        '    <span style="color: #ff6b6b;">const</span> frame = <span style="color: #ff6b6b;">new</span> Frame();',
        '    frame.position = i * 10;',
        '    frames.push(frame);',
        '  }',
        '  ',
        '  <span style="color: #ff6b6b;">return</span> frames;',
        '}'
      ];
  
      // Modify code slightly for each frame to create "typing" effect
      let visibleLines = Math.min(codeLines.length, Math.floor(i * 1.5) + 3);
      let codeHtml = '';
  
      for (let j = 0; j < visibleLines; j++) {
        // For the last visible line, show only part of it based on the frame number
        if (j === visibleLines - 1 && i < frameCount - 3) {
          const partialLine = codeLines[j].substring(0, (i % 4) * 5 + (j * 3));
          codeHtml += `<div>${partialLine}</div>`;
        } else {
          codeHtml += `<div>${codeLines[j]}</div>`;
        }
      }
  
      editor.innerHTML = codeHtml;
  
      // Add cursor that blinks in different positions
      const cursor = document.createElement('span');
      cursor.style.position = 'absolute';
      cursor.style.backgroundColor = '#ff6b6b';
      cursor.style.width = '2px';
      cursor.style.height = '14px';
      cursor.style.display = i % 2 === 0 ? 'block' : 'none'; // Blinking effect
  
      // Position cursor at different locations based on frame
      const cursorPositions = [
        { top: '20px', left: '280px' },
        { top: '40px', left: '200px' },
        { top: '80px', left: '240px' },
        { top: '100px', left: '180px' },
        { top: '120px', left: '220px' },
        { top: '140px', left: '200px' }
      ];
  
      const pos = cursorPositions[i % cursorPositions.length];
      cursor.style.top = pos.top;
      cursor.style.left = pos.left;
  
      editor.appendChild(cursor);
      content.appendChild(editor);
      frame.appendChild(content);
      container.appendChild(frame);
      frames.push(frame);
    }
  
    // Animate the frames
    animateStopMotion(frames);
  }
  
  // About Section Stop Motion Animation
  function initStopMotionAbout() {
    const container = document.getElementById('stop-motion-about');
    if (!container) return;
  
    // Create frames for the about animation (abstract shapes or patterns)
    const frameCount = 8;
    const frames = [];
  
    // Create frame elements
    for (let i = 0; i < frameCount; i++) {
      const frame = document.createElement('div');
      frame.classList.add('frame');
      frame.style.backgroundColor = '#0f0f0f';
      frame.style.position = 'relative';
      frame.style.overflow = 'hidden';
  
      // Create abstract shapes that move slightly between frames
      const shapeCount = 5;
  
      for (let j = 0; j < shapeCount; j++) {
        const shape = document.createElement('div');
  
        // Alternate between different shape types
        if (j % 3 === 0) {
          // Circle
          shape.style.borderRadius = '50%';
          shape.style.width = `${50 + (i % 3) * 5}px`;
          shape.style.height = `${50 + (i % 3) * 5}px`;
          shape.style.backgroundColor = 'rgba(255, 107, 107, 0.7)'; // Primary color
        } else if (j % 3 === 1) {
          // Square
          shape.style.width = `${40 + (i % 3) * 5}px`;
          shape.style.height = `${40 + (i % 3) * 5}px`;
          shape.style.backgroundColor = 'rgba(78, 205, 196, 0.7)'; // Secondary color
          shape.style.transform = `rotate(${i * 5}deg)`;
        } else {
          // Triangle (using border trick)
          shape.style.width = '0';
          shape.style.height = '0';
          shape.style.borderLeft = `${30 + (i % 3) * 3}px solid transparent`;
          shape.style.borderRight = `${30 + (i % 3) * 3}px solid transparent`;
          shape.style.borderBottom = `${60 + (i % 3) * 6}px solid rgba(255, 209, 102, 0.7)`; // Accent color
        }
  
        // Position shapes differently in each frame
        const positions = [
          { top: '20%', left: '20%' },
          { top: '60%', left: '70%' },
          { top: '30%', left: '85%' },
          { top: '70%', left: '25%' },
          { top: '45%', left: '45%' }
        ];
  
        // Add subtle movement to each frame
        const basePos = positions[j];
        const topOffset = parseFloat(basePos.top) + (i % 2 === 0 ? i : -i) * 1.5;
        const leftOffset = parseFloat(basePos.left) + (i % 2 === 0 ? -i : i) * 1.5;
  
        shape.style.position = 'absolute';
        shape.style.top = `${topOffset}%`;
        shape.style.left = `${leftOffset}%`;
        shape.style.opacity = '0.7';
        shape.style.zIndex = j;
  
        frame.appendChild(shape);
      }
  
      container.appendChild(frame);
      frames.push(frame);
    }
  
    // Animate the frames
    animateStopMotion(frames);
  }
  
  // Projects Stop Motion Animation
  function initProjectStopMotion() {
    initProjectFrames('project1-frames', 'app-development');
    initProjectFrames('project2-frames', 'portfolio');
    initProjectFrames('project3-frames', 'task-manager');
  }
  
  function initProjectFrames(containerId, type) {
    const container = document.getElementById(containerId);
    if (!container) return;
  
    // Check if there's a static image
    const staticImage = container.querySelector('.project-static-image');
    if (staticImage) {
      // If we have a static image, we'll use it as the base and add hover effects
      // but won't generate the animation frames
  
      const projectCard = container.closest('.project-card');
      if (projectCard) {
        projectCard.addEventListener('mouseenter', () => {
          staticImage.style.transform = 'scale(1.05)';
        });
  
        projectCard.addEventListener('mouseleave', () => {
          staticImage.style.transform = 'scale(1)';
        });
      }
  
      return;
    }
  
    // If no static image exists, create animated frames as before
    const frameCount = 6;
    const frames = [];
  
    for (let i = 0; i < frameCount; i++) {
      const frame = document.createElement('div');
      frame.classList.add('frame');
      frame.style.backgroundColor = '#0d0d0d';
      frame.style.position = 'relative';
  
      // Different project types have different animations
      if (type === 'app-development') {
        // E-commerce platform animation
        createEcommerceFrame(frame, i);
      } else if (type === 'portfolio') {
        // Portfolio website animation
        createPortfolioFrame(frame, i);
      } else if (type === 'task-manager') {
        // Task manager animation
        createTaskManagerFrame(frame, i);
      }
  
      container.appendChild(frame);
      frames.push(frame);
    }
  
    // Add hover effect for stop motion on project cards
    const projectCard = container.closest('.project-card');
    if (projectCard) {
      let isPlaying = false;
      let currentFrame = 0;
      let animationInterval;
  
      projectCard.addEventListener('mouseenter', () => {
        isPlaying = true;
        clearInterval(animationInterval);
  
        animationInterval = setInterval(() => {
          if (!isPlaying) {
            clearInterval(animationInterval);
            return;
          }
  
          frames.forEach(f => f.classList.remove('active'));
          frames[currentFrame].classList.add('active');
  
          currentFrame = (currentFrame + 1) % frames.length;
        }, 150);
      });
  
      projectCard.addEventListener('mouseleave', () => {
        isPlaying = false;
        clearInterval(animationInterval);
  
        // Reset to first frame
        frames.forEach(f => f.classList.remove('active'));
        frames[0].classList.add('active');
      });
  
      // Show first frame by default
      frames[0].classList.add('active');
    } else {
      // If not in a project card, animate normally
      animateStopMotion(frames);
    }
  }
  
  // ... existing code ... (keep all code after initProjectFrames function)
  
  function createEcommerceFrame(frame, index) {
    // Create a simple e-commerce UI with slight changes between frames
    const content = document.createElement('div');
    content.style.padding = '15px';
    content.style.height = '100%';
  
    // Header
    const header = document.createElement('div');
    header.style.height = '30px';
    header.style.backgroundColor = '#ff6b6b';
    header.style.marginBottom = '10px';
  
    // Products grid
    const productsGrid = document.createElement('div');
    productsGrid.style.display = 'grid';
    productsGrid.style.gridTemplateColumns = 'repeat(3, 1fr)';
    productsGrid.style.gap = '10px';
  
    // Create product items with slight movement
    for (let i = 0; i < 6; i++) {
      const product = document.createElement('div');
      product.style.height = '50px';
      product.style.backgroundColor = i % 2 === 0 ? '#1a1a1a' : '#252525';
  
      // Add a "hover" effect on different products for different frames
      if (i === index % 6) {
        product.style.transform = 'translateY(-2px)';
        product.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
        product.style.border = '1px solid #ff6b6b';
      }
  
      productsGrid.appendChild(product);
    }
  
    content.appendChild(header);
    content.appendChild(productsGrid);
    frame.appendChild(content);
  }
  
  function createPortfolioFrame(frame, index) {
    // Create a portfolio website layout with animations
    const content = document.createElement('div');
    content.style.padding = '15px';
    content.style.height = '100%';
    content.style.background = 'linear-gradient(to right, #0f0f0f, #1a1a1a)';
  
    // Header
    const header = document.createElement('div');
    header.style.height = '20px';
    header.style.display = 'flex';
    header.style.justifyContent = 'space-between';
    header.style.marginBottom = '15px';
  
    // Logo
    const logo = document.createElement('div');
    logo.style.width = '50px';
    logo.style.height = '20px';
    logo.style.backgroundColor = '#ff6b6b';
  
    // Nav items
    const nav = document.createElement('div');
    nav.style.display = 'flex';
    nav.style.gap = '10px';
  
    for (let i = 0; i < 4; i++) {
      const navItem = document.createElement('div');
      navItem.style.width = '20px';
      navItem.style.height = '10px';
      navItem.style.backgroundColor = i === index % 4 ? '#ff6b6b' : '#333';
      nav.appendChild(navItem);
    }
  
    header.appendChild(logo);
    header.appendChild(nav);
  
    // Hero section with animated typing effect
    const hero = document.createElement('div');
    hero.style.height = '70px';
    hero.style.marginBottom = '15px';
    hero.style.position = 'relative';
  
    const heroText = document.createElement('div');
    heroText.style.position = 'absolute';
    heroText.style.top = '50%';
    heroText.style.transform = 'translateY(-50%)';
    heroText.style.color = '#fff';
    heroText.style.fontFamily = 'monospace';
  
    // Different text for each frame to create typing effect
    const fullText = "Hello I'm Mavandre | Web Developer";
    const visibleText = fullText.substring(0, Math.min(fullText.length, index * 5));
    heroText.textContent = visibleText;
  
    hero.appendChild(heroText);
  
    // Portfolio items
    const portfolio = document.createElement('div');
    portfolio.style.display = 'grid';
    portfolio.style.gridTemplateColumns = 'repeat(2, 1fr)';
    portfolio.style.gap = '10px';
  
    for (let i = 0; i < 4; i++) {
      const item = document.createElement('div');
      item.style.height = '30px';
      item.style.backgroundColor = '#252525';
  
      // Add a "hover" effect on different items for different frames
      if (i === index % 4) {
        item.style.transform = 'scale(1.05)';
        item.style.backgroundColor = '#333';
      }
  
      portfolio.appendChild(item);
    }
  
    content.appendChild(header);
    content.appendChild(hero);
    content.appendChild(portfolio);
    frame.appendChild(content);
  }
  
  function createTaskManagerFrame(frame, index) {
    // Create a task manager UI with animations
    const content = document.createElement('div');
    content.style.padding = '15px';
    content.style.height = '100%';
    content.style.background = '#1a1a1a';
  
    // App header
    const header = document.createElement('div');
    header.style.height = '25px';
    header.style.backgroundColor = '#4ecdc4';
    header.style.marginBottom = '15px';
    header.style.borderRadius = '4px';
  
    // Task columns
    const taskBoard = document.createElement('div');
    taskBoard.style.display = 'flex';
    taskBoard.style.gap = '10px';
    taskBoard.style.height = 'calc(100% - 40px)';
  
    const columns = ['To Do', 'In Progress', 'Done'];
  
    columns.forEach((col, colIndex) => {
      const column = document.createElement('div');
      column.style.flex = '1';
      column.style.backgroundColor = '#0f0f0f';
      column.style.borderRadius = '4px';
      column.style.padding = '8px';
  
      // Column header
      const colHeader = document.createElement('div');
      colHeader.style.height = '15px';
      colHeader.style.backgroundColor = '#333';
      colHeader.style.marginBottom = '10px';
      colHeader.style.borderRadius = '2px';
  
      column.appendChild(colHeader);
  
      // Add tasks
      const taskCount = 3;
      for (let i = 0; i < taskCount; i++) {
        const task = document.createElement('div');
        task.style.height = '20px';
        task.style.backgroundColor = '#252525';
        task.style.marginBottom = '8px';
        task.style.borderRadius = '2px';
  
        // For the animation, move a task between columns
        if (i === 1 && colIndex === index % 3) {
          task.style.backgroundColor = '#4ecdc4';
          task.style.transform = 'translateY(-2px)';
          task.style.boxShadow = '0 2px 4px rgba(0,0,0,0.2)';
        }
  
        column.appendChild(task);
      }
  
      taskBoard.appendChild(column);
    });
  
    content.appendChild(header);
    content.appendChild(taskBoard);
    frame.appendChild(content);
  }
  
  // General stop motion animation function
  function animateStopMotion(frames) {
    if (!frames.length) return;
  
    let currentFrame = 0;
  
    // Show first frame
    frames[currentFrame].classList.add('active');
  
    // Set interval to cycle through frames
    setInterval(() => {
      frames[currentFrame].classList.remove('active');
      currentFrame = (currentFrame + 1) % frames.length;
      frames[currentFrame].classList.add('active');
    }, 200); // 200ms between frames
  }
  
  // Scroll-triggered animations
  function initScrollAnimations() {
    // Animate skills progress bars on scroll
    const skillItems = document.querySelectorAll('.skill-item');
  
    function checkSkillsInView() {
      skillItems.forEach(skill => {
        const rect = skill.getBoundingClientRect();
        const inView = rect.top <= window.innerHeight * 0.8 && rect.bottom >= 0;
  
        if (inView) {
          const progress = skill.querySelector('.skill-progress');
          if (progress && !progress.classList.contains('animated')) {
            progress.classList.add('animated');
          }
        }
      });
    }
  
    // Initial check
    checkSkillsInView();
  
    // Check on scroll
    window.addEventListener('scroll', checkSkillsInView);
  }
