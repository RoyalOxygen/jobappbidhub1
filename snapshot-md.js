/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 5009
(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._Node = void 0;
// this is by value copy of the global Node
exports._Node = {
    /** node is an element. */
    ELEMENT_NODE: 1,
    ATTRIBUTE_NODE: 2,
    /** node is a Text node. */
    TEXT_NODE: 3,
    /** node is a CDATASection node. */
    CDATA_SECTION_NODE: 4,
    ENTITY_REFERENCE_NODE: 5,
    ENTITY_NODE: 6,
    /** node is a ProcessingInstruction node. */
    PROCESSING_INSTRUCTION_NODE: 7,
    /** node is a Comment node. */
    COMMENT_NODE: 8,
    /** node is a document. */
    DOCUMENT_NODE: 9,
    /** node is a doctype. */
    DOCUMENT_TYPE_NODE: 10,
    /** node is a DocumentFragment node. */
    DOCUMENT_FRAGMENT_NODE: 11,
    NOTATION_NODE: 12,
    /** Set when node and other are not in the same tree. */
    DOCUMENT_POSITION_DISCONNECTED: 0x01,
    /** Set when other is preceding node. */
    DOCUMENT_POSITION_PRECEDING: 0x02,
    /** Set when other is following node. */
    DOCUMENT_POSITION_FOLLOWING: 0x04,
    /** Set when other is an ancestor of node. */
    DOCUMENT_POSITION_CONTAINS: 0x08,
    /** Set when other is a descendant of node. */
    DOCUMENT_POSITION_CONTAINED_BY: 0x10,
    DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: 0x20,
};


/***/ },

/***/ 8560
(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isNot = exports.getMainContent = void 0;
exports.findInAST = findInAST;
exports.findAllInAST = findAllInAST;
const getMainContent = (markdownStr) => {
    if (markdownStr.includes('<-main->')) {
        const regex = /(?<=<-main->)[\s\S]*?(?=<\/-main->)/;
        const match = markdownStr.match(regex);
        return match?.[0] ?? '';
    }
    else {
        const removeSectionsRegex = /(<-nav->[\s\S]*?<\/-nav->)|(<-footer->[\s\S]*?<\/-footer->)|(<-header->[\s\S]*?<\/-header->)|(<-aside->[\s\S]*?<\/-aside->)/g;
        return markdownStr.replace(removeSectionsRegex, '');
    }
};
exports.getMainContent = getMainContent;
const isNot = (tPred) => (t) => !tPred(t);
exports.isNot = isNot;
const isString = (x) => typeof x === "string";
function findInAST(markdownElement, checker) {
    const loopCheck = (z) => {
        for (const element of z) {
            const found = findInAST(element, checker);
            if (found) {
                return found;
            }
        }
        return undefined;
    };
    if (Array.isArray(markdownElement)) {
        return loopCheck(markdownElement);
    }
    else {
        if (checker(markdownElement)) {
            return markdownElement;
        }
        switch (markdownElement.type) {
            case 'link':
                return loopCheck(markdownElement.content);
            case 'list':
                return loopCheck(markdownElement.items
                    .map(_ => _.content)
                    .flat());
            case 'table':
                return loopCheck(markdownElement.rows
                    .map(row => row.cells.map(_ => _.content)
                    .filter((0, exports.isNot)(isString)))
                    .flat());
            case 'blockquote':
            case 'semanticHtml':
                return loopCheck(markdownElement.content);
        }
        return undefined;
    }
}
function findAllInAST(markdownElement, checker) {
    const loopCheck = (z) => {
        let out = [];
        for (const element of z) {
            const found = findAllInAST(element, checker);
            out = [...out, ...found];
        }
        return out;
    };
    if (Array.isArray(markdownElement)) {
        return loopCheck(markdownElement);
    }
    else {
        if (checker(markdownElement)) {
            return [markdownElement];
        }
        switch (markdownElement.type) {
            case 'link':
                return loopCheck(markdownElement.content);
            case 'list':
                return loopCheck(markdownElement.items
                    .map(_ => _.content)
                    .flat());
            case 'table':
                return loopCheck(markdownElement.rows
                    .map(row => row.cells.map(_ => _.content)
                    .filter((0, exports.isNot)(isString)))
                    .flat());
            case 'blockquote':
            case 'semanticHtml':
                return loopCheck(markdownElement.content);
        }
        return [];
    }
}


/***/ },

