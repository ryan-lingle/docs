(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{125:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(1),o=n(9),r=(n(0),n(169)),i={id:"building-an-extension",title:"Building an Extension",sidebar_label:"Building an Extension"},s={id:"extensions/building-an-extension",title:"Building an Extension",description:"In this section, we'll talk about building **components**, which are a type of extension related to user interface elements that can replace or be appended to areas of the Standard Notes app. They allow us to do cool things like custom editors, nested folders, tag autocomplete, and custom extension bars in the editor pane.",source:"@site/docs/extensions/building-an-extension.md",permalink:"/newdocs/docs/extensions/building-an-extension",editUrl:"https://github.com/standardnotes/newdocs/edit/master/docs/extensions/building-an-extension.md",sidebar_label:"Building an Extension",sidebar:"someSidebar",previous:{title:"Intro to Extensions",permalink:"/newdocs/docs/extensions/intro"},next:{title:"Local Setup",permalink:"/newdocs/docs/extensions/local-setup"}},l=[{value:"Setting up the project",id:"setting-up-the-project",children:[]},{value:"Installing in Standard Notes",id:"installing-in-standard-notes",children:[]},{value:"Writing the App",id:"writing-the-app",children:[]},{value:"Available Areas",id:"available-areas",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],c={rightToc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"In this section, we'll talk about building ",Object(r.b)("strong",{parentName:"p"},"components"),", which are a type of extension related to user interface elements that can replace or be appended to areas of the Standard Notes app. They allow us to do cool things like custom editors, nested folders, tag autocomplete, and custom extension bars in the editor pane."),Object(r.b)("p",null,"Building a component is easily done using the JavaScript-based ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/sn-extensions/components-api"}),"Component Bridge library"),'. All you have to do is build a single-page web app using any framework you\'d like (plain, Angular, React, etc.), then use our component "bridge" to handle interactions between Standard Notes and your extension, for example, to read or save data.'),Object(r.b)("h2",{id:"setting-up-the-project"},"Setting up the project"),Object(r.b)("p",null,"In this example, we'll use our blank-slate ReactJS template to build a utility bar that counts and displays the number of words in the current note."),Object(r.b)("p",null,"(The ReactJS template makes it easy to get started. You can also create a project from scratch that utilizes the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/sn-extensions/components-api"}),"Components Bridge library"),".)"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Clone the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/sn-extensions/react-blank-slate"}),"blank-slate")," project from GitHub:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"git clone https://github.com/sn-extensions/react-blank-slate.git\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Build the project:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"cd react-blank-slate\nnpm install\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Start the local web server to host the app."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"    ``` bash\n    npm run start\n")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),""))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"In the command output from above, note the port number used. By default, it will probably be port 8080 if it's available. Open ",Object(r.b)("inlineCode",{parentName:"p"},"localhost:8080"),' in your browser. You should see the text "Component is ready" on the page.'))),Object(r.b)("h2",{id:"installing-in-standard-notes"},"Installing in Standard Notes"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"In the ",Object(r.b)("inlineCode",{parentName:"p"},"app")," folder, you will find a file called ",Object(r.b)("inlineCode",{parentName:"p"},"ext.json"),". This file instructs Standard Notes on how to install your extension. After having run the last step from the previous section (",Object(r.b)("inlineCode",{parentName:"p"},"npm run start"),"), you should have a localhost endpoint running.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"In your browser, open ",Object(r.b)("inlineCode",{parentName:"p"},"http://localhost:8080/ext.json"),", and ensure that the output matches the file contents of the ext.json file. Most importantly, if your dev server is running on a different port, make sure to update the ",Object(r.b)("inlineCode",{parentName:"p"},"url")," property of the JSON file to reflect the correct value.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"In the ",Object(r.b)("strong",{parentName:"p"},"Standard Notes")," desktop application (browser may not work for this), click ",Object(r.b)("strong",{parentName:"p"},"Extensions")," in the lower left corner of the app, click ",Object(r.b)("strong",{parentName:"p"},"Import Extension")," in the bottom right of the ",Object(r.b)("strong",{parentName:"p"},"Extensions")," window, and input your ext.json location: ",Object(r.b)("inlineCode",{parentName:"p"},"http://localhost:8080/ext.json"),". Then press enter.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"In the same window, find your installed extension, then press ",Object(r.b)("strong",{parentName:"p"},"Activate")," to run it.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},'You should now see "Blank Slate" at the bottom left of your notes. Clicking on it should raise a little window which displays "Your component is ready". If you try in your browser, it is possible that the window instead remains white. This is most likely due to your browser blocking Mixed Content page. Search online for how to enable it for your browser.'))),Object(r.b)("p",null,"More detailed instructions on setting up your local environment can be found in the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/extensions/local-setup"}),"Local Setup tutorial"),"."),Object(r.b)("h2",{id:"writing-the-app"},"Writing the App"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},'In order to count the number of words in a note, the component needs access to the "working note", or the note the user is currently editing. In ',Object(r.b)("inlineCode",{parentName:"p"},"app/lib/BridgeManager.js"),", uncomment the relevant parts of the permissions so it looks like this:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'var permissions = [\n    {\n        name: "stream-context-item"\n    }\n]\n'))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Uncomment the function ",Object(r.b)("inlineCode",{parentName:"p"},"streamContextItem")," so it looks like this:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"this.componentManager.streamContextItem((item) => {\n    this.note = item;\n    this.notifyObserversOfUpdate();\n})\n")),Object(r.b)("p",{parentName:"li"},"Whenever a change is made to the working note, the block in that function will be called automatically.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"In ",Object(r.b)("inlineCode",{parentName:"p"},"app/components/Home.js"),", create a function called ",Object(r.b)("inlineCode",{parentName:"p"},"analyzeNote")," that will count the number of words in the note's text:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'    ``` javascript\n    analyzeNote() {\n        var s = this.state.note.content.text;\n        s = s.replace(/(^\\s*)|(\\s*$)/gi,"");//exclude  start and end white-space\n        s = s.replace(/[ ]{2,}/gi," ");//2 or more space to 1\n        s = s.replace(/\\n /,"\\n"); // exclude newline with a start spacing\n        let wordCount = s.split(\' \').length;\n        this.setState({wordCount: wordCount});\n')),Object(r.b)("p",{parentName:"li"},"}"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"    ```\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"In the constructor of the Home class, call ",Object(r.b)("inlineCode",{parentName:"p"},"analyzeNote")," in the BridgeManager updateObserver so that it looks like this:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"BridgeManager.get().addUpdateObserver(() => {\n    this.setState({note: BridgeManager.get().getNote()});\n    this.analyzeNote();\n})\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"In the ",Object(r.b)("inlineCode",{parentName:"p"},"render")," function, add the following inside the first ",Object(r.b)("inlineCode",{parentName:"p"},"div")," of the ",Object(r.b)("inlineCode",{parentName:"p"},"{this.state.note}")," conditional:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),"<p>Number of words: <strong>{this.state.wordCount}</strong></p>\n")))),Object(r.b)("p",null,"Save all changes, then reload the entire Standard Notes web page. You should now see your word count update live as you type."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Important:")," The dev server auto-reloads the extension window inside Standard Notes, and by doing so, destroys the bridge connection between Standard Notes and the extension. Whenever you make a change, it's best to reload the entire Standard Notes window via Ctrl/Cmd + R in either the web or desktop app."),Object(r.b)("hr",null),Object(r.b)("p",null,"If you'd like to see the finished product, switch to the ",Object(r.b)("inlineCode",{parentName:"p"},"word-count")," branch:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"git checkout word-count\n")),Object(r.b)("h2",{id:"available-areas"},"Available Areas"),Object(r.b)("p",null,"Areas tell Standard Notes where to display a particular component. The current list of available areas are:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Key"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"tags-list")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"replaces the tags pane with a custom component. We use this for the Folders component.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"note-tags")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"replaces the editor pane's tags area with a custom component. We use this for autocomplete tags.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"editor-stack")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"adds custom-sized components in a stack in the editor pane. This does not replace any native modules but simply adds layers on top of the editor pane. We use this for the Action Bar and GitHub Push components.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"editor-editor")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"replaces the plain text editor with a custom editor. We use this for all of our editors, including Markdown, Code, and Plus.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"themes")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"replaces the default css styles with a custom set of styles.")))),Object(r.b)("h2",{id:"next-steps"},"Next Steps"),Object(r.b)("p",null,"There are an unlimited number of things you can build with components that do anything from nested folders in the tags pane and autocomplete in the editor pane, to pushing notes to GitHub or WordPress."),Object(r.b)("p",null,"To see how we built ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://standardnotes.org/extensions"}),"our own components"),", study the source code ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/sn-extensions"}),"available here"),"."),Object(r.b)("p",null,"For questions on development, ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://forum.standardnotes.org"}),"post in the forum")," or ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://standardnotes.org/slack"}),"join our Slack"),"."),Object(r.b)("p",null,"If you'd like to support Standard Notes and use our secure hosting to install all the components we have to offer, consider purchasing the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://standardnotes.org/extended"}),"Extended subscription"),"."))}p.isMDXComponent=!0},169:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},b=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=p(n),u=a,m=b["".concat(i,".").concat(u)]||b[u]||d[u]||r;return n?o.a.createElement(m,s({ref:t},c,{components:n})):o.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);