/***/ 5520
(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.findMainContent = findMainContent;
exports.wrapMainContent = wrapMainContent;
exports.calculateScore = calculateScore;
const enableDebug = false;
const debugMessage = (message) => {
    if (enableDebug) {
        console.log(message);
    }
};
/**
 * Attempts to find the main content of a web page.
 * @param document The Document object to search.
 * @returns The Element containing the main content, or the body if no main content is found.
 */
function findMainContent(document) {
    debugMessage('Entering findMainContent function');
    const mainElement = document.querySelector('main') || document.querySelector('[role="main"]');
    if (mainElement) {
        debugMessage('Existing <main> element found');
        return mainElement;
    }
    debugMessage('No <main> element found. Detecting main content.');
    if (!document.body) {
        debugMessage('No body element found, returning document.documentElement');
        return document.documentElement;
    }
    return detectMainContent(document.body);
}
function wrapMainContent(mainContentElement, document) {
    if (mainContentElement.tagName.toLowerCase() !== 'main') {
        debugMessage('Wrapping main content in <main> element');
        const mainElement = document.createElement('main');
        mainContentElement.before(mainElement);
        mainElement.appendChild(mainContentElement);
        mainElement.id = 'detected-main-content';
        debugMessage('Main content wrapped successfully');
    }
    else {
        debugMessage('Main content already wrapped');
    }
}
function detectMainContent(rootElement) {
    const candidates = [];
    const minScore = 20;
    debugMessage(`Collecting candidates with minimum score: ${minScore}`);
    collectCandidates(rootElement, candidates, minScore);
    debugMessage(`Total candidates found: ${candidates.length}`);
    if (candidates.length === 0) {
        debugMessage('No suitable candidates found, returning root element');
        return rootElement;
    }
    candidates.sort((a, b) => calculateScore(b) - calculateScore(a));
    debugMessage('Candidates sorted by score');
    let bestIndependentCandidate = candidates[0];
    for (let i = 1; i < candidates.length; i++) {
        if (!candidates.some((otherCandidate, j) => j !== i && otherCandidate.contains(candidates[i]))) {
            if (calculateScore(candidates[i]) > calculateScore(bestIndependentCandidate)) {
                bestIndependentCandidate = candidates[i];
                debugMessage(`New best independent candidate found: ${elementToString(bestIndependentCandidate)}`);
            }
        }
    }
    debugMessage(`Final main content candidate: ${elementToString(bestIndependentCandidate)}`);
    return bestIndependentCandidate;
}
function elementToString(element) {
    if (!element) {
        return 'No element';
    }
    return `${element.tagName}#${element.id || 'no-id'}.${Array.from(element.classList).join('.')}`;
}
function collectCandidates(element, candidates, minScore) {
    const score = calculateScore(element);
    if (score >= minScore) {
        candidates.push(element);
        debugMessage(`Candidate found: ${elementToString(element)}, score: ${score}`);
    }
    Array.from(element.children).forEach(child => {
        collectCandidates(child, candidates, minScore);
    });
}
function calculateScore(element) {
    let score = 0;
    let scoreLog = [];
    // High impact attributes
    const highImpactAttributes = ['article', 'content', 'main-container', 'main', 'main-content'];
    highImpactAttributes.forEach(attr => {
        if (element.classList.contains(attr) || element.id === attr) {
            score += 10;
            scoreLog.push(`High impact attribute found: [${attr}] [${[...element.classList.values()].join(",")}], score increased by 10`);
        }
    });
    // High impact tags
    const highImpactTags = ['article', 'main', 'section'];
    if (highImpactTags.includes(element.tagName.toLowerCase())) {
        score += 5;
        scoreLog.push(`High impact tag found: [${element.tagName}], score increased by 5`);
    }
    // Paragraph count
    const paragraphCount = element.getElementsByTagName('p').length;
    const paragraphScore = Math.min(paragraphCount, 5);
    if (paragraphScore > 0) {
        score += paragraphScore;
        scoreLog.push(`Paragraph count: ${paragraphCount}, score increased by ${paragraphScore}`);
    }
    // Text content length
    const textContentLength = element.textContent?.trim().length || 0;
    if (textContentLength > 200) {
        const textScore = Math.min(Math.floor(textContentLength / 200), 5);
        score += textScore;
        scoreLog.push(`Text content length: ${textContentLength}, score increased by ${textScore}`);
    }
    // Link density
    const linkDensity = calculateLinkDensity(element);
    if (linkDensity < 0.3) {
        score += 5;
        scoreLog.push(`Link density: ${linkDensity.toFixed(2)}, score increased by 5`);
    }
    // Data attributes
    if (element.hasAttribute('data-main') || element.hasAttribute('data-content')) {
        score += 10;
        scoreLog.push('Data attribute for main content found, score increased by 10');
    }
    // Role attribute
    if (element.getAttribute('role')?.includes('main')) {
        score += 10;
        scoreLog.push('Role attribute indicating main content found, score increased by 10');
    }
    if (scoreLog.length > 0) {
        debugMessage(`Scoring for ${elementToString(element)}:`);
        scoreLog.forEach(log => debugMessage('  ' + log));
        debugMessage(`  Final score: ${score}`);
    }
    return score;
}
function calculateLinkDensity(element) {
    const linkLength = Array.from(element.getElementsByTagName('a'))
        .reduce((sum, link) => sum + (link.textContent?.length || 0), 0);
    const textLength = element.textContent?.length || 1; // Avoid division by zero
    return linkLength / textLength;
}


/***/ },

/***/ 2609
(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.htmlToMarkdownAST = htmlToMarkdownAST;
const ElementNode_1 = __webpack_require__(5009);
function htmlToMarkdownAST(element, options, indentLevel = 0) {
    let result = [];
    const debugLog = (message) => {
        if (options?.debug) {
            console.log(message);
        }
    };
    element.childNodes.forEach((childElement) => {
        const overriddenElementProcessing = options?.overrideElementProcessing?.(childElement, options, indentLevel);
        if (overriddenElementProcessing) {
            debugLog(`Element Processing Overridden: '${childElement.nodeType}'`);
            result.push(...overriddenElementProcessing);
        }
        else if (childElement.nodeType === ElementNode_1._Node.TEXT_NODE) {
            const textContent = escapeMarkdownCharacters(childElement.textContent?.trim() ?? '');
            if (textContent && !!childElement.textContent) {
                debugLog(`Text Node: '${textContent}'`);
                // preserve whitespaces when text childElement is not empty
                result.push({ type: 'text', content: childElement.textContent?.trim() });
            }
        }
        else if (childElement.nodeType === ElementNode_1._Node.ELEMENT_NODE) {
            const elem = childElement;
            if (/^h[1-6]$/i.test(elem.tagName)) {
                const level = parseInt(elem.tagName.substring(1));
                debugLog(`Heading ${level}`);
                result.push({
                    type: 'heading',
                    level,
                    content: htmlToMarkdownAST(elem, options) // Process child elements
                });
            }
            else if (elem.tagName.toLowerCase() === 'p') {
                debugLog("Paragraph");
                result.push(...htmlToMarkdownAST(elem, options));
                // Add a new line after the paragraph
                result.push({ type: 'text', content: '\n\n' });
            }
            else if (elem.tagName.toLowerCase() === 'a') {
                debugLog(`Link: '${elem.href}' with text '${elem.textContent}'`);
                // Check if the href is a data URL for an image
                if (typeof elem.href === 'string' && elem.href.startsWith("data:image")) {
                    // If it's a data URL for an image, skip this link
                    result.push({
                        type: 'link',
                        href: '-',
                        content: htmlToMarkdownAST(elem, options)
                    });
                }
                else {
                    // Process the link as usual
                    let href = elem.href;
                    if (typeof href === 'string') {
                        href = options?.websiteDomain && href.startsWith(options.websiteDomain) ?
                            href.substring(options.websiteDomain.length) : href;
                    }
                    else {
                        href = '#'; // Use a default value when href is not a string
                    }
                    // if all children are text,
                    if (Array.from(elem.childNodes).every(_ => _.nodeType === ElementNode_1._Node.TEXT_NODE)) {
                        result.push({
                            type: 'link',
                            href: href,
                            content: [{ type: 'text', content: elem.textContent?.trim() ?? '' }]
                        });
                    }
                    else {
                        result.push({
                            type: 'link',
                            href: href,
                            content: htmlToMarkdownAST(elem, options)
                        });
                    }
                }
            }
            else if (elem.tagName.toLowerCase() === 'img') {
                debugLog(`Image: src='${elem.src}', alt='${elem.alt}'`);
                if (elem.src?.startsWith("data:image")) {
                    result.push({
                        type: 'image',
                        src: '-',
                        alt: escapeMarkdownCharacters(elem.alt)
                    });
                }
                else {
                    const src = options?.websiteDomain && elem.src?.startsWith(options.websiteDomain) ?
                        elem.src?.substring(options.websiteDomain.length) :
                        elem.src;
                    result.push({ type: 'image', src, alt: escapeMarkdownCharacters(elem.alt) });
                }
            }
            else if (elem.tagName.toLowerCase() === 'video') {
                debugLog(`Video: src='${elem.src}', poster='${elem.poster}', controls='${elem.controls}'`);
                result.push({
                    type: 'video',
                    src: elem.src,
                    poster: escapeMarkdownCharacters(elem.poster),
                    controls: elem.controls
                });
            }
            else if (elem.tagName.toLowerCase() === 'ul' || elem.tagName.toLowerCase() === 'ol') {
                debugLog(`${elem.tagName.toLowerCase() === 'ul' ? 'Unordered' : 'Ordered'} List`);
                result.push({
                    type: 'list',
                    ordered: elem.tagName.toLowerCase() === 'ol',
                    items: Array.from(elem.children).map(li => ({
                        type: 'listItem',
                        content: htmlToMarkdownAST(li, options, indentLevel + 1)
                    }))
                });
            }
            else if (elem.tagName.toLowerCase() === 'br') {
                debugLog("Line Break");
                result.push({ type: 'text', content: '\n' });
            }
            else if (elem.tagName.toLowerCase() === 'table') {
                debugLog("Table");
                let colIds = [];
                if (options?.enableTableColumnTracking) {
                    // Generate unique column IDs
                    const headerCells = Array.from(elem.querySelectorAll('th, td'));
                    headerCells.forEach((_, index) => {
                        colIds.push(`col-${index}`);
                    });
                }
                const tableRows = Array.from(elem.querySelectorAll('tr'));
                const markdownTableRows = tableRows.map(row => {
                    let columnIndex = 0;
                    const cells = Array.from(row.querySelectorAll('th, td')).map((cell) => {
                        const colspan = parseInt(cell.getAttribute('colspan') || '1', 10);
                        const rowspan = parseInt(cell.getAttribute('rowspan') || '1', 10);
                        const cellNode = {
                            type: 'tableCell',
                            content: cell.nodeType === ElementNode_1._Node.TEXT_NODE
                                ? escapeMarkdownCharacters(cell.textContent?.trim() ?? '')
                                : htmlToMarkdownAST(cell, options, indentLevel + 1),
                            colId: colIds[columnIndex],
                            colspan: colspan > 1 ? colspan : undefined,
                            rowspan: rowspan > 1 ? rowspan : undefined
                        };
                        columnIndex += colspan;
                        return cellNode;
                    });
                    return { type: 'tableRow', cells };
                });
                if (markdownTableRows.length > 0) {
                    // Check if the first row contains header cells
                    const hasHeaders = tableRows[0].querySelector('th') !== null;
                    if (hasHeaders) {
                        // Create a header separator row
                        const headerSeparatorCells = Array.from(tableRows[0].querySelectorAll('th, td'))
                            .map(() => ({
                            type: 'tableCell',
                            content: '---',
                            colId: undefined,
                            colspan: undefined,
                            rowspan: undefined,
                        }));
                        const headerSeparatorRow = {
                            type: 'tableRow',
                            cells: headerSeparatorCells,
                        };
                        markdownTableRows.splice(1, 0, headerSeparatorRow);
                    }
                }
                result.push({ type: 'table', rows: markdownTableRows, colIds });
            }
            else if (elem.tagName.toLowerCase() === 'head' && !!options?.includeMetaData) {
                const node = {
                    type: 'meta',
                    content: {
                        standard: {},
                        openGraph: {},
                        twitter: {},
                    }
                };
                elem.querySelectorAll('title')
                    .forEach(titleElem => {
                    node.content.standard['title'] = escapeMarkdownCharacters(titleElem.text);
                });
                // Extract meta tags
                const metaTags = elem.querySelectorAll('meta');
                const nonSemanticTagNames = [
                    "viewport",
                    "referrer",
                    "Content-Security-Policy"
                ];
                metaTags.forEach(metaTag => {
                    const name = metaTag.getAttribute('name');
                    const property = metaTag.getAttribute('property');
                    const content = metaTag.getAttribute('content');
                    if (property && property.startsWith('og:') && content) {
                        if (options.includeMetaData === 'extended') {
                            node.content.openGraph[property.substring(3)] = content;
                        }
                    }
                    else if (name && name.startsWith('twitter:') && content) {
                        if (options.includeMetaData === 'extended') {
                            node.content.twitter[name.substring(8)] = content;
                        }
                    }
                    else if (name && !nonSemanticTagNames.includes(name) && content) {
                        node.content.standard[name] = content;
                    }
                });
                // Extract JSON-LD data
                if (options.includeMetaData === 'extended') {
                    const jsonLdData = [];
                    const jsonLDScripts = elem.querySelectorAll('script[type="application/ld+json"]');
                    jsonLDScripts.forEach(script => {
                        try {
                            const jsonContent = script.textContent;
                            if (jsonContent) {
                                const parsedData = JSON.parse(jsonContent);
                                jsonLdData.push(parsedData);
                            }
                        }
                        catch (error) {
                            console.error('Failed to parse JSON-LD', error);
                        }
                    });
                    node.content.jsonLd = jsonLdData;
                }
                result.push(node);
            }
            else {
                const content = escapeMarkdownCharacters(elem.textContent || '');
                switch (elem.tagName.toLowerCase()) {
                    case 'noscript':
                    case 'script':
                    case 'style':
                    case 'html':
                        // blackhole..
                        break;
                    case 'strong':
                    case 'b':
                        if (content) {
                            debugLog(`Bold: '${content}'`);
                            result.push({
                                type: 'bold',
                                content: htmlToMarkdownAST(elem, options, indentLevel + 1)
                            });
                        }
                        break;
                    case 'em':
                    case 'i':
                        if (content) {
                            debugLog(`Italic: '${content}'`);
                            result.push({
                                type: 'italic',
                                content: htmlToMarkdownAST(elem, options, indentLevel + 1)
                            });
                        }
                        break;
                    case 's':
                    case 'strike':
                        if (content) {
                            debugLog(`Strikethrough: '${content}'`);
                            result.push({
                                type: 'strikethrough',
                                content: htmlToMarkdownAST(elem, options, indentLevel + 1)
                            });
                        }
                        break;
                    case 'code':
                        if (content) {
                            // Handling inline code differently
                            const isCodeBlock = elem.parentNode && elem.parentNode.nodeName.toLowerCase() === 'pre';
                            debugLog(`${isCodeBlock ? 'Code Block' : 'Inline Code'}: '${content}'`);
                            const languageClass = elem.className?.split(" ").find(cls => cls.startsWith("language-"));
                            const language = languageClass ? languageClass.replace("language-", "") : "";
                            result.push({
                                type: 'code',
                                content: elem.textContent?.trim() ?? '',
                                language,
                                inline: !isCodeBlock
                            });
                        }
                        break;
                    case 'blockquote':
                        debugLog(`Blockquote`);
                        result.push({
                            type: 'blockquote',
                            content: htmlToMarkdownAST(elem, options)
                        });
                        break;
                    case 'article':
                    case 'aside':
                    case 'details':
                    case 'figcaption':
                    case 'figure':
                    case 'footer':
                    case 'header':
                    case 'main':
                    case 'mark':
                    case 'nav':
                    case 'section':
                    case 'summary':
                    case 'time':
                        debugLog(`Semantic HTML Element: '${elem.tagName}'`);
                        result.push({
                            type: 'semanticHtml',
                            htmlType: elem.tagName.toLowerCase(),
                            content: htmlToMarkdownAST(elem, options)
                        });
                        break;
                    default:
                        const unhandledElementProcessing = options?.processUnhandledElement?.(elem, options, indentLevel);
                        if (unhandledElementProcessing) {
                            debugLog(`Processing Unhandled Element: '${elem.tagName}'`);
                            result.push(...unhandledElementProcessing);
                        }
                        else {
                            debugLog(`Generic HTMLElement: '${elem.tagName}'`);
                            result.push(...htmlToMarkdownAST(elem, options, indentLevel + 1));
                        }
                        break;
                }
            }
        }
    });
    return result;
}
function escapeMarkdownCharacters(text, isInlineCode = false) {
    if (isInlineCode || !text?.trim()) {
        // In inline code, we don't escape any characters
        return text;
    }
    // First, replace special HTML characters with their entity equivalents
    let escapedText = text.replace(/&/g, '&amp;') // Replace & first
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
    // Then escape characters that have special meaning in Markdown
    escapedText = escapedText.replace(/([\\`*_{}[\]#+!|])/g, '\\$1');
    return escapedText;
}


/***/ },

/***/ 1510
(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.markdownASTToString = markdownASTToString;
const index_1 = __webpack_require__(2045);
function aggressiveTrim(str) {
    if (typeof str !== 'string')
        return '';
    return str.replace(/^[\s\u00A0\u200B]+|[\s\u00A0\u200B]+$/g, '');
}
// --- Metadata Rendering ---
function renderSimpleMetaObject(obj, indent = '') {
    if (!obj || Object.keys(obj).length === 0)
        return '';
    let metaString = '';
    Object.keys(obj).forEach(key => {
        const value = String(obj[key] ?? '');
        metaString += `${indent}${key}: "${value.replace(/"/g, '\\"')}"\n`;
    });
    return metaString;
}
function markdownMetaASTToString(nodes, options) {
    if (!options?.includeMetaData) {
        return '';
    }
    const metaNode = (0, index_1.findInMarkdownAST)(nodes, _ => _.type === 'meta');
    if (!metaNode) {
        return '---\n---\n\n';
    }
    let markdownString = '---\n';
    if (metaNode.content.standard) {
        markdownString += renderSimpleMetaObject(metaNode.content.standard);
    }
    if (options.includeMetaData === 'extended') {
        if (metaNode.content.openGraph && Object.keys(metaNode.content.openGraph).length > 0) {
            markdownString += 'openGraph:\n';
            markdownString += renderSimpleMetaObject(metaNode.content.openGraph, '  ');
        }
        if (metaNode.content.twitter && Object.keys(metaNode.content.twitter).length > 0) {
            markdownString += 'twitter:\n';
            markdownString += renderSimpleMetaObject(metaNode.content.twitter, '  ');
        }
        if (metaNode.content.jsonLd && metaNode.content.jsonLd.length > 0) {
            markdownString += 'schema:\n';
            metaNode.content.jsonLd.forEach(item => {
                if (!item)
                    return;
                const { '@context': _jldContext, '@type': jldType, ...semanticData } = item;
                markdownString += `  ${jldType ?? '(unknown type)'}:\n`;
                Object.keys(semanticData).forEach(key => {
                    const value = semanticData[key];
                    markdownString += `    ${key}: ${JSON.stringify(value ?? null)}\n`;
                });
            });
        }
    }
    markdownString += '---\n\n\n';
    return markdownString;
}
function processNodeContent(content, renderChildren, options, indentLevel) {
    if (typeof content === 'string') {
        return content;
    }
    if (Array.isArray(content)) {
        return renderChildren(content, options, indentLevel);
    }
    return '';
}
const nodeRenderers = {
    text: (node) => {
        return typeof node.content === 'string' ? node.content : '';
    },
    bold: (node, options, renderChildren, indentLevel) => {
        const contentString = processNodeContent(node.content, renderChildren, options, indentLevel);
        return `**${aggressiveTrim(contentString)}**`;
    },
    italic: (node, options, renderChildren, indentLevel) => {
        const contentString = processNodeContent(node.content, renderChildren, options, indentLevel);
        return `*${aggressiveTrim(contentString)}*`;
    },
    strikethrough: (node, options, renderChildren, indentLevel) => {
        const contentString = processNodeContent(node.content, renderChildren, options, indentLevel);
        return `~~${aggressiveTrim(contentString)}~~`;
    },
    link: (node, options, renderChildren, indentLevel) => {
        const linkNode = node;
        const contentString = processNodeContent(linkNode.content, renderChildren, options, indentLevel);
        const trimmedLinkContent = aggressiveTrim(contentString);
        const href = linkNode.href ? encodeURI(linkNode.href) : '';
        // Heuristic for using []() vs <a>: if content was simple text that got trimmed, or is just plain text.
        if (trimmedLinkContent &&
            ((Array.isArray(linkNode.content) && linkNode.content.length === 1 && linkNode.content[0].type === 'text' && linkNode.content[0].content === trimmedLinkContent) ||
                (typeof linkNode.content === 'string' && linkNode.content === trimmedLinkContent) ||
                (!Array.isArray(linkNode.content) && !trimmedLinkContent.includes('<') && !trimmedLinkContent.includes('\n')))) {
            return `[${trimmedLinkContent}](${href})`;
        }
        return `<a href="${href}">${trimmedLinkContent}</a>`;
    },
    heading: (node, options, renderChildren, indentLevel) => {
        const headingNode = node;
        const contentString = processNodeContent(headingNode.content, renderChildren, options, indentLevel);
        return `${'#'.repeat(headingNode.level)} ${contentString.trim()}\n\n`;
    },
    image: (node) => {
        const imageNode = node;
        const altText = aggressiveTrim(imageNode.alt);
        const srcText = imageNode.src ? encodeURI(imageNode.src) : '';
        return `![${altText}](${srcText})\n`;
    },
    list: (node, options, renderChildren, indentLevel) => {
        const listNode = node;
        let listString = '';
        const itemIndent = ' '.repeat(indentLevel * 2);
        (listNode.items || []).forEach((item, i) => {
            if (!item || !item.content)
                return;
            const listItemPrefix = listNode.ordered ? `${i + 1}.` : '-';
            const itemContentString = renderChildren(item.content, options, indentLevel + 1).trim();
            listString += `${itemIndent}${listItemPrefix} ${itemContentString}\n`;
        });
        return listString;
    },
    video: (node) => {
        const videoNode = node;
        let videoString = '';
        const videoSrc = videoNode.src ? encodeURI(videoNode.src) : '';
        videoString += `\n![Video](${videoSrc})\n`;
        if (videoNode.poster) {
            const posterSrc = typeof videoNode.poster === 'string' ? encodeURI(videoNode.poster) : '';
            videoString += `![Poster](${posterSrc})\n`;
        }
        if (videoNode.controls !== undefined) {
            videoString += `Controls: ${videoNode.controls}\n`;
        }
        return videoString;
    },
    table: (node, options, renderChildren, indentLevel) => {
        const tableNode = node;
        const rows = tableNode.rows || [];
        if (rows.length === 0)
            return '';
        const maxColumns = Math.max(0, ...rows.map(row => (row.cells || []).reduce((sum, cell) => sum + Math.max(1, cell?.colspan || 1), 0)));
        if (maxColumns === 0)
            return '';
        let tableString = '';
        rows.forEach((row, rowIndex) => {
            if (!row || !row.cells)
                return;
            let currentColumn = 0;
            let rowString = '';
            row.cells.forEach((cell) => {
                if (!cell)
                    return;
                let cellContent = processNodeContent(cell.content, renderChildren, options, indentLevel + 1).trim();
                cellContent = cellContent.replace(/\|/g, '\\|');
                if (cell.colId)
                    cellContent += ` <!-- ${cell.colId} -->`;
                const colspan = Math.max(1, cell.colspan || 1);
                const rowspan = Math.max(1, cell.rowspan || 1);
                if (colspan > 1)
                    cellContent += ` <!-- colspan: ${colspan} -->`;
                if (rowspan > 1)
                    cellContent += ` <!-- rowspan: ${rowspan} -->`;
                rowString += `| ${cellContent} `;
                currentColumn += colspan;
                for (let i = 1; i < colspan; i++) {
                    rowString += '| ';
                }
            });
            while (currentColumn < maxColumns) {
                rowString += '|  ';
                currentColumn++;
            }
            tableString += rowString + '|\n';
        });
        return tableString;
    },
    code: (node) => {
        const codeNode = node;
        const codeContent = codeNode.content || "";
        if (codeNode.inline) {
            return `\`${codeContent}\``;
        }
        else {
            return `\`\`\`${codeNode.language || ''}\n${codeContent}\n\`\`\`\n`;
        }
    },
    blockquote: (node, options, renderChildren, indentLevel) => {
        const rawBqContent = renderChildren(node.content, options, indentLevel);
        const processedBqContent = rawBqContent
            .trim()
            .split('\n')
            .map(line => `> ${line.trim()}`)
            .join('\n');
        if (processedBqContent.length > 0 && processedBqContent !== ">") {
            return processedBqContent + '\n';
        }
        return '> \n';
    },
    semanticHtml: (node, options, renderChildren, indentLevel) => {
        const htmlNode = node;
        const contentString = renderChildren(htmlNode.content, options, indentLevel);
        switch (htmlNode.htmlType) {
            case "article":
                return contentString;
            case "section":
                return `---\n\n${contentString}\n\n---\n`;
            case "summary":
            case "time":
            case "aside":
            case "nav":
            case "figcaption":
            case "main":
            case "mark":
            case "header":
            case "footer":
            case "details":
            case "figure":
                return `<!-- <${htmlNode.htmlType}> -->\n${contentString}\n<!-- </${htmlNode.htmlType}> -->\n`;
            default:
                // ignore
                return undefined;
        }
    },
    // 'meta' is handled by markdownMetaASTToString, not here.
    // 'custom' is handled by options.renderCustomNode in the main loop.
};
const INLINE_NODE_TYPES = new Set(['text', 'bold', 'italic', 'strikethrough', 'link', 'code']);
const BLOCK_NODE_TYPES = new Set(['heading', 'image', 'list', 'video', 'table', 'code', 'blockquote', 'semanticHtml']);
function markdownContentASTToStringRecursive(nodes, options, indentLevel = 0) {
    let markdownString = '';
    const renderChildren = (childNodes, childOptions = options, childIndent = indentLevel) => {
        if (typeof childNodes === 'string')
            return childNodes;
        if (!childNodes || childNodes.length === 0)
            return '';
        return markdownContentASTToStringRecursive(childNodes, childOptions, childIndent);
    };
    nodes.forEach((node, index) => {
        if (node.type === 'meta')
            return;
        const nodeRenderingOverride = options?.overrideNodeRenderer?.(node, options, indentLevel);
        if (nodeRenderingOverride !== undefined) {
            markdownString += nodeRenderingOverride;
            return;
        }
        let renderedNodeString;
        if (nodeRenderers[node.type]) {
            renderedNodeString = nodeRenderers[node.type]?.(node, options, renderChildren, indentLevel);
        }
        else if (node.type === 'custom' && options?.renderCustomNode) {
            renderedNodeString = options.renderCustomNode(node, options, indentLevel);
        }
        else {
            console.warn(`Unhandled Markdown AST node type: ${node.type}`);
            renderedNodeString = '';
        }
        if (renderedNodeString === undefined || renderedNodeString === null) {
            renderedNodeString = '';
        }
        // --- Whitespace and Newline Management ---
        const isCurrentNodeInline = INLINE_NODE_TYPES.has(node.type) && !(node.type === 'code' && !(node).inline);
        const isCurrentNodeBlock = BLOCK_NODE_TYPES.has(node.type) && !(node.type === 'code' && (node).inline);
        if (isCurrentNodeInline) {
            let addSpaceBeforeCurrentNode = false;
            if (markdownString.length > 0 && renderedNodeString.length > 0) {
                const lastCharOfPrevOutput = markdownString.slice(-1);
                const firstCharOfCurrentRenderedNode = renderedNodeString.charAt(0);
                const prevEndsWithSpace = /\s/.test(lastCharOfPrevOutput);
                const currentStartsWithSpace = /\s/.test(firstCharOfCurrentRenderedNode);
                // Punctuation that should not have a leading space if it's the start of the current node.
                const currentStartsWithClingingPunctuation = /^[.,!?;:)]/.test(firstCharOfCurrentRenderedNode);
                // Characters that the previous string might end with, that shouldn't have a following space.
                const prevEndsWithOpeningBracket = /[([]$/.test(lastCharOfPrevOutput);
                if (!prevEndsWithSpace &&
                    !currentStartsWithSpace &&
                    !currentStartsWithClingingPunctuation &&
                    !prevEndsWithOpeningBracket) {
                    addSpaceBeforeCurrentNode = true;
                }
            }
            if (addSpaceBeforeCurrentNode) {
                markdownString += ' ';
            }
            markdownString += renderedNodeString;
        }
        else if (isCurrentNodeBlock) {
            if (markdownString.length > 0 && !markdownString.endsWith('\n')) {
                markdownString += '\n';
            }
            if (renderedNodeString.length > 0 && markdownString.length > 0 && !markdownString.endsWith('\n\n') && !renderedNodeString.startsWith('\n')) {
                if (!markdownString.endsWith('\n'))
                    markdownString += '\n';
            }
            markdownString += renderedNodeString;
            if (renderedNodeString.length > 0 && index < nodes.length - 1) {
                const nextNode = nodes[index + 1];
                const isNextNodeBlock = BLOCK_NODE_TYPES.has(nextNode.type) && !(nextNode.type === 'code' && (nextNode).inline);
                if (isNextNodeBlock || (nextNode.type === 'code' && !(nextNode).inline)) {
                    if (!renderedNodeString.endsWith('\n\n')) {
                        if (!renderedNodeString.endsWith('\n')) {
                            markdownString += '\n\n';
                        }
                        else {
                            markdownString += '\n';
                        }
                    }
                }
                else if (!renderedNodeString.endsWith('\n')) {
                    markdownString += '\n';
                }
            }
        }
        else {
            markdownString += renderedNodeString;
        }
    });
    return markdownString;
}
// --- Main Export ---
function markdownASTToString(nodes, options, indentLevel = 0) {
    if (!Array.isArray(nodes)) {
        console.warn("markdownASTToString received non-array input for nodes:", nodes);
        return "";
    }
    const metaOutput = markdownMetaASTToString(nodes, options);
    const contentOutput = markdownContentASTToStringRecursive(nodes, options, indentLevel);
    if (!metaOutput && !contentOutput) {
        return "";
    }
    if (contentOutput) {
        return (metaOutput + contentOutput).trimEnd();
    }
    else {
        return metaOutput;
    }
}


/***/ },

/***/ 5600
(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.refifyUrls = refifyUrls;
const mediaSuffixes = ["jpeg", "jpg", "png", "gif", "bmp", "tiff", "tif", "svg",
    "webp", "ico", "avi", "mov", "mp4", "mkv", "flv", "wmv", "webm", "mpeg",
    "mpg", "mp3", "wav", "aac", "ogg", "flac", "m4a", "pdf", "doc", "docx",
    "ppt", "pptx", "xls", "xlsx", "txt", "css", "js", "xml", "json",
    "html", "htm"
];
const addRefPrefix = (prefix, prefixesToRefs) => {
    if (!prefixesToRefs[prefix]) {
        prefixesToRefs[prefix] = 'ref' + Object.values(prefixesToRefs).length;
    }
    return prefixesToRefs[prefix];
};
const processUrl = (url, prefixesToRefs) => {
    if (!url.startsWith('http')) {
        return url;
    }
    else {
        const mediaSuffix = url.split('.').slice(-1)[0];
        if (mediaSuffix && mediaSuffixes.includes(mediaSuffix)) {
            const parts = url.split('/'); // Split URL keeping the slash before text
            const prefix = parts.slice(0, -1).join('/'); // Get the prefix by removing last part
            const refPrefix = addRefPrefix(prefix, prefixesToRefs);
            return `${refPrefix}://${parts.slice(-1).join('')}`;
        }
        else {
            if (url.split('/').length > 4) {
                return addRefPrefix(url, prefixesToRefs);
            }
            else {
                return url;
            }
        }
    }
};
function refifyUrls(markdownElement, prefixesToRefs = {}) {
    if (Array.isArray(markdownElement)) {
        markdownElement.forEach(element => refifyUrls(element, prefixesToRefs));
    }
    else {
        switch (markdownElement.type) {
            case 'link':
                markdownElement.href = processUrl(markdownElement.href, prefixesToRefs);
                refifyUrls(markdownElement.content, prefixesToRefs);
                break;
            case 'image':
            case 'video':
                markdownElement.src = processUrl(markdownElement.src, prefixesToRefs);
                break;
            case 'list':
                markdownElement.items.forEach(item => item.content.forEach(_ => refifyUrls(_, prefixesToRefs)));
                break;
            case 'table':
                markdownElement.rows.forEach(row => row.cells.forEach(cell => typeof cell.content === 'string' ? null : refifyUrls(cell.content, prefixesToRefs)));
                break;
            case 'blockquote':
            case 'semanticHtml':
                refifyUrls(markdownElement.content, prefixesToRefs);
                break;
        }
    }
    return prefixesToRefs;
}


/***/ },

/***/ 2045
(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.wrapMainContent = exports.refifyUrls = exports.findMainContent = exports.markdownASTToString = exports.htmlToMarkdownAST = void 0;
exports.convertHtmlToMarkdown = convertHtmlToMarkdown;
exports.convertElementToMarkdown = convertElementToMarkdown;
exports.findInMarkdownAST = findInMarkdownAST;
exports.findAllInMarkdownAST = findAllInMarkdownAST;
const htmlToMarkdownAST_1 = __webpack_require__(2609);
Object.defineProperty(exports, "htmlToMarkdownAST", ({ enumerable: true, get: function () { return htmlToMarkdownAST_1.htmlToMarkdownAST; } }));
const markdownASTToString_1 = __webpack_require__(1510);
Object.defineProperty(exports, "markdownASTToString", ({ enumerable: true, get: function () { return markdownASTToString_1.markdownASTToString; } }));
const domUtils_1 = __webpack_require__(5520);
Object.defineProperty(exports, "findMainContent", ({ enumerable: true, get: function () { return domUtils_1.findMainContent; } }));
Object.defineProperty(exports, "wrapMainContent", ({ enumerable: true, get: function () { return domUtils_1.wrapMainContent; } }));
const urlUtils_1 = __webpack_require__(5600);
Object.defineProperty(exports, "refifyUrls", ({ enumerable: true, get: function () { return urlUtils_1.refifyUrls; } }));
const astUtils_1 = __webpack_require__(8560);
/**
 * Converts an HTML string to Markdown.
 * @param html The HTML string to convert.
 * @param options Conversion options.
 * @returns The converted Markdown string.
 */
function convertHtmlToMarkdown(html, options) {
    const parser = options?.overrideDOMParser ?? (typeof DOMParser !== 'undefined' ? new DOMParser() : null);
    if (!parser) {
        throw new Error('DOMParser is not available. Please provide an overrideDOMParser in options.');
    }
    const doc = parser.parseFromString(html, 'text/html');
    let element;
    if (options?.extractMainContent) {
        element = (0, domUtils_1.findMainContent)(doc);
        if (options.includeMetaData && !!doc.querySelector('head')?.innerHTML && !element.querySelector('head')) {
            // content container was found and extracted, re-attaching the head for meta-data extraction
            element = parser.parseFromString(`<html>${doc.head.outerHTML}${element.outerHTML}`, 'text/html').documentElement;
        }
    }
    else {
        // If there's a body, use it; otherwise, use the document element
        if (options?.includeMetaData && !!doc.querySelector('head')?.innerHTML) {
            element = doc.documentElement;
        }
        else {
            element = doc.body || doc.documentElement;
        }
    }
    return convertElementToMarkdown(element, options);
}
/**
 * Converts an HTML Element to Markdown.
 * @param element The HTML Element to convert.
 * @param options Conversion options.
 * @returns The converted Markdown string.
 */
function convertElementToMarkdown(element, options) {
    let ast = (0, htmlToMarkdownAST_1.htmlToMarkdownAST)(element, options);
    if (options?.refifyUrls) {
        options.urlMap = (0, urlUtils_1.refifyUrls)(ast);
    }
    return (0, markdownASTToString_1.markdownASTToString)(ast, options);
}
/**
 * Finds a node in the Markdown AST that matches the given predicate.
 * @param ast The Markdown AST to search.
 * @param predicate A function that returns true for the desired node.
 * @returns The first matching node, or undefined if not found.
 */
function findInMarkdownAST(ast, predicate) {
    return (0, astUtils_1.findInAST)(ast, predicate);
}
/**
 * Finds all nodes in the Markdown AST that match the given predicate.
 * @param ast The Markdown AST to search.
 * @param predicate A function that returns true for the desired nodes.
 * @returns An array of all matching nodes.
 */
function findAllInMarkdownAST(ast, predicate) {
    return (0, astUtils_1.findAllInAST)(ast, predicate);
}


/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// EXTERNAL MODULE: ../../node_modules/dom-to-semantic-markdown/dist/node/index.js
var node = __webpack_require__(2045);
;// ../../packages/extension-core/content/general/snapshot-md.js
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }


// ── snapshotFormHtml ─────────────────────────────────────────────────────────
// Lightweight per-frame FORM capture for the AI question detector (unknown-ATS
// auto-apply runs). The background's getAllFramesFormHtml() messages every frame
// by frameId — many ATSes render the application form inside an iframe — so this
// branch is co-located with snapshotPage in THIS file precisely because it is the
// general script registered with all_frames: true in every build's manifest.
//
// Why not the existing snapshots: snapshotPageHtml inlines computed styles and
// base64 images — multi-MB payloads unfit for an LLM prompt; snapshotPage's
// markdown loses the form structure entirely (selects/inputs/options vanish).
// Here we keep the raw DOM shape but strip everything that carries no form
// semantics, then cap the result so a pathological page can't blow the request
// budget (the background caps the stitched multi-frame total again at 400k).
var FORM_HTML_MAX_CHARS = 200000;
var captureFormHtml = function captureFormHtml() {
  // No body yet (document_start-era frame, about:blank) — nothing to capture.
  if (!document.body) return null;
  var clone = document.body.cloneNode(true);

  // Non-form content: executable, presentational, and media nodes. Iframes are
  // dropped because each frame is captured separately (the background stitches
  // them back together with <!-- frame: url --> markers).
  clone.querySelectorAll('script, style, link, noscript, svg, canvas, video, audio, iframe, img').forEach(function (node) {
    return node.remove();
  });

  // Hidden inputs are machine state (CSRF tokens, tracking ids, serialized form
  // blobs) — never applicant-facing questions, and often enormous.
  clone.querySelectorAll('input[type="hidden"]').forEach(function (node) {
    return node.remove();
  });

  // HTML comments: framework markers (<!--$-->, ko-comments, …) are noise, and a
  // stray comment could collide with the background's own <!-- frame: --> markers.
  var walker = document.createTreeWalker(clone, NodeFilter.SHOW_COMMENT);
  var comments = [];
  while (walker.nextNode()) comments.push(walker.currentNode);
  comments.forEach(function (node) {
    return node.remove();
  });

  // Attribute noise: inline styles and responsive image sets carry no form
  // semantics, and data: URIs (favicons, inlined fonts/images in any attribute)
  // can each be hundreds of kB of base64.
  clone.querySelectorAll('*').forEach(function (el) {
    el.removeAttribute('style');
    el.removeAttribute('srcset');
    for (var _i = 0, _arr = _toConsumableArray(el.attributes); _i < _arr.length; _i++) {
      var attr = _arr[_i];
      if (attr.value.startsWith('data:')) el.removeAttribute(attr.name);
    }
  });
  return "<!-- Document title: ".concat(document.title, " -->\n").concat(clone.outerHTML).slice(0, FORM_HTML_MAX_CHARS);
};
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  var messageType = request.message_type;
  if (messageType === 'snapshotPage') {
    var bodyMarkdown = (0,node.convertHtmlToMarkdown)(document.body.outerHTML);
    var fullMarkdown = "# Document title: ".concat(document.title, "\n\n").concat(bodyMarkdown);
    sendResponse(fullMarkdown);
  }
  if (messageType === 'snapshotFormHtml') {
    // Synchronous like snapshotPage above. Guarded like snapshotPageHtml: a
    // capture crash must never surface as an unhandled listener error — the
    // background treats a null/absent part as "this frame has nothing usable".
    try {
      sendResponse(captureFormHtml());
    } catch (error) {
      console.error('snapshotFormHtml failed:', (error === null || error === void 0 ? void 0 : error.message) || error);
      sendResponse(null);
    }
  }
  return false;
});
;// ./src/content/general/snapshot-md.js
// Moved to @bidhub/extension-core (shared with the autoapply extension).

/******/ })()
;