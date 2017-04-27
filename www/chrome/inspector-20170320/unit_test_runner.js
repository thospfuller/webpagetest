var allDescriptors=[{"dependencies":["ui","platform","common","cm"],"extensions":[{"className":"TextEditor.CodeMirrorUtils.TokenizerFactory","type":"@Common.TokenizerFactory"},{"className":"TextEditor.CodeMirrorTextEditorFactory","type":"@UI.TextEditorFactory"}],"name":"text_editor","skip_compilation":["acorn/acorn.js","../cm_web_modes/css.js","../cm_web_modes/javascript.js","../cm_web_modes/xml.js","../cm_web_modes/htmlmixed.js","../cm_web_modes/htmlembedded.js"]},{"dependencies":["ui"],"name":"inline_editor","scripts":["inline_editor_module.js"]},{"dependencies":["common","test_runner","ui"],"name":"shell"},{"name":"test_runner"},{"skip_compilation":["codemirror.js","multiplex.js","matchbrackets.js","closebrackets.js","markselection.js","comment.js","overlay.js","activeline.js"],"name":"cm"},{"dependencies":["ui","diff"],"extensions":[{"className":"QuickOpen.CommandMenu.ShowActionDelegate","bindings":[{"platform":"windows,linux","shortcut":"Ctrl+Shift+P"},{"platform":"mac","shortcut":"Meta+Shift+P"}],"type":"@UI.ActionDelegate","actionId":"commandMenu.show"}],"name":"quick_open","scripts":["quick_open_module.js"]},{"dependencies":["text_editor"],"extensions":[{"className":"CmModes.DefaultCodeMirrorMimeMode","mimeTypes":["text/x-csrc","text/x-c","text/x-chdr","text/x-c++src","text/x-c++hdr","text/x-java","text/x-csharp","text/x-scala","x-shader/x-vertex","x-shader/x-fragment"],"type":"@TextEditor.CodeMirrorMimeMode","fileName":"clike.js"},{"className":"CmModes.DefaultCodeMirrorMimeMode","mimeTypes":["text/x-coffeescript"],"type":"@TextEditor.CodeMirrorMimeMode","fileName":"coffeescript.js"},{"className":"CmModes.DefaultCodeMirrorMimeMode","mimeTypes":["application/x-httpd-php","application/x-httpd-php-open","text/x-php"],"dependencies":["clike.js"],"type":"@TextEditor.CodeMirrorMimeMode","fileName":"php.js"},{"className":"CmModes.DefaultCodeMirrorMimeMode","mimeTypes":["text/x-python","text/x-cython"],"type":"@TextEditor.CodeMirrorMimeMode","fileName":"python.js"},{"className":"CmModes.DefaultCodeMirrorMimeMode","mimeTypes":["text/x-sh"],"type":"@TextEditor.CodeMirrorMimeMode","fileName":"shell.js"},{"className":"CmModes.DefaultCodeMirrorMimeMode","mimeTypes":["text/x-livescript"],"type":"@TextEditor.CodeMirrorMimeMode","fileName":"livescript.js"},{"className":"CmModes.DefaultCodeMirrorMimeMode","mimeTypes":["text/x-clojure"],"type":"@TextEditor.CodeMirrorMimeMode","fileName":"clojure.js"},{"className":"CmModes.DefaultCodeMirrorMimeMode","mimeTypes":["text/jsx"],"type":"@TextEditor.CodeMirrorMimeMode","fileName":"jsx.js"},{"className":"CmModes.DefaultCodeMirrorMimeMode","mimeTypes":["text/x-styl"],"type":"@TextEditor.CodeMirrorMimeMode","fileName":"stylus.js"}],"name":"cm_modes"},{"dependencies":[],"name":"platform"},{"dependencies":["ui"],"name":"data_grid","scripts":["data_grid_module.js"]},{"dependencies":["platform","dom_extension","common","host"],"name":"ui"},{"dependencies":["platform"],"name":"common"},{"dependencies":["common","host","platform"],"name":"workspace"},{"dependencies":["common","platform"],"name":"host"},{"skip_compilation":["diff_match_patch.js"],"dependencies":["common"],"name":"diff"},{"dependencies":["platform"],"name":"dom_extension"}];var applicationDescriptor;var _loadedScripts={};for(var k of[]){}
(function(){var baseUrl=self.location?self.location.origin+self.location.pathname:'';self._importScriptPathPrefix=baseUrl.substring(0,baseUrl.lastIndexOf('/')+1);})();var Runtime=class{constructor(descriptors){this._modules=[];this._modulesMap={};this._extensions=[];this._cachedTypeClasses={};this._descriptorsMap={};for(var i=0;i<descriptors.length;++i)
this._registerModule(descriptors[i]);}
static loadResourcePromise(url){return new Promise(load);function load(fulfill,reject){var xhr=new XMLHttpRequest();xhr.open('GET',url,true);xhr.onreadystatechange=onreadystatechange;function onreadystatechange(e){if(xhr.readyState!==XMLHttpRequest.DONE)
return;if([0,200,304].indexOf(xhr.status)===-1)
reject(new Error('While loading from url '+url+' server responded with a status of '+xhr.status));else
fulfill(e.target.response);}
xhr.send(null);}}
static normalizePath(path){if(path.indexOf('..')===-1&&path.indexOf('.')===-1)
return path;var normalizedSegments=[];var segments=path.split('/');for(var i=0;i<segments.length;i++){var segment=segments[i];if(segment==='.')
continue;else if(segment==='..')
normalizedSegments.pop();else if(segment)
normalizedSegments.push(segment);}
var normalizedPath=normalizedSegments.join('/');if(normalizedPath[normalizedPath.length-1]==='/')
return normalizedPath;if(path[0]==='/'&&normalizedPath)
normalizedPath='/'+normalizedPath;if((path[path.length-1]==='/')||(segments[segments.length-1]==='.')||(segments[segments.length-1]==='..'))
normalizedPath=normalizedPath+'/';return normalizedPath;}
static _loadScriptsPromise(scriptNames,base){var promises=[];var urls=[];var sources=new Array(scriptNames.length);var scriptToEval=0;for(var i=0;i<scriptNames.length;++i){var scriptName=scriptNames[i];var sourceURL=(base||self._importScriptPathPrefix)+scriptName;var schemaIndex=sourceURL.indexOf('://')+3;var pathIndex=sourceURL.indexOf('/',schemaIndex);if(pathIndex===-1)
pathIndex=sourceURL.length;sourceURL=sourceURL.substring(0,pathIndex)+Runtime.normalizePath(sourceURL.substring(pathIndex));if(_loadedScripts[sourceURL])
continue;urls.push(sourceURL);promises.push(Runtime.loadResourcePromise(sourceURL).then(scriptSourceLoaded.bind(null,i),scriptSourceLoaded.bind(null,i,undefined)));}
return Promise.all(promises).then(undefined);function scriptSourceLoaded(scriptNumber,scriptSource){sources[scriptNumber]=scriptSource||'';while(typeof sources[scriptToEval]!=='undefined'){evaluateScript(urls[scriptToEval],sources[scriptToEval]);++scriptToEval;}}
function evaluateScript(sourceURL,scriptSource){_loadedScripts[sourceURL]=true;if(!scriptSource){console.error('Empty response arrived for script \''+sourceURL+'\'');return;}
self.eval(scriptSource+'\n//# sourceURL='+sourceURL);}}
static _loadResourceIntoCache(url,appendSourceURL){return Runtime.loadResourcePromise(url).then(cacheResource.bind(this,url),cacheResource.bind(this,url,undefined));function cacheResource(path,content){if(!content){console.error('Failed to load resource: '+path);return;}
var sourceURL=appendSourceURL?Runtime.resolveSourceURL(path):'';Runtime.cachedResources[path]=content+sourceURL;}}
static startApplication(appName){console.timeStamp('Runtime.startApplication');var allDescriptorsByName={};for(var i=0;i<allDescriptors.length;++i){var d=allDescriptors[i];allDescriptorsByName[d['name']]=d;}
var applicationPromise;if(applicationDescriptor)
applicationPromise=Promise.resolve(applicationDescriptor);else
applicationPromise=Runtime.loadResourcePromise(appName+'.json').then(JSON.parse.bind(JSON));return applicationPromise.then(parseModuleDescriptors);function parseModuleDescriptors(appDescriptor){var configuration=appDescriptor.modules;var moduleJSONPromises=[];var coreModuleNames=[];for(var i=0;i<configuration.length;++i){var descriptor=configuration[i];var name=descriptor['name'];var moduleJSON=allDescriptorsByName[name];if(moduleJSON)
moduleJSONPromises.push(Promise.resolve(moduleJSON));else
moduleJSONPromises.push(Runtime.loadResourcePromise(name+'/module.json').then(JSON.parse.bind(JSON)));if(descriptor['type']==='autostart')
coreModuleNames.push(name);}
return Promise.all(moduleJSONPromises).then(instantiateRuntime);function instantiateRuntime(moduleDescriptors){for(var i=0;i<moduleDescriptors.length;++i){moduleDescriptors[i].name=configuration[i]['name'];moduleDescriptors[i].condition=configuration[i]['condition'];moduleDescriptors[i].remote=configuration[i]['type']==='remote';}
self.runtime=new Runtime(moduleDescriptors);if(coreModuleNames)
return(self.runtime._loadAutoStartModules(coreModuleNames));return Promise.resolve();}}}
static startWorker(appName){return Runtime.startApplication(appName).then(sendWorkerReady);function sendWorkerReady(){self.postMessage('workerReady');}}
static startSharedWorker(appName){var startPromise=Runtime.startApplication(appName);self.onconnect=function(event){var newPort=(event.ports[0]);startPromise.then(sendWorkerReadyAndContinue);function sendWorkerReadyAndContinue(){newPort.postMessage('workerReady');if(Runtime._sharedWorkerNewPortCallback)
Runtime._sharedWorkerNewPortCallback.call(null,newPort);else
Runtime._sharedWorkerConnectedPorts.push(newPort);}};}
static setSharedWorkerNewPortCallback(callback){Runtime._sharedWorkerNewPortCallback=callback;while(Runtime._sharedWorkerConnectedPorts.length){var port=Runtime._sharedWorkerConnectedPorts.shift();callback.call(null,port);}}
static queryParam(name){return Runtime._queryParamsObject[name]||null;}
static queryParamsString(){return location.search;}
static _experimentsSetting(){try{return(JSON.parse(self.localStorage&&self.localStorage['experiments']?self.localStorage['experiments']:'{}'));}catch(e){console.error('Failed to parse localStorage[\'experiments\']');return{};}}
static _assert(value,message){if(value)
return;Runtime._originalAssert.call(Runtime._console,value,message+' '+new Error().stack);}
static setPlatform(platform){Runtime._platform=platform;}
static _isDescriptorEnabled(descriptor){var activatorExperiment=descriptor['experiment'];if(activatorExperiment==='*')
return Runtime.experiments.supportEnabled();if(activatorExperiment&&activatorExperiment.startsWith('!')&&Runtime.experiments.isEnabled(activatorExperiment.substring(1)))
return false;if(activatorExperiment&&!activatorExperiment.startsWith('!')&&!Runtime.experiments.isEnabled(activatorExperiment))
return false;var condition=descriptor['condition'];if(condition&&!condition.startsWith('!')&&!Runtime.queryParam(condition))
return false;if(condition&&condition.startsWith('!')&&Runtime.queryParam(condition.substring(1)))
return false;return true;}
static resolveSourceURL(path){var sourceURL=self.location.href;if(self.location.search)
sourceURL=sourceURL.replace(self.location.search,'');sourceURL=sourceURL.substring(0,sourceURL.lastIndexOf('/')+1)+path;return'\n/*# sourceURL='+sourceURL+' */';}
useTestBase(){Runtime._remoteBase='http://localhost:8000/inspector-sources/';if(Runtime.queryParam('debugFrontend'))
Runtime._remoteBase+='debug/';}
_registerModule(descriptor){var module=new Runtime.Module(this,descriptor);this._modules.push(module);this._modulesMap[descriptor['name']]=module;}
loadModulePromise(moduleName){return this._modulesMap[moduleName]._loadPromise();}
_loadAutoStartModules(moduleNames){var promises=[];for(var i=0;i<moduleNames.length;++i)
promises.push(this.loadModulePromise(moduleNames[i]));return Promise.all(promises);}
_checkExtensionApplicability(extension,predicate){if(!predicate)
return false;var contextTypes=extension.descriptor().contextTypes;if(!contextTypes)
return true;for(var i=0;i<contextTypes.length;++i){var contextType=this._resolve(contextTypes[i]);var isMatching=!!contextType&&predicate(contextType);if(isMatching)
return true;}
return false;}
isExtensionApplicableToContext(extension,context){if(!context)
return true;return this._checkExtensionApplicability(extension,isInstanceOf);function isInstanceOf(targetType){return context instanceof targetType;}}
isExtensionApplicableToContextTypes(extension,currentContextTypes){if(!extension.descriptor().contextTypes)
return true;return this._checkExtensionApplicability(extension,currentContextTypes?isContextTypeKnown:null);function isContextTypeKnown(targetType){return currentContextTypes.has(targetType);}}
extensions(type,context,sortByTitle){return this._extensions.filter(filter).sort(sortByTitle?titleComparator:orderComparator);function filter(extension){if(extension._type!==type&&extension._typeClass()!==type)
return false;if(!extension.enabled())
return false;return!context||extension.isApplicable(context);}
function orderComparator(extension1,extension2){var order1=extension1.descriptor()['order']||0;var order2=extension2.descriptor()['order']||0;return order1-order2;}
function titleComparator(extension1,extension2){var title1=extension1.title()||'';var title2=extension2.title()||'';return title1.localeCompare(title2);}}
extension(type,context){return this.extensions(type,context)[0]||null;}
allInstances(type,context){return Promise.all(this.extensions(type,context).map(extension=>extension.instance()));}
_resolve(typeName){if(!this._cachedTypeClasses[typeName]){var path=typeName.split('.');var object=self;for(var i=0;object&&(i<path.length);++i)
object=object[path[i]];if(object)
this._cachedTypeClasses[typeName]=(object);}
return this._cachedTypeClasses[typeName]||null;}
sharedInstance(constructorFunction){if(Runtime._instanceSymbol in constructorFunction)
return constructorFunction[Runtime._instanceSymbol];var instance=new constructorFunction();constructorFunction[Runtime._instanceSymbol]=instance;return instance;}};Runtime._queryParamsObject={__proto__:null};Runtime._instanceSymbol=Symbol('instance');Runtime._extensionSymbol=Symbol('extension');Runtime.cachedResources={__proto__:null};Runtime._sharedWorkerNewPortCallback=null;Runtime._sharedWorkerConnectedPorts=[];Runtime._console=console;Runtime._originalAssert=console.assert;Runtime._platform='';Runtime.ModuleDescriptor=class{constructor(){this.name;this.extensions;this.dependencies;this.scripts;this.condition;this.remote;}};Runtime.ExtensionDescriptor=class{constructor(){this.type;this.className;this.factoryName;this.contextTypes;}};Runtime.Module=class{constructor(manager,descriptor){this._manager=manager;this._descriptor=descriptor;this._name=descriptor.name;this._extensions=[];this._extensionsByClassName=new Map();var extensions=(descriptor.extensions);for(var i=0;extensions&&i<extensions.length;++i){var extension=new Runtime.Extension(this,extensions[i]);this._manager._extensions.push(extension);this._extensions.push(extension);}
this._loadedForTest=false;}
name(){return this._name;}
enabled(){return Runtime._isDescriptorEnabled(this._descriptor);}
resource(name){var fullName=this._name+'/'+name;var content=Runtime.cachedResources[fullName];if(!content)
throw new Error(fullName+' not preloaded. Check module.json');return content;}
_loadPromise(){if(!this.enabled())
return Promise.reject(new Error('Module '+this._name+' is not enabled'));if(this._pendingLoadPromise)
return this._pendingLoadPromise;var dependencies=this._descriptor.dependencies;var dependencyPromises=[];for(var i=0;dependencies&&i<dependencies.length;++i)
dependencyPromises.push(this._manager._modulesMap[dependencies[i]]._loadPromise());this._pendingLoadPromise=Promise.all(dependencyPromises).then(this._loadResources.bind(this)).then(this._loadScripts.bind(this)).then(()=>this._loadedForTest=true);return this._pendingLoadPromise;}
_loadResources(){var resources=this._descriptor['resources'];if(!resources||!resources.length)
return Promise.resolve();var promises=[];for(var i=0;i<resources.length;++i){var url=this._modularizeURL(resources[i]);promises.push(Runtime._loadResourceIntoCache(url,true));}
return Promise.all(promises).then(undefined);}
_loadScripts(){if(!this._descriptor.scripts||!this._descriptor.scripts.length)
return Promise.resolve();const specialCases={'sdk':'SDK','ui':'UI','object_ui':'ObjectUI','perf_ui':'PerfUI',};var namespace=specialCases[this._name]||this._name.split('_').map(a=>a.substring(0,1).toUpperCase()+a.substring(1)).join('');self[namespace]=self[namespace]||{};return Runtime._loadScriptsPromise(this._descriptor.scripts.map(this._modularizeURL,this),this._remoteBase());}
_modularizeURL(resourceName){return Runtime.normalizePath(this._name+'/'+resourceName);}
_remoteBase(){return!Runtime.queryParam('debugFrontend')&&this._descriptor.remote&&Runtime._remoteBase||undefined;}
substituteURL(value){var base=this._remoteBase()||'';return value.replace(/@url\(([^\)]*?)\)/g,convertURL.bind(this));function convertURL(match,url){return base+this._modularizeURL(url);}}};Runtime.Extension=class{constructor(module,descriptor){this._module=module;this._descriptor=descriptor;this._type=descriptor.type;this._hasTypeClass=this._type.charAt(0)==='@';this._className=descriptor.className||null;this._factoryName=descriptor.factoryName||null;}
descriptor(){return this._descriptor;}
module(){return this._module;}
enabled(){return this._module.enabled()&&Runtime._isDescriptorEnabled(this.descriptor());}
_typeClass(){if(!this._hasTypeClass)
return null;return this._module._manager._resolve(this._type.substring(1));}
isApplicable(context){return this._module._manager.isExtensionApplicableToContext(this,context);}
instance(){return this._module._loadPromise().then(this._createInstance.bind(this));}
_createInstance(){var className=this._className||this._factoryName;if(!className)
throw new Error('Could not instantiate extension with no class');var constructorFunction=self.eval((className));if(!(constructorFunction instanceof Function))
throw new Error('Could not instantiate: '+className);if(this._className)
return this._module._manager.sharedInstance(constructorFunction);return new constructorFunction(this);}
title(){return this._descriptor['title-'+Runtime._platform]||this._descriptor['title'];}
hasContextType(contextType){var contextTypes=this.descriptor().contextTypes;if(!contextTypes)
return false;for(var i=0;i<contextTypes.length;++i){if(contextType===this._module._manager._resolve(contextTypes[i]))
return true;}
return false;}};Runtime.ExperimentsSupport=class{constructor(){this._supportEnabled=Runtime.queryParam('experiments')!==null;this._experiments=[];this._experimentNames={};this._enabledTransiently={};}
allConfigurableExperiments(){var result=[];for(var i=0;i<this._experiments.length;i++){var experiment=this._experiments[i];if(!this._enabledTransiently[experiment.name])
result.push(experiment);}
return result;}
supportEnabled(){return this._supportEnabled;}
_setExperimentsSetting(value){if(!self.localStorage)
return;self.localStorage['experiments']=JSON.stringify(value);}
register(experimentName,experimentTitle,hidden){Runtime._assert(!this._experimentNames[experimentName],'Duplicate registration of experiment '+experimentName);this._experimentNames[experimentName]=true;this._experiments.push(new Runtime.Experiment(this,experimentName,experimentTitle,!!hidden));}
isEnabled(experimentName){this._checkExperiment(experimentName);if(this._enabledTransiently[experimentName])
return true;if(!this.supportEnabled())
return false;return!!Runtime._experimentsSetting()[experimentName];}
setEnabled(experimentName,enabled){this._checkExperiment(experimentName);var experimentsSetting=Runtime._experimentsSetting();experimentsSetting[experimentName]=enabled;this._setExperimentsSetting(experimentsSetting);}
setDefaultExperiments(experimentNames){for(var i=0;i<experimentNames.length;++i){this._checkExperiment(experimentNames[i]);this._enabledTransiently[experimentNames[i]]=true;}}
enableForTest(experimentName){this._checkExperiment(experimentName);this._enabledTransiently[experimentName]=true;}
clearForTest(){this._experiments=[];this._experimentNames={};this._enabledTransiently={};}
cleanUpStaleExperiments(){var experimentsSetting=Runtime._experimentsSetting();var cleanedUpExperimentSetting={};for(var i=0;i<this._experiments.length;++i){var experimentName=this._experiments[i].name;if(experimentsSetting[experimentName])
cleanedUpExperimentSetting[experimentName]=true;}
this._setExperimentsSetting(cleanedUpExperimentSetting);}
_checkExperiment(experimentName){Runtime._assert(this._experimentNames[experimentName],'Unknown experiment '+experimentName);}};Runtime.Experiment=class{constructor(experiments,name,title,hidden){this.name=name;this.title=title;this.hidden=hidden;this._experiments=experiments;}
isEnabled(){return this._experiments.isEnabled(this.name);}
setEnabled(enabled){this._experiments.setEnabled(this.name,enabled);}};{(function parseQueryParameters(){var queryParams=Runtime.queryParamsString();if(!queryParams)
return;var params=queryParams.substring(1).split('&');for(var i=0;i<params.length;++i){var pair=params[i].split('=');var name=pair.shift();Runtime._queryParamsObject[name]=pair.join('=');}})();}
Runtime.experiments=new Runtime.ExperimentsSupport();Runtime._remoteBase=Runtime.queryParam('remoteBase');{(function validateRemoteBase(){var remoteBaseRegexp=/^https:\/\/chrome-devtools-frontend\.appspot\.com\/serve_file\/@[0-9a-zA-Z]+\/?$/;if(Runtime._remoteBase&&!remoteBaseRegexp.test(Runtime._remoteBase))
Runtime._remoteBase=null;})();}
function ServicePort(){}
ServicePort.prototype={setHandlers(messageHandler,closeHandler){},send(message){},close(){}};var runtime;self['Platform']=self['Platform']||{};var ArrayLike;function mod(m,n){return((m%n)+n)%n;}
String.prototype.findAll=function(string){var matches=[];var i=this.indexOf(string);while(i!==-1){matches.push(i);i=this.indexOf(string,i+string.length);}
return matches;};String.prototype.reverse=function(){return this.split('').reverse().join('');};String.prototype.replaceControlCharacters=function(){return this.replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u0080-\u009f]/g,'�');};String.prototype.isWhitespace=function(){return/^\s*$/.test(this);};String.prototype.computeLineEndings=function(){var endings=this.findAll('\n');endings.push(this.length);return endings;};String.prototype.escapeCharacters=function(chars){var foundChar=false;for(var i=0;i<chars.length;++i){if(this.indexOf(chars.charAt(i))!==-1){foundChar=true;break;}}
if(!foundChar)
return String(this);var result='';for(var i=0;i<this.length;++i){if(chars.indexOf(this.charAt(i))!==-1)
result+='\\';result+=this.charAt(i);}
return result;};String.regexSpecialCharacters=function(){return'^[]{}()\\.^$*+?|-,';};String.prototype.escapeForRegExp=function(){return this.escapeCharacters(String.regexSpecialCharacters());};String.prototype.escapeHTML=function(){return this.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');};String.prototype.unescapeHTML=function(){return this.replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&#58;/g,':').replace(/&quot;/g,'"').replace(/&#60;/g,'<').replace(/&#62;/g,'>').replace(/&amp;/g,'&');};String.prototype.collapseWhitespace=function(){return this.replace(/[\s\xA0]+/g,' ');};String.prototype.trimMiddle=function(maxLength){if(this.length<=maxLength)
return String(this);var leftHalf=maxLength>>1;var rightHalf=maxLength-leftHalf-1;if(this.codePointAt(this.length-rightHalf-1)>=0x10000){--rightHalf;++leftHalf;}
if(leftHalf>0&&this.codePointAt(leftHalf-1)>=0x10000)
--leftHalf;return this.substr(0,leftHalf)+'\u2026'+this.substr(this.length-rightHalf,rightHalf);};String.prototype.trimEnd=function(maxLength){if(this.length<=maxLength)
return String(this);return this.substr(0,maxLength-1)+'\u2026';};String.prototype.trimURL=function(baseURLDomain){var result=this.replace(/^(https|http|file):\/\//i,'');if(baseURLDomain){if(result.toLowerCase().startsWith(baseURLDomain.toLowerCase()))
result=result.substr(baseURLDomain.length);}
return result;};String.prototype.toTitleCase=function(){return this.substring(0,1).toUpperCase()+this.substring(1);};String.prototype.compareTo=function(other){if(this>other)
return 1;if(this<other)
return-1;return 0;};String.prototype.removeURLFragment=function(){var fragmentIndex=this.indexOf('#');if(fragmentIndex===-1)
fragmentIndex=this.length;return this.substring(0,fragmentIndex);};String.hashCode=function(string){if(!string)
return 0;var p=((1<<30)*4-5);var z=0x5033d967;var z2=0x59d2f15d;var s=0;var zi=1;for(var i=0;i<string.length;i++){var xi=string.charCodeAt(i)*z2;s=(s+zi*xi)%p;zi=(zi*z)%p;}
s=(s+zi*(p-1))%p;return Math.abs(s|0);};String.isDigitAt=function(string,index){var c=string.charCodeAt(index);return(48<=c&&c<=57);};String.prototype.toBase64=function(){function encodeBits(b){return b<26?b+65:b<52?b+71:b<62?b-4:b===62?43:b===63?47:65;}
var encoder=new TextEncoder();var data=encoder.encode(this.toString());var n=data.length;var encoded='';if(n===0)
return encoded;var shift;var v=0;for(var i=0;i<n;i++){shift=i%3;v|=data[i]<<(16>>>shift&24);if(shift===2){encoded+=String.fromCharCode(encodeBits(v>>>18&63),encodeBits(v>>>12&63),encodeBits(v>>>6&63),encodeBits(v&63));v=0;}}
if(shift===0)
encoded+=String.fromCharCode(encodeBits(v>>>18&63),encodeBits(v>>>12&63),61,61);else if(shift===1)
encoded+=String.fromCharCode(encodeBits(v>>>18&63),encodeBits(v>>>12&63),encodeBits(v>>>6&63),61);return encoded;};String.naturalOrderComparator=function(a,b){var chunk=/^\d+|^\D+/;var chunka,chunkb,anum,bnum;while(1){if(a){if(!b)
return 1;}else{if(b)
return-1;else
return 0;}
chunka=a.match(chunk)[0];chunkb=b.match(chunk)[0];anum=!isNaN(chunka);bnum=!isNaN(chunkb);if(anum&&!bnum)
return-1;if(bnum&&!anum)
return 1;if(anum&&bnum){var diff=chunka-chunkb;if(diff)
return diff;if(chunka.length!==chunkb.length){if(!+chunka&&!+chunkb)
return chunka.length-chunkb.length;else
return chunkb.length-chunka.length;}}else if(chunka!==chunkb){return(chunka<chunkb)?-1:1;}
a=a.substring(chunka.length);b=b.substring(chunkb.length);}};String.caseInsensetiveComparator=function(a,b){a=a.toUpperCase();b=b.toUpperCase();if(a===b)
return 0;return a>b?1:-1;};Number.constrain=function(num,min,max){if(num<min)
num=min;else if(num>max)
num=max;return num;};Number.gcd=function(a,b){if(b===0)
return a;else
return Number.gcd(b,a%b);};Number.toFixedIfFloating=function(value){if(!value||isNaN(value))
return value;var number=Number(value);return number%1?number.toFixed(3):String(number);};Date.prototype.isValid=function(){return!isNaN(this.getTime());};Date.prototype.toISO8601Compact=function(){function leadZero(x){return(x>9?'':'0')+x;}
return this.getFullYear()+leadZero(this.getMonth()+1)+leadZero(this.getDate())+'T'+
leadZero(this.getHours())+leadZero(this.getMinutes())+leadZero(this.getSeconds());};Object.defineProperty(Array.prototype,'remove',{value:function(value,firstOnly){var index=this.indexOf(value);if(index===-1)
return false;if(firstOnly){this.splice(index,1);return true;}
for(var i=index+1,n=this.length;i<n;++i){if(this[i]!==value)
this[index++]=this[i];}
this.length=index;return true;}});Object.defineProperty(Array.prototype,'pushAll',{value:function(array){for(var i=0;i<array.length;++i)
this.push(array[i]);}});Object.defineProperty(Array.prototype,'rotate',{value:function(index){var result=[];for(var i=index;i<index+this.length;++i)
result.push(this[i%this.length]);return result;}});Object.defineProperty(Array.prototype,'sortNumbers',{value:function(){function numericComparator(a,b){return a-b;}
this.sort(numericComparator);}});Object.defineProperty(Uint32Array.prototype,'sort',{value:Array.prototype.sort});(function(){var partition={value:function(comparator,left,right,pivotIndex){function swap(array,i1,i2){var temp=array[i1];array[i1]=array[i2];array[i2]=temp;}
var pivotValue=this[pivotIndex];swap(this,right,pivotIndex);var storeIndex=left;for(var i=left;i<right;++i){if(comparator(this[i],pivotValue)<0){swap(this,storeIndex,i);++storeIndex;}}
swap(this,right,storeIndex);return storeIndex;}};Object.defineProperty(Array.prototype,'partition',partition);Object.defineProperty(Uint32Array.prototype,'partition',partition);var sortRange={value:function(comparator,leftBound,rightBound,sortWindowLeft,sortWindowRight){function quickSortRange(array,comparator,left,right,sortWindowLeft,sortWindowRight){if(right<=left)
return;var pivotIndex=Math.floor(Math.random()*(right-left))+left;var pivotNewIndex=array.partition(comparator,left,right,pivotIndex);if(sortWindowLeft<pivotNewIndex)
quickSortRange(array,comparator,left,pivotNewIndex-1,sortWindowLeft,sortWindowRight);if(pivotNewIndex<sortWindowRight)
quickSortRange(array,comparator,pivotNewIndex+1,right,sortWindowLeft,sortWindowRight);}
if(leftBound===0&&rightBound===(this.length-1)&&sortWindowLeft===0&&sortWindowRight>=rightBound)
this.sort(comparator);else
quickSortRange(this,comparator,leftBound,rightBound,sortWindowLeft,sortWindowRight);return this;}};Object.defineProperty(Array.prototype,'sortRange',sortRange);Object.defineProperty(Uint32Array.prototype,'sortRange',sortRange);})();Object.defineProperty(Array.prototype,'stableSort',{value:function(comparator){function defaultComparator(a,b){return a<b?-1:(a>b?1:0);}
comparator=comparator||defaultComparator;var indices=new Array(this.length);for(var i=0;i<this.length;++i)
indices[i]=i;var self=this;function indexComparator(a,b){var result=comparator(self[a],self[b]);return result?result:a-b;}
indices.sort(indexComparator);for(var i=0;i<this.length;++i){if(indices[i]<0||i===indices[i])
continue;var cyclical=i;var saved=this[i];while(true){var next=indices[cyclical];indices[cyclical]=-1;if(next===i){this[cyclical]=saved;break;}else{this[cyclical]=this[next];cyclical=next;}}}
return this;}});Object.defineProperty(Array.prototype,'qselect',{value:function(k,comparator){if(k<0||k>=this.length)
return;if(!comparator){comparator=function(a,b){return a-b;};}
var low=0;var high=this.length-1;for(;;){var pivotPosition=this.partition(comparator,low,high,Math.floor((high+low)/2));if(pivotPosition===k)
return this[k];else if(pivotPosition>k)
high=pivotPosition-1;else
low=pivotPosition+1;}}});Object.defineProperty(Array.prototype,'lowerBound',{value:function(object,comparator,left,right){function defaultComparator(a,b){return a<b?-1:(a>b?1:0);}
comparator=comparator||defaultComparator;var l=left||0;var r=right!==undefined?right:this.length;while(l<r){var m=(l+r)>>1;if(comparator(object,this[m])>0)
l=m+1;else
r=m;}
return r;}});Object.defineProperty(Array.prototype,'upperBound',{value:function(object,comparator,left,right){function defaultComparator(a,b){return a<b?-1:(a>b?1:0);}
comparator=comparator||defaultComparator;var l=left||0;var r=right!==undefined?right:this.length;while(l<r){var m=(l+r)>>1;if(comparator(object,this[m])>=0)
l=m+1;else
r=m;}
return r;}});Object.defineProperty(Uint32Array.prototype,'lowerBound',{value:Array.prototype.lowerBound});Object.defineProperty(Uint32Array.prototype,'upperBound',{value:Array.prototype.upperBound});Object.defineProperty(Int32Array.prototype,'lowerBound',{value:Array.prototype.lowerBound});Object.defineProperty(Int32Array.prototype,'upperBound',{value:Array.prototype.upperBound});Object.defineProperty(Float64Array.prototype,'lowerBound',{value:Array.prototype.lowerBound});Object.defineProperty(Array.prototype,'binaryIndexOf',{value:function(value,comparator){var index=this.lowerBound(value,comparator);return index<this.length&&comparator(value,this[index])===0?index:-1;}});Object.defineProperty(Array.prototype,'select',{value:function(field){var result=new Array(this.length);for(var i=0;i<this.length;++i)
result[i]=this[i][field];return result;}});Object.defineProperty(Array.prototype,'peekLast',{value:function(){return this[this.length-1];}});(function(){function mergeOrIntersect(array1,array2,comparator,mergeNotIntersect){var result=[];var i=0;var j=0;while(i<array1.length&&j<array2.length){var compareValue=comparator(array1[i],array2[j]);if(mergeNotIntersect||!compareValue)
result.push(compareValue<=0?array1[i]:array2[j]);if(compareValue<=0)
i++;if(compareValue>=0)
j++;}
if(mergeNotIntersect){while(i<array1.length)
result.push(array1[i++]);while(j<array2.length)
result.push(array2[j++]);}
return result;}
Object.defineProperty(Array.prototype,'intersectOrdered',{value:function(array,comparator){return mergeOrIntersect(this,array,comparator,false);}});Object.defineProperty(Array.prototype,'mergeOrdered',{value:function(array,comparator){return mergeOrIntersect(this,array,comparator,true);}});})();String.sprintf=function(format,var_arg){return String.vsprintf(format,Array.prototype.slice.call(arguments,1));};String.tokenizeFormatString=function(format,formatters){var tokens=[];var substitutionIndex=0;function addStringToken(str){if(tokens.length&&tokens[tokens.length-1].type==='string')
tokens[tokens.length-1].value+=str;else
tokens.push({type:'string',value:str});}
function addSpecifierToken(specifier,precision,substitutionIndex){tokens.push({type:'specifier',specifier:specifier,precision:precision,substitutionIndex:substitutionIndex});}
var index=0;for(var precentIndex=format.indexOf('%',index);precentIndex!==-1;precentIndex=format.indexOf('%',index)){if(format.length===index)
break;addStringToken(format.substring(index,precentIndex));index=precentIndex+1;if(format[index]==='%'){addStringToken('%');++index;continue;}
if(String.isDigitAt(format,index)){var number=parseInt(format.substring(index),10);while(String.isDigitAt(format,index))
++index;if(number>0&&format[index]==='$'){substitutionIndex=(number-1);++index;}}
var precision=-1;if(format[index]==='.'){++index;precision=parseInt(format.substring(index),10);if(isNaN(precision))
precision=0;while(String.isDigitAt(format,index))
++index;}
if(!(format[index]in formatters)){addStringToken(format.substring(precentIndex,index+1));++index;continue;}
addSpecifierToken(format[index],precision,substitutionIndex);++substitutionIndex;++index;}
addStringToken(format.substring(index));return tokens;};String.standardFormatters={d:function(substitution){return!isNaN(substitution)?substitution:0;},f:function(substitution,token){if(substitution&&token.precision>-1)
substitution=substitution.toFixed(token.precision);return!isNaN(substitution)?substitution:(token.precision>-1?Number(0).toFixed(token.precision):0);},s:function(substitution){return substitution;}};String.vsprintf=function(format,substitutions){return String.format(format,substitutions,String.standardFormatters,'',function(a,b){return a+b;}).formattedResult;};String.format=function(format,substitutions,formatters,initialValue,append,tokenizedFormat){if(!format||!substitutions||!substitutions.length)
return{formattedResult:append(initialValue,format),unusedSubstitutions:substitutions};function prettyFunctionName(){return'String.format("'+format+'", "'+Array.prototype.join.call(substitutions,'", "')+'")';}
function warn(msg){console.warn(prettyFunctionName()+': '+msg);}
function error(msg){console.error(prettyFunctionName()+': '+msg);}
var result=initialValue;var tokens=tokenizedFormat||String.tokenizeFormatString(format,formatters);var usedSubstitutionIndexes={};for(var i=0;i<tokens.length;++i){var token=tokens[i];if(token.type==='string'){result=append(result,token.value);continue;}
if(token.type!=='specifier'){error('Unknown token type "'+token.type+'" found.');continue;}
if(token.substitutionIndex>=substitutions.length){error('not enough substitution arguments. Had '+substitutions.length+' but needed '+
(token.substitutionIndex+1)+', so substitution was skipped.');result=append(result,'%'+(token.precision>-1?token.precision:'')+token.specifier);continue;}
usedSubstitutionIndexes[token.substitutionIndex]=true;if(!(token.specifier in formatters)){warn('unsupported format character \u201C'+token.specifier+'\u201D. Treating as a string.');result=append(result,substitutions[token.substitutionIndex]);continue;}
result=append(result,formatters[token.specifier](substitutions[token.substitutionIndex],token));}
var unusedSubstitutions=[];for(var i=0;i<substitutions.length;++i){if(i in usedSubstitutionIndexes)
continue;unusedSubstitutions.push(substitutions[i]);}
return{formattedResult:result,unusedSubstitutions:unusedSubstitutions};};function createSearchRegex(query,caseSensitive,isRegex){var regexFlags=caseSensitive?'g':'gi';var regexObject;if(isRegex){try{regexObject=new RegExp(query,regexFlags);}catch(e){}}
if(!regexObject)
regexObject=createPlainTextSearchRegex(query,regexFlags);return regexObject;}
function createPlainTextSearchRegex(query,flags){var regexSpecialCharacters=String.regexSpecialCharacters();var regex='';for(var i=0;i<query.length;++i){var c=query.charAt(i);if(regexSpecialCharacters.indexOf(c)!==-1)
regex+='\\';regex+=c;}
return new RegExp(regex,flags||'');}
function countRegexMatches(regex,content){var text=content;var result=0;var match;while(text&&(match=regex.exec(text))){if(match[0].length>0)
++result;text=text.substring(match.index+1);}
return result;}
function spacesPadding(spacesCount){return'\u00a0'.repeat(spacesCount);}
function numberToStringWithSpacesPadding(value,symbolsCount){var numberString=value.toString();var paddingLength=Math.max(0,symbolsCount-numberString.length);return spacesPadding(paddingLength)+numberString;}
Set.prototype.valuesArray=function(){return Array.from(this.values());};Set.prototype.addAll=function(iterable){for(var e of iterable)
this.add(e);};Set.prototype.containsAll=function(iterable){for(var e of iterable){if(!this.has(e))
return false;}
return true;};Map.prototype.remove=function(key){var value=this.get(key);this.delete(key);return value;};Map.prototype.valuesArray=function(){return Array.from(this.values());};Map.prototype.keysArray=function(){return Array.from(this.keys());};Map.prototype.inverse=function(){var result=new Multimap();for(var key of this.keys()){var value=this.get(key);result.set(value,key);}
return result;};var Multimap=function(){this._map=new Map();};Multimap.prototype={set:function(key,value){var set=this._map.get(key);if(!set){set=new Set();this._map.set(key,set);}
set.add(value);},get:function(key){var result=this._map.get(key);if(!result)
result=new Set();return result;},has:function(key){return this._map.has(key);},hasValue:function(key,value){var set=this._map.get(key);if(!set)
return false;return set.has(value);},get size(){return this._map.size;},remove:function(key,value){var values=this.get(key);values.delete(value);if(!values.size)
this._map.delete(key);},removeAll:function(key){this._map.delete(key);},keysArray:function(){return this._map.keysArray();},valuesArray:function(){var result=[];var keys=this.keysArray();for(var i=0;i<keys.length;++i)
result.pushAll(this.get(keys[i]).valuesArray());return result;},clear:function(){this._map.clear();}};function loadXHR(url){return new Promise(load);function load(successCallback,failureCallback){function onReadyStateChanged(){if(xhr.readyState!==XMLHttpRequest.DONE)
return;if(xhr.status!==200){xhr.onreadystatechange=null;failureCallback(new Error(xhr.status));return;}
xhr.onreadystatechange=null;successCallback(xhr.responseText);}
var xhr=new XMLHttpRequest();xhr.withCredentials=false;xhr.open('GET',url,true);xhr.onreadystatechange=onReadyStateChanged;xhr.send(null);}}
var CallbackBarrier=class{constructor(){this._pendingIncomingCallbacksCount=0;}
createCallback(userCallback){console.assert(!this._outgoingCallback,'CallbackBarrier.createCallback() is called after CallbackBarrier.callWhenDone()');++this._pendingIncomingCallbacksCount;return this._incomingCallback.bind(this,userCallback);}
callWhenDone(callback){console.assert(!this._outgoingCallback,'CallbackBarrier.callWhenDone() is called multiple times');this._outgoingCallback=callback;if(!this._pendingIncomingCallbacksCount)
this._outgoingCallback();}
donePromise(){return new Promise(promiseConstructor.bind(this));function promiseConstructor(success){this.callWhenDone(success);}}
_incomingCallback(userCallback){console.assert(this._pendingIncomingCallbacksCount>0);if(userCallback){var args=Array.prototype.slice.call(arguments,1);userCallback.apply(null,args);}
if(!--this._pendingIncomingCallbacksCount&&this._outgoingCallback)
this._outgoingCallback();}};function suppressUnused(value){}
self.setImmediate=function(callback){const args=[...arguments].slice(1);Promise.resolve().then(()=>callback(...args));return 0;};Promise.prototype.spread=function(callback){return this.then(spreadPromise);function spreadPromise(arg){return callback.apply(null,arg);}};Promise.prototype.catchException=function(defaultValue){return this.catch(function(error){console.error(error);return defaultValue;});};Map.prototype.diff=function(other,isEqual){var leftKeys=this.keysArray();var rightKeys=other.keysArray();leftKeys.sort((a,b)=>a-b);rightKeys.sort((a,b)=>a-b);var removed=[];var added=[];var equal=[];var leftIndex=0;var rightIndex=0;while(leftIndex<leftKeys.length&&rightIndex<rightKeys.length){var leftKey=leftKeys[leftIndex];var rightKey=rightKeys[rightIndex];if(leftKey===rightKey&&isEqual(this.get(leftKey),other.get(rightKey))){equal.push(this.get(leftKey));++leftIndex;++rightIndex;continue;}
if(leftKey<=rightKey){removed.push(this.get(leftKey));++leftIndex;continue;}
added.push(other.get(rightKey));++rightIndex;}
while(leftIndex<leftKeys.length){var leftKey=leftKeys[leftIndex++];removed.push(this.get(leftKey));}
while(rightIndex<rightKeys.length){var rightKey=rightKeys[rightIndex++];added.push(other.get(rightKey));}
return{added:added,removed:removed,equal:equal};};function runOnWindowLoad(callback){function windowLoaded(){self.removeEventListener('DOMContentLoaded',windowLoaded,false);callback();}
if(document.readyState==='complete'||document.readyState==='interactive')
callback();else
self.addEventListener('DOMContentLoaded',windowLoaded,false);};self['DomExtension']=self['DomExtension']||{};Node.prototype.rangeOfWord=function(offset,stopCharacters,stayWithinNode,direction){var startNode;var startOffset=0;var endNode;var endOffset=0;if(!stayWithinNode)
stayWithinNode=this;if(!direction||direction==='backward'||direction==='both'){var node=this;while(node){if(node===stayWithinNode){if(!startNode)
startNode=stayWithinNode;break;}
if(node.nodeType===Node.TEXT_NODE){var start=(node===this?(offset-1):(node.nodeValue.length-1));for(var i=start;i>=0;--i){if(stopCharacters.indexOf(node.nodeValue[i])!==-1){startNode=node;startOffset=i+1;break;}}}
if(startNode)
break;node=node.traversePreviousNode(stayWithinNode);}
if(!startNode){startNode=stayWithinNode;startOffset=0;}}else{startNode=this;startOffset=offset;}
if(!direction||direction==='forward'||direction==='both'){node=this;while(node){if(node===stayWithinNode){if(!endNode)
endNode=stayWithinNode;break;}
if(node.nodeType===Node.TEXT_NODE){var start=(node===this?offset:0);for(var i=start;i<node.nodeValue.length;++i){if(stopCharacters.indexOf(node.nodeValue[i])!==-1){endNode=node;endOffset=i;break;}}}
if(endNode)
break;node=node.traverseNextNode(stayWithinNode);}
if(!endNode){endNode=stayWithinNode;endOffset=stayWithinNode.nodeType===Node.TEXT_NODE?stayWithinNode.nodeValue.length:stayWithinNode.childNodes.length;}}else{endNode=this;endOffset=offset;}
var result=this.ownerDocument.createRange();result.setStart(startNode,startOffset);result.setEnd(endNode,endOffset);return result;};Node.prototype.traverseNextTextNode=function(stayWithin){var node=this.traverseNextNode(stayWithin);if(!node)
return null;var nonTextTags={'STYLE':1,'SCRIPT':1};while(node&&(node.nodeType!==Node.TEXT_NODE||nonTextTags[node.parentElement.nodeName]))
node=node.traverseNextNode(stayWithin);return node;};Element.prototype.positionAt=function(x,y,relativeTo){var shift={x:0,y:0};if(relativeTo)
shift=relativeTo.boxInWindow(this.ownerDocument.defaultView);if(typeof x==='number')
this.style.setProperty('left',(shift.x+x)+'px');else
this.style.removeProperty('left');if(typeof y==='number')
this.style.setProperty('top',(shift.y+y)+'px');else
this.style.removeProperty('top');if(typeof x==='number'||typeof y==='number')
this.style.setProperty('position','absolute');else
this.style.removeProperty('position');};Element.prototype.isScrolledToBottom=function(){return Math.abs(this.scrollTop+this.clientHeight-this.scrollHeight)<=2;};Node.prototype.enclosingNodeOrSelfWithNodeNameInArray=function(nameArray){for(var node=this;node&&node!==this.ownerDocument;node=node.parentNodeOrShadowHost()){for(var i=0;i<nameArray.length;++i){if(node.nodeName.toLowerCase()===nameArray[i].toLowerCase())
return node;}}
return null;};Node.prototype.enclosingNodeOrSelfWithNodeName=function(nodeName){return this.enclosingNodeOrSelfWithNodeNameInArray([nodeName]);};Node.prototype.enclosingNodeOrSelfWithClass=function(className,stayWithin){return this.enclosingNodeOrSelfWithClassList([className],stayWithin);};Node.prototype.enclosingNodeOrSelfWithClassList=function(classNames,stayWithin){for(var node=this;node&&node!==stayWithin&&node!==this.ownerDocument;node=node.parentNodeOrShadowHost()){if(node.nodeType===Node.ELEMENT_NODE){var containsAll=true;for(var i=0;i<classNames.length&&containsAll;++i){if(!node.classList.contains(classNames[i]))
containsAll=false;}
if(containsAll)
return(node);}}
return null;};Node.prototype.parentElementOrShadowHost=function(){var node=this.parentNode;if(!node)
return null;if(node.nodeType===Node.ELEMENT_NODE)
return(node);if(node.nodeType===Node.DOCUMENT_FRAGMENT_NODE)
return(node.host);return null;};Node.prototype.parentNodeOrShadowHost=function(){if(this.parentNode)
return this.parentNode;if(this.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&this.host)
return this.host;return null;};Node.prototype.getComponentSelection=function(){var parent=this.parentNode;while(parent&&parent.nodeType!==Node.DOCUMENT_FRAGMENT_NODE)
parent=parent.parentNode;return parent instanceof ShadowRoot?parent.getSelection():this.window().getSelection();};Node.prototype.isComponentSelectionCollapsed=function(){var selection=this.getComponentSelection();var range=selection&&selection.rangeCount?selection.getRangeAt(0):null;return range?range.collapsed:true;};Node.prototype.hasSelection=function(){var contents=this.querySelectorAll('content');for(var content of contents){if(Array.prototype.some.call(content.getDistributedNodes(),node=>node.hasSelection()))
return true;}
if(this.isComponentSelectionCollapsed())
return false;return this.getComponentSelection().containsNode(this,true);};Node.prototype.getDeepSelection=function(){var activeElement=this.ownerDocument.activeElement;var shadowRoot=null;while(activeElement&&activeElement.shadowRoot){shadowRoot=activeElement.shadowRoot;activeElement=shadowRoot.activeElement;}
return shadowRoot?shadowRoot.getSelection():this.window().getSelection();};Node.prototype.window=function(){return this.ownerDocument.defaultView;};Element.prototype.removeChildren=function(){if(this.firstChild)
this.textContent='';};function createElement(tagName,customElementType){return document.createElement(tagName,customElementType||'');}
function createTextNode(data){return document.createTextNode(data);}
Document.prototype.createElementWithClass=function(elementName,className,customElementType){var element=this.createElement(elementName,customElementType||'');if(className)
element.className=className;return element;};function createElementWithClass(elementName,className,customElementType){return document.createElementWithClass(elementName,className,customElementType);}
Document.prototype.createSVGElement=function(childType,className){var element=this.createElementNS('http://www.w3.org/2000/svg',childType);if(className)
element.setAttribute('class',className);return element;};function createSVGElement(childType,className){return document.createSVGElement(childType,className);}
function createDocumentFragment(){return document.createDocumentFragment();}
Element.prototype.createChild=function(elementName,className,customElementType){var element=this.ownerDocument.createElementWithClass(elementName,className,customElementType);this.appendChild(element);return element;};DocumentFragment.prototype.createChild=Element.prototype.createChild;Element.prototype.createTextChild=function(text){var element=this.ownerDocument.createTextNode(text);this.appendChild(element);return element;};DocumentFragment.prototype.createTextChild=Element.prototype.createTextChild;Element.prototype.createTextChildren=function(var_args){for(var i=0,n=arguments.length;i<n;++i)
this.createTextChild(arguments[i]);};DocumentFragment.prototype.createTextChildren=Element.prototype.createTextChildren;Element.prototype.totalOffsetLeft=function(){return this.totalOffset().left;};Element.prototype.totalOffsetTop=function(){return this.totalOffset().top;};Element.prototype.totalOffset=function(){var rect=this.getBoundingClientRect();return{left:rect.left,top:rect.top};};Element.prototype.createSVGChild=function(childType,className){var child=this.ownerDocument.createSVGElement(childType,className);this.appendChild(child);return child;};var AnchorBox=class{constructor(x,y,width,height){this.x=x||0;this.y=y||0;this.width=width||0;this.height=height||0;}};AnchorBox.prototype.relativeTo=function(box){return new AnchorBox(this.x-box.x,this.y-box.y,this.width,this.height);};AnchorBox.prototype.relativeToElement=function(element){return this.relativeTo(element.boxInWindow(element.ownerDocument.defaultView));};AnchorBox.prototype.equals=function(anchorBox){return!!anchorBox&&this.x===anchorBox.x&&this.y===anchorBox.y&&this.width===anchorBox.width&&this.height===anchorBox.height;};Element.prototype.boxInWindow=function(targetWindow){targetWindow=targetWindow||this.ownerDocument.defaultView;var anchorBox=new AnchorBox();var curElement=this;var curWindow=this.ownerDocument.defaultView;while(curWindow&&curElement){anchorBox.x+=curElement.totalOffsetLeft();anchorBox.y+=curElement.totalOffsetTop();if(curWindow===targetWindow)
break;curElement=curWindow.frameElement;curWindow=curWindow.parent;}
anchorBox.width=Math.min(this.offsetWidth,targetWindow.innerWidth-anchorBox.x);anchorBox.height=Math.min(this.offsetHeight,targetWindow.innerHeight-anchorBox.y);return anchorBox;};Event.prototype.consume=function(preventDefault){this.stopImmediatePropagation();if(preventDefault)
this.preventDefault();this.handled=true;};Text.prototype.select=function(start,end){start=start||0;end=end||this.textContent.length;if(start<0)
start=end+start;var selection=this.getComponentSelection();selection.removeAllRanges();var range=this.ownerDocument.createRange();range.setStart(this,start);range.setEnd(this,end);selection.addRange(range);return this;};Element.prototype.selectionLeftOffset=function(){var selection=this.getComponentSelection();if(!selection.containsNode(this,true))
return null;var leftOffset=selection.anchorOffset;var node=selection.anchorNode;while(node!==this){while(node.previousSibling){node=node.previousSibling;leftOffset+=node.textContent.length;}
node=node.parentNodeOrShadowHost();}
return leftOffset;};Node.prototype.appendChildren=function(var_args){for(var i=0,n=arguments.length;i<n;++i)
this.appendChild(arguments[i]);};Node.prototype.deepTextContent=function(){return this.childTextNodes().map(function(node){return node.textContent;}).join('');};Node.prototype.childTextNodes=function(){var node=this.traverseNextTextNode(this);var result=[];var nonTextTags={'STYLE':1,'SCRIPT':1};while(node){if(!nonTextTags[node.parentElement.nodeName])
result.push(node);node=node.traverseNextTextNode(this);}
return result;};Node.prototype.isAncestor=function(node){if(!node)
return false;var currentNode=node.parentNodeOrShadowHost();while(currentNode){if(this===currentNode)
return true;currentNode=currentNode.parentNodeOrShadowHost();}
return false;};Node.prototype.isDescendant=function(descendant){return!!descendant&&descendant.isAncestor(this);};Node.prototype.isSelfOrAncestor=function(node){return!!node&&(node===this||this.isAncestor(node));};Node.prototype.isSelfOrDescendant=function(node){return!!node&&(node===this||this.isDescendant(node));};Node.prototype.traverseNextNode=function(stayWithin){if(this.shadowRoot)
return this.shadowRoot;var distributedNodes=this.getDistributedNodes?this.getDistributedNodes():[];if(distributedNodes.length)
return distributedNodes[0];if(this.firstChild)
return this.firstChild;var node=this;while(node){if(stayWithin&&node===stayWithin)
return null;var sibling=nextSibling(node);if(sibling)
return sibling;node=insertionPoint(node)||node.parentNodeOrShadowHost();}
function nextSibling(node){var parent=insertionPoint(node);if(!parent)
return node.nextSibling;var distributedNodes=parent.getDistributedNodes?parent.getDistributedNodes():[];var position=Array.prototype.indexOf.call(distributedNodes,node);if(position+1<distributedNodes.length)
return distributedNodes[position+1];return null;}
function insertionPoint(node){var insertionPoints=node.getDestinationInsertionPoints?node.getDestinationInsertionPoints():[];return insertionPoints.length>0?insertionPoints[insertionPoints.length-1]:null;}
return null;};Node.prototype.traversePreviousNode=function(stayWithin){if(stayWithin&&this===stayWithin)
return null;var node=this.previousSibling;while(node&&node.lastChild)
node=node.lastChild;if(node)
return node;return this.parentNodeOrShadowHost();};Node.prototype.setTextContentTruncatedIfNeeded=function(text,placeholder){const maxTextContentLength=10000;if(typeof text==='string'&&text.length>maxTextContentLength){this.textContent=typeof placeholder==='string'?placeholder:text.trimMiddle(maxTextContentLength);return true;}
this.textContent=text;return false;};Event.prototype.deepElementFromPoint=function(){var root=this.target&&this.target.getComponentRoot();return root?root.deepElementFromPoint(this.pageX,this.pageY):null;};Document.prototype.deepElementFromPoint=function(x,y){var container=this;var node=null;while(container){var innerNode=container.elementFromPoint(x,y);if(!innerNode)
break;node=innerNode;container=node.shadowRoot;}
return node;};DocumentFragment.prototype.deepElementFromPoint=Document.prototype.deepElementFromPoint;Document.prototype.deepActiveElement=function(){var activeElement=this.activeElement;while(activeElement&&activeElement.shadowRoot&&activeElement.shadowRoot.activeElement)
activeElement=activeElement.shadowRoot.activeElement;return activeElement;};DocumentFragment.prototype.deepActiveElement=Document.prototype.deepActiveElement;Element.prototype.hasFocus=function(){var root=this.getComponentRoot();return!!root&&this.isSelfOrAncestor(root.activeElement);};Node.prototype.getComponentRoot=function(){var node=this;while(node&&node.nodeType!==Node.DOCUMENT_FRAGMENT_NODE&&node.nodeType!==Node.DOCUMENT_NODE)
node=node.parentNode;return(node);};function isEnterKey(event){return event.keyCode!==229&&event.key==='Enter';}
function isEscKey(event){return event.keyCode===27;};self['Common']=self['Common']||{};Common.Worker=class{constructor(appName){var url=appName+'.js';url+=Runtime.queryParamsString();this._workerPromise=new Promise(fulfill=>{this._worker=new Worker(url);this._worker.onmessage=onMessage.bind(this);function onMessage(event){console.assert(event.data==='workerReady');this._worker.onmessage=null;fulfill(this._worker);this._worker=null;}});}
postMessage(message){this._workerPromise.then(worker=>{if(!this._disposed)
worker.postMessage(message);});}
dispose(){this._disposed=true;this._workerPromise.then(worker=>worker.terminate());}
terminate(){this.dispose();}
set onmessage(listener){this._workerPromise.then(worker=>worker.onmessage=listener);}
set onerror(listener){this._workerPromise.then(worker=>worker.onerror=listener);}};;Common.TextDictionary=class{constructor(){this._words=new Map();this._index=new Common.Trie();}
addWord(word){var count=this._words.get(word)||0;++count;this._words.set(word,count);this._index.add(word);}
removeWord(word){var count=this._words.get(word)||0;if(!count)
return;if(count===1){this._words.delete(word);this._index.remove(word);return;}
--count;this._words.set(word,count);}
wordsWithPrefix(prefix){return this._index.words(prefix);}
hasWord(word){return this._words.has(word);}
wordCount(word){return this._words.get(word)||0;}
reset(){this._words.clear();this._index.clear();}};;Common.Object=class{constructor(){this._listeners;}
addEventListener(eventType,listener,thisObject){if(!listener)
console.assert(false);if(!this._listeners)
this._listeners=new Map();if(!this._listeners.has(eventType))
this._listeners.set(eventType,[]);this._listeners.get(eventType).push({thisObject:thisObject,listener:listener});return new Common.EventTarget.EventDescriptor(this,eventType,thisObject,listener);}
removeEventListener(eventType,listener,thisObject){console.assert(listener);if(!this._listeners||!this._listeners.has(eventType))
return;var listeners=this._listeners.get(eventType);for(var i=0;i<listeners.length;++i){if(listeners[i].listener===listener&&listeners[i].thisObject===thisObject)
listeners.splice(i--,1);}
if(!listeners.length)
this._listeners.delete(eventType);}
hasEventListeners(eventType){return!!(this._listeners&&this._listeners.has(eventType));}
dispatchEventToListeners(eventType,eventData){if(!this._listeners||!this._listeners.has(eventType))
return;var event=new Common.Event(eventData);var listeners=this._listeners.get(eventType).slice(0);for(var i=0;i<listeners.length;++i)
listeners[i].listener.call(listeners[i].thisObject,event);}
on(eventType,listener,thisObject){if(!this._listeners)
this._listeners=new Map();if(!this._listeners.has(eventType))
this._listeners.set(eventType,[]);this._listeners.get(eventType).push({thisObject:thisObject,listener:listener});return new Common.EventTarget.TypedEventDescriptor(this,eventType,thisObject,listener);}
off(eventType,listener,thisObject){if(!this._listeners||!this._listeners.has(eventType))
return;var listeners=this._listeners.get(eventType);for(var i=0;i<listeners.length;++i){if(listeners[i].listener===listener&&listeners[i].thisObject===thisObject)
listeners.splice(i--,1);}
if(!listeners.length)
this._listeners.delete(eventType);}
emit(event){var eventType=event.constructor;if(!this._listeners||!this._listeners.has(eventType))
return;var listeners=this._listeners.get(eventType).slice(0);for(var i=0;i<listeners.length;++i)
listeners[i].listener.call(listeners[i].thisObject,event);}};Common.Emittable=function(){};Common.Object._listenerCallbackTuple;Common.Event=class{constructor(data){this.data=data;}};Common.EventTarget=function(){};Common.EventTarget.EventDescriptorStruct=class{constructor(){this.eventTarget;this.eventType;this.receiver;this.method;}};Common.EventTarget.EventDescriptor=class{constructor(eventTarget,eventType,receiver,method){this.eventTarget=eventTarget;this.eventType=eventType;this.receiver=receiver;this.method=method;}};Common.EventTarget.TypedEventDescriptor=class{constructor(eventTarget,eventType,receiver,method){this.eventTarget=eventTarget;this.eventType=eventType;this.receiver=receiver;this.method=method;}};Common.EventTarget.removeEventListeners=function(eventList){for(var i=0;i<eventList.length;++i){if(eventList[i]instanceof Common.EventTarget.EventDescriptor){var eventInfo=(eventList[i]);eventInfo.eventTarget.removeEventListener(eventInfo.eventType,eventInfo.method,eventInfo.receiver);}else{var eventInfo=(eventList[i]);eventInfo.eventTarget.off(eventInfo.eventType,eventInfo.method,eventInfo.receiver);}}
eventList.splice(0,eventList.length);};Common.EventTarget.prototype={addEventListener(eventType,listener,thisObject){},removeEventListener(eventType,listener,thisObject){},hasEventListeners(eventType){},dispatchEventToListeners(eventType,eventData){},on(eventType,listener,thisObject){},off(eventType,listener,thisObject){},emit(event){},};;Common.Color=class{constructor(rgba,format,originalText){this._rgba=rgba;this._originalText=originalText||null;this._originalTextIsValid=!!this._originalText;this._format=format;if(typeof this._rgba[3]==='undefined')
this._rgba[3]=1;for(var i=0;i<4;++i){if(this._rgba[i]<0){this._rgba[i]=0;this._originalTextIsValid=false;}
if(this._rgba[i]>1){this._rgba[i]=1;this._originalTextIsValid=false;}}}
static parse(text){var value=text.toLowerCase().replace(/\s+/g,'');var simple=/^(?:#([0-9a-f]{3}|[0-9a-f]{6})|rgb\(((?:-?\d+%?,){2}-?\d+%?)\)|(\w+)|hsl\((-?\d+\.?\d*(?:,-?\d+\.?\d*%){2})\))$/i;var match=value.match(simple);if(match){if(match[1]){var hex=match[1].toLowerCase();var format;if(hex.length===3){format=Common.Color.Format.ShortHEX;hex=hex.charAt(0)+hex.charAt(0)+hex.charAt(1)+hex.charAt(1)+hex.charAt(2)+hex.charAt(2);}else{format=Common.Color.Format.HEX;}
var r=parseInt(hex.substring(0,2),16);var g=parseInt(hex.substring(2,4),16);var b=parseInt(hex.substring(4,6),16);return new Common.Color([r/255,g/255,b/255,1],format,text);}
if(match[2]){var rgbString=match[2].split(/\s*,\s*/);var rgba=[Common.Color._parseRgbNumeric(rgbString[0]),Common.Color._parseRgbNumeric(rgbString[1]),Common.Color._parseRgbNumeric(rgbString[2]),1];return new Common.Color(rgba,Common.Color.Format.RGB,text);}
if(match[3]){var nickname=match[3].toLowerCase();if(nickname in Common.Color.Nicknames){var rgba=Common.Color.Nicknames[nickname];var color=Common.Color.fromRGBA(rgba);color._format=Common.Color.Format.Nickname;color._originalText=text;return color;}
return null;}
if(match[4]){var hslString=match[4].replace(/%/g,'').split(/\s*,\s*/);var hsla=[Common.Color._parseHueNumeric(hslString[0]),Common.Color._parseSatLightNumeric(hslString[1]),Common.Color._parseSatLightNumeric(hslString[2]),1];var rgba=[];Common.Color.hsl2rgb(hsla,rgba);return new Common.Color(rgba,Common.Color.Format.HSL,text);}
return null;}
var advanced=/^(?:rgba\(((?:-?\d+%?,){3}-?(?:\d+|\d*\.\d+))\)|hsla\((-?(?:\d+|\d*\.\d+)(?:,-?(?:\d+|\d*\.\d+)*%){2},-?(?:\d+|\d*\.\d+))\))$/;match=value.match(advanced);if(match){if(match[1]){var rgbaString=match[1].split(/\s*,\s*/);var rgba=[Common.Color._parseRgbNumeric(rgbaString[0]),Common.Color._parseRgbNumeric(rgbaString[1]),Common.Color._parseRgbNumeric(rgbaString[2]),Common.Color._parseAlphaNumeric(rgbaString[3])];return new Common.Color(rgba,Common.Color.Format.RGBA,text);}
if(match[2]){var hslaString=match[2].replace(/%/g,'').split(/\s*,\s*/);var hsla=[Common.Color._parseHueNumeric(hslaString[0]),Common.Color._parseSatLightNumeric(hslaString[1]),Common.Color._parseSatLightNumeric(hslaString[2]),Common.Color._parseAlphaNumeric(hslaString[3])];var rgba=[];Common.Color.hsl2rgb(hsla,rgba);return new Common.Color(rgba,Common.Color.Format.HSLA,text);}}
return null;}
static fromRGBA(rgba){return new Common.Color([rgba[0]/255,rgba[1]/255,rgba[2]/255,rgba[3]],Common.Color.Format.RGBA);}
static fromHSVA(hsva){var rgba=[];Common.Color.hsva2rgba(hsva,rgba);return new Common.Color(rgba,Common.Color.Format.HSLA);}
static _parseRgbNumeric(value){var parsed=parseInt(value,10);if(value.indexOf('%')!==-1)
parsed/=100;else
parsed/=255;return parsed;}
static _parseHueNumeric(value){return isNaN(value)?0:(parseFloat(value)/360)%1;}
static _parseSatLightNumeric(value){return Math.min(1,parseFloat(value)/100);}
static _parseAlphaNumeric(value){return isNaN(value)?0:parseFloat(value);}
static _hsva2hsla(hsva,out_hsla){var h=hsva[0];var s=hsva[1];var v=hsva[2];var t=(2-s)*v;if(v===0||s===0)
s=0;else
s*=v/(t<1?t:2-t);out_hsla[0]=h;out_hsla[1]=s;out_hsla[2]=t/2;out_hsla[3]=hsva[3];}
static hsl2rgb(hsl,out_rgb){var h=hsl[0];var s=hsl[1];var l=hsl[2];function hue2rgb(p,q,h){if(h<0)
h+=1;else if(h>1)
h-=1;if((h*6)<1)
return p+(q-p)*h*6;else if((h*2)<1)
return q;else if((h*3)<2)
return p+(q-p)*((2/3)-h)*6;else
return p;}
if(s<0)
s=0;if(l<=0.5)
var q=l*(1+s);else
var q=l+s-(l*s);var p=2*l-q;var tr=h+(1/3);var tg=h;var tb=h-(1/3);out_rgb[0]=hue2rgb(p,q,tr);out_rgb[1]=hue2rgb(p,q,tg);out_rgb[2]=hue2rgb(p,q,tb);out_rgb[3]=hsl[3];}
static hsva2rgba(hsva,out_rgba){Common.Color._hsva2hsla(hsva,Common.Color.hsva2rgba._tmpHSLA);Common.Color.hsl2rgb(Common.Color.hsva2rgba._tmpHSLA,out_rgba);for(var i=0;i<Common.Color.hsva2rgba._tmpHSLA.length;i++)
Common.Color.hsva2rgba._tmpHSLA[i]=0;}
static luminance(rgba){var rSRGB=rgba[0];var gSRGB=rgba[1];var bSRGB=rgba[2];var r=rSRGB<=0.03928?rSRGB/12.92:Math.pow(((rSRGB+0.055)/1.055),2.4);var g=gSRGB<=0.03928?gSRGB/12.92:Math.pow(((gSRGB+0.055)/1.055),2.4);var b=bSRGB<=0.03928?bSRGB/12.92:Math.pow(((bSRGB+0.055)/1.055),2.4);return 0.2126*r+0.7152*g+0.0722*b;}
static blendColors(fgRGBA,bgRGBA,out_blended){var alpha=fgRGBA[3];out_blended[0]=((1-alpha)*bgRGBA[0])+(alpha*fgRGBA[0]);out_blended[1]=((1-alpha)*bgRGBA[1])+(alpha*fgRGBA[1]);out_blended[2]=((1-alpha)*bgRGBA[2])+(alpha*fgRGBA[2]);out_blended[3]=alpha+(bgRGBA[3]*(1-alpha));}
static calculateContrastRatio(fgRGBA,bgRGBA){Common.Color.blendColors(fgRGBA,bgRGBA,Common.Color.calculateContrastRatio._blendedFg);var fgLuminance=Common.Color.luminance(Common.Color.calculateContrastRatio._blendedFg);var bgLuminance=Common.Color.luminance(bgRGBA);var contrastRatio=(Math.max(fgLuminance,bgLuminance)+0.05)/(Math.min(fgLuminance,bgLuminance)+0.05);for(var i=0;i<Common.Color.calculateContrastRatio._blendedFg.length;i++)
Common.Color.calculateContrastRatio._blendedFg[i]=0;return contrastRatio;}
static desiredLuminance(luminance,contrast,lighter){function computeLuminance(){if(lighter)
return(luminance+0.05)*contrast-0.05;else
return(luminance+0.05)/contrast-0.05;}
var desiredLuminance=computeLuminance();if(desiredLuminance<0||desiredLuminance>1){lighter=!lighter;desiredLuminance=computeLuminance();}
return desiredLuminance;}
static detectColorFormat(color){const cf=Common.Color.Format;var format;var formatSetting=Common.moduleSetting('colorFormat').get();if(formatSetting===cf.Original)
format=cf.Original;else if(formatSetting===cf.RGB)
format=(color.hasAlpha()?cf.RGBA:cf.RGB);else if(formatSetting===cf.HSL)
format=(color.hasAlpha()?cf.HSLA:cf.HSL);else if(!color.hasAlpha())
format=(color.canBeShortHex()?cf.ShortHEX:cf.HEX);else
format=cf.RGBA;return format;}
format(){return this._format;}
hsla(){if(this._hsla)
return this._hsla;var r=this._rgba[0];var g=this._rgba[1];var b=this._rgba[2];var max=Math.max(r,g,b);var min=Math.min(r,g,b);var diff=max-min;var add=max+min;if(min===max)
var h=0;else if(r===max)
var h=((1/6*(g-b)/diff)+1)%1;else if(g===max)
var h=(1/6*(b-r)/diff)+1/3;else
var h=(1/6*(r-g)/diff)+2/3;var l=0.5*add;if(l===0)
var s=0;else if(l===1)
var s=0;else if(l<=0.5)
var s=diff/add;else
var s=diff/(2-add);this._hsla=[h,s,l,this._rgba[3]];return this._hsla;}
canonicalHSLA(){var hsla=this.hsla();return[Math.round(hsla[0]*360),Math.round(hsla[1]*100),Math.round(hsla[2]*100),hsla[3]];}
hsva(){var hsla=this.hsla();var h=hsla[0];var s=hsla[1];var l=hsla[2];s*=l<0.5?l:1-l;return[h,s!==0?2*s/(l+s):0,(l+s),hsla[3]];}
hasAlpha(){return this._rgba[3]!==1;}
canBeShortHex(){if(this.hasAlpha())
return false;for(var i=0;i<3;++i){var c=Math.round(this._rgba[i]*255);if(c%17)
return false;}
return true;}
asString(format){if(format===this._format&&this._originalTextIsValid)
return this._originalText;if(!format)
format=this._format;function toRgbValue(value){return Math.round(value*255);}
function toHexValue(value){var hex=Math.round(value*255).toString(16);return hex.length===1?'0'+hex:hex;}
function toShortHexValue(value){return(Math.round(value*255)/17).toString(16);}
switch(format){case Common.Color.Format.Original:return this._originalText;case Common.Color.Format.RGB:if(this.hasAlpha())
return null;return String.sprintf('rgb(%d, %d, %d)',toRgbValue(this._rgba[0]),toRgbValue(this._rgba[1]),toRgbValue(this._rgba[2]));case Common.Color.Format.RGBA:return String.sprintf('rgba(%d, %d, %d, %f)',toRgbValue(this._rgba[0]),toRgbValue(this._rgba[1]),toRgbValue(this._rgba[2]),this._rgba[3]);case Common.Color.Format.HSL:if(this.hasAlpha())
return null;var hsl=this.hsla();return String.sprintf('hsl(%d, %d%, %d%)',Math.round(hsl[0]*360),Math.round(hsl[1]*100),Math.round(hsl[2]*100));case Common.Color.Format.HSLA:var hsla=this.hsla();return String.sprintf('hsla(%d, %d%, %d%, %f)',Math.round(hsla[0]*360),Math.round(hsla[1]*100),Math.round(hsla[2]*100),hsla[3]);case Common.Color.Format.HEX:if(this.hasAlpha())
return null;return String.sprintf('#%s%s%s',toHexValue(this._rgba[0]),toHexValue(this._rgba[1]),toHexValue(this._rgba[2])).toLowerCase();case Common.Color.Format.ShortHEX:if(!this.canBeShortHex())
return null;return String.sprintf('#%s%s%s',toShortHexValue(this._rgba[0]),toShortHexValue(this._rgba[1]),toShortHexValue(this._rgba[2])).toLowerCase();case Common.Color.Format.Nickname:return this.nickname();}
return this._originalText;}
rgba(){return this._rgba.slice();}
canonicalRGBA(){var rgba=new Array(4);for(var i=0;i<3;++i)
rgba[i]=Math.round(this._rgba[i]*255);rgba[3]=this._rgba[3];return rgba;}
nickname(){if(!Common.Color._rgbaToNickname){Common.Color._rgbaToNickname={};for(var nickname in Common.Color.Nicknames){var rgba=Common.Color.Nicknames[nickname];if(rgba.length!==4)
rgba=rgba.concat(1);Common.Color._rgbaToNickname[rgba]=nickname;}}
return Common.Color._rgbaToNickname[this.canonicalRGBA()]||null;}
toProtocolRGBA(){var rgba=this.canonicalRGBA();var result={r:rgba[0],g:rgba[1],b:rgba[2]};if(rgba[3]!==1)
result.a=rgba[3];return result;}
invert(){var rgba=[];rgba[0]=1-this._rgba[0];rgba[1]=1-this._rgba[1];rgba[2]=1-this._rgba[2];rgba[3]=this._rgba[3];return new Common.Color(rgba,Common.Color.Format.RGBA);}
setAlpha(alpha){var rgba=this._rgba.slice();rgba[3]=alpha;return new Common.Color(rgba,Common.Color.Format.RGBA);}};Common.Color.Regex=/((?:rgb|hsl)a?\([^)]+\)|#[0-9a-fA-F]{6}|#[0-9a-fA-F]{3}|\b[a-zA-Z]+\b(?!-))/g;Common.Color.Format={Original:'original',Nickname:'nickname',HEX:'hex',ShortHEX:'shorthex',RGB:'rgb',RGBA:'rgba',HSL:'hsl',HSLA:'hsla'};Common.Color.hsva2rgba._tmpHSLA=[0,0,0,0];Common.Color.calculateContrastRatio._blendedFg=[0,0,0,0];Common.Color.Nicknames={'aliceblue':[240,248,255],'antiquewhite':[250,235,215],'aqua':[0,255,255],'aquamarine':[127,255,212],'azure':[240,255,255],'beige':[245,245,220],'bisque':[255,228,196],'black':[0,0,0],'blanchedalmond':[255,235,205],'blue':[0,0,255],'blueviolet':[138,43,226],'brown':[165,42,42],'burlywood':[222,184,135],'cadetblue':[95,158,160],'chartreuse':[127,255,0],'chocolate':[210,105,30],'coral':[255,127,80],'cornflowerblue':[100,149,237],'cornsilk':[255,248,220],'crimson':[237,20,61],'cyan':[0,255,255],'darkblue':[0,0,139],'darkcyan':[0,139,139],'darkgoldenrod':[184,134,11],'darkgray':[169,169,169],'darkgrey':[169,169,169],'darkgreen':[0,100,0],'darkkhaki':[189,183,107],'darkmagenta':[139,0,139],'darkolivegreen':[85,107,47],'darkorange':[255,140,0],'darkorchid':[153,50,204],'darkred':[139,0,0],'darksalmon':[233,150,122],'darkseagreen':[143,188,143],'darkslateblue':[72,61,139],'darkslategray':[47,79,79],'darkslategrey':[47,79,79],'darkturquoise':[0,206,209],'darkviolet':[148,0,211],'deeppink':[255,20,147],'deepskyblue':[0,191,255],'dimgray':[105,105,105],'dimgrey':[105,105,105],'dodgerblue':[30,144,255],'firebrick':[178,34,34],'floralwhite':[255,250,240],'forestgreen':[34,139,34],'fuchsia':[255,0,255],'gainsboro':[220,220,220],'ghostwhite':[248,248,255],'gold':[255,215,0],'goldenrod':[218,165,32],'gray':[128,128,128],'grey':[128,128,128],'green':[0,128,0],'greenyellow':[173,255,47],'honeydew':[240,255,240],'hotpink':[255,105,180],'indianred':[205,92,92],'indigo':[75,0,130],'ivory':[255,255,240],'khaki':[240,230,140],'lavender':[230,230,250],'lavenderblush':[255,240,245],'lawngreen':[124,252,0],'lemonchiffon':[255,250,205],'lightblue':[173,216,230],'lightcoral':[240,128,128],'lightcyan':[224,255,255],'lightgoldenrodyellow':[250,250,210],'lightgreen':[144,238,144],'lightgray':[211,211,211],'lightgrey':[211,211,211],'lightpink':[255,182,193],'lightsalmon':[255,160,122],'lightseagreen':[32,178,170],'lightskyblue':[135,206,250],'lightslategray':[119,136,153],'lightslategrey':[119,136,153],'lightsteelblue':[176,196,222],'lightyellow':[255,255,224],'lime':[0,255,0],'limegreen':[50,205,50],'linen':[250,240,230],'magenta':[255,0,255],'maroon':[128,0,0],'mediumaquamarine':[102,205,170],'mediumblue':[0,0,205],'mediumorchid':[186,85,211],'mediumpurple':[147,112,219],'mediumseagreen':[60,179,113],'mediumslateblue':[123,104,238],'mediumspringgreen':[0,250,154],'mediumturquoise':[72,209,204],'mediumvioletred':[199,21,133],'midnightblue':[25,25,112],'mintcream':[245,255,250],'mistyrose':[255,228,225],'moccasin':[255,228,181],'navajowhite':[255,222,173],'navy':[0,0,128],'oldlace':[253,245,230],'olive':[128,128,0],'olivedrab':[107,142,35],'orange':[255,165,0],'orangered':[255,69,0],'orchid':[218,112,214],'palegoldenrod':[238,232,170],'palegreen':[152,251,152],'paleturquoise':[175,238,238],'palevioletred':[219,112,147],'papayawhip':[255,239,213],'peachpuff':[255,218,185],'peru':[205,133,63],'pink':[255,192,203],'plum':[221,160,221],'powderblue':[176,224,230],'purple':[128,0,128],'rebeccapurple':[102,51,153],'red':[255,0,0],'rosybrown':[188,143,143],'royalblue':[65,105,225],'saddlebrown':[139,69,19],'salmon':[250,128,114],'sandybrown':[244,164,96],'seagreen':[46,139,87],'seashell':[255,245,238],'sienna':[160,82,45],'silver':[192,192,192],'skyblue':[135,206,235],'slateblue':[106,90,205],'slategray':[112,128,144],'slategrey':[112,128,144],'snow':[255,250,250],'springgreen':[0,255,127],'steelblue':[70,130,180],'tan':[210,180,140],'teal':[0,128,128],'thistle':[216,191,216],'tomato':[255,99,71],'turquoise':[64,224,208],'violet':[238,130,238],'wheat':[245,222,179],'white':[255,255,255],'whitesmoke':[245,245,245],'yellow':[255,255,0],'yellowgreen':[154,205,50],'transparent':[0,0,0,0],};Common.Color.PageHighlight={Content:Common.Color.fromRGBA([111,168,220,.66]),ContentLight:Common.Color.fromRGBA([111,168,220,.5]),ContentOutline:Common.Color.fromRGBA([9,83,148]),Padding:Common.Color.fromRGBA([147,196,125,.55]),PaddingLight:Common.Color.fromRGBA([147,196,125,.4]),Border:Common.Color.fromRGBA([255,229,153,.66]),BorderLight:Common.Color.fromRGBA([255,229,153,.5]),Margin:Common.Color.fromRGBA([246,178,107,.66]),MarginLight:Common.Color.fromRGBA([246,178,107,.5]),EventTarget:Common.Color.fromRGBA([255,196,196,.66]),Shape:Common.Color.fromRGBA([96,82,177,0.8]),ShapeMargin:Common.Color.fromRGBA([96,82,127,.6])};;Common.Console=class extends Common.Object{constructor(){super();this._messages=[];}
addMessage(text,level,show){var message=new Common.Console.Message(text,level||Common.Console.MessageLevel.Info,Date.now(),show||false);this._messages.push(message);this.dispatchEventToListeners(Common.Console.Events.MessageAdded,message);}
log(text){this.addMessage(text,Common.Console.MessageLevel.Info);}
warn(text){this.addMessage(text,Common.Console.MessageLevel.Warning);}
error(text){this.addMessage(text,Common.Console.MessageLevel.Error,true);}
messages(){return this._messages;}
show(){this.showPromise();}
showPromise(){return Common.Revealer.revealPromise(this);}};Common.Console.Events={MessageAdded:Symbol('messageAdded')};Common.Console.MessageLevel={Info:'info',Warning:'warning',Error:'error'};Common.Console.Message=class{constructor(text,level,timestamp,show){this.text=text;this.level=level;this.timestamp=(typeof timestamp==='number')?timestamp:Date.now();this.show=show;}};Common.console=new Common.Console();;Common.ContentProvider=function(){};Common.ContentProvider.prototype={contentURL(){},contentType(){},requestContent(){},searchInContent(query,caseSensitive,isRegex,callback){}};Common.ContentProvider.SearchMatch=class{constructor(lineNumber,lineContent){this.lineNumber=lineNumber;this.lineContent=lineContent;}};Common.ContentProvider.performSearchInContent=function(content,query,caseSensitive,isRegex){var regex=createSearchRegex(query,caseSensitive,isRegex);var text=new Common.Text(content);var result=[];for(var i=0;i<text.lineCount();++i){var lineContent=text.lineAt(i);regex.lastIndex=0;if(regex.exec(lineContent))
result.push(new Common.ContentProvider.SearchMatch(i,lineContent));}
return result;};Common.ContentProvider.contentAsDataURL=function(content,mimeType,contentEncoded,charset){const maxDataUrlSize=1024*1024;if(content===null||content.length>maxDataUrlSize)
return null;return'data:'+mimeType+(charset?';charset='+charset:'')+(contentEncoded?';base64':'')+','+
content;};;Common.ParsedURL=class{constructor(url){this.isValid=false;this.url=url;this.scheme='';this.host='';this.port='';this.path='';this.queryParams='';this.fragment='';this.folderPathComponents='';this.lastPathComponent='';var match=url.match(Common.ParsedURL._urlRegex());if(match){this.isValid=true;this.scheme=match[1].toLowerCase();this.host=match[2];this.port=match[3];this.path=match[4]||'/';this.queryParams=match[5]||'';this.fragment=match[6];}else{if(this.url.startsWith('data:')){this.scheme='data';return;}
if(this.url==='about:blank'){this.scheme='about';return;}
this.path=this.url;}
var lastSlashIndex=this.path.lastIndexOf('/');if(lastSlashIndex!==-1){this.folderPathComponents=this.path.substring(0,lastSlashIndex);this.lastPathComponent=this.path.substring(lastSlashIndex+1);}else{this.lastPathComponent=this.path;}}
static platformPathToURL(fileSystemPath){fileSystemPath=fileSystemPath.replace(/\\/g,'/');if(!fileSystemPath.startsWith('file://')){if(fileSystemPath.startsWith('/'))
fileSystemPath='file://'+fileSystemPath;else
fileSystemPath='file:///'+fileSystemPath;}
return fileSystemPath;}
static _urlRegex(){if(Common.ParsedURL._urlRegexInstance)
return Common.ParsedURL._urlRegexInstance;var schemeRegex=/([A-Za-z][A-Za-z0-9+.-]*):\/\//;var hostRegex=/([^\s\/:]*)/;var portRegex=/(?::([\d]+))?/;var pathRegex=/(\/[^#?]*)?/;var queryRegex=/(?:\?([^#]*))?/;var fragmentRegex=/(?:#(.*))?/;Common.ParsedURL._urlRegexInstance=new RegExp('^'+schemeRegex.source+hostRegex.source+portRegex.source+pathRegex.source+queryRegex.source+
fragmentRegex.source+'$');return Common.ParsedURL._urlRegexInstance;}
static extractPath(url){var parsedURL=url.asParsedURL();return parsedURL?parsedURL.path:'';}
static extractOrigin(url){var parsedURL=url.asParsedURL();return parsedURL?parsedURL.securityOrigin():'';}
static extractExtension(url){var lastIndexOfDot=url.lastIndexOf('.');var extension=lastIndexOfDot!==-1?url.substr(lastIndexOfDot+1):'';var indexOfQuestionMark=extension.indexOf('?');if(indexOfQuestionMark!==-1)
extension=extension.substr(0,indexOfQuestionMark);return extension;}
static extractName(url){var index=url.lastIndexOf('/');return index!==-1?url.substr(index+1):url;}
static completeURL(baseURL,href){var trimmedHref=href.trim();if(trimmedHref.startsWith('data:')||trimmedHref.startsWith('blob:')||trimmedHref.startsWith('javascript:'))
return href;var parsedHref=trimmedHref.asParsedURL();if(parsedHref&&parsedHref.scheme)
return trimmedHref;var parsedURL=baseURL.asParsedURL();if(!parsedURL)
return null;if(parsedURL.isDataURL())
return href;if(href.length>1&&href.charAt(0)==='/'&&href.charAt(1)==='/'){return parsedURL.scheme+':'+href;}
var securityOrigin=parsedURL.securityOrigin();var pathText=parsedURL.path;var queryText=parsedURL.queryParams?'?'+parsedURL.queryParams:'';if(!href.length)
return securityOrigin+pathText+queryText;if(href.charAt(0)==='#')
return securityOrigin+pathText+queryText+href;if(href.charAt(0)==='?')
return securityOrigin+pathText+href;var hrefPath=href.match(/^[^#?]*/)[0];var hrefSuffix=href.substring(hrefPath.length);if(hrefPath.charAt(0)!=='/')
hrefPath=parsedURL.folderPathComponents+'/'+hrefPath;return securityOrigin+Runtime.normalizePath(hrefPath)+hrefSuffix;}
static splitLineAndColumn(string){var lineColumnRegEx=/(?::(\d+))?(?::(\d+))?$/;var lineColumnMatch=lineColumnRegEx.exec(string);var lineNumber;var columnNumber;console.assert(lineColumnMatch);if(typeof(lineColumnMatch[1])==='string'){lineNumber=parseInt(lineColumnMatch[1],10);lineNumber=isNaN(lineNumber)?undefined:lineNumber-1;}
if(typeof(lineColumnMatch[2])==='string'){columnNumber=parseInt(lineColumnMatch[2],10);columnNumber=isNaN(columnNumber)?undefined:columnNumber-1;}
return{url:string.substring(0,string.length-lineColumnMatch[0].length),lineNumber:lineNumber,columnNumber:columnNumber};}
static isRelativeURL(url){return!(/^[A-Za-z][A-Za-z0-9+.-]*:/.test(url));}
get displayName(){if(this._displayName)
return this._displayName;if(this.isDataURL())
return this.dataURLDisplayName();if(this.isAboutBlank())
return this.url;this._displayName=this.lastPathComponent;if(!this._displayName)
this._displayName=(this.host||'')+'/';if(this._displayName==='/')
this._displayName=this.url;return this._displayName;}
dataURLDisplayName(){if(this._dataURLDisplayName)
return this._dataURLDisplayName;if(!this.isDataURL())
return'';this._dataURLDisplayName=this.url.trimEnd(20);return this._dataURLDisplayName;}
isAboutBlank(){return this.url==='about:blank';}
isDataURL(){return this.scheme==='data';}
lastPathComponentWithFragment(){return this.lastPathComponent+(this.fragment?'#'+this.fragment:'');}
domain(){if(this.isDataURL())
return'data:';return this.host+(this.port?':'+this.port:'');}
securityOrigin(){if(this.isDataURL())
return'data:';return this.scheme+'://'+this.domain();}
urlWithoutScheme(){if(this.scheme&&this.url.startsWith(this.scheme+'://'))
return this.url.substring(this.scheme.length+3);return this.url;}};String.prototype.asParsedURL=function(){var parsedURL=new Common.ParsedURL(this.toString());if(parsedURL.isValid)
return parsedURL;return null;};;Common.Progress=function(){};Common.Progress.prototype={setTotalWork(totalWork){},setTitle(title){},setWorked(worked,title){},worked(worked){},done(){},isCanceled(){return false;},};Common.CompositeProgress=class{constructor(parent){this._parent=parent;this._children=[];this._childrenDone=0;this._parent.setTotalWork(1);this._parent.setWorked(0);}
_childDone(){if(++this._childrenDone!==this._children.length)
return;this._parent.done();}
createSubProgress(weight){var child=new Common.SubProgress(this,weight);this._children.push(child);return child;}
_update(){var totalWeights=0;var done=0;for(var i=0;i<this._children.length;++i){var child=this._children[i];if(child._totalWork)
done+=child._weight*child._worked/child._totalWork;totalWeights+=child._weight;}
this._parent.setWorked(done/totalWeights);}};Common.SubProgress=class{constructor(composite,weight){this._composite=composite;this._weight=weight||1;this._worked=0;}
isCanceled(){return this._composite._parent.isCanceled();}
setTitle(title){this._composite._parent.setTitle(title);}
done(){this.setWorked(this._totalWork);this._composite._childDone();}
setTotalWork(totalWork){this._totalWork=totalWork;this._composite._update();}
setWorked(worked,title){this._worked=worked;if(typeof title!=='undefined')
this.setTitle(title);this._composite._update();}
worked(worked){this.setWorked(this._worked+(worked||1));}};Common.ProgressProxy=class{constructor(delegate,doneCallback){this._delegate=delegate;this._doneCallback=doneCallback;}
isCanceled(){return this._delegate?this._delegate.isCanceled():false;}
setTitle(title){if(this._delegate)
this._delegate.setTitle(title);}
done(){if(this._delegate)
this._delegate.done();if(this._doneCallback)
this._doneCallback();}
setTotalWork(totalWork){if(this._delegate)
this._delegate.setTotalWork(totalWork);}
setWorked(worked,title){if(this._delegate)
this._delegate.setWorked(worked,title);}
worked(worked){if(this._delegate)
this._delegate.worked(worked);}};;Common.ResourceType=class{constructor(name,title,category,isTextType){this._name=name;this._title=title;this._category=category;this._isTextType=isTextType;}
static mimeFromURL(url){var name=Common.ParsedURL.extractName(url);if(Common.ResourceType._mimeTypeByName.has(name))
return Common.ResourceType._mimeTypeByName.get(name);var ext=Common.ParsedURL.extractExtension(url).toLowerCase();return Common.ResourceType._mimeTypeByExtension.get(ext);}
name(){return this._name;}
title(){return this._title;}
category(){return this._category;}
isTextType(){return this._isTextType;}
isScript(){return this._name==='script'||this._name==='sm-script'||this._name==='snippet';}
hasScripts(){return this.isScript()||this.isDocument();}
isStyleSheet(){return this._name==='stylesheet'||this._name==='sm-stylesheet';}
isDocument(){return this._name==='document';}
isDocumentOrScriptOrStyleSheet(){return this.isDocument()||this.isScript()||this.isStyleSheet();}
isFromSourceMap(){return this._name.startsWith('sm-');}
toString(){return this._name;}
canonicalMimeType(){if(this.isDocument())
return'text/html';if(this.isScript())
return'text/javascript';if(this.isStyleSheet())
return'text/css';return'';}};Common.ResourceCategory=class{constructor(title,shortTitle){this.title=title;this.shortTitle=shortTitle;}};Common.resourceCategories={XHR:new Common.ResourceCategory('XHR and Fetch','XHR'),Script:new Common.ResourceCategory('Scripts','JS'),Stylesheet:new Common.ResourceCategory('Stylesheets','CSS'),Image:new Common.ResourceCategory('Images','Img'),Media:new Common.ResourceCategory('Media','Media'),Font:new Common.ResourceCategory('Fonts','Font'),Document:new Common.ResourceCategory('Documents','Doc'),WebSocket:new Common.ResourceCategory('WebSockets','WS'),Manifest:new Common.ResourceCategory('Manifest','Manifest'),Other:new Common.ResourceCategory('Other','Other')};Common.resourceTypes={XHR:new Common.ResourceType('xhr','XHR',Common.resourceCategories.XHR,true),Fetch:new Common.ResourceType('fetch','Fetch',Common.resourceCategories.XHR,true),EventSource:new Common.ResourceType('eventsource','EventSource',Common.resourceCategories.XHR,true),Script:new Common.ResourceType('script','Script',Common.resourceCategories.Script,true),Snippet:new Common.ResourceType('snippet','Snippet',Common.resourceCategories.Script,true),Stylesheet:new Common.ResourceType('stylesheet','Stylesheet',Common.resourceCategories.Stylesheet,true),Image:new Common.ResourceType('image','Image',Common.resourceCategories.Image,false),Media:new Common.ResourceType('media','Media',Common.resourceCategories.Media,false),Font:new Common.ResourceType('font','Font',Common.resourceCategories.Font,false),Document:new Common.ResourceType('document','Document',Common.resourceCategories.Document,true),TextTrack:new Common.ResourceType('texttrack','TextTrack',Common.resourceCategories.Other,true),WebSocket:new Common.ResourceType('websocket','WebSocket',Common.resourceCategories.WebSocket,false),Other:new Common.ResourceType('other','Other',Common.resourceCategories.Other,false),SourceMapScript:new Common.ResourceType('sm-script','Script',Common.resourceCategories.Script,false),SourceMapStyleSheet:new Common.ResourceType('sm-stylesheet','Stylesheet',Common.resourceCategories.Stylesheet,false),Manifest:new Common.ResourceType('manifest','Manifest',Common.resourceCategories.Manifest,true),};Common.ResourceType._mimeTypeByName=new Map([['Cakefile','text/x-coffeescript']]);Common.ResourceType._mimeTypeByExtension=new Map([['js','text/javascript'],['css','text/css'],['html','text/html'],['htm','text/html'],['xml','application/xml'],['xsl','application/xml'],['asp','application/x-aspx'],['aspx','application/x-aspx'],['jsp','application/x-jsp'],['c','text/x-c++src'],['cc','text/x-c++src'],['cpp','text/x-c++src'],['h','text/x-c++src'],['m','text/x-c++src'],['mm','text/x-c++src'],['coffee','text/x-coffeescript'],['dart','text/javascript'],['ts','text/typescript'],['tsx','text/typescript'],['json','application/json'],['gyp','application/json'],['gypi','application/json'],['cs','text/x-csharp'],['java','text/x-java'],['less','text/x-less'],['php','text/x-php'],['phtml','application/x-httpd-php'],['py','text/x-python'],['sh','text/x-sh'],['scss','text/x-scss'],['vtt','text/vtt'],['ls','text/x-livescript'],['cljs','text/x-clojure'],['cljc','text/x-clojure'],['cljx','text/x-clojure'],['styl','text/x-styl'],['jsx','text/jsx'],['jpeg','image/jpeg'],['jpg','image/jpeg'],['svg','image/svg'],['gif','image/gif'],['webp','image/webp'],['png','image/png'],['ico','image/ico'],['tiff','image/tiff'],['tif','image/tif'],['bmp','image/bmp'],['ttf','font/opentype'],['otf','font/opentype'],['ttc','font/opentype'],['woff','application/font-woff']]);;Common.Settings=class{constructor(globalStorage,localStorage){this._globalStorage=globalStorage;this._localStorage=localStorage;this._sessionStorage=new Common.SettingsStorage({});this._eventSupport=new Common.Object();this._registry=new Map();this._moduleSettings=new Map();self.runtime.extensions('setting').forEach(this._registerModuleSetting.bind(this));}
_registerModuleSetting(extension){var descriptor=extension.descriptor();var settingName=descriptor['settingName'];var isRegex=descriptor['settingType']==='regex';var defaultValue=descriptor['defaultValue'];var storageType;switch(descriptor['storageType']){case('local'):storageType=Common.SettingStorageType.Local;break;case('session'):storageType=Common.SettingStorageType.Session;break;case('global'):storageType=Common.SettingStorageType.Global;break;default:storageType=Common.SettingStorageType.Global;}
var setting=isRegex?this.createRegExpSetting(settingName,defaultValue,undefined,storageType):this.createSetting(settingName,defaultValue,storageType);if(descriptor['title'])
setting.setTitle(descriptor['title']);this._moduleSettings.set(settingName,setting);}
moduleSetting(settingName){var setting=this._moduleSettings.get(settingName);if(!setting)
throw new Error('No setting registered: '+settingName);return setting;}
settingForTest(settingName){var setting=this._registry.get(settingName);if(!setting)
throw new Error('No setting registered: '+settingName);return setting;}
createSetting(key,defaultValue,storageType){var storage=this._storageFromType(storageType);if(!this._registry.get(key))
this._registry.set(key,new Common.Setting(this,key,defaultValue,this._eventSupport,storage));return(this._registry.get(key));}
createLocalSetting(key,defaultValue){return this.createSetting(key,defaultValue,Common.SettingStorageType.Local);}
createRegExpSetting(key,defaultValue,regexFlags,storageType){if(!this._registry.get(key)){this._registry.set(key,new Common.RegExpSetting(this,key,defaultValue,this._eventSupport,this._storageFromType(storageType),regexFlags));}
return(this._registry.get(key));}
clearAll(){this._globalStorage.removeAll();this._localStorage.removeAll();var versionSetting=Common.settings.createSetting(Common.VersionController._currentVersionName,0);versionSetting.set(Common.VersionController.currentVersion);}
_storageFromType(storageType){switch(storageType){case(Common.SettingStorageType.Local):return this._localStorage;case(Common.SettingStorageType.Session):return this._sessionStorage;case(Common.SettingStorageType.Global):return this._globalStorage;}
return this._globalStorage;}};Common.SettingsStorage=class{constructor(object,setCallback,removeCallback,removeAllCallback,storagePrefix){this._object=object;this._setCallback=setCallback||function(){};this._removeCallback=removeCallback||function(){};this._removeAllCallback=removeAllCallback||function(){};this._storagePrefix=storagePrefix||'';}
set(name,value){name=this._storagePrefix+name;this._object[name]=value;this._setCallback(name,value);}
has(name){name=this._storagePrefix+name;return name in this._object;}
get(name){name=this._storagePrefix+name;return this._object[name];}
remove(name){name=this._storagePrefix+name;delete this._object[name];this._removeCallback(name);}
removeAll(){this._object={};this._removeAllCallback();}
_dumpSizes(){Common.console.log('Ten largest settings: ');var sizes={__proto__:null};for(var key in this._object)
sizes[key]=this._object[key].length;var keys=Object.keys(sizes);function comparator(key1,key2){return sizes[key2]-sizes[key1];}
keys.sort(comparator);for(var i=0;i<10&&i<keys.length;++i)
Common.console.log('Setting: \''+keys[i]+'\', size: '+sizes[keys[i]]);}};Common.Setting=class{constructor(settings,name,defaultValue,eventSupport,storage){this._settings=settings;this._name=name;this._defaultValue=defaultValue;this._eventSupport=eventSupport;this._storage=storage;this._title='';}
addChangeListener(listener,thisObject){this._eventSupport.addEventListener(this._name,listener,thisObject);}
removeChangeListener(listener,thisObject){this._eventSupport.removeEventListener(this._name,listener,thisObject);}
get name(){return this._name;}
title(){return this._title;}
setTitle(title){this._title=title;}
get(){if(typeof this._value!=='undefined')
return this._value;this._value=this._defaultValue;if(this._storage.has(this._name)){try{this._value=JSON.parse(this._storage.get(this._name));}catch(e){this._storage.remove(this._name);}}
return this._value;}
set(value){this._value=value;try{var settingString=JSON.stringify(value);try{this._storage.set(this._name,settingString);}catch(e){this._printSettingsSavingError(e.message,this._name,settingString);}}catch(e){Common.console.error('Cannot stringify setting with name: '+this._name+', error: '+e.message);}
this._eventSupport.dispatchEventToListeners(this._name,value);}
remove(){this._settings._registry.delete(this._name);this._settings._moduleSettings.delete(this._name);this._storage.remove(this._name);}
_printSettingsSavingError(message,name,value){var errorMessage='Error saving setting with name: '+this._name+', value length: '+value.length+'. Error: '+message;console.error(errorMessage);Common.console.error(errorMessage);this._storage._dumpSizes();}};Common.RegExpSetting=class extends Common.Setting{constructor(settings,name,defaultValue,eventSupport,storage,regexFlags){super(settings,name,defaultValue?[{pattern:defaultValue}]:[],eventSupport,storage);this._regexFlags=regexFlags;}
get(){var result=[];var items=this.getAsArray();for(var i=0;i<items.length;++i){var item=items[i];if(item.pattern&&!item.disabled)
result.push(item.pattern);}
return result.join('|');}
getAsArray(){return super.get();}
set(value){this.setAsArray([{pattern:value}]);}
setAsArray(value){delete this._regex;super.set(value);}
asRegExp(){if(typeof this._regex!=='undefined')
return this._regex;this._regex=null;try{var pattern=this.get();if(pattern)
this._regex=new RegExp(pattern,this._regexFlags||'');}catch(e){}
return this._regex;}};Common.VersionController=class{updateVersion(){var localStorageVersion=window.localStorage?window.localStorage[Common.VersionController._currentVersionName]:0;var versionSetting=Common.settings.createSetting(Common.VersionController._currentVersionName,0);var currentVersion=Common.VersionController.currentVersion;var oldVersion=versionSetting.get()||parseInt(localStorageVersion||'0',10);if(oldVersion===0){versionSetting.set(currentVersion);return;}
var methodsToRun=this._methodsToRunToUpdateVersion(oldVersion,currentVersion);for(var i=0;i<methodsToRun.length;++i)
this[methodsToRun[i]].call(this);versionSetting.set(currentVersion);}
_methodsToRunToUpdateVersion(oldVersion,currentVersion){var result=[];for(var i=oldVersion;i<currentVersion;++i)
result.push('_updateVersionFrom'+i+'To'+(i+1));return result;}
_updateVersionFrom0To1(){this._clearBreakpointsWhenTooMany(Common.settings.createLocalSetting('breakpoints',[]),500000);}
_updateVersionFrom1To2(){Common.settings.createSetting('previouslyViewedFiles',[]).set([]);}
_updateVersionFrom2To3(){Common.settings.createSetting('fileSystemMapping',{}).set({});Common.settings.createSetting('fileMappingEntries',[]).remove();}
_updateVersionFrom3To4(){var advancedMode=Common.settings.createSetting('showHeaSnapshotObjectsHiddenProperties',false);Common.moduleSetting('showAdvancedHeapSnapshotProperties').set(advancedMode.get());advancedMode.remove();}
_updateVersionFrom4To5(){var settingNames={'FileSystemViewSidebarWidth':'fileSystemViewSplitViewState','elementsSidebarWidth':'elementsPanelSplitViewState','StylesPaneSplitRatio':'stylesPaneSplitViewState','heapSnapshotRetainersViewSize':'heapSnapshotSplitViewState','InspectorView.splitView':'InspectorView.splitViewState','InspectorView.screencastSplitView':'InspectorView.screencastSplitViewState','Inspector.drawerSplitView':'Inspector.drawerSplitViewState','layerDetailsSplitView':'layerDetailsSplitViewState','networkSidebarWidth':'networkPanelSplitViewState','sourcesSidebarWidth':'sourcesPanelSplitViewState','scriptsPanelNavigatorSidebarWidth':'sourcesPanelNavigatorSplitViewState','sourcesPanelSplitSidebarRatio':'sourcesPanelDebuggerSidebarSplitViewState','timeline-details':'timelinePanelDetailsSplitViewState','timeline-split':'timelinePanelRecorsSplitViewState','timeline-view':'timelinePanelTimelineStackSplitViewState','auditsSidebarWidth':'auditsPanelSplitViewState','layersSidebarWidth':'layersPanelSplitViewState','profilesSidebarWidth':'profilesPanelSplitViewState','resourcesSidebarWidth':'resourcesPanelSplitViewState'};var empty={};for(var oldName in settingNames){var newName=settingNames[oldName];var oldNameH=oldName+'H';var newValue=null;var oldSetting=Common.settings.createSetting(oldName,empty);if(oldSetting.get()!==empty){newValue=newValue||{};newValue.vertical={};newValue.vertical.size=oldSetting.get();oldSetting.remove();}
var oldSettingH=Common.settings.createSetting(oldNameH,empty);if(oldSettingH.get()!==empty){newValue=newValue||{};newValue.horizontal={};newValue.horizontal.size=oldSettingH.get();oldSettingH.remove();}
if(newValue)
Common.settings.createSetting(newName,{}).set(newValue);}}
_updateVersionFrom5To6(){var settingNames={'debuggerSidebarHidden':'sourcesPanelSplitViewState','navigatorHidden':'sourcesPanelNavigatorSplitViewState','WebInspector.Drawer.showOnLoad':'Inspector.drawerSplitViewState'};for(var oldName in settingNames){var oldSetting=Common.settings.createSetting(oldName,null);if(oldSetting.get()===null){oldSetting.remove();continue;}
var newName=settingNames[oldName];var invert=oldName==='WebInspector.Drawer.showOnLoad';var hidden=oldSetting.get()!==invert;oldSetting.remove();var showMode=hidden?'OnlyMain':'Both';var newSetting=Common.settings.createSetting(newName,{});var newValue=newSetting.get()||{};newValue.vertical=newValue.vertical||{};newValue.vertical.showMode=showMode;newValue.horizontal=newValue.horizontal||{};newValue.horizontal.showMode=showMode;newSetting.set(newValue);}}
_updateVersionFrom6To7(){var settingNames={'sourcesPanelNavigatorSplitViewState':'sourcesPanelNavigatorSplitViewState','elementsPanelSplitViewState':'elementsPanelSplitViewState','stylesPaneSplitViewState':'stylesPaneSplitViewState','sourcesPanelDebuggerSidebarSplitViewState':'sourcesPanelDebuggerSidebarSplitViewState'};var empty={};for(var name in settingNames){var setting=Common.settings.createSetting(name,empty);var value=setting.get();if(value===empty)
continue;if(value.vertical&&value.vertical.size&&value.vertical.size<1)
value.vertical.size=0;if(value.horizontal&&value.horizontal.size&&value.horizontal.size<1)
value.horizontal.size=0;setting.set(value);}}
_updateVersionFrom7To8(){}
_updateVersionFrom8To9(){var settingNames=['skipStackFramesPattern','workspaceFolderExcludePattern'];for(var i=0;i<settingNames.length;++i){var setting=Common.settings.createSetting(settingNames[i],'');var value=setting.get();if(!value)
return;if(typeof value==='string')
value=[value];for(var j=0;j<value.length;++j){if(typeof value[j]==='string')
value[j]={pattern:value[j]};}
setting.set(value);}}
_updateVersionFrom9To10(){if(!window.localStorage)
return;for(var key in window.localStorage){if(key.startsWith('revision-history'))
window.localStorage.removeItem(key);}}
_updateVersionFrom10To11(){var oldSettingName='customDevicePresets';var newSettingName='customEmulatedDeviceList';var oldSetting=Common.settings.createSetting(oldSettingName,undefined);var list=oldSetting.get();if(!Array.isArray(list))
return;var newList=[];for(var i=0;i<list.length;++i){var value=list[i];var device={};device['title']=value['title'];device['type']='unknown';device['user-agent']=value['userAgent'];device['capabilities']=[];if(value['touch'])
device['capabilities'].push('touch');if(value['mobile'])
device['capabilities'].push('mobile');device['screen']={};device['screen']['vertical']={width:value['width'],height:value['height']};device['screen']['horizontal']={width:value['height'],height:value['width']};device['screen']['device-pixel-ratio']=value['deviceScaleFactor'];device['modes']=[];device['show-by-default']=true;device['show']='Default';newList.push(device);}
if(newList.length)
Common.settings.createSetting(newSettingName,[]).set(newList);oldSetting.remove();}
_updateVersionFrom11To12(){this._migrateSettingsFromLocalStorage();}
_updateVersionFrom12To13(){this._migrateSettingsFromLocalStorage();Common.settings.createSetting('timelineOverviewMode','').remove();}
_updateVersionFrom13To14(){var defaultValue={'throughput':-1,'latency':0};Common.settings.createSetting('networkConditions',defaultValue).set(defaultValue);}
_updateVersionFrom14To15(){var setting=Common.settings.createLocalSetting('workspaceExcludedFolders',{});var oldValue=setting.get();var newValue={};for(var fileSystemPath in oldValue){newValue[fileSystemPath]=[];for(var entry of oldValue[fileSystemPath])
newValue[fileSystemPath].push(entry.path);}
setting.set(newValue);}
_updateVersionFrom15To16(){var setting=Common.settings.createSetting('InspectorView.panelOrder',{});var tabOrders=setting.get();for(var key of Object.keys(tabOrders))
tabOrders[key]=(tabOrders[key]+1)*10;setting.set(tabOrders);}
_updateVersionFrom16To17(){var setting=Common.settings.createSetting('networkConditionsCustomProfiles',[]);var oldValue=setting.get();var newValue=[];if(Array.isArray(oldValue)){for(var preset of oldValue){if(typeof preset.title==='string'&&typeof preset.value==='object'&&typeof preset.value.throughput==='number'&&typeof preset.value.latency==='number'){newValue.push({title:preset.title,value:{download:preset.value.throughput,upload:preset.value.throughput,latency:preset.value.latency}});}}}
setting.set(newValue);}
_updateVersionFrom17To18(){var setting=Common.settings.createLocalSetting('workspaceExcludedFolders',{});var oldValue=setting.get();var newValue={};for(var oldKey in oldValue){var newKey=oldKey.replace(/\\/g,'/');if(!newKey.startsWith('file://')){if(newKey.startsWith('/'))
newKey='file://'+newKey;else
newKey='file:///'+newKey;}
newValue[newKey]=oldValue[oldKey];}
setting.set(newValue);}
_updateVersionFrom18To19(){var defaultColumns={status:true,type:true,initiator:true,size:true,time:true};var visibleColumnSettings=Common.settings.createSetting('networkLogColumnsVisibility',defaultColumns);var visibleColumns=visibleColumnSettings.get();visibleColumns.name=true;visibleColumns.timeline=true;var configs={};for(var columnId in visibleColumns){if(!visibleColumns.hasOwnProperty(columnId))
continue;configs[columnId.toLowerCase()]={visible:visibleColumns[columnId]};}
var newSetting=Common.settings.createSetting('networkLogColumns',{});newSetting.set(configs);visibleColumnSettings.remove();}
_updateVersionFrom19To20(){var oldSetting=Common.settings.createSetting('InspectorView.panelOrder',{});var newSetting=Common.settings.createSetting('panel-tabOrder',{});newSetting.set(oldSetting.get());oldSetting.remove();}
_updateVersionFrom20To21(){var networkColumns=Common.settings.createSetting('networkLogColumns',{});var columns=(networkColumns.get());delete columns['timeline'];delete columns['waterfall'];networkColumns.set(columns);}
_updateVersionFrom21To22(){var breakpointsSetting=Common.settings.createLocalSetting('breakpoints',[]);var breakpoints=breakpointsSetting.get();for(var breakpoint of breakpoints){breakpoint['url']=breakpoint['sourceFileId'];delete breakpoint['sourceFileId'];}
breakpointsSetting.set(breakpoints);}
_updateVersionFrom22To23(){}
_updateVersionFrom23To24(){var oldSetting=Common.settings.createSetting('searchInContentScripts',false);var newSetting=Common.settings.createSetting('searchInAnonymousAndContentScripts',false);newSetting.set(oldSetting.get());oldSetting.remove();}
_migrateSettingsFromLocalStorage(){var localSettings=new Set(['advancedSearchConfig','breakpoints','consoleHistory','domBreakpoints','eventListenerBreakpoints','fileSystemMapping','lastSelectedSourcesSidebarPaneTab','previouslyViewedFiles','savedURLs','watchExpressions','workspaceExcludedFolders','xhrBreakpoints']);if(!window.localStorage)
return;for(var key in window.localStorage){if(localSettings.has(key))
continue;var value=window.localStorage[key];window.localStorage.removeItem(key);Common.settings._globalStorage[key]=value;}}
_clearBreakpointsWhenTooMany(breakpointsSetting,maxBreakpointsCount){if(breakpointsSetting.get().length>maxBreakpointsCount)
breakpointsSetting.set([]);}};Common.VersionController._currentVersionName='inspectorVersion';Common.VersionController.currentVersion=24;Common.settings;Common.SettingStorageType={Global:Symbol('Global'),Local:Symbol('Local'),Session:Symbol('Session')};Common.moduleSetting=function(settingName){return Common.settings.moduleSetting(settingName);};Common.settingForTest=function(settingName){return Common.settings.settingForTest(settingName);};;Common.StaticContentProvider=class{constructor(contentURL,contentType,lazyContent){this._contentURL=contentURL;this._contentType=contentType;this._lazyContent=lazyContent;}
static fromString(contentURL,contentType,content){var lazyContent=()=>Promise.resolve(content);return new Common.StaticContentProvider(contentURL,contentType,lazyContent);}
contentURL(){return this._contentURL;}
contentType(){return this._contentType;}
requestContent(){return this._lazyContent();}
searchInContent(query,caseSensitive,isRegex,callback){function performSearch(content){if(!content){callback(([]));return;}
callback(Common.ContentProvider.performSearchInContent(content,query,caseSensitive,isRegex));}
this._lazyContent().then(performSearch);}};;Common.OutputStream=function(){};Common.OutputStream.prototype={write(data,callback){},close(){}};Common.StringOutputStream=class{constructor(){this._data='';}
write(chunk,callback){this._data+=chunk;}
close(){}
data(){return this._data;}};;Common.Segment=class{constructor(begin,end,data){if(begin>end)
console.assert(false,'Invalid segment');this.begin=begin;this.end=end;this.data=data;}
intersects(that){return this.begin<that.end&&that.begin<this.end;}};Common.SegmentedRange=class{constructor(mergeCallback){this._segments=[];this._mergeCallback=mergeCallback;}
append(newSegment){var startIndex=this._segments.lowerBound(newSegment,(a,b)=>a.begin-b.begin);var endIndex=startIndex;var merged=null;if(startIndex>0){var precedingSegment=this._segments[startIndex-1];merged=this._tryMerge(precedingSegment,newSegment);if(merged){--startIndex;newSegment=merged;}else if(this._segments[startIndex-1].end>=newSegment.begin){if(newSegment.end<precedingSegment.end){this._segments.splice(startIndex,0,new Common.Segment(newSegment.end,precedingSegment.end,precedingSegment.data));}
precedingSegment.end=newSegment.begin;}}
while(endIndex<this._segments.length&&this._segments[endIndex].end<=newSegment.end)
++endIndex;if(endIndex<this._segments.length){merged=this._tryMerge(newSegment,this._segments[endIndex]);if(merged){endIndex++;newSegment=merged;}else if(newSegment.intersects(this._segments[endIndex])){this._segments[endIndex].begin=newSegment.end;}}
this._segments.splice(startIndex,endIndex-startIndex,newSegment);}
appendRange(that){that.segments().forEach(segment=>this.append(segment));}
segments(){return this._segments;}
_tryMerge(first,second){var merged=this._mergeCallback&&this._mergeCallback(first,second);if(!merged)
return null;merged.begin=first.begin;merged.end=Math.max(first.end,second.end);return merged;}};;self['Common']=self['Common']||{};Common.Text=class{constructor(value){this._value=value;}
lineEndings(){if(!this._lineEndings)
this._lineEndings=this._value.computeLineEndings();return this._lineEndings;}
value(){return this._value;}
lineCount(){var lineEndings=this.lineEndings();return lineEndings.length;}
offsetFromPosition(lineNumber,columnNumber){return(lineNumber?this.lineEndings()[lineNumber-1]+1:0)+columnNumber;}
positionFromOffset(offset){var lineEndings=this.lineEndings();var lineNumber=lineEndings.lowerBound(offset);return{lineNumber:lineNumber,columnNumber:offset-(lineNumber&&(lineEndings[lineNumber-1]+1))};}
lineAt(lineNumber){var lineEndings=this.lineEndings();var lineStart=lineNumber>0?lineEndings[lineNumber-1]+1:0;var lineEnd=lineEndings[lineNumber];var lineContent=this._value.substring(lineStart,lineEnd);if(lineContent.length>0&&lineContent.charAt(lineContent.length-1)==='\r')
lineContent=lineContent.substring(0,lineContent.length-1);return lineContent;}
toSourceRange(range){var start=this.offsetFromPosition(range.startLine,range.startColumn);var end=this.offsetFromPosition(range.endLine,range.endColumn);return new Common.SourceRange(start,end-start);}
toTextRange(sourceRange){var cursor=new Common.TextCursor(this.lineEndings());var result=Common.TextRange.createFromLocation(0,0);cursor.resetTo(sourceRange.offset);result.startLine=cursor.lineNumber();result.startColumn=cursor.columnNumber();cursor.advance(sourceRange.offset+sourceRange.length);result.endLine=cursor.lineNumber();result.endColumn=cursor.columnNumber();return result;}
replaceRange(range,replacement){var sourceRange=this.toSourceRange(range);return this._value.substring(0,sourceRange.offset)+replacement+
this._value.substring(sourceRange.offset+sourceRange.length);}
extract(range){var sourceRange=this.toSourceRange(range);return this._value.substr(sourceRange.offset,sourceRange.length);}};Common.Text.Position;Common.TextCursor=class{constructor(lineEndings){this._lineEndings=lineEndings;this._offset=0;this._lineNumber=0;this._columnNumber=0;}
advance(offset){this._offset=offset;while(this._lineNumber<this._lineEndings.length&&this._lineEndings[this._lineNumber]<this._offset)
++this._lineNumber;this._columnNumber=this._lineNumber?this._offset-this._lineEndings[this._lineNumber-1]-1:this._offset;}
offset(){return this._offset;}
resetTo(offset){this._offset=offset;this._lineNumber=this._lineEndings.lowerBound(offset);this._columnNumber=this._lineNumber?this._offset-this._lineEndings[this._lineNumber-1]-1:this._offset;}
lineNumber(){return this._lineNumber;}
columnNumber(){return this._columnNumber;}};;Common.TextRange=class{constructor(startLine,startColumn,endLine,endColumn){this.startLine=startLine;this.startColumn=startColumn;this.endLine=endLine;this.endColumn=endColumn;}
static createFromLocation(line,column){return new Common.TextRange(line,column,line,column);}
static fromObject(serializedTextRange){return new Common.TextRange(serializedTextRange.startLine,serializedTextRange.startColumn,serializedTextRange.endLine,serializedTextRange.endColumn);}
static comparator(range1,range2){return range1.compareTo(range2);}
static fromEdit(oldRange,newText){var endLine=oldRange.startLine;var endColumn=oldRange.startColumn+newText.length;var lineEndings=newText.computeLineEndings();if(lineEndings.length>1){endLine=oldRange.startLine+lineEndings.length-1;var len=lineEndings.length;endColumn=lineEndings[len-1]-lineEndings[len-2]-1;}
return new Common.TextRange(oldRange.startLine,oldRange.startColumn,endLine,endColumn);}
isEmpty(){return this.startLine===this.endLine&&this.startColumn===this.endColumn;}
immediatelyPrecedes(range){if(!range)
return false;return this.endLine===range.startLine&&this.endColumn===range.startColumn;}
immediatelyFollows(range){if(!range)
return false;return range.immediatelyPrecedes(this);}
follows(range){return(range.endLine===this.startLine&&range.endColumn<=this.startColumn)||range.endLine<this.startLine;}
get linesCount(){return this.endLine-this.startLine;}
collapseToEnd(){return new Common.TextRange(this.endLine,this.endColumn,this.endLine,this.endColumn);}
collapseToStart(){return new Common.TextRange(this.startLine,this.startColumn,this.startLine,this.startColumn);}
normalize(){if(this.startLine>this.endLine||(this.startLine===this.endLine&&this.startColumn>this.endColumn))
return new Common.TextRange(this.endLine,this.endColumn,this.startLine,this.startColumn);else
return this.clone();}
clone(){return new Common.TextRange(this.startLine,this.startColumn,this.endLine,this.endColumn);}
serializeToObject(){var serializedTextRange={};serializedTextRange.startLine=this.startLine;serializedTextRange.startColumn=this.startColumn;serializedTextRange.endLine=this.endLine;serializedTextRange.endColumn=this.endColumn;return serializedTextRange;}
compareTo(other){if(this.startLine>other.startLine)
return 1;if(this.startLine<other.startLine)
return-1;if(this.startColumn>other.startColumn)
return 1;if(this.startColumn<other.startColumn)
return-1;return 0;}
compareToPosition(lineNumber,columnNumber){if(lineNumber<this.startLine||(lineNumber===this.startLine&&columnNumber<this.startColumn))
return-1;if(lineNumber>this.endLine||(lineNumber===this.endLine&&columnNumber>this.endColumn))
return 1;return 0;}
equal(other){return this.startLine===other.startLine&&this.endLine===other.endLine&&this.startColumn===other.startColumn&&this.endColumn===other.endColumn;}
relativeTo(line,column){var relative=this.clone();if(this.startLine===line)
relative.startColumn-=column;if(this.endLine===line)
relative.endColumn-=column;relative.startLine-=line;relative.endLine-=line;return relative;}
rebaseAfterTextEdit(originalRange,editedRange){console.assert(originalRange.startLine===editedRange.startLine);console.assert(originalRange.startColumn===editedRange.startColumn);var rebase=this.clone();if(!this.follows(originalRange))
return rebase;var lineDelta=editedRange.endLine-originalRange.endLine;var columnDelta=editedRange.endColumn-originalRange.endColumn;rebase.startLine+=lineDelta;rebase.endLine+=lineDelta;if(rebase.startLine===editedRange.endLine)
rebase.startColumn+=columnDelta;if(rebase.endLine===editedRange.endLine)
rebase.endColumn+=columnDelta;return rebase;}
toString(){return JSON.stringify(this);}
containsLocation(lineNumber,columnNumber){if(this.startLine===this.endLine)
return this.startLine===lineNumber&&this.startColumn<=columnNumber&&columnNumber<=this.endColumn;if(this.startLine===lineNumber)
return this.startColumn<=columnNumber;if(this.endLine===lineNumber)
return columnNumber<=this.endColumn;return this.startLine<lineNumber&&lineNumber<this.endLine;}};Common.SourceRange=class{constructor(offset,length){this.offset=offset;this.length=length;}};Common.SourceEdit=class{constructor(sourceURL,oldRange,newText){this.sourceURL=sourceURL;this.oldRange=oldRange;this.newText=newText;}
static comparator(edit1,edit2){return Common.TextRange.comparator(edit1.oldRange,edit2.oldRange);}
newRange(){return Common.TextRange.fromEdit(this.oldRange,this.newText);}};;Common.TextUtils={isStopChar:function(char){return(char>' '&&char<'0')||(char>'9'&&char<'A')||(char>'Z'&&char<'_')||(char>'_'&&char<'a')||(char>'z'&&char<='~');},isWordChar:function(char){return!Common.TextUtils.isStopChar(char)&&!Common.TextUtils.isSpaceChar(char);},isSpaceChar:function(char){return Common.TextUtils._SpaceCharRegex.test(char);},isWord:function(word){for(var i=0;i<word.length;++i){if(!Common.TextUtils.isWordChar(word.charAt(i)))
return false;}
return true;},isOpeningBraceChar:function(char){return char==='('||char==='{';},isClosingBraceChar:function(char){return char===')'||char==='}';},isBraceChar:function(char){return Common.TextUtils.isOpeningBraceChar(char)||Common.TextUtils.isClosingBraceChar(char);},textToWords:function(text,isWordChar,wordCallback){var startWord=-1;for(var i=0;i<text.length;++i){if(!isWordChar(text.charAt(i))){if(startWord!==-1)
wordCallback(text.substring(startWord,i));startWord=-1;}else if(startWord===-1){startWord=i;}}
if(startWord!==-1)
wordCallback(text.substring(startWord));},lineIndent:function(line){var indentation=0;while(indentation<line.length&&Common.TextUtils.isSpaceChar(line.charAt(indentation)))
++indentation;return line.substr(0,indentation);},isUpperCase:function(text){return text===text.toUpperCase();},isLowerCase:function(text){return text===text.toLowerCase();},splitStringByRegexes(text,regexes){var matches=[];var globalRegexes=[];for(var i=0;i<regexes.length;i++){var regex=regexes[i];if(!regex.global)
globalRegexes.push(new RegExp(regex.source,regex.flags?regex.flags+'g':'g'));else
globalRegexes.push(regex);}
doSplit(text,0,0);return matches;function doSplit(text,regexIndex,startIndex){if(regexIndex>=globalRegexes.length){matches.push({value:text,position:startIndex,regexIndex:-1});return;}
var regex=globalRegexes[regexIndex];var currentIndex=0;var result;regex.lastIndex=0;while((result=regex.exec(text))!==null){var stringBeforeMatch=text.substring(currentIndex,result.index);if(stringBeforeMatch)
doSplit(stringBeforeMatch,regexIndex+1,startIndex+currentIndex);var match=result[0];matches.push({value:match,position:startIndex+result.index,regexIndex:regexIndex});currentIndex=result.index+match.length;}
var stringAfterMatches=text.substring(currentIndex);if(stringAfterMatches)
doSplit(stringAfterMatches,regexIndex+1,startIndex+currentIndex);}}};Common.TextUtils._SpaceCharRegex=/\s/;Common.TextUtils.Indent={TwoSpaces:'  ',FourSpaces:'    ',EightSpaces:'        ',TabCharacter:'\t'};Common.TextUtils.BalancedJSONTokenizer=class{constructor(callback,findMultiple){this._callback=callback;this._index=0;this._balance=0;this._buffer='';this._findMultiple=findMultiple||false;this._closingDoubleQuoteRegex=/[^\\](?:\\\\)*"/g;}
write(chunk){this._buffer+=chunk;var lastIndex=this._buffer.length;var buffer=this._buffer;for(var index=this._index;index<lastIndex;++index){var character=buffer[index];if(character==='"'){this._closingDoubleQuoteRegex.lastIndex=index;if(!this._closingDoubleQuoteRegex.test(buffer))
break;index=this._closingDoubleQuoteRegex.lastIndex-1;}else if(character==='{'){++this._balance;}else if(character==='}'){--this._balance;if(this._balance<0){this._reportBalanced();return false;}
if(!this._balance){this._lastBalancedIndex=index+1;if(!this._findMultiple)
break;}}else if(character===']'&&!this._balance){this._reportBalanced();return false;}}
this._index=index;this._reportBalanced();return true;}
_reportBalanced(){if(!this._lastBalancedIndex)
return;this._callback(this._buffer.slice(0,this._lastBalancedIndex));this._buffer=this._buffer.slice(this._lastBalancedIndex);this._index-=this._lastBalancedIndex;this._lastBalancedIndex=0;}
remainder(){return this._buffer;}};Common.TokenizerFactory=function(){};Common.TokenizerFactory.prototype={createTokenizer(mimeType){}};;Common.Throttler=class{constructor(timeout){this._timeout=timeout;this._isRunningProcess=false;this._asSoonAsPossible=false;this._process=null;this._lastCompleteTime=0;}
_processCompleted(){this._lastCompleteTime=window.performance.now();this._isRunningProcess=false;if(this._process)
this._innerSchedule(false);this._processCompletedForTests();}
_processCompletedForTests(){}
_onTimeout(){delete this._processTimeout;this._asSoonAsPossible=false;this._isRunningProcess=true;Promise.resolve().then(this._process).catch(console.error.bind(console)).then(this._processCompleted.bind(this));this._process=null;}
schedule(process,asSoonAsPossible){this._process=process;var hasScheduledTasks=!!this._processTimeout||this._isRunningProcess;var okToFire=window.performance.now()-this._lastCompleteTime>this._timeout;asSoonAsPossible=!!asSoonAsPossible||(!hasScheduledTasks&&okToFire);var forceTimerUpdate=asSoonAsPossible&&!this._asSoonAsPossible;this._asSoonAsPossible=this._asSoonAsPossible||asSoonAsPossible;this._innerSchedule(forceTimerUpdate);}
flush(){if(this._process)
this._onTimeout();}
_innerSchedule(forceTimerUpdate){if(this._isRunningProcess)
return;if(this._processTimeout&&!forceTimerUpdate)
return;if(this._processTimeout)
this._clearTimeout(this._processTimeout);var timeout=this._asSoonAsPossible?0:this._timeout;this._processTimeout=this._setTimeout(this._onTimeout.bind(this),timeout);}
_clearTimeout(timeoutId){clearTimeout(timeoutId);}
_setTimeout(operation,timeout){return setTimeout(operation,timeout);}};Common.Throttler.FinishCallback;;Common.Trie=class{constructor(){this.clear();}
add(word){var node=this._root;++this._wordsInSubtree[this._root];for(var i=0;i<word.length;++i){var edge=word[i];var next=this._edges[node][edge];if(!next){if(this._freeNodes.length){next=this._freeNodes.pop();}else{next=this._size++;this._isWord.push(false);this._wordsInSubtree.push(0);this._edges.push({__proto__:null});}
this._edges[node][edge]=next;}
++this._wordsInSubtree[next];node=next;}
this._isWord[node]=true;}
remove(word){if(!this.has(word))
return false;var node=this._root;--this._wordsInSubtree[this._root];for(var i=0;i<word.length;++i){var edge=word[i];var next=this._edges[node][edge];if(!--this._wordsInSubtree[next]){delete this._edges[node][edge];this._freeNodes.push(next);}
node=next;}
this._isWord[node]=false;return true;}
has(word){var node=this._root;for(var i=0;i<word.length;++i){node=this._edges[node][word[i]];if(!node)
return false;}
return this._isWord[node];}
words(prefix){prefix=prefix||'';var node=this._root;for(var i=0;i<prefix.length;++i){node=this._edges[node][prefix[i]];if(!node)
return[];}
var results=[];this._dfs(node,prefix,results);return results;}
_dfs(node,prefix,results){if(this._isWord[node])
results.push(prefix);var edges=this._edges[node];for(var edge in edges)
this._dfs(edges[edge],prefix+edge,results);}
longestPrefix(word,fullWordOnly){var node=this._root;var wordIndex=0;for(var i=0;i<word.length;++i){node=this._edges[node][word[i]];if(!node)
break;if(!fullWordOnly||this._isWord[node])
wordIndex=i+1;}
return word.substring(0,wordIndex);}
clear(){this._size=1;this._root=0;this._edges=[{__proto__:null}];this._isWord=[false];this._wordsInSubtree=[0];this._freeNodes=[];}};;self['Common']=self['Common']||{};Common.UIString=function(string,vararg){return String.vsprintf(Common.localize(string),Array.prototype.slice.call(arguments,1));};Common.UIString.capitalize=function(string,vararg){if(Common._useLowerCaseMenuTitles===undefined)
throw'Common.setLocalizationPlatform() has not been called';var localized=Common.localize(string);var capitalized;if(Common._useLowerCaseMenuTitles){capitalized=localized.replace(/\^(.)/g,'$1');}else{capitalized=localized.replace(/\^(.)/g,function(str,char){return char.toUpperCase();});}
return String.vsprintf(capitalized,Array.prototype.slice.call(arguments,1));};Common.setLocalizationPlatform=function(platform){Common._useLowerCaseMenuTitles=platform==='windows';};Common.localize=function(string){return string;};Common.UIStringFormat=class{constructor(format){this._localizedFormat=Common.localize(format);this._tokenizedFormat=String.tokenizeFormatString(this._localizedFormat,String.standardFormatters);}
static _append(a,b){return a+b;}
format(vararg){return String.format(this._localizedFormat,arguments,String.standardFormatters,'',Common.UIStringFormat._append,this._tokenizedFormat).formattedResult;}};;Common.Renderer=function(){};Common.Renderer.prototype={render(object){}};Common.Renderer.renderPromise=function(object){if(!object)
return Promise.reject(new Error('Can\'t render '+object));return self.runtime.extension(Common.Renderer,object).instance().then(render);function render(renderer){return renderer.render(object);}};Common.Revealer=function(){};Common.Revealer.reveal=function(revealable,omitFocus){Common.Revealer.revealPromise(revealable,omitFocus);};Common.Revealer.revealPromise=function(revealable,omitFocus){if(!revealable)
return Promise.reject(new Error('Can\'t reveal '+revealable));return self.runtime.allInstances(Common.Revealer,revealable).then(reveal);function reveal(revealers){var promises=[];for(var i=0;i<revealers.length;++i)
promises.push(revealers[i].reveal((revealable),omitFocus));return Promise.race(promises);}};Common.Revealer.prototype={reveal(object,omitFocus){}};Common.App=function(){};Common.App.prototype={presentUI(document){}};Common.AppProvider=function(){};Common.AppProvider.prototype={createApp(){}};Common.QueryParamHandler=function(){};Common.QueryParamHandler.prototype={handleQueryParam(value){}};;Common.FormatterWorkerPool=class{constructor(){this._taskQueue=[];this._workerTasks=new Map();}
_createWorker(){var worker=new Common.Worker('formatter_worker');worker.onmessage=this._onWorkerMessage.bind(this,worker);worker.onerror=this._onWorkerError.bind(this,worker);return worker;}
_processNextTask(){if(!this._taskQueue.length)
return;var freeWorker=this._workerTasks.keysArray().find(worker=>!this._workerTasks.get(worker));if(!freeWorker&&this._workerTasks.size<Common.FormatterWorkerPool.MaxWorkers)
freeWorker=this._createWorker();if(!freeWorker)
return;var task=this._taskQueue.shift();this._workerTasks.set(freeWorker,task);freeWorker.postMessage({method:task.method,params:task.params});}
_onWorkerMessage(worker,event){var task=this._workerTasks.get(worker);if(task.isChunked&&event.data&&!event.data['isLastChunk']){task.callback(event.data);return;}
this._workerTasks.set(worker,null);this._processNextTask();task.callback(event.data?event.data:null);}
_onWorkerError(worker,event){console.error(event);var task=this._workerTasks.get(worker);worker.terminate();this._workerTasks.delete(worker);var newWorker=this._createWorker();this._workerTasks.set(newWorker,null);this._processNextTask();task.callback(null);}
_runChunkedTask(methodName,params,callback){var task=new Common.FormatterWorkerPool.Task(methodName,params,onData,true);this._taskQueue.push(task);this._processNextTask();function onData(data){if(!data){callback(true,null);return;}
var isLastChunk=!!data['isLastChunk'];var chunk=data['chunk'];callback(isLastChunk,chunk);}}
_runTask(methodName,params){var callback;var promise=new Promise(fulfill=>callback=fulfill);var task=new Common.FormatterWorkerPool.Task(methodName,params,callback,false);this._taskQueue.push(task);this._processNextTask();return promise;}
parseJSONRelaxed(content){return this._runTask('parseJSONRelaxed',{content:content});}
parseSCSS(content){return this._runTask('parseSCSS',{content:content}).then(rules=>rules||[]);}
format(mimeType,content,indentString){var parameters={mimeType:mimeType,content:content,indentString:indentString};return(this._runTask('format',parameters));}
javaScriptIdentifiers(content){return this._runTask('javaScriptIdentifiers',{content:content}).then(ids=>ids||[]);}
evaluatableJavaScriptSubstring(content){return this._runTask('evaluatableJavaScriptSubstring',{content:content}).then(text=>text||'');}
parseCSS(content,callback){this._runChunkedTask('parseCSS',{content:content},onDataChunk);function onDataChunk(isLastChunk,data){var rules=(data||[]);callback(isLastChunk,rules);}}
javaScriptOutline(content,callback){this._runChunkedTask('javaScriptOutline',{content:content},onDataChunk);function onDataChunk(isLastChunk,data){var items=(data||[]);callback(isLastChunk,items);}}};Common.FormatterWorkerPool.MaxWorkers=2;Common.FormatterWorkerPool.Task=class{constructor(method,params,callback,isChunked){this.method=method;this.params=params;this.callback=callback;this.isChunked=isChunked;}};Common.FormatterWorkerPool.FormatResult=class{constructor(){this.content;this.mapping;}};Common.FormatterWorkerPool.FormatMapping;Common.FormatterWorkerPool.JSOutlineItem=class{constructor(){this.name;this.arguments;this.line;this.column;}};Common.FormatterWorkerPool.TextRange;Common.FormatterWorkerPool.CSSProperty=class{constructor(){this.name;this.nameRange;this.value;this.valueRange;this.range;this.disabled;}};Common.FormatterWorkerPool.CSSStyleRule=class{constructor(){this.selectorText;this.styleRange;this.lineNumber;this.columnNumber;this.properties;}};Common.FormatterWorkerPool.CSSAtRule;Common.FormatterWorkerPool.CSSRule;Common.FormatterWorkerPool.SCSSProperty=class{constructor(){this.range;this.name;this.value;this.disabled;}};Common.FormatterWorkerPool.SCSSRule=class{constructor(){this.selectors;this.properties;this.styleRange;}};Common.formatterWorkerPool;;Common.CharacterIdMap=class{constructor(){this._elementToCharacter=new Map();this._characterToElement=new Map();this._charCode=33;}
toChar(object){var character=this._elementToCharacter.get(object);if(!character){if(this._charCode>=0xFFFF)
throw new Error('CharacterIdMap ran out of capacity!');character=String.fromCharCode(this._charCode++);this._elementToCharacter.set(object,character);this._characterToElement.set(character,object);}
return character;}
fromChar(character){var object=this._characterToElement.get(character);if(object===undefined)
return null;return object;}};;self['Host']=self['Host']||{};function InspectorFrontendHostAPI(){}
window.InspectorFrontendHostAPI=InspectorFrontendHostAPI;InspectorFrontendHostAPI.ContextMenuDescriptor;InspectorFrontendHostAPI.LoadNetworkResourceResult;InspectorFrontendHostAPI.Events={AddExtensions:Symbol('addExtensions'),AppendedToURL:Symbol('appendedToURL'),CanceledSaveURL:Symbol('canceledSaveURL'),ContextMenuCleared:Symbol('contextMenuCleared'),ContextMenuItemSelected:Symbol('contextMenuItemSelected'),DeviceCountUpdated:Symbol('deviceCountUpdated'),DevicesDiscoveryConfigChanged:Symbol('devicesDiscoveryConfigChanged'),DevicesPortForwardingStatusChanged:Symbol('devicesPortForwardingStatusChanged'),DevicesUpdated:Symbol('devicesUpdated'),DispatchMessage:Symbol('dispatchMessage'),DispatchMessageChunk:Symbol('dispatchMessageChunk'),EnterInspectElementMode:Symbol('enterInspectElementMode'),EvaluateForTestInFrontend:Symbol('evaluateForTestInFrontend'),FileSystemsLoaded:Symbol('fileSystemsLoaded'),FileSystemRemoved:Symbol('fileSystemRemoved'),FileSystemAdded:Symbol('fileSystemAdded'),FileSystemFilesChangedAddedRemoved:Symbol('FileSystemFilesChangedAddedRemoved'),IndexingTotalWorkCalculated:Symbol('indexingTotalWorkCalculated'),IndexingWorked:Symbol('indexingWorked'),IndexingDone:Symbol('indexingDone'),KeyEventUnhandled:Symbol('keyEventUnhandled'),ReloadInspectedPage:Symbol('reloadInspectedPage'),RevealSourceLine:Symbol('revealSourceLine'),SavedURL:Symbol('savedURL'),SearchCompleted:Symbol('searchCompleted'),SetInspectedTabId:Symbol('setInspectedTabId'),SetUseSoftMenu:Symbol('setUseSoftMenu'),ShowPanel:Symbol('showPanel')};InspectorFrontendHostAPI.EventDescriptors=[[InspectorFrontendHostAPI.Events.AddExtensions,'addExtensions',['extensions']],[InspectorFrontendHostAPI.Events.AppendedToURL,'appendedToURL',['url']],[InspectorFrontendHostAPI.Events.CanceledSaveURL,'canceledSaveURL',['url']],[InspectorFrontendHostAPI.Events.ContextMenuCleared,'contextMenuCleared',[]],[InspectorFrontendHostAPI.Events.ContextMenuItemSelected,'contextMenuItemSelected',['id']],[InspectorFrontendHostAPI.Events.DeviceCountUpdated,'deviceCountUpdated',['count']],[InspectorFrontendHostAPI.Events.DevicesDiscoveryConfigChanged,'devicesDiscoveryConfigChanged',['discoverUsbDevices','portForwardingEnabled','portForwardingConfig']],[InspectorFrontendHostAPI.Events.DevicesPortForwardingStatusChanged,'devicesPortForwardingStatusChanged',['status']],[InspectorFrontendHostAPI.Events.DevicesUpdated,'devicesUpdated',['devices']],[InspectorFrontendHostAPI.Events.DispatchMessage,'dispatchMessage',['messageObject']],[InspectorFrontendHostAPI.Events.DispatchMessageChunk,'dispatchMessageChunk',['messageChunk','messageSize']],[InspectorFrontendHostAPI.Events.EnterInspectElementMode,'enterInspectElementMode',[]],[InspectorFrontendHostAPI.Events.EvaluateForTestInFrontend,'evaluateForTestInFrontend',['callId','script']],[InspectorFrontendHostAPI.Events.FileSystemsLoaded,'fileSystemsLoaded',['fileSystems']],[InspectorFrontendHostAPI.Events.FileSystemRemoved,'fileSystemRemoved',['fileSystemPath']],[InspectorFrontendHostAPI.Events.FileSystemAdded,'fileSystemAdded',['errorMessage','fileSystem']],[InspectorFrontendHostAPI.Events.FileSystemFilesChangedAddedRemoved,'fileSystemFilesChangedAddedRemoved',['changed','added','removed']],[InspectorFrontendHostAPI.Events.IndexingTotalWorkCalculated,'indexingTotalWorkCalculated',['requestId','fileSystemPath','totalWork']],[InspectorFrontendHostAPI.Events.IndexingWorked,'indexingWorked',['requestId','fileSystemPath','worked']],[InspectorFrontendHostAPI.Events.IndexingDone,'indexingDone',['requestId','fileSystemPath']],[InspectorFrontendHostAPI.Events.KeyEventUnhandled,'keyEventUnhandled',['event']],[InspectorFrontendHostAPI.Events.ReloadInspectedPage,'reloadInspectedPage',['hard']],[InspectorFrontendHostAPI.Events.RevealSourceLine,'revealSourceLine',['url','lineNumber','columnNumber']],[InspectorFrontendHostAPI.Events.SavedURL,'savedURL',['url']],[InspectorFrontendHostAPI.Events.SearchCompleted,'searchCompleted',['requestId','fileSystemPath','files']],[InspectorFrontendHostAPI.Events.SetInspectedTabId,'setInspectedTabId',['tabId']],[InspectorFrontendHostAPI.Events.SetUseSoftMenu,'setUseSoftMenu',['useSoftMenu']],[InspectorFrontendHostAPI.Events.ShowPanel,'showPanel',['panelName']]];InspectorFrontendHostAPI.prototype={addFileSystem(fileSystemPath){},append(url,content){},loadCompleted(){},indexPath(requestId,fileSystemPath){},getSelectionBackgroundColor(){},getSelectionForegroundColor(){},setInspectedPageBounds(bounds){},showCertificateViewer(certChain){},setWhitelistedShortcuts(shortcuts){},inspectElementCompleted(){},openInNewTab(url){},removeFileSystem(fileSystemPath){},requestFileSystems(){},save(url,content,forceSaveAs){},searchInPath(requestId,fileSystemPath,query){},stopIndexing(requestId){},bringToFront(){},closeWindow(){},copyText(text){},inspectedURLChanged(url){},isolatedFileSystem(fileSystemId,registeredName){},loadNetworkResource(url,headers,streamId,callback){},getPreferences(callback){},setPreference(name,value){},removePreference(name){},clearPreferences(){},upgradeDraggedFileSystemPermissions(fileSystem){},platform(){},recordEnumeratedHistogram(actionName,actionCode,bucketSize){},sendMessageToBackend(message){},setDevicesDiscoveryConfig(discoverUsbDevices,portForwardingEnabled,portForwardingConfig){},setDevicesUpdatesEnabled(enabled){},performActionOnRemotePage(pageId,action){},openRemotePage(browserId,url){},openNodeFrontend(){},setInjectedScriptForOrigin(origin,script){},setIsDocked(isDocked,callback){},zoomFactor(){},zoomIn(){},zoomOut(){},resetZoom(){},showContextMenuAtPoint(x,y,items,document){},reattach(callback){},isUnderTest(){},readyForTest(){},isHostedMode(){}};;Host.InspectorFrontendHostStub=class{constructor(){function stopEventPropagation(event){var zoomModifier=Host.isMac()?event.metaKey:event.ctrlKey;if(zoomModifier&&(event.keyCode===187||event.keyCode===189))
event.stopPropagation();}
document.addEventListener('keydown',stopEventPropagation,true);}
getSelectionBackgroundColor(){return'#6e86ff';}
getSelectionForegroundColor(){return'#ffffff';}
platform(){var match=navigator.userAgent.match(/Windows NT/);if(match)
return'windows';match=navigator.userAgent.match(/Mac OS X/);if(match)
return'mac';return'linux';}
loadCompleted(){}
bringToFront(){this._windowVisible=true;}
closeWindow(){this._windowVisible=false;}
setIsDocked(isDocked,callback){setTimeout(callback,0);}
setInspectedPageBounds(bounds){}
inspectElementCompleted(){}
setInjectedScriptForOrigin(origin,script){}
inspectedURLChanged(url){document.title=Common.UIString('Developer Tools - %s',url);}
copyText(text){Common.console.error('Clipboard is not enabled in hosted mode. Please inspect using chrome://inspect');}
openInNewTab(url){window.open(url,'_blank');}
save(url,content,forceSaveAs){Common.console.error('Saving files is not enabled in hosted mode. Please inspect using chrome://inspect');this.events.dispatchEventToListeners(InspectorFrontendHostAPI.Events.CanceledSaveURL,url);}
append(url,content){Common.console.error('Saving files is not enabled in hosted mode. Please inspect using chrome://inspect');}
sendMessageToBackend(message){}
recordEnumeratedHistogram(actionName,actionCode,bucketSize){}
requestFileSystems(){this.events.dispatchEventToListeners(InspectorFrontendHostAPI.Events.FileSystemsLoaded,[]);}
addFileSystem(fileSystemPath){}
removeFileSystem(fileSystemPath){}
isolatedFileSystem(fileSystemId,registeredName){return null;}
loadNetworkResource(url,headers,streamId,callback){Runtime.loadResourcePromise(url).then(function(text){Host.ResourceLoader.streamWrite(streamId,text);callback({statusCode:200});}).catch(function(){callback({statusCode:404});});}
getPreferences(callback){var prefs={};for(var name in window.localStorage)
prefs[name]=window.localStorage[name];callback(prefs);}
setPreference(name,value){window.localStorage[name]=value;}
removePreference(name){delete window.localStorage[name];}
clearPreferences(){window.localStorage.clear();}
upgradeDraggedFileSystemPermissions(fileSystem){}
indexPath(requestId,fileSystemPath){}
stopIndexing(requestId){}
searchInPath(requestId,fileSystemPath,query){}
zoomFactor(){return 1;}
zoomIn(){}
zoomOut(){}
resetZoom(){}
setWhitelistedShortcuts(shortcuts){}
showCertificateViewer(certChain){}
isUnderTest(){return false;}
reattach(callback){}
readyForTest(){}
setDevicesDiscoveryConfig(discoverUsbDevices,portForwardingEnabled,portForwardingConfig){}
setDevicesUpdatesEnabled(enabled){}
performActionOnRemotePage(pageId,action){}
openRemotePage(browserId,url){}
openNodeFrontend(){}
showContextMenuAtPoint(x,y,items,document){throw'Soft context menu should be used';}
isHostedMode(){return true;}};Host.InspectorFrontendAPIImpl=class{constructor(){this._debugFrontend=!!Runtime.queryParam('debugFrontend')||(window['InspectorTest']&&window['InspectorTest']['debugTest']);var descriptors=InspectorFrontendHostAPI.EventDescriptors;for(var i=0;i<descriptors.length;++i)
this[descriptors[i][1]]=this._dispatch.bind(this,descriptors[i][0],descriptors[i][2],descriptors[i][3]);}
_dispatch(name,signature,runOnceLoaded){var params=Array.prototype.slice.call(arguments,3);if(this._debugFrontend)
setImmediate(innerDispatch);else
innerDispatch();function innerDispatch(){if(signature.length<2){try{InspectorFrontendHost.events.dispatchEventToListeners(name,params[0]);}catch(e){console.error(e+' '+e.stack);}
return;}
var data={};for(var i=0;i<signature.length;++i)
data[signature[i]]=params[i];try{InspectorFrontendHost.events.dispatchEventToListeners(name,data);}catch(e){console.error(e+' '+e.stack);}}}
streamWrite(id,chunk){Host.ResourceLoader.streamWrite(id,chunk);}};var InspectorFrontendHost=window.InspectorFrontendHost||null;window.InspectorFrontendHost=InspectorFrontendHost;(function(){function initializeInspectorFrontendHost(){if(!InspectorFrontendHost){window.InspectorFrontendHost=InspectorFrontendHost=new Host.InspectorFrontendHostStub();}else{var proto=Host.InspectorFrontendHostStub.prototype;for(var name in proto){var value=proto[name];if(typeof value!=='function'||InspectorFrontendHost[name])
continue;InspectorFrontendHost[name]=stub.bind(null,name);}}
function stub(name){console.error('Incompatible embedder: method InspectorFrontendHost.'+name+' is missing. Using stub instead.');var args=Array.prototype.slice.call(arguments,1);return proto[name].apply(InspectorFrontendHost,args);}
InspectorFrontendHost.events=new Common.Object();}
initializeInspectorFrontendHost();window.InspectorFrontendAPI=new Host.InspectorFrontendAPIImpl();Common.setLocalizationPlatform(InspectorFrontendHost.platform());})();InspectorFrontendHost.events;Host.isUnderTest=function(prefs){if(InspectorFrontendHost.isUnderTest())
return true;if(prefs)
return prefs['isUnderTest']==='true';return Common.settings.createSetting('isUnderTest',false).get();};;Host.platform=function(){if(!Host._platform)
Host._platform=InspectorFrontendHost.platform();return Host._platform;};Host.isMac=function(){if(typeof Host._isMac==='undefined')
Host._isMac=Host.platform()==='mac';return Host._isMac;};Host.isWin=function(){if(typeof Host._isWin==='undefined')
Host._isWin=Host.platform()==='windows';return Host._isWin;};Host.isCustomDevtoolsFrontend=function(){if(typeof Host._isCustomDevtoolsFronend==='undefined')
Host._isCustomDevtoolsFronend=window.location.toString().startsWith('chrome-devtools://devtools/custom/');return Host._isCustomDevtoolsFronend;};Host.fontFamily=function(){if(Host._fontFamily)
return Host._fontFamily;switch(Host.platform()){case'linux':Host._fontFamily='Ubuntu, Arial, sans-serif';break;case'mac':Host._fontFamily='\'Lucida Grande\', sans-serif';break;case'windows':Host._fontFamily='\'Segoe UI\', Tahoma, sans-serif';break;}
return Host._fontFamily;};Host.monospaceFontFamily=function(){if(Host._monospaceFontFamily)
return Host._monospaceFontFamily;switch(Host.platform()){case'linux':Host._monospaceFontFamily='dejavu sans mono, monospace';break;case'mac':Host._monospaceFontFamily='Menlo, monospace';break;case'windows':Host._monospaceFontFamily='Consolas, monospace';break;}
return Host._monospaceFontFamily;};;Host.ResourceLoader={};Host.ResourceLoader._lastStreamId=0;Host.ResourceLoader._boundStreams={};Host.ResourceLoader._bindOutputStream=function(stream){Host.ResourceLoader._boundStreams[++Host.ResourceLoader._lastStreamId]=stream;return Host.ResourceLoader._lastStreamId;};Host.ResourceLoader._discardOutputStream=function(id){Host.ResourceLoader._boundStreams[id].close();delete Host.ResourceLoader._boundStreams[id];};Host.ResourceLoader.streamWrite=function(id,chunk){Host.ResourceLoader._boundStreams[id].write(chunk);};Host.ResourceLoader.load=function(url,headers,callback){var stream=new Common.StringOutputStream();Host.ResourceLoader.loadAsStream(url,headers,stream,mycallback);function mycallback(statusCode,headers){callback(statusCode,headers,stream.data());}};Host.ResourceLoader.loadAsStream=function(url,headers,stream,callback){var streamId=Host.ResourceLoader._bindOutputStream(stream);var parsedURL=new Common.ParsedURL(url);if(parsedURL.isDataURL()){loadXHR(url).then(dataURLDecodeSuccessful).catch(dataURLDecodeFailed);return;}
var rawHeaders=[];if(headers){for(var key in headers)
rawHeaders.push(key+': '+headers[key]);}
InspectorFrontendHost.loadNetworkResource(url,rawHeaders.join('\r\n'),streamId,finishedCallback);function finishedCallback(response){if(callback)
callback(response.statusCode,response.headers||{});Host.ResourceLoader._discardOutputStream(streamId);}
function dataURLDecodeSuccessful(text){Host.ResourceLoader.streamWrite(streamId,text);finishedCallback(({statusCode:200}));}
function dataURLDecodeFailed(){finishedCallback(({statusCode:404}));}};;Host.UserMetrics=class{panelShown(panelName){var code=Host.UserMetrics._PanelCodes[panelName]||0;var size=Object.keys(Host.UserMetrics._PanelCodes).length+1;InspectorFrontendHost.recordEnumeratedHistogram('DevTools.PanelShown',code,size);}
drawerShown(drawerId){this.panelShown('drawer-'+drawerId);}
actionTaken(action){var size=Object.keys(Host.UserMetrics.Action).length+1;InspectorFrontendHost.recordEnumeratedHistogram('DevTools.ActionTaken',action,size);}};Host.UserMetrics.Action={WindowDocked:1,WindowUndocked:2,ScriptsBreakpointSet:3,TimelineStarted:4,ProfilesCPUProfileTaken:5,ProfilesHeapProfileTaken:6,AuditsStarted:7,ConsoleEvaluated:8,FileSavedInWorkspace:9,DeviceModeEnabled:10,AnimationsPlaybackRateChanged:11,RevisionApplied:12,FileSystemDirectoryContentReceived:13,StyleRuleEdited:14,CommandEvaluatedInConsolePanel:15,DOMPropertiesExpanded:16,ResizedViewInResponsiveMode:17,TimelinePageReloadStarted:18,ConnectToNodeJSFromFrontend:19,ConnectToNodeJSDirectly:20,CpuThrottlingEnabled:21,CpuProfileNodeFocused:22,CpuProfileNodeExcluded:23,SelectFileFromFilePicker:24,SelectCommandFromCommandMenu:25,ChangeInspectedNodeInElementsPanel:26,StyleRuleCopied:27,};Host.UserMetrics._PanelCodes={elements:1,resources:2,network:3,sources:4,timeline:5,heap_profiler:6,audits:7,console:8,layers:9,'drawer-console':10,'drawer-animations':11,'drawer-network.config':12,'drawer-rendering':13,'drawer-sensors':14,'drawer-sources.search':15,security:16,js_profiler:17};Host.userMetrics=new Host.UserMetrics();;self['UI']=self['UI']||{};UI.Widget=class extends Common.Object{constructor(isWebComponent){super();this.contentElement=createElementWithClass('div','widget');if(isWebComponent){this.element=createElementWithClass('div','vbox flex-auto');this._shadowRoot=UI.createShadowRootWithCoreStyles(this.element);this._shadowRoot.appendChild(this.contentElement);}else{this.element=this.contentElement;}
this._isWebComponent=isWebComponent;this.element.__widget=this;this._visible=false;this._isRoot=false;this._isShowing=false;this._children=[];this._hideOnDetach=false;this._notificationDepth=0;this._invalidationsSuspended=0;this._defaultFocusedChild=null;}
static _incrementWidgetCounter(parentElement,childElement){var count=(childElement.__widgetCounter||0)+(childElement.__widget?1:0);if(!count)
return;while(parentElement){parentElement.__widgetCounter=(parentElement.__widgetCounter||0)+count;parentElement=parentElement.parentElementOrShadowHost();}}
static _decrementWidgetCounter(parentElement,childElement){var count=(childElement.__widgetCounter||0)+(childElement.__widget?1:0);if(!count)
return;while(parentElement){parentElement.__widgetCounter-=count;parentElement=parentElement.parentElementOrShadowHost();}}
static __assert(condition,message){if(!condition)
throw new Error(message);}
static focusWidgetForNode(node){while(node){if(node.__widget)
break;node=node.parentNodeOrShadowHost();}
if(!node)
return;var widget=node.__widget;while(widget._parentWidget){widget._parentWidget._defaultFocusedChild=widget;widget=widget._parentWidget;}}
markAsRoot(){UI.Widget.__assert(!this.element.parentElement,'Attempt to mark as root attached node');this._isRoot=true;}
parentWidget(){return this._parentWidget;}
children(){return this._children;}
childWasDetached(widget){}
isShowing(){return this._isShowing;}
shouldHideOnDetach(){if(!this.element.parentElement)
return false;if(this._hideOnDetach)
return true;for(var child of this._children){if(child.shouldHideOnDetach())
return true;}
return false;}
setHideOnDetach(){this._hideOnDetach=true;}
_inNotification(){return!!this._notificationDepth||(this._parentWidget&&this._parentWidget._inNotification());}
_parentIsShowing(){if(this._isRoot)
return true;return!!this._parentWidget&&this._parentWidget.isShowing();}
_callOnVisibleChildren(method){var copy=this._children.slice();for(var i=0;i<copy.length;++i){if(copy[i]._parentWidget===this&&copy[i]._visible)
method.call(copy[i]);}}
_processWillShow(){this._callOnVisibleChildren(this._processWillShow);this._isShowing=true;}
_processWasShown(){if(this._inNotification())
return;this.restoreScrollPositions();this._notify(this.wasShown);this._callOnVisibleChildren(this._processWasShown);}
_processWasDetachedFromHierarchy(){this._notify(this.wasDetachedFromHierarchy);var copy=this._children.slice();for(var widget of copy)
widget._processWasDetachedFromHierarchy();}
_processWillHide(){if(this._inNotification())
return;this.storeScrollPositions();this._callOnVisibleChildren(this._processWillHide);this._notify(this.willHide);this._isShowing=false;}
_processWasHidden(){this._callOnVisibleChildren(this._processWasHidden);}
_processOnResize(){if(this._inNotification())
return;if(!this.isShowing())
return;this._notify(this.onResize);this._callOnVisibleChildren(this._processOnResize);}
_notify(notification){++this._notificationDepth;try{notification.call(this);}finally{--this._notificationDepth;}}
wasShown(){}
willHide(){}
wasDetachedFromHierarchy(){}
onResize(){}
onLayout(){}
show(parentElement,insertBefore){UI.Widget.__assert(parentElement,'Attempt to attach widget with no parent element');if(!this._isRoot){var currentParent=parentElement;while(currentParent&&!currentParent.__widget)
currentParent=currentParent.parentElementOrShadowHost();UI.Widget.__assert(currentParent,'Attempt to attach widget to orphan node');this._attach(currentParent.__widget);}
this._showWidget(parentElement,insertBefore);}
_attach(parentWidget){if(parentWidget===this._parentWidget)
return;if(this._parentWidget)
this.detach();this._parentWidget=parentWidget;this._parentWidget._children.push(this);this._isRoot=false;}
showWidget(){if(this._visible)
return;UI.Widget.__assert(this.element.parentElement,'Attempt to show widget that is not hidden using hideWidget().');this._showWidget((this.element.parentElement),this.element.nextSibling);}
_showWidget(parentElement,insertBefore){var currentParent=parentElement;while(currentParent&&!currentParent.__widget)
currentParent=currentParent.parentElementOrShadowHost();if(this._isRoot){UI.Widget.__assert(!currentParent,'Attempt to show root widget under another widget');}else{UI.Widget.__assert(currentParent&&currentParent.__widget===this._parentWidget,'Attempt to show under node belonging to alien widget');}
var wasVisible=this._visible;if(wasVisible&&this.element.parentElement===parentElement)
return;this._visible=true;if(!wasVisible&&this._parentIsShowing())
this._processWillShow();this.element.classList.remove('hidden');if(this.element.parentElement!==parentElement){UI.Widget._incrementWidgetCounter(parentElement,this.element);if(insertBefore)
UI.Widget._originalInsertBefore.call(parentElement,this.element,insertBefore);else
UI.Widget._originalAppendChild.call(parentElement,this.element);}
if(!wasVisible&&this._parentIsShowing())
this._processWasShown();if(this._parentWidget&&this._hasNonZeroConstraints())
this._parentWidget.invalidateConstraints();else
this._processOnResize();}
hideWidget(){if(!this._visible)
return;this._hideWidget(false);}
_hideWidget(removeFromDOM){this._visible=false;var parentElement=this.element.parentElement;if(this._parentIsShowing())
this._processWillHide();if(removeFromDOM){UI.Widget._decrementWidgetCounter(parentElement,this.element);UI.Widget._originalRemoveChild.call(parentElement,this.element);}else{this.element.classList.add('hidden');}
if(this._parentIsShowing())
this._processWasHidden();if(this._parentWidget&&this._hasNonZeroConstraints())
this._parentWidget.invalidateConstraints();}
detach(overrideHideOnDetach){if(!this._parentWidget&&!this._isRoot)
return;if(this._visible)
this._hideWidget(overrideHideOnDetach||!this.shouldHideOnDetach());if(this._parentWidget){var childIndex=this._parentWidget._children.indexOf(this);UI.Widget.__assert(childIndex>=0,'Attempt to remove non-child widget');this._parentWidget._children.splice(childIndex,1);if(this._parentWidget._defaultFocusedChild===this)
this._parentWidget._defaultFocusedChild=null;this._parentWidget.childWasDetached(this);this._parentWidget=null;this._processWasDetachedFromHierarchy();}else{UI.Widget.__assert(this._isRoot,'Removing non-root widget from DOM');}}
detachChildWidgets(){var children=this._children.slice();for(var i=0;i<children.length;++i)
children[i].detach();}
elementsToRestoreScrollPositionsFor(){return[this.element];}
storeScrollPositions(){var elements=this.elementsToRestoreScrollPositionsFor();for(var i=0;i<elements.length;++i){var container=elements[i];container._scrollTop=container.scrollTop;container._scrollLeft=container.scrollLeft;}}
restoreScrollPositions(){var elements=this.elementsToRestoreScrollPositionsFor();for(var i=0;i<elements.length;++i){var container=elements[i];if(container._scrollTop)
container.scrollTop=container._scrollTop;if(container._scrollLeft)
container.scrollLeft=container._scrollLeft;}}
doResize(){if(!this.isShowing())
return;if(!this._inNotification())
this._callOnVisibleChildren(this._processOnResize);}
doLayout(){if(!this.isShowing())
return;this._notify(this.onLayout);this.doResize();}
registerRequiredCSS(cssFile){UI.appendStyle(this._isWebComponent?this._shadowRoot:this.element,cssFile);}
printWidgetHierarchy(){var lines=[];this._collectWidgetHierarchy('',lines);console.log(lines.join('\n'));}
_collectWidgetHierarchy(prefix,lines){lines.push(prefix+'['+this.element.className+']'+(this._children.length?' {':''));for(var i=0;i<this._children.length;++i)
this._children[i]._collectWidgetHierarchy(prefix+'    ',lines);if(this._children.length)
lines.push(prefix+'}');}
setDefaultFocusedElement(element){this._defaultFocusedElement=element;}
setDefaultFocusedChild(child){UI.Widget.__assert(child._parentWidget===this,'Attempt to set non-child widget as default focused.');this._defaultFocusedChild=child;}
focus(){if(!this.isShowing())
return;var element=this._defaultFocusedElement;if(element){if(!element.hasFocus())
element.focus();return;}
if(this._defaultFocusedChild&&this._defaultFocusedChild._visible){this._defaultFocusedChild.focus();}else{for(var child of this._children){if(child._visible){child.focus();break;}}}}
hasFocus(){return this.element.hasFocus();}
calculateConstraints(){return new UI.Constraints();}
constraints(){if(typeof this._constraints!=='undefined')
return this._constraints;if(typeof this._cachedConstraints==='undefined')
this._cachedConstraints=this.calculateConstraints();return this._cachedConstraints;}
setMinimumAndPreferredSizes(width,height,preferredWidth,preferredHeight){this._constraints=new UI.Constraints(new UI.Size(width,height),new UI.Size(preferredWidth,preferredHeight));this.invalidateConstraints();}
setMinimumSize(width,height){this._constraints=new UI.Constraints(new UI.Size(width,height));this.invalidateConstraints();}
_hasNonZeroConstraints(){var constraints=this.constraints();return!!(constraints.minimum.width||constraints.minimum.height||constraints.preferred.width||constraints.preferred.height);}
suspendInvalidations(){++this._invalidationsSuspended;}
resumeInvalidations(){--this._invalidationsSuspended;if(!this._invalidationsSuspended&&this._invalidationsRequested)
this.invalidateConstraints();}
invalidateConstraints(){if(this._invalidationsSuspended){this._invalidationsRequested=true;return;}
this._invalidationsRequested=false;var cached=this._cachedConstraints;delete this._cachedConstraints;var actual=this.constraints();if(!actual.isEqual(cached)&&this._parentWidget)
this._parentWidget.invalidateConstraints();else
this.doLayout();}};UI.Widget._originalAppendChild=Element.prototype.appendChild;UI.Widget._originalInsertBefore=Element.prototype.insertBefore;UI.Widget._originalRemoveChild=Element.prototype.removeChild;UI.Widget._originalRemoveChildren=Element.prototype.removeChildren;UI.VBox=class extends UI.Widget{constructor(isWebComponent){super(isWebComponent);this.contentElement.classList.add('vbox');}
calculateConstraints(){var constraints=new UI.Constraints();function updateForChild(){var child=this.constraints();constraints=constraints.widthToMax(child);constraints=constraints.addHeight(child);}
this._callOnVisibleChildren(updateForChild);return constraints;}};UI.HBox=class extends UI.Widget{constructor(isWebComponent){super(isWebComponent);this.contentElement.classList.add('hbox');}
calculateConstraints(){var constraints=new UI.Constraints();function updateForChild(){var child=this.constraints();constraints=constraints.addWidth(child);constraints=constraints.heightToMax(child);}
this._callOnVisibleChildren(updateForChild);return constraints;}};UI.VBoxWithResizeCallback=class extends UI.VBox{constructor(resizeCallback){super();this._resizeCallback=resizeCallback;}
onResize(){this._resizeCallback();}};UI.WidgetFocusRestorer=class{constructor(widget){this._widget=widget;this._previous=widget.element.ownerDocument.deepActiveElement();widget.focus();}
restore(){if(!this._widget)
return;if(this._widget.hasFocus()&&this._previous)
this._previous.focus();this._previous=null;this._widget=null;}};Element.prototype.appendChild=function(child){UI.Widget.__assert(!child.__widget||child.parentElement===this,'Attempt to add widget via regular DOM operation.');return UI.Widget._originalAppendChild.call(this,child);};Element.prototype.insertBefore=function(child,anchor){UI.Widget.__assert(!child.__widget||child.parentElement===this,'Attempt to add widget via regular DOM operation.');return UI.Widget._originalInsertBefore.call(this,child,anchor);};Element.prototype.removeChild=function(child){UI.Widget.__assert(!child.__widgetCounter&&!child.__widget,'Attempt to remove element containing widget via regular DOM operation');return UI.Widget._originalRemoveChild.call(this,child);};Element.prototype.removeChildren=function(){UI.Widget.__assert(!this.__widgetCounter,'Attempt to remove element containing widget via regular DOM operation');UI.Widget._originalRemoveChildren.call(this);};;UI.View=function(){};UI.View.prototype={viewId(){},title(){},isCloseable(){},isTransient(){},toolbarItems(){},widget(){}};UI.View._symbol=Symbol('view');UI.View._widgetSymbol=Symbol('widget');UI.SimpleView=class extends UI.VBox{constructor(title,isWebComponent){super(isWebComponent);this._title=title;this._toolbarItems=[];this[UI.View._symbol]=this;}
viewId(){return this._title;}
title(){return this._title;}
isCloseable(){return false;}
isTransient(){return false;}
toolbarItems(){return Promise.resolve(this.syncToolbarItems());}
syncToolbarItems(){return this._toolbarItems;}
widget(){return(Promise.resolve(this));}
addToolbarItem(item){this._toolbarItems.push(item);}
revealView(){return UI.viewManager.revealView(this);}};UI.ProvidedView=class{constructor(extension){this._extension=extension;}
viewId(){return this._extension.descriptor()['id'];}
title(){return this._extension.title();}
isCloseable(){return this._extension.descriptor()['persistence']==='closeable';}
isTransient(){return this._extension.descriptor()['persistence']==='transient';}
toolbarItems(){const actionIds=this._extension.descriptor()['actionIds'];if(actionIds){const result=actionIds.split(',').map(id=>UI.Toolbar.createActionButtonForId(id.trim()));return Promise.resolve(result);}
if(this._extension.descriptor()['hasToolbar'])
return this.widget().then(widget=>(widget).toolbarItems());return Promise.resolve([]);}
widget(){return this._extension.instance().then(widget=>{if(!(widget instanceof UI.Widget))
throw new Error('view className should point to a UI.Widget');widget[UI.View._symbol]=this;return(widget);});}};UI.ViewLocation=function(){};UI.ViewLocation.prototype={appendApplicableItems(locationName){},appendView(view,insertBefore){},showView(view,insertBefore,userGesture){},removeView(view){},widget(){}};UI.TabbedViewLocation=function(){};UI.TabbedViewLocation.prototype={tabbedPane(){},enableMoreTabsButton(){}};UI.ViewLocationResolver=function(){};UI.ViewLocationResolver.prototype={resolveLocation(location){}};UI.ViewManager=class{constructor(){this._views=new Map();this._locationNameByViewId=new Map();for(var extension of self.runtime.extensions('view')){var descriptor=extension.descriptor();this._views.set(descriptor['id'],new UI.ProvidedView(extension));this._locationNameByViewId.set(descriptor['id'],descriptor['location']);}}
static _populateToolbar(element,toolbarItems){if(!toolbarItems.length)
return;var toolbar=new UI.Toolbar('');element.insertBefore(toolbar.element,element.firstChild);for(var item of toolbarItems)
toolbar.appendToolbarItem(item);}
revealView(view){var location=(view[UI.ViewManager._Location.symbol]);if(!location)
return Promise.resolve();location._reveal();return location.showView(view);}
view(viewId){return this._views.get(viewId);}
materializedWidget(viewId){var view=this.view(viewId);return view?view[UI.View._widgetSymbol]:null;}
showView(viewId,userGesture){var view=this._views.get(viewId);if(!view){console.error('Could not find view for id: \''+viewId+'\' '+new Error().stack);return Promise.resolve();}
var locationName=this._locationNameByViewId.get(viewId);if(locationName==='drawer-view')
Host.userMetrics.drawerShown(viewId);var location=view[UI.ViewManager._Location.symbol];if(location){location._reveal();return location.showView(view,undefined,userGesture);}
return this._resolveLocation(locationName).then(location=>{if(!location)
throw new Error('Could not resolve location for view: '+viewId);location._reveal();return location.showView(view,undefined,userGesture);});}
_resolveLocation(location){if(!location)
return(Promise.resolve(null));var resolverExtensions=self.runtime.extensions(UI.ViewLocationResolver).filter(extension=>extension.descriptor()['name']===location);if(!resolverExtensions.length)
throw new Error('Unresolved location: '+location);var resolverExtension=resolverExtensions[0];return resolverExtension.instance().then(resolver=>(resolver.resolveLocation(location)));}
createTabbedLocation(revealCallback,location,restoreSelection,allowReorder,defaultTab){return new UI.ViewManager._TabbedLocation(this,revealCallback,location,restoreSelection,allowReorder,defaultTab);}
createStackLocation(revealCallback,location){return new UI.ViewManager._StackLocation(this,revealCallback,location);}
_viewsForLocation(location){var result=[];for(var id of this._views.keys()){if(this._locationNameByViewId.get(id)===location)
result.push(this._views.get(id));}
return result;}};UI.ViewManager._ContainerWidget=class extends UI.VBox{constructor(view){super();this.element.classList.add('flex-auto','view-container','overflow-auto');this._view=view;this.element.tabIndex=0;this.setDefaultFocusedElement(this.element);}
_materialize(){if(this._materializePromise)
return this._materializePromise;var promises=[];promises.push(this._view.toolbarItems().then(UI.ViewManager._populateToolbar.bind(UI.ViewManager,this.element)));promises.push(this._view.widget().then(widget=>{var shouldFocus=this.element.hasFocus();this.setDefaultFocusedElement(null);this._view[UI.View._widgetSymbol]=widget;widget.show(this.element);if(shouldFocus)
widget.focus();}));this._materializePromise=Promise.all(promises);return this._materializePromise;}
wasShown(){this._materialize();}};UI.ViewManager._ExpandableContainerWidget=class extends UI.VBox{constructor(view){super(true);this.element.classList.add('flex-none');this.registerRequiredCSS('ui/viewContainers.css');this._titleElement=createElementWithClass('div','expandable-view-title');this._titleExpandIcon=UI.Icon.create('smallicon-triangle-right','title-expand-icon');this._titleElement.appendChild(this._titleExpandIcon);this._titleElement.createTextChild(view.title());this._titleElement.tabIndex=0;this._titleElement.addEventListener('click',this._toggleExpanded.bind(this),false);this._titleElement.addEventListener('keydown',this._onTitleKeyDown.bind(this),false);this.contentElement.insertBefore(this._titleElement,this.contentElement.firstChild);this.contentElement.createChild('content');this._view=view;view[UI.ViewManager._ExpandableContainerWidget._symbol]=this;}
_materialize(){if(this._materializePromise)
return this._materializePromise;var promises=[];promises.push(this._view.toolbarItems().then(UI.ViewManager._populateToolbar.bind(UI.ViewManager,this._titleElement)));promises.push(this._view.widget().then(widget=>{this._widget=widget;this._view[UI.View._widgetSymbol]=widget;widget.show(this.element);}));this._materializePromise=Promise.all(promises);return this._materializePromise;}
_expand(){if(this._titleElement.classList.contains('expanded'))
return this._materialize();this._titleElement.classList.add('expanded');this._titleExpandIcon.setIconType('smallicon-triangle-down');return this._materialize().then(()=>this._widget.show(this.element));}
_collapse(){if(!this._titleElement.classList.contains('expanded'))
return;this._titleElement.classList.remove('expanded');this._titleExpandIcon.setIconType('smallicon-triangle-right');this._materialize().then(()=>this._widget.detach());}
_toggleExpanded(){if(this._titleElement.classList.contains('expanded'))
this._collapse();else
this._expand();}
_onTitleKeyDown(event){if(isEnterKey(event)||event.keyCode===UI.KeyboardShortcut.Keys.Space.code)
this._toggleExpanded();}};UI.ViewManager._ExpandableContainerWidget._symbol=Symbol('container');UI.ViewManager._Location=class{constructor(manager,widget,revealCallback){this._manager=manager;this._revealCallback=revealCallback;this._widget=widget;}
widget(){return this._widget;}
_reveal(){if(this._revealCallback)
this._revealCallback();}};UI.ViewManager._Location.symbol=Symbol('location');UI.ViewManager._TabbedLocation=class extends UI.ViewManager._Location{constructor(manager,revealCallback,location,restoreSelection,allowReorder,defaultTab){var tabbedPane=new UI.TabbedPane();if(allowReorder)
tabbedPane.setAllowTabReorder(true);super(manager,tabbedPane,revealCallback);this._tabbedPane=tabbedPane;this._allowReorder=allowReorder;this._tabbedPane.addEventListener(UI.TabbedPane.Events.TabSelected,this._tabSelected,this);this._tabbedPane.addEventListener(UI.TabbedPane.Events.TabClosed,this._tabClosed,this);this._closeableTabSetting=Common.settings.createSetting(location+'-closeableTabs',{});this._tabOrderSetting=Common.settings.createSetting(location+'-tabOrder',{});this._tabbedPane.addEventListener(UI.TabbedPane.Events.TabOrderChanged,this._persistTabOrder,this);if(restoreSelection)
this._lastSelectedTabSetting=Common.settings.createSetting(location+'-selectedTab','');this._defaultTab=defaultTab;this._views=new Map();if(location)
this.appendApplicableItems(location);}
widget(){return this._tabbedPane;}
tabbedPane(){return this._tabbedPane;}
enableMoreTabsButton(){this._tabbedPane.leftToolbar().appendToolbarItem(new UI.ToolbarMenuButton(this._appendTabsToMenu.bind(this)));this._tabbedPane.disableOverflowMenu();}
appendApplicableItems(locationName){var views=this._manager._viewsForLocation(locationName);if(this._allowReorder){var i=0;var persistedOrders=this._tabOrderSetting.get();var orders=new Map();for(var view of views)
orders.set(view.viewId(),persistedOrders[view.viewId()]||(++i)*UI.ViewManager._TabbedLocation.orderStep);views.sort((a,b)=>orders.get(a.viewId())-orders.get(b.viewId()));}
for(var view of views){var id=view.viewId();this._views.set(id,view);view[UI.ViewManager._Location.symbol]=this;if(view.isTransient())
continue;if(!view.isCloseable())
this._appendTab(view);else if(this._closeableTabSetting.get()[id])
this._appendTab(view);}
if(this._defaultTab&&this._tabbedPane.hasTab(this._defaultTab))
this._tabbedPane.selectTab(this._defaultTab);else if(this._lastSelectedTabSetting&&this._tabbedPane.hasTab(this._lastSelectedTabSetting.get()))
this._tabbedPane.selectTab(this._lastSelectedTabSetting.get());}
_appendTabsToMenu(contextMenu){for(var view of this._views.values()){var title=Common.UIString(view.title());contextMenu.appendItem(title,this.showView.bind(this,view,undefined,true));}}
_appendTab(view,index){this._tabbedPane.appendTab(view.viewId(),view.title(),new UI.ViewManager._ContainerWidget(view),undefined,false,view.isCloseable()||view.isTransient(),index);}
appendView(view,insertBefore){if(this._tabbedPane.hasTab(view.viewId()))
return;view[UI.ViewManager._Location.symbol]=this;this._manager._views.set(view.viewId(),view);this._views.set(view.viewId(),view);var index=undefined;var tabIds=this._tabbedPane.tabIds();if(this._allowReorder){var orderSetting=this._tabOrderSetting.get();var order=orderSetting[view.viewId()];for(var i=0;order&&i<tabIds.length;++i){if(orderSetting[tabIds[i]]&&orderSetting[tabIds[i]]>order){index=i;break;}}}else if(insertBefore){for(var i=0;i<tabIds.length;++i){if(tabIds[i]===insertBefore.viewId()){index=i;break;}}}
this._appendTab(view,index);}
showView(view,insertBefore,userGesture){this.appendView(view,insertBefore);this._tabbedPane.selectTab(view.viewId(),userGesture);this._tabbedPane.focus();var widget=(this._tabbedPane.tabView(view.viewId()));return widget._materialize();}
removeView(view){if(!this._tabbedPane.hasTab(view.viewId()))
return;delete view[UI.ViewManager._Location.symbol];this._manager._views.delete(view.viewId());this._views.delete(view.viewId());this._tabbedPane.closeTab(view.viewId());}
_tabSelected(event){var tabId=(event.data.tabId);if(this._lastSelectedTabSetting&&event.data['isUserGesture'])
this._lastSelectedTabSetting.set(tabId);var view=this._views.get(tabId);if(!view)
return;if(view.isCloseable()){var tabs=this._closeableTabSetting.get();if(!tabs[tabId]){tabs[tabId]=true;this._closeableTabSetting.set(tabs);}}}
_tabClosed(event){var id=(event.data['tabId']);var tabs=this._closeableTabSetting.get();if(tabs[id]){delete tabs[id];this._closeableTabSetting.set(tabs);}}
_persistTabOrder(event){var tabIds=this._tabbedPane.tabIds();var tabOrders={};for(var i=0;i<tabIds.length;i++)
tabOrders[tabIds[i]]=(i+1)*UI.ViewManager._TabbedLocation.orderStep;this._tabOrderSetting.set(tabOrders);}};UI.ViewManager._TabbedLocation.orderStep=10;UI.ViewManager._StackLocation=class extends UI.ViewManager._Location{constructor(manager,revealCallback,location){var vbox=new UI.VBox();super(manager,vbox,revealCallback);this._vbox=vbox;this._expandableContainers=new Map();if(location)
this.appendApplicableItems(location);}
appendView(view,insertBefore){var container=this._expandableContainers.get(view.viewId());if(!container){view[UI.ViewManager._Location.symbol]=this;this._manager._views.set(view.viewId(),view);container=new UI.ViewManager._ExpandableContainerWidget(view);var beforeElement=null;if(insertBefore){var beforeContainer=insertBefore[UI.ViewManager._ExpandableContainerWidget._symbol];beforeElement=beforeContainer?beforeContainer.element:null;}
container.show(this._vbox.contentElement,beforeElement);this._expandableContainers.set(view.viewId(),container);}}
showView(view,insertBefore){this.appendView(view,insertBefore);var container=this._expandableContainers.get(view.viewId());return container._expand();}
removeView(view){var container=this._expandableContainers.get(view.viewId());if(!container)
return;container.detach();this._expandableContainers.delete(view.viewId());delete view[UI.ViewManager._Location.symbol];this._manager._views.delete(view.viewId());}
appendApplicableItems(locationName){for(var view of this._manager._viewsForLocation(locationName))
this.appendView(view);}};UI.viewManager;;UI.TreeOutline=class extends Common.Object{constructor(){super();this._createRootElement();this.selectedTreeElement=null;this.expandTreeElementsWhenArrowing=false;this._comparator=null;this.contentElement=this._rootElement._childrenListNode;this.contentElement.addEventListener('keydown',this._treeKeyDown.bind(this),true);this._focusable=true;this.setFocusable(this._focusable);if(this._focusable)
this.contentElement.setAttribute('tabIndex',-1);this.element=this.contentElement;UI.ARIAUtils.markAsTree(this.element);this._paddingSize=0;}
_createRootElement(){this._rootElement=new UI.TreeElement();this._rootElement.treeOutline=this;this._rootElement.root=true;this._rootElement.selectable=false;this._rootElement.expanded=true;this._rootElement._childrenListNode.classList.remove('children');}
rootElement(){return this._rootElement;}
firstChild(){return this._rootElement.firstChild();}
appendChild(child){this._rootElement.appendChild(child);}
insertChild(child,index){this._rootElement.insertChild(child,index);}
removeChild(child){this._rootElement.removeChild(child);}
removeChildren(){this._rootElement.removeChildren();}
treeElementFromPoint(x,y){var node=this.contentElement.ownerDocument.deepElementFromPoint(x,y);if(!node)
return null;var listNode=node.enclosingNodeOrSelfWithNodeNameInArray(['ol','li']);if(listNode)
return listNode.parentTreeElement||listNode.treeElement;return null;}
treeElementFromEvent(event){return event?this.treeElementFromPoint(event.pageX,event.pageY):null;}
setComparator(comparator){this._comparator=comparator;}
setFocusable(focusable){if(focusable){this._focusable=true;this.contentElement.setAttribute('tabIndex',-1);if(this.selectedTreeElement)
this.selectedTreeElement._setFocusable(true);}else{this._focusable=false;this.contentElement.removeAttribute('tabIndex');if(this.selectedTreeElement)
this.selectedTreeElement._setFocusable(false);}}
focus(){if(this.selectedTreeElement)
this.selectedTreeElement.listItemElement.focus();else
this.contentElement.focus();}
_bindTreeElement(element){if(element.treeOutline)
console.error('Binding element for the second time: '+new Error().stack);element.treeOutline=this;element.onbind();}
_unbindTreeElement(element){if(!element.treeOutline)
console.error('Unbinding element that was not bound: '+new Error().stack);element.deselect();element.onunbind();element.treeOutline=null;}
selectPrevious(){var nextSelectedElement=this.selectedTreeElement.traversePreviousTreeElement(true);while(nextSelectedElement&&!nextSelectedElement.selectable)
nextSelectedElement=nextSelectedElement.traversePreviousTreeElement(!this.expandTreeElementsWhenArrowing);if(nextSelectedElement){nextSelectedElement.reveal();nextSelectedElement.select(false,true);return true;}
return false;}
selectNext(){var nextSelectedElement=this.selectedTreeElement.traverseNextTreeElement(true);while(nextSelectedElement&&!nextSelectedElement.selectable)
nextSelectedElement=nextSelectedElement.traverseNextTreeElement(!this.expandTreeElementsWhenArrowing);if(nextSelectedElement){nextSelectedElement.reveal();nextSelectedElement.select(false,true);return true;}
return false;}
setPaddingSize(paddingSize){this._paddingSize=paddingSize;}
_treeKeyDown(event){if(!this.selectedTreeElement||event.target!==this.selectedTreeElement.listItemElement||event.shiftKey||event.metaKey||event.ctrlKey)
return;var handled=false;if(event.key==='ArrowUp'&&!event.altKey){handled=this.selectPrevious();}else if(event.key==='ArrowDown'&&!event.altKey){handled=this.selectNext();}else if(event.key==='ArrowLeft'){handled=this.selectedTreeElement.collapseOrAscend(event.altKey);}else if(event.key==='ArrowRight'){if(!this.selectedTreeElement.revealed()){this.selectedTreeElement.reveal();handled=true;}else{handled=this.selectedTreeElement.descendOrExpand(event.altKey);}}else if(event.keyCode===8||event.keyCode===46){handled=this.selectedTreeElement.ondelete();}else if(isEnterKey(event)){handled=this.selectedTreeElement.onenter();}else if(event.keyCode===UI.KeyboardShortcut.Keys.Space.code){handled=this.selectedTreeElement.onspace();}
if(handled)
event.consume(true);}
_deferredScrollIntoView(treeElement,center){if(!this._treeElementToScrollIntoView)
this.element.window().requestAnimationFrame(deferredScrollIntoView.bind(this));this._treeElementToScrollIntoView=treeElement;this._centerUponScrollIntoView=center;function deferredScrollIntoView(){this._treeElementToScrollIntoView.listItemElement.scrollIntoViewIfNeeded(this._centerUponScrollIntoView);delete this._treeElementToScrollIntoView;delete this._centerUponScrollIntoView;}}};UI.TreeOutline.Events={ElementAttached:Symbol('ElementAttached'),ElementExpanded:Symbol('ElementExpanded'),ElementCollapsed:Symbol('ElementCollapsed'),ElementSelected:Symbol('ElementSelected')};UI.TreeOutlineInShadow=class extends UI.TreeOutline{constructor(){super();this.contentElement.classList.add('tree-outline');this.element=createElement('div');this._shadowRoot=UI.createShadowRootWithCoreStyles(this.element,'ui/treeoutline.css');this._disclosureElement=this._shadowRoot.createChild('div','tree-outline-disclosure');this._disclosureElement.appendChild(this.contentElement);this._renderSelection=true;}
registerRequiredCSS(cssFile){UI.appendStyle(this._shadowRoot,cssFile);}
hideOverflow(){this._disclosureElement.classList.add('tree-outline-disclosure-hide-overflow');}
makeDense(){this.contentElement.classList.add('tree-outline-dense');}};UI.TreeElement=class{constructor(title,expandable){this.treeOutline=null;this.parent=null;this.previousSibling=null;this.nextSibling=null;this._boundOnFocus=this._onFocus.bind(this);this._boundOnBlur=this._onBlur.bind(this);this._listItemNode=createElement('li');this._titleElement=this._listItemNode.createChild('span','tree-element-title');this._listItemNode.treeElement=this;if(title)
this.title=title;this._listItemNode.addEventListener('mousedown',this._handleMouseDown.bind(this),false);this._listItemNode.addEventListener('click',this._treeElementToggled.bind(this),false);this._listItemNode.addEventListener('dblclick',this._handleDoubleClick.bind(this),false);UI.ARIAUtils.markAsTreeitem(this._listItemNode);this._childrenListNode=createElement('ol');this._childrenListNode.parentTreeElement=this;this._childrenListNode.classList.add('children');UI.ARIAUtils.markAsGroup(this._childrenListNode);this._hidden=false;this._selectable=true;this.expanded=false;this.selected=false;this.setExpandable(expandable||false);this._collapsible=true;}
hasAncestor(ancestor){if(!ancestor)
return false;var currentNode=this.parent;while(currentNode){if(ancestor===currentNode)
return true;currentNode=currentNode.parent;}
return false;}
hasAncestorOrSelf(ancestor){return this===ancestor||this.hasAncestor(ancestor);}
children(){return this._children||[];}
childCount(){return this._children?this._children.length:0;}
firstChild(){return this._children?this._children[0]:null;}
lastChild(){return this._children?this._children[this._children.length-1]:null;}
childAt(index){return this._children?this._children[index]:null;}
indexOfChild(child){return this._children?this._children.indexOf(child):-1;}
appendChild(child){if(!this._children)
this._children=[];var insertionIndex;if(this.treeOutline&&this.treeOutline._comparator)
insertionIndex=this._children.lowerBound(child,this.treeOutline._comparator);else
insertionIndex=this._children.length;this.insertChild(child,insertionIndex);}
insertChild(child,index){if(!this._children)
this._children=[];if(!child)
throw'child can\'t be undefined or null';console.assert(!child.parent,'Attempting to insert a child that is already in the tree, reparenting is not supported.');var previousChild=(index>0?this._children[index-1]:null);if(previousChild){previousChild.nextSibling=child;child.previousSibling=previousChild;}else{child.previousSibling=null;}
var nextChild=this._children[index];if(nextChild){nextChild.previousSibling=child;child.nextSibling=nextChild;}else{child.nextSibling=null;}
this._children.splice(index,0,child);this.setExpandable(true);child.parent=this;if(this.treeOutline)
this.treeOutline._bindTreeElement(child);for(var current=child.firstChild();this.treeOutline&&current;current=current.traverseNextTreeElement(false,child,true))
this.treeOutline._bindTreeElement(current);child.onattach();child._ensureSelection();if(this.treeOutline)
this.treeOutline.dispatchEventToListeners(UI.TreeOutline.Events.ElementAttached,child);var nextSibling=child.nextSibling?child.nextSibling._listItemNode:null;this._childrenListNode.insertBefore(child._listItemNode,nextSibling);this._childrenListNode.insertBefore(child._childrenListNode,nextSibling);if(child.selected)
child.select();if(child.expanded)
child.expand();}
removeChildAtIndex(childIndex){if(childIndex<0||childIndex>=this._children.length)
throw'childIndex out of range';var child=this._children[childIndex];this._children.splice(childIndex,1);var parent=child.parent;if(this.treeOutline&&this.treeOutline.selectedTreeElement&&this.treeOutline.selectedTreeElement.hasAncestorOrSelf(child)){if(child.nextSibling)
child.nextSibling.select(true);else if(child.previousSibling)
child.previousSibling.select(true);else if(parent)
parent.select(true);}
if(child.previousSibling)
child.previousSibling.nextSibling=child.nextSibling;if(child.nextSibling)
child.nextSibling.previousSibling=child.previousSibling;child.parent=null;if(this.treeOutline)
this.treeOutline._unbindTreeElement(child);for(var current=child.firstChild();this.treeOutline&&current;current=current.traverseNextTreeElement(false,child,true))
this.treeOutline._unbindTreeElement(current);child._detach();}
removeChild(child){if(!child)
throw'child can\'t be undefined or null';if(child.parent!==this)
return;var childIndex=this._children.indexOf(child);if(childIndex===-1)
throw'child not found in this node\'s children';this.removeChildAtIndex(childIndex);}
removeChildren(){if(!this.root&&this.treeOutline&&this.treeOutline.selectedTreeElement&&this.treeOutline.selectedTreeElement.hasAncestorOrSelf(this))
this.select(true);for(var i=0;this._children&&i<this._children.length;++i){var child=this._children[i];child.previousSibling=null;child.nextSibling=null;child.parent=null;if(this.treeOutline)
this.treeOutline._unbindTreeElement(child);for(var current=child.firstChild();this.treeOutline&&current;current=current.traverseNextTreeElement(false,child,true))
this.treeOutline._unbindTreeElement(current);child._detach();}
this._children=[];}
get selectable(){if(this._hidden)
return false;return this._selectable;}
set selectable(x){this._selectable=x;}
get listItemElement(){return this._listItemNode;}
titleElement(){return this._titleElement;}
get childrenListElement(){return this._childrenListNode;}
get title(){return this._title;}
set title(x){if(this._title===x)
return;this._title=x;if(typeof x==='string'){this._titleElement.textContent=x;this.tooltip=x;}else{this._titleElement=x;this.tooltip='';}
this._listItemNode.removeChildren();if(this._leadingIconsElement)
this._listItemNode.appendChild(this._leadingIconsElement);this._listItemNode.appendChild(this._titleElement);if(this._trailingIconsElement)
this._listItemNode.appendChild(this._trailingIconsElement);this._ensureSelection();}
titleAsText(){if(!this._title)
return'';if(typeof this._title==='string')
return this._title;return this._title.textContent;}
startEditingTitle(editingConfig){UI.InplaceEditor.startEditing(this._titleElement,editingConfig);this.treeOutline._shadowRoot.getSelection().selectAllChildren(this._titleElement);}
setLeadingIcons(icons){if(!this._leadingIconsElement&&!icons.length)
return;if(!this._leadingIconsElement){this._leadingIconsElement=createElementWithClass('div','leading-icons');this._leadingIconsElement.classList.add('icons-container');this._listItemNode.insertBefore(this._leadingIconsElement,this._titleElement);this._ensureSelection();}
this._leadingIconsElement.removeChildren();for(var icon of icons)
this._leadingIconsElement.appendChild(icon);}
setTrailingIcons(icons){if(!this._trailingIconsElement&&!icons.length)
return;if(!this._trailingIconsElement){this._trailingIconsElement=createElementWithClass('div','trailing-icons');this._trailingIconsElement.classList.add('icons-container');this._listItemNode.appendChild(this._trailingIconsElement);this._ensureSelection();}
this._trailingIconsElement.removeChildren();for(var icon of icons)
this._trailingIconsElement.appendChild(icon);}
get tooltip(){return this._tooltip||'';}
set tooltip(x){if(this._tooltip===x)
return;this._tooltip=x;this._listItemNode.title=x;}
isExpandable(){return this._expandable;}
setExpandable(expandable){if(this._expandable===expandable)
return;this._expandable=expandable;this._listItemNode.classList.toggle('parent',expandable);if(!expandable){this.collapse();UI.ARIAUtils.unsetExpanded(this._listItemNode);}else{UI.ARIAUtils.setExpanded(this._listItemNode,false);}}
setCollapsible(collapsible){if(this._collapsible===collapsible)
return;this._collapsible=collapsible;this._listItemNode.classList.toggle('always-parent',!collapsible);if(!collapsible)
this.expand();}
get hidden(){return this._hidden;}
set hidden(x){if(this._hidden===x)
return;this._hidden=x;this._listItemNode.classList.toggle('hidden',x);this._childrenListNode.classList.toggle('hidden',x);}
invalidateChildren(){if(this._children){this.removeChildren();this._children=null;}}
computeLeftMargin(){var treeElement=this.parent;var depth=0;while(treeElement!==null){depth++;treeElement=treeElement.parent;}
return-(this.treeOutline._paddingSize*(depth-1)+4);}
_ensureSelection(){if(!this.treeOutline||!this.treeOutline._renderSelection)
return;if(!this._selectionElement)
this._selectionElement=createElementWithClass('div','selection fill');if(this.treeOutline._paddingSize)
this._selectionElement.style.setProperty('margin-left',this.computeLeftMargin()+'px');this._listItemNode.insertBefore(this._selectionElement,this.listItemElement.firstChild);}
_treeElementToggled(event){var element=event.currentTarget;if(element.treeElement!==this||element.hasSelection())
return;var toggleOnClick=this.toggleOnClick&&!this.selectable;var isInTriangle=this.isEventWithinDisclosureTriangle(event);if(!toggleOnClick&&!isInTriangle)
return;if(this.expanded){if(event.altKey)
this.collapseRecursively();else
this.collapse();}else{if(event.altKey)
this.expandRecursively();else
this.expand();}
event.consume();}
_handleMouseDown(event){var element=event.currentTarget;if(!element)
return;if(!this.selectable)
return;if(element.treeElement!==this)
return;if(this.isEventWithinDisclosureTriangle(event))
return;this.selectOnMouseDown(event);}
_handleDoubleClick(event){var element=event.currentTarget;if(!element||element.treeElement!==this)
return;var handled=this.ondblclick(event);if(handled)
return;if(this._expandable&&!this.expanded)
this.expand();}
_detach(){this._listItemNode.remove();this._childrenListNode.remove();}
collapse(){if(!this.expanded||!this._collapsible)
return;this._listItemNode.classList.remove('expanded');this._childrenListNode.classList.remove('expanded');UI.ARIAUtils.setExpanded(this._listItemNode,false);this.expanded=false;this.oncollapse();if(this.treeOutline)
this.treeOutline.dispatchEventToListeners(UI.TreeOutline.Events.ElementCollapsed,this);}
collapseRecursively(){var item=this;while(item){if(item.expanded)
item.collapse();item=item.traverseNextTreeElement(false,this,true);}}
expand(){if(!this._expandable||(this.expanded&&this._children))
return;this.expanded=true;this._populateIfNeeded();this._listItemNode.classList.add('expanded');this._childrenListNode.classList.add('expanded');UI.ARIAUtils.setExpanded(this._listItemNode,true);if(this.treeOutline){this.onexpand();this.treeOutline.dispatchEventToListeners(UI.TreeOutline.Events.ElementExpanded,this);}}
expandRecursively(maxDepth){var item=this;var info={};var depth=0;if(isNaN(maxDepth))
maxDepth=3;while(item){if(depth<maxDepth)
item.expand();item=item.traverseNextTreeElement(false,this,(depth>=maxDepth),info);depth+=info.depthChange;}}
collapseOrAscend(altKey){if(this.expanded){if(altKey)
this.collapseRecursively();else
this.collapse();return true;}
if(!this.parent||this.parent.root)
return false;if(!this.parent.selectable){this.parent.collapse();return true;}
var nextSelectedElement=this.parent;while(nextSelectedElement&&!nextSelectedElement.selectable)
nextSelectedElement=nextSelectedElement.parent;if(nextSelectedElement){nextSelectedElement.reveal();nextSelectedElement.select(false,true);return true;}
return false;}
descendOrExpand(altKey){if(!this._expandable)
return false;if(!this.expanded){if(altKey)
this.expandRecursively();else
this.expand();return true;}
var nextSelectedElement=this.firstChild();while(nextSelectedElement&&!nextSelectedElement.selectable)
nextSelectedElement=nextSelectedElement.nextSibling;if(nextSelectedElement){nextSelectedElement.reveal();nextSelectedElement.select(false,true);return true;}
return false;}
reveal(center){var currentAncestor=this.parent;while(currentAncestor&&!currentAncestor.root){if(!currentAncestor.expanded)
currentAncestor.expand();currentAncestor=currentAncestor.parent;}
this.treeOutline._deferredScrollIntoView(this,!!center);}
revealed(){var currentAncestor=this.parent;while(currentAncestor&&!currentAncestor.root){if(!currentAncestor.expanded)
return false;currentAncestor=currentAncestor.parent;}
return true;}
selectOnMouseDown(event){if(this.select(false,true))
event.consume(true);}
select(omitFocus,selectedByUser){if(!this.treeOutline||!this.selectable||this.selected)
return false;if(this.treeOutline.selectedTreeElement)
this.treeOutline.selectedTreeElement.deselect();this.treeOutline.selectedTreeElement=null;if(this.treeOutline._rootElement===this)
return false;this.selected=true;this.treeOutline.selectedTreeElement=this;if(this.treeOutline._focusable)
this._setFocusable(true);if(!omitFocus||this.treeOutline.contentElement.hasFocus())
this.listItemElement.focus();this._listItemNode.classList.add('selected');this.treeOutline.dispatchEventToListeners(UI.TreeOutline.Events.ElementSelected,this);return this.onselect(selectedByUser);}
_setFocusable(focusable){if(focusable){this._listItemNode.setAttribute('tabIndex',0);this._listItemNode.addEventListener('focus',this._boundOnFocus,false);this._listItemNode.addEventListener('blur',this._boundOnBlur,false);}else{this._listItemNode.removeAttribute('tabIndex');this._listItemNode.removeEventListener('focus',this._boundOnFocus,false);this._listItemNode.removeEventListener('blur',this._boundOnBlur,false);}}
_onFocus(){this._listItemNode.classList.add('force-white-icons');}
_onBlur(){this._listItemNode.classList.remove('force-white-icons');}
revealAndSelect(omitFocus){this.reveal(true);this.select(omitFocus);}
deselect(){var hadFocus=this._listItemNode.hasFocus();this.selected=false;this._listItemNode.classList.remove('selected');this._setFocusable(false);if(this.treeOutline&&this.treeOutline.selectedTreeElement===this){this.treeOutline.selectedTreeElement=null;if(hadFocus)
this.treeOutline.focus();}}
_populateIfNeeded(){if(this.treeOutline&&this._expandable&&!this._children){this._children=[];this.onpopulate();}}
onpopulate(){}
onenter(){return false;}
ondelete(){return false;}
onspace(){return false;}
onbind(){}
onunbind(){}
onattach(){}
onexpand(){}
oncollapse(){}
ondblclick(e){return false;}
onselect(selectedByUser){return false;}
traverseNextTreeElement(skipUnrevealed,stayWithin,dontPopulate,info){if(!dontPopulate)
this._populateIfNeeded();if(info)
info.depthChange=0;var element=skipUnrevealed?(this.revealed()?this.firstChild():null):this.firstChild();if(element&&(!skipUnrevealed||(skipUnrevealed&&this.expanded))){if(info)
info.depthChange=1;return element;}
if(this===stayWithin)
return null;element=skipUnrevealed?(this.revealed()?this.nextSibling:null):this.nextSibling;if(element)
return element;element=this;while(element&&!element.root&&!(skipUnrevealed?(element.revealed()?element.nextSibling:null):element.nextSibling)&&element.parent!==stayWithin){if(info)
info.depthChange-=1;element=element.parent;}
if(!element||element.root)
return null;return(skipUnrevealed?(element.revealed()?element.nextSibling:null):element.nextSibling);}
traversePreviousTreeElement(skipUnrevealed,dontPopulate){var element=skipUnrevealed?(this.revealed()?this.previousSibling:null):this.previousSibling;if(!dontPopulate&&element)
element._populateIfNeeded();while(element&&(skipUnrevealed?(element.revealed()&&element.expanded?element.lastChild():null):element.lastChild())){if(!dontPopulate)
element._populateIfNeeded();element=(skipUnrevealed?(element.revealed()&&element.expanded?element.lastChild():null):element.lastChild());}
if(element)
return element;if(!this.parent||this.parent.root)
return null;return this.parent;}
isEventWithinDisclosureTriangle(event){var paddingLeftValue=window.getComputedStyle(this._listItemNode).paddingLeft;console.assert(paddingLeftValue.endsWith('px'));var computedLeftPadding=parseFloat(paddingLeftValue);var left=this._listItemNode.totalOffsetLeft()+computedLeftPadding;return event.pageX>=left&&event.pageX<=left+UI.TreeElement._ArrowToggleWidth&&this._expandable;}};UI.TreeElement._ArrowToggleWidth=10;(function(){var img=new Image();if(window.devicePixelRatio>1)
img.src='Images/treeoutlineTriangles_2x.png';else
img.src='Images/treeoutlineTriangles.png';UI.TreeElement._imagePreload=img;})();;UI.InspectorView=class extends UI.VBox{constructor(){super();UI.GlassPane.setContainer(this.element);this.setMinimumSize(240,72);this._drawerSplitWidget=new UI.SplitWidget(false,true,'Inspector.drawerSplitViewState',200,200);this._drawerSplitWidget.hideSidebar();this._drawerSplitWidget.hideDefaultResizer();this._drawerSplitWidget.enableShowModeSaving();this._drawerSplitWidget.show(this.element);this._drawerTabbedLocation=UI.viewManager.createTabbedLocation(this._showDrawer.bind(this,false),'drawer-view',true);this._drawerTabbedLocation.enableMoreTabsButton();this._drawerTabbedPane=this._drawerTabbedLocation.tabbedPane();this._drawerTabbedPane.setMinimumSize(0,27);var closeDrawerButton=new UI.ToolbarButton(Common.UIString('Close drawer'),'largeicon-delete');closeDrawerButton.addEventListener(UI.ToolbarButton.Events.Click,this._closeDrawer,this);this._drawerTabbedPane.rightToolbar().appendToolbarItem(closeDrawerButton);this._drawerSplitWidget.installResizer(this._drawerTabbedPane.headerElement());this._drawerSplitWidget.setSidebarWidget(this._drawerTabbedPane);this._tabbedLocation=UI.viewManager.createTabbedLocation(InspectorFrontendHost.bringToFront.bind(InspectorFrontendHost),'panel',true,true,Runtime.queryParam('panel'));this._tabbedPane=this._tabbedLocation.tabbedPane();this._tabbedPane.registerRequiredCSS('ui/inspectorViewTabbedPane.css');this._tabbedPane.setTabSlider(true);this._tabbedPane.addEventListener(UI.TabbedPane.Events.TabSelected,this._tabSelected,this);this._tabbedPane.setAccessibleName(Common.UIString('Panels'));if(Host.isUnderTest())
this._tabbedPane.setAutoSelectFirstItemOnShow(false);this._drawerSplitWidget.setMainWidget(this._tabbedPane);this._keyDownBound=this._keyDown.bind(this);InspectorFrontendHost.events.addEventListener(InspectorFrontendHostAPI.Events.ShowPanel,showPanel.bind(this));function showPanel(event){var panelName=(event.data);this.showPanel(panelName);}}
static instance(){return(self.runtime.sharedInstance(UI.InspectorView));}
wasShown(){this.element.ownerDocument.addEventListener('keydown',this._keyDownBound,false);}
willHide(){this.element.ownerDocument.removeEventListener('keydown',this._keyDownBound,false);}
resolveLocation(locationName){return this._drawerTabbedLocation;}
createToolbars(){this._tabbedPane.leftToolbar().appendLocationItems('main-toolbar-left');this._tabbedPane.rightToolbar().appendLocationItems('main-toolbar-right');}
addPanel(view){this._tabbedLocation.appendView(view);}
hasPanel(panelName){return this._tabbedPane.hasTab(panelName);}
panel(panelName){return(UI.viewManager.view(panelName).widget());}
onSuspendStateChanged(allTargetsSuspended){this._currentPanelLocked=allTargetsSuspended;this._tabbedPane.setCurrentTabLocked(this._currentPanelLocked);this._tabbedPane.leftToolbar().setEnabled(!this._currentPanelLocked);this._tabbedPane.rightToolbar().setEnabled(!this._currentPanelLocked);}
canSelectPanel(panelName){return!this._currentPanelLocked||this._tabbedPane.selectedTabId===panelName;}
showPanel(panelName){return UI.viewManager.showView(panelName);}
setPanelIcon(panelName,icon){this._tabbedPane.setTabIcon(panelName,icon);}
currentPanelDeprecated(){return(UI.viewManager.materializedWidget(this._tabbedPane.selectedTabId||''));}
_showDrawer(focus){if(this._drawerTabbedPane.isShowing())
return;this._drawerSplitWidget.showBoth();if(focus)
this._focusRestorer=new UI.WidgetFocusRestorer(this._drawerTabbedPane);else
this._focusRestorer=null;}
drawerVisible(){return this._drawerTabbedPane.isShowing();}
_closeDrawer(){if(!this._drawerTabbedPane.isShowing())
return;if(this._focusRestorer)
this._focusRestorer.restore();this._drawerSplitWidget.hideSidebar(true);}
setDrawerMinimized(minimized){this._drawerSplitWidget.setSidebarMinimized(minimized);this._drawerSplitWidget.setResizable(!minimized);}
isDrawerMinimized(){return this._drawerSplitWidget.isSidebarMinimized();}
closeDrawerTab(id,userGesture){this._drawerTabbedPane.closeTab(id,userGesture);}
_keyDown(event){var keyboardEvent=(event);if(!UI.KeyboardShortcut.eventHasCtrlOrMeta(keyboardEvent)||event.altKey||event.shiftKey)
return;var panelShortcutEnabled=Common.moduleSetting('shortcutPanelSwitch').get();if(panelShortcutEnabled){var panelIndex=-1;if(event.keyCode>0x30&&event.keyCode<0x3A)
panelIndex=event.keyCode-0x31;else if(event.keyCode>0x60&&event.keyCode<0x6A&&keyboardEvent.location===KeyboardEvent.DOM_KEY_LOCATION_NUMPAD)
panelIndex=event.keyCode-0x61;if(panelIndex!==-1){var panelName=this._tabbedPane.allTabs()[panelIndex];if(panelName){if(!UI.Dialog.hasInstance()&&!this._currentPanelLocked)
this.showPanel(panelName);event.consume(true);}}}
if(event.key==='['){this._tabbedPane.selectPrevTab();event.consume(true);}
if(event.key===']'){this._tabbedPane.selectNextTab();event.consume(true);}}
onResize(){UI.GlassPane.containerMoved(this.element);}
topResizerElement(){return this._tabbedPane.headerElement();}
toolbarItemResized(){this._tabbedPane.headerResized();}
_tabSelected(event){var tabId=(event.data['tabId']);Host.userMetrics.panelShown(tabId);}
setOwnerSplit(splitWidget){this._ownerSplitWidget=splitWidget;}
minimize(){if(this._ownerSplitWidget)
this._ownerSplitWidget.setSidebarMinimized(true);}
restore(){if(this._ownerSplitWidget)
this._ownerSplitWidget.setSidebarMinimized(false);}};UI.inspectorView;UI.InspectorView.DrawerToggleActionDelegate=class{handleAction(context,actionId){if(UI.inspectorView.drawerVisible())
UI.inspectorView._closeDrawer();else
UI.inspectorView._showDrawer(true);return true;}};;UI.ActionRegistry=class{constructor(){this._actionsById=new Map();this._registerActions();}
_registerActions(){self.runtime.extensions(UI.ActionDelegate).forEach(registerExtension,this);function registerExtension(extension){var actionId=extension.descriptor()['actionId'];console.assert(actionId);console.assert(!this._actionsById.get(actionId));this._actionsById.set(actionId,new UI.Action(extension));}}
availableActions(){return this.applicableActions(this._actionsById.keysArray(),UI.context);}
applicableActions(actionIds,context){var extensions=[];actionIds.forEach(function(actionId){var action=this._actionsById.get(actionId);if(action)
extensions.push(action._extension);},this);return context.applicableExtensions(extensions).valuesArray().map(extensionToAction.bind(this));function extensionToAction(extension){return(this.action(extension.descriptor()['actionId']));}}
action(actionId){return this._actionsById.get(actionId)||null;}};UI.Action=class extends Common.Object{constructor(extension){super();this._extension=extension;this._enabled=true;this._toggled=false;}
id(){return this._extension.descriptor()['actionId'];}
execute(){return this._extension.instance().then(handleAction.bind(this));function handleAction(actionDelegate){var actionId=this._extension.descriptor()['actionId'];var delegate=(actionDelegate);return delegate.handleAction(UI.context,actionId);}}
icon(){return this._extension.descriptor()['iconClass']||'';}
toggledIcon(){return this._extension.descriptor()['toggledIconClass']||'';}
toggleWithRedColor(){return!!this._extension.descriptor()['toggleWithRedColor'];}
setEnabled(enabled){if(this._enabled===enabled)
return;this._enabled=enabled;this.dispatchEventToListeners(UI.Action.Events.Enabled,enabled);}
enabled(){return this._enabled;}
category(){return this._extension.descriptor()['category']||'';}
tags(){return this._extension.descriptor()['tags']||'';}
title(){var title=this._extension.title();var options=this._extension.descriptor()['options'];if(options){for(var pair of options){if(pair['value']!==this._toggled)
title=pair['title'];}}
return title;}
toggled(){return this._toggled;}
setToggled(toggled){if(this._toggled===toggled)
return;this._toggled=toggled;this.dispatchEventToListeners(UI.Action.Events.Toggled,toggled);}};UI.Action.Events={Enabled:Symbol('Enabled'),Toggled:Symbol('Toggled')};UI.ActionDelegate=function(){};UI.ActionDelegate.prototype={handleAction(context,actionId){}};UI.actionRegistry;;UI.ShortcutRegistry=class{constructor(actionRegistry,document){this._actionRegistry=actionRegistry;this._defaultKeyToActions=new Multimap();this._defaultActionToShortcut=new Multimap();this._registerBindings(document);}
_applicableActions(key){return this._actionRegistry.applicableActions(this._defaultActionsForKey(key).valuesArray(),UI.context);}
_defaultActionsForKey(key){return this._defaultKeyToActions.get(String(key));}
shortcutDescriptorsForAction(actionId){return this._defaultActionToShortcut.get(actionId).valuesArray();}
keysForActions(actionIds){var result=[];for(var i=0;i<actionIds.length;++i){var descriptors=this.shortcutDescriptorsForAction(actionIds[i]);for(var j=0;j<descriptors.length;++j)
result.push(descriptors[j].key);}
return result;}
shortcutTitleForAction(actionId){var descriptors=this.shortcutDescriptorsForAction(actionId);if(descriptors.length)
return descriptors[0].name;}
handleShortcut(event){this.handleKey(UI.KeyboardShortcut.makeKeyFromEvent(event),event.key,event);}
handleKey(key,domKey,event){var keyModifiers=key>>8;var actions=this._applicableActions(key);if(!actions.length)
return;if(UI.Dialog.hasInstance()){if(event&&!isPossiblyInputKey())
event.consume(true);return;}
if(!isPossiblyInputKey()){if(event)
event.consume(true);processNextAction.call(this,false);}else{this._pendingActionTimer=setTimeout(processNextAction.bind(this,false),0);}
function processNextAction(handled){delete this._pendingActionTimer;var action=actions.shift();if(!action||handled)
return;action.execute().then(processNextAction.bind(this));}
function isPossiblyInputKey(){if(!event||!UI.isEditing()||/^F\d+|Control|Shift|Alt|Meta|Escape|Win|U\+001B$/.test(domKey))
return false;if(!keyModifiers)
return true;var modifiers=UI.KeyboardShortcut.Modifiers;if((keyModifiers&(modifiers.Ctrl|modifiers.Alt))===(modifiers.Ctrl|modifiers.Alt))
return Host.isWin();return!hasModifier(modifiers.Ctrl)&&!hasModifier(modifiers.Alt)&&!hasModifier(modifiers.Meta);}
function hasModifier(mod){return!!(keyModifiers&mod);}}
registerShortcut(actionId,shortcut){var descriptor=UI.KeyboardShortcut.makeDescriptorFromBindingShortcut(shortcut);if(!descriptor)
return;this._defaultActionToShortcut.set(actionId,descriptor);this._defaultKeyToActions.set(String(descriptor.key),actionId);}
dismissPendingShortcutAction(){if(this._pendingActionTimer){clearTimeout(this._pendingActionTimer);delete this._pendingActionTimer;}}
_registerBindings(document){document.addEventListener('input',this.dismissPendingShortcutAction.bind(this),true);var extensions=self.runtime.extensions(UI.ActionDelegate);extensions.forEach(registerExtension,this);function registerExtension(extension){var descriptor=extension.descriptor();var bindings=descriptor['bindings'];for(var i=0;bindings&&i<bindings.length;++i){if(!platformMatches(bindings[i].platform))
continue;var shortcuts=bindings[i]['shortcut'].split(/\s+/);shortcuts.forEach(this.registerShortcut.bind(this,descriptor['actionId']));}}
function platformMatches(platformsString){if(!platformsString)
return true;var platforms=platformsString.split(',');var isMatch=false;var currentPlatform=Host.platform();for(var i=0;!isMatch&&i<platforms.length;++i)
isMatch=platforms[i]===currentPlatform;return isMatch;}}};UI.ShortcutRegistry.ForwardedShortcut=class{};UI.ShortcutRegistry.ForwardedShortcut.instance=new UI.ShortcutRegistry.ForwardedShortcut();UI.shortcutRegistry;;UI.Context=class{constructor(){this._flavors=new Map();this._eventDispatchers=new Map();}
setFlavor(flavorType,flavorValue){var value=this._flavors.get(flavorType)||null;if(value===flavorValue)
return;if(flavorValue)
this._flavors.set(flavorType,flavorValue);else
this._flavors.remove(flavorType);this._dispatchFlavorChange(flavorType,flavorValue);}
_dispatchFlavorChange(flavorType,flavorValue){for(var extension of self.runtime.extensions(UI.ContextFlavorListener)){if(extension.hasContextType(flavorType)){extension.instance().then(instance=>(instance).flavorChanged(flavorValue));}}
var dispatcher=this._eventDispatchers.get(flavorType);if(!dispatcher)
return;dispatcher.dispatchEventToListeners(UI.Context.Events.FlavorChanged,flavorValue);}
addFlavorChangeListener(flavorType,listener,thisObject){var dispatcher=this._eventDispatchers.get(flavorType);if(!dispatcher){dispatcher=new Common.Object();this._eventDispatchers.set(flavorType,dispatcher);}
dispatcher.addEventListener(UI.Context.Events.FlavorChanged,listener,thisObject);}
removeFlavorChangeListener(flavorType,listener,thisObject){var dispatcher=this._eventDispatchers.get(flavorType);if(!dispatcher)
return;dispatcher.removeEventListener(UI.Context.Events.FlavorChanged,listener,thisObject);if(!dispatcher.hasEventListeners(UI.Context.Events.FlavorChanged))
this._eventDispatchers.remove(flavorType);}
flavor(flavorType){return this._flavors.get(flavorType)||null;}
flavors(){return new Set(this._flavors.keys());}
applicableExtensions(extensions){var targetExtensionSet=new Set();var availableFlavors=this.flavors();extensions.forEach(function(extension){if(self.runtime.isExtensionApplicableToContextTypes(extension,availableFlavors))
targetExtensionSet.add(extension);});return targetExtensionSet;}};UI.Context.Events={FlavorChanged:Symbol('FlavorChanged')};UI.ContextFlavorListener=function(){};UI.ContextFlavorListener.prototype={flavorChanged(object){}};UI.context=new UI.Context();;UI.ContextMenuItem=class{constructor(topLevelMenu,type,label,disabled,checked){this._type=type;this._label=label;this._disabled=disabled;this._checked=checked;this._contextMenu=topLevelMenu;if(type==='item'||type==='checkbox')
this._id=topLevelMenu?topLevelMenu._nextId():0;}
id(){return this._id;}
type(){return this._type;}
isEnabled(){return!this._disabled;}
setEnabled(enabled){this._disabled=!enabled;}
_buildDescriptor(){switch(this._type){case'item':var result={type:'item',id:this._id,label:this._label,enabled:!this._disabled};if(this._customElement)
result.element=this._customElement;if(this._shortcut)
result.shortcut=this._shortcut;return result;case'separator':return{type:'separator'};case'checkbox':return{type:'checkbox',id:this._id,label:this._label,checked:!!this._checked,enabled:!this._disabled};}
throw new Error('Invalid item type:'+this._type);}
setShortcut(shortcut){this._shortcut=shortcut;}};UI.ContextSubMenuItem=class extends UI.ContextMenuItem{constructor(topLevelMenu,label,disabled){super(topLevelMenu,'subMenu',label,disabled);this._items=[];}
appendItem(label,handler,disabled){var item=new UI.ContextMenuItem(this._contextMenu,'item',label,disabled);this._pushItem(item);this._contextMenu._setHandler(item.id(),handler);return item;}
appendCustomItem(element){var item=new UI.ContextMenuItem(this._contextMenu,'item','<custom>');item._customElement=element;this._pushItem(item);return item;}
appendAction(actionId,label){var action=UI.actionRegistry.action(actionId);if(!label)
label=action.title();var result=this.appendItem(label,action.execute.bind(action));var shortcut=UI.shortcutRegistry.shortcutTitleForAction(actionId);if(shortcut)
result.setShortcut(shortcut);return result;}
appendSubMenuItem(label,disabled,subMenuId){var item=new UI.ContextSubMenuItem(this._contextMenu,label,disabled);if(subMenuId)
this._contextMenu._namedSubMenus.set(subMenuId,item);this._pushItem(item);return item;}
appendCheckboxItem(label,handler,checked,disabled){var item=new UI.ContextMenuItem(this._contextMenu,'checkbox',label,disabled,checked);this._pushItem(item);this._contextMenu._setHandler(item.id(),handler);return item;}
appendSeparator(){if(this._items.length)
this._pendingSeparator=true;}
_pushItem(item){if(this._pendingSeparator){this._items.push(new UI.ContextMenuItem(this._contextMenu,'separator'));delete this._pendingSeparator;}
this._items.push(item);}
isEmpty(){return!this._items.length;}
_buildDescriptor(){var result={type:'subMenu',label:this._label,enabled:!this._disabled,subItems:[]};for(var i=0;i<this._items.length;++i)
result.subItems.push(this._items[i]._buildDescriptor());return result;}
appendItemsAtLocation(location){function appendExtension(menu,extension){var subMenuId=extension.descriptor()['subMenuId'];if(subMenuId){var subMenuItem=menu.appendSubMenuItem(extension.title(),false,subMenuId);subMenuItem.appendItemsAtLocation(subMenuId);}else{menu.appendAction(extension.descriptor()['actionId']);}}
var groupWeights=['new','open','clipboard','navigate','footer'];var groups=new Map();var extensions=self.runtime.extensions('context-menu-item');for(var extension of extensions){var itemLocation=extension.descriptor()['location']||'';if(!itemLocation.startsWith(location+'/'))
continue;var itemGroup=itemLocation.substr(location.length+1);if(!itemGroup||itemGroup.includes('/'))
continue;var group=groups.get(itemGroup);if(!group){group=[];groups.set(itemGroup,group);if(groupWeights.indexOf(itemGroup)===-1)
groupWeights.splice(4,0,itemGroup);}
group.push(extension);}
for(var groupName of groupWeights){var group=groups.get(groupName);if(!group)
continue;group.forEach(appendExtension.bind(null,this));this.appendSeparator();}}};UI.ContextMenu=class extends UI.ContextSubMenuItem{constructor(event,useSoftMenu,x,y){super(null,'');this._contextMenu=this;this._pendingPromises=[];this._pendingTargets=[];this._event=event;this._useSoftMenu=!!useSoftMenu;this._x=x===undefined?event.x:x;this._y=y===undefined?event.y:y;this._handlers={};this._id=0;this._namedSubMenus=new Map();var target=event.deepElementFromPoint();if(target)
this.appendApplicableItems((target));}
static initialize(){InspectorFrontendHost.events.addEventListener(InspectorFrontendHostAPI.Events.SetUseSoftMenu,setUseSoftMenu);function setUseSoftMenu(event){UI.ContextMenu._useSoftMenu=(event.data);}}
static installHandler(doc){doc.body.addEventListener('contextmenu',handler,false);function handler(event){var contextMenu=new UI.ContextMenu(event);contextMenu.show();}}
_nextId(){return this._id++;}
beforeShow(callback){this._beforeShow=callback;}
show(){Promise.all(this._pendingPromises).then(populate.bind(this)).then(this._innerShow.bind(this));UI.ContextMenu._pendingMenu=this;function populate(appendCallResults){if(UI.ContextMenu._pendingMenu!==this)
return;delete UI.ContextMenu._pendingMenu;for(var i=0;i<appendCallResults.length;++i){var providers=appendCallResults[i];var target=this._pendingTargets[i];for(var j=0;j<providers.length;++j){var provider=(providers[j]);this.appendSeparator();provider.appendApplicableItems(this._event,this,target);this.appendSeparator();}}
this._pendingPromises=[];this._pendingTargets=[];}
this._event.consume(true);}
discard(){if(this._softMenu)
this._softMenu.discard();}
_innerShow(){if(typeof this._beforeShow==='function'){this._beforeShow();delete this._beforeShow;}
var menuObject=this._buildDescriptors();UI._contextMenu=this;if(this._useSoftMenu||UI.ContextMenu._useSoftMenu||InspectorFrontendHost.isHostedMode()){this._softMenu=new UI.SoftContextMenu(menuObject,this._itemSelected.bind(this));this._softMenu.show(this._event.target.ownerDocument,this._x,this._y);}else{InspectorFrontendHost.showContextMenuAtPoint(this._x,this._y,menuObject,this._event.target.ownerDocument);function listenToEvents(){InspectorFrontendHost.events.addEventListener(InspectorFrontendHostAPI.Events.ContextMenuCleared,this._menuCleared,this);InspectorFrontendHost.events.addEventListener(InspectorFrontendHostAPI.Events.ContextMenuItemSelected,this._onItemSelected,this);}
setImmediate(listenToEvents.bind(this));}}
_setHandler(id,handler){if(handler)
this._handlers[id]=handler;}
_buildDescriptors(){var result=[];for(var i=0;i<this._items.length;++i)
result.push(this._items[i]._buildDescriptor());return result;}
_onItemSelected(event){this._itemSelected((event.data));}
_itemSelected(id){if(this._handlers[id])
this._handlers[id].call(this);this._menuCleared();}
_menuCleared(){InspectorFrontendHost.events.removeEventListener(InspectorFrontendHostAPI.Events.ContextMenuCleared,this._menuCleared,this);InspectorFrontendHost.events.removeEventListener(InspectorFrontendHostAPI.Events.ContextMenuItemSelected,this._onItemSelected,this);}
appendApplicableItems(target){this._pendingPromises.push(self.runtime.allInstances(UI.ContextMenu.Provider,target));this._pendingTargets.push(target);}
namedSubMenu(name){return this._namedSubMenus.get(name)||null;}};UI.ContextMenu.Provider=function(){};UI.ContextMenu.Provider.prototype={appendApplicableItems(event,contextMenu,target){}};;UI.GlassPane=class{constructor(){this._widget=new UI.Widget(true);this._widget.markAsRoot();this.element=this._widget.element;this.contentElement=this._widget.contentElement;this._arrowElement=UI.Icon.create('','arrow hidden');this.element.shadowRoot.appendChild(this._arrowElement);this.registerRequiredCSS('ui/glassPane.css');this.element.classList.add('no-pointer-events');this._onMouseDownBound=this._onMouseDown.bind(this);this._onClickOutsideCallback=null;this._maxSize=null;this._positionX=null;this._positionY=null;this._anchorBox=null;this._anchorBehavior=UI.GlassPane.AnchorBehavior.PreferTop;this._sizeBehavior=UI.GlassPane.SizeBehavior.SetExactSize;this._showArrow=false;}
isShowing(){return this._widget.isShowing();}
registerRequiredCSS(cssFile){this._widget.registerRequiredCSS(cssFile);}
setDimmed(dimmed){this.element.classList.toggle('dimmed-pane',dimmed);}
setBlockPointerEvents(blockPointerEvents){this.element.classList.toggle('no-pointer-events',!blockPointerEvents);}
setSetOutsideClickCallback(callback){this._onClickOutsideCallback=callback;}
setMaxContentSize(size){this._maxSize=size;this._positionContent();}
setSizeBehavior(sizeBehavior){this._sizeBehavior=sizeBehavior;this._positionContent();}
setContentPosition(x,y){this._positionX=x;this._positionY=y;this._positionContent();}
setContentAnchorBox(anchorBox){this._anchorBox=anchorBox;this._positionContent();}
setAnchorBehavior(behavior){this._anchorBehavior=behavior;}
setShowArrow(showArrow){this._showArrow=showArrow;this._arrowElement.classList.toggle('hidden',!showArrow);}
show(document){if(this.isShowing())
return;this.element.style.zIndex=3000+1000*UI.GlassPane._panes.size;document.body.addEventListener('mousedown',this._onMouseDownBound,true);this._widget.show(document.body);UI.GlassPane._panes.add(this);this._positionContent();}
hide(){if(!this.isShowing())
return;UI.GlassPane._panes.delete(this);this.element.ownerDocument.body.removeEventListener('mousedown',this._onMouseDownBound,true);this._widget.detach();}
_onMouseDown(event){if(!this._onClickOutsideCallback)
return;if(this.contentElement.isSelfOrAncestor((event.deepElementFromPoint())))
return;this._onClickOutsideCallback.call(null,event);}
_positionContent(){if(!this.isShowing())
return;var gutterSize=this._showArrow?6:3;var scrollbarSize=14;var arrowSize=10;var container=UI.GlassPane._containers.get((this.element.ownerDocument));if(this._sizeBehavior===UI.GlassPane.SizeBehavior.MeasureContent){this.contentElement.positionAt(0,0);this.contentElement.style.width='';this.contentElement.style.maxWidth='';this.contentElement.style.height='';this.contentElement.style.maxHeight='';}
var containerWidth=container.offsetWidth;var containerHeight=container.offsetHeight;var width=containerWidth-gutterSize*2;var height=containerHeight-gutterSize*2;var positionX=gutterSize;var positionY=gutterSize;if(this._maxSize){width=Math.min(width,this._maxSize.width);height=Math.min(height,this._maxSize.height);}
var measuredWidth=0;var measuredHeight=0;if(this._sizeBehavior===UI.GlassPane.SizeBehavior.MeasureContent){measuredWidth=this.contentElement.offsetWidth;measuredHeight=this.contentElement.offsetHeight;width=Math.min(width,measuredWidth);height=Math.min(height,measuredHeight);}
if(this._anchorBox){var anchorBox=this._anchorBox.relativeToElement(container);var behavior=this._anchorBehavior;this._arrowElement.classList.remove('arrow-none','arrow-top','arrow-bottom','arrow-left','arrow-right');if(behavior===UI.GlassPane.AnchorBehavior.PreferTop||behavior===UI.GlassPane.AnchorBehavior.PreferBottom){var top=anchorBox.y-2*gutterSize;var bottom=containerHeight-anchorBox.y-anchorBox.height-2*gutterSize;if(behavior===UI.GlassPane.AnchorBehavior.PreferTop&&top<height&&bottom>top)
behavior=UI.GlassPane.AnchorBehavior.PreferBottom;if(behavior===UI.GlassPane.AnchorBehavior.PreferBottom&&bottom<height&&top>bottom)
behavior=UI.GlassPane.AnchorBehavior.PreferTop;var arrowY;if(behavior===UI.GlassPane.AnchorBehavior.PreferTop){positionY=Math.max(gutterSize,anchorBox.y-height-gutterSize);var spaceTop=anchorBox.y-positionY-gutterSize;if(this._sizeBehavior===UI.GlassPane.SizeBehavior.MeasureContent){if(height<measuredHeight)
width+=scrollbarSize;if(height>spaceTop)
this._arrowElement.classList.add('arrow-none');}else{height=Math.min(height,spaceTop);}
this._arrowElement.setIconType('mediumicon-arrow-bottom');this._arrowElement.classList.add('arrow-bottom');arrowY=anchorBox.y-gutterSize;}else{positionY=anchorBox.y+anchorBox.height+gutterSize;var spaceBottom=containerHeight-positionY-gutterSize;if(this._sizeBehavior===UI.GlassPane.SizeBehavior.MeasureContent){if(height<measuredHeight)
width+=scrollbarSize;if(height>spaceBottom){this._arrowElement.classList.add('arrow-none');positionY=containerHeight-gutterSize-height;}}else{height=Math.min(height,spaceBottom);}
this._arrowElement.setIconType('mediumicon-arrow-top');this._arrowElement.classList.add('arrow-top');arrowY=anchorBox.y+anchorBox.height+gutterSize;}
positionX=Math.max(gutterSize,Math.min(anchorBox.x,containerWidth-width-gutterSize));if(this._showArrow&&positionX-arrowSize>=gutterSize)
positionX-=arrowSize;width=Math.min(width,containerWidth-positionX-gutterSize);if(2*arrowSize>=width){this._arrowElement.classList.add('arrow-none');}else{var arrowX=anchorBox.x+Math.min(50,Math.floor(anchorBox.width/2));arrowX=Number.constrain(arrowX,positionX+arrowSize,positionX+width-arrowSize);this._arrowElement.positionAt(arrowX,arrowY,container);}}else{var left=anchorBox.x-2*gutterSize;var right=containerWidth-anchorBox.x-anchorBox.width-2*gutterSize;if(behavior===UI.GlassPane.AnchorBehavior.PreferLeft&&left<width&&right>left)
behavior=UI.GlassPane.AnchorBehavior.PreferRight;if(behavior===UI.GlassPane.AnchorBehavior.PreferRight&&right<width&&left>right)
behavior=UI.GlassPane.AnchorBehavior.PreferLeft;var arrowX;if(behavior===UI.GlassPane.AnchorBehavior.PreferLeft){positionX=Math.max(gutterSize,anchorBox.x-width-gutterSize);var spaceLeft=anchorBox.x-positionX-gutterSize;if(this._sizeBehavior===UI.GlassPane.SizeBehavior.MeasureContent){if(width<measuredWidth)
height+=scrollbarSize;if(width>spaceLeft)
this._arrowElement.classList.add('arrow-none');}else{width=Math.min(width,spaceLeft);}
this._arrowElement.setIconType('mediumicon-arrow-right');this._arrowElement.classList.add('arrow-right');arrowX=anchorBox.x-gutterSize;}else{positionX=anchorBox.x+anchorBox.width+gutterSize;var spaceRight=containerWidth-positionX-gutterSize;if(this._sizeBehavior===UI.GlassPane.SizeBehavior.MeasureContent){if(width<measuredWidth)
height+=scrollbarSize;if(width>spaceRight){this._arrowElement.classList.add('arrow-none');positionX=containerWidth-gutterSize-width;}}else{width=Math.min(width,spaceRight);}
this._arrowElement.setIconType('mediumicon-arrow-left');this._arrowElement.classList.add('arrow-left');arrowX=anchorBox.x+anchorBox.width+gutterSize;}
positionY=Math.max(gutterSize,Math.min(anchorBox.y,containerHeight-height-gutterSize));if(this._showArrow&&positionY-arrowSize>=gutterSize)
positionY-=arrowSize;height=Math.min(height,containerHeight-positionY-gutterSize);if(2*arrowSize>=height){this._arrowElement.classList.add('arrow-none');}else{var arrowY=anchorBox.y+Math.min(50,Math.floor(anchorBox.height/2));arrowY=Number.constrain(arrowY,positionY+arrowSize,positionY+height-arrowSize);this._arrowElement.positionAt(arrowX,arrowY,container);}}}else{positionX=this._positionX!==null?this._positionX:(containerWidth-width)/2;positionY=this._positionY!==null?this._positionY:(containerHeight-height)/2;width=Math.min(width,containerWidth-positionX-gutterSize);height=Math.min(height,containerHeight-positionY-gutterSize);this._arrowElement.classList.add('arrow-none');}
this.contentElement.style.width=width+'px';if(this._sizeBehavior===UI.GlassPane.SizeBehavior.SetExactWidthMaxHeight)
this.contentElement.style.maxHeight=height+'px';else
this.contentElement.style.height=height+'px';this.contentElement.positionAt(positionX,positionY,container);this._widget.doResize();}
widget(){return this._widget;}
static setContainer(element){UI.GlassPane._containers.set((element.ownerDocument),element);UI.GlassPane.containerMoved(element);}
static container(document){return UI.GlassPane._containers.get(document);}
static containerMoved(element){for(var pane of UI.GlassPane._panes){if(pane.isShowing()&&pane.element.ownerDocument===element.ownerDocument)
pane._positionContent();}}};UI.GlassPane.AnchorBehavior={PreferTop:Symbol('PreferTop'),PreferBottom:Symbol('PreferBottom'),PreferLeft:Symbol('PreferLeft'),PreferRight:Symbol('PreferRight'),};UI.GlassPane.SizeBehavior={SetExactSize:Symbol('SetExactSize'),SetExactWidthMaxHeight:Symbol('SetExactWidthMaxHeight'),MeasureContent:Symbol('MeasureContent')};UI.GlassPane._containers=new Map();UI.GlassPane._panes=new Set();;UI.Dialog=class extends UI.GlassPane{constructor(){super();this.registerRequiredCSS('ui/dialog.css');this.contentElement.tabIndex=0;this.contentElement.addEventListener('focus',()=>this.widget().focus(),false);this.contentElement.addEventListener('keydown',this._onKeyDown.bind(this),false);this.setBlockPointerEvents(true);this.setSetOutsideClickCallback(event=>{this.hide();event.consume(true);});this._tabIndexMap=new Map();this._focusRestorer=null;}
static hasInstance(){return!!UI.Dialog._instance;}
show(where){var document=(where instanceof Document?where:(where||UI.inspectorView.element).ownerDocument);if(UI.Dialog._instance)
UI.Dialog._instance.hide();UI.Dialog._instance=this;this._disableTabIndexOnElements(document);super.show(document);this._focusRestorer=new UI.WidgetFocusRestorer(this.widget());}
hide(){this._focusRestorer.restore();super.hide();this._restoreTabIndexOnElements();delete UI.Dialog._instance;}
addCloseButton(){var closeButton=this.contentElement.createChild('div','dialog-close-button','dt-close-button');closeButton.gray=true;closeButton.addEventListener('click',()=>this.hide(),false);}
_disableTabIndexOnElements(document){this._tabIndexMap.clear();for(var node=document;node;node=node.traverseNextNode(document)){if(node instanceof HTMLElement){var element=(node);var tabIndex=element.tabIndex;if(tabIndex>=0){this._tabIndexMap.set(element,tabIndex);element.tabIndex=-1;}}}}
_restoreTabIndexOnElements(){for(var element of this._tabIndexMap.keys())
element.tabIndex=(this._tabIndexMap.get(element));this._tabIndexMap.clear();}
_onKeyDown(event){if(event.keyCode===UI.KeyboardShortcut.Keys.Esc.code){event.consume(true);this.hide();}}};;UI.SyntaxHighlighter=class{constructor(mimeType,stripExtraWhitespace){this._mimeType=mimeType;this._stripExtraWhitespace=stripExtraWhitespace;}
createSpan(content,className){var span=createElement('span');span.className='cm-'+className;if(this._stripExtraWhitespace&&className!=='whitespace')
content=content.replace(/^[\n\r]*/,'').replace(/\s*$/,'');span.createTextChild(content);return span;}
syntaxHighlightNode(node){var lines=node.textContent.split('\n');var plainTextStart;var line;return self.runtime.extension(Common.TokenizerFactory).instance().then(processTokens.bind(this));function processTokens(tokenizerFactory){node.removeChildren();var tokenize=tokenizerFactory.createTokenizer(this._mimeType);for(var i=0;i<lines.length;++i){line=lines[i];plainTextStart=0;tokenize(line,processToken.bind(this));if(plainTextStart<line.length){var plainText=line.substring(plainTextStart,line.length);node.createTextChild(plainText);}
if(i<lines.length-1)
node.createTextChild('\n');}}
function processToken(token,tokenType,column,newColumn){if(!tokenType)
return;if(column>plainTextStart){var plainText=line.substring(plainTextStart,column);node.createTextChild(plainText);}
node.appendChild(this.createSpan(token,tokenType));plainTextStart=newColumn;}}};;UI.DropDownMenu=class extends Common.Object{constructor(element){super();this._items=[];element.addEventListener('mousedown',this._onMouseDown.bind(this));}
_onMouseDown(event){if(event.which!==1)
return;var menu=new UI.ContextMenu(event);for(var item of this._items)
menu.appendCheckboxItem(item.title,this._itemHandler.bind(this,item.id),item.id===this._selectedItemId);menu.show();}
_itemHandler(id){this.dispatchEventToListeners(UI.DropDownMenu.Events.ItemSelected,id);}
addItem(id,title){this._items.push({id:id,title:title});}
selectItem(id){this._selectedItemId=id;}
clear(){this._items=[];delete this._selectedItemId;}};UI.DropDownMenu.Item;UI.DropDownMenu.Events={ItemSelected:Symbol('ItemSelected')};;UI.DropTarget=class{constructor(element,transferTypes,messageText,handleDrop){element.addEventListener('dragenter',this._onDragEnter.bind(this),true);element.addEventListener('dragover',this._onDragOver.bind(this),true);this._element=element;this._transferTypes=transferTypes;this._messageText=messageText;this._handleDrop=handleDrop;this._enabled=true;}
setEnabled(enabled){this._enabled=enabled;}
_onDragEnter(event){if(this._enabled&&this._hasMatchingType(event))
event.consume(true);}
_hasMatchingType(event){for(var type of this._transferTypes){if(event.dataTransfer.types.indexOf(type)!==-1)
return true;}
return false;}
_onDragOver(event){if(!this._enabled||!this._hasMatchingType(event))
return;event.dataTransfer.dropEffect='copy';event.consume(true);if(this._dragMaskElement)
return;this._dragMaskElement=this._element.createChild('div','');var shadowRoot=UI.createShadowRootWithCoreStyles(this._dragMaskElement,'ui/dropTarget.css');shadowRoot.createChild('div','drop-target-message').textContent=this._messageText;this._dragMaskElement.addEventListener('drop',this._onDrop.bind(this),true);this._dragMaskElement.addEventListener('dragleave',this._onDragLeave.bind(this),true);}
_onDrop(event){event.consume(true);this._removeMask();if(this._enabled)
this._handleDrop(event.dataTransfer);}
_onDragLeave(event){event.consume(true);this._removeMask();}
_removeMask(){this._dragMaskElement.remove();delete this._dragMaskElement;}};UI.DropTarget.Types={Files:'Files',URIList:'text/uri-list'};;UI.EmptyWidget=class extends UI.VBox{constructor(text){super();this.registerRequiredCSS('ui/emptyWidget.css');this.element.classList.add('empty-view');this.textElement=this.element.createChild('h2');this.textElement.textContent=text;}
appendParagraph(){return this.element.createChild('p');}
set text(text){this.textElement.textContent=text;}};;UI.FilterBar=class extends UI.HBox{constructor(name,visibleByDefault){super();this.registerRequiredCSS('ui/filter.css');this._enabled=true;this.element.classList.add('filter-bar');this._stateSetting=Common.settings.createSetting('filterBar-'+name+'-toggled',!!visibleByDefault);this._filterButton=new UI.ToolbarSettingToggle(this._stateSetting,'largeicon-filter',Common.UIString('Filter'));this._filters=[];this._updateFilterBar();this._stateSetting.addChangeListener(this._updateFilterBar.bind(this));}
filterButton(){return this._filterButton;}
addFilter(filter){this._filters.push(filter);this.element.appendChild(filter.element());filter.addEventListener(UI.FilterUI.Events.FilterChanged,this._filterChanged,this);this._updateFilterButton();}
setEnabled(enabled){this._enabled=enabled;this._filterButton.setEnabled(enabled);this._updateFilterBar();}
forceShowFilterBar(){this._alwaysShowFilters=true;this._updateFilterBar();}
showOnce(){this._stateSetting.set(true);}
_filterChanged(event){this._updateFilterButton();}
wasShown(){super.wasShown();this._updateFilterBar();}
_updateFilterBar(){if(!this.parentWidget()||this._showingWidget)
return;var visible=this._alwaysShowFilters||(this._stateSetting.get()&&this._enabled);if(visible){this._showingWidget=true;this.showWidget();this._showingWidget=false;this._focusTextField();}else{this.hideWidget();}}
_focusTextField(){for(var i=0;i<this._filters.length;++i){if(this._filters[i]instanceof UI.TextFilterUI){var textFilterUI=(this._filters[i]);textFilterUI.focus();break;}}}
_updateFilterButton(){var isActive=false;for(var filter of this._filters)
isActive=isActive||filter.isActive();this._filterButton.setDefaultWithRedColor(isActive);this._filterButton.setToggleWithRedColor(isActive);}
clear(){this.element.removeChildren();this._filters=[];this._updateFilterButton();}};UI.FilterBar.FilterBarState={Inactive:'inactive',Active:'active',Shown:'on'};UI.FilterUI=function(){};UI.FilterUI.Events={FilterChanged:Symbol('FilterChanged')};UI.FilterUI.prototype={isActive(){},element(){}};UI.TextFilterUI=class extends Common.Object{constructor(supportRegex){super();this._supportRegex=!!supportRegex;this._regex=null;this._filterElement=createElement('div');this._filterElement.className='filter-text-filter';this._filterInputElement=this._filterElement.createChild('span','filter-input-field');this._prompt=new UI.TextPrompt();this._prompt.initialize(this._completions.bind(this),' ');this._proxyElement=this._prompt.attach(this._filterInputElement);this._prompt.setPlaceholder(Common.UIString('Filter'));this._proxyElement.addEventListener('keydown',this._onInputKeyDown.bind(this),false);this._prompt.on(UI.TextPrompt.TextChangedEvent,this._valueChanged.bind(this));this._suggestionProvider=null;if(this._supportRegex){this._filterElement.classList.add('supports-regex');var label=UI.createCheckboxLabel(Common.UIString('Regex'));this._regexCheckBox=label.checkboxElement;this._regexCheckBox.id='text-filter-regex';this._regexCheckBox.addEventListener('change',this._valueChanged.bind(this),false);this._filterElement.appendChild(label);this._regexLabel=this._filterElement.textElement;}}
_completions(expression,prefix,force){if(this._suggestionProvider&&!this.isRegexChecked())
return this._suggestionProvider(expression,prefix,force);return Promise.resolve([]);}
isActive(){return!!this._prompt.text();}
element(){return this._filterElement;}
isRegexChecked(){return this._supportRegex?this._regexCheckBox.checked:false;}
value(){return this._prompt.textWithCurrentSuggestion();}
setValue(value){this._prompt.setText(value);this._valueChanged();}
setRegexChecked(checked){if(this._supportRegex)
this._regexCheckBox.checked=checked;}
regex(){return this._regex;}
focus(){this._filterInputElement.focus();}
setSuggestionProvider(suggestionProvider){this._prompt.clearAutocomplete();this._suggestionProvider=suggestionProvider;}
_valueChanged(){var filterQuery=this.value();this._regex=null;this._filterInputElement.classList.remove('filter-text-invalid');if(filterQuery){if(this.isRegexChecked()){try{this._regex=new RegExp(filterQuery,'i');}catch(e){this._filterInputElement.classList.add('filter-text-invalid');}}else{this._regex=createPlainTextSearchRegex(filterQuery,'i');}}
this._dispatchFilterChanged();}
_dispatchFilterChanged(){this.dispatchEventToListeners(UI.FilterUI.Events.FilterChanged,null);}
_onInputKeyDown(event){if(isEnterKey(event))
event.consume(true);}};UI.NamedBitSetFilterUI=class extends Common.Object{constructor(items,setting){super();this._filtersElement=createElementWithClass('div','filter-bitset-filter');this._filtersElement.title=Common.UIString('%sClick to select multiple types',UI.KeyboardShortcut.shortcutToString('',UI.KeyboardShortcut.Modifiers.CtrlOrMeta));this._allowedTypes={};this._typeFilterElements={};this._addBit(UI.NamedBitSetFilterUI.ALL_TYPES,Common.UIString('All'));this._filtersElement.createChild('div','filter-bitset-filter-divider');for(var i=0;i<items.length;++i)
this._addBit(items[i].name,items[i].label,items[i].title);if(setting){this._setting=setting;setting.addChangeListener(this._settingChanged.bind(this));this._settingChanged();}else{this._toggleTypeFilter(UI.NamedBitSetFilterUI.ALL_TYPES,false);}}
reset(){this._toggleTypeFilter(UI.NamedBitSetFilterUI.ALL_TYPES,false);}
isActive(){return!this._allowedTypes[UI.NamedBitSetFilterUI.ALL_TYPES];}
element(){return this._filtersElement;}
accept(typeName){return!!this._allowedTypes[UI.NamedBitSetFilterUI.ALL_TYPES]||!!this._allowedTypes[typeName];}
_settingChanged(){var allowedTypes=this._setting.get();this._allowedTypes={};for(var typeName in this._typeFilterElements){if(allowedTypes[typeName])
this._allowedTypes[typeName]=true;}
this._update();}
_update(){if((Object.keys(this._allowedTypes).length===0)||this._allowedTypes[UI.NamedBitSetFilterUI.ALL_TYPES]){this._allowedTypes={};this._allowedTypes[UI.NamedBitSetFilterUI.ALL_TYPES]=true;}
for(var typeName in this._typeFilterElements)
this._typeFilterElements[typeName].classList.toggle('selected',this._allowedTypes[typeName]);this.dispatchEventToListeners(UI.FilterUI.Events.FilterChanged,null);}
_addBit(name,label,title){var typeFilterElement=this._filtersElement.createChild('li',name);typeFilterElement.typeName=name;typeFilterElement.createTextChild(label);if(title)
typeFilterElement.title=title;typeFilterElement.addEventListener('click',this._onTypeFilterClicked.bind(this),false);this._typeFilterElements[name]=typeFilterElement;}
_onTypeFilterClicked(e){var toggle;if(Host.isMac())
toggle=e.metaKey&&!e.ctrlKey&&!e.altKey&&!e.shiftKey;else
toggle=e.ctrlKey&&!e.metaKey&&!e.altKey&&!e.shiftKey;this._toggleTypeFilter(e.target.typeName,toggle);}
_toggleTypeFilter(typeName,allowMultiSelect){if(allowMultiSelect&&typeName!==UI.NamedBitSetFilterUI.ALL_TYPES)
this._allowedTypes[UI.NamedBitSetFilterUI.ALL_TYPES]=false;else
this._allowedTypes={};this._allowedTypes[typeName]=!this._allowedTypes[typeName];if(this._setting)
this._setting.set(this._allowedTypes);else
this._update();}};UI.NamedBitSetFilterUI.Item;UI.NamedBitSetFilterUI.ALL_TYPES='all';UI.ComboBoxFilterUI=class extends Common.Object{constructor(options,label,setting){super();this._setting=setting;this._toolbar=new UI.Toolbar('');this._filterComboBox=new UI.ToolbarComboBox(this._filterChanged.bind(this));this._toolbar.appendToolbarItem(this._filterComboBox);this._options=options;for(var i=0;i<options.length;++i){var filterOption=options[i];var option=this._filterComboBox.createOption(filterOption.label,filterOption.title,filterOption.value);this._filterComboBox.addOption(option);if(setting&&setting.get()===filterOption.value)
this._filterComboBox.setSelectedIndex(i);}
if(setting)
setting.addChangeListener(this._settingChanged,this);}
isActive(){var option=this._options[this._filterComboBox.selectedIndex()];return!option||!option.default;}
element(){return this._toolbar.element;}
value(){return this._options[this._filterComboBox.selectedIndex()].value;}
setSelectedIndex(index){this._filterComboBox.setSelectedIndex(index);}
selectedIndex(index){return this._filterComboBox.selectedIndex();}
_settingChanged(){if(this._muteSettingListener)
return;var value=this._setting.get();for(var i=0;i<this._options.length;++i){if(value===this._options[i].value){this._filterComboBox.setSelectedIndex(i);break;}}}
_filterChanged(event){var option=this._options[this._filterComboBox.selectedIndex()];if(this._setting){this._muteSettingListener=true;this._setting.set(option.value);this._muteSettingListener=false;}
this.dispatchEventToListeners(UI.FilterUI.Events.FilterChanged,null);}};UI.CheckboxFilterUI=class extends Common.Object{constructor(className,title,activeWhenChecked,setting){super();this._filterElement=createElementWithClass('div','filter-checkbox-filter');this._activeWhenChecked=!!activeWhenChecked;this._label=UI.createCheckboxLabel(title);this._filterElement.appendChild(this._label);this._checkboxElement=this._label.checkboxElement;if(setting)
UI.SettingsUI.bindCheckbox(this._checkboxElement,setting);else
this._checkboxElement.checked=true;this._checkboxElement.addEventListener('change',this._fireUpdated.bind(this),false);}
isActive(){return this._activeWhenChecked===this._checkboxElement.checked;}
checked(){return this._checkboxElement.checked;}
setChecked(checked){this._checkboxElement.checked=checked;}
element(){return this._filterElement;}
labelElement(){return this._label;}
_fireUpdated(){this.dispatchEventToListeners(UI.FilterUI.Events.FilterChanged,null);}
setColor(backgroundColor,borderColor){this._label.backgroundColor=backgroundColor;this._label.borderColor=borderColor;}};;UI.ForwardedInputEventHandler=class{constructor(){InspectorFrontendHost.events.addEventListener(InspectorFrontendHostAPI.Events.KeyEventUnhandled,this._onKeyEventUnhandled,this);}
_onKeyEventUnhandled(event){var data=event.data;var type=(data.type);var key=(data.key);var keyCode=(data.keyCode);var modifiers=(data.modifiers);if(type!=='keydown')
return;UI.context.setFlavor(UI.ShortcutRegistry.ForwardedShortcut,UI.ShortcutRegistry.ForwardedShortcut.instance);UI.shortcutRegistry.handleKey(UI.KeyboardShortcut.makeKey(keyCode,modifiers),key);UI.context.setFlavor(UI.ShortcutRegistry.ForwardedShortcut,null);}};UI.forwardedEventHandler=new UI.ForwardedInputEventHandler();;UI.HistoryInput=class extends HTMLInputElement{constructor(){super();}
static create(){if(!UI.HistoryInput._constructor)
UI.HistoryInput._constructor=UI.registerCustomElement('input','history-input',UI.HistoryInput.prototype);return(new UI.HistoryInput._constructor());}
createdCallback(){this._history=[''];this._historyPosition=0;this.addEventListener('keydown',this._onKeyDown.bind(this),false);this.addEventListener('input',this._onInput.bind(this),false);}
_onInput(event){if(this._history.length===this._historyPosition+1)
this._history[this._history.length-1]=this.value;}
_onKeyDown(event){if(event.keyCode===UI.KeyboardShortcut.Keys.Up.code){this._historyPosition=Math.max(this._historyPosition-1,0);this.value=this._history[this._historyPosition];this.dispatchEvent(new Event('input',{'bubbles':true,'cancelable':true}));event.consume(true);}else if(event.keyCode===UI.KeyboardShortcut.Keys.Down.code){this._historyPosition=Math.min(this._historyPosition+1,this._history.length-1);this.value=this._history[this._historyPosition];this.dispatchEvent(new Event('input',{'bubbles':true,'cancelable':true}));event.consume(true);}else if(event.keyCode===UI.KeyboardShortcut.Keys.Enter.code){this._saveToHistory();}}
_saveToHistory(){if(this._history.length>1&&this._history[this._history.length-2]===this.value)
return;this._history[this._history.length-1]=this.value;this._historyPosition=this._history.length-1;this._history.push('');}};;UI.Icon=class extends HTMLSpanElement{constructor(){super();throw new Error('icon must be created via factory method.');}
static create(iconType,className){if(!UI.Icon._constructor)
UI.Icon._constructor=UI.registerCustomElement('span','ui-icon',UI.Icon.prototype);var icon=(new UI.Icon._constructor());if(className)
icon.className=className;if(iconType)
icon.setIconType(iconType);return icon;}
createdCallback(){this._descriptor=null;this._iconType='';}
setIconType(iconType){if(this._descriptor){this.style.removeProperty('--spritesheet-position');this.style.removeProperty('width');this.style.removeProperty('height');this._toggleClasses(false);this._iconType='';this._descriptor=null;}
var descriptor=UI.Icon.Descriptors[iconType]||null;if(descriptor){this._iconType=iconType;this._descriptor=descriptor;this.style.setProperty('--spritesheet-position',this._propertyValue());this.style.setProperty('width',this._descriptor.width+'px');this.style.setProperty('height',this._descriptor.height+'px');this._toggleClasses(true);}else if(iconType){throw new Error(`ERROR: failed to find icon descriptor for type: ${iconType}`);}}
_toggleClasses(value){this.classList.toggle('spritesheet-'+this._descriptor.spritesheet,value);this.classList.toggle(this._iconType,value);this.classList.toggle('icon-mask',value&&!!this._descriptor.isMask);}
_propertyValue(){return`${this._descriptor.x}px ${this._descriptor.y}px`;}};UI.Icon.Descriptor;UI.Icon.Descriptors={'smallicon-error':{x:-20,y:0,width:10,height:10,spritesheet:'smallicons'},'smallicon-warning':{x:-60,y:0,width:10,height:10,spritesheet:'smallicons'},'smallicon-info':{x:-80,y:0,width:10,height:10,spritesheet:'smallicons'},'smallicon-device':{x:-100,y:0,width:10,height:10,spritesheet:'smallicons'},'smallicon-red-ball':{x:-120,y:0,width:10,height:10,spritesheet:'smallicons'},'smallicon-green-ball':{x:-140,y:0,width:10,height:10,spritesheet:'smallicons'},'smallicon-orange-ball':{x:-160,y:0,width:10,height:10,spritesheet:'smallicons'},'smallicon-green-arrow':{x:-120,y:-20,width:10,height:10,spritesheet:'smallicons'},'smallicon-step-in':{x:-100,y:-20,width:10,height:10,spritesheet:'smallicons'},'smallicon-step-out':{x:0,y:0,width:10,height:10,spritesheet:'smallicons'},'smallicon-thick-right-arrow':{x:-180,y:0,width:10,height:10,spritesheet:'smallicons'},'smallicon-thick-left-arrow':{x:-180,y:-20,width:10,height:10,spritesheet:'smallicons'},'smallicon-user-command':{x:0,y:-19,width:10,height:10,spritesheet:'smallicons'},'smallicon-text-prompt':{x:-20,y:-20,width:10,height:10,spritesheet:'smallicons'},'smallicon-command-result':{x:-40,y:-19,width:10,height:10,spritesheet:'smallicons'},'smallicon-shadow':{x:-60,y:-20,width:10,height:10,spritesheet:'smallicons',isMask:true},'smallicon-bezier':{x:-80,y:-20,width:10,height:10,spritesheet:'smallicons',isMask:true},'smallicon-dropdown-arrow':{x:-18,y:-96,width:12,height:12,spritesheet:'largeicons',isMask:true},'smallicon-triangle-right':{x:-4,y:-98,width:10,height:10,spritesheet:'largeicons',isMask:true},'smallicon-triangle-down':{x:-20,y:-98,width:10,height:10,spritesheet:'largeicons',isMask:true},'smallicon-triangle-up':{x:-4,y:-111,width:10,height:10,spritesheet:'largeicons',isMask:true},'smallicon-arrow-in-circle':{x:-10,y:-127,width:11,height:11,spritesheet:'largeicons',isMask:true},'smallicon-cross':{x:-177,y:-98,width:10,height:10,spritesheet:'largeicons'},'smallicon-red-cross-hover':{x:-96,y:-96,width:14,height:14,spritesheet:'largeicons'},'smallicon-red-cross-active':{x:-111,y:-96,width:14,height:14,spritesheet:'largeicons'},'smallicon-gray-cross-hover':{x:-143,y:-96,width:13,height:13,spritesheet:'largeicons'},'smallicon-gray-cross-active':{x:-160,y:-96,width:13,height:13,spritesheet:'largeicons'},'smallicon-inline-breakpoint':{x:-140,y:-20,width:10,height:10,spritesheet:'smallicons'},'smallicon-inline-breakpoint-conditional':{x:-160,y:-20,width:10,height:10,spritesheet:'smallicons'},'smallicon-file':{x:-64,y:-24,width:12,height:14,spritesheet:'largeicons'},'smallicon-file-sync':{x:-76,y:-24,width:12,height:14,spritesheet:'largeicons'},'smallicon-search':{x:-234,y:-30,width:12,height:12,spritesheet:'largeicons'},'smallicon-clear-input':{x:-143,y:-96,width:13,height:13,spritesheet:'largeicons'},'smallicon-checkmark':{x:-128,y:-109,width:10,height:10,spritesheet:'largeicons'},'largeicon-longclick-triangle':{x:-290,y:-46,width:28,height:24,spritesheet:'largeicons',isMask:true},'largeicon-menu':{x:-192,y:-24,width:28,height:24,spritesheet:'largeicons',isMask:true},'largeicon-delete':{x:-128,y:-0,width:28,height:24,spritesheet:'largeicons',isMask:true},'largeicon-node-search':{x:-320,y:-120,width:28,height:24,spritesheet:'largeicons',isMask:true},'largeicon-add':{x:-224,y:-120,width:28,height:24,spritesheet:'largeicons',isMask:true},'largeicon-clear':{x:-64,y:0,width:28,height:24,spritesheet:'largeicons',isMask:true},'largeicon-rotate-screen':{x:-192,y:-144,width:28,height:24,spritesheet:'largeicons',isMask:true},'largeicon-phone':{x:-320,y:-96,width:28,height:24,spritesheet:'largeicons',isMask:true},'largeicon-block':{x:-32,y:-144,width:28,height:24,spritesheet:'largeicons',isMask:true},'largeicon-layout-editor':{x:0,y:-144,width:28,height:24,spritesheet:'largeicons',isMask:true},'largeicon-foreground-color':{x:-128,y:-144,width:28,height:24,spritesheet:'largeicons',isMask:true},'largeicon-background-color':{x:-96,y:-144,width:28,height:24,spritesheet:'largeicons',isMask:true},'largeicon-text-shadow':{x:-192,y:-48,width:28,height:24,spritesheet:'largeicons',isMask:true},'largeicon-box-shadow':{x:-160,y:-48,width:28,height:24,spritesheet:'largeicons',isMask:true},'largeicon-pause-animation':{x:-320,y:0,width:28,height:24,spritesheet:'largeicons',isMask:true},'largeicon-replay-animation':{x:-320,y:-24,width:28,height:24,spritesheet:'largeicons',isMask:true},'largeicon-play-animation':{x:-320,y:-48,width:28,height:24,spritesheet:'largeicons',isMask:true},'largeicon-eyedropper':{x:-288,y:-120,width:28,height:24,spritesheet:'largeicons',isMask:true},'largeicon-copy':{x:-291,y:-143,width:28,height:24,spritesheet:'largeicons',isMask:true},'largeicon-checkmark':{x:-260,y:-71,width:28,height:24,spritesheet:'largeicons',isMask:true},'largeicon-rotate':{x:-160,y:-120,width:28,height:24,spritesheet:'largeicons',isMask:true},'largeicon-center':{x:-128,y:-120,width:28,height:24,spritesheet:'largeicons',isMask:true},'largeicon-pan':{x:-98,y:-120,width:28,height:24,spritesheet:'largeicons',isMask:true},'largeicon-waterfall':{x:-128,y:-48,width:28,height:24,spritesheet:'largeicons',isMask:true},'largeicon-filter':{x:-32,y:-48,width:28,height:24,spritesheet:'largeicons',isMask:true},'largeicon-trash-bin':{x:-128,y:-24,width:28,height:24,spritesheet:'largeicons',isMask:true},'largeicon-pretty-print':{x:-256,y:-24,width:28,height:24,spritesheet:'largeicons',isMask:true},'largeicon-deactivate-breakpoints':{x:0,y:-24,width:28,height:24,spritesheet:'largeicons',isMask:true},'largeicon-activate-breakpoints':{x:-32,y:0,width:28,height:24,spritesheet:'largeicons',isMask:true},'largeicon-resume':{x:0,y:-72,width:28,height:24,spritesheet:'largeicons',isMask:true},'largeicon-pause':{x:-32,y:-72,width:28,height:24,spritesheet:'largeicons',isMask:true},'largeicon-pause-on-exceptions':{x:-256,y:0,width:28,height:24,spritesheet:'largeicons',isMask:true},'largeicon-play-back':{x:-96,y:-48,width:28,height:24,spritesheet:'largeicons',isMask:true},'largeicon-play':{x:-64,y:-48,width:28,height:24,spritesheet:'largeicons',isMask:true},'largeicon-step-over':{x:-128,y:-72,width:28,height:24,spritesheet:'largeicons',isMask:true},'largeicon-step-out':{x:-96,y:-72,width:28,height:24,spritesheet:'largeicons',isMask:true},'largeicon-step-in':{x:-64,y:-72,width:28,height:24,spritesheet:'largeicons',isMask:true},'largeicon-camera':{x:-96,y:-24,width:28,height:24,spritesheet:'largeicons',isMask:true},'largeicon-stop-recording':{x:-288,y:-24,width:28,height:24,spritesheet:'largeicons',isMask:true},'largeicon-start-recording':{x:-288,y:0,width:28,height:24,spritesheet:'largeicons',isMask:true},'largeicon-large-list':{x:-224,y:0,width:28,height:24,spritesheet:'largeicons',isMask:true},'largeicon-visibility':{x:-96,y:0,width:28,height:24,spritesheet:'largeicons',isMask:true},'largeicon-refresh':{x:0,y:0,width:28,height:24,spritesheet:'largeicons',isMask:true},'largeicon-dock-to-right':{x:-256,y:-48,width:28,height:24,spritesheet:'largeicons',isMask:true},'largeicon-dock-to-left':{x:-224,y:-48,width:28,height:24,spritesheet:'largeicons',isMask:true},'largeicon-dock-to-bottom':{x:-32,y:-24,width:28,height:24,spritesheet:'largeicons',isMask:true},'largeicon-undock':{x:0,y:-48,width:28,height:24,spritesheet:'largeicons',isMask:true},'largeicon-settings-gear':{x:-288,y:-72,width:28,height:24,spritesheet:'largeicons',isMask:true},'largeicon-show-left-sidebar':{x:-160,y:-72,width:28,height:24,spritesheet:'largeicons',isMask:true},'largeicon-hide-left-sidebar':{x:-192,y:-72,width:28,height:24,spritesheet:'largeicons',isMask:true},'largeicon-show-right-sidebar':{x:-192,y:-96,width:28,height:24,spritesheet:'largeicons',isMask:true},'largeicon-hide-right-sidebar':{x:-192,y:-120,width:28,height:24,spritesheet:'largeicons',isMask:true},'largeicon-show-top-sidebar':{x:-288,y:-96,width:28,height:24,spritesheet:'largeicons',isMask:true,},'largeicon-hide-top-sidebar':{x:-256,y:-96,width:28,height:24,spritesheet:'largeicons',isMask:true,},'largeicon-show-bottom-sidebar':{x:-224,y:-144,width:28,height:24,spritesheet:'largeicons',isMask:true,},'largeicon-hide-bottom-sidebar':{x:-256,y:-120,width:28,height:24,spritesheet:'largeicons',isMask:true,},'largeicon-navigator-file':{x:-226,y:-72,width:28,height:24,spritesheet:'largeicons',isMask:true},'largeicon-navigator-file-sync':{x:-162,y:-24,width:28,height:24,spritesheet:'largeicons',isMask:true},'badge-navigator-file-sync':{x:-322,y:-72,width:28,height:24,spritesheet:'largeicons'},'largeicon-navigator-folder':{x:-66,y:-120,width:28,height:24,spritesheet:'largeicons',isMask:true},'largeicon-navigator-domain':{x:-162,y:-144,width:28,height:24,spritesheet:'largeicons',isMask:true},'largeicon-navigator-frame':{x:-258,y:-144,width:28,height:24,spritesheet:'largeicons',isMask:true},'largeicon-navigator-worker':{x:-322,y:-144,width:28,height:24,spritesheet:'largeicons',isMask:true},'largeicon-navigator-snippet':{x:-226,y:-96,width:28,height:24,spritesheet:'largeicons',isMask:true},'largeicon-edit':{x:-160,y:-0,width:28,height:24,spritesheet:'largeicons',isMask:true},'largeicon-chevron':{x:-68,y:-143,width:24,height:26,spritesheet:'largeicons',isMask:true},'mediumicon-manifest':{x:0,y:-0,width:16,height:16,spritesheet:'resourceicons',isMask:true},'mediumicon-service-worker':{x:-20,y:-0,width:16,height:16,spritesheet:'resourceicons',isMask:true},'mediumicon-clear-storage':{x:-40,y:-0,width:16,height:16,spritesheet:'resourceicons',isMask:true},'mediumicon-database':{x:-60,y:-0,width:16,height:16,spritesheet:'resourceicons',isMask:true},'mediumicon-table':{x:-80,y:-0,width:16,height:16,spritesheet:'resourceicons',isMask:true},'mediumicon-cookie':{x:-120,y:-0,width:16,height:16,spritesheet:'resourceicons',isMask:true},'mediumicon-arrow-top':{x:0,y:0,width:19,height:19,spritesheet:'arrowicons'},'mediumicon-arrow-bottom':{x:0,y:-19,width:19,height:19,spritesheet:'arrowicons'},'mediumicon-arrow-left':{x:0,y:-38,width:19,height:19,spritesheet:'arrowicons'},'mediumicon-arrow-right':{x:0,y:-57,width:19,height:19,spritesheet:'arrowicons'},};;UI.Infobar=class{constructor(type,text,disableSetting){this.element=createElementWithClass('div','flex-none');this._shadowRoot=UI.createShadowRootWithCoreStyles(this.element,'ui/infobar.css');this._contentElement=this._shadowRoot.createChild('div','infobar infobar-'+type);this._mainRow=this._contentElement.createChild('div','infobar-main-row');this._mainRow.createChild('div',type+'-icon icon');this._mainRowText=this._mainRow.createChild('div','infobar-main-title');this._mainRowText.textContent=text;this._detailsRows=this._contentElement.createChild('div','infobar-details-rows hidden');this._toggleElement=this._mainRow.createChild('div','infobar-toggle hidden');this._toggleElement.addEventListener('click',this._onToggleDetails.bind(this),false);this._toggleElement.textContent=Common.UIString('more');this._disableSetting=disableSetting||null;if(disableSetting){var disableButton=this._mainRow.createChild('div','infobar-toggle');disableButton.textContent=Common.UIString('never show');disableButton.addEventListener('click',this._onDisable.bind(this),false);}
this._closeButton=this._contentElement.createChild('div','close-button','dt-close-button');this._closeButton.addEventListener('click',this.dispose.bind(this),false);this._closeCallback=null;}
static create(type,text,disableSetting){if(disableSetting&&disableSetting.get())
return null;return new UI.Infobar(type,text,disableSetting);}
dispose(){this.element.remove();this._onResize();if(this._closeCallback)
this._closeCallback.call(null);}
setText(text){this._mainRowText.textContent=text;this._onResize();}
setCloseCallback(callback){this._closeCallback=callback;}
setParentView(parentView){this._parentView=parentView;}
_onResize(){if(this._parentView)
this._parentView.doResize();}
_onDisable(){this._disableSetting.set(true);this.dispose();}
_onToggleDetails(){this._detailsRows.classList.remove('hidden');this._toggleElement.remove();this._onResize();}
createDetailsRowMessage(message){this._toggleElement.classList.remove('hidden');var infobarDetailsRow=this._detailsRows.createChild('div','infobar-details-row');var detailsRowMessage=infobarDetailsRow.createChild('span','infobar-row-message');detailsRowMessage.textContent=message||'';return detailsRowMessage;}};UI.Infobar.Type={Warning:'warning',Info:'info'};;UI.InplaceEditor=class{static startEditing(element,config){if(!UI.InplaceEditor._defaultInstance)
UI.InplaceEditor._defaultInstance=new UI.InplaceEditor();return UI.InplaceEditor._defaultInstance.startEditing(element,config);}
editorContent(editingContext){var element=editingContext.element;if(element.tagName==='INPUT'&&element.type==='text')
return element.value;return element.textContent;}
setUpEditor(editingContext){var element=editingContext.element;element.classList.add('editing');var oldTabIndex=element.getAttribute('tabIndex');if(typeof oldTabIndex!=='number'||oldTabIndex<0)
element.tabIndex=0;this._focusRestorer=new UI.ElementFocusRestorer(element);editingContext.oldTabIndex=oldTabIndex;}
closeEditor(editingContext){var element=editingContext.element;element.classList.remove('editing');if(typeof editingContext.oldTabIndex!=='number')
element.removeAttribute('tabIndex');else
element.tabIndex=editingContext.oldTabIndex;element.scrollTop=0;element.scrollLeft=0;}
cancelEditing(editingContext){var element=editingContext.element;if(element.tagName==='INPUT'&&element.type==='text')
element.value=editingContext.oldText;else
element.textContent=editingContext.oldText;}
augmentEditingHandle(editingContext,handle){}
startEditing(element,config){if(!UI.markBeingEdited(element,true))
return null;config=config||new UI.InplaceEditor.Config(function(){},function(){});var editingContext={element:element,config:config};var committedCallback=config.commitHandler;var cancelledCallback=config.cancelHandler;var pasteCallback=config.pasteHandler;var context=config.context;var moveDirection='';var self=this;this.setUpEditor(editingContext);editingContext.oldText=this.editorContent(editingContext);function blurEventListener(e){if(config.blurHandler&&!config.blurHandler(element,e))
return;editingCommitted.call(element);}
function cleanUpAfterEditing(){UI.markBeingEdited(element,false);element.removeEventListener('blur',blurEventListener,false);element.removeEventListener('keydown',keyDownEventListener,true);if(pasteCallback)
element.removeEventListener('paste',pasteEventListener,true);if(self._focusRestorer)
self._focusRestorer.restore();self.closeEditor(editingContext);}
function editingCancelled(){self.cancelEditing(editingContext);cleanUpAfterEditing();cancelledCallback(this,context);}
function editingCommitted(){cleanUpAfterEditing();committedCallback(this,self.editorContent(editingContext),editingContext.oldText,context,moveDirection);}
function defaultFinishHandler(event){if(isEnterKey(event))
return'commit';else if(event.keyCode===UI.KeyboardShortcut.Keys.Esc.code||event.key==='Escape')
return'cancel';else if(event.key==='Tab')
return'move-'+(event.shiftKey?'backward':'forward');return'';}
function handleEditingResult(result,event){if(result==='commit'){editingCommitted.call(element);event.consume(true);}else if(result==='cancel'){editingCancelled.call(element);event.consume(true);}else if(result&&result.startsWith('move-')){moveDirection=result.substring(5);if(event.key==='Tab')
event.consume(true);blurEventListener();}}
function pasteEventListener(event){var result=pasteCallback(event);handleEditingResult(result,event);}
function keyDownEventListener(event){var result=defaultFinishHandler(event);if(!result&&config.postKeydownFinishHandler)
result=config.postKeydownFinishHandler(event);handleEditingResult(result,event);}
element.addEventListener('blur',blurEventListener,false);element.addEventListener('keydown',keyDownEventListener,true);if(pasteCallback)
element.addEventListener('paste',pasteEventListener,true);var handle={cancel:editingCancelled.bind(element),commit:editingCommitted.bind(element)};this.augmentEditingHandle(editingContext,handle);return handle;}};UI.InplaceEditor.Controller;UI.InplaceEditor.Config=class{constructor(commitHandler,cancelHandler,context,blurHandler){this.commitHandler=commitHandler;this.cancelHandler=cancelHandler;this.context=context;this.blurHandler=blurHandler;this.pasteHandler;this.postKeydownFinishHandler;}
setPasteHandler(pasteHandler){this.pasteHandler=pasteHandler;}
setPostKeydownFinishHandler(postKeydownFinishHandler){this.postKeydownFinishHandler=postKeydownFinishHandler;}};;UI.TextEditorFactory=function(){};UI.TextEditorFactory.prototype={createEditor(options){}};UI.TextEditor=function(){};UI.TextEditor.prototype={widget(){},fullRange(){},selection(){},setSelection(selection){},text(textRange){},setText(text){},line(lineNumber){},newlineAndIndent(){},addKeyDownHandler(handler){},configureAutocomplete(config){},clearAutocomplete(){}};UI.TextEditor.Options;UI.AutocompleteConfig;;UI.KeyboardShortcut=class{static makeKey(keyCode,modifiers){if(typeof keyCode==='string')
keyCode=keyCode.charCodeAt(0)-(/^[a-z]/.test(keyCode)?32:0);modifiers=modifiers||UI.KeyboardShortcut.Modifiers.None;return UI.KeyboardShortcut._makeKeyFromCodeAndModifiers(keyCode,modifiers);}
static makeKeyFromEvent(keyboardEvent){var modifiers=UI.KeyboardShortcut.Modifiers.None;if(keyboardEvent.shiftKey)
modifiers|=UI.KeyboardShortcut.Modifiers.Shift;if(keyboardEvent.ctrlKey)
modifiers|=UI.KeyboardShortcut.Modifiers.Ctrl;if(keyboardEvent.altKey)
modifiers|=UI.KeyboardShortcut.Modifiers.Alt;if(keyboardEvent.metaKey)
modifiers|=UI.KeyboardShortcut.Modifiers.Meta;var keyCode=keyboardEvent.keyCode||keyboardEvent['__keyCode'];return UI.KeyboardShortcut._makeKeyFromCodeAndModifiers(keyCode,modifiers);}
static makeKeyFromEventIgnoringModifiers(keyboardEvent){var keyCode=keyboardEvent.keyCode||keyboardEvent['__keyCode'];return UI.KeyboardShortcut._makeKeyFromCodeAndModifiers(keyCode,UI.KeyboardShortcut.Modifiers.None);}
static eventHasCtrlOrMeta(event){return Host.isMac()?event.metaKey&&!event.ctrlKey:event.ctrlKey&&!event.metaKey;}
static hasNoModifiers(event){return!event.ctrlKey&&!event.shiftKey&&!event.altKey&&!event.metaKey;}
static makeDescriptor(key,modifiers){return{key:UI.KeyboardShortcut.makeKey(typeof key==='string'?key:key.code,modifiers),name:UI.KeyboardShortcut.shortcutToString(key,modifiers)};}
static makeDescriptorFromBindingShortcut(shortcut){var parts=shortcut.split(/\+(?!$)/);var modifiers=0;var keyString;for(var i=0;i<parts.length;++i){if(typeof UI.KeyboardShortcut.Modifiers[parts[i]]!=='undefined'){modifiers|=UI.KeyboardShortcut.Modifiers[parts[i]];continue;}
console.assert(i===parts.length-1,'Only one key other than modifier is allowed in shortcut <'+shortcut+'>');keyString=parts[i];break;}
console.assert(keyString,'Modifiers-only shortcuts are not allowed (encountered <'+shortcut+'>)');if(!keyString)
return null;var key=UI.KeyboardShortcut.Keys[keyString]||UI.KeyboardShortcut.KeyBindings[keyString];if(key&&key.shiftKey)
modifiers|=UI.KeyboardShortcut.Modifiers.Shift;return UI.KeyboardShortcut.makeDescriptor(key?key:keyString,modifiers);}
static shortcutToString(key,modifiers){return UI.KeyboardShortcut._modifiersToString(modifiers)+UI.KeyboardShortcut._keyName(key);}
static _keyName(key){if(typeof key==='string')
return key.toUpperCase();if(typeof key.name==='string')
return key.name;return key.name[Host.platform()]||key.name.other||'';}
static _makeKeyFromCodeAndModifiers(keyCode,modifiers){return(keyCode&255)|(modifiers<<8);}
static keyCodeAndModifiersFromKey(key){return{keyCode:key&255,modifiers:key>>8};}
static _modifiersToString(modifiers){var isMac=Host.isMac();var m=UI.KeyboardShortcut.Modifiers;var modifierNames=new Map([[m.Ctrl,isMac?'Ctrl\u2004':'Ctrl\u200A+\u200A'],[m.Alt,isMac?'\u2325\u2004':'Alt\u200A+\u200A'],[m.Shift,isMac?'\u21e7\u2004':'Shift\u200A+\u200A'],[m.Meta,isMac?'\u2318\u2004':'Win\u200A+\u200A']]);return[m.Meta,m.Ctrl,m.Alt,m.Shift].map(mapModifiers).join('');function mapModifiers(m){return modifiers&m?(modifierNames.get(m)):'';}}};UI.KeyboardShortcut.Modifiers={None:0,Shift:1,Ctrl:2,Alt:4,Meta:8,get CtrlOrMeta(){return Host.isMac()?this.Meta:this.Ctrl;},get ShiftOrOption(){return Host.isMac()?this.Alt:this.Shift;}};UI.KeyboardShortcut.Key;UI.KeyboardShortcut.Keys={Backspace:{code:8,name:'\u21a4'},Tab:{code:9,name:{mac:'\u21e5',other:'Tab'}},Enter:{code:13,name:{mac:'\u21a9',other:'Enter'}},Shift:{code:16,name:{mac:'\u21e7',other:'Shift'}},Ctrl:{code:17,name:'Ctrl'},Esc:{code:27,name:'Esc'},Space:{code:32,name:'Space'},PageUp:{code:33,name:{mac:'\u21de',other:'PageUp'}},PageDown:{code:34,name:{mac:'\u21df',other:'PageDown'}},End:{code:35,name:{mac:'\u2197',other:'End'}},Home:{code:36,name:{mac:'\u2196',other:'Home'}},Left:{code:37,name:'\u2190'},Up:{code:38,name:'\u2191'},Right:{code:39,name:'\u2192'},Down:{code:40,name:'\u2193'},Delete:{code:46,name:'Del'},Zero:{code:48,name:'0'},H:{code:72,name:'H'},N:{code:78,name:'N'},P:{code:80,name:'P'},Meta:{code:91,name:'Meta'},F1:{code:112,name:'F1'},F2:{code:113,name:'F2'},F3:{code:114,name:'F3'},F4:{code:115,name:'F4'},F5:{code:116,name:'F5'},F6:{code:117,name:'F6'},F7:{code:118,name:'F7'},F8:{code:119,name:'F8'},F9:{code:120,name:'F9'},F10:{code:121,name:'F10'},F11:{code:122,name:'F11'},F12:{code:123,name:'F12'},Semicolon:{code:186,name:';'},NumpadPlus:{code:107,name:'Numpad +'},NumpadMinus:{code:109,name:'Numpad -'},Numpad0:{code:96,name:'Numpad 0'},Plus:{code:187,name:'+'},Comma:{code:188,name:','},Minus:{code:189,name:'-'},Period:{code:190,name:'.'},Slash:{code:191,name:'/'},QuestionMark:{code:191,name:'?'},Apostrophe:{code:192,name:'`'},Tilde:{code:192,name:'Tilde'},LeftSquareBracket:{code:219,name:'['},RightSquareBracket:{code:221,name:']'},Backslash:{code:220,name:'\\'},SingleQuote:{code:222,name:'\''},get CtrlOrMeta(){return Host.isMac()?this.Meta:this.Ctrl;},};UI.KeyboardShortcut.KeyBindings={};(function(){for(var key in UI.KeyboardShortcut.Keys){var descriptor=UI.KeyboardShortcut.Keys[key];if(typeof descriptor==='object'&&descriptor['code']){var name=typeof descriptor['name']==='string'?descriptor['name']:key;UI.KeyboardShortcut.KeyBindings[name]=descriptor;}}})();UI.KeyboardShortcut.Descriptor;UI.KeyboardShortcut.SelectAll=UI.KeyboardShortcut.makeKey('a',UI.KeyboardShortcut.Modifiers.CtrlOrMeta);;UI.ListDelegate=function(){};UI.ListDelegate.prototype={createElementForItem(item){},heightForItem(item){},isItemSelectable(item){},selectedItemChanged(from,to,fromElement,toElement){},};UI.ListMode={NonViewport:Symbol('UI.ListMode.NonViewport'),EqualHeightItems:Symbol('UI.ListMode.EqualHeightItems'),VariousHeightItems:Symbol('UI.ListMode.VariousHeightItems')};UI.ListControl=class{constructor(delegate,mode){this.element=createElement('div');this.element.style.overflowY='auto';this._topElement=this.element.createChild('div');this._bottomElement=this.element.createChild('div');this._firstIndex=0;this._lastIndex=0;this._renderedHeight=0;this._topHeight=0;this._bottomHeight=0;this._items=[];this._itemToElement=new Map();this._selectedIndex=-1;this.element.addEventListener('click',this._onClick.bind(this),false);this.element.addEventListener('keydown',this._onKeyDown.bind(this),false);this._delegate=delegate;this._mode=mode||UI.ListMode.EqualHeightItems;this._fixedHeight=0;this._variableOffsets=new Int32Array(0);this._clearContents();if(this._mode!==UI.ListMode.NonViewport){this.element.addEventListener('scroll',()=>{this._updateViewport(this.element.scrollTop,this.element.offsetHeight);},false);}}
length(){return this._items.length;}
itemAtIndex(index){return this._items[index];}
pushItem(item){this.replaceItemsInRange(this._items.length,this._items.length,[item]);}
popItem(){return this.removeItemAtIndex(this._items.length-1);}
insertItemAtIndex(index,item){this.replaceItemsInRange(index,index,[item]);}
removeItemAtIndex(index){var result=this._items[index];this.replaceItemsInRange(index,index+1,[]);return result;}
removeItem(item){var index=this._items.indexOf(item);if(index===-1)
throw'Attempt to remove non-existing item';this.removeItemAtIndex(index);}
replaceItemsInRange(from,to,items){var oldSelectedItem=this._selectedIndex!==-1?this._items[this._selectedIndex]:null;var oldSelectedElement=oldSelectedItem?(this._itemToElement.get(oldSelectedItem)||null):null;for(var i=from;i<to;i++)
this._itemToElement.delete(this._items[i]);if(items.length<10000){this._items.splice.bind(this._items,from,to-from).apply(null,items);}else{var before=this._items.slice(0,from);var after=this._items.slice(to);this._items=[].concat(before,items,after);}
this._invalidate(from,to,items.length);if(this._selectedIndex>=to){this._selectedIndex+=items.length-(to-from);}else if(this._selectedIndex>=from){var index=this._findFirstSelectable(from+items.length,+1,false);if(index===-1)
index=this._findFirstSelectable(from-1,-1,false);this._select(index,oldSelectedItem,oldSelectedElement);}}
replaceAllItems(items){this.replaceItemsInRange(0,this._items.length,items);}
invalidateRange(from,to){this._invalidate(from,to,to-from);}
viewportResized(){if(this._mode===UI.ListMode.NonViewport)
return;var scrollTop=this.element.scrollTop;var viewportHeight=this.element.offsetHeight;this._clearViewport();this._updateViewport(Number.constrain(scrollTop,0,this._totalHeight()-viewportHeight),viewportHeight);}
invalidateItemHeight(){if(this._mode!==UI.ListMode.EqualHeightItems)
throw'Only supported in equal height items mode';this._fixedHeight=0;if(this._items.length){this._itemToElement.clear();this._invalidate(0,this._items.length,this._items.length);}}
itemForNode(node){while(node&&node.parentNodeOrShadowHost()!==this.element)
node=node.parentNodeOrShadowHost();if(!node)
return null;var element=(node);var index=this._items.findIndex(item=>this._itemToElement.get(item)===element);return index!==-1?this._items[index]:null;}
scrollItemIntoView(item,center){var index=this._items.indexOf(item);if(index===-1)
throw'Attempt to scroll onto missing item';this._scrollIntoView(index,center);}
selectedItem(){return this._selectedIndex===-1?null:this._items[this._selectedIndex];}
selectItem(item,center){var index=-1;if(item!==null){index=this._items.indexOf(item);if(index===-1)
throw'Attempt to select missing item';if(!this._delegate.isItemSelectable(item))
throw'Attempt to select non-selectable item';}
if(this._selectedIndex!==index)
this._select(index);if(index!==-1)
this._scrollIntoView(index,center);}
selectPreviousItem(canWrap,center){if(this._selectedIndex===-1&&!canWrap)
return false;var index=this._selectedIndex===-1?this._items.length-1:this._selectedIndex-1;index=this._findFirstSelectable(index,-1,!!canWrap);if(index!==-1){this._scrollIntoView(index,center);this._select(index);return true;}
return false;}
selectNextItem(canWrap,center){if(this._selectedIndex===-1&&!canWrap)
return false;var index=this._selectedIndex===-1?0:this._selectedIndex+1;index=this._findFirstSelectable(index,+1,!!canWrap);if(index!==-1){this._scrollIntoView(index,center);this._select(index);return true;}
return false;}
selectItemPreviousPage(center){if(this._mode===UI.ListMode.NonViewport)
return false;var index=this._selectedIndex===-1?this._items.length-1:this._selectedIndex;index=this._findPageSelectable(index,-1);if(index!==-1){this._scrollIntoView(index,center);this._select(index);return true;}
return false;}
selectItemNextPage(center){if(this._mode===UI.ListMode.NonViewport)
return false;var index=this._selectedIndex===-1?0:this._selectedIndex;index=this._findPageSelectable(index,+1);if(index!==-1){this._scrollIntoView(index,center);this._select(index);return true;}
return false;}
_scrollIntoView(index,center){if(this._mode===UI.ListMode.NonViewport){this._elementAtIndex(index).scrollIntoViewIfNeeded(!!center);return;}
var top=this._offsetAtIndex(index);var bottom=this._offsetAtIndex(index+1);var viewportHeight=this.element.offsetHeight;if(center){var scrollTo=(top+bottom)/2-viewportHeight/2;this._updateViewport(Number.constrain(scrollTo,0,this._totalHeight()-viewportHeight),viewportHeight);return;}
var scrollTop=this.element.scrollTop;if(top<scrollTop)
this._updateViewport(top,viewportHeight);else if(bottom>scrollTop+viewportHeight)
this._updateViewport(bottom-viewportHeight,viewportHeight);}
_onClick(event){var item=this.itemForNode((event.target));if(item&&this._delegate.isItemSelectable(item))
this.selectItem(item);}
_onKeyDown(event){var selected=false;switch(event.key){case'ArrowUp':selected=this.selectPreviousItem(true,false);break;case'ArrowDown':selected=this.selectNextItem(true,false);break;case'PageUp':selected=this.selectItemPreviousPage(false);break;case'PageDown':selected=this.selectItemNextPage(false);break;}
if(selected)
event.consume();}
_totalHeight(){return this._offsetAtIndex(this._items.length);}
_indexAtOffset(offset){if(this._mode===UI.ListMode.NonViewport)
throw'There should be no offset conversions in non-viewport mode';if(!this._items.length||offset<0)
return 0;if(this._mode===UI.ListMode.VariousHeightItems){return Math.min(this._items.length-1,this._variableOffsets.lowerBound(offset,undefined,0,this._items.length));}
if(!this._fixedHeight)
this._measureHeight();return Math.min(this._items.length-1,Math.floor(offset/this._fixedHeight));}
_elementAtIndex(index){var item=this._items[index];var element=this._itemToElement.get(item);if(!element){element=this._delegate.createElementForItem(item);this._itemToElement.set(item,element);}
return element;}
_offsetAtIndex(index){if(this._mode===UI.ListMode.NonViewport)
throw'There should be no offset conversions in non-viewport mode';if(!this._items.length)
return 0;if(this._mode===UI.ListMode.VariousHeightItems)
return this._variableOffsets[index];if(!this._fixedHeight)
this._measureHeight();return index*this._fixedHeight;}
_measureHeight(){this._fixedHeight=this._delegate.heightForItem(this._items[0]);if(!this._fixedHeight)
this._fixedHeight=UI.measurePreferredSize(this._elementAtIndex(0),this.element).height;}
_select(index,oldItem,oldElement){if(oldItem===undefined)
oldItem=this._selectedIndex!==-1?this._items[this._selectedIndex]:null;if(oldElement===undefined)
oldElement=this._itemToElement.get(oldItem)||null;this._selectedIndex=index;var newItem=this._selectedIndex!==-1?this._items[this._selectedIndex]:null;var newElement=this._selectedIndex!==-1?this._elementAtIndex(index):null;this._delegate.selectedItemChanged(oldItem,newItem,(oldElement),newElement);}
_findFirstSelectable(index,direction,canWrap){var length=this._items.length;if(!length)
return-1;for(var step=0;step<=length;step++){if(index<0||index>=length){if(!canWrap)
return-1;index=(index+length)%length;}
if(this._delegate.isItemSelectable(this._items[index]))
return index;index+=direction;}
return-1;}
_findPageSelectable(index,direction){var lastSelectable=-1;var startOffset=this._offsetAtIndex(index);var viewportHeight=this.element.offsetHeight-1;while(index>=0&&index<this._items.length){if(this._delegate.isItemSelectable(this._items[index])){if(Math.abs(this._offsetAtIndex(index)-startOffset)>=viewportHeight)
return index;lastSelectable=index;}
index+=direction;}
return lastSelectable;}
_reallocateVariableOffsets(length,copyTo){if(this._variableOffsets.length<length){var variableOffsets=new Int32Array(Math.max(length,this._variableOffsets.length*2));variableOffsets.set(this._variableOffsets.slice(0,copyTo),0);this._variableOffsets=variableOffsets;}else if(this._variableOffsets.length>=2*length){var variableOffsets=new Int32Array(length);variableOffsets.set(this._variableOffsets.slice(0,copyTo),0);this._variableOffsets=variableOffsets;}}
_invalidate(from,to,inserted){if(this._mode===UI.ListMode.NonViewport){this._invalidateNonViewportMode(from,to-from,inserted);return;}
if(this._mode===UI.ListMode.VariousHeightItems){this._reallocateVariableOffsets(this._items.length+1,from+1);for(var i=from+1;i<=this._items.length;i++)
this._variableOffsets[i]=this._variableOffsets[i-1]+this._delegate.heightForItem(this._items[i-1]);}
var viewportHeight=this.element.offsetHeight;var totalHeight=this._totalHeight();var scrollTop=this.element.scrollTop;if(this._renderedHeight<viewportHeight||totalHeight<viewportHeight){this._clearViewport();this._updateViewport(Number.constrain(scrollTop,0,totalHeight-viewportHeight),viewportHeight);return;}
var heightDelta=totalHeight-this._renderedHeight;if(to<=this._firstIndex){var topHeight=this._topHeight+heightDelta;this._topElement.style.height=topHeight+'px';this.element.scrollTop=scrollTop+heightDelta;this._topHeight=topHeight;this._renderedHeight=totalHeight;var indexDelta=inserted-(to-from);this._firstIndex+=indexDelta;this._lastIndex+=indexDelta;return;}
if(from>=this._lastIndex){var bottomHeight=this._bottomHeight+heightDelta;this._bottomElement.style.height=bottomHeight+'px';this._bottomHeight=bottomHeight;this._renderedHeight=totalHeight;return;}
this._clearViewport();this._updateViewport(Number.constrain(scrollTop,0,totalHeight-viewportHeight),viewportHeight);}
_invalidateNonViewportMode(start,remove,add){var startElement=this._topElement;for(var index=0;index<start;index++)
startElement=startElement.nextElementSibling;while(remove--)
startElement.nextElementSibling.remove();while(add--)
this.element.insertBefore(this._elementAtIndex(start+add),startElement.nextElementSibling);}
_clearViewport(){if(this._mode===UI.ListMode.NonViewport)
throw'There should be no viewport updates in non-viewport mode';this._firstIndex=0;this._lastIndex=0;this._renderedHeight=0;this._topHeight=0;this._bottomHeight=0;this._clearContents();}
_clearContents(){this._topElement.style.height='0';this._bottomElement.style.height='0';this.element.removeChildren();this.element.appendChild(this._topElement);this.element.appendChild(this._bottomElement);}
_updateViewport(scrollTop,viewportHeight){if(this._mode===UI.ListMode.NonViewport)
throw'There should be no viewport updates in non-viewport mode';var totalHeight=this._totalHeight();if(!totalHeight){this._firstIndex=0;this._lastIndex=0;this._topHeight=0;this._bottomHeight=0;this._renderedHeight=0;this._topElement.style.height='0';this._bottomElement.style.height='0';return;}
var firstIndex=this._indexAtOffset(scrollTop-viewportHeight);var lastIndex=this._indexAtOffset(scrollTop+2*viewportHeight)+1;while(this._firstIndex<Math.min(firstIndex,this._lastIndex)){this._elementAtIndex(this._firstIndex).remove();this._firstIndex++;}
while(this._lastIndex>Math.max(lastIndex,this._firstIndex)){this._elementAtIndex(this._lastIndex-1).remove();this._lastIndex--;}
this._firstIndex=Math.min(this._firstIndex,lastIndex);this._lastIndex=Math.max(this._lastIndex,firstIndex);for(var index=this._firstIndex-1;index>=firstIndex;index--){var element=this._elementAtIndex(index);this.element.insertBefore(element,this._topElement.nextSibling);}
for(var index=this._lastIndex;index<lastIndex;index++){var element=this._elementAtIndex(index);this.element.insertBefore(element,this._bottomElement);}
this._firstIndex=firstIndex;this._lastIndex=lastIndex;this._topHeight=this._offsetAtIndex(firstIndex);this._topElement.style.height=this._topHeight+'px';this._bottomHeight=totalHeight-this._offsetAtIndex(lastIndex);this._bottomElement.style.height=this._bottomHeight+'px';this._renderedHeight=totalHeight;this.element.scrollTop=scrollTop;}};;UI.ListWidget=class extends UI.VBox{constructor(delegate){super(true);this.registerRequiredCSS('ui/listWidget.css');this._delegate=delegate;this._list=this.contentElement.createChild('div','list');this._editor=null;this._editItem=null;this._editElement=null;this._emptyPlaceholder=null;this.clear();}
clear(){this._items=[];this._editable=[];this._elements=[];this._lastSeparator=false;this._list.removeChildren();this._updatePlaceholder();this._stopEditing();}
appendItem(item,editable){if(this._lastSeparator&&this._items.length)
this._list.appendChild(createElementWithClass('div','list-separator'));this._lastSeparator=false;this._items.push(item);this._editable.push(editable);var element=this._list.createChild('div','list-item');element.appendChild(this._delegate.renderItem(item,editable));if(editable){element.classList.add('editable');element.appendChild(this._createControls(item,element));}
this._elements.push(element);this._updatePlaceholder();}
appendSeparator(){this._lastSeparator=true;}
removeItem(index){if(this._editItem===this._items[index])
this._stopEditing();var element=this._elements[index];var previous=element.previousElementSibling;var previousIsSeparator=previous&&previous.classList.contains('list-separator');var next=element.nextElementSibling;var nextIsSeparator=next&&next.classList.contains('list-separator');if(previousIsSeparator&&(nextIsSeparator||!next))
previous.remove();if(nextIsSeparator&&!previous)
next.remove();element.remove();this._elements.splice(index,1);this._items.splice(index,1);this._editable.splice(index,1);this._updatePlaceholder();}
addNewItem(index,item){this._startEditing(item,null,this._elements[index]||null);}
setEmptyPlaceholder(element){this._emptyPlaceholder=element;this._updatePlaceholder();}
_createControls(item,element){var controls=createElementWithClass('div','controls-container fill');controls.createChild('div','controls-gradient');var buttons=controls.createChild('div','controls-buttons');var toolbar=new UI.Toolbar('',buttons);var editButton=new UI.ToolbarButton(Common.UIString('Edit'),'largeicon-edit');editButton.addEventListener(UI.ToolbarButton.Events.Click,onEditClicked.bind(this));toolbar.appendToolbarItem(editButton);var removeButton=new UI.ToolbarButton(Common.UIString('Remove'),'largeicon-trash-bin');removeButton.addEventListener(UI.ToolbarButton.Events.Click,onRemoveClicked.bind(this));toolbar.appendToolbarItem(removeButton);return controls;function onEditClicked(){var index=this._elements.indexOf(element);var insertionPoint=this._elements[index+1]||null;this._startEditing(item,element,insertionPoint);}
function onRemoveClicked(){var index=this._elements.indexOf(element);this._delegate.removeItemRequested(this._items[index],index);}}
wasShown(){super.wasShown();this._stopEditing();}
_updatePlaceholder(){if(!this._emptyPlaceholder)
return;if(!this._elements.length&&!this._editor)
this._list.appendChild(this._emptyPlaceholder);else
this._emptyPlaceholder.remove();}
_startEditing(item,element,insertionPoint){if(element&&this._editElement===element)
return;this._stopEditing();this._list.classList.add('list-editing');this._editItem=item;this._editElement=element;if(element)
element.classList.add('hidden');var index=element?this._elements.indexOf(element):-1;this._editor=this._delegate.beginEdit(item);this._updatePlaceholder();this._list.insertBefore(this._editor.element,insertionPoint);this._editor.beginEdit(item,index,element?Common.UIString('Save'):Common.UIString('Add'),this._commitEditing.bind(this),this._stopEditing.bind(this));}
_commitEditing(){var editItem=this._editItem;var isNew=!this._editElement;var editor=(this._editor);this._stopEditing();this._delegate.commitEdit(editItem,editor,isNew);}
_stopEditing(){this._list.classList.remove('list-editing');if(this._editElement)
this._editElement.classList.remove('hidden');if(this._editor&&this._editor.element.parentElement)
this._editor.element.remove();this._editor=null;this._editItem=null;this._editElement=null;this._updatePlaceholder();}};UI.ListWidget.Delegate=function(){};UI.ListWidget.Delegate.prototype={renderItem(item,editable){},removeItemRequested(item,index){},beginEdit(item){},commitEdit(item,editor,isNew){}};UI.ListWidget.Editor=class{constructor(){this.element=createElementWithClass('div','editor-container');this.element.addEventListener('keydown',onKeyDown.bind(null,isEscKey,this._cancelClicked.bind(this)),false);this.element.addEventListener('keydown',onKeyDown.bind(null,isEnterKey,this._commitClicked.bind(this)),false);this._contentElement=this.element.createChild('div','editor-content');var buttonsRow=this.element.createChild('div','editor-buttons');this._commitButton=UI.createTextButton('',this._commitClicked.bind(this));buttonsRow.appendChild(this._commitButton);this._cancelButton=UI.createTextButton(Common.UIString('Cancel'),this._cancelClicked.bind(this));this._cancelButton.addEventListener('keydown',onKeyDown.bind(null,isEnterKey,this._cancelClicked.bind(this)),false);buttonsRow.appendChild(this._cancelButton);function onKeyDown(predicate,callback,event){if(predicate(event)){event.consume(true);callback();}}
this._controls=[];this._controlByName=new Map();this._validators=[];this._commit=null;this._cancel=null;this._item=null;this._index=-1;}
contentElement(){return this._contentElement;}
createInput(name,type,title,validator){var input=(createElement('input'));input.type=type;input.placeholder=title;input.addEventListener('input',this._validateControls.bind(this,false),false);input.addEventListener('blur',this._validateControls.bind(this,false),false);this._controlByName.set(name,input);this._controls.push(input);this._validators.push(validator);return input;}
createSelect(name,options,validator){var select=(createElementWithClass('select','chrome-select'));for(var index=0;index<options.length;++index){var option=select.createChild('option');option.value=options[index];option.textContent=options[index];}
select.addEventListener('input',this._validateControls.bind(this,false),false);select.addEventListener('blur',this._validateControls.bind(this,false),false);this._controlByName.set(name,select);this._controls.push(select);this._validators.push(validator);return select;}
control(name){return(this._controlByName.get(name));}
_validateControls(forceValid){var allValid=true;for(var index=0;index<this._controls.length;++index){var input=this._controls[index];var valid=this._validators[index].call(null,this._item,this._index,input);input.classList.toggle('error-input',!valid&&!forceValid);allValid&=valid;}
this._commitButton.disabled=!allValid;}
beginEdit(item,index,commitButtonTitle,commit,cancel){this._commit=commit;this._cancel=cancel;this._item=item;this._index=index;this._commitButton.textContent=commitButtonTitle;this.element.scrollIntoViewIfNeeded(false);if(this._controls.length)
this._controls[0].focus();this._validateControls(true);}
_commitClicked(){if(this._commitButton.disabled)
return;var commit=this._commit;this._commit=null;this._cancel=null;this._item=null;this._index=-1;commit();}
_cancelClicked(){var cancel=this._cancel;this._commit=null;this._cancel=null;this._item=null;this._index=-1;cancel();}};;UI.panels=[];UI.Panel=class extends UI.VBox{constructor(name){super();this.element.classList.add('panel');this.element.setAttribute('aria-label',name);this.element.classList.add(name);this._panelName=name;UI.panels[name]=this;this._shortcuts=({});}
get name(){return this._panelName;}
searchableView(){return null;}
elementsToRestoreScrollPositionsFor(){return[];}
handleShortcut(event){var shortcutKey=UI.KeyboardShortcut.makeKeyFromEvent(event);var handler=this._shortcuts[shortcutKey];if(handler&&handler(event))
event.handled=true;}
registerShortcuts(keys,handler){for(var i=0;i<keys.length;++i)
this._shortcuts[keys[i].key]=handler;}
showInfobar(infobar){infobar.setCloseCallback(this._onInfobarClosed.bind(this,infobar));if(this.element.firstChild)
this.element.insertBefore(infobar.element,this.element.firstChild);else
this.element.appendChild(infobar.element);infobar.setParentView(this);this.doResize();}
_onInfobarClosed(infobar){infobar.element.remove();this.doResize();}};UI.Panel.counterRightMargin=25;UI.PanelWithSidebar=class extends UI.Panel{constructor(name,defaultWidth){super(name);this._panelSplitWidget=new UI.SplitWidget(true,false,this._panelName+'PanelSplitViewState',defaultWidth||200);this._panelSplitWidget.show(this.element);this._mainWidget=new UI.VBox();this._panelSplitWidget.setMainWidget(this._mainWidget);this._sidebarWidget=new UI.VBox();this._sidebarWidget.setMinimumSize(100,25);this._panelSplitWidget.setSidebarWidget(this._sidebarWidget);this._sidebarWidget.element.classList.add('panel-sidebar');}
panelSidebarElement(){return this._sidebarWidget.element;}
mainElement(){return this._mainWidget.element;}
splitWidget(){return this._panelSplitWidget;}};;UI.PopoverHelper=class{constructor(panelElement,disableOnClick){this._disableOnClick=!!disableOnClick;this._hasPadding=false;panelElement.addEventListener('mousedown',this._mouseDown.bind(this),false);panelElement.addEventListener('mousemove',this._mouseMove.bind(this),false);panelElement.addEventListener('mouseout',this._mouseOut.bind(this),false);this.setTimeout(1000,500);}
initializeCallbacks(getAnchor,showPopover,onHide){this._getAnchor=getAnchor;this._showPopover=showPopover;this._onHide=onHide;}
setTimeout(timeout,hideTimeout){this._timeout=timeout;if(typeof hideTimeout==='number')
this._hideTimeout=hideTimeout;else
this._hideTimeout=timeout/2;}
setHasPadding(hasPadding){this._hasPadding=hasPadding;}
_eventInHoverElement(event){if(!this._hoverElement)
return false;var box=this._hoverElement instanceof AnchorBox?this._hoverElement:this._hoverElement.boxInWindow();return(box.x<=event.clientX&&event.clientX<=box.x+box.width&&box.y<=event.clientY&&event.clientY<=box.y+box.height);}
_mouseDown(event){if(this._disableOnClick||!this._eventInHoverElement(event)){this.hidePopover();}else{this._killHidePopoverTimer();this._handleMouseAction(event,true);}}
_mouseMove(event){if(this._eventInHoverElement(event))
return;this._startHidePopoverTimer();this._handleMouseAction(event,false);}
_popoverMouseOut(event){if(!this.isPopoverVisible())
return;if(event.relatedTarget&&!event.relatedTarget.isSelfOrDescendant(this._popover.contentElement))
this._startHidePopoverTimer();}
_mouseOut(event){if(!this.isPopoverVisible())
return;if(!this._eventInHoverElement(event))
this._startHidePopoverTimer();}
_startHidePopoverTimer(){if(!this._popover||this._hidePopoverTimer)
return;function doHide(){this._hidePopover();delete this._hidePopoverTimer;}
this._hidePopoverTimer=setTimeout(doHide.bind(this),this._hideTimeout);}
_handleMouseAction(event,isMouseDown){this._resetHoverTimer();if(event.which&&this._disableOnClick)
return;this._hoverElement=this._getAnchor(event.target,event);if(!this._hoverElement)
return;const toolTipDelay=isMouseDown?0:(this._popup?this._timeout*0.6:this._timeout);this._hoverTimer=setTimeout(this._mouseHover.bind(this,this._hoverElement,event.target.ownerDocument),toolTipDelay);}
_resetHoverTimer(){if(this._hoverTimer){clearTimeout(this._hoverTimer);delete this._hoverTimer;}}
isPopoverVisible(){return!!this._popover;}
hidePopover(){this._resetHoverTimer();this._hidePopover();}
_hidePopover(){if(!this._popover)
return;delete UI.PopoverHelper._popover;if(this._onHide)
this._onHide();if(this._popover.isShowing())
this._popover.hide();delete this._popover;this._hoverElement=null;}
_mouseHover(element,document){delete this._hoverTimer;this._hidePopover();this._hoverElement=element;this._popover=new UI.GlassPane();this._popover.registerRequiredCSS('ui/popover.css');this._popover.setBlockPointerEvents(false);this._popover.setSizeBehavior(UI.GlassPane.SizeBehavior.MeasureContent);this._popover.setShowArrow(true);this._popover.contentElement.classList.toggle('has-padding',this._hasPadding);this._popover.contentElement.addEventListener('mousemove',this._killHidePopoverTimer.bind(this),true);this._popover.contentElement.addEventListener('mouseout',this._popoverMouseOut.bind(this),true);this._popover.setContentAnchorBox(this._hoverElement instanceof AnchorBox?this._hoverElement:this._hoverElement.boxInWindow());if(UI.PopoverHelper._popover){console.error('One popover is already visible');UI.PopoverHelper._popover.hide();}
UI.PopoverHelper._popover=this._popover;var popover=this._popover;this._showPopover(element,this._popover).then(success=>{if(success&&this._popover===popover&&this._hoverElement===element)
popover.show(document);});}
_killHidePopoverTimer(){if(this._hidePopoverTimer){clearTimeout(this._hidePopoverTimer);delete this._hidePopoverTimer;this._resetHoverTimer();}}};;UI.ProgressIndicator=class{constructor(){this.element=createElementWithClass('div','progress-indicator');this._shadowRoot=UI.createShadowRootWithCoreStyles(this.element,'ui/progressIndicator.css');this._contentElement=this._shadowRoot.createChild('div','progress-indicator-shadow-container');this._labelElement=this._contentElement.createChild('div','title');this._progressElement=this._contentElement.createChild('progress');this._progressElement.value=0;this._stopButton=this._contentElement.createChild('button','progress-indicator-shadow-stop-button');this._stopButton.addEventListener('click',this.cancel.bind(this));this._isCanceled=false;this._worked=0;}
show(parent){parent.appendChild(this.element);}
done(){if(this._isDone)
return;this._isDone=true;this.element.remove();}
cancel(){this._isCanceled=true;}
isCanceled(){return this._isCanceled;}
setTitle(title){this._labelElement.textContent=title;}
setTotalWork(totalWork){this._progressElement.max=totalWork;}
setWorked(worked,title){this._worked=worked;this._progressElement.value=worked;if(title)
this.setTitle(title);}
worked(worked){this.setWorked(this._worked+(worked||1));}};;UI.ResizerWidget=class extends Common.Object{constructor(){super();this._isEnabled=true;this._elements=[];this._installDragOnMouseDownBound=this._installDragOnMouseDown.bind(this);this._cursor='nwse-resize';}
isEnabled(){return this._isEnabled;}
setEnabled(enabled){this._isEnabled=enabled;this.updateElementCursors();}
elements(){return this._elements.slice();}
addElement(element){if(this._elements.indexOf(element)!==-1)
return;this._elements.push(element);element.addEventListener('mousedown',this._installDragOnMouseDownBound,false);this._updateElementCursor(element);}
removeElement(element){if(this._elements.indexOf(element)===-1)
return;this._elements.remove(element);element.removeEventListener('mousedown',this._installDragOnMouseDownBound,false);element.style.removeProperty('cursor');}
updateElementCursors(){this._elements.forEach(this._updateElementCursor.bind(this));}
_updateElementCursor(element){if(this._isEnabled)
element.style.setProperty('cursor',this.cursor());else
element.style.removeProperty('cursor');}
cursor(){return this._cursor;}
setCursor(cursor){this._cursor=cursor;this.updateElementCursors();}
_installDragOnMouseDown(event){if(this._elements.indexOf(event.target)===-1)
return false;UI.elementDragStart((event.target),this._dragStart.bind(this),this._drag.bind(this),this._dragEnd.bind(this),this.cursor(),event);}
_dragStart(event){if(!this._isEnabled)
return false;this._startX=event.pageX;this._startY=event.pageY;this.sendDragStart(this._startX,this._startY);return true;}
sendDragStart(x,y){this.dispatchEventToListeners(UI.ResizerWidget.Events.ResizeStart,{startX:x,currentX:x,startY:y,currentY:y});}
_drag(event){if(!this._isEnabled){this._dragEnd(event);return true;}
this.sendDragMove(this._startX,event.pageX,this._startY,event.pageY,event.shiftKey);event.preventDefault();return false;}
sendDragMove(startX,currentX,startY,currentY,shiftKey){this.dispatchEventToListeners(UI.ResizerWidget.Events.ResizeUpdate,{startX:startX,currentX:currentX,startY:startY,currentY:currentY,shiftKey:shiftKey});}
_dragEnd(event){this.dispatchEventToListeners(UI.ResizerWidget.Events.ResizeEnd);delete this._startX;delete this._startY;}};UI.ResizerWidget.Events={ResizeStart:Symbol('ResizeStart'),ResizeUpdate:Symbol('ResizeUpdate'),ResizeEnd:Symbol('ResizeEnd')};UI.SimpleResizerWidget=class extends UI.ResizerWidget{constructor(){super();this._isVertical=true;}
isVertical(){return this._isVertical;}
setVertical(vertical){this._isVertical=vertical;this.updateElementCursors();}
cursor(){return this._isVertical?'ns-resize':'ew-resize';}
sendDragStart(x,y){var position=this._isVertical?y:x;this.dispatchEventToListeners(UI.ResizerWidget.Events.ResizeStart,{startPosition:position,currentPosition:position});}
sendDragMove(startX,currentX,startY,currentY,shiftKey){if(this._isVertical){this.dispatchEventToListeners(UI.ResizerWidget.Events.ResizeUpdate,{startPosition:startY,currentPosition:currentY,shiftKey:shiftKey});}else{this.dispatchEventToListeners(UI.ResizerWidget.Events.ResizeUpdate,{startPosition:startX,currentPosition:currentX,shiftKey:shiftKey});}}};;UI.ReportView=class extends UI.VBox{constructor(title){super(true);this.registerRequiredCSS('ui/reportView.css');var contentBox=this.contentElement.createChild('div','report-content-box');this._headerElement=contentBox.createChild('div','report-header vbox');this._headerElement.createChild('div','report-title').textContent=title;this._sectionList=contentBox.createChild('div','vbox');}
setSubtitle(subtitle){if(this._subtitleElement&&this._subtitleElement.textContent===subtitle)
return;if(!this._subtitleElement)
this._subtitleElement=this._headerElement.createChild('div','report-subtitle');this._subtitleElement.textContent=subtitle;}
setURL(link){if(!this._urlElement)
this._urlElement=this._headerElement.createChild('div','report-url link');this._urlElement.removeChildren();if(link)
this._urlElement.appendChild(link);}
createToolbar(){var toolbar=new UI.Toolbar('');this._headerElement.appendChild(toolbar.element);return toolbar;}
appendSection(title,className){var section=new UI.ReportView.Section(title,className);section.show(this._sectionList);return section;}
removeAllSection(){this._sectionList.removeChildren();}};UI.ReportView.Section=class extends UI.VBox{constructor(title,className){super();this.element.classList.add('report-section');if(className)
this.element.classList.add(className);this._headerElement=this.element.createChild('div','report-section-header');this._titleElement=this._headerElement.createChild('div','report-section-title');this._titleElement.textContent=title;this._fieldList=this.element.createChild('div','vbox');this._fieldMap=new Map();}
setTitle(title){if(this._titleElement.textContent!==title)
this._titleElement.textContent=title;}
createToolbar(){var toolbar=new UI.Toolbar('');this._headerElement.appendChild(toolbar.element);return toolbar;}
appendField(title,textValue){var row=this._fieldMap.get(title);if(!row){row=this._fieldList.createChild('div','report-field');row.createChild('div','report-field-name').textContent=title;this._fieldMap.set(title,row);row.createChild('div','report-field-value');}
if(textValue)
row.lastElementChild.textContent=textValue;return(row.lastElementChild);}
remove(){this.element.remove();}
removeField(title){var row=this._fieldMap.get(title);if(row)
row.remove();this._fieldMap.delete(title);}
setFieldVisible(title,visible){var row=this._fieldMap.get(title);if(row)
row.classList.toggle('hidden',!visible);}
fieldValue(title){var row=this._fieldMap.get(title);return row?row.lastElementChild:null;}
appendRow(){return this._fieldList.createChild('div','report-row');}
clearContent(){this._fieldList.removeChildren();this._fieldMap.clear();}};;UI.RootView=class extends UI.VBox{constructor(){super();this.markAsRoot();this.element.classList.add('root-view');this.registerRequiredCSS('ui/rootView.css');this.element.setAttribute('spellcheck',false);}
attachToDocument(document){document.defaultView.addEventListener('resize',this.doResize.bind(this),false);this._window=document.defaultView;this.doResize();this.show((document.body));}
doResize(){if(this._window){var size=this.constraints().minimum;var zoom=UI.zoomManager.zoomFactor();var right=Math.min(0,this._window.innerWidth-size.width/zoom);this.element.style.marginRight=right+'px';var bottom=Math.min(0,this._window.innerHeight-size.height/zoom);this.element.style.marginBottom=bottom+'px';}
super.doResize();}};;UI.SearchableView=class extends UI.VBox{constructor(searchable,settingName){super(true);this.registerRequiredCSS('ui/searchableView.css');this.element[UI.SearchableView._symbol]=this;this._searchProvider=searchable;this._setting=settingName?Common.settings.createSetting(settingName,{}):null;this.contentElement.createChild('content');this._footerElementContainer=this.contentElement.createChild('div','search-bar hidden');this._footerElementContainer.style.order=100;var toolbar=new UI.Toolbar('search-toolbar',this._footerElementContainer);if(this._searchProvider.supportsCaseSensitiveSearch()){this._caseSensitiveButton=new UI.ToolbarToggle(Common.UIString('Case sensitive'),'');this._caseSensitiveButton.setText('Aa');this._caseSensitiveButton.addEventListener(UI.ToolbarButton.Events.Click,this._toggleCaseSensitiveSearch,this);toolbar.appendToolbarItem(this._caseSensitiveButton);}
if(this._searchProvider.supportsRegexSearch()){this._regexButton=new UI.ToolbarToggle(Common.UIString('Regex'),'');this._regexButton.setText('.*');this._regexButton.addEventListener(UI.ToolbarButton.Events.Click,this._toggleRegexSearch,this);toolbar.appendToolbarItem(this._regexButton);}
this._footerElement=this._footerElementContainer.createChild('div','toolbar-search');var searchInputElements=this._footerElement.createChild('div','toolbar-search-inputs');var searchControlElement=searchInputElements.createChild('div','toolbar-search-control');this._searchInputElement=UI.HistoryInput.create();this._searchInputElement.classList.add('search-replace');this._searchInputElement.id='search-input-field';this._searchInputElement.placeholder=Common.UIString('Find');searchControlElement.appendChild(this._searchInputElement);this._matchesElement=searchControlElement.createChild('label','search-results-matches');this._matchesElement.setAttribute('for','search-input-field');var searchNavigationElement=searchControlElement.createChild('div','toolbar-search-navigation-controls');this._searchNavigationPrevElement=searchNavigationElement.createChild('div','toolbar-search-navigation toolbar-search-navigation-prev');this._searchNavigationPrevElement.addEventListener('click',this._onPrevButtonSearch.bind(this),false);this._searchNavigationPrevElement.title=Common.UIString('Search Previous');this._searchNavigationNextElement=searchNavigationElement.createChild('div','toolbar-search-navigation toolbar-search-navigation-next');this._searchNavigationNextElement.addEventListener('click',this._onNextButtonSearch.bind(this),false);this._searchNavigationNextElement.title=Common.UIString('Search Next');this._searchInputElement.addEventListener('keydown',this._onSearchKeyDown.bind(this),true);this._searchInputElement.addEventListener('input',this._onInput.bind(this),false);this._replaceInputElement=searchInputElements.createChild('input','search-replace toolbar-replace-control');this._replaceInputElement.addEventListener('keydown',this._onReplaceKeyDown.bind(this),true);this._replaceInputElement.placeholder=Common.UIString('Replace');this._buttonsContainer=this._footerElement.createChild('div','toolbar-search-buttons hidden');var findButtonElement=this._buttonsContainer.createChild('button','search-action-button');findButtonElement.textContent=Common.UIString('Find');findButtonElement.tabIndex=-1;findButtonElement.addEventListener('click',this._onFindClick.bind(this),false);var prevButtonElement=this._buttonsContainer.createChild('button','search-action-button');prevButtonElement.textContent=Common.UIString('Previous');prevButtonElement.tabIndex=-1;prevButtonElement.addEventListener('click',this._onPreviousClick.bind(this),false);this._replaceButtonElement=this._buttonsContainer.createChild('button','search-action-button');this._replaceButtonElement.textContent=Common.UIString('Replace');this._replaceButtonElement.disabled=true;this._replaceButtonElement.tabIndex=-1;this._replaceButtonElement.addEventListener('click',this._replace.bind(this),false);var replaceAllButtonElement=this._buttonsContainer.createChild('button','search-action-button');replaceAllButtonElement.textContent=Common.UIString('Replace All');replaceAllButtonElement.addEventListener('click',this._replaceAll.bind(this),false);this._replaceElement=this._footerElement.createChild('div').createChild('span','toolbar-replace-checkbox');var replaceLabelElement=UI.createCheckboxLabel(Common.UIString('Replace'));this._replaceCheckboxElement=replaceLabelElement.checkboxElement;var uniqueId=++UI.SearchableView._lastUniqueId;var replaceCheckboxId='search-replace-trigger'+uniqueId;this._replaceCheckboxElement.id=replaceCheckboxId;this._replaceCheckboxElement.addEventListener('change',this._updateSecondRowVisibility.bind(this),false);this._replaceElement.appendChild(replaceLabelElement);var cancelButtonElement=this._footerElement.createChild('div').createChild('button','search-action-button');cancelButtonElement.textContent=Common.UIString('Cancel');cancelButtonElement.tabIndex=-1;cancelButtonElement.addEventListener('click',this.closeSearch.bind(this),false);this._minimalSearchQuerySize=3;this._loadSetting();}
static fromElement(element){var view=null;while(element&&!view){view=element[UI.SearchableView._symbol];element=element.parentElementOrShadowHost();}
return view;}
_toggleCaseSensitiveSearch(){this._caseSensitiveButton.setToggled(!this._caseSensitiveButton.toggled());this._saveSetting();this._performSearch(false,true);}
_toggleRegexSearch(){this._regexButton.setToggled(!this._regexButton.toggled());this._saveSetting();this._performSearch(false,true);}
_saveSetting(){if(!this._setting)
return;var settingValue=this._setting.get()||{};settingValue.caseSensitive=this._caseSensitiveButton.toggled();settingValue.isRegex=this._regexButton.toggled();this._setting.set(settingValue);}
_loadSetting(){var settingValue=this._setting?(this._setting.get()||{}):{};if(this._searchProvider.supportsCaseSensitiveSearch())
this._caseSensitiveButton.setToggled(!!settingValue.caseSensitive);if(this._searchProvider.supportsRegexSearch())
this._regexButton.setToggled(!!settingValue.isRegex);}
setMinimalSearchQuerySize(minimalSearchQuerySize){this._minimalSearchQuerySize=minimalSearchQuerySize;}
setPlaceholder(placeholder){this._searchInputElement.placeholder=placeholder;}
setReplaceable(replaceable){this._replaceable=replaceable;}
updateSearchMatchesCount(matches){this._searchProvider.currentSearchMatches=matches;this._updateSearchMatchesCountAndCurrentMatchIndex(this._searchProvider.currentQuery?matches:0,-1);}
updateCurrentMatchIndex(currentMatchIndex){this._updateSearchMatchesCountAndCurrentMatchIndex(this._searchProvider.currentSearchMatches,currentMatchIndex);}
isSearchVisible(){return this._searchIsVisible;}
closeSearch(){this.cancelSearch();if(this._footerElementContainer.hasFocus())
this.focus();}
_toggleSearchBar(toggled){this._footerElementContainer.classList.toggle('hidden',!toggled);this.doResize();}
cancelSearch(){if(!this._searchIsVisible)
return;this.resetSearch();delete this._searchIsVisible;this._toggleSearchBar(false);}
resetSearch(){this._clearSearch();this._updateReplaceVisibility();this._matchesElement.textContent='';}
refreshSearch(){if(!this._searchIsVisible)
return;this.resetSearch();this._performSearch(false,false);}
handleFindNextShortcut(){if(!this._searchIsVisible)
return false;this._searchProvider.jumpToNextSearchResult();return true;}
handleFindPreviousShortcut(){if(!this._searchIsVisible)
return false;this._searchProvider.jumpToPreviousSearchResult();return true;}
handleFindShortcut(){this.showSearchField();return true;}
handleCancelSearchShortcut(){if(!this._searchIsVisible)
return false;this.closeSearch();return true;}
_updateSearchNavigationButtonState(enabled){this._replaceButtonElement.disabled=!enabled;if(enabled){this._searchNavigationPrevElement.classList.add('enabled');this._searchNavigationNextElement.classList.add('enabled');}else{this._searchNavigationPrevElement.classList.remove('enabled');this._searchNavigationNextElement.classList.remove('enabled');}}
_updateSearchMatchesCountAndCurrentMatchIndex(matches,currentMatchIndex){if(!this._currentQuery)
this._matchesElement.textContent='';else if(matches===0||currentMatchIndex>=0)
this._matchesElement.textContent=Common.UIString('%d of %d',currentMatchIndex+1,matches);else if(matches===1)
this._matchesElement.textContent=Common.UIString('1 match');else
this._matchesElement.textContent=Common.UIString('%d matches',matches);this._updateSearchNavigationButtonState(matches>0);}
showSearchField(){if(this._searchIsVisible)
this.cancelSearch();var queryCandidate;if(!this._searchInputElement.hasFocus()){var selection=UI.inspectorView.element.window().getSelection();if(selection.rangeCount)
queryCandidate=selection.toString().replace(/\r?\n.*/,'');}
this._toggleSearchBar(true);this._updateReplaceVisibility();if(queryCandidate)
this._searchInputElement.value=queryCandidate;this._performSearch(false,false);this._searchInputElement.focus();this._searchInputElement.select();this._searchIsVisible=true;}
_updateReplaceVisibility(){this._replaceElement.classList.toggle('hidden',!this._replaceable);if(!this._replaceable){this._replaceCheckboxElement.checked=false;this._updateSecondRowVisibility();}}
_onSearchKeyDown(event){if(isEscKey(event)){this.closeSearch();event.consume(true);return;}
if(!isEnterKey(event))
return;if(!this._currentQuery)
this._performSearch(true,true,event.shiftKey);else
this._jumpToNextSearchResult(event.shiftKey);}
_onReplaceKeyDown(event){if(isEnterKey(event))
this._replace();}
_jumpToNextSearchResult(isBackwardSearch){if(!this._currentQuery||!this._searchNavigationPrevElement.classList.contains('enabled'))
return;if(isBackwardSearch)
this._searchProvider.jumpToPreviousSearchResult();else
this._searchProvider.jumpToNextSearchResult();}
_onNextButtonSearch(event){if(!this._searchNavigationNextElement.classList.contains('enabled'))
return;this._jumpToNextSearchResult();this._searchInputElement.focus();}
_onPrevButtonSearch(event){if(!this._searchNavigationPrevElement.classList.contains('enabled'))
return;this._jumpToNextSearchResult(true);this._searchInputElement.focus();}
_onFindClick(event){if(!this._currentQuery)
this._performSearch(true,true);else
this._jumpToNextSearchResult();this._searchInputElement.focus();}
_onPreviousClick(event){if(!this._currentQuery)
this._performSearch(true,true,true);else
this._jumpToNextSearchResult(true);this._searchInputElement.focus();}
_clearSearch(){delete this._currentQuery;if(!!this._searchProvider.currentQuery){delete this._searchProvider.currentQuery;this._searchProvider.searchCanceled();}
this._updateSearchMatchesCountAndCurrentMatchIndex(0,-1);}
_performSearch(forceSearch,shouldJump,jumpBackwards){var query=this._searchInputElement.value;if(!query||(!forceSearch&&query.length<this._minimalSearchQuerySize&&!this._currentQuery)){this._clearSearch();return;}
this._currentQuery=query;this._searchProvider.currentQuery=query;var searchConfig=this._currentSearchConfig();this._searchProvider.performSearch(searchConfig,shouldJump,jumpBackwards);}
_currentSearchConfig(){var query=this._searchInputElement.value;var caseSensitive=this._caseSensitiveButton?this._caseSensitiveButton.toggled():false;var isRegex=this._regexButton?this._regexButton.toggled():false;return new UI.SearchableView.SearchConfig(query,caseSensitive,isRegex);}
_updateSecondRowVisibility(){var secondRowVisible=this._replaceCheckboxElement.checked;this._footerElementContainer.classList.toggle('replaceable',secondRowVisible);this._buttonsContainer.classList.toggle('hidden',!secondRowVisible);this._replaceCheckboxElement.tabIndex=secondRowVisible?-1:0;if(secondRowVisible)
this._replaceInputElement.focus();else
this._searchInputElement.focus();this.doResize();}
_replace(){var searchConfig=this._currentSearchConfig();(this._searchProvider).replaceSelectionWith(searchConfig,this._replaceInputElement.value);delete this._currentQuery;this._performSearch(true,true);}
_replaceAll(){var searchConfig=this._currentSearchConfig();(this._searchProvider).replaceAllWith(searchConfig,this._replaceInputElement.value);}
_onInput(event){if(this._valueChangedTimeoutId)
clearTimeout(this._valueChangedTimeoutId);var timeout=this._searchInputElement.value.length<3?200:0;this._valueChangedTimeoutId=setTimeout(this._onValueChanged.bind(this),timeout);}
_onValueChanged(){if(!this._searchIsVisible)
return;delete this._valueChangedTimeoutId;this._performSearch(false,true);}};UI.SearchableView._lastUniqueId=0;UI.SearchableView._symbol=Symbol('searchableView');UI.Searchable=function(){};UI.Searchable.prototype={searchCanceled(){},performSearch(searchConfig,shouldJump,jumpBackwards){},jumpToNextSearchResult(){},jumpToPreviousSearchResult(){},supportsCaseSensitiveSearch(){},supportsRegexSearch(){}};UI.Replaceable=function(){};UI.Replaceable.prototype={replaceSelectionWith(searchConfig,replacement){},replaceAllWith(searchConfig,replacement){}};UI.SearchableView.SearchConfig=class{constructor(query,caseSensitive,isRegex){this.query=query;this.caseSensitive=caseSensitive;this.isRegex=isRegex;}
toSearchRegex(global){var modifiers=this.caseSensitive?'':'i';if(global)
modifiers+='g';var query=this.isRegex?'/'+this.query+'/':this.query;var regex;try{if(/^\/.+\/$/.test(query)){regex=new RegExp(query.substring(1,query.length-1),modifiers);regex.__fromRegExpQuery=true;}}catch(e){}
if(!regex)
regex=createPlainTextSearchRegex(query,modifiers);return regex;}};;UI.SettingsUI={};UI.SettingsUI.createSettingCheckbox=function(name,setting,omitParagraphElement,tooltip){var label=UI.createCheckboxLabel(name);if(tooltip)
label.title=tooltip;var input=label.checkboxElement;input.name=name;UI.SettingsUI.bindCheckbox(input,setting);if(omitParagraphElement)
return label;var p=createElement('p');p.appendChild(label);return p;};UI.SettingsUI.bindCheckbox=function(input,setting){function settingChanged(){if(input.checked!==setting.get())
input.checked=setting.get();}
setting.addChangeListener(settingChanged);settingChanged();function inputChanged(){if(setting.get()!==input.checked)
setting.set(input.checked);}
input.addEventListener('change',inputChanged,false);};UI.SettingsUI.createCustomSetting=function(name,element){var p=createElement('p');var fieldsetElement=p.createChild('fieldset');fieldsetElement.createChild('label').textContent=name;fieldsetElement.appendChild(element);return p;};UI.SettingsUI.createSettingFieldset=function(setting){var fieldset=createElement('fieldset');fieldset.disabled=!setting.get();setting.addChangeListener(settingChanged);return fieldset;function settingChanged(){fieldset.disabled=!setting.get();}};UI.SettingUI=function(){};UI.SettingUI.prototype={settingElement(){}};;UI.SoftContextMenu=class{constructor(items,itemSelectedCallback,parentMenu){this._items=items;this._itemSelectedCallback=itemSelectedCallback;this._parentMenu=parentMenu;}
show(document,x,y){if(!this._items.length)
return;this._document=document;this._x=x;this._y=y;this._time=new Date().getTime();this.element=createElementWithClass('div','soft-context-menu');var root=UI.createShadowRootWithCoreStyles(this.element,'ui/softContextMenu.css');this._contextMenuElement=root.createChild('div');this.element.style.top=y+'px';var subMenuOverlap=3;this.element.style.left=(this._parentMenu?x-subMenuOverlap:x)+'px';this._contextMenuElement.tabIndex=0;this._contextMenuElement.addEventListener('mouseup',e=>e.consume(),false);this._contextMenuElement.addEventListener('keydown',this._menuKeyDown.bind(this),false);for(var i=0;i<this._items.length;++i)
this._contextMenuElement.appendChild(this._createMenuItem(this._items[i]));if(!this._parentMenu){this._glassPaneElement=createElementWithClass('div','soft-context-menu-glass-pane fill');this._glassPaneElement.tabIndex=0;this._glassPaneElement.style.zIndex='20000';this._glassPaneElement.addEventListener('mouseup',this._glassPaneMouseUp.bind(this),false);this._glassPaneElement.appendChild(this.element);document.body.appendChild(this._glassPaneElement);this._discardMenuOnResizeListener=this._discardMenu.bind(this,true);document.defaultView.addEventListener('resize',this._discardMenuOnResizeListener,false);}else{this._parentMenu._parentGlassPaneElement().appendChild(this.element);}
var containerElement=UI.GlassPane.container(document);var hostLeft=containerElement.totalOffsetLeft();var hostRight=hostLeft+containerElement.offsetWidth;if(hostRight<this.element.offsetLeft+this.element.offsetWidth){var left=this._parentMenu?this._parentMenu.element.offsetLeft-this.element.offsetWidth+subMenuOverlap:hostRight-this.element.offsetWidth;this.element.style.left=Math.max(hostLeft,left)+'px';}
if(this._parentMenu&&document.body.offsetHeight<this.element.offsetTop+this.element.offsetHeight){y=Math.max(containerElement.totalOffsetTop(),document.body.offsetHeight-this.element.offsetHeight);this.element.style.top=y+'px';}
var maxHeight=containerElement.offsetHeight;maxHeight-=y-containerElement.totalOffsetTop();this.element.style.maxHeight=maxHeight+'px';this._focus();}
discard(){this._discardMenu(true);}
_parentGlassPaneElement(){if(this._glassPaneElement)
return this._glassPaneElement;if(this._parentMenu)
return this._parentMenu._parentGlassPaneElement();return null;}
_createMenuItem(item){if(item.type==='separator')
return this._createSeparator();if(item.type==='subMenu')
return this._createSubMenu(item);var menuItemElement=createElementWithClass('div','soft-context-menu-item');var checkMarkElement=UI.Icon.create('smallicon-checkmark','checkmark');menuItemElement.appendChild(checkMarkElement);if(!item.checked)
checkMarkElement.style.opacity='0';if(item.element){var wrapper=menuItemElement.createChild('div','soft-context-menu-custom-item');wrapper.appendChild(item.element);menuItemElement._isCustom=true;return menuItemElement;}
if(!item.enabled)
menuItemElement.classList.add('soft-context-menu-disabled');menuItemElement.createTextChild(item.label);menuItemElement.createChild('span','soft-context-menu-shortcut').textContent=item.shortcut;menuItemElement.addEventListener('mousedown',this._menuItemMouseDown.bind(this),false);menuItemElement.addEventListener('mouseup',this._menuItemMouseUp.bind(this),false);menuItemElement.addEventListener('mouseover',this._menuItemMouseOver.bind(this),false);menuItemElement.addEventListener('mouseleave',this._menuItemMouseLeave.bind(this),false);menuItemElement._actionId=item.id;return menuItemElement;}
_createSubMenu(item){var menuItemElement=createElementWithClass('div','soft-context-menu-item');menuItemElement._subItems=item.subItems;var checkMarkElement=UI.Icon.create('smallicon-checkmark','soft-context-menu-item-checkmark');checkMarkElement.classList.add('checkmark');menuItemElement.appendChild(checkMarkElement);checkMarkElement.style.opacity='0';menuItemElement.createTextChild(item.label);var subMenuArrowElement=menuItemElement.createChild('span','soft-context-menu-item-submenu-arrow');subMenuArrowElement.textContent='\u25B6';menuItemElement.addEventListener('mousedown',this._menuItemMouseDown.bind(this),false);menuItemElement.addEventListener('mouseup',this._menuItemMouseUp.bind(this),false);menuItemElement.addEventListener('mouseover',this._menuItemMouseOver.bind(this),false);menuItemElement.addEventListener('mouseleave',this._menuItemMouseLeave.bind(this),false);return menuItemElement;}
_createSeparator(){var separatorElement=createElementWithClass('div','soft-context-menu-separator');separatorElement._isSeparator=true;separatorElement.createChild('div','separator-line');return separatorElement;}
_menuItemMouseDown(event){event.consume(true);}
_menuItemMouseUp(event){this._triggerAction(event.target,event);event.consume();}
_focus(){this._contextMenuElement.focus();}
_triggerAction(menuItemElement,event){if(!menuItemElement._subItems){this._discardMenu(true,event);if(typeof menuItemElement._actionId!=='undefined'){this._itemSelectedCallback(menuItemElement._actionId);delete menuItemElement._actionId;}
return;}
this._showSubMenu(menuItemElement);event.consume();}
_showSubMenu(menuItemElement){if(menuItemElement._subMenuTimer){clearTimeout(menuItemElement._subMenuTimer);delete menuItemElement._subMenuTimer;}
if(this._subMenu)
return;this._subMenu=new UI.SoftContextMenu(menuItemElement._subItems,this._itemSelectedCallback,this);var topPadding=4;this._subMenu.show(this._document,menuItemElement.totalOffsetLeft()+menuItemElement.offsetWidth,menuItemElement.totalOffsetTop()-1-topPadding);}
_hideSubMenu(){if(!this._subMenu)
return;this._subMenu._discardSubMenus();this._focus();}
_menuItemMouseOver(event){this._highlightMenuItem(event.target,true);}
_menuItemMouseLeave(event){if(!this._subMenu||!event.relatedTarget){this._highlightMenuItem(null,true);return;}
var relatedTarget=event.relatedTarget;if(relatedTarget.classList.contains('soft-context-menu-glass-pane'))
this._highlightMenuItem(null,true);}
_highlightMenuItem(menuItemElement,scheduleSubMenu){if(this._highlightedMenuItemElement===menuItemElement)
return;this._hideSubMenu();if(this._highlightedMenuItemElement){this._highlightedMenuItemElement.classList.remove('force-white-icons');this._highlightedMenuItemElement.classList.remove('soft-context-menu-item-mouse-over');if(this._highlightedMenuItemElement._subItems&&this._highlightedMenuItemElement._subMenuTimer){clearTimeout(this._highlightedMenuItemElement._subMenuTimer);delete this._highlightedMenuItemElement._subMenuTimer;}}
this._highlightedMenuItemElement=menuItemElement;if(this._highlightedMenuItemElement){this._highlightedMenuItemElement.classList.add('force-white-icons');this._highlightedMenuItemElement.classList.add('soft-context-menu-item-mouse-over');this._contextMenuElement.focus();if(scheduleSubMenu&&this._highlightedMenuItemElement._subItems&&!this._highlightedMenuItemElement._subMenuTimer){this._highlightedMenuItemElement._subMenuTimer=setTimeout(this._showSubMenu.bind(this,this._highlightedMenuItemElement),150);}}}
_highlightPrevious(){var menuItemElement=this._highlightedMenuItemElement?this._highlightedMenuItemElement.previousSibling:this._contextMenuElement.lastChild;while(menuItemElement&&(menuItemElement._isSeparator||menuItemElement._isCustom))
menuItemElement=menuItemElement.previousSibling;if(menuItemElement)
this._highlightMenuItem(menuItemElement,false);}
_highlightNext(){var menuItemElement=this._highlightedMenuItemElement?this._highlightedMenuItemElement.nextSibling:this._contextMenuElement.firstChild;while(menuItemElement&&(menuItemElement._isSeparator||menuItemElement._isCustom))
menuItemElement=menuItemElement.nextSibling;if(menuItemElement)
this._highlightMenuItem(menuItemElement,false);}
_menuKeyDown(event){switch(event.key){case'ArrowUp':this._highlightPrevious();break;case'ArrowDown':this._highlightNext();break;case'ArrowLeft':if(this._parentMenu){this._highlightMenuItem(null,false);this._parentMenu._hideSubMenu();}
break;case'ArrowRight':if(!this._highlightedMenuItemElement)
break;if(this._highlightedMenuItemElement._subItems){this._showSubMenu(this._highlightedMenuItemElement);this._subMenu._focus();this._subMenu._highlightNext();}
break;case'Escape':this._discardMenu(false,event);break;case'Enter':if(!isEnterKey(event))
break;case' ':if(this._highlightedMenuItemElement)
this._triggerAction(this._highlightedMenuItemElement,event);if(this._highlightedMenuItemElement._subItems){this._subMenu._focus();this._subMenu._highlightNext();}
break;}
event.consume(true);}
_glassPaneMouseUp(event){if(new Date().getTime()-this._time<300)
return;if(event.target===this.element)
return;this._discardMenu(true,event);event.consume();}
_discardMenu(closeParentMenus,event){if(this._subMenu&&!closeParentMenus)
return;if(this._glassPaneElement){var glassPane=this._glassPaneElement;delete this._glassPaneElement;this._document.body.removeChild(glassPane);if(this._parentMenu){delete this._parentMenu._subMenu;if(closeParentMenus)
this._parentMenu._discardMenu(closeParentMenus,event);else
this._parentMenu._focus();}
if(event)
event.consume(true);}else if(this._parentMenu&&this._contextMenuElement.parentElementOrShadowHost()){this._discardSubMenus();if(closeParentMenus)
this._parentMenu._discardMenu(closeParentMenus,event);else
this._parentMenu._focus();if(event)
event.consume(true);}
if(this._discardMenuOnResizeListener){this._document.defaultView.removeEventListener('resize',this._discardMenuOnResizeListener,false);delete this._discardMenuOnResizeListener;}}
_discardSubMenus(){if(this._subMenu)
this._subMenu._discardSubMenus();if(this.element)
this.element.remove();if(this._parentMenu)
delete this._parentMenu._subMenu;}};;UI.SplitWidget=class extends UI.Widget{constructor(isVertical,secondIsSidebar,settingName,defaultSidebarWidth,defaultSidebarHeight,constraintsInDip){super(true);this.element.classList.add('split-widget');this.registerRequiredCSS('ui/splitWidget.css');this.contentElement.classList.add('shadow-split-widget');this._mainElement=this.contentElement.createChild('div','shadow-split-widget-contents shadow-split-widget-main vbox');this._mainElement.createChild('content').select='.insertion-point-main';this._sidebarElement=this.contentElement.createChild('div','shadow-split-widget-contents shadow-split-widget-sidebar vbox');this._sidebarElement.createChild('content').select='.insertion-point-sidebar';this._resizerElement=this.contentElement.createChild('div','shadow-split-widget-resizer');this._resizerElementSize=null;this._resizerWidget=new UI.SimpleResizerWidget();this._resizerWidget.setEnabled(true);this._resizerWidget.addEventListener(UI.ResizerWidget.Events.ResizeStart,this._onResizeStart,this);this._resizerWidget.addEventListener(UI.ResizerWidget.Events.ResizeUpdate,this._onResizeUpdate,this);this._resizerWidget.addEventListener(UI.ResizerWidget.Events.ResizeEnd,this._onResizeEnd,this);this._defaultSidebarWidth=defaultSidebarWidth||200;this._defaultSidebarHeight=defaultSidebarHeight||this._defaultSidebarWidth;this._constraintsInDip=!!constraintsInDip;this._resizeStartSizeDIP=0;this._setting=settingName?Common.settings.createSetting(settingName,{}):null;this._totalSizeCSS=0;this._totalSizeOtherDimensionCSS=0;this._mainWidget=null;this._sidebarWidget=null;this._animationFrameHandle=0;this._animationCallback=null;this._showHideSidebarButtonTitle='';this._showHideSidebarButton=null;this._isVertical=false;this._sidebarMinimized=false;this._detaching=false;this._sidebarSizeDIP=-1;this._savedSidebarSizeDIP=this._sidebarSizeDIP;this._secondIsSidebar=false;this._shouldSaveShowMode=false;this._savedVerticalMainSize=null;this._savedHorizontalMainSize=null;this.setSecondIsSidebar(secondIsSidebar);this._innerSetVertical(isVertical);this._showMode=UI.SplitWidget.ShowMode.Both;this._savedShowMode=this._showMode;this.installResizer(this._resizerElement);}
isVertical(){return this._isVertical;}
setVertical(isVertical){if(this._isVertical===isVertical)
return;this._innerSetVertical(isVertical);if(this.isShowing())
this._updateLayout();}
_innerSetVertical(isVertical){this.contentElement.classList.toggle('vbox',!isVertical);this.contentElement.classList.toggle('hbox',isVertical);this._isVertical=isVertical;this._resizerElementSize=null;this._sidebarSizeDIP=-1;this._restoreSidebarSizeFromSettings();if(this._shouldSaveShowMode)
this._restoreAndApplyShowModeFromSettings();this._updateShowHideSidebarButton();this._resizerWidget.setVertical(!isVertical);this.invalidateConstraints();}
_updateLayout(animate){this._totalSizeCSS=0;this._totalSizeOtherDimensionCSS=0;this._mainElement.style.removeProperty('width');this._mainElement.style.removeProperty('height');this._sidebarElement.style.removeProperty('width');this._sidebarElement.style.removeProperty('height');this._innerSetSidebarSizeDIP(this._preferredSidebarSizeDIP(),!!animate);}
setMainWidget(widget){if(this._mainWidget===widget)
return;this.suspendInvalidations();if(this._mainWidget)
this._mainWidget.detach();this._mainWidget=widget;if(widget){widget.element.classList.add('insertion-point-main');widget.element.classList.remove('insertion-point-sidebar');if(this._showMode===UI.SplitWidget.ShowMode.OnlyMain||this._showMode===UI.SplitWidget.ShowMode.Both)
widget.show(this.element);}
this.resumeInvalidations();}
setSidebarWidget(widget){if(this._sidebarWidget===widget)
return;this.suspendInvalidations();if(this._sidebarWidget)
this._sidebarWidget.detach();this._sidebarWidget=widget;if(widget){widget.element.classList.add('insertion-point-sidebar');widget.element.classList.remove('insertion-point-main');if(this._showMode===UI.SplitWidget.ShowMode.OnlySidebar||this._showMode===UI.SplitWidget.ShowMode.Both)
widget.show(this.element);}
this.resumeInvalidations();}
mainWidget(){return this._mainWidget;}
sidebarWidget(){return this._sidebarWidget;}
childWasDetached(widget){if(this._detaching)
return;if(this._mainWidget===widget)
this._mainWidget=null;if(this._sidebarWidget===widget)
this._sidebarWidget=null;this.invalidateConstraints();}
isSidebarSecond(){return this._secondIsSidebar;}
enableShowModeSaving(){this._shouldSaveShowMode=true;this._restoreAndApplyShowModeFromSettings();}
showMode(){return this._showMode;}
setSecondIsSidebar(secondIsSidebar){this.contentElement.classList.toggle('shadow-split-widget-first-is-sidebar',!secondIsSidebar);this._secondIsSidebar=secondIsSidebar;}
sidebarSide(){if(this._showMode!==UI.SplitWidget.ShowMode.Both)
return null;return this._isVertical?(this._secondIsSidebar?'right':'left'):(this._secondIsSidebar?'bottom':'top');}
resizerElement(){return this._resizerElement;}
hideMain(animate){this._showOnly(this._sidebarWidget,this._mainWidget,this._sidebarElement,this._mainElement,animate);this._updateShowMode(UI.SplitWidget.ShowMode.OnlySidebar);}
hideSidebar(animate){this._showOnly(this._mainWidget,this._sidebarWidget,this._mainElement,this._sidebarElement,animate);this._updateShowMode(UI.SplitWidget.ShowMode.OnlyMain);}
setSidebarMinimized(minimized){this._sidebarMinimized=minimized;this.invalidateConstraints();}
isSidebarMinimized(){return this._sidebarMinimized;}
_showOnly(sideToShow,sideToHide,shadowToShow,shadowToHide,animate){this._cancelAnimation();function callback(){if(sideToShow){if(sideToShow===this._mainWidget)
this._mainWidget.show(this.element,this._sidebarWidget?this._sidebarWidget.element:null);else
this._sidebarWidget.show(this.element);}
if(sideToHide){this._detaching=true;sideToHide.detach();this._detaching=false;}
this._resizerElement.classList.add('hidden');shadowToShow.classList.remove('hidden');shadowToShow.classList.add('maximized');shadowToHide.classList.add('hidden');shadowToHide.classList.remove('maximized');this._removeAllLayoutProperties();this.doResize();}
if(animate)
this._animate(true,callback.bind(this));else
callback.call(this);this._sidebarSizeDIP=-1;this.setResizable(false);}
_removeAllLayoutProperties(){this._sidebarElement.style.removeProperty('flexBasis');this._mainElement.style.removeProperty('width');this._mainElement.style.removeProperty('height');this._sidebarElement.style.removeProperty('width');this._sidebarElement.style.removeProperty('height');this._resizerElement.style.removeProperty('left');this._resizerElement.style.removeProperty('right');this._resizerElement.style.removeProperty('top');this._resizerElement.style.removeProperty('bottom');this._resizerElement.style.removeProperty('margin-left');this._resizerElement.style.removeProperty('margin-right');this._resizerElement.style.removeProperty('margin-top');this._resizerElement.style.removeProperty('margin-bottom');}
showBoth(animate){if(this._showMode===UI.SplitWidget.ShowMode.Both)
animate=false;this._cancelAnimation();this._mainElement.classList.remove('maximized','hidden');this._sidebarElement.classList.remove('maximized','hidden');this._resizerElement.classList.remove('hidden');this.setResizable(true);this.suspendInvalidations();if(this._sidebarWidget)
this._sidebarWidget.show(this.element);if(this._mainWidget)
this._mainWidget.show(this.element,this._sidebarWidget?this._sidebarWidget.element:null);this.resumeInvalidations();this.setSecondIsSidebar(this._secondIsSidebar);this._sidebarSizeDIP=-1;this._updateShowMode(UI.SplitWidget.ShowMode.Both);this._updateLayout(animate);}
setResizable(resizable){this._resizerWidget.setEnabled(resizable);}
isResizable(){return this._resizerWidget.isEnabled();}
setSidebarSize(size){var sizeDIP=UI.zoomManager.cssToDIP(size);this._savedSidebarSizeDIP=sizeDIP;this._saveSetting();this._innerSetSidebarSizeDIP(sizeDIP,false,true);}
sidebarSize(){var sizeDIP=Math.max(0,this._sidebarSizeDIP);return UI.zoomManager.dipToCSS(sizeDIP);}
_totalSizeDIP(){if(!this._totalSizeCSS){this._totalSizeCSS=this._isVertical?this.contentElement.offsetWidth:this.contentElement.offsetHeight;this._totalSizeOtherDimensionCSS=this._isVertical?this.contentElement.offsetHeight:this.contentElement.offsetWidth;}
return UI.zoomManager.cssToDIP(this._totalSizeCSS);}
_updateShowMode(showMode){this._showMode=showMode;this._saveShowModeToSettings();this._updateShowHideSidebarButton();this.dispatchEventToListeners(UI.SplitWidget.Events.ShowModeChanged,showMode);this.invalidateConstraints();}
_innerSetSidebarSizeDIP(sizeDIP,animate,userAction){if(this._showMode!==UI.SplitWidget.ShowMode.Both||!this.isShowing())
return;sizeDIP=this._applyConstraints(sizeDIP,userAction);if(this._sidebarSizeDIP===sizeDIP)
return;if(!this._resizerElementSize){this._resizerElementSize=this._isVertical?this._resizerElement.offsetWidth:this._resizerElement.offsetHeight;}
this._removeAllLayoutProperties();var roundSizeCSS=Math.round(UI.zoomManager.dipToCSS(sizeDIP));var sidebarSizeValue=roundSizeCSS+'px';var mainSizeValue=(this._totalSizeCSS-roundSizeCSS)+'px';this._sidebarElement.style.flexBasis=sidebarSizeValue;if(this._isVertical){this._sidebarElement.style.width=sidebarSizeValue;this._mainElement.style.width=mainSizeValue;this._sidebarElement.style.height=this._totalSizeOtherDimensionCSS+'px';this._mainElement.style.height=this._totalSizeOtherDimensionCSS+'px';}else{this._sidebarElement.style.height=sidebarSizeValue;this._mainElement.style.height=mainSizeValue;this._sidebarElement.style.width=this._totalSizeOtherDimensionCSS+'px';this._mainElement.style.width=this._totalSizeOtherDimensionCSS+'px';}
if(this._isVertical){if(this._secondIsSidebar){this._resizerElement.style.right=sidebarSizeValue;this._resizerElement.style.marginRight=-this._resizerElementSize/2+'px';}else{this._resizerElement.style.left=sidebarSizeValue;this._resizerElement.style.marginLeft=-this._resizerElementSize/2+'px';}}else{if(this._secondIsSidebar){this._resizerElement.style.bottom=sidebarSizeValue;this._resizerElement.style.marginBottom=-this._resizerElementSize/2+'px';}else{this._resizerElement.style.top=sidebarSizeValue;this._resizerElement.style.marginTop=-this._resizerElementSize/2+'px';}}
this._sidebarSizeDIP=sizeDIP;if(animate){this._animate(false);}else{this.doResize();this.dispatchEventToListeners(UI.SplitWidget.Events.SidebarSizeChanged,this.sidebarSize());}}
_animate(reverse,callback){var animationTime=50;this._animationCallback=callback||null;var animatedMarginPropertyName;if(this._isVertical)
animatedMarginPropertyName=this._secondIsSidebar?'margin-right':'margin-left';else
animatedMarginPropertyName=this._secondIsSidebar?'margin-bottom':'margin-top';var marginFrom=reverse?'0':'-'+UI.zoomManager.dipToCSS(this._sidebarSizeDIP)+'px';var marginTo=reverse?'-'+UI.zoomManager.dipToCSS(this._sidebarSizeDIP)+'px':'0';this.contentElement.style.setProperty(animatedMarginPropertyName,marginFrom);if(!reverse){suppressUnused(this._mainElement.offsetWidth);suppressUnused(this._sidebarElement.offsetWidth);}
if(!reverse)
this._sidebarWidget.doResize();this.contentElement.style.setProperty('transition',animatedMarginPropertyName+' '+animationTime+'ms linear');var boundAnimationFrame;var startTime;function animationFrame(){this._animationFrameHandle=0;if(!startTime){this.contentElement.style.setProperty(animatedMarginPropertyName,marginTo);startTime=window.performance.now();}else if(window.performance.now()<startTime+animationTime){if(this._mainWidget)
this._mainWidget.doResize();}else{this._cancelAnimation();if(this._mainWidget)
this._mainWidget.doResize();this.dispatchEventToListeners(UI.SplitWidget.Events.SidebarSizeChanged,this.sidebarSize());return;}
this._animationFrameHandle=this.contentElement.window().requestAnimationFrame(boundAnimationFrame);}
boundAnimationFrame=animationFrame.bind(this);this._animationFrameHandle=this.contentElement.window().requestAnimationFrame(boundAnimationFrame);}
_cancelAnimation(){this.contentElement.style.removeProperty('margin-top');this.contentElement.style.removeProperty('margin-right');this.contentElement.style.removeProperty('margin-bottom');this.contentElement.style.removeProperty('margin-left');this.contentElement.style.removeProperty('transition');if(this._animationFrameHandle){this.contentElement.window().cancelAnimationFrame(this._animationFrameHandle);this._animationFrameHandle=0;}
if(this._animationCallback){this._animationCallback();this._animationCallback=null;}}
_applyConstraints(sidebarSize,userAction){var totalSize=this._totalSizeDIP();var zoomFactor=this._constraintsInDip?1:UI.zoomManager.zoomFactor();var constraints=this._sidebarWidget?this._sidebarWidget.constraints():new UI.Constraints();var minSidebarSize=this.isVertical()?constraints.minimum.width:constraints.minimum.height;if(!minSidebarSize)
minSidebarSize=UI.SplitWidget.MinPadding;minSidebarSize*=zoomFactor;if(this._sidebarMinimized)
sidebarSize=minSidebarSize;var preferredSidebarSize=this.isVertical()?constraints.preferred.width:constraints.preferred.height;if(!preferredSidebarSize)
preferredSidebarSize=UI.SplitWidget.MinPadding;preferredSidebarSize*=zoomFactor;if(sidebarSize<preferredSidebarSize)
preferredSidebarSize=Math.max(sidebarSize,minSidebarSize);preferredSidebarSize+=zoomFactor;constraints=this._mainWidget?this._mainWidget.constraints():new UI.Constraints();var minMainSize=this.isVertical()?constraints.minimum.width:constraints.minimum.height;if(!minMainSize)
minMainSize=UI.SplitWidget.MinPadding;minMainSize*=zoomFactor;var preferredMainSize=this.isVertical()?constraints.preferred.width:constraints.preferred.height;if(!preferredMainSize)
preferredMainSize=UI.SplitWidget.MinPadding;preferredMainSize*=zoomFactor;var savedMainSize=this.isVertical()?this._savedVerticalMainSize:this._savedHorizontalMainSize;if(savedMainSize!==null)
preferredMainSize=Math.min(preferredMainSize,savedMainSize*zoomFactor);if(userAction)
preferredMainSize=minMainSize;var totalPreferred=preferredMainSize+preferredSidebarSize;if(totalPreferred<=totalSize)
return Number.constrain(sidebarSize,preferredSidebarSize,totalSize-preferredMainSize);if(minMainSize+minSidebarSize<=totalSize){var delta=totalPreferred-totalSize;var sidebarDelta=delta*preferredSidebarSize/totalPreferred;sidebarSize=preferredSidebarSize-sidebarDelta;return Number.constrain(sidebarSize,minSidebarSize,totalSize-minMainSize);}
return Math.max(0,totalSize-minMainSize);}
wasShown(){this._forceUpdateLayout();UI.zoomManager.addEventListener(UI.ZoomManager.Events.ZoomChanged,this._onZoomChanged,this);}
willHide(){UI.zoomManager.removeEventListener(UI.ZoomManager.Events.ZoomChanged,this._onZoomChanged,this);}
onResize(){this._updateLayout();}
onLayout(){this._updateLayout();}
calculateConstraints(){if(this._showMode===UI.SplitWidget.ShowMode.OnlyMain)
return this._mainWidget?this._mainWidget.constraints():new UI.Constraints();if(this._showMode===UI.SplitWidget.ShowMode.OnlySidebar)
return this._sidebarWidget?this._sidebarWidget.constraints():new UI.Constraints();var mainConstraints=this._mainWidget?this._mainWidget.constraints():new UI.Constraints();var sidebarConstraints=this._sidebarWidget?this._sidebarWidget.constraints():new UI.Constraints();var min=UI.SplitWidget.MinPadding;if(this._isVertical){mainConstraints=mainConstraints.widthToMax(min).addWidth(1);sidebarConstraints=sidebarConstraints.widthToMax(min);return mainConstraints.addWidth(sidebarConstraints).heightToMax(sidebarConstraints);}else{mainConstraints=mainConstraints.heightToMax(min).addHeight(1);sidebarConstraints=sidebarConstraints.heightToMax(min);return mainConstraints.widthToMax(sidebarConstraints).addHeight(sidebarConstraints);}}
_onResizeStart(event){this._resizeStartSizeDIP=this._sidebarSizeDIP;}
_onResizeUpdate(event){var offset=event.data.currentPosition-event.data.startPosition;var offsetDIP=UI.zoomManager.cssToDIP(offset);var newSizeDIP=this._secondIsSidebar?this._resizeStartSizeDIP-offsetDIP:this._resizeStartSizeDIP+offsetDIP;var constrainedSizeDIP=this._applyConstraints(newSizeDIP,true);this._savedSidebarSizeDIP=constrainedSizeDIP;this._saveSetting();this._innerSetSidebarSizeDIP(constrainedSizeDIP,false,true);if(this.isVertical())
this._savedVerticalMainSize=this._totalSizeDIP()-this._sidebarSizeDIP;else
this._savedHorizontalMainSize=this._totalSizeDIP()-this._sidebarSizeDIP;}
_onResizeEnd(event){this._resizeStartSizeDIP=0;}
hideDefaultResizer(noSplitter){this.uninstallResizer(this._resizerElement);this._sidebarElement.classList.toggle('no-default-splitter',noSplitter);}
installResizer(resizerElement){this._resizerWidget.addElement(resizerElement);}
uninstallResizer(resizerElement){this._resizerWidget.removeElement(resizerElement);}
hasCustomResizer(){var elements=this._resizerWidget.elements();return elements.length>1||(elements.length===1&&elements[0]!==this._resizerElement);}
toggleResizer(resizer,on){if(on)
this.installResizer(resizer);else
this.uninstallResizer(resizer);}
_settingForOrientation(){var state=this._setting?this._setting.get():{};return this._isVertical?state.vertical:state.horizontal;}
_preferredSidebarSizeDIP(){var size=this._savedSidebarSizeDIP;if(!size){size=this._isVertical?this._defaultSidebarWidth:this._defaultSidebarHeight;if(0<size&&size<1)
size*=this._totalSizeDIP();}
return size;}
_restoreSidebarSizeFromSettings(){var settingForOrientation=this._settingForOrientation();this._savedSidebarSizeDIP=settingForOrientation?settingForOrientation.size:0;}
_restoreAndApplyShowModeFromSettings(){var orientationState=this._settingForOrientation();this._savedShowMode=orientationState&&orientationState.showMode?orientationState.showMode:this._showMode;this._showMode=this._savedShowMode;switch(this._savedShowMode){case UI.SplitWidget.ShowMode.Both:this.showBoth();break;case UI.SplitWidget.ShowMode.OnlyMain:this.hideSidebar();break;case UI.SplitWidget.ShowMode.OnlySidebar:this.hideMain();break;}}
_saveShowModeToSettings(){this._savedShowMode=this._showMode;this._saveSetting();}
_saveSetting(){if(!this._setting)
return;var state=this._setting.get();var orientationState=(this._isVertical?state.vertical:state.horizontal)||{};orientationState.size=this._savedSidebarSizeDIP;if(this._shouldSaveShowMode)
orientationState.showMode=this._savedShowMode;if(this._isVertical)
state.vertical=orientationState;else
state.horizontal=orientationState;this._setting.set(state);}
_forceUpdateLayout(){this._sidebarSizeDIP=-1;this._updateLayout();}
_onZoomChanged(event){this._forceUpdateLayout();}
createShowHideSidebarButton(title){this._showHideSidebarButtonTitle=Common.UIString(title);this._showHideSidebarButton=new UI.ToolbarButton('','');this._showHideSidebarButton.addEventListener(UI.ToolbarButton.Events.Click,buttonClicked,this);this._updateShowHideSidebarButton();function buttonClicked(event){if(this._showMode!==UI.SplitWidget.ShowMode.Both)
this.showBoth(true);else
this.hideSidebar(true);}
return this._showHideSidebarButton;}
_updateShowHideSidebarButton(){if(!this._showHideSidebarButton)
return;var sidebarHidden=this._showMode===UI.SplitWidget.ShowMode.OnlyMain;var glyph='';if(sidebarHidden){glyph=this.isVertical()?(this.isSidebarSecond()?'largeicon-show-right-sidebar':'largeicon-show-left-sidebar'):(this.isSidebarSecond()?'largeicon-show-bottom-sidebar':'largeicon-show-top-sidebar');}else{glyph=this.isVertical()?(this.isSidebarSecond()?'largeicon-hide-right-sidebar':'largeicon-hide-left-sidebar'):(this.isSidebarSecond()?'largeicon-hide-bottom-sidebar':'largeicon-hide-top-sidebar');}
this._showHideSidebarButton.setGlyph(glyph);this._showHideSidebarButton.setTitle(sidebarHidden?Common.UIString('Show %s',this._showHideSidebarButtonTitle):Common.UIString('Hide %s',this._showHideSidebarButtonTitle));}};UI.SplitWidget.SettingForOrientation;UI.SplitWidget.ShowMode={Both:'Both',OnlyMain:'OnlyMain',OnlySidebar:'OnlySidebar'};UI.SplitWidget.Events={SidebarSizeChanged:Symbol('SidebarSizeChanged'),ShowModeChanged:Symbol('ShowModeChanged')};UI.SplitWidget.MinPadding=20;;UI.TextPrompt=class extends Common.Object{constructor(){super();this._proxyElement;this._proxyElementDisplay='inline-block';this._autocompletionTimeout=UI.TextPrompt.DefaultAutocompletionTimeout;this._title='';this._queryRange=null;this._previousText='';this._currentSuggestion='';this._completionRequestId=0;this._ghostTextElement=createElementWithClass('span','auto-complete-text');}
initialize(completions,stopCharacters){this._loadCompletions=completions;this._completionStopCharacters=stopCharacters||' =:[({;,!+-*/&|^<>.';}
setAutocompletionTimeout(timeout){this._autocompletionTimeout=timeout;}
renderAsBlock(){this._proxyElementDisplay='block';}
attach(element){return this._attachInternal(element);}
attachAndStartEditing(element,blurListener){var proxyElement=this._attachInternal(element);this._startEditing(blurListener);return proxyElement;}
_attachInternal(element){if(this._proxyElement)
throw'Cannot attach an attached TextPrompt';this._element=element;this._boundOnKeyDown=this.onKeyDown.bind(this);this._boundOnInput=this.onInput.bind(this);this._boundOnMouseWheel=this.onMouseWheel.bind(this);this._boundClearAutocomplete=this.clearAutocomplete.bind(this);this._proxyElement=element.ownerDocument.createElement('span');var shadowRoot=UI.createShadowRootWithCoreStyles(this._proxyElement,'ui/textPrompt.css');this._contentElement=shadowRoot.createChild('div','text-prompt-root');this._contentElement.createChild('content');this._proxyElement.style.display=this._proxyElementDisplay;element.parentElement.insertBefore(this._proxyElement,element);this._proxyElement.appendChild(element);this._element.classList.add('text-prompt');this._element.addEventListener('keydown',this._boundOnKeyDown,false);this._element.addEventListener('input',this._boundOnInput,false);this._element.addEventListener('mousewheel',this._boundOnMouseWheel,false);this._element.addEventListener('selectstart',this._boundClearAutocomplete,false);this._element.addEventListener('blur',this._boundClearAutocomplete,false);this._suggestBox=new UI.SuggestBox(this,20,true);if(this._title)
this._proxyElement.title=this._title;return this._proxyElement;}
detach(){this._removeFromElement();this._focusRestorer.restore();this._proxyElement.parentElement.insertBefore(this._element,this._proxyElement);this._proxyElement.remove();delete this._proxyElement;this._element.classList.remove('text-prompt');}
textWithCurrentSuggestion(){var text=this.text();if(!this._queryRange)
return text;return text.substring(0,this._queryRange.startColumn)+this._currentSuggestion+
text.substring(this._queryRange.endColumn);}
text(){var text=this._element.textContent;if(this._ghostTextElement.parentNode){var addition=this._ghostTextElement.textContent;text=text.substring(0,text.length-addition.length);}
return text;}
setText(x){this.clearAutocomplete();if(!x){this._element.removeChildren();this._element.createChild('br');}else{this._element.textContent=x;}
this._previousText=this.text();this.moveCaretToEndOfPrompt();this._element.scrollIntoView();}
title(){return this._title;}
setTitle(title){this._title=title;if(this._proxyElement)
this._proxyElement.title=title;}
setPlaceholder(placeholder){if(placeholder)
this._element.setAttribute('data-placeholder',placeholder);else
this._element.removeAttribute('data-placeholder');}
_removeFromElement(){this.clearAutocomplete();this._element.removeEventListener('keydown',this._boundOnKeyDown,false);this._element.removeEventListener('input',this._boundOnInput,false);this._element.removeEventListener('selectstart',this._boundClearAutocomplete,false);this._element.removeEventListener('blur',this._boundClearAutocomplete,false);if(this._isEditing)
this._stopEditing();if(this._suggestBox)
this._suggestBox.hide();}
_startEditing(blurListener){this._isEditing=true;this._contentElement.classList.add('text-prompt-editing');if(blurListener){this._blurListener=blurListener;this._element.addEventListener('blur',this._blurListener,false);}
this._oldTabIndex=this._element.tabIndex;if(this._element.tabIndex<0)
this._element.tabIndex=0;this._focusRestorer=new UI.ElementFocusRestorer(this._element);if(!this.text())
this.autoCompleteSoon();}
_stopEditing(){this._element.tabIndex=this._oldTabIndex;if(this._blurListener)
this._element.removeEventListener('blur',this._blurListener,false);this._contentElement.classList.remove('text-prompt-editing');delete this._isEditing;}
onMouseWheel(event){}
onKeyDown(event){var handled=false;switch(event.key){case'Tab':handled=this.tabKeyPressed(event);break;case'ArrowLeft':case'Home':this.clearAutocomplete();break;case'ArrowRight':case'End':if(this._isCaretAtEndOfPrompt())
handled=this.acceptAutoComplete();else
this.clearAutocomplete();break;case'Escape':if(this._isSuggestBoxVisible()){this.clearAutocomplete();handled=true;}
break;case' ':if(event.ctrlKey&&!event.metaKey&&!event.altKey&&!event.shiftKey){this.autoCompleteSoon(true);handled=true;}
break;case'Alt':case'Meta':case'Shift':case'Control':break;}
if(!handled&&this._isSuggestBoxVisible())
handled=this._suggestBox.keyPressed(event);if(handled)
event.consume(true);}
onInput(event){var text=this.text();var hasCommonPrefix=text.startsWith(this._previousText)||this._previousText.startsWith(text);if(this._queryRange&&hasCommonPrefix)
this._queryRange.endColumn+=text.length-this._previousText.length;this._refreshGhostText();this._previousText=text;this.emit(new UI.TextPrompt.TextChangedEvent());this.autoCompleteSoon();}
acceptAutoComplete(){var result=false;if(this._isSuggestBoxVisible())
result=this._suggestBox.acceptSuggestion();if(!result)
result=this._acceptSuggestionInternal();return result;}
clearAutocomplete(){var beforeText=this.textWithCurrentSuggestion();if(this._isSuggestBoxVisible())
this._suggestBox.hide();this._clearAutocompleteTimeout();this._queryRange=null;this._refreshGhostText();if(beforeText!==this.textWithCurrentSuggestion())
this.emit(new UI.TextPrompt.TextChangedEvent());}
_refreshGhostText(){if(this._queryRange&&this._isCaretAtEndOfPrompt()&&this._currentSuggestion.startsWith(this.text().substring(this._queryRange.startColumn))){this._ghostTextElement.textContent=this._currentSuggestion.substring(this._queryRange.endColumn-this._queryRange.startColumn);this._element.appendChild(this._ghostTextElement);}else{this._ghostTextElement.remove();}}
_clearAutocompleteTimeout(){if(this._completeTimeout){clearTimeout(this._completeTimeout);delete this._completeTimeout;}
this._completionRequestId++;}
autoCompleteSoon(force){var immediately=this._isSuggestBoxVisible()||force;if(!this._completeTimeout){this._completeTimeout=setTimeout(this.complete.bind(this,force),immediately?0:this._autocompletionTimeout);}}
complete(force,reverse){this._clearAutocompleteTimeout();var selection=this._element.getComponentSelection();var selectionRange=selection&&selection.rangeCount?selection.getRangeAt(0):null;if(!selectionRange)
return;var shouldExit;if(!force&&!this._isCaretAtEndOfPrompt()&&!this._isSuggestBoxVisible()){shouldExit=true;}else if(!selection.isCollapsed){shouldExit=true;}else if(!force){var wordSuffixRange=selectionRange.startContainer.rangeOfWord(selectionRange.endOffset,this._completionStopCharacters,this._element,'forward');var autocompleteTextLength=this._ghostTextElement.parentNode?this._ghostTextElement.textContent.length:0;if(wordSuffixRange.toString().length!==autocompleteTextLength)
shouldExit=true;}
if(shouldExit){this.clearAutocomplete();return;}
var wordQueryRange=selectionRange.startContainer.rangeOfWord(selectionRange.startOffset,this._completionStopCharacters,this._element,'backward');var expressionRange=wordQueryRange.cloneRange();expressionRange.collapse(true);expressionRange.setStartBefore(this._proxyElement);this._loadCompletions(expressionRange.toString(),wordQueryRange.toString(),!!force).then(this._completionsReady.bind(this,++this._completionRequestId,selection,wordQueryRange,!!reverse,!!force));}
disableDefaultSuggestionForEmptyInput(){this._disableDefaultSuggestionForEmptyInput=true;}
_boxForAnchorAtStart(selection,textRange){var rangeCopy=selection.getRangeAt(0).cloneRange();var anchorElement=createElement('span');anchorElement.textContent='\u200B';textRange.insertNode(anchorElement);var box=anchorElement.boxInWindow(window);anchorElement.remove();selection.removeAllRanges();selection.addRange(rangeCopy);return box;}
_createRange(){return document.createRange();}
additionalCompletions(query){return[];}
_completionsReady(completionRequestId,selection,originalWordQueryRange,reverse,force,completions){if(this._completionRequestId!==completionRequestId)
return;var query=originalWordQueryRange.toString();var store=new Set();completions=completions.filter(item=>!store.has(item.text)&&!!store.add(item.text));if(query||force){if(query)
completions=completions.concat(this.additionalCompletions(query));else
completions=this.additionalCompletions(query).concat(completions);}
if(!completions.length){this.clearAutocomplete();return;}
var selectionRange=selection.getRangeAt(0);var fullWordRange=this._createRange();fullWordRange.setStart(originalWordQueryRange.startContainer,originalWordQueryRange.startOffset);fullWordRange.setEnd(selectionRange.endContainer,selectionRange.endOffset);if(query+selectionRange.toString()!==fullWordRange.toString())
return;var beforeRange=this._createRange();beforeRange.setStart(this._element,0);beforeRange.setEnd(fullWordRange.startContainer,fullWordRange.startOffset);this._queryRange=new Common.TextRange(0,beforeRange.toString().length,0,beforeRange.toString().length+fullWordRange.toString().length);var shouldSelect=!this._disableDefaultSuggestionForEmptyInput||this.text();if(this._suggestBox){this._suggestBox.updateSuggestions(this._boxForAnchorAtStart(selection,fullWordRange),completions,shouldSelect,!this._isCaretAtEndOfPrompt(),this.text());}}
applySuggestion(suggestion,isIntermediateSuggestion){if(!this._queryRange)
return;this._currentSuggestion=suggestion;this._refreshGhostText();if(isIntermediateSuggestion)
this.emit(new UI.TextPrompt.TextChangedEvent());}
acceptSuggestion(){this._acceptSuggestionInternal();}
_acceptSuggestionInternal(){if(!this._queryRange)
return false;this._element.textContent=this.textWithCurrentSuggestion();this.setDOMSelection(this._queryRange.startColumn+this._currentSuggestion.length,this._queryRange.startColumn+this._currentSuggestion.length);this.clearAutocomplete();this.emit(new UI.TextPrompt.TextChangedEvent());return true;}
setDOMSelection(startColumn,endColumn){this._element.normalize();var node=this._element.childNodes[0];if(!node||node===this._ghostTextElement)
return;var range=this._createRange();range.setStart(node,startColumn);range.setEnd(node,endColumn);var selection=this._element.getComponentSelection();selection.removeAllRanges();selection.addRange(range);}
_isSuggestBoxVisible(){return this._suggestBox&&this._suggestBox.visible();}
isCaretInsidePrompt(){var selection=this._element.getComponentSelection();var selectionRange=selection&&selection.rangeCount?selection.getRangeAt(0):null;if(!selectionRange||!selection.isCollapsed)
return false;return selectionRange.startContainer.isSelfOrDescendant(this._element);}
_isCaretAtEndOfPrompt(){var selection=this._element.getComponentSelection();var selectionRange=selection&&selection.rangeCount?selection.getRangeAt(0):null;if(!selectionRange||!selection.isCollapsed)
return false;var node=selectionRange.startContainer;if(!node.isSelfOrDescendant(this._element))
return false;if(node.nodeType===Node.TEXT_NODE&&selectionRange.startOffset<node.nodeValue.length)
return false;var foundNextText=false;while(node){if(node.nodeType===Node.TEXT_NODE&&node.nodeValue.length){if(foundNextText&&!this._ghostTextElement.isAncestor(node))
return false;foundNextText=true;}
node=node.traverseNextNode(this._element);}
return true;}
moveCaretToEndOfPrompt(){var selection=this._element.getComponentSelection();var selectionRange=this._createRange();var container=this._element;while(container.childNodes.length)
container=container.lastChild;var offset=container.nodeType===Node.TEXT_NODE?container.textContent.length:0;selectionRange.setStart(container,offset);selectionRange.setEnd(container,offset);selection.removeAllRanges();selection.addRange(selectionRange);}
tabKeyPressed(event){this.acceptAutoComplete();return true;}
proxyElementForTests(){return this._proxyElement||null;}};UI.TextPrompt.DefaultAutocompletionTimeout=250;UI.TextPrompt.TextChangedEvent=class{};;UI.ThrottledWidget=class extends UI.VBox{constructor(isWebComponent){super(isWebComponent);this._updateThrottler=new Common.Throttler(100);this._updateWhenVisible=false;}
doUpdate(){return Promise.resolve();}
update(){this._updateWhenVisible=!this.isShowing();if(this._updateWhenVisible)
return;this._updateThrottler.schedule(innerUpdate.bind(this));function innerUpdate(){if(this.isShowing())
return this.doUpdate();this._updateWhenVisible=true;return Promise.resolve();}}
wasShown(){super.wasShown();if(this._updateWhenVisible)
this.update();}};;UI.Toolbar=class{constructor(className,parentElement){this._items=[];this._reverse=false;this.element=parentElement?parentElement.createChild('div'):createElement('div');this.element.className=className;this.element.classList.add('toolbar');this._enabled=true;this._shadowRoot=UI.createShadowRootWithCoreStyles(this.element,'ui/toolbar.css');this._contentElement=this._shadowRoot.createChild('div','toolbar-shadow');this._insertionPoint=this._contentElement.createChild('content');}
static createActionButton(action,toggledOptions,untoggledOptions){var button=new UI.ToolbarToggle(action.title(),action.icon(),action.toggledIcon());button.setToggleWithRedColor(action.toggleWithRedColor());button.addEventListener(UI.ToolbarButton.Events.Click,action.execute,action);action.addEventListener(UI.Action.Events.Enabled,enabledChanged);action.addEventListener(UI.Action.Events.Toggled,toggled);var longClickController=null;var longClickButtons=null;var longClickGlyph=null;toggled();return button;function enabledChanged(event){button.setEnabled((event.data));}
function toggled(){button.setToggled(action.toggled());if(action.title())
UI.Tooltip.install(button.element,action.title(),action.id());updateOptions();}
function updateOptions(){var buttons=action.toggled()?(toggledOptions||null):(untoggledOptions||null);if(buttons&&buttons.length){if(!longClickController){longClickController=new UI.LongClickController(button.element,showOptions);longClickGlyph=UI.Icon.create('largeicon-longclick-triangle','long-click-glyph');button.element.appendChild(longClickGlyph);longClickButtons=buttons;}}else{if(longClickController){longClickController.dispose();longClickController=null;longClickGlyph.remove();longClickGlyph=null;longClickButtons=null;}}}
function showOptions(){var buttons=longClickButtons.slice();var mainButtonClone=new UI.ToolbarToggle(action.title(),action.icon(),action.toggledIcon());mainButtonClone.addEventListener(UI.ToolbarButton.Events.Click,clicked);function clicked(event){button._clicked((event.data));}
mainButtonClone.setToggled(action.toggled());buttons.push(mainButtonClone);var document=button.element.ownerDocument;document.documentElement.addEventListener('mouseup',mouseUp,false);var optionsGlassPane=new UI.GlassPane();optionsGlassPane.setBlockPointerEvents(true);optionsGlassPane.show(document);var optionsBar=new UI.Toolbar('fill',optionsGlassPane.contentElement);optionsBar._contentElement.classList.add('floating');const buttonHeight=26;var hostButtonPosition=button.element.boxInWindow().relativeToElement(UI.GlassPane.container(document));var topNotBottom=hostButtonPosition.y+buttonHeight*buttons.length<document.documentElement.offsetHeight;if(topNotBottom)
buttons=buttons.reverse();optionsBar.element.style.height=(buttonHeight*buttons.length)+'px';if(topNotBottom)
optionsBar.element.style.top=(hostButtonPosition.y-5)+'px';else
optionsBar.element.style.top=(hostButtonPosition.y-(buttonHeight*(buttons.length-1))-6)+'px';optionsBar.element.style.left=(hostButtonPosition.x-5)+'px';for(var i=0;i<buttons.length;++i){buttons[i].element.addEventListener('mousemove',mouseOver,false);buttons[i].element.addEventListener('mouseout',mouseOut,false);optionsBar.appendToolbarItem(buttons[i]);}
var hostButtonIndex=topNotBottom?0:buttons.length-1;buttons[hostButtonIndex].element.classList.add('emulate-active');function mouseOver(e){if(e.which!==1)
return;var buttonElement=e.target.enclosingNodeOrSelfWithClass('toolbar-item');buttonElement.classList.add('emulate-active');}
function mouseOut(e){if(e.which!==1)
return;var buttonElement=e.target.enclosingNodeOrSelfWithClass('toolbar-item');buttonElement.classList.remove('emulate-active');}
function mouseUp(e){if(e.which!==1)
return;optionsGlassPane.hide();document.documentElement.removeEventListener('mouseup',mouseUp,false);for(var i=0;i<buttons.length;++i){if(buttons[i].element.classList.contains('emulate-active')){buttons[i].element.classList.remove('emulate-active');buttons[i]._clicked(e);break;}}}}}
static createActionButtonForId(actionId){const action=UI.actionRegistry.action(actionId);return UI.Toolbar.createActionButton((action));}
makeWrappable(reverse,growVertically){this._contentElement.classList.add('wrappable');this._reverse=!!reverse;if(reverse)
this._contentElement.classList.add('wrappable-reverse');if(growVertically)
this._contentElement.classList.add('toolbar-grow-vertical');}
makeVertical(){this._contentElement.classList.add('vertical');}
makeBlueOnHover(){this._contentElement.classList.add('toolbar-blue-on-hover');}
makeToggledGray(){this._contentElement.classList.add('toolbar-toggled-gray');}
renderAsLinks(){this._contentElement.classList.add('toolbar-render-as-links');}
setEnabled(enabled){this._enabled=enabled;for(var item of this._items)
item._applyEnabledState(this._enabled&&item._enabled);}
appendToolbarItem(item){this._items.push(item);item._toolbar=this;if(!this._enabled)
item._applyEnabledState(false);if(this._reverse)
this._contentElement.insertBefore(item.element,this._insertionPoint.nextSibling);else
this._contentElement.insertBefore(item.element,this._insertionPoint);this._hideSeparatorDupes();}
appendSeparator(){this.appendToolbarItem(new UI.ToolbarSeparator());}
appendSpacer(){this.appendToolbarItem(new UI.ToolbarSeparator(true));}
appendText(text){this.appendToolbarItem(new UI.ToolbarText(text));}
removeToolbarItems(){for(var item of this._items)
delete item._toolbar;this._items=[];this._contentElement.removeChildren();this._insertionPoint=this._contentElement.createChild('content');}
setColor(color){var style=createElement('style');style.textContent='.toolbar-glyph { background-color: '+color+' !important }';this._shadowRoot.appendChild(style);}
setToggledColor(color){var style=createElement('style');style.textContent='.toolbar-button.toolbar-state-on .toolbar-glyph { background-color: '+color+' !important }';this._shadowRoot.appendChild(style);}
_hideSeparatorDupes(){if(!this._items.length)
return;var previousIsSeparator=false;var lastSeparator;var nonSeparatorVisible=false;for(var i=0;i<this._items.length;++i){if(this._items[i]instanceof UI.ToolbarSeparator){this._items[i].setVisible(!previousIsSeparator);previousIsSeparator=true;lastSeparator=this._items[i];continue;}
if(this._items[i].visible()){previousIsSeparator=false;lastSeparator=null;nonSeparatorVisible=true;}}
if(lastSeparator&&lastSeparator!==this._items.peekLast())
lastSeparator.setVisible(false);this.element.classList.toggle('hidden',!!lastSeparator&&lastSeparator.visible()&&!nonSeparatorVisible);}
appendLocationItems(location){var extensions=self.runtime.extensions(UI.ToolbarItem.Provider);var promises=[];for(var i=0;i<extensions.length;++i){if(extensions[i].descriptor()['location']===location)
promises.push(resolveItem(extensions[i]));}
Promise.all(promises).then(appendItemsInOrder.bind(this));function resolveItem(extension){var descriptor=extension.descriptor();if(descriptor['separator'])
return Promise.resolve((new UI.ToolbarSeparator()));if(descriptor['actionId']){return Promise.resolve((UI.Toolbar.createActionButtonForId(descriptor['actionId'])));}
return extension.instance().then(fetchItemFromProvider);function fetchItemFromProvider(provider){return(provider).item();}}
function appendItemsInOrder(items){for(var i=0;i<items.length;++i){var item=items[i];if(item)
this.appendToolbarItem(item);}}}};UI.ToolbarItem=class extends Common.Object{constructor(element){super();this.element=element;this.element.classList.add('toolbar-item');this._visible=true;this._enabled=true;this.element.addEventListener('mouseenter',this._mouseEnter.bind(this),false);this.element.addEventListener('mouseleave',this._mouseLeave.bind(this),false);}
setTitle(title){if(this._title===title)
return;this._title=title;UI.Tooltip.install(this.element,title);}
_mouseEnter(){this.element.classList.add('hover');}
_mouseLeave(){this.element.classList.remove('hover');}
setEnabled(value){if(this._enabled===value)
return;this._enabled=value;this._applyEnabledState(this._enabled&&(!this._toolbar||this._toolbar._enabled));}
_applyEnabledState(enabled){this.element.disabled=!enabled;}
visible(){return this._visible;}
setVisible(x){if(this._visible===x)
return;this.element.classList.toggle('hidden',!x);this._visible=x;if(this._toolbar&&!(this instanceof UI.ToolbarSeparator))
this._toolbar._hideSeparatorDupes();}
setRightAligned(alignRight){this.element.classList.toggle('toolbar-item-right-aligned',alignRight);}};UI.ToolbarText=class extends UI.ToolbarItem{constructor(text){super(createElementWithClass('div','toolbar-text'));this.element.classList.add('toolbar-text');this.setText(text||'');}
setText(text){this.element.textContent=text;}};UI.ToolbarButton=class extends UI.ToolbarItem{constructor(title,glyph,text){super(createElementWithClass('button','toolbar-button'));this.element.addEventListener('click',this._clicked.bind(this),false);this.element.addEventListener('mousedown',this._mouseDown.bind(this),false);this.element.addEventListener('mouseup',this._mouseUp.bind(this),false);this._glyphElement=UI.Icon.create('','toolbar-glyph hidden');this.element.appendChild(this._glyphElement);this._textElement=this.element.createChild('div','toolbar-text hidden');this.setTitle(title);if(glyph)
this.setGlyph(glyph);this.setText(text||'');this._title='';}
setText(text){if(this._text===text)
return;this._textElement.textContent=text;this._textElement.classList.toggle('hidden',!text);this._text=text;}
setGlyph(glyph){if(this._glyph===glyph)
return;this._glyphElement.setIconType(glyph);this._glyphElement.classList.toggle('hidden',!glyph);this.element.classList.toggle('toolbar-has-glyph',!!glyph);this._glyph=glyph;}
setBackgroundImage(iconURL){this.element.style.backgroundImage='url('+iconURL+')';}
turnIntoSelect(width){this.element.classList.add('toolbar-has-dropdown');var dropdownArrowIcon=UI.Icon.create('smallicon-dropdown-arrow','toolbar-dropdown-arrow');this.element.appendChild(dropdownArrowIcon);if(width)
this.element.style.width=width+'px';}
_clicked(event){this.dispatchEventToListeners(UI.ToolbarButton.Events.Click,event);event.consume();}
_mouseDown(event){this.dispatchEventToListeners(UI.ToolbarButton.Events.MouseDown,event);}
_mouseUp(event){this.dispatchEventToListeners(UI.ToolbarButton.Events.MouseUp,event);}};UI.ToolbarButton.Events={Click:Symbol('Click'),MouseDown:Symbol('MouseDown'),MouseUp:Symbol('MouseUp')};UI.ToolbarInput=class extends UI.ToolbarItem{constructor(placeholder,growFactor,shrinkFactor,isSearchField){super(createElementWithClass('div','toolbar-input'));this.input=this.element.createChild('input');this.input.addEventListener('focus',()=>this.element.classList.add('focused'));this.input.addEventListener('blur',()=>this.element.classList.remove('focused'));this.input.addEventListener('input',()=>this._onChangeCallback(),false);this._isSearchField=!!isSearchField;if(growFactor)
this.element.style.flexGrow=growFactor;if(shrinkFactor)
this.element.style.flexShrink=shrinkFactor;if(placeholder)
this.input.setAttribute('placeholder',placeholder);if(isSearchField)
this._setupSearchControls();this._updateEmptyStyles();}
_setupSearchControls(){var clearButton=this.element.createChild('div','toolbar-input-clear-button');clearButton.appendChild(UI.Icon.create('smallicon-clear-input','search-cancel-button'));clearButton.addEventListener('click',()=>this._internalSetValue('',true));this.input.addEventListener('keydown',event=>this._onKeydownCallback(event));}
setValue(value){this._internalSetValue(value,false);}
_internalSetValue(value,notify){this.input.value=value;if(notify)
this._onChangeCallback();this._updateEmptyStyles();}
value(){return this.input.value;}
_onKeydownCallback(event){if(!this._isSearchField||!isEscKey(event)||!this.input.value)
return;this._internalSetValue('',true);event.consume(true);}
_onChangeCallback(){this._updateEmptyStyles();this.dispatchEventToListeners(UI.ToolbarInput.Event.TextChanged,this.input.value);}
_updateEmptyStyles(){this.element.classList.toggle('toolbar-input-empty',!this.input.value);}};UI.ToolbarInput.Event={TextChanged:Symbol('TextChanged')};UI.ToolbarToggle=class extends UI.ToolbarButton{constructor(title,glyph,toggledGlyph){super(title,glyph,'');this._toggled=false;this._untoggledGlyph=glyph;this._toggledGlyph=toggledGlyph;this.element.classList.add('toolbar-state-off');UI.ARIAUtils.setPressed(this.element,false);}
toggled(){return this._toggled;}
setToggled(toggled){if(this._toggled===toggled)
return;this._toggled=toggled;this.element.classList.toggle('toolbar-state-on',toggled);this.element.classList.toggle('toolbar-state-off',!toggled);UI.ARIAUtils.setPressed(this.element,toggled);if(this._toggledGlyph&&this._untoggledGlyph)
this.setGlyph(toggled?this._toggledGlyph:this._untoggledGlyph);}
setDefaultWithRedColor(withRedColor){this.element.classList.toggle('toolbar-default-with-red-color',withRedColor);}
setToggleWithRedColor(toggleWithRedColor){this.element.classList.toggle('toolbar-toggle-with-red-color',toggleWithRedColor);}};UI.ToolbarMenuButton=class extends UI.ToolbarButton{constructor(contextMenuHandler,useSoftMenu){super('','largeicon-menu');this._contextMenuHandler=contextMenuHandler;this._useSoftMenu=!!useSoftMenu;}
_mouseDown(event){if(event.buttons!==1){super._mouseDown(event);return;}
if(!this._triggerTimeout)
this._triggerTimeout=setTimeout(this._trigger.bind(this,event),200);}
_trigger(event){delete this._triggerTimeout;if(this._lastTriggerTime&&Date.now()-this._lastTriggerTime<300)
return;var contextMenu=new UI.ContextMenu(event,this._useSoftMenu,this.element.totalOffsetLeft(),this.element.totalOffsetTop()+this.element.offsetHeight);this._contextMenuHandler(contextMenu);contextMenu.show();this._lastTriggerTime=Date.now();}
_clicked(event){if(!this._triggerTimeout)
return;clearTimeout(this._triggerTimeout);this._trigger(event);}};UI.ToolbarSettingToggle=class extends UI.ToolbarToggle{constructor(setting,glyph,title,toggledTitle){super(title,glyph);this._defaultTitle=title;this._toggledTitle=toggledTitle||title;this._setting=setting;this._settingChanged();this._setting.addChangeListener(this._settingChanged,this);}
_settingChanged(){var toggled=this._setting.get();this.setToggled(toggled);this.setTitle(toggled?this._toggledTitle:this._defaultTitle);}
_clicked(event){this._setting.set(!this.toggled());super._clicked(event);}};UI.ToolbarSeparator=class extends UI.ToolbarItem{constructor(spacer){super(createElementWithClass('div',spacer?'toolbar-spacer':'toolbar-divider'));}};UI.ToolbarItem.Provider=function(){};UI.ToolbarItem.Provider.prototype={item(){}};UI.ToolbarItem.ItemsProvider=function(){};UI.ToolbarItem.ItemsProvider.prototype={toolbarItems(){}};UI.ToolbarComboBox=class extends UI.ToolbarItem{constructor(changeHandler,className){super(createElementWithClass('span','toolbar-select-container'));this._selectElement=this.element.createChild('select','toolbar-item');var dropdownArrowIcon=UI.Icon.create('smallicon-dropdown-arrow','toolbar-dropdown-arrow');this.element.appendChild(dropdownArrowIcon);if(changeHandler)
this._selectElement.addEventListener('change',changeHandler,false);if(className)
this._selectElement.classList.add(className);}
selectElement(){return(this._selectElement);}
size(){return this._selectElement.childElementCount;}
options(){return Array.prototype.slice.call(this._selectElement.children,0);}
addOption(option){this._selectElement.appendChild(option);}
createOption(label,title,value){var option=this._selectElement.createChild('option');option.text=label;if(title)
option.title=title;if(typeof value!=='undefined')
option.value=value;return option;}
_applyEnabledState(enabled){super._applyEnabledState(enabled);this._selectElement.disabled=!enabled;}
removeOption(option){this._selectElement.removeChild(option);}
removeOptions(){this._selectElement.removeChildren();}
selectedOption(){if(this._selectElement.selectedIndex>=0)
return this._selectElement[this._selectElement.selectedIndex];return null;}
select(option){this._selectElement.selectedIndex=Array.prototype.indexOf.call((this._selectElement),option);}
setSelectedIndex(index){this._selectElement.selectedIndex=index;}
selectedIndex(){return this._selectElement.selectedIndex;}
setMaxWidth(width){this._selectElement.style.maxWidth=width+'px';}};UI.ToolbarSettingComboBox=class extends UI.ToolbarComboBox{constructor(options,setting,optGroup){super(null);this._setting=setting;this._options=options;this._selectElement.addEventListener('change',this._valueChanged.bind(this),false);var optionContainer=this._selectElement;var optGroupElement=optGroup?this._selectElement.createChild('optgroup'):null;if(optGroupElement){optGroupElement.label=optGroup;optionContainer=optGroupElement;}
for(var i=0;i<options.length;++i){var dataOption=options[i];var option=this.createOption(dataOption.label,dataOption.title,dataOption.value);optionContainer.appendChild(option);if(setting.get()===dataOption.value)
this.setSelectedIndex(i);}
setting.addChangeListener(this._settingChanged,this);}
value(){return this._options[this.selectedIndex()].value;}
_settingChanged(){if(this._muteSettingListener)
return;var value=this._setting.get();for(var i=0;i<this._options.length;++i){if(value===this._options[i].value){this.setSelectedIndex(i);break;}}}
_valueChanged(event){var option=this._options[this.selectedIndex()];this._muteSettingListener=true;this._setting.set(option.value);this._muteSettingListener=false;}};UI.ToolbarCheckbox=class extends UI.ToolbarItem{constructor(text,tooltip,listener){super(UI.createCheckboxLabel(text));this.element.classList.add('checkbox');this.inputElement=this.element.checkboxElement;if(tooltip)
this.element.title=tooltip;if(listener)
this.inputElement.addEventListener('click',listener,false);}
checked(){return this.inputElement.checked;}
setChecked(value){this.inputElement.checked=value;}
_applyEnabledState(enabled){super._applyEnabledState(enabled);this.inputElement.disabled=!enabled;}};UI.ToolbarSettingCheckbox=class extends UI.ToolbarCheckbox{constructor(setting,tooltip,alternateTitle){super(alternateTitle||setting.title()||'',tooltip);UI.SettingsUI.bindCheckbox(this.inputElement,setting);}};;UI.Tooltip=class{constructor(doc){this.element=doc.body.createChild('div');this._shadowRoot=UI.createShadowRootWithCoreStyles(this.element,'ui/tooltip.css');this._tooltipElement=this._shadowRoot.createChild('div','tooltip');doc.addEventListener('mousemove',this._mouseMove.bind(this),true);doc.addEventListener('mousedown',this._hide.bind(this,true),true);doc.addEventListener('mouseleave',this._hide.bind(this,false),true);doc.addEventListener('keydown',this._hide.bind(this,true),true);UI.zoomManager.addEventListener(UI.ZoomManager.Events.ZoomChanged,this._reset,this);doc.defaultView.addEventListener('resize',this._reset.bind(this),false);}
static installHandler(doc){new UI.Tooltip(doc);}
static install(element,tooltipContent,actionId,options){if(!tooltipContent){delete element[UI.Tooltip._symbol];return;}
element[UI.Tooltip._symbol]={content:tooltipContent,actionId:actionId,options:options||{}};}
static addNativeOverrideContainer(element){UI.Tooltip._nativeOverrideContainer.push(element);}
_mouseMove(event){var mouseEvent=(event);var path=mouseEvent.path;if(!path||mouseEvent.buttons!==0||(mouseEvent.movementX===0&&mouseEvent.movementY===0))
return;if(this._anchorElement&&path.indexOf(this._anchorElement)===-1)
this._hide(false);for(var element of path){if(element===this._anchorElement){return;}else if(element[UI.Tooltip._symbol]){this._show(element,mouseEvent);return;}}}
_show(anchorElement,event){var tooltip=anchorElement[UI.Tooltip._symbol];this._anchorElement=anchorElement;this._tooltipElement.removeChildren();for(var element of UI.Tooltip._nativeOverrideContainer){if(this._anchorElement.isSelfOrDescendant(element)){Object.defineProperty(this._anchorElement,'title',UI.Tooltip._nativeTitle);this._anchorElement.title=tooltip.content;return;}}
if(typeof tooltip.content==='string')
this._tooltipElement.setTextContentTruncatedIfNeeded(tooltip.content);else
this._tooltipElement.appendChild(tooltip.content);if(tooltip.actionId){var shortcuts=UI.shortcutRegistry.shortcutDescriptorsForAction(tooltip.actionId);for(var shortcut of shortcuts){var shortcutElement=this._tooltipElement.createChild('div','tooltip-shortcut');shortcutElement.textContent=shortcut.name;}}
this._tooltipElement.classList.add('shown');this._tooltipElement.positionAt(0,0);var now=Date.now();var instant=(this._tooltipLastClosed&&now-this._tooltipLastClosed<UI.Tooltip.Timing.InstantThreshold);this._tooltipElement.classList.toggle('instant',instant);this._tooltipLastOpened=instant?now:now+UI.Tooltip.Timing.OpeningDelay;var container=UI.GlassPane.container((anchorElement.ownerDocument));var containerBox=container.boxInWindow(this.element.window());var anchorBox=this._anchorElement.boxInWindow(this.element.window());const anchorOffset=2;const pageMargin=2;var cursorOffset=10;this._tooltipElement.classList.toggle('tooltip-breakword',!this._tooltipElement.textContent.match('\\s'));this._tooltipElement.style.maxWidth=(containerBox.width-pageMargin*2)+'px';this._tooltipElement.style.maxHeight='';var tooltipWidth=this._tooltipElement.offsetWidth;var tooltipHeight=this._tooltipElement.offsetHeight;var anchorTooltipAtElement=this._anchorElement.nodeName==='BUTTON'||this._anchorElement.nodeName==='LABEL';var tooltipX=anchorTooltipAtElement?anchorBox.x:event.x+cursorOffset;tooltipX=Number.constrain(tooltipX,containerBox.x+pageMargin,containerBox.x+containerBox.width-tooltipWidth-pageMargin);var tooltipY;if(!anchorTooltipAtElement){tooltipY=event.y+cursorOffset+tooltipHeight<containerBox.y+containerBox.height?event.y+cursorOffset:event.y-tooltipHeight;}else{var onBottom=anchorBox.y+anchorOffset+anchorBox.height+tooltipHeight<containerBox.y+containerBox.height;tooltipY=onBottom?anchorBox.y+anchorBox.height+anchorOffset:anchorBox.y-tooltipHeight-anchorOffset;}
this._tooltipElement.positionAt(tooltipX,tooltipY);}
_hide(removeInstant){delete this._anchorElement;this._tooltipElement.classList.remove('shown');if(Date.now()>this._tooltipLastOpened)
this._tooltipLastClosed=Date.now();if(removeInstant)
delete this._tooltipLastClosed;}
_reset(){this._hide(true);this._tooltipElement.positionAt(0,0);this._tooltipElement.style.maxWidth='0';this._tooltipElement.style.maxHeight='0';}};UI.Tooltip.Timing={'InstantThreshold':300,'OpeningDelay':600};UI.Tooltip._symbol=Symbol('Tooltip');UI.Tooltip._nativeOverrideContainer=[];UI.Tooltip._nativeTitle=(Object.getOwnPropertyDescriptor(HTMLElement.prototype,'title'));Object.defineProperty(HTMLElement.prototype,'title',{get:function(){var tooltip=this[UI.Tooltip._symbol];return tooltip?tooltip.content:'';},set:function(x){UI.Tooltip.install(this,x);}});;UI.SuggestBoxDelegate=function(){};UI.SuggestBoxDelegate.prototype={applySuggestion(suggestion,isIntermediateSuggestion){},acceptSuggestion(){},};UI.SuggestBox=class{constructor(suggestBoxDelegate,maxItemsHeight,captureEnter){this._suggestBoxDelegate=suggestBoxDelegate;this._maxItemsHeight=maxItemsHeight;this._captureEnter=captureEnter;this._rowHeight=17;this._userInteracted=false;this._userEnteredText='';this._defaultSelectionIsDimmed=false;this._onlyCompletion=null;this._list=new UI.ListControl(this,UI.ListMode.EqualHeightItems);this._element=this._list.element;this._element.classList.add('suggest-box');this._element.addEventListener('mousedown',event=>event.preventDefault(),true);this._glassPane=new UI.GlassPane();this._glassPane.setAnchorBehavior(UI.GlassPane.AnchorBehavior.PreferBottom);this._glassPane.setSetOutsideClickCallback(this.hide.bind(this));var shadowRoot=UI.createShadowRootWithCoreStyles(this._glassPane.contentElement,'ui/suggestBox.css');shadowRoot.appendChild(this._element);}
setDefaultSelectionIsDimmed(value){this._defaultSelectionIsDimmed=value;this._element.classList.toggle('default-selection-is-dimmed',value);}
_setUserInteracted(value){this._userInteracted=value;this._element.classList.toggle('user-has-interacted',value);}
visible(){return this._glassPane.isShowing();}
setPosition(anchorBox){this._glassPane.setContentAnchorBox(anchorBox);}
_updateMaxSize(items){var maxWidth=this._maxWidth(items);var length=this._maxItemsHeight?Math.min(this._maxItemsHeight,items.length):items.length;var maxHeight=length*this._rowHeight;this._glassPane.setMaxContentSize(new UI.Size(maxWidth,maxHeight));}
_maxWidth(items){var kMaxWidth=300;if(!items.length)
return kMaxWidth;var maxItem;var maxLength=-Infinity;for(var i=0;i<items.length;i++){var length=(items[i].title||items[i].text).length+(items[i].subtitle||'').length;if(length>maxLength){maxLength=length;maxItem=items[i];}}
var element=this.createElementForItem((maxItem));return Math.min(kMaxWidth,UI.measurePreferredSize(element,this._element).width);}
_show(){if(this.visible())
return;this._glassPane.show(document);this._rowHeight=UI.measurePreferredSize(this.createElementForItem({text:'1',subtitle:'12'}),this._element).height;}
hide(){if(!this.visible())
return;this._setUserInteracted(false);this._glassPane.hide();}
_applySuggestion(isIntermediateSuggestion){if(this._onlyCompletion){this._suggestBoxDelegate.applySuggestion(this._onlyCompletion,isIntermediateSuggestion);return true;}
if(!this.visible()||!this._list.selectedItem())
return false;var suggestion=this._list.selectedItem().text;if(!suggestion)
return false;this._suggestBoxDelegate.applySuggestion(suggestion,isIntermediateSuggestion);return true;}
acceptSuggestion(){var result=this._applySuggestion();this.hide();if(!result)
return false;this._suggestBoxDelegate.acceptSuggestion();return true;}
createElementForItem(item){var query=this._userEnteredText;var element=createElementWithClass('div','suggest-box-content-item source-code');if(item.iconType){var icon=UI.Icon.create(item.iconType,'suggestion-icon');element.appendChild(icon);}
if(item.isSecondary)
element.classList.add('secondary');element.tabIndex=-1;var maxTextLength=50+query.length;var displayText=(item.title||item.text).trimEnd(maxTextLength);var titleElement=element.createChild('span','suggestion-title');var index=displayText.toLowerCase().indexOf(query.toLowerCase());if(index>0)
titleElement.createChild('span').textContent=displayText.substring(0,index);if(index>-1)
titleElement.createChild('span','query').textContent=displayText.substring(index,index+query.length);titleElement.createChild('span').textContent=displayText.substring(index>-1?index+query.length:0);titleElement.createChild('span','spacer');if(item.subtitle){var subtitleElement=element.createChild('span','suggestion-subtitle');subtitleElement.textContent=item.subtitle.trimEnd(maxTextLength-displayText.length);}
element.addEventListener('click',event=>{this._list.selectItem(item);this._setUserInteracted(true);event.consume(true);this.acceptSuggestion();});return element;}
heightForItem(item){return this._rowHeight;}
isItemSelectable(item){return true;}
selectedItemChanged(from,to,fromElement,toElement){if(fromElement)
fromElement.classList.remove('selected','force-white-icons');if(toElement){toElement.classList.add('selected');if(fromElement||this._userInteracted||!this._defaultSelectionIsDimmed)
toElement.classList.add('force-white-icons');}
if(!to)
return;this._applySuggestion(true);}
_canShowBox(completions,canShowForSingleItem,userEnteredText){if(!completions||!completions.length)
return false;if(completions.length>1)
return true;if(!completions[0].text.startsWith(userEnteredText))
return true;return canShowForSingleItem&&completions[0].text!==userEnteredText;}
updateSuggestions(anchorBox,completions,selectHighestPriority,canShowForSingleItem,userEnteredText){this._onlyCompletion=null;if(this._canShowBox(completions,canShowForSingleItem,userEnteredText)){this._userEnteredText=userEnteredText;this._show();this._updateMaxSize(completions);this._glassPane.setContentAnchorBox(anchorBox);this._list.invalidateItemHeight();this._list.replaceAllItems(completions);if(selectHighestPriority){var highestPriorityItem=completions[0];var highestPriority=completions[0].priority||0;for(var i=0;i<completions.length;i++){var priority=completions[i].priority||0;if(highestPriority<priority){highestPriority=priority;highestPriorityItem=completions[i];}}
this._list.selectItem(highestPriorityItem,true);}}else{if(completions.length===1){this._onlyCompletion=completions[0].text;this._applySuggestion(true);}
this.hide();}}
keyPressed(event){var selected=false;switch(event.key){case'Enter':return this.enterKeyPressed();case'ArrowUp':selected=this._list.selectPreviousItem(true,false);break;case'ArrowDown':selected=this._list.selectNextItem(true,false);break;case'PageUp':selected=this._list.selectItemPreviousPage(false);break;case'PageDown':selected=this._list.selectItemNextPage(false);break;default:return false;}
if(selected){this._setUserInteracted(true);return true;}
return false;}
enterKeyPressed(){if(!this._userInteracted&&this._captureEnter)
return false;var hasSelectedItem=!!this._list.selectedItem()||!!this._onlyCompletion;this.acceptSuggestion();return hasSelectedItem;}};UI.SuggestBox.Suggestion;UI.SuggestBox.Suggestions;;UI.TabbedPane=class extends UI.VBox{constructor(){super(true);this.registerRequiredCSS('ui/tabbedPane.css');this.element.classList.add('tabbed-pane');this.contentElement.classList.add('tabbed-pane-shadow');this.contentElement.tabIndex=-1;this._headerElement=this.contentElement.createChild('div','tabbed-pane-header');this._headerContentsElement=this._headerElement.createChild('div','tabbed-pane-header-contents');this._tabSlider=createElementWithClass('div','tabbed-pane-tab-slider');this._tabsElement=this._headerContentsElement.createChild('div','tabbed-pane-header-tabs');this._tabsElement.setAttribute('role','tablist');this._contentElement=this.contentElement.createChild('div','tabbed-pane-content');this._contentElement.setAttribute('role','tabpanel');this._contentElement.createChild('content');this._tabs=[];this._tabsHistory=[];this._tabsById=new Map();this._currentTabLocked=false;this._autoSelectFirstItemOnShow=true;this._dropDownButton=this._createDropDownButton();UI.zoomManager.addEventListener(UI.ZoomManager.Events.ZoomChanged,this._zoomChanged,this);}
setAccessibleName(name){UI.ARIAUtils.setAccessibleName(this._tabsElement,name);}
setCurrentTabLocked(locked){this._currentTabLocked=locked;this._headerElement.classList.toggle('locked',this._currentTabLocked);}
setAutoSelectFirstItemOnShow(autoSelect){this._autoSelectFirstItemOnShow=autoSelect;}
get visibleView(){return this._currentTab?this._currentTab.view:null;}
tabIds(){return this._tabs.map(tab=>tab._id);}
tabIndex(tabId){return this._tabs.findIndex(tab=>tab.id===tabId);}
tabViews(){return this._tabs.map(tab=>tab.view);}
tabView(tabId){return this._tabsById.has(tabId)?this._tabsById.get(tabId).view:null;}
get selectedTabId(){return this._currentTab?this._currentTab.id:null;}
setShrinkableTabs(shrinkableTabs){this._shrinkableTabs=shrinkableTabs;}
setVerticalTabLayout(verticalTabLayout){this._verticalTabLayout=verticalTabLayout;this.contentElement.classList.add('vertical-tab-layout');this.invalidateConstraints();}
setCloseableTabs(closeableTabs){this._closeableTabs=closeableTabs;}
focus(){if(this.visibleView)
this.visibleView.focus();else
this.contentElement.focus();}
headerElement(){return this._headerElement;}
isTabCloseable(id){var tab=this._tabsById.get(id);return tab?tab.isCloseable():false;}
setTabDelegate(delegate){var tabs=this._tabs.slice();for(var i=0;i<tabs.length;++i)
tabs[i].setDelegate(delegate);this._delegate=delegate;}
appendTab(id,tabTitle,view,tabTooltip,userGesture,isCloseable,index){isCloseable=typeof isCloseable==='boolean'?isCloseable:this._closeableTabs;var tab=new UI.TabbedPaneTab(this,id,tabTitle,isCloseable,view,tabTooltip);tab.setDelegate(this._delegate);console.assert(!this._tabsById.has(id),`Tabbed pane already contains a tab with id '${id}'`);this._tabsById.set(id,tab);if(index!==undefined)
this._tabs.splice(index,0,tab);else
this._tabs.push(tab);this._tabsHistory.push(tab);if(this._tabsHistory[0]===tab&&this.isShowing())
this.selectTab(tab.id,userGesture);this._updateTabElements();}
closeTab(id,userGesture){this.closeTabs([id],userGesture);}
closeTabs(ids,userGesture){var focused=this.hasFocus();for(var i=0;i<ids.length;++i)
this._innerCloseTab(ids[i],userGesture);this._updateTabElements();if(this._tabsHistory.length)
this.selectTab(this._tabsHistory[0].id,false);if(focused)
this.focus();}
_innerCloseTab(id,userGesture){if(!this._tabsById.has(id))
return;if(userGesture&&!this._tabsById.get(id)._closeable)
return;if(this._currentTab&&this._currentTab.id===id)
this._hideCurrentTab();var tab=this._tabsById.get(id);this._tabsById.delete(id);this._tabsHistory.splice(this._tabsHistory.indexOf(tab),1);this._tabs.splice(this._tabs.indexOf(tab),1);if(tab._shown)
this._hideTabElement(tab);var eventData={tabId:id,view:tab.view,isUserGesture:userGesture};this.dispatchEventToListeners(UI.TabbedPane.Events.TabClosed,eventData);return true;}
hasTab(tabId){return this._tabsById.has(tabId);}
allTabs(){return this._tabs.map(function(tab){return tab.id;});}
otherTabs(id){var result=[];for(var i=0;i<this._tabs.length;++i){if(this._tabs[i].id!==id)
result.push(this._tabs[i].id);}
return result;}
_tabsToTheRight(id){var index=-1;for(var i=0;i<this._tabs.length;++i){if(this._tabs[i].id===id){index=i;break;}}
if(index===-1)
return[];return this._tabs.slice(index+1).map(function(tab){return tab.id;});}
selectTab(id,userGesture){if(this._currentTabLocked)
return false;var focused=this.hasFocus();var tab=this._tabsById.get(id);if(!tab)
return false;if(this._currentTab&&this._currentTab.id===id)
return true;this.suspendInvalidations();this._hideCurrentTab();this._showTab(tab);this.resumeInvalidations();this._currentTab=tab;this._tabsHistory.splice(this._tabsHistory.indexOf(tab),1);this._tabsHistory.splice(0,0,tab);this._updateTabElements();if(focused)
this.focus();var eventData={tabId:id,view:tab.view,isUserGesture:userGesture};this.dispatchEventToListeners(UI.TabbedPane.Events.TabSelected,eventData);return true;}
selectNextTab(){var index=this._tabs.indexOf(this._currentTab);var nextIndex=mod(index+1,this._tabs.length);this.selectTab(this._tabs[nextIndex].id,true);}
selectPrevTab(){var index=this._tabs.indexOf(this._currentTab);var nextIndex=mod(index-1,this._tabs.length);this.selectTab(this._tabs[nextIndex].id,true);}
lastOpenedTabIds(tabsCount){function tabToTabId(tab){return tab.id;}
return this._tabsHistory.slice(0,tabsCount).map(tabToTabId);}
setTabIcon(id,icon){var tab=this._tabsById.get(id);tab._setIcon(icon);this._updateTabElements();}
setTabEnabled(id,enabled){var tab=this._tabsById.get(id);tab.tabElement.classList.toggle('disabled',!enabled);}
toggleTabClass(id,className,force){var tab=this._tabsById.get(id);if(tab._toggleClass(className,force))
this._updateTabElements();}
_zoomChanged(event){for(var i=0;i<this._tabs.length;++i)
delete this._tabs[i]._measuredWidth;if(this.isShowing())
this._updateTabElements();}
changeTabTitle(id,tabTitle,tabTooltip){var tab=this._tabsById.get(id);if(tabTooltip!==undefined)
tab.tooltip=tabTooltip;if(tab.title!==tabTitle){tab.title=tabTitle;this._updateTabElements();}}
changeTabView(id,view){var tab=this._tabsById.get(id);if(tab.view===view)
return;this.suspendInvalidations();var isSelected=this._currentTab&&this._currentTab.id===id;var shouldFocus=tab.view.hasFocus();if(isSelected)
this._hideTab(tab);tab.view=view;if(isSelected)
this._showTab(tab);if(shouldFocus)
tab.view.focus();this.resumeInvalidations();}
onResize(){this._updateTabElements();}
headerResized(){this._updateTabElements();}
wasShown(){var effectiveTab=this._currentTab||this._tabsHistory[0];if(effectiveTab&&this._autoSelectFirstItemOnShow)
this.selectTab(effectiveTab.id);}
setTabSlider(enable){this._sliderEnabled=enable;this._tabSlider.classList.toggle('enabled',enable);this._headerElement.classList.add('tabbed-pane-no-tab-borders');}
calculateConstraints(){var constraints=super.calculateConstraints();var minContentConstraints=new UI.Constraints(new UI.Size(0,0),new UI.Size(50,50));constraints=constraints.widthToMax(minContentConstraints).heightToMax(minContentConstraints);if(this._verticalTabLayout)
constraints=constraints.addWidth(new UI.Constraints(new UI.Size(120,0)));else
constraints=constraints.addHeight(new UI.Constraints(new UI.Size(0,30)));return constraints;}
_updateTabElements(){UI.invokeOnceAfterBatchUpdate(this,this._innerUpdateTabElements);}
setPlaceholderText(text){this._noTabsMessage=text;}
_innerUpdateTabElements(){if(!this.isShowing())
return;if(!this._tabs.length){this._contentElement.classList.add('has-no-tabs');if(this._noTabsMessage&&!this._noTabsMessageElement){this._noTabsMessageElement=this._contentElement.createChild('div','tabbed-pane-placeholder fill');this._noTabsMessageElement.textContent=this._noTabsMessage;}}else{this._contentElement.classList.remove('has-no-tabs');if(this._noTabsMessageElement){this._noTabsMessageElement.remove();delete this._noTabsMessageElement;}}
this._measureDropDownButton();this._updateWidths();this._updateTabsDropDown();this._updateTabSlider();}
_showTabElement(index,tab){if(index>=this._tabsElement.children.length)
this._tabsElement.appendChild(tab.tabElement);else
this._tabsElement.insertBefore(tab.tabElement,this._tabsElement.children[index]);tab._shown=true;}
_hideTabElement(tab){this._tabsElement.removeChild(tab.tabElement);tab._shown=false;}
_createDropDownButton(){var dropDownContainer=createElementWithClass('div','tabbed-pane-header-tabs-drop-down-container');var chevronIcon=UI.Icon.create('largeicon-chevron','chevron-icon');dropDownContainer.appendChild(chevronIcon);this._dropDownMenu=new UI.DropDownMenu(dropDownContainer);this._dropDownMenu.addEventListener(UI.DropDownMenu.Events.ItemSelected,this._dropDownMenuItemSelected,this);return dropDownContainer;}
_dropDownMenuItemSelected(event){var tabId=(event.data);this._lastSelectedOverflowTab=this._tabsById.get(tabId);this.selectTab(tabId,true);}
_totalWidth(){return this._headerContentsElement.getBoundingClientRect().width;}
_numberOfTabsShown(){var numTabsShown=0;for(var tab of this._tabs){if(tab._shown)
numTabsShown++;}
return numTabsShown;}
disableOverflowMenu(){this._overflowDisabled=true;}
_updateTabsDropDown(){var tabsToShowIndexes=this._tabsToShowIndexes(this._tabs,this._tabsHistory,this._totalWidth(),this._measuredDropDownButtonWidth||0);if(this._lastSelectedOverflowTab&&this._numberOfTabsShown()!==tabsToShowIndexes.length){delete this._lastSelectedOverflowTab;this._updateTabsDropDown();return;}
for(var i=0;i<this._tabs.length;++i){if(this._tabs[i]._shown&&tabsToShowIndexes.indexOf(i)===-1)
this._hideTabElement(this._tabs[i]);}
for(var i=0;i<tabsToShowIndexes.length;++i){var tab=this._tabs[tabsToShowIndexes[i]];if(!tab._shown)
this._showTabElement(i,tab);}
if(!this._overflowDisabled)
this._populateDropDownFromIndex();}
_populateDropDownFromIndex(){if(this._dropDownButton.parentElement)
this._headerContentsElement.removeChild(this._dropDownButton);this._dropDownMenu.clear();var tabsToShow=[];for(var i=0;i<this._tabs.length;++i){if(!this._tabs[i]._shown)
tabsToShow.push(this._tabs[i]);}
var selectedId=null;for(var i=0;i<tabsToShow.length;++i){var tab=tabsToShow[i];this._dropDownMenu.addItem(tab.id,tab.title);if(this._tabsHistory[0]===tab)
selectedId=tab.id;}
if(tabsToShow.length){this._headerContentsElement.appendChild(this._dropDownButton);this._dropDownMenu.selectItem(selectedId);}}
_measureDropDownButton(){if(this._overflowDisabled||this._measuredDropDownButtonWidth)
return;this._dropDownButton.classList.add('measuring');this._headerContentsElement.appendChild(this._dropDownButton);this._measuredDropDownButtonWidth=this._dropDownButton.getBoundingClientRect().width;this._headerContentsElement.removeChild(this._dropDownButton);this._dropDownButton.classList.remove('measuring');}
_updateWidths(){var measuredWidths=this._measureWidths();var maxWidth=this._shrinkableTabs?this._calculateMaxWidth(measuredWidths.slice(),this._totalWidth()):Number.MAX_VALUE;var i=0;for(var tab of this._tabs)
tab.setWidth(this._verticalTabLayout?-1:Math.min(maxWidth,measuredWidths[i++]));}
_measureWidths(){this._tabsElement.style.setProperty('width','2000px');var measuringTabElements=[];for(var tab of this._tabs){if(typeof tab._measuredWidth==='number')
continue;var measuringTabElement=tab._createTabElement(true);measuringTabElement.__tab=tab;measuringTabElements.push(measuringTabElement);this._tabsElement.appendChild(measuringTabElement);}
for(var i=0;i<measuringTabElements.length;++i){var width=measuringTabElements[i].getBoundingClientRect().width;measuringTabElements[i].__tab._measuredWidth=Math.ceil(width);}
for(var i=0;i<measuringTabElements.length;++i)
measuringTabElements[i].remove();var measuredWidths=[];for(var tab of this._tabs)
measuredWidths.push(tab._measuredWidth);this._tabsElement.style.removeProperty('width');return measuredWidths;}
_calculateMaxWidth(measuredWidths,totalWidth){if(!measuredWidths.length)
return 0;measuredWidths.sort(function(x,y){return x-y;});var totalMeasuredWidth=0;for(var i=0;i<measuredWidths.length;++i)
totalMeasuredWidth+=measuredWidths[i];if(totalWidth>=totalMeasuredWidth)
return measuredWidths[measuredWidths.length-1];var totalExtraWidth=0;for(var i=measuredWidths.length-1;i>0;--i){var extraWidth=measuredWidths[i]-measuredWidths[i-1];totalExtraWidth+=(measuredWidths.length-i)*extraWidth;if(totalWidth+totalExtraWidth>=totalMeasuredWidth){return measuredWidths[i-1]+
(totalWidth+totalExtraWidth-totalMeasuredWidth)/(measuredWidths.length-i);}}
return totalWidth/measuredWidths.length;}
_tabsToShowIndexes(tabsOrdered,tabsHistory,totalWidth,measuredDropDownButtonWidth){var tabsToShowIndexes=[];var totalTabsWidth=0;var tabCount=tabsOrdered.length;var tabsToLookAt=tabsOrdered.slice(0);if(this._currentTab!==undefined)
tabsToLookAt.unshift(tabsToLookAt.splice(tabsToLookAt.indexOf(this._currentTab),1)[0]);if(this._lastSelectedOverflowTab!==undefined)
tabsToLookAt.unshift(tabsToLookAt.splice(tabsToLookAt.indexOf(this._lastSelectedOverflowTab),1)[0]);for(var i=0;i<tabCount;++i){var tab=this._automaticReorder?tabsHistory[i]:tabsToLookAt[i];totalTabsWidth+=tab.width();var minimalRequiredWidth=totalTabsWidth;if(i!==tabCount-1)
minimalRequiredWidth+=measuredDropDownButtonWidth;if(!this._verticalTabLayout&&minimalRequiredWidth>totalWidth)
break;tabsToShowIndexes.push(tabsOrdered.indexOf(tab));}
tabsToShowIndexes.sort(function(x,y){return x-y;});return tabsToShowIndexes;}
_hideCurrentTab(){if(!this._currentTab)
return;this._hideTab(this._currentTab);delete this._currentTab;}
_showTab(tab){tab.tabElement.classList.add('selected');UI.ARIAUtils.setSelected(tab.tabElement,true);tab.view.show(this.element);this._updateTabSlider();}
_updateTabSlider(){if(!this._currentTab||!this._sliderEnabled)
return;var left=0;for(var i=0;i<this._tabs.length&&this._currentTab!==this._tabs[i]&&this._tabs[i]._shown;i++)
left+=this._tabs[i]._measuredWidth;var sliderWidth=this._currentTab._shown?this._currentTab._measuredWidth:this._dropDownButton.offsetWidth;var scaleFactor=window.devicePixelRatio>=1.5?' scaleY(0.75)':'';this._tabSlider.style.transform='translateX('+left+'px)'+scaleFactor;this._tabSlider.style.width=sliderWidth+'px';if(this._tabSlider.parentElement!==this._headerContentsElement)
this._headerContentsElement.appendChild(this._tabSlider);}
_hideTab(tab){tab.tabElement.classList.remove('selected');tab.tabElement.setAttribute('aria-selected','false');tab.view.detach();}
elementsToRestoreScrollPositionsFor(){return[this._contentElement];}
_insertBefore(tab,index){this._tabsElement.insertBefore(tab._tabElement||null,this._tabsElement.childNodes[index]);var oldIndex=this._tabs.indexOf(tab);this._tabs.splice(oldIndex,1);if(oldIndex<index)
--index;this._tabs.splice(index,0,tab);this.dispatchEventToListeners(UI.TabbedPane.Events.TabOrderChanged,this._tabs);}
leftToolbar(){if(!this._leftToolbar){this._leftToolbar=new UI.Toolbar('tabbed-pane-left-toolbar');this._headerElement.insertBefore(this._leftToolbar.element,this._headerElement.firstChild);}
return this._leftToolbar;}
rightToolbar(){if(!this._rightToolbar){this._rightToolbar=new UI.Toolbar('tabbed-pane-right-toolbar');this._headerElement.appendChild(this._rightToolbar.element);}
return this._rightToolbar;}
renderWithNoHeaderBackground(){this._headerElement.classList.add('tabbed-pane-no-header-background');}
setAllowTabReorder(allow,automatic){this._allowTabReorder=allow;this._automaticReorder=automatic;}};UI.TabbedPane.Events={TabSelected:Symbol('TabSelected'),TabClosed:Symbol('TabClosed'),TabOrderChanged:Symbol('TabOrderChanged')};UI.TabbedPaneTab=class{constructor(tabbedPane,id,title,closeable,view,tooltip){this._closeable=closeable;this._tabbedPane=tabbedPane;this._id=id;this._title=title;this._tooltip=tooltip;this._view=view;this._shown=false;this._measuredWidth;this._tabElement;this._iconContainer=null;}
get id(){return this._id;}
get title(){return this._title;}
set title(title){if(title===this._title)
return;this._title=title;if(this._titleElement)
this._titleElement.textContent=title;delete this._measuredWidth;}
isCloseable(){return this._closeable;}
_setIcon(icon){this._icon=icon;if(this._tabElement)
this._createIconElement(this._tabElement,this._titleElement,false);delete this._measuredWidth;}
_toggleClass(className,force){var element=this.tabElement;var hasClass=element.classList.contains(className);if(hasClass===force)
return false;element.classList.toggle(className,force);delete this._measuredWidth;return true;}
get view(){return this._view;}
set view(view){this._view=view;}
get tooltip(){return this._tooltip;}
set tooltip(tooltip){this._tooltip=tooltip;if(this._titleElement)
this._titleElement.title=tooltip||'';}
get tabElement(){if(!this._tabElement)
this._tabElement=this._createTabElement(false);return this._tabElement;}
width(){return this._width;}
setWidth(width){this.tabElement.style.width=width===-1?'':(width+'px');this._width=width;}
setDelegate(delegate){this._delegate=delegate;}
_createIconElement(tabElement,titleElement,measuring){if(tabElement.__iconElement){tabElement.__iconElement.remove();tabElement.__iconElement=null;}
if(!this._icon)
return;var iconContainer=createElementWithClass('span','tabbed-pane-header-tab-icon');var iconNode=measuring?this._icon.cloneNode(true):this._icon;iconContainer.appendChild(iconNode);tabElement.insertBefore(iconContainer,titleElement);tabElement.__iconElement=iconContainer;}
_createTabElement(measuring){var tabElement=createElementWithClass('div','tabbed-pane-header-tab');tabElement.id='tab-'+this._id;tabElement.tabIndex=-1;UI.ARIAUtils.markAsTab(tabElement);UI.ARIAUtils.setSelected(tabElement,false);tabElement.selectTabForTest=this._tabbedPane.selectTab.bind(this._tabbedPane,this.id,true);var titleElement=tabElement.createChild('span','tabbed-pane-header-tab-title');titleElement.textContent=this.title;titleElement.title=this.tooltip||'';this._createIconElement(tabElement,titleElement,measuring);if(!measuring)
this._titleElement=titleElement;if(this._closeable)
tabElement.createChild('div','tabbed-pane-close-button','dt-close-button').gray=true;if(measuring){tabElement.classList.add('measuring');}else{tabElement.addEventListener('click',this._tabClicked.bind(this),false);tabElement.addEventListener('auxclick',this._tabClicked.bind(this),false);tabElement.addEventListener('mousedown',this._tabMouseDown.bind(this),false);tabElement.addEventListener('mouseup',this._tabMouseUp.bind(this),false);tabElement.addEventListener('contextmenu',this._tabContextMenu.bind(this),false);if(this._tabbedPane._allowTabReorder){UI.installDragHandle(tabElement,this._startTabDragging.bind(this),this._tabDragging.bind(this),this._endTabDragging.bind(this),'-webkit-grabbing','pointer',200);}}
return tabElement;}
_tabClicked(event){var middleButton=event.button===1;var shouldClose=this._closeable&&(middleButton||event.target.classList.contains('tabbed-pane-close-button'));if(!shouldClose){this._tabbedPane.focus();return;}
this._closeTabs([this.id]);event.consume(true);}
_tabMouseDown(event){if(event.target.classList.contains('tabbed-pane-close-button')||event.button===1)
return;this._tabbedPane.selectTab(this.id,true);}
_tabMouseUp(event){if(event.button===1)
event.consume(true);}
_closeTabs(ids){if(this._delegate){this._delegate.closeTabs(this._tabbedPane,ids);return;}
this._tabbedPane.closeTabs(ids,true);}
_tabContextMenu(event){function close(){this._closeTabs([this.id]);}
function closeOthers(){this._closeTabs(this._tabbedPane.otherTabs(this.id));}
function closeAll(){this._closeTabs(this._tabbedPane.allTabs());}
function closeToTheRight(){this._closeTabs(this._tabbedPane._tabsToTheRight(this.id));}
var contextMenu=new UI.ContextMenu(event);if(this._closeable){contextMenu.appendItem(Common.UIString.capitalize('Close'),close.bind(this));contextMenu.appendItem(Common.UIString.capitalize('Close ^others'),closeOthers.bind(this));contextMenu.appendItem(Common.UIString.capitalize('Close ^tabs to the ^right'),closeToTheRight.bind(this));contextMenu.appendItem(Common.UIString.capitalize('Close ^all'),closeAll.bind(this));}
if(this._delegate)
this._delegate.onContextMenu(this.id,contextMenu);contextMenu.show();}
_startTabDragging(event){if(event.target.classList.contains('tabbed-pane-close-button'))
return false;this._dragStartX=event.pageX;this._tabElement.classList.add('dragging');this._tabbedPane._tabSlider.remove();return true;}
_tabDragging(event){var tabElements=this._tabbedPane._tabsElement.childNodes;for(var i=0;i<tabElements.length;++i){var tabElement=tabElements[i];if(tabElement===this._tabElement)
continue;var intersects=tabElement.offsetLeft+tabElement.clientWidth>this._tabElement.offsetLeft&&this._tabElement.offsetLeft+this._tabElement.clientWidth>tabElement.offsetLeft;if(!intersects)
continue;if(Math.abs(event.pageX-this._dragStartX)<tabElement.clientWidth/2+5)
break;if(event.pageX-this._dragStartX>0){tabElement=tabElement.nextSibling;++i;}
var oldOffsetLeft=this._tabElement.offsetLeft;this._tabbedPane._insertBefore(this,i);this._dragStartX+=this._tabElement.offsetLeft-oldOffsetLeft;break;}
if(!this._tabElement.previousSibling&&event.pageX-this._dragStartX<0){this._tabElement.style.setProperty('left','0px');return;}
if(!this._tabElement.nextSibling&&event.pageX-this._dragStartX>0){this._tabElement.style.setProperty('left','0px');return;}
this._tabElement.style.setProperty('left',(event.pageX-this._dragStartX)+'px');}
_endTabDragging(event){this._tabElement.classList.remove('dragging');this._tabElement.style.removeProperty('left');delete this._dragStartX;this._tabbedPane._updateTabSlider();}};UI.TabbedPaneTabDelegate=function(){};UI.TabbedPaneTabDelegate.prototype={closeTabs(tabbedPane,ids){},onContextMenu(tabId,contextMenu){}};;UI.highlightedSearchResultClassName='highlighted-search-result';UI.highlightedCurrentSearchResultClassName='current-search-result';UI.installDragHandle=function(element,elementDragStart,elementDrag,elementDragEnd,cursor,hoverCursor,startDelay){function onMouseDown(event){var dragHandler=new UI.DragHandler();var dragStart=dragHandler.elementDragStart.bind(dragHandler,element,elementDragStart,elementDrag,elementDragEnd,cursor,event);if(startDelay)
startTimer=setTimeout(dragStart,startDelay);else
dragStart();}
function onMouseUp(){if(startTimer)
clearTimeout(startTimer);startTimer=null;}
var startTimer;element.addEventListener('mousedown',onMouseDown,false);if(startDelay)
element.addEventListener('mouseup',onMouseUp,false);if(hoverCursor!==null)
element.style.cursor=hoverCursor||cursor;};UI.elementDragStart=function(targetElement,elementDragStart,elementDrag,elementDragEnd,cursor,event){var dragHandler=new UI.DragHandler();dragHandler.elementDragStart(targetElement,elementDragStart,elementDrag,elementDragEnd,cursor,event);};UI.DragHandler=class{constructor(){this._elementDragMove=this._elementDragMove.bind(this);this._elementDragEnd=this._elementDragEnd.bind(this);this._mouseOutWhileDragging=this._mouseOutWhileDragging.bind(this);}
_createGlassPane(){this._glassPaneInUse=true;if(!UI.DragHandler._glassPaneUsageCount++){UI.DragHandler._glassPane=new UI.GlassPane();UI.DragHandler._glassPane.setBlockPointerEvents(true);UI.DragHandler._glassPane.show(UI.DragHandler._documentForMouseOut);}}
_disposeGlassPane(){if(!this._glassPaneInUse)
return;this._glassPaneInUse=false;if(--UI.DragHandler._glassPaneUsageCount)
return;UI.DragHandler._glassPane.hide();delete UI.DragHandler._glassPane;delete UI.DragHandler._documentForMouseOut;}
elementDragStart(targetElement,elementDragStart,elementDrag,elementDragEnd,cursor,event){if(event.button||(Host.isMac()&&event.ctrlKey))
return;if(this._elementDraggingEventListener)
return;if(elementDragStart&&!elementDragStart((event)))
return;var targetDocument=event.target.ownerDocument;this._elementDraggingEventListener=elementDrag;this._elementEndDraggingEventListener=elementDragEnd;console.assert((UI.DragHandler._documentForMouseOut||targetDocument)===targetDocument,'Dragging on multiple documents.');UI.DragHandler._documentForMouseOut=targetDocument;this._dragEventsTargetDocument=targetDocument;this._dragEventsTargetDocumentTop=targetDocument.defaultView.top.document;targetDocument.addEventListener('mousemove',this._elementDragMove,true);targetDocument.addEventListener('mouseup',this._elementDragEnd,true);targetDocument.addEventListener('mouseout',this._mouseOutWhileDragging,true);if(targetDocument!==this._dragEventsTargetDocumentTop)
this._dragEventsTargetDocumentTop.addEventListener('mouseup',this._elementDragEnd,true);if(typeof cursor==='string'){this._restoreCursorAfterDrag=restoreCursor.bind(this,targetElement.style.cursor);targetElement.style.cursor=cursor;targetDocument.body.style.cursor=cursor;}
function restoreCursor(oldCursor){targetDocument.body.style.removeProperty('cursor');targetElement.style.cursor=oldCursor;this._restoreCursorAfterDrag=null;}
event.preventDefault();}
_mouseOutWhileDragging(){this._unregisterMouseOutWhileDragging();this._createGlassPane();}
_unregisterMouseOutWhileDragging(){if(!UI.DragHandler._documentForMouseOut)
return;UI.DragHandler._documentForMouseOut.removeEventListener('mouseout',this._mouseOutWhileDragging,true);}
_unregisterDragEvents(){if(!this._dragEventsTargetDocument)
return;this._dragEventsTargetDocument.removeEventListener('mousemove',this._elementDragMove,true);this._dragEventsTargetDocument.removeEventListener('mouseup',this._elementDragEnd,true);if(this._dragEventsTargetDocument!==this._dragEventsTargetDocumentTop)
this._dragEventsTargetDocumentTop.removeEventListener('mouseup',this._elementDragEnd,true);delete this._dragEventsTargetDocument;delete this._dragEventsTargetDocumentTop;}
_elementDragMove(event){if(event.buttons!==1){this._elementDragEnd(event);return;}
if(this._elementDraggingEventListener((event)))
this._cancelDragEvents(event);}
_cancelDragEvents(event){this._unregisterDragEvents();this._unregisterMouseOutWhileDragging();if(this._restoreCursorAfterDrag)
this._restoreCursorAfterDrag();this._disposeGlassPane();delete this._elementDraggingEventListener;delete this._elementEndDraggingEventListener;}
_elementDragEnd(event){var elementDragEnd=this._elementEndDraggingEventListener;this._cancelDragEvents((event));event.preventDefault();if(elementDragEnd)
elementDragEnd((event));}};UI.DragHandler._glassPaneUsageCount=0;UI.installInertialDragHandle=function(element,elementDragStart,elementDrag,elementDragEnd,cursor,hoverCursor,startDelay,friction){UI.installDragHandle(element,drag.bind(null,elementDragStart),drag.bind(null,elementDrag),dragEnd,cursor,hoverCursor,startDelay);if(typeof friction!=='number')
friction=50;var lastX;var lastY;var lastTime;var velocityX;var velocityY;var holding=false;function drag(callback,event){lastTime=window.performance.now();lastX=event.pageX;lastY=event.pageY;holding=true;return callback(lastX,lastY,event);}
function dragEnd(event){var now=window.performance.now();var duration=now-lastTime||1;const maxVelocity=4;velocityX=Number.constrain((event.pageX-lastX)/duration,-maxVelocity,maxVelocity);velocityY=Number.constrain((event.pageY-lastY)/duration,-maxVelocity,maxVelocity);lastX=event.pageX;lastY=event.pageY;lastTime=now;holding=false;animationStep();}
function animationStep(){var v2=velocityX*velocityX+velocityY*velocityY;if(v2<0.001||holding){elementDragEnd(lastX,lastY);return;}
element.window().requestAnimationFrame(animationStep);var now=window.performance.now();var duration=now-lastTime;if(!duration)
return;lastTime=now;lastX+=velocityX*duration;lastY+=velocityY*duration;var k=Math.pow(1/(1+friction),duration/1000);velocityX*=k;velocityY*=k;elementDrag(lastX,lastY);}};UI.isBeingEdited=function(node){if(!node||node.nodeType!==Node.ELEMENT_NODE)
return false;var element=(node);if(element.classList.contains('text-prompt')||element.nodeName==='INPUT'||element.nodeName==='TEXTAREA')
return true;if(!UI.__editingCount)
return false;while(element){if(element.__editing)
return true;element=element.parentElementOrShadowHost();}
return false;};UI.isEditing=function(){if(UI.__editingCount)
return true;var focused=document.deepActiveElement();if(!focused)
return false;return focused.classList.contains('text-prompt')||focused.nodeName==='INPUT'||focused.nodeName==='TEXTAREA';};UI.markBeingEdited=function(element,value){if(value){if(element.__editing)
return false;element.classList.add('being-edited');element.__editing=true;UI.__editingCount=(UI.__editingCount||0)+1;}else{if(!element.__editing)
return false;element.classList.remove('being-edited');delete element.__editing;--UI.__editingCount;}
return true;};UI.CSSNumberRegex=/^(-?(?:\d+(?:\.\d+)?|\.\d+))$/;UI.StyleValueDelimiters=' \xA0\t\n"\':;,/()';UI._valueModificationDirection=function(event){var direction=null;if(event.type==='mousewheel'){if(event.wheelDeltaY>0||event.wheelDeltaX>0)
direction='Up';else if(event.wheelDeltaY<0||event.wheelDeltaX<0)
direction='Down';}else{if(event.key==='ArrowUp'||event.key==='PageUp')
direction='Up';else if(event.key==='ArrowDown'||event.key==='PageDown')
direction='Down';}
return direction;};UI._modifiedHexValue=function(hexString,event){var direction=UI._valueModificationDirection(event);if(!direction)
return null;var mouseEvent=(event);var number=parseInt(hexString,16);if(isNaN(number)||!isFinite(number))
return null;var hexStrLen=hexString.length;var channelLen=hexStrLen/3;if(channelLen!==1&&channelLen!==2)
return null;var delta=0;if(UI.KeyboardShortcut.eventHasCtrlOrMeta(mouseEvent))
delta+=Math.pow(16,channelLen*2);if(mouseEvent.shiftKey)
delta+=Math.pow(16,channelLen);if(mouseEvent.altKey)
delta+=1;if(delta===0)
delta=1;if(direction==='Down')
delta*=-1;var maxValue=Math.pow(16,hexStrLen)-1;var result=Number.constrain(number+delta,0,maxValue);var resultString=result.toString(16).toUpperCase();for(var i=0,lengthDelta=hexStrLen-resultString.length;i<lengthDelta;++i)
resultString='0'+resultString;return resultString;};UI._modifiedFloatNumber=function(number,event){var direction=UI._valueModificationDirection(event);if(!direction)
return null;var mouseEvent=(event);var delta=1;if(UI.KeyboardShortcut.eventHasCtrlOrMeta(mouseEvent))
delta=100;else if(mouseEvent.shiftKey)
delta=10;else if(mouseEvent.altKey)
delta=0.1;if(direction==='Down')
delta*=-1;var result=Number((number+delta).toFixed(6));if(!String(result).match(UI.CSSNumberRegex))
return null;return result;};UI.createReplacementString=function(wordString,event,customNumberHandler){var prefix;var suffix;var number;var replacementString=null;var matches=/(.*#)([\da-fA-F]+)(.*)/.exec(wordString);if(matches&&matches.length){prefix=matches[1];suffix=matches[3];number=UI._modifiedHexValue(matches[2],event);if(number!==null)
replacementString=prefix+number+suffix;}else{matches=/(.*?)(-?(?:\d+(?:\.\d+)?|\.\d+))(.*)/.exec(wordString);if(matches&&matches.length){prefix=matches[1];suffix=matches[3];number=UI._modifiedFloatNumber(parseFloat(matches[2]),event);if(number!==null){replacementString=customNumberHandler?customNumberHandler(prefix,number,suffix):prefix+number+suffix;}}}
return replacementString;};UI.handleElementValueModifications=function(event,element,finishHandler,suggestionHandler,customNumberHandler){function createRange(){return document.createRange();}
var arrowKeyOrMouseWheelEvent=(event.key==='ArrowUp'||event.key==='ArrowDown'||event.type==='mousewheel');var pageKeyPressed=(event.key==='PageUp'||event.key==='PageDown');if(!arrowKeyOrMouseWheelEvent&&!pageKeyPressed)
return false;var selection=element.getComponentSelection();if(!selection.rangeCount)
return false;var selectionRange=selection.getRangeAt(0);if(!selectionRange.commonAncestorContainer.isSelfOrDescendant(element))
return false;var originalValue=element.textContent;var wordRange=selectionRange.startContainer.rangeOfWord(selectionRange.startOffset,UI.StyleValueDelimiters,element);var wordString=wordRange.toString();if(suggestionHandler&&suggestionHandler(wordString))
return false;var replacementString=UI.createReplacementString(wordString,event,customNumberHandler);if(replacementString){var replacementTextNode=createTextNode(replacementString);wordRange.deleteContents();wordRange.insertNode(replacementTextNode);var finalSelectionRange=createRange();finalSelectionRange.setStart(replacementTextNode,0);finalSelectionRange.setEnd(replacementTextNode,replacementString.length);selection.removeAllRanges();selection.addRange(finalSelectionRange);event.handled=true;event.preventDefault();if(finishHandler)
finishHandler(originalValue,replacementString);return true;}
return false;};Number.preciseMillisToString=function(ms,precision){precision=precision||0;var format='%.'+precision+'f\u2009ms';return Common.UIString(format,ms);};UI._microsFormat=new Common.UIStringFormat('%.0f\u2009\u03bcs');UI._subMillisFormat=new Common.UIStringFormat('%.2f\u2009ms');UI._millisFormat=new Common.UIStringFormat('%.0f\u2009ms');UI._secondsFormat=new Common.UIStringFormat('%.2f\u2009s');UI._minutesFormat=new Common.UIStringFormat('%.1f\u2009min');UI._hoursFormat=new Common.UIStringFormat('%.1f\u2009hrs');UI._daysFormat=new Common.UIStringFormat('%.1f\u2009days');Number.millisToString=function(ms,higherResolution){if(!isFinite(ms))
return'-';if(ms===0)
return'0';if(higherResolution&&ms<0.1)
return UI._microsFormat.format(ms*1000);if(higherResolution&&ms<1000)
return UI._subMillisFormat.format(ms);if(ms<1000)
return UI._millisFormat.format(ms);var seconds=ms/1000;if(seconds<60)
return UI._secondsFormat.format(seconds);var minutes=seconds/60;if(minutes<60)
return UI._minutesFormat.format(minutes);var hours=minutes/60;if(hours<24)
return UI._hoursFormat.format(hours);var days=hours/24;return UI._daysFormat.format(days);};Number.secondsToString=function(seconds,higherResolution){if(!isFinite(seconds))
return'-';return Number.millisToString(seconds*1000,higherResolution);};Number.bytesToString=function(bytes){if(bytes<1024)
return Common.UIString('%.0f\u2009B',bytes);var kilobytes=bytes/1024;if(kilobytes<100)
return Common.UIString('%.1f\u2009KB',kilobytes);if(kilobytes<1024)
return Common.UIString('%.0f\u2009KB',kilobytes);var megabytes=kilobytes/1024;if(megabytes<100)
return Common.UIString('%.1f\u2009MB',megabytes);else
return Common.UIString('%.0f\u2009MB',megabytes);};Number.withThousandsSeparator=function(num){var str=num+'';var re=/(\d+)(\d{3})/;while(str.match(re))
str=str.replace(re,'$1\u2009$2');return str;};UI.formatLocalized=function(format,substitutions){var formatters={s:substitution=>substitution};function append(a,b){a.appendChild(typeof b==='string'?createTextNode(b):b);return a;}
return String.format(Common.UIString(format),substitutions,formatters,createElement('span'),append).formattedResult;};UI.openLinkExternallyLabel=function(){return Common.UIString.capitalize('Open in ^new ^tab');};UI.copyLinkAddressLabel=function(){return Common.UIString.capitalize('Copy ^link ^address');};UI.anotherProfilerActiveLabel=function(){return Common.UIString('Another profiler is already active');};UI.asyncStackTraceLabel=function(description){if(description){if(description==='Promise.resolve')
description=Common.UIString('Promise resolved');else if(description==='Promise.reject')
description=Common.UIString('Promise rejected');return description+' '+Common.UIString('(async)');}
return Common.UIString('Async Call');};UI.installComponentRootStyles=function(element){UI.appendStyle(element,'ui/inspectorCommon.css');UI.themeSupport.injectHighlightStyleSheets(element);element.classList.add('platform-'+Host.platform());};UI.createShadowRootWithCoreStyles=function(element,cssFile){var shadowRoot=element.createShadowRoot();UI.appendStyle(shadowRoot,'ui/inspectorCommon.css');UI.themeSupport.injectHighlightStyleSheets(shadowRoot);if(cssFile)
UI.appendStyle(shadowRoot,cssFile);shadowRoot.addEventListener('focus',UI._focusChanged.bind(UI),true);return shadowRoot;};UI._windowFocused=function(document,event){if(event.target.document.nodeType===Node.DOCUMENT_NODE)
document.body.classList.remove('inactive');};UI._windowBlurred=function(document,event){if(event.target.document.nodeType===Node.DOCUMENT_NODE)
document.body.classList.add('inactive');};UI._focusChanged=function(event){var document=event.target&&event.target.ownerDocument;var element=document?document.deepActiveElement():null;UI.Widget.focusWidgetForNode(element);};UI.ElementFocusRestorer=class{constructor(element){this._element=element;this._previous=element.ownerDocument.deepActiveElement();element.focus();}
restore(){if(!this._element)
return;if(this._element.hasFocus()&&this._previous)
this._previous.focus();this._previous=null;this._element=null;}};UI.highlightSearchResult=function(element,offset,length,domChanges){var result=UI.highlightSearchResults(element,[new Common.SourceRange(offset,length)],domChanges);return result.length?result[0]:null;};UI.highlightSearchResults=function(element,resultRanges,changes){return UI.highlightRangesWithStyleClass(element,resultRanges,UI.highlightedSearchResultClassName,changes);};UI.runCSSAnimationOnce=function(element,className){function animationEndCallback(){element.classList.remove(className);element.removeEventListener('webkitAnimationEnd',animationEndCallback,false);}
if(element.classList.contains(className))
element.classList.remove(className);element.addEventListener('webkitAnimationEnd',animationEndCallback,false);element.classList.add(className);};UI.highlightRangesWithStyleClass=function(element,resultRanges,styleClass,changes){changes=changes||[];var highlightNodes=[];var textNodes=element.childTextNodes();var lineText=textNodes.map(function(node){return node.textContent;}).join('');var ownerDocument=element.ownerDocument;if(textNodes.length===0)
return highlightNodes;var nodeRanges=[];var rangeEndOffset=0;for(var i=0;i<textNodes.length;++i){var range={};range.offset=rangeEndOffset;range.length=textNodes[i].textContent.length;rangeEndOffset=range.offset+range.length;nodeRanges.push(range);}
var startIndex=0;for(var i=0;i<resultRanges.length;++i){var startOffset=resultRanges[i].offset;var endOffset=startOffset+resultRanges[i].length;while(startIndex<textNodes.length&&nodeRanges[startIndex].offset+nodeRanges[startIndex].length<=startOffset)
startIndex++;var endIndex=startIndex;while(endIndex<textNodes.length&&nodeRanges[endIndex].offset+nodeRanges[endIndex].length<endOffset)
endIndex++;if(endIndex===textNodes.length)
break;var highlightNode=ownerDocument.createElement('span');highlightNode.className=styleClass;highlightNode.textContent=lineText.substring(startOffset,endOffset);var lastTextNode=textNodes[endIndex];var lastText=lastTextNode.textContent;lastTextNode.textContent=lastText.substring(endOffset-nodeRanges[endIndex].offset);changes.push({node:lastTextNode,type:'changed',oldText:lastText,newText:lastTextNode.textContent});if(startIndex===endIndex){lastTextNode.parentElement.insertBefore(highlightNode,lastTextNode);changes.push({node:highlightNode,type:'added',nextSibling:lastTextNode,parent:lastTextNode.parentElement});highlightNodes.push(highlightNode);var prefixNode=ownerDocument.createTextNode(lastText.substring(0,startOffset-nodeRanges[startIndex].offset));lastTextNode.parentElement.insertBefore(prefixNode,highlightNode);changes.push({node:prefixNode,type:'added',nextSibling:highlightNode,parent:lastTextNode.parentElement});}else{var firstTextNode=textNodes[startIndex];var firstText=firstTextNode.textContent;var anchorElement=firstTextNode.nextSibling;firstTextNode.parentElement.insertBefore(highlightNode,anchorElement);changes.push({node:highlightNode,type:'added',nextSibling:anchorElement,parent:firstTextNode.parentElement});highlightNodes.push(highlightNode);firstTextNode.textContent=firstText.substring(0,startOffset-nodeRanges[startIndex].offset);changes.push({node:firstTextNode,type:'changed',oldText:firstText,newText:firstTextNode.textContent});for(var j=startIndex+1;j<endIndex;j++){var textNode=textNodes[j];var text=textNode.textContent;textNode.textContent='';changes.push({node:textNode,type:'changed',oldText:text,newText:textNode.textContent});}}
startIndex=endIndex;nodeRanges[startIndex].offset=endOffset;nodeRanges[startIndex].length=lastTextNode.textContent.length;}
return highlightNodes;};UI.applyDomChanges=function(domChanges){for(var i=0,size=domChanges.length;i<size;++i){var entry=domChanges[i];switch(entry.type){case'added':entry.parent.insertBefore(entry.node,entry.nextSibling);break;case'changed':entry.node.textContent=entry.newText;break;}}};UI.revertDomChanges=function(domChanges){for(var i=domChanges.length-1;i>=0;--i){var entry=domChanges[i];switch(entry.type){case'added':entry.node.remove();break;case'changed':entry.node.textContent=entry.oldText;break;}}};UI.measurePreferredSize=function(element,containerElement){var oldParent=element.parentElement;var oldNextSibling=element.nextSibling;containerElement=containerElement||element.ownerDocument.body;containerElement.appendChild(element);element.positionAt(0,0);var result=element.getBoundingClientRect();element.positionAt(undefined,undefined);if(oldParent)
oldParent.insertBefore(element,oldNextSibling);else
element.remove();return new UI.Size(result.width,result.height);};UI.InvokeOnceHandlers=class{constructor(autoInvoke){this._handlers=null;this._autoInvoke=autoInvoke;}
add(object,method){if(!this._handlers){this._handlers=new Map();if(this._autoInvoke)
this.scheduleInvoke();}
var methods=this._handlers.get(object);if(!methods){methods=new Set();this._handlers.set(object,methods);}
methods.add(method);}
scheduleInvoke(){if(this._handlers)
requestAnimationFrame(this._invoke.bind(this));}
_invoke(){var handlers=this._handlers;this._handlers=null;var keys=handlers.keysArray();for(var i=0;i<keys.length;++i){var object=keys[i];var methods=handlers.get(object).valuesArray();for(var j=0;j<methods.length;++j)
methods[j].call(object);}}};UI._coalescingLevel=0;UI._postUpdateHandlers=null;UI.startBatchUpdate=function(){if(!UI._coalescingLevel++)
UI._postUpdateHandlers=new UI.InvokeOnceHandlers(false);};UI.endBatchUpdate=function(){if(--UI._coalescingLevel)
return;UI._postUpdateHandlers.scheduleInvoke();UI._postUpdateHandlers=null;};UI.invokeOnceAfterBatchUpdate=function(object,method){if(!UI._postUpdateHandlers)
UI._postUpdateHandlers=new UI.InvokeOnceHandlers(true);UI._postUpdateHandlers.add(object,method);};UI.animateFunction=function(window,func,params,frames,animationComplete){var values=new Array(params.length);var deltas=new Array(params.length);for(var i=0;i<params.length;++i){values[i]=params[i].from;deltas[i]=(params[i].to-params[i].from)/frames;}
var raf=window.requestAnimationFrame(animationStep);var framesLeft=frames;function animationStep(){if(--framesLeft<0){if(animationComplete)
animationComplete();return;}
for(var i=0;i<params.length;++i){if(params[i].to>params[i].from)
values[i]=Number.constrain(values[i]+deltas[i],params[i].from,params[i].to);else
values[i]=Number.constrain(values[i]+deltas[i],params[i].to,params[i].from);}
func.apply(null,values);raf=window.requestAnimationFrame(animationStep);}
function cancelAnimation(){window.cancelAnimationFrame(raf);}
return cancelAnimation;};UI.LongClickController=class extends Common.Object{constructor(element,callback){super();this._element=element;this._callback=callback;this._enable();}
reset(){if(this._longClickInterval){clearInterval(this._longClickInterval);delete this._longClickInterval;}}
_enable(){if(this._longClickData)
return;var boundMouseDown=mouseDown.bind(this);var boundMouseUp=mouseUp.bind(this);var boundReset=this.reset.bind(this);this._element.addEventListener('mousedown',boundMouseDown,false);this._element.addEventListener('mouseout',boundReset,false);this._element.addEventListener('mouseup',boundMouseUp,false);this._element.addEventListener('click',boundReset,true);this._longClickData={mouseUp:boundMouseUp,mouseDown:boundMouseDown,reset:boundReset};function mouseDown(e){if(e.which!==1)
return;var callback=this._callback;this._longClickInterval=setTimeout(callback.bind(null,e),200);}
function mouseUp(e){if(e.which!==1)
return;this.reset();}}
dispose(){if(!this._longClickData)
return;this._element.removeEventListener('mousedown',this._longClickData.mouseDown,false);this._element.removeEventListener('mouseout',this._longClickData.reset,false);this._element.removeEventListener('mouseup',this._longClickData.mouseUp,false);this._element.addEventListener('click',this._longClickData.reset,true);delete this._longClickData;}};UI.initializeUIUtils=function(document,themeSetting){document.defaultView.addEventListener('focus',UI._windowFocused.bind(UI,document),false);document.defaultView.addEventListener('blur',UI._windowBlurred.bind(UI,document),false);document.addEventListener('focus',UI._focusChanged.bind(UI),true);if(!UI.themeSupport)
UI.themeSupport=new UI.ThemeSupport(themeSetting);UI.themeSupport.applyTheme(document);var body=(document.body);UI.appendStyle(body,'ui/inspectorStyle.css');UI.GlassPane.setContainer((document.body));};UI.beautifyFunctionName=function(name){return name||Common.UIString('(anonymous)');};UI.registerCustomElement=function(localName,typeExtension,prototype){return document.registerElement(typeExtension,{prototype:Object.create(prototype),extends:localName});};UI.createTextButton=function(text,clickHandler,className,title){var element=createElementWithClass('button',className||'','text-button');element.textContent=text;if(clickHandler)
element.addEventListener('click',clickHandler,false);if(title)
element.title=title;return element;};UI.createRadioLabel=function(name,title,checked){var element=createElement('label','dt-radio');element.radioElement.name=name;element.radioElement.checked=!!checked;element.createTextChild(title);return element;};UI.createLabel=function(title,iconClass){var element=createElement('label','dt-icon-label');element.createChild('span').textContent=title;element.type=iconClass;return element;};UI.createCheckboxLabel=function(title,checked,subtitle){var element=createElement('label','dt-checkbox');element.checkboxElement.checked=!!checked;if(title!==undefined){element.textElement=element.shadowRoot.createChild('div','dt-checkbox-text');element.textElement.textContent=title;if(subtitle!==undefined){element.subtitleElement=element.textElement.createChild('div','dt-checkbox-subtitle');element.subtitleElement.textContent=subtitle;}}
return element;};UI.createSliderLabel=function(min,max,tabIndex){var element=createElement('label','dt-slider');element.sliderElement.min=min;element.sliderElement.max=max;element.sliderElement.step=1;element.sliderElement.tabIndex=tabIndex;return element;};UI.appendStyle=function(node,cssFile){var content=Runtime.cachedResources[cssFile]||'';if(!content)
console.error(cssFile+' not preloaded. Check module.json');var styleElement=createElement('style');styleElement.type='text/css';styleElement.textContent=content;node.appendChild(styleElement);var themeStyleSheet=UI.themeSupport.themeStyleSheet(cssFile,content);if(themeStyleSheet){styleElement=createElement('style');styleElement.type='text/css';styleElement.textContent=themeStyleSheet+'\n'+Runtime.resolveSourceURL(cssFile+'.theme');node.appendChild(styleElement);}};(function(){UI.registerCustomElement('button','text-button',{createdCallback:function(){this.type='button';var root=UI.createShadowRootWithCoreStyles(this,'ui/textButton.css');root.createChild('content');},__proto__:HTMLButtonElement.prototype});UI.registerCustomElement('label','dt-radio',{createdCallback:function(){this.radioElement=this.createChild('input','dt-radio-button');this.radioElement.type='radio';var root=UI.createShadowRootWithCoreStyles(this,'ui/radioButton.css');root.createChild('content').select='.dt-radio-button';root.createChild('content');this.addEventListener('click',radioClickHandler,false);},__proto__:HTMLLabelElement.prototype});function radioClickHandler(event){if(this.radioElement.checked||this.radioElement.disabled)
return;this.radioElement.checked=true;this.radioElement.dispatchEvent(new Event('change'));}
UI.registerCustomElement('label','dt-checkbox',{createdCallback:function(){this._root=UI.createShadowRootWithCoreStyles(this,'ui/checkboxTextLabel.css');var checkboxElement=createElementWithClass('input','dt-checkbox-button');checkboxElement.type='checkbox';this._root.appendChild(checkboxElement);this.checkboxElement=checkboxElement;this.addEventListener('click',toggleCheckbox.bind(this));function toggleCheckbox(event){var deepTarget=event.deepElementFromPoint();if(deepTarget!==checkboxElement&&deepTarget!==this){event.consume();checkboxElement.click();}}
this._root.createChild('content');},set backgroundColor(color){this.checkboxElement.classList.add('dt-checkbox-themed');this.checkboxElement.style.backgroundColor=color;},set checkColor(color){this.checkboxElement.classList.add('dt-checkbox-themed');var stylesheet=createElement('style');stylesheet.textContent='input.dt-checkbox-themed:checked:after { background-color: '+color+'}';this._root.appendChild(stylesheet);},set borderColor(color){this.checkboxElement.classList.add('dt-checkbox-themed');this.checkboxElement.style.borderColor=color;},set visualizeFocus(focus){this.checkboxElement.classList.toggle('dt-checkbox-visualize-focus',focus);},__proto__:HTMLLabelElement.prototype});UI.registerCustomElement('label','dt-icon-label',{createdCallback:function(){var root=UI.createShadowRootWithCoreStyles(this);this._iconElement=UI.Icon.create();this._iconElement.style.setProperty('margin-right','4px');root.appendChild(this._iconElement);root.createChild('content');},set type(type){this._iconElement.setIconType(type);},__proto__:HTMLLabelElement.prototype});UI.registerCustomElement('label','dt-slider',{createdCallback:function(){var root=UI.createShadowRootWithCoreStyles(this,'ui/slider.css');this.sliderElement=createElementWithClass('input','dt-range-input');this.sliderElement.type='range';root.appendChild(this.sliderElement);},set value(amount){this.sliderElement.value=amount;},get value(){return this.sliderElement.value;},__proto__:HTMLLabelElement.prototype});UI.registerCustomElement('label','dt-small-bubble',{createdCallback:function(){var root=UI.createShadowRootWithCoreStyles(this,'ui/smallBubble.css');this._textElement=root.createChild('div');this._textElement.className='info';this._textElement.createChild('content');},set type(type){this._textElement.className=type;},__proto__:HTMLLabelElement.prototype});UI.registerCustomElement('div','dt-close-button',{createdCallback:function(){var root=UI.createShadowRootWithCoreStyles(this,'ui/closeButton.css');this._buttonElement=root.createChild('div','close-button');var regularIcon=UI.Icon.create('smallicon-cross','default-icon');this._hoverIcon=UI.Icon.create('smallicon-red-cross-hover','hover-icon');this._activeIcon=UI.Icon.create('smallicon-red-cross-active','active-icon');this._buttonElement.appendChild(regularIcon);this._buttonElement.appendChild(this._hoverIcon);this._buttonElement.appendChild(this._activeIcon);},set gray(gray){if(gray){this._hoverIcon.setIconType('smallicon-gray-cross-hover');this._activeIcon.setIconType('smallicon-gray-cross-active');}else{this._hoverIcon.setIconType('smallicon-red-cross-hover');this._activeIcon.setIconType('smallicon-red-cross-active');}},__proto__:HTMLDivElement.prototype});})();UI.bindInput=function(input,apply,validate,numeric){input.addEventListener('change',onChange,false);input.addEventListener('input',onInput,false);input.addEventListener('keydown',onKeyDown,false);input.addEventListener('focus',input.select.bind(input),false);function onInput(){input.classList.toggle('error-input',!validate(input.value));}
function onChange(){var valid=validate(input.value);input.classList.toggle('error-input',!valid);if(valid)
apply(input.value);}
function onKeyDown(event){if(isEnterKey(event)){if(validate(input.value))
apply(input.value);return;}
if(!numeric)
return;var increment=event.key==='ArrowUp'?1:event.key==='ArrowDown'?-1:0;if(!increment)
return;if(event.shiftKey)
increment*=10;var value=input.value;if(!validate(value)||!value)
return;value=(value?Number(value):0)+increment;var stringValue=value?String(value):'';if(!validate(stringValue)||!value)
return;input.value=stringValue;apply(input.value);event.preventDefault();}
function setValue(value){if(value===input.value)
return;var valid=validate(value);input.classList.toggle('error-input',!valid);input.value=value;}
return setValue;};UI.trimText=function(context,text,maxWidth,trimFunction){const maxLength=200;if(maxWidth<=10)
return'';if(text.length>maxLength)
text=trimFunction(text,maxLength);const textWidth=UI.measureTextWidth(context,text);if(textWidth<=maxWidth)
return text;var l=0;var r=text.length;var lv=0;var rv=textWidth;while(l<r&&lv!==rv&&lv!==maxWidth){const m=Math.ceil(l+(r-l)*(maxWidth-lv)/(rv-lv));const mv=UI.measureTextWidth(context,trimFunction(text,m));if(mv<=maxWidth){l=m;lv=mv;}else{r=m-1;rv=mv;}}
text=trimFunction(text,l);return text!=='\u2026'?text:'';};UI.trimTextMiddle=function(context,text,maxWidth){return UI.trimText(context,text,maxWidth,(text,width)=>text.trimMiddle(width));};UI.trimTextEnd=function(context,text,maxWidth){return UI.trimText(context,text,maxWidth,(text,width)=>text.trimEnd(width));};UI.measureTextWidth=function(context,text){const maxCacheableLength=200;if(text.length>maxCacheableLength)
return context.measureText(text).width;var widthCache=UI.measureTextWidth._textWidthCache;if(!widthCache){widthCache=new Map();UI.measureTextWidth._textWidthCache=widthCache;}
const font=context.font;var textWidths=widthCache.get(font);if(!textWidths){textWidths=new Map();widthCache.set(font,textWidths);}
var width=textWidths.get(text);if(!width){width=context.measureText(text).width;textWidths.set(text,width);}
return width;};UI.ThemeSupport=class{constructor(setting){this._themeName=setting.get()||'default';this._themableProperties=new Set(['color','box-shadow','text-shadow','outline-color','background-image','background-color','border-left-color','border-right-color','border-top-color','border-bottom-color','-webkit-border-image']);this._cachedThemePatches=new Map();this._setting=setting;}
hasTheme(){return this._themeName!=='default';}
themeName(){return this._themeName;}
injectHighlightStyleSheets(element){this._injectingStyleSheet=true;UI.appendStyle(element,'ui/inspectorSyntaxHighlight.css');if(this._themeName==='dark')
UI.appendStyle(element,'ui/inspectorSyntaxHighlightDark.css');this._injectingStyleSheet=false;}
applyTheme(document){if(!this.hasTheme())
return;if(this._themeName==='dark')
document.body.classList.add('-theme-with-dark-background');var styleSheets=document.styleSheets;var result=[];for(var i=0;i<styleSheets.length;++i)
result.push(this._patchForTheme(styleSheets[i].href,styleSheets[i]));result.push('/*# sourceURL=inspector.css.theme */');var styleElement=createElement('style');styleElement.type='text/css';styleElement.textContent=result.join('\n');document.head.appendChild(styleElement);}
themeStyleSheet(id,text){if(!this.hasTheme()||this._injectingStyleSheet)
return'';var patch=this._cachedThemePatches.get(id);if(!patch){var styleElement=createElement('style');styleElement.type='text/css';styleElement.textContent=text;document.body.appendChild(styleElement);patch=this._patchForTheme(id,styleElement.sheet);document.body.removeChild(styleElement);}
return patch;}
_patchForTheme(id,styleSheet){var cached=this._cachedThemePatches.get(id);if(cached)
return cached;try{var rules=styleSheet.cssRules;var result=[];for(var j=0;j<rules.length;++j){if(rules[j]instanceof CSSImportRule){result.push(this._patchForTheme(rules[j].styleSheet.href,rules[j].styleSheet));continue;}
var output=[];var style=rules[j].style;var selectorText=rules[j].selectorText;for(var i=0;style&&i<style.length;++i)
this._patchProperty(selectorText,style,style[i],output);if(output.length)
result.push(rules[j].selectorText+'{'+output.join('')+'}');}
var fullText=result.join('\n');this._cachedThemePatches.set(id,fullText);return fullText;}catch(e){this._setting.set('default');return'';}}
_patchProperty(selectorText,style,name,output){if(!this._themableProperties.has(name))
return;var value=style.getPropertyValue(name);if(!value||value==='none'||value==='inherit'||value==='initial'||value==='transparent')
return;if(name==='background-image'&&value.indexOf('gradient')===-1)
return;var isSelection=selectorText.indexOf('.-theme-selection-color')!==-1;if(selectorText.indexOf('-theme-')!==-1&&!isSelection)
return;if(name==='-webkit-border-image'){output.push('-webkit-filter: invert(100%)');return;}
isSelection=isSelection||selectorText.indexOf('selected')!==-1||selectorText.indexOf('.selection')!==-1;var colorUsage=UI.ThemeSupport.ColorUsage.Unknown;if(isSelection)
colorUsage|=UI.ThemeSupport.ColorUsage.Selection;if(name.indexOf('background')===0||name.indexOf('border')===0)
colorUsage|=UI.ThemeSupport.ColorUsage.Background;if(name.indexOf('background')===-1)
colorUsage|=UI.ThemeSupport.ColorUsage.Foreground;output.push(name);output.push(':');var items=value.replace(Common.Color.Regex,'\0$1\0').split('\0');for(var i=0;i<items.length;++i)
output.push(this.patchColor(items[i],colorUsage));if(style.getPropertyPriority(name))
output.push(' !important');output.push(';');}
patchColor(text,colorUsage){var color=Common.Color.parse(text);if(!color)
return text;var hsla=color.hsla();this._patchHSLA(hsla,colorUsage);var rgba=[];Common.Color.hsl2rgb(hsla,rgba);var outColor=new Common.Color(rgba,color.format());var outText=outColor.asString(null);if(!outText)
outText=outColor.asString(outColor.hasAlpha()?Common.Color.Format.RGBA:Common.Color.Format.RGB);return outText||text;}
_patchHSLA(hsla,colorUsage){var hue=hsla[0];var sat=hsla[1];var lit=hsla[2];var alpha=hsla[3];switch(this._themeName){case'dark':if(colorUsage&UI.ThemeSupport.ColorUsage.Selection)
hue=(hue+0.5)%1;var minCap=colorUsage&UI.ThemeSupport.ColorUsage.Background?0.14:0;var maxCap=colorUsage&UI.ThemeSupport.ColorUsage.Foreground?0.9:1;lit=1-lit;if(lit<minCap*2)
lit=minCap+lit/2;else if(lit>2*maxCap-1)
lit=maxCap-1/2+lit/2;break;}
hsla[0]=Number.constrain(hue,0,1);hsla[1]=Number.constrain(sat,0,1);hsla[2]=Number.constrain(lit,0,1);hsla[3]=Number.constrain(alpha,0,1);}};UI.ThemeSupport.ColorUsage={Unknown:0,Foreground:1<<0,Background:1<<1,Selection:1<<2,};UI.createExternalLink=function(url,linkText,className,preventClick){if(!linkText)
linkText=url;var a=createElementWithClass('span',className);var href=url;if(url.trim().toLowerCase().startsWith('javascript:'))
href=null;if(Common.ParsedURL.isRelativeURL(url))
href=null;if(href!==null){a.href=href;a.classList.add('devtools-link');if(!preventClick){a.addEventListener('click',event=>{event.consume(true);InspectorFrontendHost.openInNewTab((href));},false);}else{a.classList.add('devtools-link-prevent-click');}
a[UI._externalLinkSymbol]=true;}
if(linkText!==url)
a.title=url;a.textContent=linkText.trimMiddle(UI.MaxLengthForDisplayedURLs);a.setAttribute('target','_blank');return a;};UI._externalLinkSymbol=Symbol('UI._externalLink');UI.ExternaLinkContextMenuProvider=class{appendApplicableItems(event,contextMenu,target){var targetNode=(target);while(targetNode&&!targetNode[UI._externalLinkSymbol])
targetNode=targetNode.parentNodeOrShadowHost();if(!targetNode||!targetNode.href)
return;contextMenu.appendItem(UI.openLinkExternallyLabel(),()=>InspectorFrontendHost.openInNewTab(targetNode.href));contextMenu.appendItem(UI.copyLinkAddressLabel(),()=>InspectorFrontendHost.copyText(targetNode.href));}};UI.createDocumentationLink=function(article,title){return UI.createExternalLink('https://developers.google.com/web/tools/chrome-devtools/'+article,title);};UI.loadImage=function(url){return new Promise(fulfill=>{var image=new Image();image.addEventListener('load',()=>fulfill(image));image.addEventListener('error',()=>fulfill(null));image.src=url;});};UI.themeSupport;UI.createFileSelectorElement=function(callback){var fileSelectorElement=createElement('input');fileSelectorElement.type='file';fileSelectorElement.style.display='none';fileSelectorElement.setAttribute('tabindex',-1);fileSelectorElement.onchange=onChange;function onChange(event){callback(fileSelectorElement.files[0]);}
return fileSelectorElement;};UI.MaxLengthForDisplayedURLs=150;UI.ConfirmDialog=class extends UI.VBox{static show(where,message,callback){var dialog=new UI.Dialog();dialog.setSizeBehavior(UI.GlassPane.SizeBehavior.MeasureContent);dialog.addCloseButton();dialog.setDimmed(true);new UI.ConfirmDialog(message,()=>{dialog.hide();callback();},()=>dialog.hide()).show(dialog.contentElement);dialog.show(where);}
constructor(message,okCallback,cancelCallback){super(true);this.registerRequiredCSS('ui/confirmDialog.css');this.contentElement.createChild('div','message').createChild('span').textContent=message;var buttonsBar=this.contentElement.createChild('div','button');buttonsBar.appendChild(UI.createTextButton(Common.UIString('Ok'),okCallback));buttonsBar.appendChild(UI.createTextButton(Common.UIString('Cancel'),cancelCallback));}};;UI.ARIAUtils={};UI.ARIAUtils.markAsGroup=function(element){element.setAttribute('role','group');};UI.ARIAUtils.markAsTab=function(element){element.setAttribute('role','tab');};UI.ARIAUtils.markAsTree=function(element){element.setAttribute('role','tree');};UI.ARIAUtils.markAsTreeitem=function(element){element.setAttribute('role','treeitem');};UI.ARIAUtils.markAsPresentation=function(element){element.setAttribute('role','presentation');};UI.ARIAUtils.setExpanded=function(element,value){element.setAttribute('aria-expanded',!!value);};UI.ARIAUtils.unsetExpanded=function(element){element.removeAttribute('aria-expanded');};UI.ARIAUtils.setSelected=function(element,value){element.setAttribute('aria-selected',!!value);};UI.ARIAUtils.setPressed=function(element,value){element.setAttribute('aria-pressed',!!value);};UI.ARIAUtils.setAccessibleName=function(element,name){element.setAttribute('aria-label',name);};;UI.ZoomManager=class extends Common.Object{constructor(window,frontendHost){super();this._frontendHost=frontendHost;this._zoomFactor=this._frontendHost.zoomFactor();window.addEventListener('resize',this._onWindowResize.bind(this),true);}
zoomFactor(){return this._zoomFactor;}
cssToDIP(value){return value*this._zoomFactor;}
dipToCSS(valueDIP){return valueDIP/this._zoomFactor;}
_onWindowResize(){var oldZoomFactor=this._zoomFactor;this._zoomFactor=this._frontendHost.zoomFactor();if(oldZoomFactor!==this._zoomFactor)
this.dispatchEventToListeners(UI.ZoomManager.Events.ZoomChanged,{from:oldZoomFactor,to:this._zoomFactor});}};UI.ZoomManager.Events={ZoomChanged:Symbol('ZoomChanged')};UI.zoomManager;;UI.ShortcutsScreen=class{constructor(){this._sections={};}
static registerShortcuts(){var elementsSection=UI.shortcutsScreen.section(Common.UIString('Elements Panel'));var navigate=UI.ShortcutsScreen.ElementsPanelShortcuts.NavigateUp.concat(UI.ShortcutsScreen.ElementsPanelShortcuts.NavigateDown);elementsSection.addRelatedKeys(navigate,Common.UIString('Navigate elements'));var expandCollapse=UI.ShortcutsScreen.ElementsPanelShortcuts.Expand.concat(UI.ShortcutsScreen.ElementsPanelShortcuts.Collapse);elementsSection.addRelatedKeys(expandCollapse,Common.UIString('Expand/collapse'));elementsSection.addAlternateKeys(UI.ShortcutsScreen.ElementsPanelShortcuts.EditAttribute,Common.UIString('Edit attribute'));elementsSection.addAlternateKeys(UI.ShortcutsScreen.ElementsPanelShortcuts.HideElement,Common.UIString('Hide element'));elementsSection.addAlternateKeys(UI.ShortcutsScreen.ElementsPanelShortcuts.ToggleEditAsHTML,Common.UIString('Toggle edit as HTML'));var stylesPaneSection=UI.shortcutsScreen.section(Common.UIString('Styles Pane'));var nextPreviousProperty=UI.ShortcutsScreen.ElementsPanelShortcuts.NextProperty.concat(UI.ShortcutsScreen.ElementsPanelShortcuts.PreviousProperty);stylesPaneSection.addRelatedKeys(nextPreviousProperty,Common.UIString('Next/previous property'));stylesPaneSection.addRelatedKeys(UI.ShortcutsScreen.ElementsPanelShortcuts.IncrementValue,Common.UIString('Increment value'));stylesPaneSection.addRelatedKeys(UI.ShortcutsScreen.ElementsPanelShortcuts.DecrementValue,Common.UIString('Decrement value'));stylesPaneSection.addAlternateKeys(UI.ShortcutsScreen.ElementsPanelShortcuts.IncrementBy10,Common.UIString('Increment by %f',10));stylesPaneSection.addAlternateKeys(UI.ShortcutsScreen.ElementsPanelShortcuts.DecrementBy10,Common.UIString('Decrement by %f',10));stylesPaneSection.addAlternateKeys(UI.ShortcutsScreen.ElementsPanelShortcuts.IncrementBy100,Common.UIString('Increment by %f',100));stylesPaneSection.addAlternateKeys(UI.ShortcutsScreen.ElementsPanelShortcuts.DecrementBy100,Common.UIString('Decrement by %f',100));stylesPaneSection.addAlternateKeys(UI.ShortcutsScreen.ElementsPanelShortcuts.IncrementBy01,Common.UIString('Increment by %f',0.1));stylesPaneSection.addAlternateKeys(UI.ShortcutsScreen.ElementsPanelShortcuts.DecrementBy01,Common.UIString('Decrement by %f',0.1));var section=UI.shortcutsScreen.section(Common.UIString('Debugger'));section.addAlternateKeys(UI.shortcutRegistry.shortcutDescriptorsForAction('debugger.toggle-pause'),Common.UIString('Pause/ Continue'));section.addAlternateKeys(UI.shortcutRegistry.shortcutDescriptorsForAction('debugger.step-over'),Common.UIString('Step over'));section.addAlternateKeys(UI.shortcutRegistry.shortcutDescriptorsForAction('debugger.step-into'),Common.UIString('Step into'));section.addAlternateKeys(UI.shortcutRegistry.shortcutDescriptorsForAction('debugger.step-out'),Common.UIString('Step out'));var nextAndPrevFrameKeys=UI.ShortcutsScreen.SourcesPanelShortcuts.NextCallFrame.concat(UI.ShortcutsScreen.SourcesPanelShortcuts.PrevCallFrame);section.addRelatedKeys(nextAndPrevFrameKeys,Common.UIString('Next/previous call frame'));section.addAlternateKeys(UI.ShortcutsScreen.SourcesPanelShortcuts.EvaluateSelectionInConsole,Common.UIString('Evaluate selection in console'));section.addAlternateKeys(UI.ShortcutsScreen.SourcesPanelShortcuts.AddSelectionToWatch,Common.UIString('Add selection to watch'));section.addAlternateKeys(UI.ShortcutsScreen.SourcesPanelShortcuts.ToggleBreakpoint,Common.UIString('Toggle breakpoint'));section.addAlternateKeys(UI.shortcutRegistry.shortcutDescriptorsForAction('debugger.toggle-breakpoints-active'),Common.UIString('Toggle all breakpoints'));section=UI.shortcutsScreen.section(Common.UIString('Text Editor'));section.addAlternateKeys(UI.ShortcutsScreen.SourcesPanelShortcuts.GoToMember,Common.UIString('Go to member'));section.addAlternateKeys(UI.ShortcutsScreen.SourcesPanelShortcuts.ToggleAutocompletion,Common.UIString('Autocompletion'));section.addAlternateKeys(UI.ShortcutsScreen.SourcesPanelShortcuts.GoToLine,Common.UIString('Go to line'));section.addAlternateKeys(UI.ShortcutsScreen.SourcesPanelShortcuts.JumpToPreviousLocation,Common.UIString('Jump to previous editing location'));section.addAlternateKeys(UI.ShortcutsScreen.SourcesPanelShortcuts.JumpToNextLocation,Common.UIString('Jump to next editing location'));section.addAlternateKeys(UI.ShortcutsScreen.SourcesPanelShortcuts.ToggleComment,Common.UIString('Toggle comment'));section.addAlternateKeys(UI.ShortcutsScreen.SourcesPanelShortcuts.IncreaseCSSUnitByOne,Common.UIString('Increment CSS unit by 1'));section.addAlternateKeys(UI.ShortcutsScreen.SourcesPanelShortcuts.DecreaseCSSUnitByOne,Common.UIString('Decrement CSS unit by 1'));section.addAlternateKeys(UI.ShortcutsScreen.SourcesPanelShortcuts.IncreaseCSSUnitByTen,Common.UIString('Increment CSS unit by 10'));section.addAlternateKeys(UI.ShortcutsScreen.SourcesPanelShortcuts.DecreaseCSSUnitByTen,Common.UIString('Decrement CSS unit by 10'));section.addAlternateKeys(UI.ShortcutsScreen.SourcesPanelShortcuts.SelectNextOccurrence,Common.UIString('Select next occurrence'));section.addAlternateKeys(UI.ShortcutsScreen.SourcesPanelShortcuts.SoftUndo,Common.UIString('Soft undo'));section.addAlternateKeys(UI.ShortcutsScreen.SourcesPanelShortcuts.GotoMatchingBracket,Common.UIString('Go to matching bracket'));section.addAlternateKeys(UI.ShortcutsScreen.SourcesPanelShortcuts.CloseEditorTab,Common.UIString('Close editor tab'));section.addAlternateKeys(UI.shortcutRegistry.shortcutDescriptorsForAction('sources.switch-file'),Common.UIString('Switch between files with the same name and different extensions.'));section=UI.shortcutsScreen.section(Common.UIString('Performance Panel'));section.addAlternateKeys(UI.shortcutRegistry.shortcutDescriptorsForAction('timeline.toggle-recording'),Common.UIString('Start/stop recording'));section.addAlternateKeys(UI.shortcutRegistry.shortcutDescriptorsForAction('main.reload'),Common.UIString('Record page reload'));section.addAlternateKeys(UI.shortcutRegistry.shortcutDescriptorsForAction('timeline.save-to-file'),Common.UIString('Save profile'));section.addAlternateKeys(UI.shortcutRegistry.shortcutDescriptorsForAction('timeline.load-from-file'),Common.UIString('Load profile'));section.addRelatedKeys(UI.shortcutRegistry.shortcutDescriptorsForAction('timeline.jump-to-previous-frame').concat(UI.shortcutRegistry.shortcutDescriptorsForAction('timeline.jump-to-next-frame')),Common.UIString('Jump to previous/next frame'));section=UI.shortcutsScreen.section(Common.UIString('Memory Panel'));section.addAlternateKeys(UI.shortcutRegistry.shortcutDescriptorsForAction('profiler.heap-toggle-recording'),Common.UIString('Start/stop recording'));section=UI.shortcutsScreen.section(Common.UIString('Layers Panel'));section.addAlternateKeys(UI.ShortcutsScreen.LayersPanelShortcuts.ResetView,Common.UIString('Reset view'));section.addAlternateKeys(UI.ShortcutsScreen.LayersPanelShortcuts.PanMode,Common.UIString('Switch to pan mode'));section.addAlternateKeys(UI.ShortcutsScreen.LayersPanelShortcuts.RotateMode,Common.UIString('Switch to rotate mode'));section.addAlternateKeys(UI.ShortcutsScreen.LayersPanelShortcuts.TogglePanRotate,Common.UIString('Temporarily toggle pan/rotate mode while held'));section.addAlternateKeys(UI.ShortcutsScreen.LayersPanelShortcuts.ZoomIn,Common.UIString('Zoom in'));section.addAlternateKeys(UI.ShortcutsScreen.LayersPanelShortcuts.ZoomOut,Common.UIString('Zoom out'));section.addRelatedKeys(UI.ShortcutsScreen.LayersPanelShortcuts.Up.concat(UI.ShortcutsScreen.LayersPanelShortcuts.Down),Common.UIString('Pan or rotate up/down'));section.addRelatedKeys(UI.ShortcutsScreen.LayersPanelShortcuts.Left.concat(UI.ShortcutsScreen.LayersPanelShortcuts.Right),Common.UIString('Pan or rotate left/right'));}
section(name){var section=this._sections[name];if(!section)
this._sections[name]=section=new UI.ShortcutsSection(name);return section;}
createShortcutsTabView(){var orderedSections=[];for(var section in this._sections)
orderedSections.push(this._sections[section]);function compareSections(a,b){return a.order-b.order;}
orderedSections.sort(compareSections);var widget=new UI.Widget();widget.element.className='settings-tab-container';widget.element.createChild('header').createChild('h3').createTextChild(Common.UIString('Shortcuts'));var scrollPane=widget.element.createChild('div','help-container-wrapper');var container=scrollPane.createChild('div');container.className='help-content help-container';for(var i=0;i<orderedSections.length;++i)
orderedSections[i].renderSection(container);var note=scrollPane.createChild('p','help-footnote');note.appendChild(UI.createDocumentationLink('iterate/inspect-styles/shortcuts',Common.UIString('Full list of DevTools keyboard shortcuts and gestures')));return widget;}};UI.shortcutsScreen;UI.ShortcutsSection=class{constructor(name){this.name=name;this._lines=([]);this.order=++UI.ShortcutsSection._sequenceNumber;}
addKey(key,description){this._addLine(this._renderKey(key),description);}
addRelatedKeys(keys,description){this._addLine(this._renderSequence(keys,'/'),description);}
addAlternateKeys(keys,description){this._addLine(this._renderSequence(keys,Common.UIString('or')),description);}
_addLine(keyElement,description){this._lines.push({key:keyElement,text:description});}
renderSection(container){var parent=container.createChild('div','help-block');var headLine=parent.createChild('div','help-line');headLine.createChild('div','help-key-cell');headLine.createChild('div','help-section-title help-cell').textContent=this.name;for(var i=0;i<this._lines.length;++i){var line=parent.createChild('div','help-line');var keyCell=line.createChild('div','help-key-cell');keyCell.appendChild(this._lines[i].key);keyCell.appendChild(this._createSpan('help-key-delimiter',':'));line.createChild('div','help-cell').textContent=this._lines[i].text;}}
_renderSequence(sequence,delimiter){var delimiterSpan=this._createSpan('help-key-delimiter',delimiter);return this._joinNodes(sequence.map(this._renderKey.bind(this)),delimiterSpan);}
_renderKey(key){var keyName=key.name;var plus=this._createSpan('help-combine-keys','+');return this._joinNodes(keyName.split(' + ').map(this._createSpan.bind(this,'help-key')),plus);}
_createSpan(className,textContent){var node=createElement('span');node.className=className;node.textContent=textContent;return node;}
_joinNodes(nodes,delimiter){var result=createDocumentFragment();for(var i=0;i<nodes.length;++i){if(i>0)
result.appendChild(delimiter.cloneNode(true));result.appendChild(nodes[i]);}
return result;}};UI.ShortcutsSection._sequenceNumber=0;UI.ShortcutsScreen.ElementsPanelShortcuts={NavigateUp:[UI.KeyboardShortcut.makeDescriptor(UI.KeyboardShortcut.Keys.Up)],NavigateDown:[UI.KeyboardShortcut.makeDescriptor(UI.KeyboardShortcut.Keys.Down)],Expand:[UI.KeyboardShortcut.makeDescriptor(UI.KeyboardShortcut.Keys.Right)],Collapse:[UI.KeyboardShortcut.makeDescriptor(UI.KeyboardShortcut.Keys.Left)],EditAttribute:[UI.KeyboardShortcut.makeDescriptor(UI.KeyboardShortcut.Keys.Enter)],HideElement:[UI.KeyboardShortcut.makeDescriptor(UI.KeyboardShortcut.Keys.H)],ToggleEditAsHTML:[UI.KeyboardShortcut.makeDescriptor(UI.KeyboardShortcut.Keys.F2)],NextProperty:[UI.KeyboardShortcut.makeDescriptor(UI.KeyboardShortcut.Keys.Tab)],PreviousProperty:[UI.KeyboardShortcut.makeDescriptor(UI.KeyboardShortcut.Keys.Tab,UI.KeyboardShortcut.Modifiers.Shift)],IncrementValue:[UI.KeyboardShortcut.makeDescriptor(UI.KeyboardShortcut.Keys.Up)],DecrementValue:[UI.KeyboardShortcut.makeDescriptor(UI.KeyboardShortcut.Keys.Down)],IncrementBy10:[UI.KeyboardShortcut.makeDescriptor(UI.KeyboardShortcut.Keys.PageUp),UI.KeyboardShortcut.makeDescriptor(UI.KeyboardShortcut.Keys.Up,UI.KeyboardShortcut.Modifiers.Shift)],DecrementBy10:[UI.KeyboardShortcut.makeDescriptor(UI.KeyboardShortcut.Keys.PageDown),UI.KeyboardShortcut.makeDescriptor(UI.KeyboardShortcut.Keys.Down,UI.KeyboardShortcut.Modifiers.Shift)],IncrementBy100:[UI.KeyboardShortcut.makeDescriptor(UI.KeyboardShortcut.Keys.PageUp,UI.KeyboardShortcut.Modifiers.Shift)],DecrementBy100:[UI.KeyboardShortcut.makeDescriptor(UI.KeyboardShortcut.Keys.PageDown,UI.KeyboardShortcut.Modifiers.Shift)],IncrementBy01:[UI.KeyboardShortcut.makeDescriptor(UI.KeyboardShortcut.Keys.Up,UI.KeyboardShortcut.Modifiers.Alt)],DecrementBy01:[UI.KeyboardShortcut.makeDescriptor(UI.KeyboardShortcut.Keys.Down,UI.KeyboardShortcut.Modifiers.Alt)]};UI.ShortcutsScreen.SourcesPanelShortcuts={SelectNextOccurrence:[UI.KeyboardShortcut.makeDescriptor('d',UI.KeyboardShortcut.Modifiers.CtrlOrMeta)],SoftUndo:[UI.KeyboardShortcut.makeDescriptor('u',UI.KeyboardShortcut.Modifiers.CtrlOrMeta)],GotoMatchingBracket:[UI.KeyboardShortcut.makeDescriptor('m',UI.KeyboardShortcut.Modifiers.Ctrl)],ToggleAutocompletion:[UI.KeyboardShortcut.makeDescriptor(UI.KeyboardShortcut.Keys.Space,UI.KeyboardShortcut.Modifiers.Ctrl)],IncreaseCSSUnitByOne:[UI.KeyboardShortcut.makeDescriptor(UI.KeyboardShortcut.Keys.Up,UI.KeyboardShortcut.Modifiers.Alt)],DecreaseCSSUnitByOne:[UI.KeyboardShortcut.makeDescriptor(UI.KeyboardShortcut.Keys.Down,UI.KeyboardShortcut.Modifiers.Alt)],IncreaseCSSUnitByTen:[UI.KeyboardShortcut.makeDescriptor(UI.KeyboardShortcut.Keys.PageUp,UI.KeyboardShortcut.Modifiers.Alt)],DecreaseCSSUnitByTen:[UI.KeyboardShortcut.makeDescriptor(UI.KeyboardShortcut.Keys.PageDown,UI.KeyboardShortcut.Modifiers.Alt)],EvaluateSelectionInConsole:[UI.KeyboardShortcut.makeDescriptor('e',UI.KeyboardShortcut.Modifiers.Shift|UI.KeyboardShortcut.Modifiers.Ctrl)],AddSelectionToWatch:[UI.KeyboardShortcut.makeDescriptor('a',UI.KeyboardShortcut.Modifiers.Shift|UI.KeyboardShortcut.Modifiers.Ctrl)],GoToMember:[UI.KeyboardShortcut.makeDescriptor('o',UI.KeyboardShortcut.Modifiers.CtrlOrMeta|UI.KeyboardShortcut.Modifiers.Shift)],GoToLine:[UI.KeyboardShortcut.makeDescriptor('g',UI.KeyboardShortcut.Modifiers.Ctrl)],ToggleBreakpoint:[UI.KeyboardShortcut.makeDescriptor('b',UI.KeyboardShortcut.Modifiers.CtrlOrMeta)],NextCallFrame:[UI.KeyboardShortcut.makeDescriptor(UI.KeyboardShortcut.Keys.Period,UI.KeyboardShortcut.Modifiers.Ctrl)],PrevCallFrame:[UI.KeyboardShortcut.makeDescriptor(UI.KeyboardShortcut.Keys.Comma,UI.KeyboardShortcut.Modifiers.Ctrl)],ToggleComment:[UI.KeyboardShortcut.makeDescriptor(UI.KeyboardShortcut.Keys.Slash,UI.KeyboardShortcut.Modifiers.CtrlOrMeta)],JumpToPreviousLocation:[UI.KeyboardShortcut.makeDescriptor(UI.KeyboardShortcut.Keys.Minus,UI.KeyboardShortcut.Modifiers.Alt)],JumpToNextLocation:[UI.KeyboardShortcut.makeDescriptor(UI.KeyboardShortcut.Keys.Plus,UI.KeyboardShortcut.Modifiers.Alt)],CloseEditorTab:[UI.KeyboardShortcut.makeDescriptor('w',UI.KeyboardShortcut.Modifiers.Alt)],Save:[UI.KeyboardShortcut.makeDescriptor('s',UI.KeyboardShortcut.Modifiers.CtrlOrMeta)],SaveAll:[UI.KeyboardShortcut.makeDescriptor('s',UI.KeyboardShortcut.Modifiers.CtrlOrMeta|UI.KeyboardShortcut.Modifiers.ShiftOrOption)],};UI.ShortcutsScreen.LayersPanelShortcuts={ResetView:[UI.KeyboardShortcut.makeDescriptor('0')],PanMode:[UI.KeyboardShortcut.makeDescriptor('x')],RotateMode:[UI.KeyboardShortcut.makeDescriptor('v')],TogglePanRotate:[UI.KeyboardShortcut.makeDescriptor(UI.KeyboardShortcut.Keys.Shift)],ZoomIn:[UI.KeyboardShortcut.makeDescriptor(UI.KeyboardShortcut.Keys.Plus,UI.KeyboardShortcut.Modifiers.Shift),UI.KeyboardShortcut.makeDescriptor(UI.KeyboardShortcut.Keys.NumpadPlus)],ZoomOut:[UI.KeyboardShortcut.makeDescriptor(UI.KeyboardShortcut.Keys.Minus,UI.KeyboardShortcut.Modifiers.Shift),UI.KeyboardShortcut.makeDescriptor(UI.KeyboardShortcut.Keys.NumpadMinus)],Up:[UI.KeyboardShortcut.makeDescriptor(UI.KeyboardShortcut.Keys.Up),UI.KeyboardShortcut.makeDescriptor('w')],Down:[UI.KeyboardShortcut.makeDescriptor(UI.KeyboardShortcut.Keys.Down),UI.KeyboardShortcut.makeDescriptor('s')],Left:[UI.KeyboardShortcut.makeDescriptor(UI.KeyboardShortcut.Keys.Left),UI.KeyboardShortcut.makeDescriptor('a')],Right:[UI.KeyboardShortcut.makeDescriptor(UI.KeyboardShortcut.Keys.Right),UI.KeyboardShortcut.makeDescriptor('d')]};;UI.Geometry={};UI.Geometry._Eps=1e-5;UI.Geometry.Vector=class{constructor(x,y,z){this.x=x;this.y=y;this.z=z;}
length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z);}
normalize(){var length=this.length();if(length<=UI.Geometry._Eps)
return;this.x/=length;this.y/=length;this.z/=length;}};UI.Geometry.Point=class{constructor(x,y){this.x=x;this.y=y;}
distanceTo(p){return Math.sqrt(Math.pow(p.x-this.x,2)+Math.pow(p.y-this.y,2));}
projectOn(line){if(line.x===0&&line.y===0)
return new UI.Geometry.Point(0,0);return line.scale((this.x*line.x+this.y*line.y)/(Math.pow(line.x,2)+Math.pow(line.y,2)));}
scale(scalar){return new UI.Geometry.Point(this.x*scalar,this.y*scalar);}
toString(){return Math.round(this.x*100)/100+', '+Math.round(this.y*100)/100;}};UI.Geometry.CubicBezier=class{constructor(point1,point2){this.controlPoints=[point1,point2];}
static parse(text){var keywordValues=UI.Geometry.CubicBezier.KeywordValues;var value=text.toLowerCase().replace(/\s+/g,'');if(Object.keys(keywordValues).indexOf(value)!==-1)
return UI.Geometry.CubicBezier.parse(keywordValues[value]);var bezierRegex=/^cubic-bezier\(([^,]+),([^,]+),([^,]+),([^,]+)\)$/;var match=value.match(bezierRegex);if(match){var control1=new UI.Geometry.Point(parseFloat(match[1]),parseFloat(match[2]));var control2=new UI.Geometry.Point(parseFloat(match[3]),parseFloat(match[4]));return new UI.Geometry.CubicBezier(control1,control2);}
return null;}
evaluateAt(t){function evaluate(v1,v2,t){return 3*(1-t)*(1-t)*t*v1+3*(1-t)*t*t*v2+Math.pow(t,3);}
var x=evaluate(this.controlPoints[0].x,this.controlPoints[1].x,t);var y=evaluate(this.controlPoints[0].y,this.controlPoints[1].y,t);return new UI.Geometry.Point(x,y);}
asCSSText(){var raw='cubic-bezier('+this.controlPoints.join(', ')+')';var keywordValues=UI.Geometry.CubicBezier.KeywordValues;for(var keyword in keywordValues){if(raw===keywordValues[keyword])
return keyword;}
return raw;}};UI.Geometry.CubicBezier.Regex=/((cubic-bezier\([^)]+\))|\b(linear|ease-in-out|ease-in|ease-out|ease)\b)/g;UI.Geometry.CubicBezier.KeywordValues={'linear':'cubic-bezier(0, 0, 1, 1)','ease':'cubic-bezier(0.25, 0.1, 0.25, 1)','ease-in':'cubic-bezier(0.42, 0, 1, 1)','ease-in-out':'cubic-bezier(0.42, 0, 0.58, 1)','ease-out':'cubic-bezier(0, 0, 0.58, 1)'};UI.Geometry.EulerAngles=class{constructor(alpha,beta,gamma){this.alpha=alpha;this.beta=beta;this.gamma=gamma;}
static fromRotationMatrix(rotationMatrix){var beta=Math.atan2(rotationMatrix.m23,rotationMatrix.m33);var gamma=Math.atan2(-rotationMatrix.m13,Math.sqrt(rotationMatrix.m11*rotationMatrix.m11+rotationMatrix.m12*rotationMatrix.m12));var alpha=Math.atan2(rotationMatrix.m12,rotationMatrix.m11);return new UI.Geometry.EulerAngles(UI.Geometry.radiansToDegrees(alpha),UI.Geometry.radiansToDegrees(beta),UI.Geometry.radiansToDegrees(gamma));}
toRotate3DString(){var gammaAxisY=-Math.sin(UI.Geometry.degreesToRadians(this.beta));var gammaAxisZ=Math.cos(UI.Geometry.degreesToRadians(this.beta));var axis={alpha:[0,1,0],beta:[-1,0,0],gamma:[0,gammaAxisY,gammaAxisZ]};return'rotate3d('+axis.alpha.join(',')+','+this.alpha+'deg) '+'rotate3d('+axis.beta.join(',')+','+this.beta+'deg) '+'rotate3d('+axis.gamma.join(',')+','+this.gamma+'deg)';}};UI.Geometry.scalarProduct=function(u,v){return u.x*v.x+u.y*v.y+u.z*v.z;};UI.Geometry.crossProduct=function(u,v){var x=u.y*v.z-u.z*v.y;var y=u.z*v.x-u.x*v.z;var z=u.x*v.y-u.y*v.x;return new UI.Geometry.Vector(x,y,z);};UI.Geometry.subtract=function(u,v){var x=u.x-v.x;var y=u.y-v.y;var z=u.z-v.z;return new UI.Geometry.Vector(x,y,z);};UI.Geometry.multiplyVectorByMatrixAndNormalize=function(v,m){var t=v.x*m.m14+v.y*m.m24+v.z*m.m34+m.m44;var x=(v.x*m.m11+v.y*m.m21+v.z*m.m31+m.m41)/t;var y=(v.x*m.m12+v.y*m.m22+v.z*m.m32+m.m42)/t;var z=(v.x*m.m13+v.y*m.m23+v.z*m.m33+m.m43)/t;return new UI.Geometry.Vector(x,y,z);};UI.Geometry.calculateAngle=function(u,v){var uLength=u.length();var vLength=v.length();if(uLength<=UI.Geometry._Eps||vLength<=UI.Geometry._Eps)
return 0;var cos=UI.Geometry.scalarProduct(u,v)/uLength/vLength;if(Math.abs(cos)>1)
return 0;return UI.Geometry.radiansToDegrees(Math.acos(cos));};UI.Geometry.degreesToRadians=function(deg){return deg*Math.PI/180;};UI.Geometry.radiansToDegrees=function(rad){return rad*180/Math.PI;};UI.Geometry.boundsForTransformedPoints=function(matrix,points,aggregateBounds){if(!aggregateBounds)
aggregateBounds={minX:Infinity,maxX:-Infinity,minY:Infinity,maxY:-Infinity};if(points.length%3)
console.assert('Invalid size of points array');for(var p=0;p<points.length;p+=3){var vector=new UI.Geometry.Vector(points[p],points[p+1],points[p+2]);vector=UI.Geometry.multiplyVectorByMatrixAndNormalize(vector,matrix);aggregateBounds.minX=Math.min(aggregateBounds.minX,vector.x);aggregateBounds.maxX=Math.max(aggregateBounds.maxX,vector.x);aggregateBounds.minY=Math.min(aggregateBounds.minY,vector.y);aggregateBounds.maxY=Math.max(aggregateBounds.maxY,vector.y);}
return aggregateBounds;};UI.Size=class{constructor(width,height){this.width=width;this.height=height;}
clipTo(size){if(!size)
return this;return new UI.Size(Math.min(this.width,size.width),Math.min(this.height,size.height));}};UI.Size.prototype.isEqual=function(size){return!!size&&this.width===size.width&&this.height===size.height;};UI.Size.prototype.widthToMax=function(size){return new UI.Size(Math.max(this.width,(typeof size==='number'?size:size.width)),this.height);};UI.Size.prototype.addWidth=function(size){return new UI.Size(this.width+(typeof size==='number'?size:size.width),this.height);};UI.Size.prototype.heightToMax=function(size){return new UI.Size(this.width,Math.max(this.height,(typeof size==='number'?size:size.height)));};UI.Size.prototype.addHeight=function(size){return new UI.Size(this.width,this.height+(typeof size==='number'?size:size.height));};UI.Insets=class{constructor(left,top,right,bottom){this.left=left;this.top=top;this.right=right;this.bottom=bottom;}
isEqual(insets){return!!insets&&this.left===insets.left&&this.top===insets.top&&this.right===insets.right&&this.bottom===insets.bottom;}};UI.Rect=class{constructor(left,top,width,height){this.left=left;this.top=top;this.width=width;this.height=height;}
isEqual(rect){return!!rect&&this.left===rect.left&&this.top===rect.top&&this.width===rect.width&&this.height===rect.height;}
scale(scale){return new UI.Rect(this.left*scale,this.top*scale,this.width*scale,this.height*scale);}
size(){return new UI.Size(this.width,this.height);}};UI.Constraints=class{constructor(minimum,preferred){this.minimum=minimum||new UI.Size(0,0);this.preferred=preferred||this.minimum;if(this.minimum.width>this.preferred.width||this.minimum.height>this.preferred.height)
throw new Error('Minimum size is greater than preferred.');}};UI.Constraints.prototype.isEqual=function(constraints){return!!constraints&&this.minimum.isEqual(constraints.minimum)&&this.preferred.isEqual(constraints.preferred);};UI.Constraints.prototype.widthToMax=function(value){if(typeof value==='number')
return new UI.Constraints(this.minimum.widthToMax(value),this.preferred.widthToMax(value));return new UI.Constraints(this.minimum.widthToMax(value.minimum),this.preferred.widthToMax(value.preferred));};UI.Constraints.prototype.addWidth=function(value){if(typeof value==='number')
return new UI.Constraints(this.minimum.addWidth(value),this.preferred.addWidth(value));return new UI.Constraints(this.minimum.addWidth(value.minimum),this.preferred.addWidth(value.preferred));};UI.Constraints.prototype.heightToMax=function(value){if(typeof value==='number')
return new UI.Constraints(this.minimum.heightToMax(value),this.preferred.heightToMax(value));return new UI.Constraints(this.minimum.heightToMax(value.minimum),this.preferred.heightToMax(value.preferred));};UI.Constraints.prototype.addHeight=function(value){if(typeof value==='number')
return new UI.Constraints(this.minimum.addHeight(value),this.preferred.addHeight(value));return new UI.Constraints(this.minimum.addHeight(value.minimum),this.preferred.addHeight(value.preferred));};;self['Cm']=self['Cm']||{};(function(mod){if(typeof exports=="object"&&typeof module=="object")
module.exports=mod();else if(typeof define=="function"&&define.amd)
return define([],mod);else
(this||window).CodeMirror=mod();})(function(){"use strict";var userAgent=navigator.userAgent;var platform=navigator.platform;var gecko=/gecko\/\d/i.test(userAgent);var ie_upto10=/MSIE \d/.test(userAgent);var ie_11up=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(userAgent);var ie=ie_upto10||ie_11up;var ie_version=ie&&(ie_upto10?document.documentMode||6:ie_11up[1]);var webkit=/WebKit\//.test(userAgent);var qtwebkit=webkit&&/Qt\/\d+\.\d+/.test(userAgent);var chrome=/Chrome\//.test(userAgent);var presto=/Opera\//.test(userAgent);var safari=/Apple Computer/.test(navigator.vendor);var mac_geMountainLion=/Mac OS X 1\d\D([8-9]|\d\d)\D/.test(userAgent);var phantom=/PhantomJS/.test(userAgent);var ios=/AppleWebKit/.test(userAgent)&&/Mobile\/\w+/.test(userAgent);var mobile=ios||/Android|webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(userAgent);var mac=ios||/Mac/.test(platform);var chromeOS=/\bCrOS\b/.test(userAgent);var windows=/win/i.test(platform);var presto_version=presto&&userAgent.match(/Version\/(\d*\.\d*)/);if(presto_version)presto_version=Number(presto_version[1]);if(presto_version&&presto_version>=15){presto=false;webkit=true;}
var flipCtrlCmd=mac&&(qtwebkit||presto&&(presto_version==null||presto_version<12.11));var captureRightClick=gecko||(ie&&ie_version>=9);var sawReadOnlySpans=false,sawCollapsedSpans=false;function CodeMirror(place,options){if(!(this instanceof CodeMirror))return new CodeMirror(place,options);this.options=options=options?copyObj(options):{};copyObj(defaults,options,false);setGuttersForLineNumbers(options);var doc=options.value;if(typeof doc=="string")doc=new Doc(doc,options.mode,null,options.lineSeparator);this.doc=doc;var input=new CodeMirror.inputStyles[options.inputStyle](this);var display=this.display=new Display(place,doc,input);display.wrapper.CodeMirror=this;updateGutters(this);themeChanged(this);if(options.lineWrapping)
this.display.wrapper.className+=" CodeMirror-wrap";if(options.autofocus&&!mobile)display.input.focus();initScrollbars(this);this.state={keyMaps:[],overlays:[],modeGen:0,overwrite:false,delayingBlurEvent:false,focused:false,suppressEdits:false,pasteIncoming:false,cutIncoming:false,selectingText:false,draggingText:false,highlight:new Delayed(),keySeq:null,specialChars:null};var cm=this;if(ie&&ie_version<11)setTimeout(function(){cm.display.input.reset(true);},20);registerEventHandlers(this);ensureGlobalHandlers();startOperation(this);this.curOp.forceUpdate=true;attachDoc(this,doc);if((options.autofocus&&!mobile)||cm.hasFocus())
setTimeout(bind(onFocus,this),20);else
onBlur(this);for(var opt in optionHandlers)if(optionHandlers.hasOwnProperty(opt))
optionHandlers[opt](this,options[opt],Init);maybeUpdateLineNumberWidth(this);if(options.finishInit)options.finishInit(this);for(var i=0;i<initHooks.length;++i)initHooks[i](this);endOperation(this);if(webkit&&options.lineWrapping&&getComputedStyle(display.lineDiv).textRendering=="optimizelegibility")
display.lineDiv.style.textRendering="auto";}
function Display(place,doc,input){var d=this;this.input=input;d.scrollbarFiller=elt("div",null,"CodeMirror-scrollbar-filler");d.scrollbarFiller.setAttribute("cm-not-content","true");d.gutterFiller=elt("div",null,"CodeMirror-gutter-filler");d.gutterFiller.setAttribute("cm-not-content","true");d.lineDiv=elt("div",null,"CodeMirror-code");d.selectionDiv=elt("div",null,null,"position: relative; z-index: 1");d.cursorDiv=elt("div",null,"CodeMirror-cursors");d.measure=elt("div",null,"CodeMirror-measure");d.lineMeasure=elt("div",null,"CodeMirror-measure");d.lineSpace=elt("div",[d.measure,d.lineMeasure,d.selectionDiv,d.cursorDiv,d.lineDiv],null,"position: relative; outline: none");d.mover=elt("div",[elt("div",[d.lineSpace],"CodeMirror-lines")],null,"position: relative");d.sizer=elt("div",[d.mover],"CodeMirror-sizer");d.sizerWidth=null;d.heightForcer=elt("div",null,null,"position: absolute; height: "+scrollerGap+"px; width: 1px;");d.gutters=elt("div",null,"CodeMirror-gutters");d.lineGutter=null;d.scroller=elt("div",[d.sizer,d.heightForcer,d.gutters],"CodeMirror-scroll");d.scroller.setAttribute("tabIndex","-1");d.wrapper=elt("div",[d.scrollbarFiller,d.gutterFiller,d.scroller],"CodeMirror");if(ie&&ie_version<8){d.gutters.style.zIndex=-1;d.scroller.style.paddingRight=0;}
if(!webkit&&!(gecko&&mobile))d.scroller.draggable=true;if(place){if(place.appendChild)place.appendChild(d.wrapper);else place(d.wrapper);}
d.viewFrom=d.viewTo=doc.first;d.reportedViewFrom=d.reportedViewTo=doc.first;d.view=[];d.renderedView=null;d.externalMeasured=null;d.viewOffset=0;d.lastWrapHeight=d.lastWrapWidth=0;d.updateLineNumbers=null;d.nativeBarWidth=d.barHeight=d.barWidth=0;d.scrollbarsClipped=false;d.lineNumWidth=d.lineNumInnerWidth=d.lineNumChars=null;d.alignWidgets=false;d.cachedCharWidth=d.cachedTextHeight=d.cachedPaddingH=null;d.maxLine=null;d.maxLineLength=0;d.maxLineChanged=false;d.wheelDX=d.wheelDY=d.wheelStartX=d.wheelStartY=null;d.shift=false;d.selForContextMenu=null;d.activeTouch=null;input.init(d);}
function loadMode(cm){cm.doc.mode=CodeMirror.getMode(cm.options,cm.doc.modeOption);resetModeState(cm);}
function resetModeState(cm){cm.doc.iter(function(line){if(line.stateAfter)line.stateAfter=null;if(line.styles)line.styles=null;});cm.doc.frontier=cm.doc.first;startWorker(cm,100);cm.state.modeGen++;if(cm.curOp)regChange(cm);}
function wrappingChanged(cm){if(cm.options.lineWrapping){addClass(cm.display.wrapper,"CodeMirror-wrap");cm.display.sizer.style.minWidth="";cm.display.sizerWidth=null;}else{rmClass(cm.display.wrapper,"CodeMirror-wrap");findMaxLine(cm);}
estimateLineHeights(cm);regChange(cm);clearCaches(cm);setTimeout(function(){updateScrollbars(cm);},100);}
function estimateHeight(cm){var th=textHeight(cm.display),wrapping=cm.options.lineWrapping;var perLine=wrapping&&Math.max(5,cm.display.scroller.clientWidth/charWidth(cm.display)-3);return function(line){if(lineIsHidden(cm.doc,line))return 0;var widgetsHeight=0;if(line.widgets)for(var i=0;i<line.widgets.length;i++){if(line.widgets[i].height)widgetsHeight+=line.widgets[i].height;}
if(wrapping)
return widgetsHeight+(Math.ceil(line.text.length/perLine)||1)*th;else
return widgetsHeight+th;};}
function estimateLineHeights(cm){var doc=cm.doc,est=estimateHeight(cm);doc.iter(function(line){var estHeight=est(line);if(estHeight!=line.height)updateLineHeight(line,estHeight);});}
function themeChanged(cm){cm.display.wrapper.className=cm.display.wrapper.className.replace(/\s*cm-s-\S+/g,"")+
cm.options.theme.replace(/(^|\s)\s*/g," cm-s-");clearCaches(cm);}
function guttersChanged(cm){updateGutters(cm);regChange(cm);setTimeout(function(){alignHorizontally(cm);},20);}
function updateGutters(cm){var gutters=cm.display.gutters,specs=cm.options.gutters;removeChildren(gutters);for(var i=0;i<specs.length;++i){var gutterClass=specs[i];var gElt=gutters.appendChild(elt("div",null,"CodeMirror-gutter "+gutterClass));if(gutterClass=="CodeMirror-linenumbers"){cm.display.lineGutter=gElt;gElt.style.width=(cm.display.lineNumWidth||1)+"px";}}
gutters.style.display=i?"":"none";updateGutterSpace(cm);}
function updateGutterSpace(cm){var width=cm.display.gutters.offsetWidth;cm.display.sizer.style.marginLeft=width+"px";}
function lineLength(line){if(line.height==0)return 0;var len=line.text.length,merged,cur=line;while(merged=collapsedSpanAtStart(cur)){var found=merged.find(0,true);cur=found.from.line;len+=found.from.ch-found.to.ch;}
cur=line;while(merged=collapsedSpanAtEnd(cur)){var found=merged.find(0,true);len-=cur.text.length-found.from.ch;cur=found.to.line;len+=cur.text.length-found.to.ch;}
return len;}
function findMaxLine(cm){var d=cm.display,doc=cm.doc;d.maxLine=getLine(doc,doc.first);d.maxLineLength=lineLength(d.maxLine);d.maxLineChanged=true;doc.iter(function(line){var len=lineLength(line);if(len>d.maxLineLength){d.maxLineLength=len;d.maxLine=line;}});}
function setGuttersForLineNumbers(options){var found=indexOf(options.gutters,"CodeMirror-linenumbers");if(found==-1&&options.lineNumbers){options.gutters=options.gutters.concat(["CodeMirror-linenumbers"]);}else if(found>-1&&!options.lineNumbers){options.gutters=options.gutters.slice(0);options.gutters.splice(found,1);}}
function measureForScrollbars(cm){var d=cm.display,gutterW=d.gutters.offsetWidth;var docH=Math.round(cm.doc.height+paddingVert(cm.display));return{clientHeight:d.scroller.clientHeight,viewHeight:d.wrapper.clientHeight,scrollWidth:d.scroller.scrollWidth,clientWidth:d.scroller.clientWidth,viewWidth:d.wrapper.clientWidth,barLeft:cm.options.fixedGutter?gutterW:0,docHeight:docH,scrollHeight:docH+scrollGap(cm)+d.barHeight,nativeBarWidth:d.nativeBarWidth,gutterWidth:gutterW};}
function NativeScrollbars(place,scroll,cm){this.cm=cm;var vert=this.vert=elt("div",[elt("div",null,null,"min-width: 1px")],"CodeMirror-vscrollbar");var horiz=this.horiz=elt("div",[elt("div",null,null,"height: 100%; min-height: 1px")],"CodeMirror-hscrollbar");place(vert);place(horiz);on(vert,"scroll",function(){if(vert.clientHeight)scroll(vert.scrollTop,"vertical");});on(horiz,"scroll",function(){if(horiz.clientWidth)scroll(horiz.scrollLeft,"horizontal");});this.checkedZeroWidth=false;if(ie&&ie_version<8)this.horiz.style.minHeight=this.vert.style.minWidth="18px";}
NativeScrollbars.prototype=copyObj({update:function(measure){var needsH=measure.scrollWidth>measure.clientWidth+1;var needsV=measure.scrollHeight>measure.clientHeight+1;var sWidth=measure.nativeBarWidth;if(needsV){this.vert.style.display="block";this.vert.style.bottom=needsH?sWidth+"px":"0";var totalHeight=measure.viewHeight-(needsH?sWidth:0);this.vert.firstChild.style.height=Math.max(0,measure.scrollHeight-measure.clientHeight+totalHeight)+"px";}else{this.vert.style.display="";this.vert.firstChild.style.height="0";}
if(needsH){this.horiz.style.display="block";this.horiz.style.right=needsV?sWidth+"px":"0";this.horiz.style.left=measure.barLeft+"px";var totalWidth=measure.viewWidth-measure.barLeft-(needsV?sWidth:0);this.horiz.firstChild.style.width=(measure.scrollWidth-measure.clientWidth+totalWidth)+"px";}else{this.horiz.style.display="";this.horiz.firstChild.style.width="0";}
if(!this.checkedZeroWidth&&measure.clientHeight>0){if(sWidth==0)this.zeroWidthHack();this.checkedZeroWidth=true;}
return{right:needsV?sWidth:0,bottom:needsH?sWidth:0};},setScrollLeft:function(pos){if(this.horiz.scrollLeft!=pos)this.horiz.scrollLeft=pos;if(this.disableHoriz)this.enableZeroWidthBar(this.horiz,this.disableHoriz);},setScrollTop:function(pos){if(this.vert.scrollTop!=pos)this.vert.scrollTop=pos;if(this.disableVert)this.enableZeroWidthBar(this.vert,this.disableVert);},zeroWidthHack:function(){var w=mac&&!mac_geMountainLion?"12px":"18px";this.horiz.style.height=this.vert.style.width=w;this.horiz.style.pointerEvents=this.vert.style.pointerEvents="none";this.disableHoriz=new Delayed;this.disableVert=new Delayed;},enableZeroWidthBar:function(bar,delay){bar.style.pointerEvents="auto";function maybeDisable(){var box=bar.getBoundingClientRect();var elt=document.elementFromPoint(box.left+1,box.bottom-1);if(elt!=bar)bar.style.pointerEvents="none";else delay.set(1000,maybeDisable);}
delay.set(1000,maybeDisable);},clear:function(){var parent=this.horiz.parentNode;parent.removeChild(this.horiz);parent.removeChild(this.vert);}},NativeScrollbars.prototype);function NullScrollbars(){}
NullScrollbars.prototype=copyObj({update:function(){return{bottom:0,right:0};},setScrollLeft:function(){},setScrollTop:function(){},clear:function(){}},NullScrollbars.prototype);CodeMirror.scrollbarModel={"native":NativeScrollbars,"null":NullScrollbars};function initScrollbars(cm){if(cm.display.scrollbars){cm.display.scrollbars.clear();if(cm.display.scrollbars.addClass)
rmClass(cm.display.wrapper,cm.display.scrollbars.addClass);}
cm.display.scrollbars=new CodeMirror.scrollbarModel[cm.options.scrollbarStyle](function(node){cm.display.wrapper.insertBefore(node,cm.display.scrollbarFiller);on(node,"mousedown",function(){if(cm.state.focused)setTimeout(function(){cm.display.input.focus();},0);});node.setAttribute("cm-not-content","true");},function(pos,axis){if(axis=="horizontal")setScrollLeft(cm,pos);else setScrollTop(cm,pos);},cm);if(cm.display.scrollbars.addClass)
addClass(cm.display.wrapper,cm.display.scrollbars.addClass);}
function updateScrollbars(cm,measure){if(!measure)measure=measureForScrollbars(cm);var startWidth=cm.display.barWidth,startHeight=cm.display.barHeight;updateScrollbarsInner(cm,measure);for(var i=0;i<4&&startWidth!=cm.display.barWidth||startHeight!=cm.display.barHeight;i++){if(startWidth!=cm.display.barWidth&&cm.options.lineWrapping)
updateHeightsInViewport(cm);updateScrollbarsInner(cm,measureForScrollbars(cm));startWidth=cm.display.barWidth;startHeight=cm.display.barHeight;}}
function updateScrollbarsInner(cm,measure){var d=cm.display;var sizes=d.scrollbars.update(measure);d.sizer.style.paddingRight=(d.barWidth=sizes.right)+"px";d.sizer.style.paddingBottom=(d.barHeight=sizes.bottom)+"px";d.heightForcer.style.borderBottom=sizes.bottom+"px solid transparent"
if(sizes.right&&sizes.bottom){d.scrollbarFiller.style.display="block";d.scrollbarFiller.style.height=sizes.bottom+"px";d.scrollbarFiller.style.width=sizes.right+"px";}else d.scrollbarFiller.style.display="";if(sizes.bottom&&cm.options.coverGutterNextToScrollbar&&cm.options.fixedGutter){d.gutterFiller.style.display="block";d.gutterFiller.style.height=sizes.bottom+"px";d.gutterFiller.style.width=measure.gutterWidth+"px";}else d.gutterFiller.style.display="";}
function visibleLines(display,doc,viewport){var top=viewport&&viewport.top!=null?Math.max(0,viewport.top):display.scroller.scrollTop;top=Math.floor(top-paddingTop(display));var bottom=viewport&&viewport.bottom!=null?viewport.bottom:top+display.wrapper.clientHeight;var from=lineAtHeight(doc,top),to=lineAtHeight(doc,bottom);if(viewport&&viewport.ensure){var ensureFrom=viewport.ensure.from.line,ensureTo=viewport.ensure.to.line;if(ensureFrom<from){from=ensureFrom;to=lineAtHeight(doc,heightAtLine(getLine(doc,ensureFrom))+display.wrapper.clientHeight);}else if(Math.min(ensureTo,doc.lastLine())>=to){from=lineAtHeight(doc,heightAtLine(getLine(doc,ensureTo))-display.wrapper.clientHeight);to=ensureTo;}}
return{from:from,to:Math.max(to,from+1)};}
function alignHorizontally(cm){var display=cm.display,view=display.view;if(!display.alignWidgets&&(!display.gutters.firstChild||!cm.options.fixedGutter))return;var comp=compensateForHScroll(display)-display.scroller.scrollLeft+cm.doc.scrollLeft;var gutterW=display.gutters.offsetWidth,left=comp+"px";for(var i=0;i<view.length;i++)if(!view[i].hidden){if(cm.options.fixedGutter){if(view[i].gutter)
view[i].gutter.style.left=left;if(view[i].gutterBackground)
view[i].gutterBackground.style.left=left;}
var align=view[i].alignable;if(align)for(var j=0;j<align.length;j++)
align[j].style.left=left;}
if(cm.options.fixedGutter)
display.gutters.style.left=(comp+gutterW)+"px";}
function maybeUpdateLineNumberWidth(cm){if(!cm.options.lineNumbers)return false;var doc=cm.doc,last=lineNumberFor(cm.options,doc.first+doc.size-1),display=cm.display;if(last.length!=display.lineNumChars){var test=display.measure.appendChild(elt("div",[elt("div",last)],"CodeMirror-linenumber CodeMirror-gutter-elt"));var innerW=test.firstChild.offsetWidth,padding=test.offsetWidth-innerW;display.lineGutter.style.width="";display.lineNumInnerWidth=Math.max(innerW,display.lineGutter.offsetWidth-padding)+1;display.lineNumWidth=display.lineNumInnerWidth+padding;display.lineNumChars=display.lineNumInnerWidth?last.length:-1;display.lineGutter.style.width=display.lineNumWidth+"px";updateGutterSpace(cm);return true;}
return false;}
function lineNumberFor(options,i){return String(options.lineNumberFormatter(i+options.firstLineNumber));}
function compensateForHScroll(display){return display.scroller.getBoundingClientRect().left-display.sizer.getBoundingClientRect().left;}
function DisplayUpdate(cm,viewport,force){var display=cm.display;this.viewport=viewport;this.visible=visibleLines(display,cm.doc,viewport);this.editorIsHidden=!display.wrapper.offsetWidth;this.wrapperHeight=display.wrapper.clientHeight;this.wrapperWidth=display.wrapper.clientWidth;this.oldDisplayWidth=displayWidth(cm);this.force=force;this.dims=getDimensions(cm);this.events=[];}
DisplayUpdate.prototype.signal=function(emitter,type){if(hasHandler(emitter,type))
this.events.push(arguments);};DisplayUpdate.prototype.finish=function(){for(var i=0;i<this.events.length;i++)
signal.apply(null,this.events[i]);};function maybeClipScrollbars(cm){var display=cm.display;if(!display.scrollbarsClipped&&display.scroller.offsetWidth){display.nativeBarWidth=display.scroller.offsetWidth-display.scroller.clientWidth;display.heightForcer.style.height=scrollGap(cm)+"px";display.sizer.style.marginBottom=-display.nativeBarWidth+"px";display.sizer.style.borderRightWidth=scrollGap(cm)+"px";display.scrollbarsClipped=true;}}
function updateDisplayIfNeeded(cm,update){var display=cm.display,doc=cm.doc;if(update.editorIsHidden){resetView(cm);return false;}
if(!update.force&&update.visible.from>=display.viewFrom&&update.visible.to<=display.viewTo&&(display.updateLineNumbers==null||display.updateLineNumbers>=display.viewTo)&&display.renderedView==display.view&&countDirtyView(cm)==0)
return false;if(maybeUpdateLineNumberWidth(cm)){resetView(cm);update.dims=getDimensions(cm);}
var end=doc.first+doc.size;var from=Math.max(update.visible.from-cm.options.viewportMargin,doc.first);var to=Math.min(end,update.visible.to+cm.options.viewportMargin);if(display.viewFrom<from&&from-display.viewFrom<20)from=Math.max(doc.first,display.viewFrom);if(display.viewTo>to&&display.viewTo-to<20)to=Math.min(end,display.viewTo);if(sawCollapsedSpans){from=visualLineNo(cm.doc,from);to=visualLineEndNo(cm.doc,to);}
var different=from!=display.viewFrom||to!=display.viewTo||display.lastWrapHeight!=update.wrapperHeight||display.lastWrapWidth!=update.wrapperWidth;adjustView(cm,from,to);display.viewOffset=heightAtLine(getLine(cm.doc,display.viewFrom));cm.display.mover.style.top=display.viewOffset+"px";var toUpdate=countDirtyView(cm);if(!different&&toUpdate==0&&!update.force&&display.renderedView==display.view&&(display.updateLineNumbers==null||display.updateLineNumbers>=display.viewTo))
return false;var focused=activeElt();if(toUpdate>4)display.lineDiv.style.display="none";patchDisplay(cm,display.updateLineNumbers,update.dims);if(toUpdate>4)display.lineDiv.style.display="";display.renderedView=display.view;if(focused&&activeElt()!=focused&&focused.offsetHeight)focused.focus();removeChildren(display.cursorDiv);removeChildren(display.selectionDiv);display.gutters.style.height=display.sizer.style.minHeight=0;if(different){display.lastWrapHeight=update.wrapperHeight;display.lastWrapWidth=update.wrapperWidth;startWorker(cm,400);}
display.updateLineNumbers=null;return true;}
function postUpdateDisplay(cm,update){var viewport=update.viewport;for(var first=true;;first=false){if(!first||!cm.options.lineWrapping||update.oldDisplayWidth==displayWidth(cm)){if(viewport&&viewport.top!=null)
viewport={top:Math.min(cm.doc.height+paddingVert(cm.display)-displayHeight(cm),viewport.top)};update.visible=visibleLines(cm.display,cm.doc,viewport);if(update.visible.from>=cm.display.viewFrom&&update.visible.to<=cm.display.viewTo)
break;}
if(!updateDisplayIfNeeded(cm,update))break;updateHeightsInViewport(cm);var barMeasure=measureForScrollbars(cm);updateSelection(cm);updateScrollbars(cm,barMeasure);setDocumentHeight(cm,barMeasure);}
update.signal(cm,"update",cm);if(cm.display.viewFrom!=cm.display.reportedViewFrom||cm.display.viewTo!=cm.display.reportedViewTo){update.signal(cm,"viewportChange",cm,cm.display.viewFrom,cm.display.viewTo);cm.display.reportedViewFrom=cm.display.viewFrom;cm.display.reportedViewTo=cm.display.viewTo;}}
function updateDisplaySimple(cm,viewport){var update=new DisplayUpdate(cm,viewport);if(updateDisplayIfNeeded(cm,update)){updateHeightsInViewport(cm);postUpdateDisplay(cm,update);var barMeasure=measureForScrollbars(cm);updateSelection(cm);updateScrollbars(cm,barMeasure);setDocumentHeight(cm,barMeasure);update.finish();}}
function setDocumentHeight(cm,measure){cm.display.sizer.style.minHeight=measure.docHeight+"px";cm.display.heightForcer.style.top=measure.docHeight+"px";cm.display.gutters.style.height=(measure.docHeight+cm.display.barHeight+scrollGap(cm))+"px";}
function updateHeightsInViewport(cm){var display=cm.display;var prevBottom=display.lineDiv.offsetTop;for(var i=0;i<display.view.length;i++){var cur=display.view[i],height;if(cur.hidden)continue;if(ie&&ie_version<8){var bot=cur.node.offsetTop+cur.node.offsetHeight;height=bot-prevBottom;prevBottom=bot;}else{var box=cur.node.getBoundingClientRect();height=box.bottom-box.top;}
var diff=cur.line.height-height;if(height<2)height=textHeight(display);if(diff>.001||diff<-.001){updateLineHeight(cur.line,height);updateWidgetHeight(cur.line);if(cur.rest)for(var j=0;j<cur.rest.length;j++)
updateWidgetHeight(cur.rest[j]);}}}
function updateWidgetHeight(line){if(line.widgets)for(var i=0;i<line.widgets.length;++i)
line.widgets[i].height=line.widgets[i].node.parentNode.offsetHeight;}
function getDimensions(cm){var d=cm.display,left={},width={};var gutterLeft=d.gutters.clientLeft;for(var n=d.gutters.firstChild,i=0;n;n=n.nextSibling,++i){left[cm.options.gutters[i]]=n.offsetLeft+n.clientLeft+gutterLeft;width[cm.options.gutters[i]]=n.clientWidth;}
return{fixedPos:compensateForHScroll(d),gutterTotalWidth:d.gutters.offsetWidth,gutterLeft:left,gutterWidth:width,wrapperWidth:d.wrapper.clientWidth};}
function patchDisplay(cm,updateNumbersFrom,dims){var display=cm.display,lineNumbers=cm.options.lineNumbers;var container=display.lineDiv,cur=container.firstChild;function rm(node){var next=node.nextSibling;if(webkit&&mac&&cm.display.currentWheelTarget==node)
node.style.display="none";else
node.parentNode.removeChild(node);return next;}
var view=display.view,lineN=display.viewFrom;for(var i=0;i<view.length;i++){var lineView=view[i];if(lineView.hidden){}else if(!lineView.node||lineView.node.parentNode!=container){var node=buildLineElement(cm,lineView,lineN,dims);container.insertBefore(node,cur);}else{while(cur!=lineView.node)cur=rm(cur);var updateNumber=lineNumbers&&updateNumbersFrom!=null&&updateNumbersFrom<=lineN&&lineView.lineNumber;if(lineView.changes){if(indexOf(lineView.changes,"gutter")>-1)updateNumber=false;updateLineForChanges(cm,lineView,lineN,dims);}
if(updateNumber){removeChildren(lineView.lineNumber);lineView.lineNumber.appendChild(document.createTextNode(lineNumberFor(cm.options,lineN)));}
cur=lineView.node.nextSibling;}
lineN+=lineView.size;}
while(cur)cur=rm(cur);}
function updateLineForChanges(cm,lineView,lineN,dims){for(var j=0;j<lineView.changes.length;j++){var type=lineView.changes[j];if(type=="text")updateLineText(cm,lineView);else if(type=="gutter")updateLineGutter(cm,lineView,lineN,dims);else if(type=="class")updateLineClasses(lineView);else if(type=="widget")updateLineWidgets(cm,lineView,dims);}
lineView.changes=null;}
function ensureLineWrapped(lineView){if(lineView.node==lineView.text){lineView.node=elt("div",null,null,"position: relative");if(lineView.text.parentNode)
lineView.text.parentNode.replaceChild(lineView.node,lineView.text);lineView.node.appendChild(lineView.text);if(ie&&ie_version<8)lineView.node.style.zIndex=2;}
return lineView.node;}
function updateLineBackground(lineView){var cls=lineView.bgClass?lineView.bgClass+" "+(lineView.line.bgClass||""):lineView.line.bgClass;if(cls)cls+=" CodeMirror-linebackground";if(lineView.background){if(cls)lineView.background.className=cls;else{lineView.background.parentNode.removeChild(lineView.background);lineView.background=null;}}else if(cls){var wrap=ensureLineWrapped(lineView);lineView.background=wrap.insertBefore(elt("div",null,cls),wrap.firstChild);}}
function getLineContent(cm,lineView){var ext=cm.display.externalMeasured;if(ext&&ext.line==lineView.line){cm.display.externalMeasured=null;lineView.measure=ext.measure;return ext.built;}
return buildLineContent(cm,lineView);}
function updateLineText(cm,lineView){var cls=lineView.text.className;var built=getLineContent(cm,lineView);if(lineView.text==lineView.node)lineView.node=built.pre;lineView.text.parentNode.replaceChild(built.pre,lineView.text);lineView.text=built.pre;if(built.bgClass!=lineView.bgClass||built.textClass!=lineView.textClass){lineView.bgClass=built.bgClass;lineView.textClass=built.textClass;updateLineClasses(lineView);}else if(cls){lineView.text.className=cls;}}
function updateLineClasses(lineView){updateLineBackground(lineView);if(lineView.line.wrapClass)
ensureLineWrapped(lineView).className=lineView.line.wrapClass;else if(lineView.node!=lineView.text)
lineView.node.className="";var textClass=lineView.textClass?lineView.textClass+" "+(lineView.line.textClass||""):lineView.line.textClass;lineView.text.className=textClass||"";}
function updateLineGutter(cm,lineView,lineN,dims){if(lineView.gutter){lineView.node.removeChild(lineView.gutter);lineView.gutter=null;}
if(lineView.gutterBackground){lineView.node.removeChild(lineView.gutterBackground);lineView.gutterBackground=null;}
if(lineView.line.gutterClass){var wrap=ensureLineWrapped(lineView);lineView.gutterBackground=elt("div",null,"CodeMirror-gutter-background "+lineView.line.gutterClass,"left: "+(cm.options.fixedGutter?dims.fixedPos:-dims.gutterTotalWidth)+"px; width: "+dims.gutterTotalWidth+"px");wrap.insertBefore(lineView.gutterBackground,lineView.text);}
var markers=lineView.line.gutterMarkers;if(cm.options.lineNumbers||markers){var wrap=ensureLineWrapped(lineView);var gutterWrap=lineView.gutter=elt("div",null,"CodeMirror-gutter-wrapper","left: "+
(cm.options.fixedGutter?dims.fixedPos:-dims.gutterTotalWidth)+"px");cm.display.input.setUneditable(gutterWrap);wrap.insertBefore(gutterWrap,lineView.text);if(lineView.line.gutterClass)
gutterWrap.className+=" "+lineView.line.gutterClass;if(cm.options.lineNumbers&&(!markers||!markers["CodeMirror-linenumbers"]))
lineView.lineNumber=gutterWrap.appendChild(elt("div",lineNumberFor(cm.options,lineN),"CodeMirror-linenumber CodeMirror-gutter-elt","left: "+dims.gutterLeft["CodeMirror-linenumbers"]+"px; width: "
+cm.display.lineNumInnerWidth+"px"));if(markers)for(var k=0;k<cm.options.gutters.length;++k){var id=cm.options.gutters[k],found=markers.hasOwnProperty(id)&&markers[id];if(found)
gutterWrap.appendChild(elt("div",[found],"CodeMirror-gutter-elt","left: "+
dims.gutterLeft[id]+"px; width: "+dims.gutterWidth[id]+"px"));}}}
function updateLineWidgets(cm,lineView,dims){if(lineView.alignable)lineView.alignable=null;for(var node=lineView.node.firstChild,next;node;node=next){var next=node.nextSibling;if(node.className=="CodeMirror-linewidget")
lineView.node.removeChild(node);}
insertLineWidgets(cm,lineView,dims);}
function buildLineElement(cm,lineView,lineN,dims){var built=getLineContent(cm,lineView);lineView.text=lineView.node=built.pre;if(built.bgClass)lineView.bgClass=built.bgClass;if(built.textClass)lineView.textClass=built.textClass;updateLineClasses(lineView);updateLineGutter(cm,lineView,lineN,dims);insertLineWidgets(cm,lineView,dims);return lineView.node;}
function insertLineWidgets(cm,lineView,dims){insertLineWidgetsFor(cm,lineView.line,lineView,dims,true);if(lineView.rest)for(var i=0;i<lineView.rest.length;i++)
insertLineWidgetsFor(cm,lineView.rest[i],lineView,dims,false);}
function insertLineWidgetsFor(cm,line,lineView,dims,allowAbove){if(!line.widgets)return;var wrap=ensureLineWrapped(lineView);for(var i=0,ws=line.widgets;i<ws.length;++i){var widget=ws[i],node=elt("div",[widget.node],"CodeMirror-linewidget");if(!widget.handleMouseEvents)node.setAttribute("cm-ignore-events","true");positionLineWidget(widget,node,lineView,dims);cm.display.input.setUneditable(node);if(allowAbove&&widget.above)
wrap.insertBefore(node,lineView.gutter||lineView.text);else
wrap.appendChild(node);signalLater(widget,"redraw");}}
function positionLineWidget(widget,node,lineView,dims){if(widget.noHScroll){(lineView.alignable||(lineView.alignable=[])).push(node);var width=dims.wrapperWidth;node.style.left=dims.fixedPos+"px";if(!widget.coverGutter){width-=dims.gutterTotalWidth;node.style.paddingLeft=dims.gutterTotalWidth+"px";}
node.style.width=width+"px";}
if(widget.coverGutter){node.style.zIndex=5;node.style.position="relative";if(!widget.noHScroll)node.style.marginLeft=-dims.gutterTotalWidth+"px";}}
var Pos=CodeMirror.Pos=function(line,ch){if(!(this instanceof Pos))return new Pos(line,ch);this.line=line;this.ch=ch;};var cmp=CodeMirror.cmpPos=function(a,b){return a.line-b.line||a.ch-b.ch;};function copyPos(x){return Pos(x.line,x.ch);}
function maxPos(a,b){return cmp(a,b)<0?b:a;}
function minPos(a,b){return cmp(a,b)<0?a:b;}
function ensureFocus(cm){if(!cm.state.focused){cm.display.input.focus();onFocus(cm);}}
var lastCopied=null;function applyTextInput(cm,inserted,deleted,sel,origin){var doc=cm.doc;cm.display.shift=false;if(!sel)sel=doc.sel;var paste=cm.state.pasteIncoming||origin=="paste";var textLines=doc.splitLines(inserted),multiPaste=null
if(paste&&sel.ranges.length>1){if(lastCopied&&lastCopied.text.join("\n")==inserted){if(sel.ranges.length%lastCopied.text.length==0){multiPaste=[];for(var i=0;i<lastCopied.text.length;i++)
multiPaste.push(doc.splitLines(lastCopied.text[i]));}}else if(textLines.length==sel.ranges.length){multiPaste=map(textLines,function(l){return[l];});}}
for(var i=sel.ranges.length-1;i>=0;i--){var range=sel.ranges[i];var from=range.from(),to=range.to();if(range.empty()){if(deleted&&deleted>0)
from=Pos(from.line,from.ch-deleted);else if(cm.state.overwrite&&!paste)
to=Pos(to.line,Math.min(getLine(doc,to.line).text.length,to.ch+lst(textLines).length));else if(lastCopied&&lastCopied.lineWise&&lastCopied.text.join("\n")==inserted)
from=to=Pos(from.line,0)}
var updateInput=cm.curOp.updateInput;var changeEvent={from:from,to:to,text:multiPaste?multiPaste[i%multiPaste.length]:textLines,origin:origin||(paste?"paste":cm.state.cutIncoming?"cut":"+input")};makeChange(cm.doc,changeEvent);signalLater(cm,"inputRead",cm,changeEvent);}
if(inserted&&!paste)
triggerElectric(cm,inserted);ensureCursorVisible(cm);cm.curOp.updateInput=updateInput;cm.curOp.typing=true;cm.state.pasteIncoming=cm.state.cutIncoming=false;}
function handlePaste(e,cm){var pasted=e.clipboardData&&e.clipboardData.getData("text/plain");if(pasted){e.preventDefault();if(!cm.isReadOnly()&&!cm.options.disableInput)
runInOp(cm,function(){applyTextInput(cm,pasted,0,null,"paste");});return true;}}
function triggerElectric(cm,inserted){if(!cm.options.electricChars||!cm.options.smartIndent)return;var sel=cm.doc.sel;for(var i=sel.ranges.length-1;i>=0;i--){var range=sel.ranges[i];if(range.head.ch>100||(i&&sel.ranges[i-1].head.line==range.head.line))continue;var mode=cm.getModeAt(range.head);var indented=false;if(mode.electricChars){for(var j=0;j<mode.electricChars.length;j++)
if(inserted.indexOf(mode.electricChars.charAt(j))>-1){indented=indentLine(cm,range.head.line,"smart");break;}}else if(mode.electricInput){if(mode.electricInput.test(getLine(cm.doc,range.head.line).text.slice(0,range.head.ch)))
indented=indentLine(cm,range.head.line,"smart");}
if(indented)signalLater(cm,"electricInput",cm,range.head.line);}}
function copyableRanges(cm){var text=[],ranges=[];for(var i=0;i<cm.doc.sel.ranges.length;i++){var line=cm.doc.sel.ranges[i].head.line;var lineRange={anchor:Pos(line,0),head:Pos(line+1,0)};ranges.push(lineRange);text.push(cm.getRange(lineRange.anchor,lineRange.head));}
return{text:text,ranges:ranges};}
function disableBrowserMagic(field){field.setAttribute("autocorrect","off");field.setAttribute("autocapitalize","off");field.setAttribute("spellcheck","false");}
function TextareaInput(cm){this.cm=cm;this.prevInput="";this.pollingFast=false;this.polling=new Delayed();this.inaccurateSelection=false;this.hasSelection=false;this.composing=null;};function hiddenTextarea(){var te=elt("textarea",null,null,"position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none");var div=elt("div",[te],null,"overflow: hidden; position: relative; width: 3px; height: 0px;");if(webkit)te.style.width="1000px";else te.setAttribute("wrap","off");if(ios)te.style.border="1px solid black";disableBrowserMagic(te);return div;}
TextareaInput.prototype=copyObj({init:function(display){var input=this,cm=this.cm;var div=this.wrapper=hiddenTextarea();var te=this.textarea=div.firstChild;display.wrapper.insertBefore(div,display.wrapper.firstChild);if(ios)te.style.width="0px";on(te,"input",function(){if(ie&&ie_version>=9&&input.hasSelection)input.hasSelection=null;input.poll();});on(te,"paste",function(e){if(signalDOMEvent(cm,e)||handlePaste(e,cm))return
cm.state.pasteIncoming=true;input.fastPoll();});function prepareCopyCut(e){if(signalDOMEvent(cm,e))return
if(cm.somethingSelected()){lastCopied={lineWise:false,text:cm.getSelections()};if(input.inaccurateSelection){input.prevInput="";input.inaccurateSelection=false;te.value=lastCopied.text.join("\n");selectInput(te);}}else if(!cm.options.lineWiseCopyCut){return;}else{var ranges=copyableRanges(cm);lastCopied={lineWise:true,text:ranges.text};if(e.type=="cut"){cm.setSelections(ranges.ranges,null,sel_dontScroll);}else{input.prevInput="";te.value=ranges.text.join("\n");selectInput(te);}}
if(e.type=="cut")cm.state.cutIncoming=true;}
on(te,"cut",prepareCopyCut);on(te,"copy",prepareCopyCut);on(display.scroller,"paste",function(e){if(eventInWidget(display,e)||signalDOMEvent(cm,e))return;cm.state.pasteIncoming=true;input.focus();});on(display.lineSpace,"selectstart",function(e){if(!eventInWidget(display,e))e_preventDefault(e);});on(te,"compositionstart",function(){var start=cm.getCursor("from");if(input.composing)input.composing.range.clear()
input.composing={start:start,range:cm.markText(start,cm.getCursor("to"),{className:"CodeMirror-composing"})};});on(te,"compositionend",function(){if(input.composing){input.poll();input.composing.range.clear();input.composing=null;}});},prepareSelection:function(){var cm=this.cm,display=cm.display,doc=cm.doc;var result=prepareSelection(cm);if(cm.options.moveInputWithCursor){var headPos=cursorCoords(cm,doc.sel.primary().head,"div");var wrapOff=display.wrapper.getBoundingClientRect(),lineOff=display.lineDiv.getBoundingClientRect();result.teTop=Math.max(0,Math.min(display.wrapper.clientHeight-10,headPos.top+lineOff.top-wrapOff.top));result.teLeft=Math.max(0,Math.min(display.wrapper.clientWidth-10,headPos.left+lineOff.left-wrapOff.left));}
return result;},showSelection:function(drawn){var cm=this.cm,display=cm.display;removeChildrenAndAdd(display.cursorDiv,drawn.cursors);removeChildrenAndAdd(display.selectionDiv,drawn.selection);if(drawn.teTop!=null){this.wrapper.style.top=drawn.teTop+"px";this.wrapper.style.left=drawn.teLeft+"px";}},reset:function(typing){if(this.contextMenuPending)return;var minimal,selected,cm=this.cm,doc=cm.doc;if(cm.somethingSelected()){this.prevInput="";var range=doc.sel.primary();minimal=hasCopyEvent&&(range.to().line-range.from().line>100||(selected=cm.getSelection()).length>1000);var content=minimal?"-":selected||cm.getSelection();this.textarea.value=content;if(cm.state.focused)selectInput(this.textarea);if(ie&&ie_version>=9)this.hasSelection=content;}else if(!typing){this.prevInput=this.textarea.value="";if(ie&&ie_version>=9)this.hasSelection=null;}
this.inaccurateSelection=minimal;},getField:function(){return this.textarea;},supportsTouch:function(){return false;},focus:function(){if(this.cm.options.readOnly!="nocursor"&&(!mobile||activeElt()!=this.textarea)){try{this.textarea.focus();}
catch(e){}}},blur:function(){this.textarea.blur();},resetPosition:function(){this.wrapper.style.top=this.wrapper.style.left=0;},receivedFocus:function(){this.slowPoll();},slowPoll:function(){var input=this;if(input.pollingFast)return;input.polling.set(this.cm.options.pollInterval,function(){input.poll();if(input.cm.state.focused)input.slowPoll();});},fastPoll:function(){var missed=false,input=this;input.pollingFast=true;function p(){var changed=input.poll();if(!changed&&!missed){missed=true;input.polling.set(60,p);}
else{input.pollingFast=false;input.slowPoll();}}
input.polling.set(20,p);},poll:function(){var cm=this.cm,input=this.textarea,prevInput=this.prevInput;if(this.contextMenuPending||!cm.state.focused||(hasSelection(input)&&!prevInput&&!this.composing)||cm.isReadOnly()||cm.options.disableInput||cm.state.keySeq)
return false;var text=input.value;if(text==prevInput&&!cm.somethingSelected())return false;if(ie&&ie_version>=9&&this.hasSelection===text||mac&&/[\uf700-\uf7ff]/.test(text)){cm.display.input.reset();return false;}
if(cm.doc.sel==cm.display.selForContextMenu){var first=text.charCodeAt(0);if(first==0x200b&&!prevInput)prevInput="\u200b";if(first==0x21da){this.reset();return this.cm.execCommand("undo");}}
var same=0,l=Math.min(prevInput.length,text.length);while(same<l&&prevInput.charCodeAt(same)==text.charCodeAt(same))++same;var self=this;runInOp(cm,function(){applyTextInput(cm,text.slice(same),prevInput.length-same,null,self.composing?"*compose":null);if(text.length>1000||text.indexOf("\n")>-1)input.value=self.prevInput="";else self.prevInput=text;if(self.composing){self.composing.range.clear();self.composing.range=cm.markText(self.composing.start,cm.getCursor("to"),{className:"CodeMirror-composing"});}});return true;},ensurePolled:function(){if(this.pollingFast&&this.poll())this.pollingFast=false;},onKeyPress:function(){if(ie&&ie_version>=9)this.hasSelection=null;this.fastPoll();},onContextMenu:function(e){var input=this,cm=input.cm,display=cm.display,te=input.textarea;var pos=posFromMouse(cm,e),scrollPos=display.scroller.scrollTop;if(!pos||presto)return;var reset=cm.options.resetSelectionOnContextMenu;if(reset&&cm.doc.sel.contains(pos)==-1)
operation(cm,setSelection)(cm.doc,simpleSelection(pos),sel_dontScroll);var oldCSS=te.style.cssText,oldWrapperCSS=input.wrapper.style.cssText;input.wrapper.style.cssText="position: absolute"
var wrapperBox=input.wrapper.getBoundingClientRect()
te.style.cssText="position: absolute; width: 30px; height: 30px; top: "+(e.clientY-wrapperBox.top-5)+"px; left: "+(e.clientX-wrapperBox.left-5)+"px; z-index: 1000; background: "+
(ie?"rgba(255, 255, 255, .05)":"transparent")+"; outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);";if(webkit)var oldScrollY=window.scrollY;display.input.focus();if(webkit)window.scrollTo(null,oldScrollY);display.input.reset();if(!cm.somethingSelected())te.value=input.prevInput=" ";input.contextMenuPending=true;display.selForContextMenu=cm.doc.sel;clearTimeout(display.detectingSelectAll);function prepareSelectAllHack(){if(te.selectionStart!=null){var selected=cm.somethingSelected();var extval="\u200b"+(selected?te.value:"");te.value="\u21da";te.value=extval;input.prevInput=selected?"":"\u200b";te.selectionStart=1;te.selectionEnd=extval.length;display.selForContextMenu=cm.doc.sel;}}
function rehide(){input.contextMenuPending=false;input.wrapper.style.cssText=oldWrapperCSS
te.style.cssText=oldCSS;if(ie&&ie_version<9)display.scrollbars.setScrollTop(display.scroller.scrollTop=scrollPos);if(te.selectionStart!=null){if(!ie||(ie&&ie_version<9))prepareSelectAllHack();var i=0,poll=function(){if(display.selForContextMenu==cm.doc.sel&&te.selectionStart==0&&te.selectionEnd>0&&input.prevInput=="\u200b")
operation(cm,commands.selectAll)(cm);else if(i++<10)display.detectingSelectAll=setTimeout(poll,500);else display.input.reset();};display.detectingSelectAll=setTimeout(poll,200);}}
if(ie&&ie_version>=9)prepareSelectAllHack();if(captureRightClick){e_stop(e);var mouseup=function(){off(window,"mouseup",mouseup);setTimeout(rehide,20);};on(window,"mouseup",mouseup);}else{setTimeout(rehide,50);}},readOnlyChanged:function(val){if(!val)this.reset();},setUneditable:nothing,needsContentAttribute:false},TextareaInput.prototype);function ContentEditableInput(cm){this.cm=cm;this.lastAnchorNode=this.lastAnchorOffset=this.lastFocusNode=this.lastFocusOffset=null;this.polling=new Delayed();this.gracePeriod=false;}
ContentEditableInput.prototype=copyObj({init:function(display){var input=this,cm=input.cm;var div=input.div=display.lineDiv;disableBrowserMagic(div);on(div,"paste",function(e){if(!signalDOMEvent(cm,e))handlePaste(e,cm);})
on(div,"compositionstart",function(e){var data=e.data;input.composing={sel:cm.doc.sel,data:data,startData:data};if(!data)return;var prim=cm.doc.sel.primary();var line=cm.getLine(prim.head.line);var found=line.indexOf(data,Math.max(0,prim.head.ch-data.length));if(found>-1&&found<=prim.head.ch)
input.composing.sel=simpleSelection(Pos(prim.head.line,found),Pos(prim.head.line,found+data.length));});on(div,"compositionupdate",function(e){input.composing.data=e.data;});on(div,"compositionend",function(e){var ours=input.composing;if(!ours)return;if(e.data!=ours.startData&&!/\u200b/.test(e.data))
ours.data=e.data;setTimeout(function(){if(!ours.handled)
input.applyComposition(ours);if(input.composing==ours)
input.composing=null;},50);});on(div,"touchstart",function(){input.forceCompositionEnd();});on(div,"input",function(){if(input.composing)return;if(cm.isReadOnly()||!input.pollContent())
runInOp(input.cm,function(){regChange(cm);});});function onCopyCut(e){if(signalDOMEvent(cm,e))return
if(cm.somethingSelected()){lastCopied={lineWise:false,text:cm.getSelections()};if(e.type=="cut")cm.replaceSelection("",null,"cut");}else if(!cm.options.lineWiseCopyCut){return;}else{var ranges=copyableRanges(cm);lastCopied={lineWise:true,text:ranges.text};if(e.type=="cut"){cm.operation(function(){cm.setSelections(ranges.ranges,0,sel_dontScroll);cm.replaceSelection("",null,"cut");});}}
if(e.clipboardData&&!ios){e.preventDefault();e.clipboardData.clearData();e.clipboardData.setData("text/plain",lastCopied.text.join("\n"));}else{var kludge=hiddenTextarea(),te=kludge.firstChild;cm.display.lineSpace.insertBefore(kludge,cm.display.lineSpace.firstChild);te.value=lastCopied.text.join("\n");var hadFocus=document.activeElement;selectInput(te);setTimeout(function(){cm.display.lineSpace.removeChild(kludge);hadFocus.focus();},50);}}
on(div,"copy",onCopyCut);on(div,"cut",onCopyCut);},prepareSelection:function(){var result=prepareSelection(this.cm,false);result.focus=this.cm.state.focused;return result;},showSelection:function(info,takeFocus){if(!info||!this.cm.display.view.length)return;if(info.focus||takeFocus)this.showPrimarySelection();this.showMultipleSelections(info);},showPrimarySelection:function(){var sel=window.getSelection(),prim=this.cm.doc.sel.primary();var curAnchor=domToPos(this.cm,sel.anchorNode,sel.anchorOffset);var curFocus=domToPos(this.cm,sel.focusNode,sel.focusOffset);if(curAnchor&&!curAnchor.bad&&curFocus&&!curFocus.bad&&cmp(minPos(curAnchor,curFocus),prim.from())==0&&cmp(maxPos(curAnchor,curFocus),prim.to())==0)
return;var start=posToDOM(this.cm,prim.from());var end=posToDOM(this.cm,prim.to());if(!start&&!end)return;var view=this.cm.display.view;var old=sel.rangeCount&&sel.getRangeAt(0);if(!start){start={node:view[0].measure.map[2],offset:0};}else if(!end){var measure=view[view.length-1].measure;var map=measure.maps?measure.maps[measure.maps.length-1]:measure.map;end={node:map[map.length-1],offset:map[map.length-2]-map[map.length-3]};}
try{var rng=range(start.node,start.offset,end.offset,end.node);}
catch(e){}
if(rng){if(!gecko&&this.cm.state.focused){sel.collapse(start.node,start.offset);if(!rng.collapsed)sel.addRange(rng);}else{sel.removeAllRanges();sel.addRange(rng);}
if(old&&sel.anchorNode==null)sel.addRange(old);else if(gecko)this.startGracePeriod();}
this.rememberSelection();},startGracePeriod:function(){var input=this;clearTimeout(this.gracePeriod);this.gracePeriod=setTimeout(function(){input.gracePeriod=false;if(input.selectionChanged())
input.cm.operation(function(){input.cm.curOp.selectionChanged=true;});},20);},showMultipleSelections:function(info){removeChildrenAndAdd(this.cm.display.cursorDiv,info.cursors);removeChildrenAndAdd(this.cm.display.selectionDiv,info.selection);},rememberSelection:function(){var sel=window.getSelection();this.lastAnchorNode=sel.anchorNode;this.lastAnchorOffset=sel.anchorOffset;this.lastFocusNode=sel.focusNode;this.lastFocusOffset=sel.focusOffset;},selectionInEditor:function(){var sel=window.getSelection();if(!sel.rangeCount)return false;var node=sel.getRangeAt(0).commonAncestorContainer;return contains(this.div,node);},focus:function(){if(this.cm.options.readOnly!="nocursor")this.div.focus();},blur:function(){this.div.blur();},getField:function(){return this.div;},supportsTouch:function(){return true;},receivedFocus:function(){var input=this;if(this.selectionInEditor())
this.pollSelection();else
runInOp(this.cm,function(){input.cm.curOp.selectionChanged=true;});function poll(){if(input.cm.state.focused){input.pollSelection();input.polling.set(input.cm.options.pollInterval,poll);}}
this.polling.set(this.cm.options.pollInterval,poll);},selectionChanged:function(){var sel=window.getSelection();return sel.anchorNode!=this.lastAnchorNode||sel.anchorOffset!=this.lastAnchorOffset||sel.focusNode!=this.lastFocusNode||sel.focusOffset!=this.lastFocusOffset;},pollSelection:function(){if(!this.composing&&!this.gracePeriod&&this.selectionChanged()){var sel=window.getSelection(),cm=this.cm;this.rememberSelection();var anchor=domToPos(cm,sel.anchorNode,sel.anchorOffset);var head=domToPos(cm,sel.focusNode,sel.focusOffset);if(anchor&&head)runInOp(cm,function(){setSelection(cm.doc,simpleSelection(anchor,head),sel_dontScroll);if(anchor.bad||head.bad)cm.curOp.selectionChanged=true;});}},pollContent:function(){var cm=this.cm,display=cm.display,sel=cm.doc.sel.primary();var from=sel.from(),to=sel.to();if(from.line<display.viewFrom||to.line>display.viewTo-1)return false;var fromIndex;if(from.line==display.viewFrom||(fromIndex=findViewIndex(cm,from.line))==0){var fromLine=lineNo(display.view[0].line);var fromNode=display.view[0].node;}else{var fromLine=lineNo(display.view[fromIndex].line);var fromNode=display.view[fromIndex-1].node.nextSibling;}
var toIndex=findViewIndex(cm,to.line);if(toIndex==display.view.length-1){var toLine=display.viewTo-1;var toNode=display.lineDiv.lastChild;}else{var toLine=lineNo(display.view[toIndex+1].line)-1;var toNode=display.view[toIndex+1].node.previousSibling;}
var newText=cm.doc.splitLines(domTextBetween(cm,fromNode,toNode,fromLine,toLine));var oldText=getBetween(cm.doc,Pos(fromLine,0),Pos(toLine,getLine(cm.doc,toLine).text.length));while(newText.length>1&&oldText.length>1){if(lst(newText)==lst(oldText)){newText.pop();oldText.pop();toLine--;}
else if(newText[0]==oldText[0]){newText.shift();oldText.shift();fromLine++;}
else break;}
var cutFront=0,cutEnd=0;var newTop=newText[0],oldTop=oldText[0],maxCutFront=Math.min(newTop.length,oldTop.length);while(cutFront<maxCutFront&&newTop.charCodeAt(cutFront)==oldTop.charCodeAt(cutFront))
++cutFront;var newBot=lst(newText),oldBot=lst(oldText);var maxCutEnd=Math.min(newBot.length-(newText.length==1?cutFront:0),oldBot.length-(oldText.length==1?cutFront:0));while(cutEnd<maxCutEnd&&newBot.charCodeAt(newBot.length-cutEnd-1)==oldBot.charCodeAt(oldBot.length-cutEnd-1))
++cutEnd;newText[newText.length-1]=newBot.slice(0,newBot.length-cutEnd);newText[0]=newText[0].slice(cutFront);var chFrom=Pos(fromLine,cutFront);var chTo=Pos(toLine,oldText.length?lst(oldText).length-cutEnd:0);if(newText.length>1||newText[0]||cmp(chFrom,chTo)){replaceRange(cm.doc,newText,chFrom,chTo,"+input");return true;}},ensurePolled:function(){this.forceCompositionEnd();},reset:function(){this.forceCompositionEnd();},forceCompositionEnd:function(){if(!this.composing||this.composing.handled)return;this.applyComposition(this.composing);this.composing.handled=true;this.div.blur();this.div.focus();},applyComposition:function(composing){if(this.cm.isReadOnly())
operation(this.cm,regChange)(this.cm)
else if(composing.data&&composing.data!=composing.startData)
operation(this.cm,applyTextInput)(this.cm,composing.data,0,composing.sel);},setUneditable:function(node){node.contentEditable="false"},onKeyPress:function(e){e.preventDefault();if(!this.cm.isReadOnly())
operation(this.cm,applyTextInput)(this.cm,String.fromCharCode(e.charCode==null?e.keyCode:e.charCode),0);},readOnlyChanged:function(val){this.div.contentEditable=String(val!="nocursor")},onContextMenu:nothing,resetPosition:nothing,needsContentAttribute:true},ContentEditableInput.prototype);function posToDOM(cm,pos){var view=findViewForLine(cm,pos.line);if(!view||view.hidden)return null;var line=getLine(cm.doc,pos.line);var info=mapFromLineView(view,line,pos.line);var order=getOrder(line),side="left";if(order){var partPos=getBidiPartAt(order,pos.ch);side=partPos%2?"right":"left";}
var result=nodeAndOffsetInLineMap(info.map,pos.ch,side);result.offset=result.collapse=="right"?result.end:result.start;return result;}
function badPos(pos,bad){if(bad)pos.bad=true;return pos;}
function domToPos(cm,node,offset){var lineNode;if(node==cm.display.lineDiv){lineNode=cm.display.lineDiv.childNodes[offset];if(!lineNode)return badPos(cm.clipPos(Pos(cm.display.viewTo-1)),true);node=null;offset=0;}else{for(lineNode=node;;lineNode=lineNode.parentNode){if(!lineNode||lineNode==cm.display.lineDiv)return null;if(lineNode.parentNode&&lineNode.parentNode==cm.display.lineDiv)break;}}
for(var i=0;i<cm.display.view.length;i++){var lineView=cm.display.view[i];if(lineView.node==lineNode)
return locateNodeInLineView(lineView,node,offset);}}
function locateNodeInLineView(lineView,node,offset){var wrapper=lineView.text.firstChild,bad=false;if(!node||!contains(wrapper,node))return badPos(Pos(lineNo(lineView.line),0),true);if(node==wrapper){bad=true;node=wrapper.childNodes[offset];offset=0;if(!node){var line=lineView.rest?lst(lineView.rest):lineView.line;return badPos(Pos(lineNo(line),line.text.length),bad);}}
var textNode=node.nodeType==3?node:null,topNode=node;if(!textNode&&node.childNodes.length==1&&node.firstChild.nodeType==3){textNode=node.firstChild;if(offset)offset=textNode.nodeValue.length;}
while(topNode.parentNode!=wrapper)topNode=topNode.parentNode;var measure=lineView.measure,maps=measure.maps;function find(textNode,topNode,offset){for(var i=-1;i<(maps?maps.length:0);i++){var map=i<0?measure.map:maps[i];for(var j=0;j<map.length;j+=3){var curNode=map[j+2];if(curNode==textNode||curNode==topNode){var line=lineNo(i<0?lineView.line:lineView.rest[i]);var ch=map[j]+offset;if(offset<0||curNode!=textNode)ch=map[j+(offset?1:0)];return Pos(line,ch);}}}}
var found=find(textNode,topNode,offset);if(found)return badPos(found,bad);for(var after=topNode.nextSibling,dist=textNode?textNode.nodeValue.length-offset:0;after;after=after.nextSibling){found=find(after,after.firstChild,0);if(found)
return badPos(Pos(found.line,found.ch-dist),bad);else
dist+=after.textContent.length;}
for(var before=topNode.previousSibling,dist=offset;before;before=before.previousSibling){found=find(before,before.firstChild,-1);if(found)
return badPos(Pos(found.line,found.ch+dist),bad);else
dist+=after.textContent.length;}}
function domTextBetween(cm,from,to,fromLine,toLine){var text="",closing=false,lineSep=cm.doc.lineSeparator();function recognizeMarker(id){return function(marker){return marker.id==id;};}
function walk(node){if(node.nodeType==1){var cmText=node.getAttribute("cm-text");if(cmText!=null){if(cmText=="")cmText=node.textContent.replace(/\u200b/g,"");text+=cmText;return;}
var markerID=node.getAttribute("cm-marker"),range;if(markerID){var found=cm.findMarks(Pos(fromLine,0),Pos(toLine+1,0),recognizeMarker(+markerID));if(found.length&&(range=found[0].find()))
text+=getBetween(cm.doc,range.from,range.to).join(lineSep);return;}
if(node.getAttribute("contenteditable")=="false")return;for(var i=0;i<node.childNodes.length;i++)
walk(node.childNodes[i]);if(/^(pre|div|p)$/i.test(node.nodeName))
closing=true;}else if(node.nodeType==3){var val=node.nodeValue;if(!val)return;if(closing){text+=lineSep;closing=false;}
text+=val;}}
for(;;){walk(from);if(from==to)break;from=from.nextSibling;}
return text;}
CodeMirror.inputStyles={"textarea":TextareaInput,"contenteditable":ContentEditableInput};function Selection(ranges,primIndex){this.ranges=ranges;this.primIndex=primIndex;}
Selection.prototype={primary:function(){return this.ranges[this.primIndex];},equals:function(other){if(other==this)return true;if(other.primIndex!=this.primIndex||other.ranges.length!=this.ranges.length)return false;for(var i=0;i<this.ranges.length;i++){var here=this.ranges[i],there=other.ranges[i];if(cmp(here.anchor,there.anchor)!=0||cmp(here.head,there.head)!=0)return false;}
return true;},deepCopy:function(){for(var out=[],i=0;i<this.ranges.length;i++)
out[i]=new Range(copyPos(this.ranges[i].anchor),copyPos(this.ranges[i].head));return new Selection(out,this.primIndex);},somethingSelected:function(){for(var i=0;i<this.ranges.length;i++)
if(!this.ranges[i].empty())return true;return false;},contains:function(pos,end){if(!end)end=pos;for(var i=0;i<this.ranges.length;i++){var range=this.ranges[i];if(cmp(end,range.from())>=0&&cmp(pos,range.to())<=0)
return i;}
return-1;}};function Range(anchor,head){this.anchor=anchor;this.head=head;}
Range.prototype={from:function(){return minPos(this.anchor,this.head);},to:function(){return maxPos(this.anchor,this.head);},empty:function(){return this.head.line==this.anchor.line&&this.head.ch==this.anchor.ch;}};function normalizeSelection(ranges,primIndex){var prim=ranges[primIndex];ranges.sort(function(a,b){return cmp(a.from(),b.from());});primIndex=indexOf(ranges,prim);for(var i=1;i<ranges.length;i++){var cur=ranges[i],prev=ranges[i-1];if(cmp(prev.to(),cur.from())>=0){var from=minPos(prev.from(),cur.from()),to=maxPos(prev.to(),cur.to());var inv=prev.empty()?cur.from()==cur.head:prev.from()==prev.head;if(i<=primIndex)--primIndex;ranges.splice(--i,2,new Range(inv?to:from,inv?from:to));}}
return new Selection(ranges,primIndex);}
function simpleSelection(anchor,head){return new Selection([new Range(anchor,head||anchor)],0);}
function clipLine(doc,n){return Math.max(doc.first,Math.min(n,doc.first+doc.size-1));}
function clipPos(doc,pos){if(pos.line<doc.first)return Pos(doc.first,0);var last=doc.first+doc.size-1;if(pos.line>last)return Pos(last,getLine(doc,last).text.length);return clipToLen(pos,getLine(doc,pos.line).text.length);}
function clipToLen(pos,linelen){var ch=pos.ch;if(ch==null||ch>linelen)return Pos(pos.line,linelen);else if(ch<0)return Pos(pos.line,0);else return pos;}
function isLine(doc,l){return l>=doc.first&&l<doc.first+doc.size;}
function clipPosArray(doc,array){for(var out=[],i=0;i<array.length;i++)out[i]=clipPos(doc,array[i]);return out;}
function extendRange(doc,range,head,other){if(doc.cm&&doc.cm.display.shift||doc.extend){var anchor=range.anchor;if(other){var posBefore=cmp(head,anchor)<0;if(posBefore!=(cmp(other,anchor)<0)){anchor=head;head=other;}else if(posBefore!=(cmp(head,other)<0)){head=other;}}
return new Range(anchor,head);}else{return new Range(other||head,head);}}
function extendSelection(doc,head,other,options){setSelection(doc,new Selection([extendRange(doc,doc.sel.primary(),head,other)],0),options);}
function extendSelections(doc,heads,options){for(var out=[],i=0;i<doc.sel.ranges.length;i++)
out[i]=extendRange(doc,doc.sel.ranges[i],heads[i],null);var newSel=normalizeSelection(out,doc.sel.primIndex);setSelection(doc,newSel,options);}
function replaceOneSelection(doc,i,range,options){var ranges=doc.sel.ranges.slice(0);ranges[i]=range;setSelection(doc,normalizeSelection(ranges,doc.sel.primIndex),options);}
function setSimpleSelection(doc,anchor,head,options){setSelection(doc,simpleSelection(anchor,head),options);}
function filterSelectionChange(doc,sel,options){var obj={ranges:sel.ranges,update:function(ranges){this.ranges=[];for(var i=0;i<ranges.length;i++)
this.ranges[i]=new Range(clipPos(doc,ranges[i].anchor),clipPos(doc,ranges[i].head));},origin:options&&options.origin};signal(doc,"beforeSelectionChange",doc,obj);if(doc.cm)signal(doc.cm,"beforeSelectionChange",doc.cm,obj);if(obj.ranges!=sel.ranges)return normalizeSelection(obj.ranges,obj.ranges.length-1);else return sel;}
function setSelectionReplaceHistory(doc,sel,options){var done=doc.history.done,last=lst(done);if(last&&last.ranges){done[done.length-1]=sel;setSelectionNoUndo(doc,sel,options);}else{setSelection(doc,sel,options);}}
function setSelection(doc,sel,options){setSelectionNoUndo(doc,sel,options);addSelectionToHistory(doc,doc.sel,doc.cm?doc.cm.curOp.id:NaN,options);}
function setSelectionNoUndo(doc,sel,options){if(hasHandler(doc,"beforeSelectionChange")||doc.cm&&hasHandler(doc.cm,"beforeSelectionChange"))
sel=filterSelectionChange(doc,sel,options);var bias=options&&options.bias||(cmp(sel.primary().head,doc.sel.primary().head)<0?-1:1);setSelectionInner(doc,skipAtomicInSelection(doc,sel,bias,true));if(!(options&&options.scroll===false)&&doc.cm)
ensureCursorVisible(doc.cm);}
function setSelectionInner(doc,sel){if(sel.equals(doc.sel))return;doc.sel=sel;if(doc.cm){doc.cm.curOp.updateInput=doc.cm.curOp.selectionChanged=true;signalCursorActivity(doc.cm);}
signalLater(doc,"cursorActivity",doc);}
function reCheckSelection(doc){setSelectionInner(doc,skipAtomicInSelection(doc,doc.sel,null,false),sel_dontScroll);}
function skipAtomicInSelection(doc,sel,bias,mayClear){var out;for(var i=0;i<sel.ranges.length;i++){var range=sel.ranges[i];var old=sel.ranges.length==doc.sel.ranges.length&&doc.sel.ranges[i];var newAnchor=skipAtomic(doc,range.anchor,old&&old.anchor,bias,mayClear);var newHead=skipAtomic(doc,range.head,old&&old.head,bias,mayClear);if(out||newAnchor!=range.anchor||newHead!=range.head){if(!out)out=sel.ranges.slice(0,i);out[i]=new Range(newAnchor,newHead);}}
return out?normalizeSelection(out,sel.primIndex):sel;}
function skipAtomicInner(doc,pos,oldPos,dir,mayClear){var line=getLine(doc,pos.line);if(line.markedSpans)for(var i=0;i<line.markedSpans.length;++i){var sp=line.markedSpans[i],m=sp.marker;if((sp.from==null||(m.inclusiveLeft?sp.from<=pos.ch:sp.from<pos.ch))&&(sp.to==null||(m.inclusiveRight?sp.to>=pos.ch:sp.to>pos.ch))){if(mayClear){signal(m,"beforeCursorEnter");if(m.explicitlyCleared){if(!line.markedSpans)break;else{--i;continue;}}}
if(!m.atomic)continue;if(oldPos){var near=m.find(dir<0?1:-1),diff;if(dir<0?m.inclusiveRight:m.inclusiveLeft)
near=movePos(doc,near,-dir,near&&near.line==pos.line?line:null);if(near&&near.line==pos.line&&(diff=cmp(near,oldPos))&&(dir<0?diff<0:diff>0))
return skipAtomicInner(doc,near,pos,dir,mayClear);}
var far=m.find(dir<0?-1:1);if(dir<0?m.inclusiveLeft:m.inclusiveRight)
far=movePos(doc,far,dir,far.line==pos.line?line:null);return far?skipAtomicInner(doc,far,pos,dir,mayClear):null;}}
return pos;}
function skipAtomic(doc,pos,oldPos,bias,mayClear){var dir=bias||1;var found=skipAtomicInner(doc,pos,oldPos,dir,mayClear)||(!mayClear&&skipAtomicInner(doc,pos,oldPos,dir,true))||skipAtomicInner(doc,pos,oldPos,-dir,mayClear)||(!mayClear&&skipAtomicInner(doc,pos,oldPos,-dir,true));if(!found){doc.cantEdit=true;return Pos(doc.first,0);}
return found;}
function movePos(doc,pos,dir,line){if(dir<0&&pos.ch==0){if(pos.line>doc.first)return clipPos(doc,Pos(pos.line-1));else return null;}else if(dir>0&&pos.ch==(line||getLine(doc,pos.line)).text.length){if(pos.line<doc.first+doc.size-1)return Pos(pos.line+1,0);else return null;}else{return new Pos(pos.line,pos.ch+dir);}}
function updateSelection(cm){cm.display.input.showSelection(cm.display.input.prepareSelection());}
function prepareSelection(cm,primary){var doc=cm.doc,result={};var curFragment=result.cursors=document.createDocumentFragment();var selFragment=result.selection=document.createDocumentFragment();for(var i=0;i<doc.sel.ranges.length;i++){if(primary===false&&i==doc.sel.primIndex)continue;var range=doc.sel.ranges[i];if(range.from().line>=cm.display.viewTo||range.to().line<cm.display.viewFrom)continue;var collapsed=range.empty();if(collapsed||cm.options.showCursorWhenSelecting)
drawSelectionCursor(cm,range.head,curFragment);if(!collapsed)
drawSelectionRange(cm,range,selFragment);}
return result;}
function drawSelectionCursor(cm,head,output){var pos=cursorCoords(cm,head,"div",null,null,!cm.options.singleCursorHeightPerLine);var cursor=output.appendChild(elt("div","\u00a0","CodeMirror-cursor"));cursor.style.left=pos.left+"px";cursor.style.top=pos.top+"px";cursor.style.height=Math.max(0,pos.bottom-pos.top)*cm.options.cursorHeight+"px";if(pos.other){var otherCursor=output.appendChild(elt("div","\u00a0","CodeMirror-cursor CodeMirror-secondarycursor"));otherCursor.style.display="";otherCursor.style.left=pos.other.left+"px";otherCursor.style.top=pos.other.top+"px";otherCursor.style.height=(pos.other.bottom-pos.other.top)*.85+"px";}}
function drawSelectionRange(cm,range,output){var display=cm.display,doc=cm.doc;var fragment=document.createDocumentFragment();var padding=paddingH(cm.display),leftSide=padding.left;var rightSide=Math.max(display.sizerWidth,displayWidth(cm)-display.sizer.offsetLeft)-padding.right;function add(left,top,width,bottom){if(top<0)top=0;top=Math.round(top);bottom=Math.round(bottom);fragment.appendChild(elt("div",null,"CodeMirror-selected","position: absolute; left: "+left+"px; top: "+top+"px; width: "+(width==null?rightSide-left:width)+"px; height: "+(bottom-top)+"px"));}
function drawForLine(line,fromArg,toArg){var lineObj=getLine(doc,line);var lineLen=lineObj.text.length;var start,end;function coords(ch,bias){return charCoords(cm,Pos(line,ch),"div",lineObj,bias);}
iterateBidiSections(getOrder(lineObj),fromArg||0,toArg==null?lineLen:toArg,function(from,to,dir){var leftPos=coords(from,"left"),rightPos,left,right;if(from==to){rightPos=leftPos;left=right=leftPos.left;}else{rightPos=coords(to-1,"right");if(dir=="rtl"){var tmp=leftPos;leftPos=rightPos;rightPos=tmp;}
left=leftPos.left;right=rightPos.right;}
if(fromArg==null&&from==0)left=leftSide;if(rightPos.top-leftPos.top>3){add(left,leftPos.top,null,leftPos.bottom);left=leftSide;if(leftPos.bottom<rightPos.top)add(left,leftPos.bottom,null,rightPos.top);}
if(toArg==null&&to==lineLen)right=rightSide;if(!start||leftPos.top<start.top||leftPos.top==start.top&&leftPos.left<start.left)
start=leftPos;if(!end||rightPos.bottom>end.bottom||rightPos.bottom==end.bottom&&rightPos.right>end.right)
end=rightPos;if(left<leftSide+1)left=leftSide;add(left,rightPos.top,right-left,rightPos.bottom);});return{start:start,end:end};}
var sFrom=range.from(),sTo=range.to();if(sFrom.line==sTo.line){drawForLine(sFrom.line,sFrom.ch,sTo.ch);}else{var fromLine=getLine(doc,sFrom.line),toLine=getLine(doc,sTo.line);var singleVLine=visualLine(fromLine)==visualLine(toLine);var leftEnd=drawForLine(sFrom.line,sFrom.ch,singleVLine?fromLine.text.length+1:null).end;var rightStart=drawForLine(sTo.line,singleVLine?0:null,sTo.ch).start;if(singleVLine){if(leftEnd.top<rightStart.top-2){add(leftEnd.right,leftEnd.top,null,leftEnd.bottom);add(leftSide,rightStart.top,rightStart.left,rightStart.bottom);}else{add(leftEnd.right,leftEnd.top,rightStart.left-leftEnd.right,leftEnd.bottom);}}
if(leftEnd.bottom<rightStart.top)
add(leftSide,leftEnd.bottom,null,rightStart.top);}
output.appendChild(fragment);}
function restartBlink(cm){if(!cm.state.focused)return;var display=cm.display;clearInterval(display.blinker);var on=true;display.cursorDiv.style.visibility="";if(cm.options.cursorBlinkRate>0)
display.blinker=setInterval(function(){display.cursorDiv.style.visibility=(on=!on)?"":"hidden";},cm.options.cursorBlinkRate);else if(cm.options.cursorBlinkRate<0)
display.cursorDiv.style.visibility="hidden";}
function startWorker(cm,time){if(cm.doc.mode.startState&&cm.doc.frontier<cm.display.viewTo)
cm.state.highlight.set(time,bind(highlightWorker,cm));}
function highlightWorker(cm){var doc=cm.doc;if(doc.frontier<doc.first)doc.frontier=doc.first;if(doc.frontier>=cm.display.viewTo)return;var end=+new Date+cm.options.workTime;var state=copyState(doc.mode,getStateBefore(cm,doc.frontier));var changedLines=[];doc.iter(doc.frontier,Math.min(doc.first+doc.size,cm.display.viewTo+500),function(line){if(doc.frontier>=cm.display.viewFrom){var oldStyles=line.styles,tooLong=line.text.length>cm.options.maxHighlightLength;var highlighted=highlightLine(cm,line,tooLong?copyState(doc.mode,state):state,true);line.styles=highlighted.styles;var oldCls=line.styleClasses,newCls=highlighted.classes;if(newCls)line.styleClasses=newCls;else if(oldCls)line.styleClasses=null;var ischange=!oldStyles||oldStyles.length!=line.styles.length||oldCls!=newCls&&(!oldCls||!newCls||oldCls.bgClass!=newCls.bgClass||oldCls.textClass!=newCls.textClass);for(var i=0;!ischange&&i<oldStyles.length;++i)ischange=oldStyles[i]!=line.styles[i];if(ischange)changedLines.push(doc.frontier);line.stateAfter=tooLong?state:copyState(doc.mode,state);}else{if(line.text.length<=cm.options.maxHighlightLength)
processLine(cm,line.text,state);line.stateAfter=doc.frontier%5==0?copyState(doc.mode,state):null;}
++doc.frontier;if(+new Date>end){startWorker(cm,cm.options.workDelay);return true;}});if(changedLines.length)runInOp(cm,function(){for(var i=0;i<changedLines.length;i++)
regLineChange(cm,changedLines[i],"text");});}
function findStartLine(cm,n,precise){var minindent,minline,doc=cm.doc;var lim=precise?-1:n-(cm.doc.mode.innerMode?1000:100);for(var search=n;search>lim;--search){if(search<=doc.first)return doc.first;var line=getLine(doc,search-1);if(line.stateAfter&&(!precise||search<=doc.frontier))return search;var indented=countColumn(line.text,null,cm.options.tabSize);if(minline==null||minindent>indented){minline=search-1;minindent=indented;}}
return minline;}
function getStateBefore(cm,n,precise){var doc=cm.doc,display=cm.display;if(!doc.mode.startState)return true;var pos=findStartLine(cm,n,precise),state=pos>doc.first&&getLine(doc,pos-1).stateAfter;if(!state)state=startState(doc.mode);else state=copyState(doc.mode,state);doc.iter(pos,n,function(line){processLine(cm,line.text,state);var save=pos==n-1||pos%5==0||pos>=display.viewFrom&&pos<display.viewTo;line.stateAfter=save?copyState(doc.mode,state):null;++pos;});if(precise)doc.frontier=pos;return state;}
function paddingTop(display){return display.lineSpace.offsetTop;}
function paddingVert(display){return display.mover.offsetHeight-display.lineSpace.offsetHeight;}
function paddingH(display){if(display.cachedPaddingH)return display.cachedPaddingH;var e=removeChildrenAndAdd(display.measure,elt("pre","x"));var style=window.getComputedStyle?window.getComputedStyle(e):e.currentStyle;var data={left:parseInt(style.paddingLeft),right:parseInt(style.paddingRight)};if(!isNaN(data.left)&&!isNaN(data.right))display.cachedPaddingH=data;return data;}
function scrollGap(cm){return scrollerGap-cm.display.nativeBarWidth;}
function displayWidth(cm){return cm.display.scroller.clientWidth-scrollGap(cm)-cm.display.barWidth;}
function displayHeight(cm){return cm.display.scroller.clientHeight-scrollGap(cm)-cm.display.barHeight;}
function ensureLineHeights(cm,lineView,rect){var wrapping=cm.options.lineWrapping;var curWidth=wrapping&&displayWidth(cm);if(!lineView.measure.heights||wrapping&&lineView.measure.width!=curWidth){var heights=lineView.measure.heights=[];if(wrapping){lineView.measure.width=curWidth;var rects=lineView.text.firstChild.getClientRects();for(var i=0;i<rects.length-1;i++){var cur=rects[i],next=rects[i+1];if(Math.abs(cur.bottom-next.bottom)>2)
heights.push((cur.bottom+next.top)/2-rect.top);}}
heights.push(rect.bottom-rect.top);}}
function mapFromLineView(lineView,line,lineN){if(lineView.line==line)
return{map:lineView.measure.map,cache:lineView.measure.cache};for(var i=0;i<lineView.rest.length;i++)
if(lineView.rest[i]==line)
return{map:lineView.measure.maps[i],cache:lineView.measure.caches[i]};for(var i=0;i<lineView.rest.length;i++)
if(lineNo(lineView.rest[i])>lineN)
return{map:lineView.measure.maps[i],cache:lineView.measure.caches[i],before:true};}
function updateExternalMeasurement(cm,line){line=visualLine(line);var lineN=lineNo(line);var view=cm.display.externalMeasured=new LineView(cm.doc,line,lineN);view.lineN=lineN;var built=view.built=buildLineContent(cm,view);view.text=built.pre;removeChildrenAndAdd(cm.display.lineMeasure,built.pre);return view;}
function measureChar(cm,line,ch,bias){return measureCharPrepared(cm,prepareMeasureForLine(cm,line),ch,bias);}
function findViewForLine(cm,lineN){if(lineN>=cm.display.viewFrom&&lineN<cm.display.viewTo)
return cm.display.view[findViewIndex(cm,lineN)];var ext=cm.display.externalMeasured;if(ext&&lineN>=ext.lineN&&lineN<ext.lineN+ext.size)
return ext;}
function prepareMeasureForLine(cm,line){var lineN=lineNo(line);var view=findViewForLine(cm,lineN);if(view&&!view.text){view=null;}else if(view&&view.changes){updateLineForChanges(cm,view,lineN,getDimensions(cm));cm.curOp.forceUpdate=true;}
if(!view)
view=updateExternalMeasurement(cm,line);var info=mapFromLineView(view,line,lineN);return{line:line,view:view,rect:null,map:info.map,cache:info.cache,before:info.before,hasHeights:false};}
function measureCharPrepared(cm,prepared,ch,bias,varHeight){if(prepared.before)ch=-1;var key=ch+(bias||""),found;if(prepared.cache.hasOwnProperty(key)){found=prepared.cache[key];}else{if(!prepared.rect)
prepared.rect=prepared.view.text.getBoundingClientRect();if(!prepared.hasHeights){ensureLineHeights(cm,prepared.view,prepared.rect);prepared.hasHeights=true;}
found=measureCharInner(cm,prepared,ch,bias);if(!found.bogus)prepared.cache[key]=found;}
return{left:found.left,right:found.right,top:varHeight?found.rtop:found.top,bottom:varHeight?found.rbottom:found.bottom};}
var nullRect={left:0,right:0,top:0,bottom:0};function nodeAndOffsetInLineMap(map,ch,bias){var node,start,end,collapse;for(var i=0;i<map.length;i+=3){var mStart=map[i],mEnd=map[i+1];if(ch<mStart){start=0;end=1;collapse="left";}else if(ch<mEnd){start=ch-mStart;end=start+1;}else if(i==map.length-3||ch==mEnd&&map[i+3]>ch){end=mEnd-mStart;start=end-1;if(ch>=mEnd)collapse="right";}
if(start!=null){node=map[i+2];if(mStart==mEnd&&bias==(node.insertLeft?"left":"right"))
collapse=bias;if(bias=="left"&&start==0)
while(i&&map[i-2]==map[i-3]&&map[i-1].insertLeft){node=map[(i-=3)+2];collapse="left";}
if(bias=="right"&&start==mEnd-mStart)
while(i<map.length-3&&map[i+3]==map[i+4]&&!map[i+5].insertLeft){node=map[(i+=3)+2];collapse="right";}
break;}}
return{node:node,start:start,end:end,collapse:collapse,coverStart:mStart,coverEnd:mEnd};}
function getUsefulRect(rects,bias){var rect=nullRect
if(bias=="left")for(var i=0;i<rects.length;i++){if((rect=rects[i]).left!=rect.right)break}else for(var i=rects.length-1;i>=0;i--){if((rect=rects[i]).left!=rect.right)break}
return rect}
function measureCharInner(cm,prepared,ch,bias){var place=nodeAndOffsetInLineMap(prepared.map,ch,bias);var node=place.node,start=place.start,end=place.end,collapse=place.collapse;var rect;if(node.nodeType==3){for(var i=0;i<4;i++){while(start&&isExtendingChar(prepared.line.text.charAt(place.coverStart+start)))--start;while(place.coverStart+end<place.coverEnd&&isExtendingChar(prepared.line.text.charAt(place.coverStart+end)))++end;if(ie&&ie_version<9&&start==0&&end==place.coverEnd-place.coverStart)
rect=node.parentNode.getBoundingClientRect();else
rect=getUsefulRect(range(node,start,end).getClientRects(),bias)
if(rect.left||rect.right||start==0)break;end=start;start=start-1;collapse="right";}
if(ie&&ie_version<11)rect=maybeUpdateRectForZooming(cm.display.measure,rect);}else{if(start>0)collapse=bias="right";var rects;if(cm.options.lineWrapping&&(rects=node.getClientRects()).length>1)
rect=rects[bias=="right"?rects.length-1:0];else
rect=node.getBoundingClientRect();}
if(ie&&ie_version<9&&!start&&(!rect||!rect.left&&!rect.right)){var rSpan=node.parentNode.getClientRects()[0];if(rSpan)
rect={left:rSpan.left,right:rSpan.left+charWidth(cm.display),top:rSpan.top,bottom:rSpan.bottom};else
rect=nullRect;}
var rtop=rect.top-prepared.rect.top,rbot=rect.bottom-prepared.rect.top;var mid=(rtop+rbot)/2;var heights=prepared.view.measure.heights;for(var i=0;i<heights.length-1;i++)
if(mid<heights[i])break;var top=i?heights[i-1]:0,bot=heights[i];var result={left:(collapse=="right"?rect.right:rect.left)-prepared.rect.left,right:(collapse=="left"?rect.left:rect.right)-prepared.rect.left,top:top,bottom:bot};if(!rect.left&&!rect.right)result.bogus=true;if(!cm.options.singleCursorHeightPerLine){result.rtop=rtop;result.rbottom=rbot;}
return result;}
function maybeUpdateRectForZooming(measure,rect){if(!window.screen||screen.logicalXDPI==null||screen.logicalXDPI==screen.deviceXDPI||!hasBadZoomedRects(measure))
return rect;var scaleX=screen.logicalXDPI/screen.deviceXDPI;var scaleY=screen.logicalYDPI/screen.deviceYDPI;return{left:rect.left*scaleX,right:rect.right*scaleX,top:rect.top*scaleY,bottom:rect.bottom*scaleY};}
function clearLineMeasurementCacheFor(lineView){if(lineView.measure){lineView.measure.cache={};lineView.measure.heights=null;if(lineView.rest)for(var i=0;i<lineView.rest.length;i++)
lineView.measure.caches[i]={};}}
function clearLineMeasurementCache(cm){cm.display.externalMeasure=null;removeChildren(cm.display.lineMeasure);for(var i=0;i<cm.display.view.length;i++)
clearLineMeasurementCacheFor(cm.display.view[i]);}
function clearCaches(cm){clearLineMeasurementCache(cm);cm.display.cachedCharWidth=cm.display.cachedTextHeight=cm.display.cachedPaddingH=null;if(!cm.options.lineWrapping)cm.display.maxLineChanged=true;cm.display.lineNumChars=null;}
function pageScrollX(){return window.pageXOffset||(document.documentElement||document.body).scrollLeft;}
function pageScrollY(){return window.pageYOffset||(document.documentElement||document.body).scrollTop;}
function intoCoordSystem(cm,lineObj,rect,context){if(lineObj.widgets)for(var i=0;i<lineObj.widgets.length;++i)if(lineObj.widgets[i].above){var size=widgetHeight(lineObj.widgets[i]);rect.top+=size;rect.bottom+=size;}
if(context=="line")return rect;if(!context)context="local";var yOff=heightAtLine(lineObj);if(context=="local")yOff+=paddingTop(cm.display);else yOff-=cm.display.viewOffset;if(context=="page"||context=="window"){var lOff=cm.display.lineSpace.getBoundingClientRect();yOff+=lOff.top+(context=="window"?0:pageScrollY());var xOff=lOff.left+(context=="window"?0:pageScrollX());rect.left+=xOff;rect.right+=xOff;}
rect.top+=yOff;rect.bottom+=yOff;return rect;}
function fromCoordSystem(cm,coords,context){if(context=="div")return coords;var left=coords.left,top=coords.top;if(context=="page"){left-=pageScrollX();top-=pageScrollY();}else if(context=="local"||!context){var localBox=cm.display.sizer.getBoundingClientRect();left+=localBox.left;top+=localBox.top;}
var lineSpaceBox=cm.display.lineSpace.getBoundingClientRect();return{left:left-lineSpaceBox.left,top:top-lineSpaceBox.top};}
function charCoords(cm,pos,context,lineObj,bias){if(!lineObj)lineObj=getLine(cm.doc,pos.line);return intoCoordSystem(cm,lineObj,measureChar(cm,lineObj,pos.ch,bias),context);}
function cursorCoords(cm,pos,context,lineObj,preparedMeasure,varHeight){lineObj=lineObj||getLine(cm.doc,pos.line);if(!preparedMeasure)preparedMeasure=prepareMeasureForLine(cm,lineObj);function get(ch,right){var m=measureCharPrepared(cm,preparedMeasure,ch,right?"right":"left",varHeight);if(right)m.left=m.right;else m.right=m.left;return intoCoordSystem(cm,lineObj,m,context);}
function getBidi(ch,partPos){var part=order[partPos],right=part.level%2;if(ch==bidiLeft(part)&&partPos&&part.level<order[partPos-1].level){part=order[--partPos];ch=bidiRight(part)-(part.level%2?0:1);right=true;}else if(ch==bidiRight(part)&&partPos<order.length-1&&part.level<order[partPos+1].level){part=order[++partPos];ch=bidiLeft(part)-part.level%2;right=false;}
if(right&&ch==part.to&&ch>part.from)return get(ch-1);return get(ch,right);}
var order=getOrder(lineObj),ch=pos.ch;if(!order)return get(ch);var partPos=getBidiPartAt(order,ch);var val=getBidi(ch,partPos);if(bidiOther!=null)val.other=getBidi(ch,bidiOther);return val;}
function estimateCoords(cm,pos){var left=0,pos=clipPos(cm.doc,pos);if(!cm.options.lineWrapping)left=charWidth(cm.display)*pos.ch;var lineObj=getLine(cm.doc,pos.line);var top=heightAtLine(lineObj)+paddingTop(cm.display);return{left:left,right:left,top:top,bottom:top+lineObj.height};}
function PosWithInfo(line,ch,outside,xRel){var pos=Pos(line,ch);pos.xRel=xRel;if(outside)pos.outside=true;return pos;}
function coordsChar(cm,x,y){var doc=cm.doc;y+=cm.display.viewOffset;if(y<0)return PosWithInfo(doc.first,0,true,-1);var lineN=lineAtHeight(doc,y),last=doc.first+doc.size-1;if(lineN>last)
return PosWithInfo(doc.first+doc.size-1,getLine(doc,last).text.length,true,1);if(x<0)x=0;var lineObj=getLine(doc,lineN);for(;;){var found=coordsCharInner(cm,lineObj,lineN,x,y);var merged=collapsedSpanAtEnd(lineObj);var mergedPos=merged&&merged.find(0,true);if(merged&&(found.ch>mergedPos.from.ch||found.ch==mergedPos.from.ch&&found.xRel>0))
lineN=lineNo(lineObj=mergedPos.to.line);else
return found;}}
function coordsCharInner(cm,lineObj,lineNo,x,y){var innerOff=y-heightAtLine(lineObj);var wrongLine=false,adjust=2*cm.display.wrapper.clientWidth;var preparedMeasure=prepareMeasureForLine(cm,lineObj);function getX(ch){var sp=cursorCoords(cm,Pos(lineNo,ch),"line",lineObj,preparedMeasure);wrongLine=true;if(innerOff>sp.bottom)return sp.left-adjust;else if(innerOff<sp.top)return sp.left+adjust;else wrongLine=false;return sp.left;}
var bidi=getOrder(lineObj),dist=lineObj.text.length;var from=lineLeft(lineObj),to=lineRight(lineObj);var fromX=getX(from),fromOutside=wrongLine,toX=getX(to),toOutside=wrongLine;if(x>toX)return PosWithInfo(lineNo,to,toOutside,1);for(;;){if(bidi?to==from||to==moveVisually(lineObj,from,1):to-from<=1){var ch=x<fromX||x-fromX<=toX-x?from:to;var outside=ch==from?fromOutside:toOutside
var xDiff=x-(ch==from?fromX:toX);if(toOutside&&!bidi&&!/\s/.test(lineObj.text.charAt(ch))&&xDiff>0&&ch<lineObj.text.length&&preparedMeasure.view.measure.heights.length>1){var charSize=measureCharPrepared(cm,preparedMeasure,ch,"right");if(innerOff<=charSize.bottom&&innerOff>=charSize.top&&Math.abs(x-charSize.right)<xDiff){outside=false
ch++
xDiff=x-charSize.right}}
while(isExtendingChar(lineObj.text.charAt(ch)))++ch;var pos=PosWithInfo(lineNo,ch,outside,xDiff<-1?-1:xDiff>1?1:0);return pos;}
var step=Math.ceil(dist/2),middle=from+step;if(bidi){middle=from;for(var i=0;i<step;++i)middle=moveVisually(lineObj,middle,1);}
var middleX=getX(middle);if(middleX>x){to=middle;toX=middleX;if(toOutside=wrongLine)toX+=1000;dist=step;}
else{from=middle;fromX=middleX;fromOutside=wrongLine;dist-=step;}}}
var measureText;function textHeight(display){if(display.cachedTextHeight!=null)return display.cachedTextHeight;if(measureText==null){measureText=elt("pre");for(var i=0;i<49;++i){measureText.appendChild(document.createTextNode("x"));measureText.appendChild(elt("br"));}
measureText.appendChild(document.createTextNode("x"));}
removeChildrenAndAdd(display.measure,measureText);var height=measureText.offsetHeight/50;if(height>3)display.cachedTextHeight=height;removeChildren(display.measure);return height||1;}
function charWidth(display){if(display.cachedCharWidth!=null)return display.cachedCharWidth;var anchor=elt("span","xxxxxxxxxx");var pre=elt("pre",[anchor]);removeChildrenAndAdd(display.measure,pre);var rect=anchor.getBoundingClientRect(),width=(rect.right-rect.left)/10;if(width>2)display.cachedCharWidth=width;return width||10;}
var operationGroup=null;var nextOpId=0;function startOperation(cm){cm.curOp={cm:cm,viewChanged:false,startHeight:cm.doc.height,forceUpdate:false,updateInput:null,typing:false,changeObjs:null,cursorActivityHandlers:null,cursorActivityCalled:0,selectionChanged:false,updateMaxLine:false,scrollLeft:null,scrollTop:null,scrollToPos:null,focus:false,id:++nextOpId};if(operationGroup){operationGroup.ops.push(cm.curOp);}else{cm.curOp.ownsGroup=operationGroup={ops:[cm.curOp],delayedCallbacks:[]};}}
function fireCallbacksForOps(group){var callbacks=group.delayedCallbacks,i=0;do{for(;i<callbacks.length;i++)
callbacks[i].call(null);for(var j=0;j<group.ops.length;j++){var op=group.ops[j];if(op.cursorActivityHandlers)
while(op.cursorActivityCalled<op.cursorActivityHandlers.length)
op.cursorActivityHandlers[op.cursorActivityCalled++].call(null,op.cm);}}while(i<callbacks.length);}
function endOperation(cm){var op=cm.curOp,group=op.ownsGroup;if(!group)return;try{fireCallbacksForOps(group);}
finally{operationGroup=null;for(var i=0;i<group.ops.length;i++)
group.ops[i].cm.curOp=null;endOperations(group);}}
function endOperations(group){var ops=group.ops;for(var i=0;i<ops.length;i++)
endOperation_R1(ops[i]);for(var i=0;i<ops.length;i++)
endOperation_W1(ops[i]);for(var i=0;i<ops.length;i++)
endOperation_R2(ops[i]);for(var i=0;i<ops.length;i++)
endOperation_W2(ops[i]);for(var i=0;i<ops.length;i++)
endOperation_finish(ops[i]);}
function endOperation_R1(op){var cm=op.cm,display=cm.display;maybeClipScrollbars(cm);if(op.updateMaxLine)findMaxLine(cm);op.mustUpdate=op.viewChanged||op.forceUpdate||op.scrollTop!=null||op.scrollToPos&&(op.scrollToPos.from.line<display.viewFrom||op.scrollToPos.to.line>=display.viewTo)||display.maxLineChanged&&cm.options.lineWrapping;op.update=op.mustUpdate&&new DisplayUpdate(cm,op.mustUpdate&&{top:op.scrollTop,ensure:op.scrollToPos},op.forceUpdate);}
function endOperation_W1(op){op.updatedDisplay=op.mustUpdate&&updateDisplayIfNeeded(op.cm,op.update);}
function endOperation_R2(op){var cm=op.cm,display=cm.display;if(op.updatedDisplay)updateHeightsInViewport(cm);op.barMeasure=measureForScrollbars(cm);if(display.maxLineChanged&&!cm.options.lineWrapping){op.adjustWidthTo=measureChar(cm,display.maxLine,display.maxLine.text.length).left+3;cm.display.sizerWidth=op.adjustWidthTo;op.barMeasure.scrollWidth=Math.max(display.scroller.clientWidth,display.sizer.offsetLeft+op.adjustWidthTo+scrollGap(cm)+cm.display.barWidth);op.maxScrollLeft=Math.max(0,display.sizer.offsetLeft+op.adjustWidthTo-displayWidth(cm));}
if(op.updatedDisplay||op.selectionChanged)
op.preparedSelection=display.input.prepareSelection(op.focus);}
function endOperation_W2(op){var cm=op.cm;if(op.adjustWidthTo!=null){cm.display.sizer.style.minWidth=op.adjustWidthTo+"px";if(op.maxScrollLeft<cm.doc.scrollLeft)
setScrollLeft(cm,Math.min(cm.display.scroller.scrollLeft,op.maxScrollLeft),true);cm.display.maxLineChanged=false;}
var takeFocus=op.focus&&op.focus==activeElt()&&(!document.hasFocus||document.hasFocus())
if(op.preparedSelection)
cm.display.input.showSelection(op.preparedSelection,takeFocus);if(op.updatedDisplay||op.startHeight!=cm.doc.height)
updateScrollbars(cm,op.barMeasure);if(op.updatedDisplay)
setDocumentHeight(cm,op.barMeasure);if(op.selectionChanged)restartBlink(cm);if(cm.state.focused&&op.updateInput)
cm.display.input.reset(op.typing);if(takeFocus)ensureFocus(op.cm);}
function endOperation_finish(op){var cm=op.cm,display=cm.display,doc=cm.doc;if(op.updatedDisplay)postUpdateDisplay(cm,op.update);if(display.wheelStartX!=null&&(op.scrollTop!=null||op.scrollLeft!=null||op.scrollToPos))
display.wheelStartX=display.wheelStartY=null;if(op.scrollTop!=null&&(display.scroller.scrollTop!=op.scrollTop||op.forceScroll)){doc.scrollTop=Math.max(0,Math.min(display.scroller.scrollHeight-display.scroller.clientHeight,op.scrollTop));display.scrollbars.setScrollTop(doc.scrollTop);display.scroller.scrollTop=doc.scrollTop;}
if(op.scrollLeft!=null&&(display.scroller.scrollLeft!=op.scrollLeft||op.forceScroll)){doc.scrollLeft=Math.max(0,Math.min(display.scroller.scrollWidth-display.scroller.clientWidth,op.scrollLeft));display.scrollbars.setScrollLeft(doc.scrollLeft);display.scroller.scrollLeft=doc.scrollLeft;alignHorizontally(cm);}
if(op.scrollToPos){var coords=scrollPosIntoView(cm,clipPos(doc,op.scrollToPos.from),clipPos(doc,op.scrollToPos.to),op.scrollToPos.margin);if(op.scrollToPos.isCursor&&cm.state.focused)maybeScrollWindow(cm,coords);}
var hidden=op.maybeHiddenMarkers,unhidden=op.maybeUnhiddenMarkers;if(hidden)for(var i=0;i<hidden.length;++i)
if(!hidden[i].lines.length)signal(hidden[i],"hide");if(unhidden)for(var i=0;i<unhidden.length;++i)
if(unhidden[i].lines.length)signal(unhidden[i],"unhide");if(display.wrapper.offsetHeight)
doc.scrollTop=cm.display.scroller.scrollTop;if(op.changeObjs)
signal(cm,"changes",cm,op.changeObjs);if(op.update)
op.update.finish();}
function runInOp(cm,f){if(cm.curOp)return f();startOperation(cm);try{return f();}
finally{endOperation(cm);}}
function operation(cm,f){return function(){if(cm.curOp)return f.apply(cm,arguments);startOperation(cm);try{return f.apply(cm,arguments);}
finally{endOperation(cm);}};}
function methodOp(f){return function(){if(this.curOp)return f.apply(this,arguments);startOperation(this);try{return f.apply(this,arguments);}
finally{endOperation(this);}};}
function docMethodOp(f){return function(){var cm=this.cm;if(!cm||cm.curOp)return f.apply(this,arguments);startOperation(cm);try{return f.apply(this,arguments);}
finally{endOperation(cm);}};}
function LineView(doc,line,lineN){this.line=line;this.rest=visualLineContinued(line);this.size=this.rest?lineNo(lst(this.rest))-lineN+1:1;this.node=this.text=null;this.hidden=lineIsHidden(doc,line);}
function buildViewArray(cm,from,to){var array=[],nextPos;for(var pos=from;pos<to;pos=nextPos){var view=new LineView(cm.doc,getLine(cm.doc,pos),pos);nextPos=pos+view.size;array.push(view);}
return array;}
function regChange(cm,from,to,lendiff){if(from==null)from=cm.doc.first;if(to==null)to=cm.doc.first+cm.doc.size;if(!lendiff)lendiff=0;var display=cm.display;if(lendiff&&to<display.viewTo&&(display.updateLineNumbers==null||display.updateLineNumbers>from))
display.updateLineNumbers=from;cm.curOp.viewChanged=true;if(from>=display.viewTo){if(sawCollapsedSpans&&visualLineNo(cm.doc,from)<display.viewTo)
resetView(cm);}else if(to<=display.viewFrom){if(sawCollapsedSpans&&visualLineEndNo(cm.doc,to+lendiff)>display.viewFrom){resetView(cm);}else{display.viewFrom+=lendiff;display.viewTo+=lendiff;}}else if(from<=display.viewFrom&&to>=display.viewTo){resetView(cm);}else if(from<=display.viewFrom){var cut=viewCuttingPoint(cm,to,to+lendiff,1);if(cut){display.view=display.view.slice(cut.index);display.viewFrom=cut.lineN;display.viewTo+=lendiff;}else{resetView(cm);}}else if(to>=display.viewTo){var cut=viewCuttingPoint(cm,from,from,-1);if(cut){display.view=display.view.slice(0,cut.index);display.viewTo=cut.lineN;}else{resetView(cm);}}else{var cutTop=viewCuttingPoint(cm,from,from,-1);var cutBot=viewCuttingPoint(cm,to,to+lendiff,1);if(cutTop&&cutBot){display.view=display.view.slice(0,cutTop.index).concat(buildViewArray(cm,cutTop.lineN,cutBot.lineN)).concat(display.view.slice(cutBot.index));display.viewTo+=lendiff;}else{resetView(cm);}}
var ext=display.externalMeasured;if(ext){if(to<ext.lineN)
ext.lineN+=lendiff;else if(from<ext.lineN+ext.size)
display.externalMeasured=null;}}
function regLineChange(cm,line,type){cm.curOp.viewChanged=true;var display=cm.display,ext=cm.display.externalMeasured;if(ext&&line>=ext.lineN&&line<ext.lineN+ext.size)
display.externalMeasured=null;if(line<display.viewFrom||line>=display.viewTo)return;var lineView=display.view[findViewIndex(cm,line)];if(lineView.node==null)return;var arr=lineView.changes||(lineView.changes=[]);if(indexOf(arr,type)==-1)arr.push(type);}
function resetView(cm){cm.display.viewFrom=cm.display.viewTo=cm.doc.first;cm.display.view=[];cm.display.viewOffset=0;}
function findViewIndex(cm,n){if(n>=cm.display.viewTo)return null;n-=cm.display.viewFrom;if(n<0)return null;var view=cm.display.view;for(var i=0;i<view.length;i++){n-=view[i].size;if(n<0)return i;}}
function viewCuttingPoint(cm,oldN,newN,dir){var index=findViewIndex(cm,oldN),diff,view=cm.display.view;if(!sawCollapsedSpans||newN==cm.doc.first+cm.doc.size)
return{index:index,lineN:newN};for(var i=0,n=cm.display.viewFrom;i<index;i++)
n+=view[i].size;if(n!=oldN){if(dir>0){if(index==view.length-1)return null;diff=(n+view[index].size)-oldN;index++;}else{diff=n-oldN;}
oldN+=diff;newN+=diff;}
while(visualLineNo(cm.doc,newN)!=newN){if(index==(dir<0?0:view.length-1))return null;newN+=dir*view[index-(dir<0?1:0)].size;index+=dir;}
return{index:index,lineN:newN};}
function adjustView(cm,from,to){var display=cm.display,view=display.view;if(view.length==0||from>=display.viewTo||to<=display.viewFrom){display.view=buildViewArray(cm,from,to);display.viewFrom=from;}else{if(display.viewFrom>from)
display.view=buildViewArray(cm,from,display.viewFrom).concat(display.view);else if(display.viewFrom<from)
display.view=display.view.slice(findViewIndex(cm,from));display.viewFrom=from;if(display.viewTo<to)
display.view=display.view.concat(buildViewArray(cm,display.viewTo,to));else if(display.viewTo>to)
display.view=display.view.slice(0,findViewIndex(cm,to));}
display.viewTo=to;}
function countDirtyView(cm){var view=cm.display.view,dirty=0;for(var i=0;i<view.length;i++){var lineView=view[i];if(!lineView.hidden&&(!lineView.node||lineView.changes))++dirty;}
return dirty;}
function registerEventHandlers(cm){var d=cm.display;on(d.scroller,"mousedown",operation(cm,onMouseDown));if(ie&&ie_version<11)
on(d.scroller,"dblclick",operation(cm,function(e){if(signalDOMEvent(cm,e))return;var pos=posFromMouse(cm,e);if(!pos||clickInGutter(cm,e)||eventInWidget(cm.display,e))return;e_preventDefault(e);var word=cm.findWordAt(pos);extendSelection(cm.doc,word.anchor,word.head);}));else
on(d.scroller,"dblclick",function(e){signalDOMEvent(cm,e)||e_preventDefault(e);});if(!captureRightClick)on(d.scroller,"contextmenu",function(e){onContextMenu(cm,e);});var touchFinished,prevTouch={end:0};function finishTouch(){if(d.activeTouch){touchFinished=setTimeout(function(){d.activeTouch=null;},1000);prevTouch=d.activeTouch;prevTouch.end=+new Date;}};function isMouseLikeTouchEvent(e){if(e.touches.length!=1)return false;var touch=e.touches[0];return touch.radiusX<=1&&touch.radiusY<=1;}
function farAway(touch,other){if(other.left==null)return true;var dx=other.left-touch.left,dy=other.top-touch.top;return dx*dx+dy*dy>20*20;}
on(d.scroller,"touchstart",function(e){if(!signalDOMEvent(cm,e)&&!isMouseLikeTouchEvent(e)){clearTimeout(touchFinished);var now=+new Date;d.activeTouch={start:now,moved:false,prev:now-prevTouch.end<=300?prevTouch:null};if(e.touches.length==1){d.activeTouch.left=e.touches[0].pageX;d.activeTouch.top=e.touches[0].pageY;}}});on(d.scroller,"touchmove",function(){if(d.activeTouch)d.activeTouch.moved=true;});on(d.scroller,"touchend",function(e){var touch=d.activeTouch;if(touch&&!eventInWidget(d,e)&&touch.left!=null&&!touch.moved&&new Date-touch.start<300){var pos=cm.coordsChar(d.activeTouch,"page"),range;if(!touch.prev||farAway(touch,touch.prev))
range=new Range(pos,pos);else if(!touch.prev.prev||farAway(touch,touch.prev.prev))
range=cm.findWordAt(pos);else
range=new Range(Pos(pos.line,0),clipPos(cm.doc,Pos(pos.line+1,0)));cm.setSelection(range.anchor,range.head);cm.focus();e_preventDefault(e);}
finishTouch();});on(d.scroller,"touchcancel",finishTouch);on(d.scroller,"scroll",function(){if(d.scroller.clientHeight){setScrollTop(cm,d.scroller.scrollTop);setScrollLeft(cm,d.scroller.scrollLeft,true);signal(cm,"scroll",cm);}});on(d.scroller,"mousewheel",function(e){onScrollWheel(cm,e);});on(d.scroller,"DOMMouseScroll",function(e){onScrollWheel(cm,e);});on(d.wrapper,"scroll",function(){d.wrapper.scrollTop=d.wrapper.scrollLeft=0;});d.dragFunctions={enter:function(e){if(!signalDOMEvent(cm,e))e_stop(e);},over:function(e){if(!signalDOMEvent(cm,e)){onDragOver(cm,e);e_stop(e);}},start:function(e){onDragStart(cm,e);},drop:operation(cm,onDrop),leave:function(e){if(!signalDOMEvent(cm,e)){clearDragCursor(cm);}}};var inp=d.input.getField();on(inp,"keyup",function(e){onKeyUp.call(cm,e);});on(inp,"keydown",operation(cm,onKeyDown));on(inp,"keypress",operation(cm,onKeyPress));on(inp,"focus",bind(onFocus,cm));on(inp,"blur",bind(onBlur,cm));}
function dragDropChanged(cm,value,old){var wasOn=old&&old!=CodeMirror.Init;if(!value!=!wasOn){var funcs=cm.display.dragFunctions;var toggle=value?on:off;toggle(cm.display.scroller,"dragstart",funcs.start);toggle(cm.display.scroller,"dragenter",funcs.enter);toggle(cm.display.scroller,"dragover",funcs.over);toggle(cm.display.scroller,"dragleave",funcs.leave);toggle(cm.display.scroller,"drop",funcs.drop);}}
function onResize(cm){var d=cm.display;if(d.lastWrapHeight==d.wrapper.clientHeight&&d.lastWrapWidth==d.wrapper.clientWidth)
return;d.cachedCharWidth=d.cachedTextHeight=d.cachedPaddingH=null;d.scrollbarsClipped=false;cm.setSize();}
function eventInWidget(display,e){for(var n=e_target(e);n!=display.wrapper;n=n.parentNode){if(!n||(n.nodeType==1&&n.getAttribute("cm-ignore-events")=="true")||(n.parentNode==display.sizer&&n!=display.mover))
return true;}}
function posFromMouse(cm,e,liberal,forRect){var display=cm.display;if(!liberal&&e_target(e).getAttribute("cm-not-content")=="true")return null;var x,y,space=display.lineSpace.getBoundingClientRect();try{x=e.clientX-space.left;y=e.clientY-space.top;}
catch(e){return null;}
var coords=coordsChar(cm,x,y),line;if(forRect&&coords.xRel==1&&(line=getLine(cm.doc,coords.line).text).length==coords.ch){var colDiff=countColumn(line,line.length,cm.options.tabSize)-line.length;coords=Pos(coords.line,Math.max(0,Math.round((x-paddingH(cm.display).left)/charWidth(cm.display))-colDiff));}
return coords;}
function onMouseDown(e){var cm=this,display=cm.display;if(signalDOMEvent(cm,e)||display.activeTouch&&display.input.supportsTouch())return;display.shift=e.shiftKey;if(eventInWidget(display,e)){if(!webkit){display.scroller.draggable=false;setTimeout(function(){display.scroller.draggable=true;},100);}
return;}
if(clickInGutter(cm,e))return;var start=posFromMouse(cm,e);window.focus();switch(e_button(e)){case 1:if(cm.state.selectingText)
cm.state.selectingText(e);else if(start)
leftButtonDown(cm,e,start);else if(e_target(e)==display.scroller)
e_preventDefault(e);break;case 2:if(webkit)cm.state.lastMiddleDown=+new Date;if(start)extendSelection(cm.doc,start);setTimeout(function(){display.input.focus();},20);e_preventDefault(e);break;case 3:if(captureRightClick)onContextMenu(cm,e);else delayBlurEvent(cm);break;}}
var lastClick,lastDoubleClick;function leftButtonDown(cm,e,start){if(ie)setTimeout(bind(ensureFocus,cm),0);else cm.curOp.focus=activeElt();var now=+new Date,type;if(lastDoubleClick&&lastDoubleClick.time>now-400&&cmp(lastDoubleClick.pos,start)==0){type="triple";}else if(lastClick&&lastClick.time>now-400&&cmp(lastClick.pos,start)==0){type="double";lastDoubleClick={time:now,pos:start};}else{type="single";lastClick={time:now,pos:start};}
var sel=cm.doc.sel,modifier=mac?e.metaKey:e.ctrlKey,contained;if(cm.options.dragDrop&&dragAndDrop&&!cm.isReadOnly()&&type=="single"&&(contained=sel.contains(start))>-1&&(cmp((contained=sel.ranges[contained]).from(),start)<0||start.xRel>0)&&(cmp(contained.to(),start)>0||start.xRel<0))
leftButtonStartDrag(cm,e,start,modifier);else
leftButtonSelect(cm,e,start,type,modifier);}
function leftButtonStartDrag(cm,e,start,modifier){var display=cm.display,startTime=+new Date;var dragEnd=operation(cm,function(e2){if(webkit)display.scroller.draggable=false;cm.state.draggingText=false;off(document,"mouseup",dragEnd);off(display.scroller,"drop",dragEnd);if(Math.abs(e.clientX-e2.clientX)+Math.abs(e.clientY-e2.clientY)<10){e_preventDefault(e2);if(!modifier&&+new Date-200<startTime)
extendSelection(cm.doc,start);if(webkit||ie&&ie_version==9)
setTimeout(function(){document.body.focus();display.input.focus();},20);else
display.input.focus();}});if(webkit)display.scroller.draggable=true;cm.state.draggingText=dragEnd;dragEnd.copy=mac?e.altKey:e.ctrlKey
if(display.scroller.dragDrop)display.scroller.dragDrop();on(document,"mouseup",dragEnd);on(display.scroller,"drop",dragEnd);}
function leftButtonSelect(cm,e,start,type,addNew){var display=cm.display,doc=cm.doc;e_preventDefault(e);var ourRange,ourIndex,startSel=doc.sel,ranges=startSel.ranges;if(addNew&&!e.shiftKey){ourIndex=doc.sel.contains(start);if(ourIndex>-1)
ourRange=ranges[ourIndex];else
ourRange=new Range(start,start);}else{ourRange=doc.sel.primary();ourIndex=doc.sel.primIndex;}
if(chromeOS?e.shiftKey&&e.metaKey:e.altKey){type="rect";if(!addNew)ourRange=new Range(start,start);start=posFromMouse(cm,e,true,true);ourIndex=-1;}else if(type=="double"){var word=cm.findWordAt(start);if(cm.display.shift||doc.extend)
ourRange=extendRange(doc,ourRange,word.anchor,word.head);else
ourRange=word;}else if(type=="triple"){var line=new Range(Pos(start.line,0),clipPos(doc,Pos(start.line+1,0)));if(cm.display.shift||doc.extend)
ourRange=extendRange(doc,ourRange,line.anchor,line.head);else
ourRange=line;}else{ourRange=extendRange(doc,ourRange,start);}
if(!addNew){ourIndex=0;setSelection(doc,new Selection([ourRange],0),sel_mouse);startSel=doc.sel;}else if(ourIndex==-1){ourIndex=ranges.length;setSelection(doc,normalizeSelection(ranges.concat([ourRange]),ourIndex),{scroll:false,origin:"*mouse"});}else if(ranges.length>1&&ranges[ourIndex].empty()&&type=="single"&&!e.shiftKey){setSelection(doc,normalizeSelection(ranges.slice(0,ourIndex).concat(ranges.slice(ourIndex+1)),0),{scroll:false,origin:"*mouse"});startSel=doc.sel;}else{replaceOneSelection(doc,ourIndex,ourRange,sel_mouse);}
var lastPos=start;function extendTo(pos){if(cmp(lastPos,pos)==0)return;lastPos=pos;if(type=="rect"){var ranges=[],tabSize=cm.options.tabSize;var startCol=countColumn(getLine(doc,start.line).text,start.ch,tabSize);var posCol=countColumn(getLine(doc,pos.line).text,pos.ch,tabSize);var left=Math.min(startCol,posCol),right=Math.max(startCol,posCol);for(var line=Math.min(start.line,pos.line),end=Math.min(cm.lastLine(),Math.max(start.line,pos.line));line<=end;line++){var text=getLine(doc,line).text,leftPos=findColumn(text,left,tabSize);if(left==right)
ranges.push(new Range(Pos(line,leftPos),Pos(line,leftPos)));else if(text.length>leftPos)
ranges.push(new Range(Pos(line,leftPos),Pos(line,findColumn(text,right,tabSize))));}
if(!ranges.length)ranges.push(new Range(start,start));setSelection(doc,normalizeSelection(startSel.ranges.slice(0,ourIndex).concat(ranges),ourIndex),{origin:"*mouse",scroll:false});cm.scrollIntoView(pos);}else{var oldRange=ourRange;var anchor=oldRange.anchor,head=pos;if(type!="single"){if(type=="double")
var range=cm.findWordAt(pos);else
var range=new Range(Pos(pos.line,0),clipPos(doc,Pos(pos.line+1,0)));if(cmp(range.anchor,anchor)>0){head=range.head;anchor=minPos(oldRange.from(),range.anchor);}else{head=range.anchor;anchor=maxPos(oldRange.to(),range.head);}}
var ranges=startSel.ranges.slice(0);ranges[ourIndex]=new Range(clipPos(doc,anchor),head);setSelection(doc,normalizeSelection(ranges,ourIndex),sel_mouse);}}
var editorSize=display.wrapper.getBoundingClientRect();var counter=0;function extend(e){var curCount=++counter;var cur=posFromMouse(cm,e,true,type=="rect");if(!cur)return;if(cmp(cur,lastPos)!=0){cm.curOp.focus=activeElt();extendTo(cur);var visible=visibleLines(display,doc);if(cur.line>=visible.to||cur.line<visible.from)
setTimeout(operation(cm,function(){if(counter==curCount)extend(e);}),150);}else{var outside=e.clientY<editorSize.top?-20:e.clientY>editorSize.bottom?20:0;if(outside)setTimeout(operation(cm,function(){if(counter!=curCount)return;display.scroller.scrollTop+=outside;extend(e);}),50);}}
function done(e){cm.state.selectingText=false;counter=Infinity;e_preventDefault(e);display.input.focus();off(document,"mousemove",move);off(document,"mouseup",up);doc.history.lastSelOrigin=null;}
var move=operation(cm,function(e){if(!e_button(e))done(e);else extend(e);});var up=operation(cm,done);cm.state.selectingText=up;on(document,"mousemove",move);on(document,"mouseup",up);}
function gutterEvent(cm,e,type,prevent){try{var mX=e.clientX,mY=e.clientY;}
catch(e){return false;}
if(mX>=Math.floor(cm.display.gutters.getBoundingClientRect().right))return false;if(prevent)e_preventDefault(e);var display=cm.display;var lineBox=display.lineDiv.getBoundingClientRect();if(mY>lineBox.bottom||!hasHandler(cm,type))return e_defaultPrevented(e);mY-=lineBox.top-display.viewOffset;for(var i=0;i<cm.options.gutters.length;++i){var g=display.gutters.childNodes[i];if(g&&g.getBoundingClientRect().right>=mX){var line=lineAtHeight(cm.doc,mY);var gutter=cm.options.gutters[i];signal(cm,type,cm,line,gutter,e);return e_defaultPrevented(e);}}}
function clickInGutter(cm,e){return gutterEvent(cm,e,"gutterClick",true);}
var lastDrop=0;function onDrop(e){var cm=this;clearDragCursor(cm);if(signalDOMEvent(cm,e)||eventInWidget(cm.display,e))
return;e_preventDefault(e);if(ie)lastDrop=+new Date;var pos=posFromMouse(cm,e,true),files=e.dataTransfer.files;if(!pos||cm.isReadOnly())return;if(files&&files.length&&window.FileReader&&window.File){var n=files.length,text=Array(n),read=0;var loadFile=function(file,i){if(cm.options.allowDropFileTypes&&indexOf(cm.options.allowDropFileTypes,file.type)==-1)
return;var reader=new FileReader;reader.onload=operation(cm,function(){var content=reader.result;if(/[\x00-\x08\x0e-\x1f]{2}/.test(content))content="";text[i]=content;if(++read==n){pos=clipPos(cm.doc,pos);var change={from:pos,to:pos,text:cm.doc.splitLines(text.join(cm.doc.lineSeparator())),origin:"paste"};makeChange(cm.doc,change);setSelectionReplaceHistory(cm.doc,simpleSelection(pos,changeEnd(change)));}});reader.readAsText(file);};for(var i=0;i<n;++i)loadFile(files[i],i);}else{if(cm.state.draggingText&&cm.doc.sel.contains(pos)>-1){cm.state.draggingText(e);setTimeout(function(){cm.display.input.focus();},20);return;}
try{var text=e.dataTransfer.getData("Text");if(text){if(cm.state.draggingText&&!cm.state.draggingText.copy)
var selected=cm.listSelections();setSelectionNoUndo(cm.doc,simpleSelection(pos,pos));if(selected)for(var i=0;i<selected.length;++i)
replaceRange(cm.doc,"",selected[i].anchor,selected[i].head,"drag");cm.replaceSelection(text,"around","paste");cm.display.input.focus();}}
catch(e){}}}
function onDragStart(cm,e){if(ie&&(!cm.state.draggingText||+new Date-lastDrop<100)){e_stop(e);return;}
if(signalDOMEvent(cm,e)||eventInWidget(cm.display,e))return;e.dataTransfer.setData("Text",cm.getSelection());e.dataTransfer.effectAllowed="copyMove"
if(e.dataTransfer.setDragImage&&!safari){var img=elt("img",null,null,"position: fixed; left: 0; top: 0;");img.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";if(presto){img.width=img.height=1;cm.display.wrapper.appendChild(img);img._top=img.offsetTop;}
e.dataTransfer.setDragImage(img,0,0);if(presto)img.parentNode.removeChild(img);}}
function onDragOver(cm,e){var pos=posFromMouse(cm,e);if(!pos)return;var frag=document.createDocumentFragment();drawSelectionCursor(cm,pos,frag);if(!cm.display.dragCursor){cm.display.dragCursor=elt("div",null,"CodeMirror-cursors CodeMirror-dragcursors");cm.display.lineSpace.insertBefore(cm.display.dragCursor,cm.display.cursorDiv);}
removeChildrenAndAdd(cm.display.dragCursor,frag);}
function clearDragCursor(cm){if(cm.display.dragCursor){cm.display.lineSpace.removeChild(cm.display.dragCursor);cm.display.dragCursor=null;}}
function setScrollTop(cm,val){if(Math.abs(cm.doc.scrollTop-val)<2)return;cm.doc.scrollTop=val;if(!gecko)updateDisplaySimple(cm,{top:val});if(cm.display.scroller.scrollTop!=val)cm.display.scroller.scrollTop=val;cm.display.scrollbars.setScrollTop(val);if(gecko)updateDisplaySimple(cm);startWorker(cm,100);}
function setScrollLeft(cm,val,isScroller){if(isScroller?val==cm.doc.scrollLeft:Math.abs(cm.doc.scrollLeft-val)<2)return;val=Math.min(val,cm.display.scroller.scrollWidth-cm.display.scroller.clientWidth);cm.doc.scrollLeft=val;alignHorizontally(cm);if(cm.display.scroller.scrollLeft!=val)cm.display.scroller.scrollLeft=val;cm.display.scrollbars.setScrollLeft(val);}
var wheelSamples=0,wheelPixelsPerUnit=null;if(ie)wheelPixelsPerUnit=-.53;else if(gecko)wheelPixelsPerUnit=15;else if(chrome)wheelPixelsPerUnit=-.7;else if(safari)wheelPixelsPerUnit=-1/3;var wheelEventDelta=function(e){var dx=e.wheelDeltaX,dy=e.wheelDeltaY;if(dx==null&&e.detail&&e.axis==e.HORIZONTAL_AXIS)dx=e.detail;if(dy==null&&e.detail&&e.axis==e.VERTICAL_AXIS)dy=e.detail;else if(dy==null)dy=e.wheelDelta;return{x:dx,y:dy};};CodeMirror.wheelEventPixels=function(e){var delta=wheelEventDelta(e);delta.x*=wheelPixelsPerUnit;delta.y*=wheelPixelsPerUnit;return delta;};function onScrollWheel(cm,e){var delta=wheelEventDelta(e),dx=delta.x,dy=delta.y;var display=cm.display,scroll=display.scroller;var canScrollX=scroll.scrollWidth>scroll.clientWidth;var canScrollY=scroll.scrollHeight>scroll.clientHeight;if(!(dx&&canScrollX||dy&&canScrollY))return;if(dy&&mac&&webkit){outer:for(var cur=e.target,view=display.view;cur!=scroll;cur=cur.parentNode){for(var i=0;i<view.length;i++){if(view[i].node==cur){cm.display.currentWheelTarget=cur;break outer;}}}}
if(dx&&!gecko&&!presto&&wheelPixelsPerUnit!=null){if(dy&&canScrollY)
setScrollTop(cm,Math.max(0,Math.min(scroll.scrollTop+dy*wheelPixelsPerUnit,scroll.scrollHeight-scroll.clientHeight)));setScrollLeft(cm,Math.max(0,Math.min(scroll.scrollLeft+dx*wheelPixelsPerUnit,scroll.scrollWidth-scroll.clientWidth)));if(!dy||(dy&&canScrollY))
e_preventDefault(e);display.wheelStartX=null;return;}
if(dy&&wheelPixelsPerUnit!=null){var pixels=dy*wheelPixelsPerUnit;var top=cm.doc.scrollTop,bot=top+display.wrapper.clientHeight;if(pixels<0)top=Math.max(0,top+pixels-50);else bot=Math.min(cm.doc.height,bot+pixels+50);updateDisplaySimple(cm,{top:top,bottom:bot});}
if(wheelSamples<20){if(display.wheelStartX==null){display.wheelStartX=scroll.scrollLeft;display.wheelStartY=scroll.scrollTop;display.wheelDX=dx;display.wheelDY=dy;setTimeout(function(){if(display.wheelStartX==null)return;var movedX=scroll.scrollLeft-display.wheelStartX;var movedY=scroll.scrollTop-display.wheelStartY;var sample=(movedY&&display.wheelDY&&movedY/display.wheelDY)||(movedX&&display.wheelDX&&movedX/display.wheelDX);display.wheelStartX=display.wheelStartY=null;if(!sample)return;wheelPixelsPerUnit=(wheelPixelsPerUnit*wheelSamples+sample)/(wheelSamples+1);++wheelSamples;},200);}else{display.wheelDX+=dx;display.wheelDY+=dy;}}}
function doHandleBinding(cm,bound,dropShift){if(typeof bound=="string"){bound=commands[bound];if(!bound)return false;}
cm.display.input.ensurePolled();var prevShift=cm.display.shift,done=false;try{if(cm.isReadOnly())cm.state.suppressEdits=true;if(dropShift)cm.display.shift=false;done=bound(cm)!=Pass;}finally{cm.display.shift=prevShift;cm.state.suppressEdits=false;}
return done;}
function lookupKeyForEditor(cm,name,handle){for(var i=0;i<cm.state.keyMaps.length;i++){var result=lookupKey(name,cm.state.keyMaps[i],handle,cm);if(result)return result;}
return(cm.options.extraKeys&&lookupKey(name,cm.options.extraKeys,handle,cm))||lookupKey(name,cm.options.keyMap,handle,cm);}
var stopSeq=new Delayed;function dispatchKey(cm,name,e,handle){var seq=cm.state.keySeq;if(seq){if(isModifierKey(name))return"handled";stopSeq.set(50,function(){if(cm.state.keySeq==seq){cm.state.keySeq=null;cm.display.input.reset();}});name=seq+" "+name;}
var result=lookupKeyForEditor(cm,name,handle);if(result=="multi")
cm.state.keySeq=name;if(result=="handled")
signalLater(cm,"keyHandled",cm,name,e);if(result=="handled"||result=="multi"){e_preventDefault(e);restartBlink(cm);}
if(seq&&!result&&/\'$/.test(name)){e_preventDefault(e);return true;}
return!!result;}
function handleKeyBinding(cm,e){var name=keyName(e,true);if(!name)return false;if(e.shiftKey&&!cm.state.keySeq){return dispatchKey(cm,"Shift-"+name,e,function(b){return doHandleBinding(cm,b,true);})||dispatchKey(cm,name,e,function(b){if(typeof b=="string"?/^go[A-Z]/.test(b):b.motion)
return doHandleBinding(cm,b);});}else{return dispatchKey(cm,name,e,function(b){return doHandleBinding(cm,b);});}}
function handleCharBinding(cm,e,ch){return dispatchKey(cm,"'"+ch+"'",e,function(b){return doHandleBinding(cm,b,true);});}
var lastStoppedKey=null;function onKeyDown(e){var cm=this;cm.curOp.focus=activeElt();if(signalDOMEvent(cm,e))return;if(ie&&ie_version<11&&e.keyCode==27)e.returnValue=false;var code=e.keyCode;cm.display.shift=code==16||e.shiftKey;var handled=handleKeyBinding(cm,e);if(presto){lastStoppedKey=handled?code:null;if(!handled&&code==88&&!hasCopyEvent&&(mac?e.metaKey:e.ctrlKey))
cm.replaceSelection("",null,"cut");}
if(code==18&&!/\bCodeMirror-crosshair\b/.test(cm.display.lineDiv.className))
showCrossHair(cm);}
function showCrossHair(cm){var lineDiv=cm.display.lineDiv;addClass(lineDiv,"CodeMirror-crosshair");function up(e){if(e.keyCode==18||!e.altKey){rmClass(lineDiv,"CodeMirror-crosshair");off(document,"keyup",up);off(document,"mouseover",up);}}
on(document,"keyup",up);on(document,"mouseover",up);}
function onKeyUp(e){if(e.keyCode==16)this.doc.sel.shift=false;signalDOMEvent(this,e);}
function onKeyPress(e){var cm=this;if(eventInWidget(cm.display,e)||signalDOMEvent(cm,e)||e.ctrlKey&&!e.altKey||mac&&e.metaKey)return;var keyCode=e.keyCode,charCode=e.charCode;if(presto&&keyCode==lastStoppedKey){lastStoppedKey=null;e_preventDefault(e);return;}
if((presto&&(!e.which||e.which<10))&&handleKeyBinding(cm,e))return;var ch=String.fromCharCode(charCode==null?keyCode:charCode);if(handleCharBinding(cm,e,ch))return;cm.display.input.onKeyPress(e);}
function delayBlurEvent(cm){cm.state.delayingBlurEvent=true;setTimeout(function(){if(cm.state.delayingBlurEvent){cm.state.delayingBlurEvent=false;onBlur(cm);}},100);}
function onFocus(cm){if(cm.state.delayingBlurEvent)cm.state.delayingBlurEvent=false;if(cm.options.readOnly=="nocursor")return;if(!cm.state.focused){signal(cm,"focus",cm);cm.state.focused=true;addClass(cm.display.wrapper,"CodeMirror-focused");if(!cm.curOp&&cm.display.selForContextMenu!=cm.doc.sel){cm.display.input.reset();if(webkit)setTimeout(function(){cm.display.input.reset(true);},20);}
cm.display.input.receivedFocus();}
restartBlink(cm);}
function onBlur(cm){if(cm.state.delayingBlurEvent)return;if(cm.state.focused){signal(cm,"blur",cm);cm.state.focused=false;rmClass(cm.display.wrapper,"CodeMirror-focused");}
clearInterval(cm.display.blinker);setTimeout(function(){if(!cm.state.focused)cm.display.shift=false;},150);}
function onContextMenu(cm,e){if(eventInWidget(cm.display,e)||contextMenuInGutter(cm,e))return;if(signalDOMEvent(cm,e,"contextmenu"))return;cm.display.input.onContextMenu(e);}
function contextMenuInGutter(cm,e){if(!hasHandler(cm,"gutterContextMenu"))return false;return gutterEvent(cm,e,"gutterContextMenu",false);}
var changeEnd=CodeMirror.changeEnd=function(change){if(!change.text)return change.to;return Pos(change.from.line+change.text.length-1,lst(change.text).length+(change.text.length==1?change.from.ch:0));};function adjustForChange(pos,change){if(cmp(pos,change.from)<0)return pos;if(cmp(pos,change.to)<=0)return changeEnd(change);var line=pos.line+change.text.length-(change.to.line-change.from.line)-1,ch=pos.ch;if(pos.line==change.to.line)ch+=changeEnd(change).ch-change.to.ch;return Pos(line,ch);}
function computeSelAfterChange(doc,change){var out=[];for(var i=0;i<doc.sel.ranges.length;i++){var range=doc.sel.ranges[i];out.push(new Range(adjustForChange(range.anchor,change),adjustForChange(range.head,change)));}
return normalizeSelection(out,doc.sel.primIndex);}
function offsetPos(pos,old,nw){if(pos.line==old.line)
return Pos(nw.line,pos.ch-old.ch+nw.ch);else
return Pos(nw.line+(pos.line-old.line),pos.ch);}
function computeReplacedSel(doc,changes,hint){var out=[];var oldPrev=Pos(doc.first,0),newPrev=oldPrev;for(var i=0;i<changes.length;i++){var change=changes[i];var from=offsetPos(change.from,oldPrev,newPrev);var to=offsetPos(changeEnd(change),oldPrev,newPrev);oldPrev=change.to;newPrev=to;if(hint=="around"){var range=doc.sel.ranges[i],inv=cmp(range.head,range.anchor)<0;out[i]=new Range(inv?to:from,inv?from:to);}else{out[i]=new Range(from,from);}}
return new Selection(out,doc.sel.primIndex);}
function filterChange(doc,change,update){var obj={canceled:false,from:change.from,to:change.to,text:change.text,origin:change.origin,cancel:function(){this.canceled=true;}};if(update)obj.update=function(from,to,text,origin){if(from)this.from=clipPos(doc,from);if(to)this.to=clipPos(doc,to);if(text)this.text=text;if(origin!==undefined)this.origin=origin;};signal(doc,"beforeChange",doc,obj);if(doc.cm)signal(doc.cm,"beforeChange",doc.cm,obj);if(obj.canceled)return null;return{from:obj.from,to:obj.to,text:obj.text,origin:obj.origin};}
function makeChange(doc,change,ignoreReadOnly){if(doc.cm){if(!doc.cm.curOp)return operation(doc.cm,makeChange)(doc,change,ignoreReadOnly);if(doc.cm.state.suppressEdits)return;}
if(hasHandler(doc,"beforeChange")||doc.cm&&hasHandler(doc.cm,"beforeChange")){change=filterChange(doc,change,true);if(!change)return;}
var split=sawReadOnlySpans&&!ignoreReadOnly&&removeReadOnlyRanges(doc,change.from,change.to);if(split){for(var i=split.length-1;i>=0;--i)
makeChangeInner(doc,{from:split[i].from,to:split[i].to,text:i?[""]:change.text});}else{makeChangeInner(doc,change);}}
function makeChangeInner(doc,change){if(change.text.length==1&&change.text[0]==""&&cmp(change.from,change.to)==0)return;var selAfter=computeSelAfterChange(doc,change);addChangeToHistory(doc,change,selAfter,doc.cm?doc.cm.curOp.id:NaN);makeChangeSingleDoc(doc,change,selAfter,stretchSpansOverChange(doc,change));var rebased=[];linkedDocs(doc,function(doc,sharedHist){if(!sharedHist&&indexOf(rebased,doc.history)==-1){rebaseHist(doc.history,change);rebased.push(doc.history);}
makeChangeSingleDoc(doc,change,null,stretchSpansOverChange(doc,change));});}
function makeChangeFromHistory(doc,type,allowSelectionOnly){if(doc.cm&&doc.cm.state.suppressEdits&&!allowSelectionOnly)return;var hist=doc.history,event,selAfter=doc.sel;var source=type=="undo"?hist.done:hist.undone,dest=type=="undo"?hist.undone:hist.done;for(var i=0;i<source.length;i++){event=source[i];if(allowSelectionOnly?event.ranges&&!event.equals(doc.sel):!event.ranges)
break;}
if(i==source.length)return;hist.lastOrigin=hist.lastSelOrigin=null;for(;;){event=source.pop();if(event.ranges){pushSelectionToHistory(event,dest);if(allowSelectionOnly&&!event.equals(doc.sel)){setSelection(doc,event,{clearRedo:false});return;}
selAfter=event;}
else break;}
var antiChanges=[];pushSelectionToHistory(selAfter,dest);dest.push({changes:antiChanges,generation:hist.generation});hist.generation=event.generation||++hist.maxGeneration;var filter=hasHandler(doc,"beforeChange")||doc.cm&&hasHandler(doc.cm,"beforeChange");for(var i=event.changes.length-1;i>=0;--i){var change=event.changes[i];change.origin=type;if(filter&&!filterChange(doc,change,false)){source.length=0;return;}
antiChanges.push(historyChangeFromChange(doc,change));var after=i?computeSelAfterChange(doc,change):lst(source);makeChangeSingleDoc(doc,change,after,mergeOldSpans(doc,change));if(!i&&doc.cm)doc.cm.scrollIntoView({from:change.from,to:changeEnd(change)});var rebased=[];linkedDocs(doc,function(doc,sharedHist){if(!sharedHist&&indexOf(rebased,doc.history)==-1){rebaseHist(doc.history,change);rebased.push(doc.history);}
makeChangeSingleDoc(doc,change,null,mergeOldSpans(doc,change));});}}
function shiftDoc(doc,distance){if(distance==0)return;doc.first+=distance;doc.sel=new Selection(map(doc.sel.ranges,function(range){return new Range(Pos(range.anchor.line+distance,range.anchor.ch),Pos(range.head.line+distance,range.head.ch));}),doc.sel.primIndex);if(doc.cm){regChange(doc.cm,doc.first,doc.first-distance,distance);for(var d=doc.cm.display,l=d.viewFrom;l<d.viewTo;l++)
regLineChange(doc.cm,l,"gutter");}}
function makeChangeSingleDoc(doc,change,selAfter,spans){if(doc.cm&&!doc.cm.curOp)
return operation(doc.cm,makeChangeSingleDoc)(doc,change,selAfter,spans);if(change.to.line<doc.first){shiftDoc(doc,change.text.length-1-(change.to.line-change.from.line));return;}
if(change.from.line>doc.lastLine())return;if(change.from.line<doc.first){var shift=change.text.length-1-(doc.first-change.from.line);shiftDoc(doc,shift);change={from:Pos(doc.first,0),to:Pos(change.to.line+shift,change.to.ch),text:[lst(change.text)],origin:change.origin};}
var last=doc.lastLine();if(change.to.line>last){change={from:change.from,to:Pos(last,getLine(doc,last).text.length),text:[change.text[0]],origin:change.origin};}
change.removed=getBetween(doc,change.from,change.to);if(!selAfter)selAfter=computeSelAfterChange(doc,change);if(doc.cm)makeChangeSingleDocInEditor(doc.cm,change,spans);else updateDoc(doc,change,spans);setSelectionNoUndo(doc,selAfter,sel_dontScroll);}
function makeChangeSingleDocInEditor(cm,change,spans){var doc=cm.doc,display=cm.display,from=change.from,to=change.to;var recomputeMaxLength=false,checkWidthStart=from.line;if(!cm.options.lineWrapping){checkWidthStart=lineNo(visualLine(getLine(doc,from.line)));doc.iter(checkWidthStart,to.line+1,function(line){if(line==display.maxLine){recomputeMaxLength=true;return true;}});}
if(doc.sel.contains(change.from,change.to)>-1)
signalCursorActivity(cm);updateDoc(doc,change,spans,estimateHeight(cm));if(!cm.options.lineWrapping){doc.iter(checkWidthStart,from.line+change.text.length,function(line){var len=lineLength(line);if(len>display.maxLineLength){display.maxLine=line;display.maxLineLength=len;display.maxLineChanged=true;recomputeMaxLength=false;}});if(recomputeMaxLength)cm.curOp.updateMaxLine=true;}
doc.frontier=Math.min(doc.frontier,from.line);startWorker(cm,400);var lendiff=change.text.length-(to.line-from.line)-1;if(change.full)
regChange(cm);else if(from.line==to.line&&change.text.length==1&&!isWholeLineUpdate(cm.doc,change))
regLineChange(cm,from.line,"text");else
regChange(cm,from.line,to.line+1,lendiff);var changesHandler=hasHandler(cm,"changes"),changeHandler=hasHandler(cm,"change");if(changeHandler||changesHandler){var obj={from:from,to:to,text:change.text,removed:change.removed,origin:change.origin};if(changeHandler)signalLater(cm,"change",cm,obj);if(changesHandler)(cm.curOp.changeObjs||(cm.curOp.changeObjs=[])).push(obj);}
cm.display.selForContextMenu=null;}
function replaceRange(doc,code,from,to,origin){if(!to)to=from;if(cmp(to,from)<0){var tmp=to;to=from;from=tmp;}
if(typeof code=="string")code=doc.splitLines(code);makeChange(doc,{from:from,to:to,text:code,origin:origin});}
function maybeScrollWindow(cm,coords){if(signalDOMEvent(cm,"scrollCursorIntoView"))return;var display=cm.display,box=display.sizer.getBoundingClientRect(),doScroll=null;if(coords.top+box.top<0)doScroll=true;else if(coords.bottom+box.top>(window.innerHeight||document.documentElement.clientHeight))doScroll=false;if(doScroll!=null&&!phantom){var scrollNode=elt("div","\u200b",null,"position: absolute; top: "+
(coords.top-display.viewOffset-paddingTop(cm.display))+"px; height: "+
(coords.bottom-coords.top+scrollGap(cm)+display.barHeight)+"px; left: "+
coords.left+"px; width: 2px;");cm.display.lineSpace.appendChild(scrollNode);scrollNode.scrollIntoView(doScroll);cm.display.lineSpace.removeChild(scrollNode);}}
function scrollPosIntoView(cm,pos,end,margin){if(margin==null)margin=0;for(var limit=0;limit<5;limit++){var changed=false,coords=cursorCoords(cm,pos);var endCoords=!end||end==pos?coords:cursorCoords(cm,end);var scrollPos=calculateScrollPos(cm,Math.min(coords.left,endCoords.left),Math.min(coords.top,endCoords.top)-margin,Math.max(coords.left,endCoords.left),Math.max(coords.bottom,endCoords.bottom)+margin);var startTop=cm.doc.scrollTop,startLeft=cm.doc.scrollLeft;if(scrollPos.scrollTop!=null){setScrollTop(cm,scrollPos.scrollTop);if(Math.abs(cm.doc.scrollTop-startTop)>1)changed=true;}
if(scrollPos.scrollLeft!=null){setScrollLeft(cm,scrollPos.scrollLeft);if(Math.abs(cm.doc.scrollLeft-startLeft)>1)changed=true;}
if(!changed)break;}
return coords;}
function scrollIntoView(cm,x1,y1,x2,y2){var scrollPos=calculateScrollPos(cm,x1,y1,x2,y2);if(scrollPos.scrollTop!=null)setScrollTop(cm,scrollPos.scrollTop);if(scrollPos.scrollLeft!=null)setScrollLeft(cm,scrollPos.scrollLeft);}
function calculateScrollPos(cm,x1,y1,x2,y2){var display=cm.display,snapMargin=textHeight(cm.display);if(y1<0)y1=0;var screentop=cm.curOp&&cm.curOp.scrollTop!=null?cm.curOp.scrollTop:display.scroller.scrollTop;var screen=displayHeight(cm),result={};if(y2-y1>screen)y2=y1+screen;var docBottom=cm.doc.height+paddingVert(display);var atTop=y1<snapMargin,atBottom=y2>docBottom-snapMargin;if(y1<screentop){result.scrollTop=atTop?0:y1;}else if(y2>screentop+screen){var newTop=Math.min(y1,(atBottom?docBottom:y2)-screen);if(newTop!=screentop)result.scrollTop=newTop;}
var screenleft=cm.curOp&&cm.curOp.scrollLeft!=null?cm.curOp.scrollLeft:display.scroller.scrollLeft;var screenw=displayWidth(cm)-(cm.options.fixedGutter?display.gutters.offsetWidth:0);var tooWide=x2-x1>screenw;if(tooWide)x2=x1+screenw;if(x1<10)
result.scrollLeft=0;else if(x1<screenleft)
result.scrollLeft=Math.max(0,x1-(tooWide?0:10));else if(x2>screenw+screenleft-3)
result.scrollLeft=x2+(tooWide?0:10)-screenw;return result;}
function addToScrollPos(cm,left,top){if(left!=null||top!=null)resolveScrollToPos(cm);if(left!=null)
cm.curOp.scrollLeft=(cm.curOp.scrollLeft==null?cm.doc.scrollLeft:cm.curOp.scrollLeft)+left;if(top!=null)
cm.curOp.scrollTop=(cm.curOp.scrollTop==null?cm.doc.scrollTop:cm.curOp.scrollTop)+top;}
function ensureCursorVisible(cm){resolveScrollToPos(cm);var cur=cm.getCursor(),from=cur,to=cur;if(!cm.options.lineWrapping){from=cur.ch?Pos(cur.line,cur.ch-1):cur;to=Pos(cur.line,cur.ch+1);}
cm.curOp.scrollToPos={from:from,to:to,margin:cm.options.cursorScrollMargin,isCursor:true};}
function resolveScrollToPos(cm){var range=cm.curOp.scrollToPos;if(range){cm.curOp.scrollToPos=null;var from=estimateCoords(cm,range.from),to=estimateCoords(cm,range.to);var sPos=calculateScrollPos(cm,Math.min(from.left,to.left),Math.min(from.top,to.top)-range.margin,Math.max(from.right,to.right),Math.max(from.bottom,to.bottom)+range.margin);cm.scrollTo(sPos.scrollLeft,sPos.scrollTop);}}
function indentLine(cm,n,how,aggressive){var doc=cm.doc,state;if(how==null)how="add";if(how=="smart"){if(!doc.mode.indent)how="prev";else state=getStateBefore(cm,n);}
var tabSize=cm.options.tabSize;var line=getLine(doc,n),curSpace=countColumn(line.text,null,tabSize);if(line.stateAfter)line.stateAfter=null;var curSpaceString=line.text.match(/^\s*/)[0],indentation;if(!aggressive&&!/\S/.test(line.text)){indentation=0;how="not";}else if(how=="smart"){indentation=doc.mode.indent(state,line.text.slice(curSpaceString.length),line.text);if(indentation==Pass||indentation>150){if(!aggressive)return;how="prev";}}
if(how=="prev"){if(n>doc.first)indentation=countColumn(getLine(doc,n-1).text,null,tabSize);else indentation=0;}else if(how=="add"){indentation=curSpace+cm.options.indentUnit;}else if(how=="subtract"){indentation=curSpace-cm.options.indentUnit;}else if(typeof how=="number"){indentation=curSpace+how;}
indentation=Math.max(0,indentation);var indentString="",pos=0;if(cm.options.indentWithTabs)
for(var i=Math.floor(indentation/tabSize);i;--i){pos+=tabSize;indentString+="\t";}
if(pos<indentation)indentString+=spaceStr(indentation-pos);if(indentString!=curSpaceString){replaceRange(doc,indentString,Pos(n,0),Pos(n,curSpaceString.length),"+input");line.stateAfter=null;return true;}else{for(var i=0;i<doc.sel.ranges.length;i++){var range=doc.sel.ranges[i];if(range.head.line==n&&range.head.ch<curSpaceString.length){var pos=Pos(n,curSpaceString.length);replaceOneSelection(doc,i,new Range(pos,pos));break;}}}}
function changeLine(doc,handle,changeType,op){var no=handle,line=handle;if(typeof handle=="number")line=getLine(doc,clipLine(doc,handle));else no=lineNo(handle);if(no==null)return null;if(op(line,no)&&doc.cm)regLineChange(doc.cm,no,changeType);return line;}
function deleteNearSelection(cm,compute){var ranges=cm.doc.sel.ranges,kill=[];for(var i=0;i<ranges.length;i++){var toKill=compute(ranges[i]);while(kill.length&&cmp(toKill.from,lst(kill).to)<=0){var replaced=kill.pop();if(cmp(replaced.from,toKill.from)<0){toKill.from=replaced.from;break;}}
kill.push(toKill);}
runInOp(cm,function(){for(var i=kill.length-1;i>=0;i--)
replaceRange(cm.doc,"",kill[i].from,kill[i].to,"+delete");ensureCursorVisible(cm);});}
function findPosH(doc,pos,dir,unit,visually){var line=pos.line,ch=pos.ch,origDir=dir;var lineObj=getLine(doc,line);function findNextLine(){var l=line+dir;if(l<doc.first||l>=doc.first+doc.size)return false
line=l;return lineObj=getLine(doc,l);}
function moveOnce(boundToLine){var next=(visually?moveVisually:moveLogically)(lineObj,ch,dir,true);if(next==null){if(!boundToLine&&findNextLine()){if(visually)ch=(dir<0?lineRight:lineLeft)(lineObj);else ch=dir<0?lineObj.text.length:0;}else return false}else ch=next;return true;}
if(unit=="char"){moveOnce()}else if(unit=="column"){moveOnce(true)}else if(unit=="word"||unit=="group"){var sawType=null,group=unit=="group";var helper=doc.cm&&doc.cm.getHelper(pos,"wordChars");for(var first=true;;first=false){if(dir<0&&!moveOnce(!first))break;var cur=lineObj.text.charAt(ch)||"\n";var type=isWordChar(cur,helper)?"w":group&&cur=="\n"?"n":!group||/\s/.test(cur)?null:"p";if(group&&!first&&!type)type="s";if(sawType&&sawType!=type){if(dir<0){dir=1;moveOnce();}
break;}
if(type)sawType=type;if(dir>0&&!moveOnce(!first))break;}}
var result=skipAtomic(doc,Pos(line,ch),pos,origDir,true);if(!cmp(pos,result))result.hitSide=true;return result;}
function findPosV(cm,pos,dir,unit){var doc=cm.doc,x=pos.left,y;if(unit=="page"){var pageSize=Math.min(cm.display.wrapper.clientHeight,window.innerHeight||document.documentElement.clientHeight);y=pos.top+dir*(pageSize-(dir<0?1.5:.5)*textHeight(cm.display));}else if(unit=="line"){y=dir>0?pos.bottom+3:pos.top-3;}
for(;;){var target=coordsChar(cm,x,y);if(!target.outside)break;if(dir<0?y<=0:y>=doc.height){target.hitSide=true;break;}
y+=dir*5;}
return target;}
CodeMirror.prototype={constructor:CodeMirror,focus:function(){window.focus();this.display.input.focus();},setOption:function(option,value){var options=this.options,old=options[option];if(options[option]==value&&option!="mode")return;options[option]=value;if(optionHandlers.hasOwnProperty(option))
operation(this,optionHandlers[option])(this,value,old);},getOption:function(option){return this.options[option];},getDoc:function(){return this.doc;},addKeyMap:function(map,bottom){this.state.keyMaps[bottom?"push":"unshift"](getKeyMap(map));},removeKeyMap:function(map){var maps=this.state.keyMaps;for(var i=0;i<maps.length;++i)
if(maps[i]==map||maps[i].name==map){maps.splice(i,1);return true;}},addOverlay:methodOp(function(spec,options){var mode=spec.token?spec:CodeMirror.getMode(this.options,spec);if(mode.startState)throw new Error("Overlays may not be stateful.");this.state.overlays.push({mode:mode,modeSpec:spec,opaque:options&&options.opaque});this.state.modeGen++;regChange(this);}),removeOverlay:methodOp(function(spec){var overlays=this.state.overlays;for(var i=0;i<overlays.length;++i){var cur=overlays[i].modeSpec;if(cur==spec||typeof spec=="string"&&cur.name==spec){overlays.splice(i,1);this.state.modeGen++;regChange(this);return;}}}),indentLine:methodOp(function(n,dir,aggressive){if(typeof dir!="string"&&typeof dir!="number"){if(dir==null)dir=this.options.smartIndent?"smart":"prev";else dir=dir?"add":"subtract";}
if(isLine(this.doc,n))indentLine(this,n,dir,aggressive);}),indentSelection:methodOp(function(how){var ranges=this.doc.sel.ranges,end=-1;for(var i=0;i<ranges.length;i++){var range=ranges[i];if(!range.empty()){var from=range.from(),to=range.to();var start=Math.max(end,from.line);end=Math.min(this.lastLine(),to.line-(to.ch?0:1))+1;for(var j=start;j<end;++j)
indentLine(this,j,how);var newRanges=this.doc.sel.ranges;if(from.ch==0&&ranges.length==newRanges.length&&newRanges[i].from().ch>0)
replaceOneSelection(this.doc,i,new Range(from,newRanges[i].to()),sel_dontScroll);}else if(range.head.line>end){indentLine(this,range.head.line,how,true);end=range.head.line;if(i==this.doc.sel.primIndex)ensureCursorVisible(this);}}}),getTokenAt:function(pos,precise){return takeToken(this,pos,precise);},getLineTokens:function(line,precise){return takeToken(this,Pos(line),precise,true);},getTokenTypeAt:function(pos){pos=clipPos(this.doc,pos);var styles=getLineStyles(this,getLine(this.doc,pos.line));var before=0,after=(styles.length-1)/2,ch=pos.ch;var type;if(ch==0)type=styles[2];else for(;;){var mid=(before+after)>>1;if((mid?styles[mid*2-1]:0)>=ch)after=mid;else if(styles[mid*2+1]<ch)before=mid+1;else{type=styles[mid*2+2];break;}}
var cut=type?type.indexOf("cm-overlay "):-1;return cut<0?type:cut==0?null:type.slice(0,cut-1);},getModeAt:function(pos){var mode=this.doc.mode;if(!mode.innerMode)return mode;return CodeMirror.innerMode(mode,this.getTokenAt(pos).state).mode;},getHelper:function(pos,type){return this.getHelpers(pos,type)[0];},getHelpers:function(pos,type){var found=[];if(!helpers.hasOwnProperty(type))return found;var help=helpers[type],mode=this.getModeAt(pos);if(typeof mode[type]=="string"){if(help[mode[type]])found.push(help[mode[type]]);}else if(mode[type]){for(var i=0;i<mode[type].length;i++){var val=help[mode[type][i]];if(val)found.push(val);}}else if(mode.helperType&&help[mode.helperType]){found.push(help[mode.helperType]);}else if(help[mode.name]){found.push(help[mode.name]);}
for(var i=0;i<help._global.length;i++){var cur=help._global[i];if(cur.pred(mode,this)&&indexOf(found,cur.val)==-1)
found.push(cur.val);}
return found;},getStateAfter:function(line,precise){var doc=this.doc;line=clipLine(doc,line==null?doc.first+doc.size-1:line);return getStateBefore(this,line+1,precise);},cursorCoords:function(start,mode){var pos,range=this.doc.sel.primary();if(start==null)pos=range.head;else if(typeof start=="object")pos=clipPos(this.doc,start);else pos=start?range.from():range.to();return cursorCoords(this,pos,mode||"page");},charCoords:function(pos,mode){return charCoords(this,clipPos(this.doc,pos),mode||"page");},coordsChar:function(coords,mode){coords=fromCoordSystem(this,coords,mode||"page");return coordsChar(this,coords.left,coords.top);},lineAtHeight:function(height,mode){height=fromCoordSystem(this,{top:height,left:0},mode||"page").top;return lineAtHeight(this.doc,height+this.display.viewOffset);},heightAtLine:function(line,mode){var end=false,lineObj;if(typeof line=="number"){var last=this.doc.first+this.doc.size-1;if(line<this.doc.first)line=this.doc.first;else if(line>last){line=last;end=true;}
lineObj=getLine(this.doc,line);}else{lineObj=line;}
return intoCoordSystem(this,lineObj,{top:0,left:0},mode||"page").top+
(end?this.doc.height-heightAtLine(lineObj):0);},defaultTextHeight:function(){return textHeight(this.display);},defaultCharWidth:function(){return charWidth(this.display);},setGutterMarker:methodOp(function(line,gutterID,value){return changeLine(this.doc,line,"gutter",function(line){var markers=line.gutterMarkers||(line.gutterMarkers={});markers[gutterID]=value;if(!value&&isEmpty(markers))line.gutterMarkers=null;return true;});}),clearGutter:methodOp(function(gutterID){var cm=this,doc=cm.doc,i=doc.first;doc.iter(function(line){if(line.gutterMarkers&&line.gutterMarkers[gutterID]){line.gutterMarkers[gutterID]=null;regLineChange(cm,i,"gutter");if(isEmpty(line.gutterMarkers))line.gutterMarkers=null;}
++i;});}),lineInfo:function(line){if(typeof line=="number"){if(!isLine(this.doc,line))return null;var n=line;line=getLine(this.doc,line);if(!line)return null;}else{var n=lineNo(line);if(n==null)return null;}
return{line:n,handle:line,text:line.text,gutterMarkers:line.gutterMarkers,textClass:line.textClass,bgClass:line.bgClass,wrapClass:line.wrapClass,widgets:line.widgets};},getViewport:function(){return{from:this.display.viewFrom,to:this.display.viewTo};},addWidget:function(pos,node,scroll,vert,horiz){var display=this.display;pos=cursorCoords(this,clipPos(this.doc,pos));var top=pos.bottom,left=pos.left;node.style.position="absolute";node.setAttribute("cm-ignore-events","true");this.display.input.setUneditable(node);display.sizer.appendChild(node);if(vert=="over"){top=pos.top;}else if(vert=="above"||vert=="near"){var vspace=Math.max(display.wrapper.clientHeight,this.doc.height),hspace=Math.max(display.sizer.clientWidth,display.lineSpace.clientWidth);if((vert=='above'||pos.bottom+node.offsetHeight>vspace)&&pos.top>node.offsetHeight)
top=pos.top-node.offsetHeight;else if(pos.bottom+node.offsetHeight<=vspace)
top=pos.bottom;if(left+node.offsetWidth>hspace)
left=hspace-node.offsetWidth;}
node.style.top=top+"px";node.style.left=node.style.right="";if(horiz=="right"){left=display.sizer.clientWidth-node.offsetWidth;node.style.right="0px";}else{if(horiz=="left")left=0;else if(horiz=="middle")left=(display.sizer.clientWidth-node.offsetWidth)/2;node.style.left=left+"px";}
if(scroll)
scrollIntoView(this,left,top,left+node.offsetWidth,top+node.offsetHeight);},triggerOnKeyDown:methodOp(onKeyDown),triggerOnKeyPress:methodOp(onKeyPress),triggerOnKeyUp:onKeyUp,execCommand:function(cmd){if(commands.hasOwnProperty(cmd))
return commands[cmd].call(null,this);},triggerElectric:methodOp(function(text){triggerElectric(this,text);}),findPosH:function(from,amount,unit,visually){var dir=1;if(amount<0){dir=-1;amount=-amount;}
for(var i=0,cur=clipPos(this.doc,from);i<amount;++i){cur=findPosH(this.doc,cur,dir,unit,visually);if(cur.hitSide)break;}
return cur;},moveH:methodOp(function(dir,unit){var cm=this;cm.extendSelectionsBy(function(range){if(cm.display.shift||cm.doc.extend||range.empty())
return findPosH(cm.doc,range.head,dir,unit,cm.options.rtlMoveVisually);else
return dir<0?range.from():range.to();},sel_move);}),deleteH:methodOp(function(dir,unit){var sel=this.doc.sel,doc=this.doc;if(sel.somethingSelected())
doc.replaceSelection("",null,"+delete");else
deleteNearSelection(this,function(range){var other=findPosH(doc,range.head,dir,unit,false);return dir<0?{from:other,to:range.head}:{from:range.head,to:other};});}),findPosV:function(from,amount,unit,goalColumn){var dir=1,x=goalColumn;if(amount<0){dir=-1;amount=-amount;}
for(var i=0,cur=clipPos(this.doc,from);i<amount;++i){var coords=cursorCoords(this,cur,"div");if(x==null)x=coords.left;else coords.left=x;cur=findPosV(this,coords,dir,unit);if(cur.hitSide)break;}
return cur;},moveV:methodOp(function(dir,unit){var cm=this,doc=this.doc,goals=[];var collapse=!cm.display.shift&&!doc.extend&&doc.sel.somethingSelected();doc.extendSelectionsBy(function(range){if(collapse)
return dir<0?range.from():range.to();var headPos=cursorCoords(cm,range.head,"div");if(range.goalColumn!=null)headPos.left=range.goalColumn;goals.push(headPos.left);var pos=findPosV(cm,headPos,dir,unit);if(unit=="page"&&range==doc.sel.primary())
addToScrollPos(cm,null,charCoords(cm,pos,"div").top-headPos.top);return pos;},sel_move);if(goals.length)for(var i=0;i<doc.sel.ranges.length;i++)
doc.sel.ranges[i].goalColumn=goals[i];}),findWordAt:function(pos){var doc=this.doc,line=getLine(doc,pos.line).text;var start=pos.ch,end=pos.ch;if(line){var helper=this.getHelper(pos,"wordChars");if((pos.xRel<0||end==line.length)&&start)--start;else++end;var startChar=line.charAt(start);var check=isWordChar(startChar,helper)?function(ch){return isWordChar(ch,helper);}:/\s/.test(startChar)?function(ch){return/\s/.test(ch);}:function(ch){return!/\s/.test(ch)&&!isWordChar(ch);};while(start>0&&check(line.charAt(start-1)))--start;while(end<line.length&&check(line.charAt(end)))++end;}
return new Range(Pos(pos.line,start),Pos(pos.line,end));},toggleOverwrite:function(value){if(value!=null&&value==this.state.overwrite)return;if(this.state.overwrite=!this.state.overwrite)
addClass(this.display.cursorDiv,"CodeMirror-overwrite");else
rmClass(this.display.cursorDiv,"CodeMirror-overwrite");signal(this,"overwriteToggle",this,this.state.overwrite);},hasFocus:function(){return this.display.input.getField()==activeElt();},isReadOnly:function(){return!!(this.options.readOnly||this.doc.cantEdit);},scrollTo:methodOp(function(x,y){if(x!=null||y!=null)resolveScrollToPos(this);if(x!=null)this.curOp.scrollLeft=x;if(y!=null)this.curOp.scrollTop=y;}),getScrollInfo:function(){var scroller=this.display.scroller;return{left:scroller.scrollLeft,top:scroller.scrollTop,height:scroller.scrollHeight-scrollGap(this)-this.display.barHeight,width:scroller.scrollWidth-scrollGap(this)-this.display.barWidth,clientHeight:displayHeight(this),clientWidth:displayWidth(this)};},scrollIntoView:methodOp(function(range,margin){if(range==null){range={from:this.doc.sel.primary().head,to:null};if(margin==null)margin=this.options.cursorScrollMargin;}else if(typeof range=="number"){range={from:Pos(range,0),to:null};}else if(range.from==null){range={from:range,to:null};}
if(!range.to)range.to=range.from;range.margin=margin||0;if(range.from.line!=null){resolveScrollToPos(this);this.curOp.scrollToPos=range;}else{var sPos=calculateScrollPos(this,Math.min(range.from.left,range.to.left),Math.min(range.from.top,range.to.top)-range.margin,Math.max(range.from.right,range.to.right),Math.max(range.from.bottom,range.to.bottom)+range.margin);this.scrollTo(sPos.scrollLeft,sPos.scrollTop);}}),setSize:methodOp(function(width,height){var cm=this;function interpret(val){return typeof val=="number"||/^\d+$/.test(String(val))?val+"px":val;}
if(width!=null)cm.display.wrapper.style.width=interpret(width);if(height!=null)cm.display.wrapper.style.height=interpret(height);if(cm.options.lineWrapping)clearLineMeasurementCache(this);var lineNo=cm.display.viewFrom;cm.doc.iter(lineNo,cm.display.viewTo,function(line){if(line.widgets)for(var i=0;i<line.widgets.length;i++)
if(line.widgets[i].noHScroll){regLineChange(cm,lineNo,"widget");break;}
++lineNo;});cm.curOp.forceUpdate=true;signal(cm,"refresh",this);}),operation:function(f){return runInOp(this,f);},refresh:methodOp(function(){var oldHeight=this.display.cachedTextHeight;regChange(this);this.curOp.forceUpdate=true;clearCaches(this);this.scrollTo(this.doc.scrollLeft,this.doc.scrollTop);updateGutterSpace(this);if(oldHeight==null||Math.abs(oldHeight-textHeight(this.display))>.5)
estimateLineHeights(this);signal(this,"refresh",this);}),swapDoc:methodOp(function(doc){var old=this.doc;old.cm=null;attachDoc(this,doc);clearCaches(this);this.display.input.reset();this.scrollTo(doc.scrollLeft,doc.scrollTop);this.curOp.forceScroll=true;signalLater(this,"swapDoc",this,old);return old;}),getInputField:function(){return this.display.input.getField();},getWrapperElement:function(){return this.display.wrapper;},getScrollerElement:function(){return this.display.scroller;},getGutterElement:function(){return this.display.gutters;}};eventMixin(CodeMirror);var defaults=CodeMirror.defaults={};var optionHandlers=CodeMirror.optionHandlers={};function option(name,deflt,handle,notOnInit){CodeMirror.defaults[name]=deflt;if(handle)optionHandlers[name]=notOnInit?function(cm,val,old){if(old!=Init)handle(cm,val,old);}:handle;}
var Init=CodeMirror.Init={toString:function(){return"CodeMirror.Init";}};option("value","",function(cm,val){cm.setValue(val);},true);option("mode",null,function(cm,val){cm.doc.modeOption=val;loadMode(cm);},true);option("indentUnit",2,loadMode,true);option("indentWithTabs",false);option("smartIndent",true);option("tabSize",4,function(cm){resetModeState(cm);clearCaches(cm);regChange(cm);},true);option("lineSeparator",null,function(cm,val){cm.doc.lineSep=val;if(!val)return;var newBreaks=[],lineNo=cm.doc.first;cm.doc.iter(function(line){for(var pos=0;;){var found=line.text.indexOf(val,pos);if(found==-1)break;pos=found+val.length;newBreaks.push(Pos(lineNo,found));}
lineNo++;});for(var i=newBreaks.length-1;i>=0;i--)
replaceRange(cm.doc,val,newBreaks[i],Pos(newBreaks[i].line,newBreaks[i].ch+val.length))});option("specialChars",/[\u0000-\u001f\u007f\u00ad\u200b-\u200f\u2028\u2029\ufeff]/g,function(cm,val,old){cm.state.specialChars=new RegExp(val.source+(val.test("\t")?"":"|\t"),"g");if(old!=CodeMirror.Init)cm.refresh();});option("specialCharPlaceholder",defaultSpecialCharPlaceholder,function(cm){cm.refresh();},true);option("electricChars",true);option("inputStyle",mobile?"contenteditable":"textarea",function(){throw new Error("inputStyle can not (yet) be changed in a running editor");},true);option("rtlMoveVisually",!windows);option("wholeLineUpdateBefore",true);option("theme","default",function(cm){themeChanged(cm);guttersChanged(cm);},true);option("keyMap","default",function(cm,val,old){var next=getKeyMap(val);var prev=old!=CodeMirror.Init&&getKeyMap(old);if(prev&&prev.detach)prev.detach(cm,next);if(next.attach)next.attach(cm,prev||null);});option("extraKeys",null);option("lineWrapping",false,wrappingChanged,true);option("gutters",[],function(cm){setGuttersForLineNumbers(cm.options);guttersChanged(cm);},true);option("fixedGutter",true,function(cm,val){cm.display.gutters.style.left=val?compensateForHScroll(cm.display)+"px":"0";cm.refresh();},true);option("coverGutterNextToScrollbar",false,function(cm){updateScrollbars(cm);},true);option("scrollbarStyle","native",function(cm){initScrollbars(cm);updateScrollbars(cm);cm.display.scrollbars.setScrollTop(cm.doc.scrollTop);cm.display.scrollbars.setScrollLeft(cm.doc.scrollLeft);},true);option("lineNumbers",false,function(cm){setGuttersForLineNumbers(cm.options);guttersChanged(cm);},true);option("firstLineNumber",1,guttersChanged,true);option("lineNumberFormatter",function(integer){return integer;},guttersChanged,true);option("showCursorWhenSelecting",false,updateSelection,true);option("resetSelectionOnContextMenu",true);option("lineWiseCopyCut",true);option("readOnly",false,function(cm,val){if(val=="nocursor"){onBlur(cm);cm.display.input.blur();cm.display.disabled=true;}else{cm.display.disabled=false;}
cm.display.input.readOnlyChanged(val)});option("disableInput",false,function(cm,val){if(!val)cm.display.input.reset();},true);option("dragDrop",true,dragDropChanged);option("allowDropFileTypes",null);option("cursorBlinkRate",530);option("cursorScrollMargin",0);option("cursorHeight",1,updateSelection,true);option("singleCursorHeightPerLine",true,updateSelection,true);option("workTime",100);option("workDelay",100);option("flattenSpans",true,resetModeState,true);option("addModeClass",false,resetModeState,true);option("pollInterval",100);option("undoDepth",200,function(cm,val){cm.doc.history.undoDepth=val;});option("historyEventDelay",1250);option("viewportMargin",10,function(cm){cm.refresh();},true);option("maxHighlightLength",10000,resetModeState,true);option("moveInputWithCursor",true,function(cm,val){if(!val)cm.display.input.resetPosition();});option("tabindex",null,function(cm,val){cm.display.input.getField().tabIndex=val||"";});option("autofocus",null);var modes=CodeMirror.modes={},mimeModes=CodeMirror.mimeModes={};CodeMirror.defineMode=function(name,mode){if(!CodeMirror.defaults.mode&&name!="null")CodeMirror.defaults.mode=name;if(arguments.length>2)
mode.dependencies=Array.prototype.slice.call(arguments,2);modes[name]=mode;};CodeMirror.defineMIME=function(mime,spec){mimeModes[mime]=spec;};CodeMirror.resolveMode=function(spec){if(typeof spec=="string"&&mimeModes.hasOwnProperty(spec)){spec=mimeModes[spec];}else if(spec&&typeof spec.name=="string"&&mimeModes.hasOwnProperty(spec.name)){var found=mimeModes[spec.name];if(typeof found=="string")found={name:found};spec=createObj(found,spec);spec.name=found.name;}else if(typeof spec=="string"&&/^[\w\-]+\/[\w\-]+\+xml$/.test(spec)){return CodeMirror.resolveMode("application/xml");}
if(typeof spec=="string")return{name:spec};else return spec||{name:"null"};};CodeMirror.getMode=function(options,spec){var spec=CodeMirror.resolveMode(spec);var mfactory=modes[spec.name];if(!mfactory)return CodeMirror.getMode(options,"text/plain");var modeObj=mfactory(options,spec);if(modeExtensions.hasOwnProperty(spec.name)){var exts=modeExtensions[spec.name];for(var prop in exts){if(!exts.hasOwnProperty(prop))continue;if(modeObj.hasOwnProperty(prop))modeObj["_"+prop]=modeObj[prop];modeObj[prop]=exts[prop];}}
modeObj.name=spec.name;if(spec.helperType)modeObj.helperType=spec.helperType;if(spec.modeProps)for(var prop in spec.modeProps)
modeObj[prop]=spec.modeProps[prop];return modeObj;};CodeMirror.defineMode("null",function(){return{token:function(stream){stream.skipToEnd();}};});CodeMirror.defineMIME("text/plain","null");var modeExtensions=CodeMirror.modeExtensions={};CodeMirror.extendMode=function(mode,properties){var exts=modeExtensions.hasOwnProperty(mode)?modeExtensions[mode]:(modeExtensions[mode]={});copyObj(properties,exts);};CodeMirror.defineExtension=function(name,func){CodeMirror.prototype[name]=func;};CodeMirror.defineDocExtension=function(name,func){Doc.prototype[name]=func;};CodeMirror.defineOption=option;var initHooks=[];CodeMirror.defineInitHook=function(f){initHooks.push(f);};var helpers=CodeMirror.helpers={};CodeMirror.registerHelper=function(type,name,value){if(!helpers.hasOwnProperty(type))helpers[type]=CodeMirror[type]={_global:[]};helpers[type][name]=value;};CodeMirror.registerGlobalHelper=function(type,name,predicate,value){CodeMirror.registerHelper(type,name,value);helpers[type]._global.push({pred:predicate,val:value});};var copyState=CodeMirror.copyState=function(mode,state){if(state===true)return state;if(mode.copyState)return mode.copyState(state);var nstate={};for(var n in state){var val=state[n];if(val instanceof Array)val=val.concat([]);nstate[n]=val;}
return nstate;};var startState=CodeMirror.startState=function(mode,a1,a2){return mode.startState?mode.startState(a1,a2):true;};CodeMirror.innerMode=function(mode,state){while(mode.innerMode){var info=mode.innerMode(state);if(!info||info.mode==mode)break;state=info.state;mode=info.mode;}
return info||{mode:mode,state:state};};var commands=CodeMirror.commands={selectAll:function(cm){cm.setSelection(Pos(cm.firstLine(),0),Pos(cm.lastLine()),sel_dontScroll);},singleSelection:function(cm){cm.setSelection(cm.getCursor("anchor"),cm.getCursor("head"),sel_dontScroll);},killLine:function(cm){deleteNearSelection(cm,function(range){if(range.empty()){var len=getLine(cm.doc,range.head.line).text.length;if(range.head.ch==len&&range.head.line<cm.lastLine())
return{from:range.head,to:Pos(range.head.line+1,0)};else
return{from:range.head,to:Pos(range.head.line,len)};}else{return{from:range.from(),to:range.to()};}});},deleteLine:function(cm){deleteNearSelection(cm,function(range){return{from:Pos(range.from().line,0),to:clipPos(cm.doc,Pos(range.to().line+1,0))};});},delLineLeft:function(cm){deleteNearSelection(cm,function(range){return{from:Pos(range.from().line,0),to:range.from()};});},delWrappedLineLeft:function(cm){deleteNearSelection(cm,function(range){var top=cm.charCoords(range.head,"div").top+5;var leftPos=cm.coordsChar({left:0,top:top},"div");return{from:leftPos,to:range.from()};});},delWrappedLineRight:function(cm){deleteNearSelection(cm,function(range){var top=cm.charCoords(range.head,"div").top+5;var rightPos=cm.coordsChar({left:cm.display.lineDiv.offsetWidth+100,top:top},"div");return{from:range.from(),to:rightPos};});},undo:function(cm){cm.undo();},redo:function(cm){cm.redo();},undoSelection:function(cm){cm.undoSelection();},redoSelection:function(cm){cm.redoSelection();},goDocStart:function(cm){cm.extendSelection(Pos(cm.firstLine(),0));},goDocEnd:function(cm){cm.extendSelection(Pos(cm.lastLine()));},goLineStart:function(cm){cm.extendSelectionsBy(function(range){return lineStart(cm,range.head.line);},{origin:"+move",bias:1});},goLineStartSmart:function(cm){cm.extendSelectionsBy(function(range){return lineStartSmart(cm,range.head);},{origin:"+move",bias:1});},goLineEnd:function(cm){cm.extendSelectionsBy(function(range){return lineEnd(cm,range.head.line);},{origin:"+move",bias:-1});},goLineRight:function(cm){cm.extendSelectionsBy(function(range){var top=cm.charCoords(range.head,"div").top+5;return cm.coordsChar({left:cm.display.lineDiv.offsetWidth+100,top:top},"div");},sel_move);},goLineLeft:function(cm){cm.extendSelectionsBy(function(range){var top=cm.charCoords(range.head,"div").top+5;return cm.coordsChar({left:0,top:top},"div");},sel_move);},goLineLeftSmart:function(cm){cm.extendSelectionsBy(function(range){var top=cm.charCoords(range.head,"div").top+5;var pos=cm.coordsChar({left:0,top:top},"div");if(pos.ch<cm.getLine(pos.line).search(/\S/))return lineStartSmart(cm,range.head);return pos;},sel_move);},goLineUp:function(cm){cm.moveV(-1,"line");},goLineDown:function(cm){cm.moveV(1,"line");},goPageUp:function(cm){cm.moveV(-1,"page");},goPageDown:function(cm){cm.moveV(1,"page");},goCharLeft:function(cm){cm.moveH(-1,"char");},goCharRight:function(cm){cm.moveH(1,"char");},goColumnLeft:function(cm){cm.moveH(-1,"column");},goColumnRight:function(cm){cm.moveH(1,"column");},goWordLeft:function(cm){cm.moveH(-1,"word");},goGroupRight:function(cm){cm.moveH(1,"group");},goGroupLeft:function(cm){cm.moveH(-1,"group");},goWordRight:function(cm){cm.moveH(1,"word");},delCharBefore:function(cm){cm.deleteH(-1,"char");},delCharAfter:function(cm){cm.deleteH(1,"char");},delWordBefore:function(cm){cm.deleteH(-1,"word");},delWordAfter:function(cm){cm.deleteH(1,"word");},delGroupBefore:function(cm){cm.deleteH(-1,"group");},delGroupAfter:function(cm){cm.deleteH(1,"group");},indentAuto:function(cm){cm.indentSelection("smart");},indentMore:function(cm){cm.indentSelection("add");},indentLess:function(cm){cm.indentSelection("subtract");},insertTab:function(cm){cm.replaceSelection("\t");},insertSoftTab:function(cm){var spaces=[],ranges=cm.listSelections(),tabSize=cm.options.tabSize;for(var i=0;i<ranges.length;i++){var pos=ranges[i].from();var col=countColumn(cm.getLine(pos.line),pos.ch,tabSize);spaces.push(spaceStr(tabSize-col%tabSize));}
cm.replaceSelections(spaces);},defaultTab:function(cm){if(cm.somethingSelected())cm.indentSelection("add");else cm.execCommand("insertTab");},transposeChars:function(cm){runInOp(cm,function(){var ranges=cm.listSelections(),newSel=[];for(var i=0;i<ranges.length;i++){var cur=ranges[i].head,line=getLine(cm.doc,cur.line).text;if(line){if(cur.ch==line.length)cur=new Pos(cur.line,cur.ch-1);if(cur.ch>0){cur=new Pos(cur.line,cur.ch+1);cm.replaceRange(line.charAt(cur.ch-1)+line.charAt(cur.ch-2),Pos(cur.line,cur.ch-2),cur,"+transpose");}else if(cur.line>cm.doc.first){var prev=getLine(cm.doc,cur.line-1).text;if(prev)
cm.replaceRange(line.charAt(0)+cm.doc.lineSeparator()+
prev.charAt(prev.length-1),Pos(cur.line-1,prev.length-1),Pos(cur.line,1),"+transpose");}}
newSel.push(new Range(cur,cur));}
cm.setSelections(newSel);});},newlineAndIndent:function(cm){runInOp(cm,function(){var len=cm.listSelections().length;for(var i=0;i<len;i++){var range=cm.listSelections()[i];cm.replaceRange(cm.doc.lineSeparator(),range.anchor,range.head,"+input");cm.indentLine(range.from().line+1,null,true);}
ensureCursorVisible(cm);});},openLine:function(cm){cm.replaceSelection("\n","start")},toggleOverwrite:function(cm){cm.toggleOverwrite();}};var keyMap=CodeMirror.keyMap={};keyMap.basic={"Left":"goCharLeft","Right":"goCharRight","Up":"goLineUp","Down":"goLineDown","End":"goLineEnd","Home":"goLineStartSmart","PageUp":"goPageUp","PageDown":"goPageDown","Delete":"delCharAfter","Backspace":"delCharBefore","Shift-Backspace":"delCharBefore","Tab":"defaultTab","Shift-Tab":"indentAuto","Enter":"newlineAndIndent","Insert":"toggleOverwrite","Esc":"singleSelection"};keyMap.pcDefault={"Ctrl-A":"selectAll","Ctrl-D":"deleteLine","Ctrl-Z":"undo","Shift-Ctrl-Z":"redo","Ctrl-Y":"redo","Ctrl-Home":"goDocStart","Ctrl-End":"goDocEnd","Ctrl-Up":"goLineUp","Ctrl-Down":"goLineDown","Ctrl-Left":"goGroupLeft","Ctrl-Right":"goGroupRight","Alt-Left":"goLineStart","Alt-Right":"goLineEnd","Ctrl-Backspace":"delGroupBefore","Ctrl-Delete":"delGroupAfter","Ctrl-S":"save","Ctrl-F":"find","Ctrl-G":"findNext","Shift-Ctrl-G":"findPrev","Shift-Ctrl-F":"replace","Shift-Ctrl-R":"replaceAll","Ctrl-[":"indentLess","Ctrl-]":"indentMore","Ctrl-U":"undoSelection","Shift-Ctrl-U":"redoSelection","Alt-U":"redoSelection",fallthrough:"basic"};keyMap.emacsy={"Ctrl-F":"goCharRight","Ctrl-B":"goCharLeft","Ctrl-P":"goLineUp","Ctrl-N":"goLineDown","Alt-F":"goWordRight","Alt-B":"goWordLeft","Ctrl-A":"goLineStart","Ctrl-E":"goLineEnd","Ctrl-V":"goPageDown","Shift-Ctrl-V":"goPageUp","Ctrl-D":"delCharAfter","Ctrl-H":"delCharBefore","Alt-D":"delWordAfter","Alt-Backspace":"delWordBefore","Ctrl-K":"killLine","Ctrl-T":"transposeChars","Ctrl-O":"openLine"};keyMap.macDefault={"Cmd-A":"selectAll","Cmd-D":"deleteLine","Cmd-Z":"undo","Shift-Cmd-Z":"redo","Cmd-Y":"redo","Cmd-Home":"goDocStart","Cmd-Up":"goDocStart","Cmd-End":"goDocEnd","Cmd-Down":"goDocEnd","Alt-Left":"goGroupLeft","Alt-Right":"goGroupRight","Cmd-Left":"goLineLeft","Cmd-Right":"goLineRight","Alt-Backspace":"delGroupBefore","Ctrl-Alt-Backspace":"delGroupAfter","Alt-Delete":"delGroupAfter","Cmd-S":"save","Cmd-F":"find","Cmd-G":"findNext","Shift-Cmd-G":"findPrev","Cmd-Alt-F":"replace","Shift-Cmd-Alt-F":"replaceAll","Cmd-[":"indentLess","Cmd-]":"indentMore","Cmd-Backspace":"delWrappedLineLeft","Cmd-Delete":"delWrappedLineRight","Cmd-U":"undoSelection","Shift-Cmd-U":"redoSelection","Ctrl-Up":"goDocStart","Ctrl-Down":"goDocEnd",fallthrough:["basic","emacsy"]};keyMap["default"]=mac?keyMap.macDefault:keyMap.pcDefault;function normalizeKeyName(name){var parts=name.split(/-(?!$)/),name=parts[parts.length-1];var alt,ctrl,shift,cmd;for(var i=0;i<parts.length-1;i++){var mod=parts[i];if(/^(cmd|meta|m)$/i.test(mod))cmd=true;else if(/^a(lt)?$/i.test(mod))alt=true;else if(/^(c|ctrl|control)$/i.test(mod))ctrl=true;else if(/^s(hift)$/i.test(mod))shift=true;else throw new Error("Unrecognized modifier name: "+mod);}
if(alt)name="Alt-"+name;if(ctrl)name="Ctrl-"+name;if(cmd)name="Cmd-"+name;if(shift)name="Shift-"+name;return name;}
CodeMirror.normalizeKeyMap=function(keymap){var copy={};for(var keyname in keymap)if(keymap.hasOwnProperty(keyname)){var value=keymap[keyname];if(/^(name|fallthrough|(de|at)tach)$/.test(keyname))continue;if(value=="..."){delete keymap[keyname];continue;}
var keys=map(keyname.split(" "),normalizeKeyName);for(var i=0;i<keys.length;i++){var val,name;if(i==keys.length-1){name=keys.join(" ");val=value;}else{name=keys.slice(0,i+1).join(" ");val="...";}
var prev=copy[name];if(!prev)copy[name]=val;else if(prev!=val)throw new Error("Inconsistent bindings for "+name);}
delete keymap[keyname];}
for(var prop in copy)keymap[prop]=copy[prop];return keymap;};var lookupKey=CodeMirror.lookupKey=function(key,map,handle,context){map=getKeyMap(map);var found=map.call?map.call(key,context):map[key];if(found===false)return"nothing";if(found==="...")return"multi";if(found!=null&&handle(found))return"handled";if(map.fallthrough){if(Object.prototype.toString.call(map.fallthrough)!="[object Array]")
return lookupKey(key,map.fallthrough,handle,context);for(var i=0;i<map.fallthrough.length;i++){var result=lookupKey(key,map.fallthrough[i],handle,context);if(result)return result;}}};var isModifierKey=CodeMirror.isModifierKey=function(value){var name=typeof value=="string"?value:keyNames[value.keyCode];return name=="Ctrl"||name=="Alt"||name=="Shift"||name=="Mod";};var keyName=CodeMirror.keyName=function(event,noShift){if(presto&&event.keyCode==34&&event["char"])return false;var base=keyNames[event.keyCode],name=base;if(name==null||event.altGraphKey)return false;if(event.altKey&&base!="Alt")name="Alt-"+name;if((flipCtrlCmd?event.metaKey:event.ctrlKey)&&base!="Ctrl")name="Ctrl-"+name;if((flipCtrlCmd?event.ctrlKey:event.metaKey)&&base!="Cmd")name="Cmd-"+name;if(!noShift&&event.shiftKey&&base!="Shift")name="Shift-"+name;return name;};function getKeyMap(val){return typeof val=="string"?keyMap[val]:val;}
CodeMirror.fromTextArea=function(textarea,options){options=options?copyObj(options):{};options.value=textarea.value;if(!options.tabindex&&textarea.tabIndex)
options.tabindex=textarea.tabIndex;if(!options.placeholder&&textarea.placeholder)
options.placeholder=textarea.placeholder;if(options.autofocus==null){var hasFocus=activeElt();options.autofocus=hasFocus==textarea||textarea.getAttribute("autofocus")!=null&&hasFocus==document.body;}
function save(){textarea.value=cm.getValue();}
if(textarea.form){on(textarea.form,"submit",save);if(!options.leaveSubmitMethodAlone){var form=textarea.form,realSubmit=form.submit;try{var wrappedSubmit=form.submit=function(){save();form.submit=realSubmit;form.submit();form.submit=wrappedSubmit;};}catch(e){}}}
options.finishInit=function(cm){cm.save=save;cm.getTextArea=function(){return textarea;};cm.toTextArea=function(){cm.toTextArea=isNaN;save();textarea.parentNode.removeChild(cm.getWrapperElement());textarea.style.display="";if(textarea.form){off(textarea.form,"submit",save);if(typeof textarea.form.submit=="function")
textarea.form.submit=realSubmit;}};};textarea.style.display="none";var cm=CodeMirror(function(node){textarea.parentNode.insertBefore(node,textarea.nextSibling);},options);return cm;};var StringStream=CodeMirror.StringStream=function(string,tabSize){this.pos=this.start=0;this.string=string;this.tabSize=tabSize||8;this.lastColumnPos=this.lastColumnValue=0;this.lineStart=0;};StringStream.prototype={eol:function(){return this.pos>=this.string.length;},sol:function(){return this.pos==this.lineStart;},peek:function(){return this.string.charAt(this.pos)||undefined;},next:function(){if(this.pos<this.string.length)
return this.string.charAt(this.pos++);},eat:function(match){var ch=this.string.charAt(this.pos);if(typeof match=="string")var ok=ch==match;else var ok=ch&&(match.test?match.test(ch):match(ch));if(ok){++this.pos;return ch;}},eatWhile:function(match){var start=this.pos;while(this.eat(match)){}
return this.pos>start;},eatSpace:function(){var start=this.pos;while(/[\s\u00a0]/.test(this.string.charAt(this.pos)))++this.pos;return this.pos>start;},skipToEnd:function(){this.pos=this.string.length;},skipTo:function(ch){var found=this.string.indexOf(ch,this.pos);if(found>-1){this.pos=found;return true;}},backUp:function(n){this.pos-=n;},column:function(){if(this.lastColumnPos<this.start){this.lastColumnValue=countColumn(this.string,this.start,this.tabSize,this.lastColumnPos,this.lastColumnValue);this.lastColumnPos=this.start;}
return this.lastColumnValue-(this.lineStart?countColumn(this.string,this.lineStart,this.tabSize):0);},indentation:function(){return countColumn(this.string,null,this.tabSize)-
(this.lineStart?countColumn(this.string,this.lineStart,this.tabSize):0);},match:function(pattern,consume,caseInsensitive){if(typeof pattern=="string"){var cased=function(str){return caseInsensitive?str.toLowerCase():str;};var substr=this.string.substr(this.pos,pattern.length);if(cased(substr)==cased(pattern)){if(consume!==false)this.pos+=pattern.length;return true;}}else{var match=this.string.slice(this.pos).match(pattern);if(match&&match.index>0)return null;if(match&&consume!==false)this.pos+=match[0].length;return match;}},current:function(){return this.string.slice(this.start,this.pos);},hideFirstChars:function(n,inner){this.lineStart+=n;try{return inner();}
finally{this.lineStart-=n;}}};var nextMarkerId=0;var TextMarker=CodeMirror.TextMarker=function(doc,type){this.lines=[];this.type=type;this.doc=doc;this.id=++nextMarkerId;};eventMixin(TextMarker);TextMarker.prototype.clear=function(){if(this.explicitlyCleared)return;var cm=this.doc.cm,withOp=cm&&!cm.curOp;if(withOp)startOperation(cm);if(hasHandler(this,"clear")){var found=this.find();if(found)signalLater(this,"clear",found.from,found.to);}
var min=null,max=null;for(var i=0;i<this.lines.length;++i){var line=this.lines[i];var span=getMarkedSpanFor(line.markedSpans,this);if(cm&&!this.collapsed)regLineChange(cm,lineNo(line),"text");else if(cm){if(span.to!=null)max=lineNo(line);if(span.from!=null)min=lineNo(line);}
line.markedSpans=removeMarkedSpan(line.markedSpans,span);if(span.from==null&&this.collapsed&&!lineIsHidden(this.doc,line)&&cm)
updateLineHeight(line,textHeight(cm.display));}
if(cm&&this.collapsed&&!cm.options.lineWrapping)for(var i=0;i<this.lines.length;++i){var visual=visualLine(this.lines[i]),len=lineLength(visual);if(len>cm.display.maxLineLength){cm.display.maxLine=visual;cm.display.maxLineLength=len;cm.display.maxLineChanged=true;}}
if(min!=null&&cm&&this.collapsed)regChange(cm,min,max+1);this.lines.length=0;this.explicitlyCleared=true;if(this.atomic&&this.doc.cantEdit){this.doc.cantEdit=false;if(cm)reCheckSelection(cm.doc);}
if(cm)signalLater(cm,"markerCleared",cm,this);if(withOp)endOperation(cm);if(this.parent)this.parent.clear();};TextMarker.prototype.find=function(side,lineObj){if(side==null&&this.type=="bookmark")side=1;var from,to;for(var i=0;i<this.lines.length;++i){var line=this.lines[i];var span=getMarkedSpanFor(line.markedSpans,this);if(span.from!=null){from=Pos(lineObj?line:lineNo(line),span.from);if(side==-1)return from;}
if(span.to!=null){to=Pos(lineObj?line:lineNo(line),span.to);if(side==1)return to;}}
return from&&{from:from,to:to};};TextMarker.prototype.changed=function(){var pos=this.find(-1,true),widget=this,cm=this.doc.cm;if(!pos||!cm)return;runInOp(cm,function(){var line=pos.line,lineN=lineNo(pos.line);var view=findViewForLine(cm,lineN);if(view){clearLineMeasurementCacheFor(view);cm.curOp.selectionChanged=cm.curOp.forceUpdate=true;}
cm.curOp.updateMaxLine=true;if(!lineIsHidden(widget.doc,line)&&widget.height!=null){var oldHeight=widget.height;widget.height=null;var dHeight=widgetHeight(widget)-oldHeight;if(dHeight)
updateLineHeight(line,line.height+dHeight);}});};TextMarker.prototype.attachLine=function(line){if(!this.lines.length&&this.doc.cm){var op=this.doc.cm.curOp;if(!op.maybeHiddenMarkers||indexOf(op.maybeHiddenMarkers,this)==-1)
(op.maybeUnhiddenMarkers||(op.maybeUnhiddenMarkers=[])).push(this);}
this.lines.push(line);};TextMarker.prototype.detachLine=function(line){this.lines.splice(indexOf(this.lines,line),1);if(!this.lines.length&&this.doc.cm){var op=this.doc.cm.curOp;(op.maybeHiddenMarkers||(op.maybeHiddenMarkers=[])).push(this);}};var nextMarkerId=0;function markText(doc,from,to,options,type){if(options&&options.shared)return markTextShared(doc,from,to,options,type);if(doc.cm&&!doc.cm.curOp)return operation(doc.cm,markText)(doc,from,to,options,type);var marker=new TextMarker(doc,type),diff=cmp(from,to);if(options)copyObj(options,marker,false);if(diff>0||diff==0&&marker.clearWhenEmpty!==false)
return marker;if(marker.replacedWith){marker.collapsed=true;marker.widgetNode=elt("span",[marker.replacedWith],"CodeMirror-widget");if(!options.handleMouseEvents)marker.widgetNode.setAttribute("cm-ignore-events","true");if(options.insertLeft)marker.widgetNode.insertLeft=true;}
if(marker.collapsed){if(conflictingCollapsedRange(doc,from.line,from,to,marker)||from.line!=to.line&&conflictingCollapsedRange(doc,to.line,from,to,marker))
throw new Error("Inserting collapsed marker partially overlapping an existing one");sawCollapsedSpans=true;}
if(marker.addToHistory)
addChangeToHistory(doc,{from:from,to:to,origin:"markText"},doc.sel,NaN);var curLine=from.line,cm=doc.cm,updateMaxLine;doc.iter(curLine,to.line+1,function(line){if(cm&&marker.collapsed&&!cm.options.lineWrapping&&visualLine(line)==cm.display.maxLine)
updateMaxLine=true;if(marker.collapsed&&curLine!=from.line)updateLineHeight(line,0);addMarkedSpan(line,new MarkedSpan(marker,curLine==from.line?from.ch:null,curLine==to.line?to.ch:null));++curLine;});if(marker.collapsed)doc.iter(from.line,to.line+1,function(line){if(lineIsHidden(doc,line))updateLineHeight(line,0);});if(marker.clearOnEnter)on(marker,"beforeCursorEnter",function(){marker.clear();});if(marker.readOnly){sawReadOnlySpans=true;if(doc.history.done.length||doc.history.undone.length)
doc.clearHistory();}
if(marker.collapsed){marker.id=++nextMarkerId;marker.atomic=true;}
if(cm){if(updateMaxLine)cm.curOp.updateMaxLine=true;if(marker.collapsed)
regChange(cm,from.line,to.line+1);else if(marker.className||marker.title||marker.startStyle||marker.endStyle||marker.css)
for(var i=from.line;i<=to.line;i++)regLineChange(cm,i,"text");if(marker.atomic)reCheckSelection(cm.doc);signalLater(cm,"markerAdded",cm,marker);}
return marker;}
var SharedTextMarker=CodeMirror.SharedTextMarker=function(markers,primary){this.markers=markers;this.primary=primary;for(var i=0;i<markers.length;++i)
markers[i].parent=this;};eventMixin(SharedTextMarker);SharedTextMarker.prototype.clear=function(){if(this.explicitlyCleared)return;this.explicitlyCleared=true;for(var i=0;i<this.markers.length;++i)
this.markers[i].clear();signalLater(this,"clear");};SharedTextMarker.prototype.find=function(side,lineObj){return this.primary.find(side,lineObj);};function markTextShared(doc,from,to,options,type){options=copyObj(options);options.shared=false;var markers=[markText(doc,from,to,options,type)],primary=markers[0];var widget=options.widgetNode;linkedDocs(doc,function(doc){if(widget)options.widgetNode=widget.cloneNode(true);markers.push(markText(doc,clipPos(doc,from),clipPos(doc,to),options,type));for(var i=0;i<doc.linked.length;++i)
if(doc.linked[i].isParent)return;primary=lst(markers);});return new SharedTextMarker(markers,primary);}
function findSharedMarkers(doc){return doc.findMarks(Pos(doc.first,0),doc.clipPos(Pos(doc.lastLine())),function(m){return m.parent;});}
function copySharedMarkers(doc,markers){for(var i=0;i<markers.length;i++){var marker=markers[i],pos=marker.find();var mFrom=doc.clipPos(pos.from),mTo=doc.clipPos(pos.to);if(cmp(mFrom,mTo)){var subMark=markText(doc,mFrom,mTo,marker.primary,marker.primary.type);marker.markers.push(subMark);subMark.parent=marker;}}}
function detachSharedMarkers(markers){for(var i=0;i<markers.length;i++){var marker=markers[i],linked=[marker.primary.doc];;linkedDocs(marker.primary.doc,function(d){linked.push(d);});for(var j=0;j<marker.markers.length;j++){var subMarker=marker.markers[j];if(indexOf(linked,subMarker.doc)==-1){subMarker.parent=null;marker.markers.splice(j--,1);}}}}
function MarkedSpan(marker,from,to){this.marker=marker;this.from=from;this.to=to;}
function getMarkedSpanFor(spans,marker){if(spans)for(var i=0;i<spans.length;++i){var span=spans[i];if(span.marker==marker)return span;}}
function removeMarkedSpan(spans,span){for(var r,i=0;i<spans.length;++i)
if(spans[i]!=span)(r||(r=[])).push(spans[i]);return r;}
function addMarkedSpan(line,span){line.markedSpans=line.markedSpans?line.markedSpans.concat([span]):[span];span.marker.attachLine(line);}
function markedSpansBefore(old,startCh,isInsert){if(old)for(var i=0,nw;i<old.length;++i){var span=old[i],marker=span.marker;var startsBefore=span.from==null||(marker.inclusiveLeft?span.from<=startCh:span.from<startCh);if(startsBefore||span.from==startCh&&marker.type=="bookmark"&&(!isInsert||!span.marker.insertLeft)){var endsAfter=span.to==null||(marker.inclusiveRight?span.to>=startCh:span.to>startCh);(nw||(nw=[])).push(new MarkedSpan(marker,span.from,endsAfter?null:span.to));}}
return nw;}
function markedSpansAfter(old,endCh,isInsert){if(old)for(var i=0,nw;i<old.length;++i){var span=old[i],marker=span.marker;var endsAfter=span.to==null||(marker.inclusiveRight?span.to>=endCh:span.to>endCh);if(endsAfter||span.from==endCh&&marker.type=="bookmark"&&(!isInsert||span.marker.insertLeft)){var startsBefore=span.from==null||(marker.inclusiveLeft?span.from<=endCh:span.from<endCh);(nw||(nw=[])).push(new MarkedSpan(marker,startsBefore?null:span.from-endCh,span.to==null?null:span.to-endCh));}}
return nw;}
function stretchSpansOverChange(doc,change){if(change.full)return null;var oldFirst=isLine(doc,change.from.line)&&getLine(doc,change.from.line).markedSpans;var oldLast=isLine(doc,change.to.line)&&getLine(doc,change.to.line).markedSpans;if(!oldFirst&&!oldLast)return null;var startCh=change.from.ch,endCh=change.to.ch,isInsert=cmp(change.from,change.to)==0;var first=markedSpansBefore(oldFirst,startCh,isInsert);var last=markedSpansAfter(oldLast,endCh,isInsert);var sameLine=change.text.length==1,offset=lst(change.text).length+(sameLine?startCh:0);if(first){for(var i=0;i<first.length;++i){var span=first[i];if(span.to==null){var found=getMarkedSpanFor(last,span.marker);if(!found)span.to=startCh;else if(sameLine)span.to=found.to==null?null:found.to+offset;}}}
if(last){for(var i=0;i<last.length;++i){var span=last[i];if(span.to!=null)span.to+=offset;if(span.from==null){var found=getMarkedSpanFor(first,span.marker);if(!found){span.from=offset;if(sameLine)(first||(first=[])).push(span);}}else{span.from+=offset;if(sameLine)(first||(first=[])).push(span);}}}
if(first)first=clearEmptySpans(first);if(last&&last!=first)last=clearEmptySpans(last);var newMarkers=[first];if(!sameLine){var gap=change.text.length-2,gapMarkers;if(gap>0&&first)
for(var i=0;i<first.length;++i)
if(first[i].to==null)
(gapMarkers||(gapMarkers=[])).push(new MarkedSpan(first[i].marker,null,null));for(var i=0;i<gap;++i)
newMarkers.push(gapMarkers);newMarkers.push(last);}
return newMarkers;}
function clearEmptySpans(spans){for(var i=0;i<spans.length;++i){var span=spans[i];if(span.from!=null&&span.from==span.to&&span.marker.clearWhenEmpty!==false)
spans.splice(i--,1);}
if(!spans.length)return null;return spans;}
function mergeOldSpans(doc,change){var old=getOldSpans(doc,change);var stretched=stretchSpansOverChange(doc,change);if(!old)return stretched;if(!stretched)return old;for(var i=0;i<old.length;++i){var oldCur=old[i],stretchCur=stretched[i];if(oldCur&&stretchCur){spans:for(var j=0;j<stretchCur.length;++j){var span=stretchCur[j];for(var k=0;k<oldCur.length;++k)
if(oldCur[k].marker==span.marker)continue spans;oldCur.push(span);}}else if(stretchCur){old[i]=stretchCur;}}
return old;}
function removeReadOnlyRanges(doc,from,to){var markers=null;doc.iter(from.line,to.line+1,function(line){if(line.markedSpans)for(var i=0;i<line.markedSpans.length;++i){var mark=line.markedSpans[i].marker;if(mark.readOnly&&(!markers||indexOf(markers,mark)==-1))
(markers||(markers=[])).push(mark);}});if(!markers)return null;var parts=[{from:from,to:to}];for(var i=0;i<markers.length;++i){var mk=markers[i],m=mk.find(0);for(var j=0;j<parts.length;++j){var p=parts[j];if(cmp(p.to,m.from)<0||cmp(p.from,m.to)>0)continue;var newParts=[j,1],dfrom=cmp(p.from,m.from),dto=cmp(p.to,m.to);if(dfrom<0||!mk.inclusiveLeft&&!dfrom)
newParts.push({from:p.from,to:m.from});if(dto>0||!mk.inclusiveRight&&!dto)
newParts.push({from:m.to,to:p.to});parts.splice.apply(parts,newParts);j+=newParts.length-1;}}
return parts;}
function detachMarkedSpans(line){var spans=line.markedSpans;if(!spans)return;for(var i=0;i<spans.length;++i)
spans[i].marker.detachLine(line);line.markedSpans=null;}
function attachMarkedSpans(line,spans){if(!spans)return;for(var i=0;i<spans.length;++i)
spans[i].marker.attachLine(line);line.markedSpans=spans;}
function extraLeft(marker){return marker.inclusiveLeft?-1:0;}
function extraRight(marker){return marker.inclusiveRight?1:0;}
function compareCollapsedMarkers(a,b){var lenDiff=a.lines.length-b.lines.length;if(lenDiff!=0)return lenDiff;var aPos=a.find(),bPos=b.find();var fromCmp=cmp(aPos.from,bPos.from)||extraLeft(a)-extraLeft(b);if(fromCmp)return-fromCmp;var toCmp=cmp(aPos.to,bPos.to)||extraRight(a)-extraRight(b);if(toCmp)return toCmp;return b.id-a.id;}
function collapsedSpanAtSide(line,start){var sps=sawCollapsedSpans&&line.markedSpans,found;if(sps)for(var sp,i=0;i<sps.length;++i){sp=sps[i];if(sp.marker.collapsed&&(start?sp.from:sp.to)==null&&(!found||compareCollapsedMarkers(found,sp.marker)<0))
found=sp.marker;}
return found;}
function collapsedSpanAtStart(line){return collapsedSpanAtSide(line,true);}
function collapsedSpanAtEnd(line){return collapsedSpanAtSide(line,false);}
function conflictingCollapsedRange(doc,lineNo,from,to,marker){var line=getLine(doc,lineNo);var sps=sawCollapsedSpans&&line.markedSpans;if(sps)for(var i=0;i<sps.length;++i){var sp=sps[i];if(!sp.marker.collapsed)continue;var found=sp.marker.find(0);var fromCmp=cmp(found.from,from)||extraLeft(sp.marker)-extraLeft(marker);var toCmp=cmp(found.to,to)||extraRight(sp.marker)-extraRight(marker);if(fromCmp>=0&&toCmp<=0||fromCmp<=0&&toCmp>=0)continue;if(fromCmp<=0&&(sp.marker.inclusiveRight&&marker.inclusiveLeft?cmp(found.to,from)>=0:cmp(found.to,from)>0)||fromCmp>=0&&(sp.marker.inclusiveRight&&marker.inclusiveLeft?cmp(found.from,to)<=0:cmp(found.from,to)<0))
return true;}}
function visualLine(line){var merged;while(merged=collapsedSpanAtStart(line))
line=merged.find(-1,true).line;return line;}
function visualLineContinued(line){var merged,lines;while(merged=collapsedSpanAtEnd(line)){line=merged.find(1,true).line;(lines||(lines=[])).push(line);}
return lines;}
function visualLineNo(doc,lineN){var line=getLine(doc,lineN),vis=visualLine(line);if(line==vis)return lineN;return lineNo(vis);}
function visualLineEndNo(doc,lineN){if(lineN>doc.lastLine())return lineN;var line=getLine(doc,lineN),merged;if(!lineIsHidden(doc,line))return lineN;while(merged=collapsedSpanAtEnd(line))
line=merged.find(1,true).line;return lineNo(line)+1;}
function lineIsHidden(doc,line){var sps=sawCollapsedSpans&&line.markedSpans;if(sps)for(var sp,i=0;i<sps.length;++i){sp=sps[i];if(!sp.marker.collapsed)continue;if(sp.from==null)return true;if(sp.marker.widgetNode)continue;if(sp.from==0&&sp.marker.inclusiveLeft&&lineIsHiddenInner(doc,line,sp))
return true;}}
function lineIsHiddenInner(doc,line,span){if(span.to==null){var end=span.marker.find(1,true);return lineIsHiddenInner(doc,end.line,getMarkedSpanFor(end.line.markedSpans,span.marker));}
if(span.marker.inclusiveRight&&span.to==line.text.length)
return true;for(var sp,i=0;i<line.markedSpans.length;++i){sp=line.markedSpans[i];if(sp.marker.collapsed&&!sp.marker.widgetNode&&sp.from==span.to&&(sp.to==null||sp.to!=span.from)&&(sp.marker.inclusiveLeft||span.marker.inclusiveRight)&&lineIsHiddenInner(doc,line,sp))return true;}}
var LineWidget=CodeMirror.LineWidget=function(doc,node,options){if(options)for(var opt in options)if(options.hasOwnProperty(opt))
this[opt]=options[opt];this.doc=doc;this.node=node;};eventMixin(LineWidget);function adjustScrollWhenAboveVisible(cm,line,diff){if(heightAtLine(line)<((cm.curOp&&cm.curOp.scrollTop)||cm.doc.scrollTop))
addToScrollPos(cm,null,diff);}
LineWidget.prototype.clear=function(){var cm=this.doc.cm,ws=this.line.widgets,line=this.line,no=lineNo(line);if(no==null||!ws)return;for(var i=0;i<ws.length;++i)if(ws[i]==this)ws.splice(i--,1);if(!ws.length)line.widgets=null;var height=widgetHeight(this);updateLineHeight(line,Math.max(0,line.height-height));if(cm)runInOp(cm,function(){adjustScrollWhenAboveVisible(cm,line,-height);regLineChange(cm,no,"widget");});};LineWidget.prototype.changed=function(){var oldH=this.height,cm=this.doc.cm,line=this.line;this.height=null;var diff=widgetHeight(this)-oldH;if(!diff)return;updateLineHeight(line,line.height+diff);if(cm)runInOp(cm,function(){cm.curOp.forceUpdate=true;adjustScrollWhenAboveVisible(cm,line,diff);});};function widgetHeight(widget){if(widget.height!=null)return widget.height;var cm=widget.doc.cm;if(!cm)return 0;if(!contains(document.body,widget.node)){var parentStyle="position: relative;";if(widget.coverGutter)
parentStyle+="margin-left: -"+cm.display.gutters.offsetWidth+"px;";if(widget.noHScroll)
parentStyle+="width: "+cm.display.wrapper.clientWidth+"px;";removeChildrenAndAdd(cm.display.measure,elt("div",[widget.node],null,parentStyle));}
return widget.height=widget.node.parentNode.offsetHeight;}
function addLineWidget(doc,handle,node,options){var widget=new LineWidget(doc,node,options);var cm=doc.cm;if(cm&&widget.noHScroll)cm.display.alignWidgets=true;changeLine(doc,handle,"widget",function(line){var widgets=line.widgets||(line.widgets=[]);if(widget.insertAt==null)widgets.push(widget);else widgets.splice(Math.min(widgets.length-1,Math.max(0,widget.insertAt)),0,widget);widget.line=line;if(cm&&!lineIsHidden(doc,line)){var aboveVisible=heightAtLine(line)<doc.scrollTop;updateLineHeight(line,line.height+widgetHeight(widget));if(aboveVisible)addToScrollPos(cm,null,widget.height);cm.curOp.forceUpdate=true;}
return true;});return widget;}
var Line=CodeMirror.Line=function(text,markedSpans,estimateHeight){this.text=text;attachMarkedSpans(this,markedSpans);this.height=estimateHeight?estimateHeight(this):1;};eventMixin(Line);Line.prototype.lineNo=function(){return lineNo(this);};function updateLine(line,text,markedSpans,estimateHeight){line.text=text;if(line.stateAfter)line.stateAfter=null;if(line.styles)line.styles=null;if(line.order!=null)line.order=null;detachMarkedSpans(line);attachMarkedSpans(line,markedSpans);var estHeight=estimateHeight?estimateHeight(line):1;if(estHeight!=line.height)updateLineHeight(line,estHeight);}
function cleanUpLine(line){line.parent=null;detachMarkedSpans(line);}
function extractLineClasses(type,output){if(type)for(;;){var lineClass=type.match(/(?:^|\s+)line-(background-)?(\S+)/);if(!lineClass)break;type=type.slice(0,lineClass.index)+type.slice(lineClass.index+lineClass[0].length);var prop=lineClass[1]?"bgClass":"textClass";if(output[prop]==null)
output[prop]=lineClass[2];else if(!(new RegExp("(?:^|\s)"+lineClass[2]+"(?:$|\s)")).test(output[prop]))
output[prop]+=" "+lineClass[2];}
return type;}
function callBlankLine(mode,state){if(mode.blankLine)return mode.blankLine(state);if(!mode.innerMode)return;var inner=CodeMirror.innerMode(mode,state);if(inner.mode.blankLine)return inner.mode.blankLine(inner.state);}
function readToken(mode,stream,state,inner){for(var i=0;i<10;i++){if(inner)inner[0]=CodeMirror.innerMode(mode,state).mode;var style=mode.token(stream,state);if(stream.pos>stream.start)return style;}
throw new Error("Mode "+mode.name+" failed to advance stream.");}
function takeToken(cm,pos,precise,asArray){function getObj(copy){return{start:stream.start,end:stream.pos,string:stream.current(),type:style||null,state:copy?copyState(doc.mode,state):state};}
var doc=cm.doc,mode=doc.mode,style;pos=clipPos(doc,pos);var line=getLine(doc,pos.line),state=getStateBefore(cm,pos.line,precise);var stream=new StringStream(line.text,cm.options.tabSize),tokens;if(asArray)tokens=[];while((asArray||stream.pos<pos.ch)&&!stream.eol()){stream.start=stream.pos;style=readToken(mode,stream,state);if(asArray)tokens.push(getObj(true));}
return asArray?tokens:getObj();}
function runMode(cm,text,mode,state,f,lineClasses,forceToEnd){var flattenSpans=mode.flattenSpans;if(flattenSpans==null)flattenSpans=cm.options.flattenSpans;var curStart=0,curStyle=null;var stream=new StringStream(text,cm.options.tabSize),style;var inner=cm.options.addModeClass&&[null];if(text=="")extractLineClasses(callBlankLine(mode,state),lineClasses);while(!stream.eol()){if(stream.pos>cm.options.maxHighlightLength){flattenSpans=false;if(forceToEnd)processLine(cm,text,state,stream.pos);stream.pos=text.length;style=null;}else{style=extractLineClasses(readToken(mode,stream,state,inner),lineClasses);}
if(inner){var mName=inner[0].name;if(mName)style="m-"+(style?mName+" "+style:mName);}
if(!flattenSpans||curStyle!=style){while(curStart<stream.start){curStart=Math.min(stream.start,curStart+50000);f(curStart,curStyle);}
curStyle=style;}
stream.start=stream.pos;}
while(curStart<stream.pos){var pos=Math.min(stream.pos,curStart+50000);f(pos,curStyle);curStart=pos;}}
function highlightLine(cm,line,state,forceToEnd){var st=[cm.state.modeGen],lineClasses={};runMode(cm,line.text,cm.doc.mode,state,function(end,style){st.push(end,style);},lineClasses,forceToEnd);for(var o=0;o<cm.state.overlays.length;++o){var overlay=cm.state.overlays[o],i=1,at=0;runMode(cm,line.text,overlay.mode,true,function(end,style){var start=i;while(at<end){var i_end=st[i];if(i_end>end)
st.splice(i,1,end,st[i+1],i_end);i+=2;at=Math.min(end,i_end);}
if(!style)return;if(overlay.opaque){st.splice(start,i-start,end,"cm-overlay "+style);i=start+2;}else{for(;start<i;start+=2){var cur=st[start+1];st[start+1]=(cur?cur+" ":"")+"cm-overlay "+style;}}},lineClasses);}
return{styles:st,classes:lineClasses.bgClass||lineClasses.textClass?lineClasses:null};}
function getLineStyles(cm,line,updateFrontier){if(!line.styles||line.styles[0]!=cm.state.modeGen){var state=getStateBefore(cm,lineNo(line));var result=highlightLine(cm,line,line.text.length>cm.options.maxHighlightLength?copyState(cm.doc.mode,state):state);line.stateAfter=state;line.styles=result.styles;if(result.classes)line.styleClasses=result.classes;else if(line.styleClasses)line.styleClasses=null;if(updateFrontier===cm.doc.frontier)cm.doc.frontier++;}
return line.styles;}
function processLine(cm,text,state,startAt){var mode=cm.doc.mode;var stream=new StringStream(text,cm.options.tabSize);stream.start=stream.pos=startAt||0;if(text=="")callBlankLine(mode,state);while(!stream.eol()){readToken(mode,stream,state);stream.start=stream.pos;}}
var styleToClassCache={},styleToClassCacheWithMode={};function interpretTokenStyle(style,options){if(!style||/^\s*$/.test(style))return null;var cache=options.addModeClass?styleToClassCacheWithMode:styleToClassCache;return cache[style]||(cache[style]=style.replace(/\S+/g,"cm-$&"));}
function buildLineContent(cm,lineView){var content=elt("span",null,null,webkit?"padding-right: .1px":null);var builder={pre:elt("pre",[content],"CodeMirror-line"),content:content,col:0,pos:0,cm:cm,trailingSpace:false,splitSpaces:(ie||webkit)&&cm.getOption("lineWrapping")};lineView.measure={};for(var i=0;i<=(lineView.rest?lineView.rest.length:0);i++){var line=i?lineView.rest[i-1]:lineView.line,order;builder.pos=0;builder.addToken=buildToken;if(hasBadBidiRects(cm.display.measure)&&(order=getOrder(line)))
builder.addToken=buildTokenBadBidi(builder.addToken,order);builder.map=[];var allowFrontierUpdate=lineView!=cm.display.externalMeasured&&lineNo(line);insertLineContent(line,builder,getLineStyles(cm,line,allowFrontierUpdate));if(line.styleClasses){if(line.styleClasses.bgClass)
builder.bgClass=joinClasses(line.styleClasses.bgClass,builder.bgClass||"");if(line.styleClasses.textClass)
builder.textClass=joinClasses(line.styleClasses.textClass,builder.textClass||"");}
if(builder.map.length==0)
builder.map.push(0,0,builder.content.appendChild(zeroWidthElement(cm.display.measure)));if(i==0){lineView.measure.map=builder.map;lineView.measure.cache={};}else{(lineView.measure.maps||(lineView.measure.maps=[])).push(builder.map);(lineView.measure.caches||(lineView.measure.caches=[])).push({});}}
if(webkit){var last=builder.content.lastChild
if(/\bcm-tab\b/.test(last.className)||(last.querySelector&&last.querySelector(".cm-tab")))
builder.content.className="cm-tab-wrap-hack";}
signal(cm,"renderLine",cm,lineView.line,builder.pre);if(builder.pre.className)
builder.textClass=joinClasses(builder.pre.className,builder.textClass||"");return builder;}
function defaultSpecialCharPlaceholder(ch){var token=elt("span","\u2022","cm-invalidchar");token.title="\\u"+ch.charCodeAt(0).toString(16);token.setAttribute("aria-label",token.title);return token;}
function buildToken(builder,text,style,startStyle,endStyle,title,css){if(!text)return;var displayText=builder.splitSpaces?splitSpaces(text,builder.trailingSpace):text
var special=builder.cm.state.specialChars,mustWrap=false;if(!special.test(text)){builder.col+=text.length;var content=document.createTextNode(displayText);builder.map.push(builder.pos,builder.pos+text.length,content);if(ie&&ie_version<9)mustWrap=true;builder.pos+=text.length;}else{var content=document.createDocumentFragment(),pos=0;while(true){special.lastIndex=pos;var m=special.exec(text);var skipped=m?m.index-pos:text.length-pos;if(skipped){var txt=document.createTextNode(displayText.slice(pos,pos+skipped));if(ie&&ie_version<9)content.appendChild(elt("span",[txt]));else content.appendChild(txt);builder.map.push(builder.pos,builder.pos+skipped,txt);builder.col+=skipped;builder.pos+=skipped;}
if(!m)break;pos+=skipped+1;if(m[0]=="\t"){var tabSize=builder.cm.options.tabSize,tabWidth=tabSize-builder.col%tabSize;var txt=content.appendChild(elt("span",spaceStr(tabWidth),"cm-tab"));txt.setAttribute("role","presentation");txt.setAttribute("cm-text","\t");builder.col+=tabWidth;}else if(m[0]=="\r"||m[0]=="\n"){var txt=content.appendChild(elt("span",m[0]=="\r"?"\u240d":"\u2424","cm-invalidchar"));txt.setAttribute("cm-text",m[0]);builder.col+=1;}else{var txt=builder.cm.options.specialCharPlaceholder(m[0]);txt.setAttribute("cm-text",m[0]);if(ie&&ie_version<9)content.appendChild(elt("span",[txt]));else content.appendChild(txt);builder.col+=1;}
builder.map.push(builder.pos,builder.pos+1,txt);builder.pos++;}}
builder.trailingSpace=displayText.charCodeAt(text.length-1)==32
if(style||startStyle||endStyle||mustWrap||css){var fullStyle=style||"";if(startStyle)fullStyle+=startStyle;if(endStyle)fullStyle+=endStyle;var token=elt("span",[content],fullStyle,css);if(title)token.title=title;return builder.content.appendChild(token);}
builder.content.appendChild(content);}
function splitSpaces(text,trailingBefore){if(text.length>1&&!/  /.test(text))return text
var spaceBefore=trailingBefore,result=""
for(var i=0;i<text.length;i++){var ch=text.charAt(i)
if(ch==" "&&spaceBefore&&(i==text.length-1||text.charCodeAt(i+1)==32))
ch="\u00a0"
result+=ch
spaceBefore=ch==" "}
return result}
function buildTokenBadBidi(inner,order){return function(builder,text,style,startStyle,endStyle,title,css){style=style?style+" cm-force-border":"cm-force-border";var start=builder.pos,end=start+text.length;for(;;){for(var i=0;i<order.length;i++){var part=order[i];if(part.to>start&&part.from<=start)break;}
if(part.to>=end)return inner(builder,text,style,startStyle,endStyle,title,css);inner(builder,text.slice(0,part.to-start),style,startStyle,null,title,css);startStyle=null;text=text.slice(part.to-start);start=part.to;}};}
function buildCollapsedSpan(builder,size,marker,ignoreWidget){var widget=!ignoreWidget&&marker.widgetNode;if(widget)builder.map.push(builder.pos,builder.pos+size,widget);if(!ignoreWidget&&builder.cm.display.input.needsContentAttribute){if(!widget)
widget=builder.content.appendChild(document.createElement("span"));widget.setAttribute("cm-marker",marker.id);}
if(widget){builder.cm.display.input.setUneditable(widget);builder.content.appendChild(widget);}
builder.pos+=size;builder.trailingSpace=false}
function insertLineContent(line,builder,styles){var spans=line.markedSpans,allText=line.text,at=0;if(!spans){for(var i=1;i<styles.length;i+=2)
builder.addToken(builder,allText.slice(at,at=styles[i]),interpretTokenStyle(styles[i+1],builder.cm.options));return;}
var len=allText.length,pos=0,i=1,text="",style,css;var nextChange=0,spanStyle,spanEndStyle,spanStartStyle,title,collapsed;for(;;){if(nextChange==pos){spanStyle=spanEndStyle=spanStartStyle=title=css="";collapsed=null;nextChange=Infinity;var foundBookmarks=[],endStyles
for(var j=0;j<spans.length;++j){var sp=spans[j],m=sp.marker;if(m.type=="bookmark"&&sp.from==pos&&m.widgetNode){foundBookmarks.push(m);}else if(sp.from<=pos&&(sp.to==null||sp.to>pos||m.collapsed&&sp.to==pos&&sp.from==pos)){if(sp.to!=null&&sp.to!=pos&&nextChange>sp.to){nextChange=sp.to;spanEndStyle="";}
if(m.className)spanStyle+=" "+m.className;if(m.css)css=(css?css+";":"")+m.css;if(m.startStyle&&sp.from==pos)spanStartStyle+=" "+m.startStyle;if(m.endStyle&&sp.to==nextChange)(endStyles||(endStyles=[])).push(m.endStyle,sp.to)
if(m.title&&!title)title=m.title;if(m.collapsed&&(!collapsed||compareCollapsedMarkers(collapsed.marker,m)<0))
collapsed=sp;}else if(sp.from>pos&&nextChange>sp.from){nextChange=sp.from;}}
if(endStyles)for(var j=0;j<endStyles.length;j+=2)
if(endStyles[j+1]==nextChange)spanEndStyle+=" "+endStyles[j]
if(!collapsed||collapsed.from==pos)for(var j=0;j<foundBookmarks.length;++j)
buildCollapsedSpan(builder,0,foundBookmarks[j]);if(collapsed&&(collapsed.from||0)==pos){buildCollapsedSpan(builder,(collapsed.to==null?len+1:collapsed.to)-pos,collapsed.marker,collapsed.from==null);if(collapsed.to==null)return;if(collapsed.to==pos)collapsed=false;}}
if(pos>=len)break;var upto=Math.min(len,nextChange);while(true){if(text){var end=pos+text.length;if(!collapsed){var tokenText=end>upto?text.slice(0,upto-pos):text;builder.addToken(builder,tokenText,style?style+spanStyle:spanStyle,spanStartStyle,pos+tokenText.length==nextChange?spanEndStyle:"",title,css);}
if(end>=upto){text=text.slice(upto-pos);pos=upto;break;}
pos=end;spanStartStyle="";}
text=allText.slice(at,at=styles[i++]);style=interpretTokenStyle(styles[i++],builder.cm.options);}}}
function isWholeLineUpdate(doc,change){return change.from.ch==0&&change.to.ch==0&&lst(change.text)==""&&(!doc.cm||doc.cm.options.wholeLineUpdateBefore);}
function updateDoc(doc,change,markedSpans,estimateHeight){function spansFor(n){return markedSpans?markedSpans[n]:null;}
function update(line,text,spans){updateLine(line,text,spans,estimateHeight);signalLater(line,"change",line,change);}
function linesFor(start,end){for(var i=start,result=[];i<end;++i)
result.push(new Line(text[i],spansFor(i),estimateHeight));return result;}
var from=change.from,to=change.to,text=change.text;var firstLine=getLine(doc,from.line),lastLine=getLine(doc,to.line);var lastText=lst(text),lastSpans=spansFor(text.length-1),nlines=to.line-from.line;if(change.full){doc.insert(0,linesFor(0,text.length));doc.remove(text.length,doc.size-text.length);}else if(isWholeLineUpdate(doc,change)){var added=linesFor(0,text.length-1);update(lastLine,lastLine.text,lastSpans);if(nlines)doc.remove(from.line,nlines);if(added.length)doc.insert(from.line,added);}else if(firstLine==lastLine){if(text.length==1){update(firstLine,firstLine.text.slice(0,from.ch)+lastText+firstLine.text.slice(to.ch),lastSpans);}else{var added=linesFor(1,text.length-1);added.push(new Line(lastText+firstLine.text.slice(to.ch),lastSpans,estimateHeight));update(firstLine,firstLine.text.slice(0,from.ch)+text[0],spansFor(0));doc.insert(from.line+1,added);}}else if(text.length==1){update(firstLine,firstLine.text.slice(0,from.ch)+text[0]+lastLine.text.slice(to.ch),spansFor(0));doc.remove(from.line+1,nlines);}else{update(firstLine,firstLine.text.slice(0,from.ch)+text[0],spansFor(0));update(lastLine,lastText+lastLine.text.slice(to.ch),lastSpans);var added=linesFor(1,text.length-1);if(nlines>1)doc.remove(from.line+1,nlines-1);doc.insert(from.line+1,added);}
signalLater(doc,"change",doc,change);}
function LeafChunk(lines){this.lines=lines;this.parent=null;for(var i=0,height=0;i<lines.length;++i){lines[i].parent=this;height+=lines[i].height;}
this.height=height;}
LeafChunk.prototype={chunkSize:function(){return this.lines.length;},removeInner:function(at,n){for(var i=at,e=at+n;i<e;++i){var line=this.lines[i];this.height-=line.height;cleanUpLine(line);signalLater(line,"delete");}
this.lines.splice(at,n);},collapse:function(lines){lines.push.apply(lines,this.lines);},insertInner:function(at,lines,height){this.height+=height;this.lines=this.lines.slice(0,at).concat(lines).concat(this.lines.slice(at));for(var i=0;i<lines.length;++i)lines[i].parent=this;},iterN:function(at,n,op){for(var e=at+n;at<e;++at)
if(op(this.lines[at]))return true;}};function BranchChunk(children){this.children=children;var size=0,height=0;for(var i=0;i<children.length;++i){var ch=children[i];size+=ch.chunkSize();height+=ch.height;ch.parent=this;}
this.size=size;this.height=height;this.parent=null;}
BranchChunk.prototype={chunkSize:function(){return this.size;},removeInner:function(at,n){this.size-=n;for(var i=0;i<this.children.length;++i){var child=this.children[i],sz=child.chunkSize();if(at<sz){var rm=Math.min(n,sz-at),oldHeight=child.height;child.removeInner(at,rm);this.height-=oldHeight-child.height;if(sz==rm){this.children.splice(i--,1);child.parent=null;}
if((n-=rm)==0)break;at=0;}else at-=sz;}
if(this.size-n<25&&(this.children.length>1||!(this.children[0]instanceof LeafChunk))){var lines=[];this.collapse(lines);this.children=[new LeafChunk(lines)];this.children[0].parent=this;}},collapse:function(lines){for(var i=0;i<this.children.length;++i)this.children[i].collapse(lines);},insertInner:function(at,lines,height){this.size+=lines.length;this.height+=height;for(var i=0;i<this.children.length;++i){var child=this.children[i],sz=child.chunkSize();if(at<=sz){child.insertInner(at,lines,height);if(child.lines&&child.lines.length>50){var remaining=child.lines.length%25+25
for(var pos=remaining;pos<child.lines.length;){var leaf=new LeafChunk(child.lines.slice(pos,pos+=25));child.height-=leaf.height;this.children.splice(++i,0,leaf);leaf.parent=this;}
child.lines=child.lines.slice(0,remaining);this.maybeSpill();}
break;}
at-=sz;}},maybeSpill:function(){if(this.children.length<=10)return;var me=this;do{var spilled=me.children.splice(me.children.length-5,5);var sibling=new BranchChunk(spilled);if(!me.parent){var copy=new BranchChunk(me.children);copy.parent=me;me.children=[copy,sibling];me=copy;}else{me.size-=sibling.size;me.height-=sibling.height;var myIndex=indexOf(me.parent.children,me);me.parent.children.splice(myIndex+1,0,sibling);}
sibling.parent=me.parent;}while(me.children.length>10);me.parent.maybeSpill();},iterN:function(at,n,op){for(var i=0;i<this.children.length;++i){var child=this.children[i],sz=child.chunkSize();if(at<sz){var used=Math.min(n,sz-at);if(child.iterN(at,used,op))return true;if((n-=used)==0)break;at=0;}else at-=sz;}}};var nextDocId=0;var Doc=CodeMirror.Doc=function(text,mode,firstLine,lineSep){if(!(this instanceof Doc))return new Doc(text,mode,firstLine,lineSep);if(firstLine==null)firstLine=0;BranchChunk.call(this,[new LeafChunk([new Line("",null)])]);this.first=firstLine;this.scrollTop=this.scrollLeft=0;this.cantEdit=false;this.cleanGeneration=1;this.frontier=firstLine;var start=Pos(firstLine,0);this.sel=simpleSelection(start);this.history=new History(null);this.id=++nextDocId;this.modeOption=mode;this.lineSep=lineSep;this.extend=false;if(typeof text=="string")text=this.splitLines(text);updateDoc(this,{from:start,to:start,text:text});setSelection(this,simpleSelection(start),sel_dontScroll);};Doc.prototype=createObj(BranchChunk.prototype,{constructor:Doc,iter:function(from,to,op){if(op)this.iterN(from-this.first,to-from,op);else this.iterN(this.first,this.first+this.size,from);},insert:function(at,lines){var height=0;for(var i=0;i<lines.length;++i)height+=lines[i].height;this.insertInner(at-this.first,lines,height);},remove:function(at,n){this.removeInner(at-this.first,n);},getValue:function(lineSep){var lines=getLines(this,this.first,this.first+this.size);if(lineSep===false)return lines;return lines.join(lineSep||this.lineSeparator());},setValue:docMethodOp(function(code){var top=Pos(this.first,0),last=this.first+this.size-1;makeChange(this,{from:top,to:Pos(last,getLine(this,last).text.length),text:this.splitLines(code),origin:"setValue",full:true},true);setSelection(this,simpleSelection(top));}),replaceRange:function(code,from,to,origin){from=clipPos(this,from);to=to?clipPos(this,to):from;replaceRange(this,code,from,to,origin);},getRange:function(from,to,lineSep){var lines=getBetween(this,clipPos(this,from),clipPos(this,to));if(lineSep===false)return lines;return lines.join(lineSep||this.lineSeparator());},getLine:function(line){var l=this.getLineHandle(line);return l&&l.text;},getLineHandle:function(line){if(isLine(this,line))return getLine(this,line);},getLineNumber:function(line){return lineNo(line);},getLineHandleVisualStart:function(line){if(typeof line=="number")line=getLine(this,line);return visualLine(line);},lineCount:function(){return this.size;},firstLine:function(){return this.first;},lastLine:function(){return this.first+this.size-1;},clipPos:function(pos){return clipPos(this,pos);},getCursor:function(start){var range=this.sel.primary(),pos;if(start==null||start=="head")pos=range.head;else if(start=="anchor")pos=range.anchor;else if(start=="end"||start=="to"||start===false)pos=range.to();else pos=range.from();return pos;},listSelections:function(){return this.sel.ranges;},somethingSelected:function(){return this.sel.somethingSelected();},setCursor:docMethodOp(function(line,ch,options){setSimpleSelection(this,clipPos(this,typeof line=="number"?Pos(line,ch||0):line),null,options);}),setSelection:docMethodOp(function(anchor,head,options){setSimpleSelection(this,clipPos(this,anchor),clipPos(this,head||anchor),options);}),extendSelection:docMethodOp(function(head,other,options){extendSelection(this,clipPos(this,head),other&&clipPos(this,other),options);}),extendSelections:docMethodOp(function(heads,options){extendSelections(this,clipPosArray(this,heads),options);}),extendSelectionsBy:docMethodOp(function(f,options){var heads=map(this.sel.ranges,f);extendSelections(this,clipPosArray(this,heads),options);}),setSelections:docMethodOp(function(ranges,primary,options){if(!ranges.length)return;for(var i=0,out=[];i<ranges.length;i++)
out[i]=new Range(clipPos(this,ranges[i].anchor),clipPos(this,ranges[i].head));if(primary==null)primary=Math.min(ranges.length-1,this.sel.primIndex);setSelection(this,normalizeSelection(out,primary),options);}),addSelection:docMethodOp(function(anchor,head,options){var ranges=this.sel.ranges.slice(0);ranges.push(new Range(clipPos(this,anchor),clipPos(this,head||anchor)));setSelection(this,normalizeSelection(ranges,ranges.length-1),options);}),getSelection:function(lineSep){var ranges=this.sel.ranges,lines;for(var i=0;i<ranges.length;i++){var sel=getBetween(this,ranges[i].from(),ranges[i].to());lines=lines?lines.concat(sel):sel;}
if(lineSep===false)return lines;else return lines.join(lineSep||this.lineSeparator());},getSelections:function(lineSep){var parts=[],ranges=this.sel.ranges;for(var i=0;i<ranges.length;i++){var sel=getBetween(this,ranges[i].from(),ranges[i].to());if(lineSep!==false)sel=sel.join(lineSep||this.lineSeparator());parts[i]=sel;}
return parts;},replaceSelection:function(code,collapse,origin){var dup=[];for(var i=0;i<this.sel.ranges.length;i++)
dup[i]=code;this.replaceSelections(dup,collapse,origin||"+input");},replaceSelections:docMethodOp(function(code,collapse,origin){var changes=[],sel=this.sel;for(var i=0;i<sel.ranges.length;i++){var range=sel.ranges[i];changes[i]={from:range.from(),to:range.to(),text:this.splitLines(code[i]),origin:origin};}
var newSel=collapse&&collapse!="end"&&computeReplacedSel(this,changes,collapse);for(var i=changes.length-1;i>=0;i--)
makeChange(this,changes[i]);if(newSel)setSelectionReplaceHistory(this,newSel);else if(this.cm)ensureCursorVisible(this.cm);}),undo:docMethodOp(function(){makeChangeFromHistory(this,"undo");}),redo:docMethodOp(function(){makeChangeFromHistory(this,"redo");}),undoSelection:docMethodOp(function(){makeChangeFromHistory(this,"undo",true);}),redoSelection:docMethodOp(function(){makeChangeFromHistory(this,"redo",true);}),setExtending:function(val){this.extend=val;},getExtending:function(){return this.extend;},historySize:function(){var hist=this.history,done=0,undone=0;for(var i=0;i<hist.done.length;i++)if(!hist.done[i].ranges)++done;for(var i=0;i<hist.undone.length;i++)if(!hist.undone[i].ranges)++undone;return{undo:done,redo:undone};},clearHistory:function(){this.history=new History(this.history.maxGeneration);},markClean:function(){this.cleanGeneration=this.changeGeneration(true);},changeGeneration:function(forceSplit){if(forceSplit)
this.history.lastOp=this.history.lastSelOp=this.history.lastOrigin=null;return this.history.generation;},isClean:function(gen){return this.history.generation==(gen||this.cleanGeneration);},getHistory:function(){return{done:copyHistoryArray(this.history.done),undone:copyHistoryArray(this.history.undone)};},setHistory:function(histData){var hist=this.history=new History(this.history.maxGeneration);hist.done=copyHistoryArray(histData.done.slice(0),null,true);hist.undone=copyHistoryArray(histData.undone.slice(0),null,true);},addLineClass:docMethodOp(function(handle,where,cls){return changeLine(this,handle,where=="gutter"?"gutter":"class",function(line){var prop=where=="text"?"textClass":where=="background"?"bgClass":where=="gutter"?"gutterClass":"wrapClass";if(!line[prop])line[prop]=cls;else if(classTest(cls).test(line[prop]))return false;else line[prop]+=" "+cls;return true;});}),removeLineClass:docMethodOp(function(handle,where,cls){return changeLine(this,handle,where=="gutter"?"gutter":"class",function(line){var prop=where=="text"?"textClass":where=="background"?"bgClass":where=="gutter"?"gutterClass":"wrapClass";var cur=line[prop];if(!cur)return false;else if(cls==null)line[prop]=null;else{var found=cur.match(classTest(cls));if(!found)return false;var end=found.index+found[0].length;line[prop]=cur.slice(0,found.index)+(!found.index||end==cur.length?"":" ")+cur.slice(end)||null;}
return true;});}),addLineWidget:docMethodOp(function(handle,node,options){return addLineWidget(this,handle,node,options);}),removeLineWidget:function(widget){widget.clear();},markText:function(from,to,options){return markText(this,clipPos(this,from),clipPos(this,to),options,options&&options.type||"range");},setBookmark:function(pos,options){var realOpts={replacedWith:options&&(options.nodeType==null?options.widget:options),insertLeft:options&&options.insertLeft,clearWhenEmpty:false,shared:options&&options.shared,handleMouseEvents:options&&options.handleMouseEvents};pos=clipPos(this,pos);return markText(this,pos,pos,realOpts,"bookmark");},findMarksAt:function(pos){pos=clipPos(this,pos);var markers=[],spans=getLine(this,pos.line).markedSpans;if(spans)for(var i=0;i<spans.length;++i){var span=spans[i];if((span.from==null||span.from<=pos.ch)&&(span.to==null||span.to>=pos.ch))
markers.push(span.marker.parent||span.marker);}
return markers;},findMarks:function(from,to,filter){from=clipPos(this,from);to=clipPos(this,to);var found=[],lineNo=from.line;this.iter(from.line,to.line+1,function(line){var spans=line.markedSpans;if(spans)for(var i=0;i<spans.length;i++){var span=spans[i];if(!(span.to!=null&&lineNo==from.line&&from.ch>=span.to||span.from==null&&lineNo!=from.line||span.from!=null&&lineNo==to.line&&span.from>=to.ch)&&(!filter||filter(span.marker)))
found.push(span.marker.parent||span.marker);}
++lineNo;});return found;},getAllMarks:function(){var markers=[];this.iter(function(line){var sps=line.markedSpans;if(sps)for(var i=0;i<sps.length;++i)
if(sps[i].from!=null)markers.push(sps[i].marker);});return markers;},posFromIndex:function(off){var ch,lineNo=this.first,sepSize=this.lineSeparator().length;this.iter(function(line){var sz=line.text.length+sepSize;if(sz>off){ch=off;return true;}
off-=sz;++lineNo;});return clipPos(this,Pos(lineNo,ch));},indexFromPos:function(coords){coords=clipPos(this,coords);var index=coords.ch;if(coords.line<this.first||coords.ch<0)return 0;var sepSize=this.lineSeparator().length;this.iter(this.first,coords.line,function(line){index+=line.text.length+sepSize;});return index;},copy:function(copyHistory){var doc=new Doc(getLines(this,this.first,this.first+this.size),this.modeOption,this.first,this.lineSep);doc.scrollTop=this.scrollTop;doc.scrollLeft=this.scrollLeft;doc.sel=this.sel;doc.extend=false;if(copyHistory){doc.history.undoDepth=this.history.undoDepth;doc.setHistory(this.getHistory());}
return doc;},linkedDoc:function(options){if(!options)options={};var from=this.first,to=this.first+this.size;if(options.from!=null&&options.from>from)from=options.from;if(options.to!=null&&options.to<to)to=options.to;var copy=new Doc(getLines(this,from,to),options.mode||this.modeOption,from,this.lineSep);if(options.sharedHist)copy.history=this.history;(this.linked||(this.linked=[])).push({doc:copy,sharedHist:options.sharedHist});copy.linked=[{doc:this,isParent:true,sharedHist:options.sharedHist}];copySharedMarkers(copy,findSharedMarkers(this));return copy;},unlinkDoc:function(other){if(other instanceof CodeMirror)other=other.doc;if(this.linked)for(var i=0;i<this.linked.length;++i){var link=this.linked[i];if(link.doc!=other)continue;this.linked.splice(i,1);other.unlinkDoc(this);detachSharedMarkers(findSharedMarkers(this));break;}
if(other.history==this.history){var splitIds=[other.id];linkedDocs(other,function(doc){splitIds.push(doc.id);},true);other.history=new History(null);other.history.done=copyHistoryArray(this.history.done,splitIds);other.history.undone=copyHistoryArray(this.history.undone,splitIds);}},iterLinkedDocs:function(f){linkedDocs(this,f);},getMode:function(){return this.mode;},getEditor:function(){return this.cm;},splitLines:function(str){if(this.lineSep)return str.split(this.lineSep);return splitLinesAuto(str);},lineSeparator:function(){return this.lineSep||"\n";}});Doc.prototype.eachLine=Doc.prototype.iter;var dontDelegate="iter insert remove copy getEditor constructor".split(" ");for(var prop in Doc.prototype)if(Doc.prototype.hasOwnProperty(prop)&&indexOf(dontDelegate,prop)<0)
CodeMirror.prototype[prop]=(function(method){return function(){return method.apply(this.doc,arguments);};})(Doc.prototype[prop]);eventMixin(Doc);function linkedDocs(doc,f,sharedHistOnly){function propagate(doc,skip,sharedHist){if(doc.linked)for(var i=0;i<doc.linked.length;++i){var rel=doc.linked[i];if(rel.doc==skip)continue;var shared=sharedHist&&rel.sharedHist;if(sharedHistOnly&&!shared)continue;f(rel.doc,shared);propagate(rel.doc,doc,shared);}}
propagate(doc,null,true);}
function attachDoc(cm,doc){if(doc.cm)throw new Error("This document is already in use.");cm.doc=doc;doc.cm=cm;estimateLineHeights(cm);loadMode(cm);if(!cm.options.lineWrapping)findMaxLine(cm);cm.options.mode=doc.modeOption;regChange(cm);}
function getLine(doc,n){n-=doc.first;if(n<0||n>=doc.size)throw new Error("There is no line "+(n+doc.first)+" in the document.");for(var chunk=doc;!chunk.lines;){for(var i=0;;++i){var child=chunk.children[i],sz=child.chunkSize();if(n<sz){chunk=child;break;}
n-=sz;}}
return chunk.lines[n];}
function getBetween(doc,start,end){var out=[],n=start.line;doc.iter(start.line,end.line+1,function(line){var text=line.text;if(n==end.line)text=text.slice(0,end.ch);if(n==start.line)text=text.slice(start.ch);out.push(text);++n;});return out;}
function getLines(doc,from,to){var out=[];doc.iter(from,to,function(line){out.push(line.text);});return out;}
function updateLineHeight(line,height){var diff=height-line.height;if(diff)for(var n=line;n;n=n.parent)n.height+=diff;}
function lineNo(line){if(line.parent==null)return null;var cur=line.parent,no=indexOf(cur.lines,line);for(var chunk=cur.parent;chunk;cur=chunk,chunk=chunk.parent){for(var i=0;;++i){if(chunk.children[i]==cur)break;no+=chunk.children[i].chunkSize();}}
return no+cur.first;}
function lineAtHeight(chunk,h){var n=chunk.first;outer:do{for(var i=0;i<chunk.children.length;++i){var child=chunk.children[i],ch=child.height;if(h<ch){chunk=child;continue outer;}
h-=ch;n+=child.chunkSize();}
return n;}while(!chunk.lines);for(var i=0;i<chunk.lines.length;++i){var line=chunk.lines[i],lh=line.height;if(h<lh)break;h-=lh;}
return n+i;}
function heightAtLine(lineObj){lineObj=visualLine(lineObj);var h=0,chunk=lineObj.parent;for(var i=0;i<chunk.lines.length;++i){var line=chunk.lines[i];if(line==lineObj)break;else h+=line.height;}
for(var p=chunk.parent;p;chunk=p,p=chunk.parent){for(var i=0;i<p.children.length;++i){var cur=p.children[i];if(cur==chunk)break;else h+=cur.height;}}
return h;}
function getOrder(line){var order=line.order;if(order==null)order=line.order=bidiOrdering(line.text);return order;}
function History(startGen){this.done=[];this.undone=[];this.undoDepth=Infinity;this.lastModTime=this.lastSelTime=0;this.lastOp=this.lastSelOp=null;this.lastOrigin=this.lastSelOrigin=null;this.generation=this.maxGeneration=startGen||1;}
function historyChangeFromChange(doc,change){var histChange={from:copyPos(change.from),to:changeEnd(change),text:getBetween(doc,change.from,change.to)};attachLocalSpans(doc,histChange,change.from.line,change.to.line+1);linkedDocs(doc,function(doc){attachLocalSpans(doc,histChange,change.from.line,change.to.line+1);},true);return histChange;}
function clearSelectionEvents(array){while(array.length){var last=lst(array);if(last.ranges)array.pop();else break;}}
function lastChangeEvent(hist,force){if(force){clearSelectionEvents(hist.done);return lst(hist.done);}else if(hist.done.length&&!lst(hist.done).ranges){return lst(hist.done);}else if(hist.done.length>1&&!hist.done[hist.done.length-2].ranges){hist.done.pop();return lst(hist.done);}}
function addChangeToHistory(doc,change,selAfter,opId){var hist=doc.history;hist.undone.length=0;var time=+new Date,cur;if((hist.lastOp==opId||hist.lastOrigin==change.origin&&change.origin&&((change.origin.charAt(0)=="+"&&doc.cm&&hist.lastModTime>time-doc.cm.options.historyEventDelay)||change.origin.charAt(0)=="*"))&&(cur=lastChangeEvent(hist,hist.lastOp==opId))){var last=lst(cur.changes);if(cmp(change.from,change.to)==0&&cmp(change.from,last.to)==0){last.to=changeEnd(change);}else{cur.changes.push(historyChangeFromChange(doc,change));}}else{var before=lst(hist.done);if(!before||!before.ranges)
pushSelectionToHistory(doc.sel,hist.done);cur={changes:[historyChangeFromChange(doc,change)],generation:hist.generation};hist.done.push(cur);while(hist.done.length>hist.undoDepth){hist.done.shift();if(!hist.done[0].ranges)hist.done.shift();}}
hist.done.push(selAfter);hist.generation=++hist.maxGeneration;hist.lastModTime=hist.lastSelTime=time;hist.lastOp=hist.lastSelOp=opId;hist.lastOrigin=hist.lastSelOrigin=change.origin;if(!last)signal(doc,"historyAdded");}
function selectionEventCanBeMerged(doc,origin,prev,sel){var ch=origin.charAt(0);return ch=="*"||ch=="+"&&prev.ranges.length==sel.ranges.length&&prev.somethingSelected()==sel.somethingSelected()&&new Date-doc.history.lastSelTime<=(doc.cm?doc.cm.options.historyEventDelay:500);}
function addSelectionToHistory(doc,sel,opId,options){var hist=doc.history,origin=options&&options.origin;if(opId==hist.lastSelOp||(origin&&hist.lastSelOrigin==origin&&(hist.lastModTime==hist.lastSelTime&&hist.lastOrigin==origin||selectionEventCanBeMerged(doc,origin,lst(hist.done),sel))))
hist.done[hist.done.length-1]=sel;else
pushSelectionToHistory(sel,hist.done);hist.lastSelTime=+new Date;hist.lastSelOrigin=origin;hist.lastSelOp=opId;if(options&&options.clearRedo!==false)
clearSelectionEvents(hist.undone);}
function pushSelectionToHistory(sel,dest){var top=lst(dest);if(!(top&&top.ranges&&top.equals(sel)))
dest.push(sel);}
function attachLocalSpans(doc,change,from,to){var existing=change["spans_"+doc.id],n=0;doc.iter(Math.max(doc.first,from),Math.min(doc.first+doc.size,to),function(line){if(line.markedSpans)
(existing||(existing=change["spans_"+doc.id]={}))[n]=line.markedSpans;++n;});}
function removeClearedSpans(spans){if(!spans)return null;for(var i=0,out;i<spans.length;++i){if(spans[i].marker.explicitlyCleared){if(!out)out=spans.slice(0,i);}
else if(out)out.push(spans[i]);}
return!out?spans:out.length?out:null;}
function getOldSpans(doc,change){var found=change["spans_"+doc.id];if(!found)return null;for(var i=0,nw=[];i<change.text.length;++i)
nw.push(removeClearedSpans(found[i]));return nw;}
function copyHistoryArray(events,newGroup,instantiateSel){for(var i=0,copy=[];i<events.length;++i){var event=events[i];if(event.ranges){copy.push(instantiateSel?Selection.prototype.deepCopy.call(event):event);continue;}
var changes=event.changes,newChanges=[];copy.push({changes:newChanges});for(var j=0;j<changes.length;++j){var change=changes[j],m;newChanges.push({from:change.from,to:change.to,text:change.text});if(newGroup)for(var prop in change)if(m=prop.match(/^spans_(\d+)$/)){if(indexOf(newGroup,Number(m[1]))>-1){lst(newChanges)[prop]=change[prop];delete change[prop];}}}}
return copy;}
function rebaseHistSelSingle(pos,from,to,diff){if(to<pos.line){pos.line+=diff;}else if(from<pos.line){pos.line=from;pos.ch=0;}}
function rebaseHistArray(array,from,to,diff){for(var i=0;i<array.length;++i){var sub=array[i],ok=true;if(sub.ranges){if(!sub.copied){sub=array[i]=sub.deepCopy();sub.copied=true;}
for(var j=0;j<sub.ranges.length;j++){rebaseHistSelSingle(sub.ranges[j].anchor,from,to,diff);rebaseHistSelSingle(sub.ranges[j].head,from,to,diff);}
continue;}
for(var j=0;j<sub.changes.length;++j){var cur=sub.changes[j];if(to<cur.from.line){cur.from=Pos(cur.from.line+diff,cur.from.ch);cur.to=Pos(cur.to.line+diff,cur.to.ch);}else if(from<=cur.to.line){ok=false;break;}}
if(!ok){array.splice(0,i+1);i=0;}}}
function rebaseHist(hist,change){var from=change.from.line,to=change.to.line,diff=change.text.length-(to-from)-1;rebaseHistArray(hist.done,from,to,diff);rebaseHistArray(hist.undone,from,to,diff);}
var e_preventDefault=CodeMirror.e_preventDefault=function(e){if(e.preventDefault)e.preventDefault();else e.returnValue=false;};var e_stopPropagation=CodeMirror.e_stopPropagation=function(e){if(e.stopPropagation)e.stopPropagation();else e.cancelBubble=true;};function e_defaultPrevented(e){return e.defaultPrevented!=null?e.defaultPrevented:e.returnValue==false;}
var e_stop=CodeMirror.e_stop=function(e){e_preventDefault(e);e_stopPropagation(e);};function e_target(e){return e.target||e.srcElement;}
function e_button(e){var b=e.which;if(b==null){if(e.button&1)b=1;else if(e.button&2)b=3;else if(e.button&4)b=2;}
if(mac&&e.ctrlKey&&b==1)b=3;return b;}
var on=CodeMirror.on=function(emitter,type,f){if(emitter.addEventListener)
emitter.addEventListener(type,f,false);else if(emitter.attachEvent)
emitter.attachEvent("on"+type,f);else{var map=emitter._handlers||(emitter._handlers={});var arr=map[type]||(map[type]=[]);arr.push(f);}};var noHandlers=[]
function getHandlers(emitter,type,copy){var arr=emitter._handlers&&emitter._handlers[type]
if(copy)return arr&&arr.length>0?arr.slice():noHandlers
else return arr||noHandlers}
var off=CodeMirror.off=function(emitter,type,f){if(emitter.removeEventListener)
emitter.removeEventListener(type,f,false);else if(emitter.detachEvent)
emitter.detachEvent("on"+type,f);else{var handlers=getHandlers(emitter,type,false)
for(var i=0;i<handlers.length;++i)
if(handlers[i]==f){handlers.splice(i,1);break;}}};var signal=CodeMirror.signal=function(emitter,type){var handlers=getHandlers(emitter,type,true)
if(!handlers.length)return;var args=Array.prototype.slice.call(arguments,2);for(var i=0;i<handlers.length;++i)handlers[i].apply(null,args);};var orphanDelayedCallbacks=null;function signalLater(emitter,type){var arr=getHandlers(emitter,type,false)
if(!arr.length)return;var args=Array.prototype.slice.call(arguments,2),list;if(operationGroup){list=operationGroup.delayedCallbacks;}else if(orphanDelayedCallbacks){list=orphanDelayedCallbacks;}else{list=orphanDelayedCallbacks=[];setTimeout(fireOrphanDelayed,0);}
function bnd(f){return function(){f.apply(null,args);};};for(var i=0;i<arr.length;++i)
list.push(bnd(arr[i]));}
function fireOrphanDelayed(){var delayed=orphanDelayedCallbacks;orphanDelayedCallbacks=null;for(var i=0;i<delayed.length;++i)delayed[i]();}
function signalDOMEvent(cm,e,override){if(typeof e=="string")
e={type:e,preventDefault:function(){this.defaultPrevented=true;}};signal(cm,override||e.type,cm,e);return e_defaultPrevented(e)||e.codemirrorIgnore;}
function signalCursorActivity(cm){var arr=cm._handlers&&cm._handlers.cursorActivity;if(!arr)return;var set=cm.curOp.cursorActivityHandlers||(cm.curOp.cursorActivityHandlers=[]);for(var i=0;i<arr.length;++i)if(indexOf(set,arr[i])==-1)
set.push(arr[i]);}
function hasHandler(emitter,type){return getHandlers(emitter,type).length>0}
function eventMixin(ctor){ctor.prototype.on=function(type,f){on(this,type,f);};ctor.prototype.off=function(type,f){off(this,type,f);};}
var scrollerGap=30;var Pass=CodeMirror.Pass={toString:function(){return"CodeMirror.Pass";}};var sel_dontScroll={scroll:false},sel_mouse={origin:"*mouse"},sel_move={origin:"+move"};function Delayed(){this.id=null;}
Delayed.prototype.set=function(ms,f){clearTimeout(this.id);this.id=setTimeout(f,ms);};var countColumn=CodeMirror.countColumn=function(string,end,tabSize,startIndex,startValue){if(end==null){end=string.search(/[^\s\u00a0]/);if(end==-1)end=string.length;}
for(var i=startIndex||0,n=startValue||0;;){var nextTab=string.indexOf("\t",i);if(nextTab<0||nextTab>=end)
return n+(end-i);n+=nextTab-i;n+=tabSize-(n%tabSize);i=nextTab+1;}};var findColumn=CodeMirror.findColumn=function(string,goal,tabSize){for(var pos=0,col=0;;){var nextTab=string.indexOf("\t",pos);if(nextTab==-1)nextTab=string.length;var skipped=nextTab-pos;if(nextTab==string.length||col+skipped>=goal)
return pos+Math.min(skipped,goal-col);col+=nextTab-pos;col+=tabSize-(col%tabSize);pos=nextTab+1;if(col>=goal)return pos;}}
var spaceStrs=[""];function spaceStr(n){while(spaceStrs.length<=n)
spaceStrs.push(lst(spaceStrs)+" ");return spaceStrs[n];}
function lst(arr){return arr[arr.length-1];}
var selectInput=function(node){node.select();};if(ios)
selectInput=function(node){node.selectionStart=0;node.selectionEnd=node.value.length;};else if(ie)
selectInput=function(node){try{node.select();}catch(_e){}};function indexOf(array,elt){for(var i=0;i<array.length;++i)
if(array[i]==elt)return i;return-1;}
function map(array,f){var out=[];for(var i=0;i<array.length;i++)out[i]=f(array[i],i);return out;}
function nothing(){}
function createObj(base,props){var inst;if(Object.create){inst=Object.create(base);}else{nothing.prototype=base;inst=new nothing();}
if(props)copyObj(props,inst);return inst;};function copyObj(obj,target,overwrite){if(!target)target={};for(var prop in obj)
if(obj.hasOwnProperty(prop)&&(overwrite!==false||!target.hasOwnProperty(prop)))
target[prop]=obj[prop];return target;}
function bind(f){var args=Array.prototype.slice.call(arguments,1);return function(){return f.apply(null,args);};}
var nonASCIISingleCaseWordChar=/[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;var isWordCharBasic=CodeMirror.isWordChar=function(ch){return/\w/.test(ch)||ch>"\x80"&&(ch.toUpperCase()!=ch.toLowerCase()||nonASCIISingleCaseWordChar.test(ch));};function isWordChar(ch,helper){if(!helper)return isWordCharBasic(ch);if(helper.source.indexOf("\\w")>-1&&isWordCharBasic(ch))return true;return helper.test(ch);}
function isEmpty(obj){for(var n in obj)if(obj.hasOwnProperty(n)&&obj[n])return false;return true;}
var extendingChars=/[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;function isExtendingChar(ch){return ch.charCodeAt(0)>=768&&extendingChars.test(ch);}
function elt(tag,content,className,style){var e=document.createElement(tag);if(className)e.className=className;if(style)e.style.cssText=style;if(typeof content=="string")e.appendChild(document.createTextNode(content));else if(content)for(var i=0;i<content.length;++i)e.appendChild(content[i]);return e;}
var range;if(document.createRange)range=function(node,start,end,endNode){var r=document.createRange();r.setEnd(endNode||node,end);r.setStart(node,start);return r;};else range=function(node,start,end){var r=document.body.createTextRange();try{r.moveToElementText(node.parentNode);}
catch(e){return r;}
r.collapse(true);r.moveEnd("character",end);r.moveStart("character",start);return r;};function removeChildren(e){for(var count=e.childNodes.length;count>0;--count)
e.removeChild(e.firstChild);return e;}
function removeChildrenAndAdd(parent,e){return removeChildren(parent).appendChild(e);}
var contains=CodeMirror.contains=function(parent,child){if(child.nodeType==3)
child=child.parentNode;if(parent.contains)
return parent.contains(child);do{if(child.nodeType==11)child=child.host;if(child==parent)return true;}while(child=child.parentNode);};function activeElt(){var activeElement=document.activeElement;while(activeElement&&activeElement.root&&activeElement.root.activeElement)
activeElement=activeElement.root.activeElement;return activeElement;}
if(ie&&ie_version<11)activeElt=function(){try{return document.activeElement;}
catch(e){return document.body;}};function classTest(cls){return new RegExp("(^|\\s)"+cls+"(?:$|\\s)\\s*");}
var rmClass=CodeMirror.rmClass=function(node,cls){var current=node.className;var match=classTest(cls).exec(current);if(match){var after=current.slice(match.index+match[0].length);node.className=current.slice(0,match.index)+(after?match[1]+after:"");}};var addClass=CodeMirror.addClass=function(node,cls){var current=node.className;if(!classTest(cls).test(current))node.className+=(current?" ":"")+cls;};function joinClasses(a,b){var as=a.split(" ");for(var i=0;i<as.length;i++)
if(as[i]&&!classTest(as[i]).test(b))b+=" "+as[i];return b;}
function forEachCodeMirror(f){if(!document.body.getElementsByClassName)return;var byClass=document.body.getElementsByClassName("CodeMirror");for(var i=0;i<byClass.length;i++){var cm=byClass[i].CodeMirror;if(cm)f(cm);}}
var globalsRegistered=false;function ensureGlobalHandlers(){if(globalsRegistered)return;registerGlobalHandlers();globalsRegistered=true;}
function registerGlobalHandlers(){var resizeTimer;on(window,"resize",function(){if(resizeTimer==null)resizeTimer=setTimeout(function(){resizeTimer=null;forEachCodeMirror(onResize);},100);});on(window,"blur",function(){forEachCodeMirror(onBlur);});}
var dragAndDrop=function(){if(ie&&ie_version<9)return false;var div=elt('div');return"draggable"in div||"dragDrop"in div;}();var zwspSupported;function zeroWidthElement(measure){if(zwspSupported==null){var test=elt("span","\u200b");removeChildrenAndAdd(measure,elt("span",[test,document.createTextNode("x")]));if(measure.firstChild.offsetHeight!=0)
zwspSupported=test.offsetWidth<=1&&test.offsetHeight>2&&!(ie&&ie_version<8);}
var node=zwspSupported?elt("span","\u200b"):elt("span","\u00a0",null,"display: inline-block; width: 1px; margin-right: -1px");node.setAttribute("cm-text","");return node;}
var badBidiRects;function hasBadBidiRects(measure){if(badBidiRects!=null)return badBidiRects;var txt=removeChildrenAndAdd(measure,document.createTextNode("A\u062eA"));var r0=range(txt,0,1).getBoundingClientRect();var r1=range(txt,1,2).getBoundingClientRect();removeChildren(measure);if(!r0||r0.left==r0.right)return false;return badBidiRects=(r1.right-r0.right<3);}
var splitLinesAuto=CodeMirror.splitLines="\n\nb".split(/\n/).length!=3?function(string){var pos=0,result=[],l=string.length;while(pos<=l){var nl=string.indexOf("\n",pos);if(nl==-1)nl=string.length;var line=string.slice(pos,string.charAt(nl-1)=="\r"?nl-1:nl);var rt=line.indexOf("\r");if(rt!=-1){result.push(line.slice(0,rt));pos+=rt+1;}else{result.push(line);pos=nl+1;}}
return result;}:function(string){return string.split(/\r\n?|\n/);};var hasSelection=window.getSelection?function(te){try{return te.selectionStart!=te.selectionEnd;}
catch(e){return false;}}:function(te){try{var range=te.ownerDocument.selection.createRange();}
catch(e){}
if(!range||range.parentElement()!=te)return false;return range.compareEndPoints("StartToEnd",range)!=0;};var hasCopyEvent=(function(){var e=elt("div");if("oncopy"in e)return true;e.setAttribute("oncopy","return;");return typeof e.oncopy=="function";})();var badZoomedRects=null;function hasBadZoomedRects(measure){if(badZoomedRects!=null)return badZoomedRects;var node=removeChildrenAndAdd(measure,elt("span","x"));var normal=node.getBoundingClientRect();var fromRange=range(node,0,1).getBoundingClientRect();return badZoomedRects=Math.abs(normal.left-fromRange.left)>1;}
var keyNames=CodeMirror.keyNames={3:"Enter",8:"Backspace",9:"Tab",13:"Enter",16:"Shift",17:"Ctrl",18:"Alt",19:"Pause",20:"CapsLock",27:"Esc",32:"Space",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",44:"PrintScrn",45:"Insert",46:"Delete",59:";",61:"=",91:"Mod",92:"Mod",93:"Mod",106:"*",107:"=",109:"-",110:".",111:"/",127:"Delete",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'",63232:"Up",63233:"Down",63234:"Left",63235:"Right",63272:"Delete",63273:"Home",63275:"End",63276:"PageUp",63277:"PageDown",63302:"Insert"};(function(){for(var i=0;i<10;i++)keyNames[i+48]=keyNames[i+96]=String(i);for(var i=65;i<=90;i++)keyNames[i]=String.fromCharCode(i);for(var i=1;i<=12;i++)keyNames[i+111]=keyNames[i+63235]="F"+i;})();function iterateBidiSections(order,from,to,f){if(!order)return f(from,to,"ltr");var found=false;for(var i=0;i<order.length;++i){var part=order[i];if(part.from<to&&part.to>from||from==to&&part.to==from){f(Math.max(part.from,from),Math.min(part.to,to),part.level==1?"rtl":"ltr");found=true;}}
if(!found)f(from,to,"ltr");}
function bidiLeft(part){return part.level%2?part.to:part.from;}
function bidiRight(part){return part.level%2?part.from:part.to;}
function lineLeft(line){var order=getOrder(line);return order?bidiLeft(order[0]):0;}
function lineRight(line){var order=getOrder(line);if(!order)return line.text.length;return bidiRight(lst(order));}
function lineStart(cm,lineN){var line=getLine(cm.doc,lineN);var visual=visualLine(line);if(visual!=line)lineN=lineNo(visual);var order=getOrder(visual);var ch=!order?0:order[0].level%2?lineRight(visual):lineLeft(visual);return Pos(lineN,ch);}
function lineEnd(cm,lineN){var merged,line=getLine(cm.doc,lineN);while(merged=collapsedSpanAtEnd(line)){line=merged.find(1,true).line;lineN=null;}
var order=getOrder(line);var ch=!order?line.text.length:order[0].level%2?lineLeft(line):lineRight(line);return Pos(lineN==null?lineNo(line):lineN,ch);}
function lineStartSmart(cm,pos){var start=lineStart(cm,pos.line);var line=getLine(cm.doc,start.line);var order=getOrder(line);if(!order||order[0].level==0){var firstNonWS=Math.max(0,line.text.search(/\S/));var inWS=pos.line==start.line&&pos.ch<=firstNonWS&&pos.ch;return Pos(start.line,inWS?0:firstNonWS);}
return start;}
function compareBidiLevel(order,a,b){var linedir=order[0].level;if(a==linedir)return true;if(b==linedir)return false;return a<b;}
var bidiOther;function getBidiPartAt(order,pos){bidiOther=null;for(var i=0,found;i<order.length;++i){var cur=order[i];if(cur.from<pos&&cur.to>pos)return i;if((cur.from==pos||cur.to==pos)){if(found==null){found=i;}else if(compareBidiLevel(order,cur.level,order[found].level)){if(cur.from!=cur.to)bidiOther=found;return i;}else{if(cur.from!=cur.to)bidiOther=i;return found;}}}
return found;}
function moveInLine(line,pos,dir,byUnit){if(!byUnit)return pos+dir;do pos+=dir;while(pos>0&&isExtendingChar(line.text.charAt(pos)));return pos;}
function moveVisually(line,start,dir,byUnit){var bidi=getOrder(line);if(!bidi)return moveLogically(line,start,dir,byUnit);var pos=getBidiPartAt(bidi,start),part=bidi[pos];var target=moveInLine(line,start,part.level%2?-dir:dir,byUnit);for(;;){if(target>part.from&&target<part.to)return target;if(target==part.from||target==part.to){if(getBidiPartAt(bidi,target)==pos)return target;part=bidi[pos+=dir];return(dir>0)==part.level%2?part.to:part.from;}else{part=bidi[pos+=dir];if(!part)return null;if((dir>0)==part.level%2)
target=moveInLine(line,part.to,-1,byUnit);else
target=moveInLine(line,part.from,1,byUnit);}}}
function moveLogically(line,start,dir,byUnit){var target=start+dir;if(byUnit)while(target>0&&isExtendingChar(line.text.charAt(target)))target+=dir;return target<0||target>line.text.length?null:target;}
var bidiOrdering=(function(){var lowTypes="bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN";var arabicTypes="rrrrrrrrrrrr,rNNmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmrrrrrrrnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmNmmmm";function charType(code){if(code<=0xf7)return lowTypes.charAt(code);else if(0x590<=code&&code<=0x5f4)return"R";else if(0x600<=code&&code<=0x6ed)return arabicTypes.charAt(code-0x600);else if(0x6ee<=code&&code<=0x8ac)return"r";else if(0x2000<=code&&code<=0x200b)return"w";else if(code==0x200c)return"b";else return"L";}
var bidiRE=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;var isNeutral=/[stwN]/,isStrong=/[LRr]/,countsAsLeft=/[Lb1n]/,countsAsNum=/[1n]/;var outerType="L";function BidiSpan(level,from,to){this.level=level;this.from=from;this.to=to;}
return function(str){if(!bidiRE.test(str))return false;var len=str.length,types=[];for(var i=0,type;i<len;++i)
types.push(type=charType(str.charCodeAt(i)));for(var i=0,prev=outerType;i<len;++i){var type=types[i];if(type=="m")types[i]=prev;else prev=type;}
for(var i=0,cur=outerType;i<len;++i){var type=types[i];if(type=="1"&&cur=="r")types[i]="n";else if(isStrong.test(type)){cur=type;if(type=="r")types[i]="R";}}
for(var i=1,prev=types[0];i<len-1;++i){var type=types[i];if(type=="+"&&prev=="1"&&types[i+1]=="1")types[i]="1";else if(type==","&&prev==types[i+1]&&(prev=="1"||prev=="n"))types[i]=prev;prev=type;}
for(var i=0;i<len;++i){var type=types[i];if(type==",")types[i]="N";else if(type=="%"){for(var end=i+1;end<len&&types[end]=="%";++end){}
var replace=(i&&types[i-1]=="!")||(end<len&&types[end]=="1")?"1":"N";for(var j=i;j<end;++j)types[j]=replace;i=end-1;}}
for(var i=0,cur=outerType;i<len;++i){var type=types[i];if(cur=="L"&&type=="1")types[i]="L";else if(isStrong.test(type))cur=type;}
for(var i=0;i<len;++i){if(isNeutral.test(types[i])){for(var end=i+1;end<len&&isNeutral.test(types[end]);++end){}
var before=(i?types[i-1]:outerType)=="L";var after=(end<len?types[end]:outerType)=="L";var replace=before||after?"L":"R";for(var j=i;j<end;++j)types[j]=replace;i=end-1;}}
var order=[],m;for(var i=0;i<len;){if(countsAsLeft.test(types[i])){var start=i;for(++i;i<len&&countsAsLeft.test(types[i]);++i){}
order.push(new BidiSpan(0,start,i));}else{var pos=i,at=order.length;for(++i;i<len&&types[i]!="L";++i){}
for(var j=pos;j<i;){if(countsAsNum.test(types[j])){if(pos<j)order.splice(at,0,new BidiSpan(1,pos,j));var nstart=j;for(++j;j<i&&countsAsNum.test(types[j]);++j){}
order.splice(at,0,new BidiSpan(2,nstart,j));pos=j;}else++j;}
if(pos<i)order.splice(at,0,new BidiSpan(1,pos,i));}}
if(order[0].level==1&&(m=str.match(/^\s+/))){order[0].from=m[0].length;order.unshift(new BidiSpan(0,0,m[0].length));}
if(lst(order).level==1&&(m=str.match(/\s+$/))){lst(order).to-=m[0].length;order.push(new BidiSpan(0,len-m[0].length,len));}
if(order[0].level==2)
order.unshift(new BidiSpan(1,order[0].to,order[0].to));if(order[0].level!=lst(order).level)
order.push(new BidiSpan(order[0].level,len,len));return order;};})();CodeMirror.version="5.17.1";return CodeMirror;});;(function(mod){if(typeof exports=="object"&&typeof module=="object")
mod(require("../../lib/codemirror"));else if(typeof define=="function"&&define.amd)
define(["../../lib/codemirror"],mod);else
mod(CodeMirror);})(function(CodeMirror){"use strict";CodeMirror.multiplexingMode=function(outer){var others=Array.prototype.slice.call(arguments,1);function indexOf(string,pattern,from,returnEnd){if(typeof pattern=="string"){var found=string.indexOf(pattern,from);return returnEnd&&found>-1?found+pattern.length:found;}
var m=pattern.exec(from?string.slice(from):string);return m?m.index+from+(returnEnd?m[0].length:0):-1;}
return{startState:function(){return{outer:CodeMirror.startState(outer),innerActive:null,inner:null};},copyState:function(state){return{outer:CodeMirror.copyState(outer,state.outer),innerActive:state.innerActive,inner:state.innerActive&&CodeMirror.copyState(state.innerActive.mode,state.inner)};},token:function(stream,state){if(!state.innerActive){var cutOff=Infinity,oldContent=stream.string;for(var i=0;i<others.length;++i){var other=others[i];var found=indexOf(oldContent,other.open,stream.pos);if(found==stream.pos){if(!other.parseDelimiters)stream.match(other.open);state.innerActive=other;state.inner=CodeMirror.startState(other.mode,outer.indent?outer.indent(state.outer,""):0);return other.delimStyle&&(other.delimStyle+" "+other.delimStyle+"-open");}else if(found!=-1&&found<cutOff){cutOff=found;}}
if(cutOff!=Infinity)stream.string=oldContent.slice(0,cutOff);var outerToken=outer.token(stream,state.outer);if(cutOff!=Infinity)stream.string=oldContent;return outerToken;}else{var curInner=state.innerActive,oldContent=stream.string;if(!curInner.close&&stream.sol()){state.innerActive=state.inner=null;return this.token(stream,state);}
var found=curInner.close?indexOf(oldContent,curInner.close,stream.pos,curInner.parseDelimiters):-1;if(found==stream.pos&&!curInner.parseDelimiters){stream.match(curInner.close);state.innerActive=state.inner=null;return curInner.delimStyle&&(curInner.delimStyle+" "+curInner.delimStyle+"-close");}
if(found>-1)stream.string=oldContent.slice(0,found);var innerToken=curInner.mode.token(stream,state.inner);if(found>-1)stream.string=oldContent;if(found==stream.pos&&curInner.parseDelimiters)
state.innerActive=state.inner=null;if(curInner.innerStyle){if(innerToken)innerToken=innerToken+" "+curInner.innerStyle;else innerToken=curInner.innerStyle;}
return innerToken;}},indent:function(state,textAfter){var mode=state.innerActive?state.innerActive.mode:outer;if(!mode.indent)return CodeMirror.Pass;return mode.indent(state.innerActive?state.inner:state.outer,textAfter);},blankLine:function(state){var mode=state.innerActive?state.innerActive.mode:outer;if(mode.blankLine){mode.blankLine(state.innerActive?state.inner:state.outer);}
if(!state.innerActive){for(var i=0;i<others.length;++i){var other=others[i];if(other.open==="\n"){state.innerActive=other;state.inner=CodeMirror.startState(other.mode,mode.indent?mode.indent(state.outer,""):0);}}}else if(state.innerActive.close==="\n"){state.innerActive=state.inner=null;}},electricChars:outer.electricChars,innerMode:function(state){return state.inner?{state:state.inner,mode:state.innerActive.mode}:{state:state.outer,mode:outer};}};};});;(function(mod){if(typeof exports=="object"&&typeof module=="object")
mod(require("../../lib/codemirror"));else if(typeof define=="function"&&define.amd)
define(["../../lib/codemirror"],mod);else
mod(CodeMirror);})(function(CodeMirror){var ie_lt8=/MSIE \d/.test(navigator.userAgent)&&(document.documentMode==null||document.documentMode<8);var Pos=CodeMirror.Pos;var matching={"(":")>",")":"(<","[":"]>","]":"[<","{":"}>","}":"{<"};function findMatchingBracket(cm,where,strict,config){var line=cm.getLineHandle(where.line),pos=where.ch-1;var match=(pos>=0&&matching[line.text.charAt(pos)])||matching[line.text.charAt(++pos)];if(!match)return null;var dir=match.charAt(1)==">"?1:-1;if(strict&&(dir>0)!=(pos==where.ch))return null;var style=cm.getTokenTypeAt(Pos(where.line,pos+1));var found=scanForBracket(cm,Pos(where.line,pos+(dir>0?1:0)),dir,style||null,config);if(found==null)return null;return{from:Pos(where.line,pos),to:found&&found.pos,match:found&&found.ch==match.charAt(0),forward:dir>0};}
function scanForBracket(cm,where,dir,style,config){var maxScanLen=(config&&config.maxScanLineLength)||10000;var maxScanLines=(config&&config.maxScanLines)||1000;var stack=[];var re=config&&config.bracketRegex?config.bracketRegex:/[(){}[\]]/;var lineEnd=dir>0?Math.min(where.line+maxScanLines,cm.lastLine()+1):Math.max(cm.firstLine()-1,where.line-maxScanLines);for(var lineNo=where.line;lineNo!=lineEnd;lineNo+=dir){var line=cm.getLine(lineNo);if(!line)continue;var pos=dir>0?0:line.length-1,end=dir>0?line.length:-1;if(line.length>maxScanLen)continue;if(lineNo==where.line)pos=where.ch-(dir<0?1:0);for(;pos!=end;pos+=dir){var ch=line.charAt(pos);if(re.test(ch)&&(style===undefined||cm.getTokenTypeAt(Pos(lineNo,pos+1))==style)){var match=matching[ch];if((match.charAt(1)==">")==(dir>0))stack.push(ch);else if(!stack.length)return{pos:Pos(lineNo,pos),ch:ch};else stack.pop();}}}
return lineNo-dir==(dir>0?cm.lastLine():cm.firstLine())?false:null;}
function matchBrackets(cm,autoclear,config){var maxHighlightLen=cm.state.matchBrackets.maxHighlightLineLength||1000;var marks=[],ranges=cm.listSelections();for(var i=0;i<ranges.length;i++){var match=ranges[i].empty()&&findMatchingBracket(cm,ranges[i].head,false,config);if(match&&cm.getLine(match.from.line).length<=maxHighlightLen){var style=match.match?"CodeMirror-matchingbracket":"CodeMirror-nonmatchingbracket";marks.push(cm.markText(match.from,Pos(match.from.line,match.from.ch+1),{className:style}));if(match.to&&cm.getLine(match.to.line).length<=maxHighlightLen)
marks.push(cm.markText(match.to,Pos(match.to.line,match.to.ch+1),{className:style}));}}
if(marks.length){if(ie_lt8&&cm.state.focused)cm.focus();var clear=function(){cm.operation(function(){for(var i=0;i<marks.length;i++)marks[i].clear();});};if(autoclear)setTimeout(clear,800);else return clear;}}
var currentlyHighlighted=null;function doMatchBrackets(cm){cm.operation(function(){if(currentlyHighlighted){currentlyHighlighted();currentlyHighlighted=null;}
currentlyHighlighted=matchBrackets(cm,false,cm.state.matchBrackets);});}
CodeMirror.defineOption("matchBrackets",false,function(cm,val,old){if(old&&old!=CodeMirror.Init)
cm.off("cursorActivity",doMatchBrackets);if(val){cm.state.matchBrackets=typeof val=="object"?val:{};cm.on("cursorActivity",doMatchBrackets);}});CodeMirror.defineExtension("matchBrackets",function(){matchBrackets(this,true);});CodeMirror.defineExtension("findMatchingBracket",function(pos,strict,config){return findMatchingBracket(this,pos,strict,config);});CodeMirror.defineExtension("scanForBracket",function(pos,dir,style,config){return scanForBracket(this,pos,dir,style,config);});});;(function(mod){if(typeof exports=="object"&&typeof module=="object")
mod(require("../../lib/codemirror"));else if(typeof define=="function"&&define.amd)
define(["../../lib/codemirror"],mod);else
mod(CodeMirror);})(function(CodeMirror){var defaults={pairs:"()[]{}''\"\"",triples:"",explode:"[]{}"};var Pos=CodeMirror.Pos;CodeMirror.defineOption("autoCloseBrackets",false,function(cm,val,old){if(old&&old!=CodeMirror.Init){cm.removeKeyMap(keyMap);cm.state.closeBrackets=null;}
if(val){cm.state.closeBrackets=val;cm.addKeyMap(keyMap);}});function getOption(conf,name){if(name=="pairs"&&typeof conf=="string")return conf;if(typeof conf=="object"&&conf[name]!=null)return conf[name];return defaults[name];}
var bind=defaults.pairs+"`";var keyMap={Backspace:handleBackspace,Enter:handleEnter};for(var i=0;i<bind.length;i++)
keyMap["'"+bind.charAt(i)+"'"]=handler(bind.charAt(i));function handler(ch){return function(cm){return handleChar(cm,ch);};}
function getConfig(cm){var deflt=cm.state.closeBrackets;if(!deflt)return null;var mode=cm.getModeAt(cm.getCursor());return mode.closeBrackets||deflt;}
function handleBackspace(cm){var conf=getConfig(cm);if(!conf||cm.getOption("disableInput"))return CodeMirror.Pass;var pairs=getOption(conf,"pairs");var ranges=cm.listSelections();for(var i=0;i<ranges.length;i++){if(!ranges[i].empty())return CodeMirror.Pass;var around=charsAround(cm,ranges[i].head);if(!around||pairs.indexOf(around)%2!=0)return CodeMirror.Pass;}
for(var i=ranges.length-1;i>=0;i--){var cur=ranges[i].head;cm.replaceRange("",Pos(cur.line,cur.ch-1),Pos(cur.line,cur.ch+1),"+delete");}}
function handleEnter(cm){var conf=getConfig(cm);var explode=conf&&getOption(conf,"explode");if(!explode||cm.getOption("disableInput"))return CodeMirror.Pass;var ranges=cm.listSelections();for(var i=0;i<ranges.length;i++){if(!ranges[i].empty())return CodeMirror.Pass;var around=charsAround(cm,ranges[i].head);if(!around||explode.indexOf(around)%2!=0)return CodeMirror.Pass;}
cm.operation(function(){cm.replaceSelection("\n\n",null);cm.execCommand("goCharLeft");ranges=cm.listSelections();for(var i=0;i<ranges.length;i++){var line=ranges[i].head.line;cm.indentLine(line,null,true);cm.indentLine(line+1,null,true);}});}
function contractSelection(sel){var inverted=CodeMirror.cmpPos(sel.anchor,sel.head)>0;return{anchor:new Pos(sel.anchor.line,sel.anchor.ch+(inverted?-1:1)),head:new Pos(sel.head.line,sel.head.ch+(inverted?1:-1))};}
function handleChar(cm,ch){var conf=getConfig(cm);if(!conf||cm.getOption("disableInput"))return CodeMirror.Pass;var pairs=getOption(conf,"pairs");var pos=pairs.indexOf(ch);if(pos==-1)return CodeMirror.Pass;var triples=getOption(conf,"triples");var identical=pairs.charAt(pos+1)==ch;var ranges=cm.listSelections();var opening=pos%2==0;var type;for(var i=0;i<ranges.length;i++){var range=ranges[i],cur=range.head,curType;var next=cm.getRange(cur,Pos(cur.line,cur.ch+1));if(opening&&!range.empty()){curType="surround";}else if((identical||!opening)&&next==ch){if(triples.indexOf(ch)>=0&&cm.getRange(cur,Pos(cur.line,cur.ch+3))==ch+ch+ch)
curType="skipThree";else
curType="skip";}else if(identical&&cur.ch>1&&triples.indexOf(ch)>=0&&cm.getRange(Pos(cur.line,cur.ch-2),cur)==ch+ch&&(cur.ch<=2||cm.getRange(Pos(cur.line,cur.ch-3),Pos(cur.line,cur.ch-2))!=ch)){curType="addFour";}else if(identical){if(!CodeMirror.isWordChar(next)&&enteringString(cm,cur,ch))curType="both";else return CodeMirror.Pass;}else if(opening&&(cm.getLine(cur.line).length==cur.ch||isClosingBracket(next,pairs)||/\s/.test(next))){curType="both";}else{return CodeMirror.Pass;}
if(!type)type=curType;else if(type!=curType)return CodeMirror.Pass;}
var left=pos%2?pairs.charAt(pos-1):ch;var right=pos%2?ch:pairs.charAt(pos+1);cm.operation(function(){if(type=="skip"){cm.execCommand("goCharRight");}else if(type=="skipThree"){for(var i=0;i<3;i++)
cm.execCommand("goCharRight");}else if(type=="surround"){var sels=cm.getSelections();for(var i=0;i<sels.length;i++)
sels[i]=left+sels[i]+right;cm.replaceSelections(sels,"around");sels=cm.listSelections().slice();for(var i=0;i<sels.length;i++)
sels[i]=contractSelection(sels[i]);cm.setSelections(sels);}else if(type=="both"){cm.replaceSelection(left+right,null);cm.triggerElectric(left+right);cm.execCommand("goCharLeft");}else if(type=="addFour"){cm.replaceSelection(left+left+left+left,"before");cm.execCommand("goCharRight");}});}
function isClosingBracket(ch,pairs){var pos=pairs.lastIndexOf(ch);return pos>-1&&pos%2==1;}
function charsAround(cm,pos){var str=cm.getRange(Pos(pos.line,pos.ch-1),Pos(pos.line,pos.ch+1));return str.length==2?str:null;}
function enteringString(cm,pos,ch){var line=cm.getLine(pos.line);var token=cm.getTokenAt(pos);if(/\bstring2?\b/.test(token.type))return false;var stream=new CodeMirror.StringStream(line.slice(0,pos.ch)+ch+line.slice(pos.ch),4);stream.pos=stream.start=token.start;for(;;){var type1=cm.getMode().token(stream,token.state);if(stream.pos>=pos.ch+1)return/\bstring2?\b/.test(type1);stream.start=stream.pos;}}});;(function(mod){if(typeof exports=="object"&&typeof module=="object")
mod(require("../../lib/codemirror"));else if(typeof define=="function"&&define.amd)
define(["../../lib/codemirror"],mod);else
mod(CodeMirror);})(function(CodeMirror){"use strict";CodeMirror.defineOption("styleSelectedText",false,function(cm,val,old){var prev=old&&old!=CodeMirror.Init;if(val&&!prev){cm.state.markedSelection=[];cm.state.markedSelectionStyle=typeof val=="string"?val:"CodeMirror-selectedtext";reset(cm);cm.on("cursorActivity",onCursorActivity);cm.on("change",onChange);}else if(!val&&prev){cm.off("cursorActivity",onCursorActivity);cm.off("change",onChange);clear(cm);cm.state.markedSelection=cm.state.markedSelectionStyle=null;}});function onCursorActivity(cm){cm.operation(function(){update(cm);});}
function onChange(cm){if(cm.state.markedSelection.length)
cm.operation(function(){clear(cm);});}
var CHUNK_SIZE=8;var Pos=CodeMirror.Pos;var cmp=CodeMirror.cmpPos;function coverRange(cm,from,to,addAt){if(cmp(from,to)==0)return;var array=cm.state.markedSelection;var cls=cm.state.markedSelectionStyle;for(var line=from.line;;){var start=line==from.line?from:Pos(line,0);var endLine=line+CHUNK_SIZE,atEnd=endLine>=to.line;var end=atEnd?to:Pos(endLine,0);var mark=cm.markText(start,end,{className:cls});if(addAt==null)array.push(mark);else array.splice(addAt++,0,mark);if(atEnd)break;line=endLine;}}
function clear(cm){var array=cm.state.markedSelection;for(var i=0;i<array.length;++i)array[i].clear();array.length=0;}
function reset(cm){clear(cm);var ranges=cm.listSelections();for(var i=0;i<ranges.length;i++)
coverRange(cm,ranges[i].from(),ranges[i].to());}
function update(cm){if(!cm.somethingSelected())return clear(cm);if(cm.listSelections().length>1)return reset(cm);var from=cm.getCursor("start"),to=cm.getCursor("end");var array=cm.state.markedSelection;if(!array.length)return coverRange(cm,from,to);var coverStart=array[0].find(),coverEnd=array[array.length-1].find();if(!coverStart||!coverEnd||to.line-from.line<CHUNK_SIZE||cmp(from,coverEnd.to)>=0||cmp(to,coverStart.from)<=0)
return reset(cm);while(cmp(from,coverStart.from)>0){array.shift().clear();coverStart=array[0].find();}
if(cmp(from,coverStart.from)<0){if(coverStart.to.line-from.line<CHUNK_SIZE){array.shift().clear();coverRange(cm,from,coverStart.to,0);}else{coverRange(cm,from,coverStart.from,0);}}
while(cmp(to,coverEnd.to)<0){array.pop().clear();coverEnd=array[array.length-1].find();}
if(cmp(to,coverEnd.to)>0){if(to.line-coverEnd.from.line<CHUNK_SIZE){array.pop().clear();coverRange(cm,coverEnd.from,to);}else{coverRange(cm,coverEnd.to,to);}}}});;(function(mod){if(typeof exports=="object"&&typeof module=="object")
mod(require("../../lib/codemirror"));else if(typeof define=="function"&&define.amd)
define(["../../lib/codemirror"],mod);else
mod(CodeMirror);})(function(CodeMirror){"use strict";var noOptions={};var nonWS=/[^\s\u00a0]/;var Pos=CodeMirror.Pos;function firstNonWS(str){var found=str.search(nonWS);return found==-1?0:found;}
CodeMirror.commands.toggleComment=function(cm){cm.toggleComment();};CodeMirror.defineExtension("toggleComment",function(options){if(!options)options=noOptions;var cm=this;var minLine=Infinity,ranges=this.listSelections(),mode=null;for(var i=ranges.length-1;i>=0;i--){var from=ranges[i].from(),to=ranges[i].to();if(from.line>=minLine)continue;if(to.line>=minLine)to=Pos(minLine,0);minLine=from.line;if(mode==null){if(cm.uncomment(from,to,options))mode="un";else{cm.lineComment(from,to,options);mode="line";}}else if(mode=="un"){cm.uncomment(from,to,options);}else{cm.lineComment(from,to,options);}}});function probablyInsideString(cm,pos,line){return/\bstring\b/.test(cm.getTokenTypeAt(Pos(pos.line,0)))&&!/^[\'\"`]/.test(line)}
CodeMirror.defineExtension("lineComment",function(from,to,options){if(!options)options=noOptions;var self=this,mode=self.getModeAt(from);var firstLine=self.getLine(from.line);if(firstLine==null||probablyInsideString(self,from,firstLine))return;var commentString=options.lineComment||mode.lineComment;if(!commentString){if(options.blockCommentStart||mode.blockCommentStart){options.fullLines=true;self.blockComment(from,to,options);}
return;}
var end=Math.min(to.ch!=0||to.line==from.line?to.line+1:to.line,self.lastLine()+1);var pad=options.padding==null?" ":options.padding;var blankLines=options.commentBlankLines||from.line==to.line;self.operation(function(){if(options.indent){var baseString=null;for(var i=from.line;i<end;++i){var line=self.getLine(i);var whitespace=line.slice(0,firstNonWS(line));if(baseString==null||baseString.length>whitespace.length){baseString=whitespace;}}
for(var i=from.line;i<end;++i){var line=self.getLine(i),cut=baseString.length;if(!blankLines&&!nonWS.test(line))continue;if(line.slice(0,cut)!=baseString)cut=firstNonWS(line);self.replaceRange(baseString+commentString+pad,Pos(i,0),Pos(i,cut));}}else{for(var i=from.line;i<end;++i){if(blankLines||nonWS.test(self.getLine(i)))
self.replaceRange(commentString+pad,Pos(i,0));}}});});CodeMirror.defineExtension("blockComment",function(from,to,options){if(!options)options=noOptions;var self=this,mode=self.getModeAt(from);var startString=options.blockCommentStart||mode.blockCommentStart;var endString=options.blockCommentEnd||mode.blockCommentEnd;if(!startString||!endString){if((options.lineComment||mode.lineComment)&&options.fullLines!=false)
self.lineComment(from,to,options);return;}
var end=Math.min(to.line,self.lastLine());if(end!=from.line&&to.ch==0&&nonWS.test(self.getLine(end)))--end;var pad=options.padding==null?" ":options.padding;if(from.line>end)return;self.operation(function(){if(options.fullLines!=false){var lastLineHasText=nonWS.test(self.getLine(end));self.replaceRange(pad+endString,Pos(end));self.replaceRange(startString+pad,Pos(from.line,0));var lead=options.blockCommentLead||mode.blockCommentLead;if(lead!=null)for(var i=from.line+1;i<=end;++i)
if(i!=end||lastLineHasText)
self.replaceRange(lead+pad,Pos(i,0));}else{self.replaceRange(endString,to);self.replaceRange(startString,from);}});});CodeMirror.defineExtension("uncomment",function(from,to,options){if(!options)options=noOptions;var self=this,mode=self.getModeAt(from);var end=Math.min(to.ch!=0||to.line==from.line?to.line:to.line-1,self.lastLine()),start=Math.min(from.line,end);var lineString=options.lineComment||mode.lineComment,lines=[];var pad=options.padding==null?" ":options.padding,didSomething;lineComment:{if(!lineString)break lineComment;for(var i=start;i<=end;++i){var line=self.getLine(i);var found=line.indexOf(lineString);if(found>-1&&!/comment/.test(self.getTokenTypeAt(Pos(i,found+1))))found=-1;if(found==-1&&(i!=end||i==start)&&nonWS.test(line))break lineComment;if(found>-1&&nonWS.test(line.slice(0,found)))break lineComment;lines.push(line);}
self.operation(function(){for(var i=start;i<=end;++i){var line=lines[i-start];var pos=line.indexOf(lineString),endPos=pos+lineString.length;if(pos<0)continue;if(line.slice(endPos,endPos+pad.length)==pad)endPos+=pad.length;didSomething=true;self.replaceRange("",Pos(i,pos),Pos(i,endPos));}});if(didSomething)return true;}
var startString=options.blockCommentStart||mode.blockCommentStart;var endString=options.blockCommentEnd||mode.blockCommentEnd;if(!startString||!endString)return false;var lead=options.blockCommentLead||mode.blockCommentLead;var startLine=self.getLine(start),endLine=end==start?startLine:self.getLine(end);var open=startLine.indexOf(startString),close=endLine.lastIndexOf(endString);if(close==-1&&start!=end){endLine=self.getLine(--end);close=endLine.lastIndexOf(endString);}
if(open==-1||close==-1||!/comment/.test(self.getTokenTypeAt(Pos(start,open+1)))||!/comment/.test(self.getTokenTypeAt(Pos(end,close+1))))
return false;var lastStart=startLine.lastIndexOf(startString,from.ch);var firstEnd=lastStart==-1?-1:startLine.slice(0,from.ch).indexOf(endString,lastStart+startString.length);if(lastStart!=-1&&firstEnd!=-1&&firstEnd+endString.length!=from.ch)return false;firstEnd=endLine.indexOf(endString,to.ch);var almostLastStart=endLine.slice(to.ch).lastIndexOf(startString,firstEnd-to.ch);lastStart=(firstEnd==-1||almostLastStart==-1)?-1:to.ch+almostLastStart;if(firstEnd!=-1&&lastStart!=-1&&lastStart!=to.ch)return false;self.operation(function(){self.replaceRange("",Pos(end,close-(pad&&endLine.slice(close-pad.length,close)==pad?pad.length:0)),Pos(end,close+endString.length));var openEnd=open+startString.length;if(pad&&startLine.slice(openEnd,openEnd+pad.length)==pad)openEnd+=pad.length;self.replaceRange("",Pos(start,open),Pos(start,openEnd));if(lead)for(var i=start+1;i<=end;++i){var line=self.getLine(i),found=line.indexOf(lead);if(found==-1||nonWS.test(line.slice(0,found)))continue;var foundEnd=found+lead.length;if(pad&&line.slice(foundEnd,foundEnd+pad.length)==pad)foundEnd+=pad.length;self.replaceRange("",Pos(i,found),Pos(i,foundEnd));}});return true;});});;(function(mod){if(typeof exports=="object"&&typeof module=="object")
mod(require("../../lib/codemirror"));else if(typeof define=="function"&&define.amd)
define(["../../lib/codemirror"],mod);else
mod(CodeMirror);})(function(CodeMirror){"use strict";CodeMirror.overlayMode=function(base,overlay,combine){return{startState:function(){return{base:CodeMirror.startState(base),overlay:CodeMirror.startState(overlay),basePos:0,baseCur:null,overlayPos:0,overlayCur:null,streamSeen:null};},copyState:function(state){return{base:CodeMirror.copyState(base,state.base),overlay:CodeMirror.copyState(overlay,state.overlay),basePos:state.basePos,baseCur:null,overlayPos:state.overlayPos,overlayCur:null};},token:function(stream,state){if(stream!=state.streamSeen||Math.min(state.basePos,state.overlayPos)<stream.start){state.streamSeen=stream;state.basePos=state.overlayPos=stream.start;}
if(stream.start==state.basePos){state.baseCur=base.token(stream,state.base);state.basePos=stream.pos;}
if(stream.start==state.overlayPos){stream.pos=stream.start;state.overlayCur=overlay.token(stream,state.overlay);state.overlayPos=stream.pos;}
stream.pos=Math.min(state.basePos,state.overlayPos);if(state.overlayCur==null)return state.baseCur;else if(state.baseCur!=null&&state.overlay.combineTokens||combine&&state.overlay.combineTokens==null)
return state.baseCur+" "+state.overlayCur;else return state.overlayCur;},indent:base.indent&&function(state,textAfter){return base.indent(state.base,textAfter);},electricChars:base.electricChars,innerMode:function(state){return{state:state.base,mode:base};},blankLine:function(state){if(base.blankLine)base.blankLine(state.base);if(overlay.blankLine)overlay.blankLine(state.overlay);}};};});;(function(mod){if(typeof exports=="object"&&typeof module=="object")
mod(require("../../lib/codemirror"));else if(typeof define=="function"&&define.amd)
define(["../../lib/codemirror"],mod);else
mod(CodeMirror);})(function(CodeMirror){"use strict";var WRAP_CLASS="CodeMirror-activeline";var BACK_CLASS="CodeMirror-activeline-background";var GUTT_CLASS="CodeMirror-activeline-gutter";CodeMirror.defineOption("styleActiveLine",false,function(cm,val,old){var prev=old&&old!=CodeMirror.Init;if(val&&!prev){cm.state.activeLines=[];updateActiveLines(cm,cm.listSelections());cm.on("beforeSelectionChange",selectionChange);}else if(!val&&prev){cm.off("beforeSelectionChange",selectionChange);clearActiveLines(cm);delete cm.state.activeLines;}});function clearActiveLines(cm){for(var i=0;i<cm.state.activeLines.length;i++){cm.removeLineClass(cm.state.activeLines[i],"wrap",WRAP_CLASS);cm.removeLineClass(cm.state.activeLines[i],"background",BACK_CLASS);cm.removeLineClass(cm.state.activeLines[i],"gutter",GUTT_CLASS);}}
function sameArray(a,b){if(a.length!=b.length)return false;for(var i=0;i<a.length;i++)
if(a[i]!=b[i])return false;return true;}
function updateActiveLines(cm,ranges){var active=[];for(var i=0;i<ranges.length;i++){var range=ranges[i];if(!range.empty())continue;var line=cm.getLineHandleVisualStart(range.head.line);if(active[active.length-1]!=line)active.push(line);}
if(sameArray(cm.state.activeLines,active))return;cm.operation(function(){clearActiveLines(cm);for(var i=0;i<active.length;i++){cm.addLineClass(active[i],"wrap",WRAP_CLASS);cm.addLineClass(active[i],"background",BACK_CLASS);cm.addLineClass(active[i],"gutter",GUTT_CLASS);}
cm.state.activeLines=active;});}
function selectionChange(cm,sel){updateActiveLines(cm,sel.ranges);}});;self['TextEditor']=self['TextEditor']||{};(function(mod){if(typeof exports=="object"&&typeof module=="object")
mod(require("../../lib/codemirror"));else if(typeof define=="function"&&define.amd)
define(["../../lib/codemirror"],mod);else
mod(CodeMirror);})(function(CodeMirror){"use strict";CodeMirror.defineMode("css",function(config,parserConfig){var inline=parserConfig.inline
if(!parserConfig.propertyKeywords)parserConfig=CodeMirror.resolveMode("text/css");var indentUnit=config.indentUnit,tokenHooks=parserConfig.tokenHooks,documentTypes=parserConfig.documentTypes||{},mediaTypes=parserConfig.mediaTypes||{},mediaFeatures=parserConfig.mediaFeatures||{},mediaValueKeywords=parserConfig.mediaValueKeywords||{},propertyKeywords=parserConfig.propertyKeywords||{},nonStandardPropertyKeywords=parserConfig.nonStandardPropertyKeywords||{},fontProperties=parserConfig.fontProperties||{},counterDescriptors=parserConfig.counterDescriptors||{},colorKeywords=parserConfig.colorKeywords||{},valueKeywords=parserConfig.valueKeywords||{},allowNested=parserConfig.allowNested,supportsAtComponent=parserConfig.supportsAtComponent===true;var type,override;function ret(style,tp){type=tp;return style;}
function tokenBase(stream,state){var ch=stream.next();if(tokenHooks[ch]){var result=tokenHooks[ch](stream,state);if(result!==false)return result;}
if(ch=="@"){stream.eatWhile(/[\w\\\-]/);return ret("def",stream.current());}else if(ch=="="||(ch=="~"||ch=="|")&&stream.eat("=")){return ret(null,"compare");}else if(ch=="\""||ch=="'"){state.tokenize=tokenString(ch);return state.tokenize(stream,state);}else if(ch=="#"){stream.eatWhile(/[\w\\\-]/);return ret("atom","hash");}else if(ch=="!"){stream.match(/^\s*\w*/);return ret("keyword","important");}else if(/\d/.test(ch)||ch=="."&&stream.eat(/\d/)){stream.eatWhile(/[\w.%]/);return ret("number","unit");}else if(ch==="-"){if(/[\d.]/.test(stream.peek())){stream.eatWhile(/[\w.%]/);return ret("number","unit");}else if(stream.match(/^-[\w\\\-]+/)){stream.eatWhile(/[\w\\\-]/);if(stream.match(/^\s*:/,false))
return ret("variable-2","variable-definition");return ret("variable-2","variable");}else if(stream.match(/^\w+-/)){return ret("meta","meta");}}else if(/[,+>*\/]/.test(ch)){return ret(null,"select-op");}else if(ch=="."&&stream.match(/^-?[_a-z][_a-z0-9-]*/i)){return ret("qualifier","qualifier");}else if(/[:;{}\[\]\(\)]/.test(ch)){return ret(null,ch);}else if((ch=="u"&&stream.match(/rl(-prefix)?\(/))||(ch=="d"&&stream.match("omain("))||(ch=="r"&&stream.match("egexp("))){stream.backUp(1);state.tokenize=tokenParenthesized;return ret("property","word");}else if(/[\w\\\-]/.test(ch)){stream.eatWhile(/[\w\\\-]/);return ret("property","word");}else{return ret(null,null);}}
function tokenString(quote){return function(stream,state){var escaped=false,ch;while((ch=stream.next())!=null){if(ch==quote&&!escaped){if(quote==")")stream.backUp(1);break;}
escaped=!escaped&&ch=="\\";}
if(ch==quote||!escaped&&quote!=")")state.tokenize=null;return ret("string","string");};}
function tokenParenthesized(stream,state){stream.next();if(!stream.match(/\s*[\"\')]/,false))
state.tokenize=tokenString(")");else
state.tokenize=null;return ret(null,"(");}
function Context(type,indent,prev){this.type=type;this.indent=indent;this.prev=prev;}
function pushContext(state,stream,type,indent){state.context=new Context(type,stream.indentation()+(indent===false?0:indentUnit),state.context);return type;}
function popContext(state){if(state.context.prev)
state.context=state.context.prev;return state.context.type;}
function pass(type,stream,state){return states[state.context.type](type,stream,state);}
function popAndPass(type,stream,state,n){for(var i=n||1;i>0;i--)
state.context=state.context.prev;return pass(type,stream,state);}
function wordAsValue(stream){var word=stream.current().toLowerCase();if(valueKeywords.hasOwnProperty(word))
override="atom";else if(colorKeywords.hasOwnProperty(word))
override="keyword";else
override="variable";}
var states={};states.top=function(type,stream,state){if(type=="{"){return pushContext(state,stream,"block");}else if(type=="}"&&state.context.prev){return popContext(state);}else if(supportsAtComponent&&/@component/.test(type)){return pushContext(state,stream,"atComponentBlock");}else if(/^@(-moz-)?document$/.test(type)){return pushContext(state,stream,"documentTypes");}else if(/^@(media|supports|(-moz-)?document|import)$/.test(type)){return pushContext(state,stream,"atBlock");}else if(/^@(font-face|counter-style)/.test(type)){state.stateArg=type;return"restricted_atBlock_before";}else if(/^@(-(moz|ms|o|webkit)-)?keyframes$/.test(type)){return"keyframes";}else if(type&&type.charAt(0)=="@"){return pushContext(state,stream,"at");}else if(type=="hash"){override="builtin";}else if(type=="word"){override="tag";}else if(type=="variable-definition"){return"maybeprop";}else if(type=="interpolation"){return pushContext(state,stream,"interpolation");}else if(type==":"){return"pseudo";}else if(allowNested&&type=="("){return pushContext(state,stream,"parens");}
return state.context.type;};states.block=function(type,stream,state){if(type=="word"){var word=stream.current().toLowerCase();if(propertyKeywords.hasOwnProperty(word)){override="property";return"maybeprop";}else if(nonStandardPropertyKeywords.hasOwnProperty(word)){override="string-2";return"maybeprop";}else if(allowNested){override=stream.match(/^\s*:(?:\s|$)/,false)?"property":"tag";return"block";}else{override+=" error";return"maybeprop";}}else if(type=="meta"){return"block";}else if(!allowNested&&(type=="hash"||type=="qualifier")){override="error";return"block";}else{return states.top(type,stream,state);}};states.maybeprop=function(type,stream,state){if(type==":")return pushContext(state,stream,"prop");return pass(type,stream,state);};states.prop=function(type,stream,state){if(type==";")return popContext(state);if(type=="{"&&allowNested)return pushContext(state,stream,"propBlock");if(type=="}"||type=="{")return popAndPass(type,stream,state);if(type=="(")return pushContext(state,stream,"parens");if(type=="hash"&&!/^#([0-9a-fA-f]{3,4}|[0-9a-fA-f]{6}|[0-9a-fA-f]{8})$/.test(stream.current())){override+=" error";}else if(type=="word"){wordAsValue(stream);}else if(type=="interpolation"){return pushContext(state,stream,"interpolation");}
return"prop";};states.propBlock=function(type,_stream,state){if(type=="}")return popContext(state);if(type=="word"){override="property";return"maybeprop";}
return state.context.type;};states.parens=function(type,stream,state){if(type=="{"||type=="}")return popAndPass(type,stream,state);if(type==")")return popContext(state);if(type=="(")return pushContext(state,stream,"parens");if(type=="interpolation")return pushContext(state,stream,"interpolation");if(type=="word")wordAsValue(stream);return"parens";};states.pseudo=function(type,stream,state){if(type=="word"){override="variable-3";return state.context.type;}
return pass(type,stream,state);};states.documentTypes=function(type,stream,state){if(type=="word"&&documentTypes.hasOwnProperty(stream.current())){override="tag";return state.context.type;}else{return states.atBlock(type,stream,state);}};states.atBlock=function(type,stream,state){if(type=="(")return pushContext(state,stream,"atBlock_parens");if(type=="}"||type==";")return popAndPass(type,stream,state);if(type=="{")return popContext(state)&&pushContext(state,stream,allowNested?"block":"top");if(type=="interpolation")return pushContext(state,stream,"interpolation");if(type=="word"){var word=stream.current().toLowerCase();if(word=="only"||word=="not"||word=="and"||word=="or")
override="keyword";else if(mediaTypes.hasOwnProperty(word))
override="attribute";else if(mediaFeatures.hasOwnProperty(word))
override="property";else if(mediaValueKeywords.hasOwnProperty(word))
override="keyword";else if(propertyKeywords.hasOwnProperty(word))
override="property";else if(nonStandardPropertyKeywords.hasOwnProperty(word))
override="string-2";else if(valueKeywords.hasOwnProperty(word))
override="atom";else if(colorKeywords.hasOwnProperty(word))
override="keyword";else
override="error";}
return state.context.type;};states.atComponentBlock=function(type,stream,state){if(type=="}")
return popAndPass(type,stream,state);if(type=="{")
return popContext(state)&&pushContext(state,stream,allowNested?"block":"top",false);if(type=="word")
override="error";return state.context.type;};states.atBlock_parens=function(type,stream,state){if(type==")")return popContext(state);if(type=="{"||type=="}")return popAndPass(type,stream,state,2);return states.atBlock(type,stream,state);};states.restricted_atBlock_before=function(type,stream,state){if(type=="{")
return pushContext(state,stream,"restricted_atBlock");if(type=="word"&&state.stateArg=="@counter-style"){override="variable";return"restricted_atBlock_before";}
return pass(type,stream,state);};states.restricted_atBlock=function(type,stream,state){if(type=="}"){state.stateArg=null;return popContext(state);}
if(type=="word"){if((state.stateArg=="@font-face"&&!fontProperties.hasOwnProperty(stream.current().toLowerCase()))||(state.stateArg=="@counter-style"&&!counterDescriptors.hasOwnProperty(stream.current().toLowerCase())))
override="error";else
override="property";return"maybeprop";}
return"restricted_atBlock";};states.keyframes=function(type,stream,state){if(type=="word"){override="variable";return"keyframes";}
if(type=="{")return pushContext(state,stream,"top");return pass(type,stream,state);};states.at=function(type,stream,state){if(type==";")return popContext(state);if(type=="{"||type=="}")return popAndPass(type,stream,state);if(type=="word")override="tag";else if(type=="hash")override="builtin";return"at";};states.interpolation=function(type,stream,state){if(type=="}")return popContext(state);if(type=="{"||type==";")return popAndPass(type,stream,state);if(type=="word")override="variable";else if(type!="variable"&&type!="("&&type!=")")override="error";return"interpolation";};return{startState:function(base){return{tokenize:null,state:inline?"block":"top",stateArg:null,context:new Context(inline?"block":"top",base||0,null)};},token:function(stream,state){if(!state.tokenize&&stream.eatSpace())return null;var style=(state.tokenize||tokenBase)(stream,state);if(style&&typeof style=="object"){type=style[1];style=style[0];}
override=style;state.state=states[state.state](type,stream,state);return override;},indent:function(state,textAfter){var cx=state.context,ch=textAfter&&textAfter.charAt(0);var indent=cx.indent;if(cx.type=="prop"&&(ch=="}"||ch==")"))cx=cx.prev;if(cx.prev){if(ch=="}"&&(cx.type=="block"||cx.type=="top"||cx.type=="interpolation"||cx.type=="restricted_atBlock")){cx=cx.prev;indent=cx.indent;}else if(ch==")"&&(cx.type=="parens"||cx.type=="atBlock_parens")||ch=="{"&&(cx.type=="at"||cx.type=="atBlock")){indent=Math.max(0,cx.indent-indentUnit);cx=cx.prev;}}
return indent;},electricChars:"}",blockCommentStart:"/*",blockCommentEnd:"*/",fold:"brace"};});function keySet(array){var keys={};for(var i=0;i<array.length;++i){keys[array[i]]=true;}
return keys;}
var documentTypes_=["domain","regexp","url","url-prefix"],documentTypes=keySet(documentTypes_);var mediaTypes_=["all","aural","braille","handheld","print","projection","screen","tty","tv","embossed"],mediaTypes=keySet(mediaTypes_);var mediaFeatures_=["width","min-width","max-width","height","min-height","max-height","device-width","min-device-width","max-device-width","device-height","min-device-height","max-device-height","aspect-ratio","min-aspect-ratio","max-aspect-ratio","device-aspect-ratio","min-device-aspect-ratio","max-device-aspect-ratio","color","min-color","max-color","color-index","min-color-index","max-color-index","monochrome","min-monochrome","max-monochrome","resolution","min-resolution","max-resolution","scan","grid","orientation","device-pixel-ratio","min-device-pixel-ratio","max-device-pixel-ratio","pointer","any-pointer","hover","any-hover"],mediaFeatures=keySet(mediaFeatures_);var mediaValueKeywords_=["landscape","portrait","none","coarse","fine","on-demand","hover","interlace","progressive"],mediaValueKeywords=keySet(mediaValueKeywords_);var propertyKeywords_=["align-content","align-items","align-self","alignment-adjust","alignment-baseline","anchor-point","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","appearance","azimuth","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-repeat","background-size","baseline-shift","binding","bleed","bookmark-label","bookmark-level","bookmark-state","bookmark-target","border","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","clear","clip","color","color-profile","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","content","counter-increment","counter-reset","crop","cue","cue-after","cue-before","cursor","direction","display","dominant-baseline","drop-initial-after-adjust","drop-initial-after-align","drop-initial-before-adjust","drop-initial-before-align","drop-initial-size","drop-initial-value","elevation","empty-cells","fit","fit-position","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","float-offset","flow-from","flow-into","font","font-feature-settings","font-family","font-kerning","font-language-override","font-size","font-size-adjust","font-stretch","font-style","font-synthesis","font-variant","font-variant-alternates","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-weight","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-gap","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-gap","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphens","icon","image-orientation","image-rendering","image-resolution","inline-box-align","justify-content","left","letter-spacing","line-break","line-height","line-stacking","line-stacking-ruby","line-stacking-shift","line-stacking-strategy","list-style","list-style-image","list-style-position","list-style-type","margin","margin-bottom","margin-left","margin-right","margin-top","marker-offset","marks","marquee-direction","marquee-loop","marquee-play-count","marquee-speed","marquee-style","max-height","max-width","min-height","min-width","move-to","nav-down","nav-index","nav-left","nav-right","nav-up","object-fit","object-position","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-style","overflow-wrap","overflow-x","overflow-y","padding","padding-bottom","padding-left","padding-right","padding-top","page","page-break-after","page-break-before","page-break-inside","page-policy","pause","pause-after","pause-before","perspective","perspective-origin","pitch","pitch-range","play-during","position","presentation-level","punctuation-trim","quotes","region-break-after","region-break-before","region-break-inside","region-fragment","rendering-intent","resize","rest","rest-after","rest-before","richness","right","rotation","rotation-point","ruby-align","ruby-overhang","ruby-position","ruby-span","shape-image-threshold","shape-inside","shape-margin","shape-outside","size","speak","speak-as","speak-header","speak-numeral","speak-punctuation","speech-rate","stress","string-set","tab-size","table-layout","target","target-name","target-new","target-position","text-align","text-align-last","text-decoration","text-decoration-color","text-decoration-line","text-decoration-skip","text-decoration-style","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-height","text-indent","text-justify","text-outline","text-overflow","text-shadow","text-size-adjust","text-space-collapse","text-transform","text-underline-position","text-wrap","top","transform","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","unicode-bidi","vertical-align","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","volume","white-space","widows","width","word-break","word-spacing","word-wrap","z-index","clip-path","clip-rule","mask","enable-background","filter","flood-color","flood-opacity","lighting-color","stop-color","stop-opacity","pointer-events","color-interpolation","color-interpolation-filters","color-rendering","fill","fill-opacity","fill-rule","image-rendering","marker","marker-end","marker-mid","marker-start","shape-rendering","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-rendering","baseline-shift","dominant-baseline","glyph-orientation-horizontal","glyph-orientation-vertical","text-anchor","writing-mode"],propertyKeywords=keySet(propertyKeywords_);var nonStandardPropertyKeywords_=["scrollbar-arrow-color","scrollbar-base-color","scrollbar-dark-shadow-color","scrollbar-face-color","scrollbar-highlight-color","scrollbar-shadow-color","scrollbar-3d-light-color","scrollbar-track-color","shape-inside","searchfield-cancel-button","searchfield-decoration","searchfield-results-button","searchfield-results-decoration","zoom"],nonStandardPropertyKeywords=keySet(nonStandardPropertyKeywords_);var fontProperties_=["font-family","src","unicode-range","font-variant","font-feature-settings","font-stretch","font-weight","font-style"],fontProperties=keySet(fontProperties_);var counterDescriptors_=["additive-symbols","fallback","negative","pad","prefix","range","speak-as","suffix","symbols","system"],counterDescriptors=keySet(counterDescriptors_);var colorKeywords_=["aliceblue","antiquewhite","aqua","aquamarine","azure","beige","bisque","black","blanchedalmond","blue","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgreen","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dodgerblue","firebrick","floralwhite","forestgreen","fuchsia","gainsboro","ghostwhite","gold","goldenrod","gray","grey","green","greenyellow","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgreen","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightsteelblue","lightyellow","lime","limegreen","linen","magenta","maroon","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","navy","oldlace","olive","olivedrab","orange","orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","purple","rebeccapurple","red","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","silver","skyblue","slateblue","slategray","snow","springgreen","steelblue","tan","teal","thistle","tomato","turquoise","violet","wheat","white","whitesmoke","yellow","yellowgreen"],colorKeywords=keySet(colorKeywords_);var valueKeywords_=["above","absolute","activeborder","additive","activecaption","afar","after-white-space","ahead","alias","all","all-scroll","alphabetic","alternate","always","amharic","amharic-abegede","antialiased","appworkspace","arabic-indic","armenian","asterisks","attr","auto","avoid","avoid-column","avoid-page","avoid-region","background","backwards","baseline","below","bidi-override","binary","bengali","blink","block","block-axis","bold","bolder","border","border-box","both","bottom","break","break-all","break-word","bullets","button","button-bevel","buttonface","buttonhighlight","buttonshadow","buttontext","calc","cambodian","capitalize","caps-lock-indicator","caption","captiontext","caret","cell","center","checkbox","circle","cjk-decimal","cjk-earthly-branch","cjk-heavenly-stem","cjk-ideographic","clear","clip","close-quote","col-resize","collapse","color","color-burn","color-dodge","column","column-reverse","compact","condensed","contain","content","content-box","context-menu","continuous","copy","counter","counters","cover","crop","cross","crosshair","currentcolor","cursive","cyclic","darken","dashed","decimal","decimal-leading-zero","default","default-button","dense","destination-atop","destination-in","destination-out","destination-over","devanagari","difference","disc","discard","disclosure-closed","disclosure-open","document","dot-dash","dot-dot-dash","dotted","double","down","e-resize","ease","ease-in","ease-in-out","ease-out","element","ellipse","ellipsis","embed","end","ethiopic","ethiopic-abegede","ethiopic-abegede-am-et","ethiopic-abegede-gez","ethiopic-abegede-ti-er","ethiopic-abegede-ti-et","ethiopic-halehame-aa-er","ethiopic-halehame-aa-et","ethiopic-halehame-am-et","ethiopic-halehame-gez","ethiopic-halehame-om-et","ethiopic-halehame-sid-et","ethiopic-halehame-so-et","ethiopic-halehame-ti-er","ethiopic-halehame-ti-et","ethiopic-halehame-tig","ethiopic-numeric","ew-resize","exclusion","expanded","extends","extra-condensed","extra-expanded","fantasy","fast","fill","fixed","flat","flex","flex-end","flex-start","footnotes","forwards","from","geometricPrecision","georgian","graytext","grid","groove","gujarati","gurmukhi","hand","hangul","hangul-consonant","hard-light","hebrew","help","hidden","hide","higher","highlight","highlighttext","hiragana","hiragana-iroha","horizontal","hsl","hsla","hue","icon","ignore","inactiveborder","inactivecaption","inactivecaptiontext","infinite","infobackground","infotext","inherit","initial","inline","inline-axis","inline-block","inline-flex","inline-grid","inline-table","inset","inside","intrinsic","invert","italic","japanese-formal","japanese-informal","justify","kannada","katakana","katakana-iroha","keep-all","khmer","korean-hangul-formal","korean-hanja-formal","korean-hanja-informal","landscape","lao","large","larger","left","level","lighter","lighten","line-through","linear","linear-gradient","lines","list-item","listbox","listitem","local","logical","loud","lower","lower-alpha","lower-armenian","lower-greek","lower-hexadecimal","lower-latin","lower-norwegian","lower-roman","lowercase","ltr","luminosity","malayalam","match","matrix","matrix3d","media-controls-background","media-current-time-display","media-fullscreen-button","media-mute-button","media-play-button","media-return-to-realtime-button","media-rewind-button","media-seek-back-button","media-seek-forward-button","media-slider","media-sliderthumb","media-time-remaining-display","media-volume-slider","media-volume-slider-container","media-volume-sliderthumb","medium","menu","menulist","menulist-button","menulist-text","menulist-textfield","menutext","message-box","middle","min-intrinsic","mix","mongolian","monospace","move","multiple","multiply","myanmar","n-resize","narrower","ne-resize","nesw-resize","no-close-quote","no-drop","no-open-quote","no-repeat","none","normal","not-allowed","nowrap","ns-resize","numbers","numeric","nw-resize","nwse-resize","oblique","octal","open-quote","optimizeLegibility","optimizeSpeed","oriya","oromo","outset","outside","outside-shape","overlay","overline","padding","padding-box","painted","page","paused","persian","perspective","plus-darker","plus-lighter","pointer","polygon","portrait","pre","pre-line","pre-wrap","preserve-3d","progress","push-button","radial-gradient","radio","read-only","read-write","read-write-plaintext-only","rectangle","region","relative","repeat","repeating-linear-gradient","repeating-radial-gradient","repeat-x","repeat-y","reset","reverse","rgb","rgba","ridge","right","rotate","rotate3d","rotateX","rotateY","rotateZ","round","row","row-resize","row-reverse","rtl","run-in","running","s-resize","sans-serif","saturation","scale","scale3d","scaleX","scaleY","scaleZ","screen","scroll","scrollbar","se-resize","searchfield","searchfield-cancel-button","searchfield-decoration","searchfield-results-button","searchfield-results-decoration","semi-condensed","semi-expanded","separate","serif","show","sidama","simp-chinese-formal","simp-chinese-informal","single","skew","skewX","skewY","skip-white-space","slide","slider-horizontal","slider-vertical","sliderthumb-horizontal","sliderthumb-vertical","slow","small","small-caps","small-caption","smaller","soft-light","solid","somali","source-atop","source-in","source-out","source-over","space","space-around","space-between","spell-out","square","square-button","start","static","status-bar","stretch","stroke","sub","subpixel-antialiased","super","sw-resize","symbolic","symbols","table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row","table-row-group","tamil","telugu","text","text-bottom","text-top","textarea","textfield","thai","thick","thin","threeddarkshadow","threedface","threedhighlight","threedlightshadow","threedshadow","tibetan","tigre","tigrinya-er","tigrinya-er-abegede","tigrinya-et","tigrinya-et-abegede","to","top","trad-chinese-formal","trad-chinese-informal","translate","translate3d","translateX","translateY","translateZ","transparent","ultra-condensed","ultra-expanded","underline","up","upper-alpha","upper-armenian","upper-greek","upper-hexadecimal","upper-latin","upper-norwegian","upper-roman","uppercase","urdu","url","var","vertical","vertical-text","visible","visibleFill","visiblePainted","visibleStroke","visual","w-resize","wait","wave","wider","window","windowframe","windowtext","words","wrap","wrap-reverse","x-large","x-small","xor","xx-large","xx-small"],valueKeywords=keySet(valueKeywords_);var allWords=documentTypes_.concat(mediaTypes_).concat(mediaFeatures_).concat(mediaValueKeywords_).concat(propertyKeywords_).concat(nonStandardPropertyKeywords_).concat(colorKeywords_).concat(valueKeywords_);CodeMirror.registerHelper("hintWords","css",allWords);function tokenCComment(stream,state){var maybeEnd=false,ch;while((ch=stream.next())!=null){if(maybeEnd&&ch=="/"){state.tokenize=null;break;}
maybeEnd=(ch=="*");}
return["comment","comment"];}
CodeMirror.defineMIME("text/css",{documentTypes:documentTypes,mediaTypes:mediaTypes,mediaFeatures:mediaFeatures,mediaValueKeywords:mediaValueKeywords,propertyKeywords:propertyKeywords,nonStandardPropertyKeywords:nonStandardPropertyKeywords,fontProperties:fontProperties,counterDescriptors:counterDescriptors,colorKeywords:colorKeywords,valueKeywords:valueKeywords,tokenHooks:{"/":function(stream,state){if(!stream.eat("*"))return false;state.tokenize=tokenCComment;return tokenCComment(stream,state);}},name:"css"});CodeMirror.defineMIME("text/x-scss",{mediaTypes:mediaTypes,mediaFeatures:mediaFeatures,mediaValueKeywords:mediaValueKeywords,propertyKeywords:propertyKeywords,nonStandardPropertyKeywords:nonStandardPropertyKeywords,colorKeywords:colorKeywords,valueKeywords:valueKeywords,fontProperties:fontProperties,allowNested:true,tokenHooks:{"/":function(stream,state){if(stream.eat("/")){stream.skipToEnd();return["comment","comment"];}else if(stream.eat("*")){state.tokenize=tokenCComment;return tokenCComment(stream,state);}else{return["operator","operator"];}},":":function(stream){if(stream.match(/\s*\{/))
return[null,"{"];return false;},"$":function(stream){stream.match(/^[\w-]+/);if(stream.match(/^\s*:/,false))
return["variable-2","variable-definition"];return["variable-2","variable"];},"#":function(stream){if(!stream.eat("{"))return false;return[null,"interpolation"];}},name:"css",helperType:"scss"});CodeMirror.defineMIME("text/x-less",{mediaTypes:mediaTypes,mediaFeatures:mediaFeatures,mediaValueKeywords:mediaValueKeywords,propertyKeywords:propertyKeywords,nonStandardPropertyKeywords:nonStandardPropertyKeywords,colorKeywords:colorKeywords,valueKeywords:valueKeywords,fontProperties:fontProperties,allowNested:true,tokenHooks:{"/":function(stream,state){if(stream.eat("/")){stream.skipToEnd();return["comment","comment"];}else if(stream.eat("*")){state.tokenize=tokenCComment;return tokenCComment(stream,state);}else{return["operator","operator"];}},"@":function(stream){if(stream.eat("{"))return[null,"interpolation"];if(stream.match(/^(charset|document|font-face|import|(-(moz|ms|o|webkit)-)?keyframes|media|namespace|page|supports)\b/,false))return false;stream.eatWhile(/[\w\\\-]/);if(stream.match(/^\s*:/,false))
return["variable-2","variable-definition"];return["variable-2","variable"];},"&":function(){return["atom","atom"];}},name:"css",helperType:"less"});CodeMirror.defineMIME("text/x-gss",{documentTypes:documentTypes,mediaTypes:mediaTypes,mediaFeatures:mediaFeatures,propertyKeywords:propertyKeywords,nonStandardPropertyKeywords:nonStandardPropertyKeywords,fontProperties:fontProperties,counterDescriptors:counterDescriptors,colorKeywords:colorKeywords,valueKeywords:valueKeywords,supportsAtComponent:true,tokenHooks:{"/":function(stream,state){if(!stream.eat("*"))return false;state.tokenize=tokenCComment;return tokenCComment(stream,state);}},name:"css",helperType:"gss"});});;(function(mod){if(typeof exports=="object"&&typeof module=="object")
mod(require("../../lib/codemirror"));else if(typeof define=="function"&&define.amd)
define(["../../lib/codemirror"],mod);else
mod(CodeMirror);})(function(CodeMirror){"use strict";function expressionAllowed(stream,state,backUp){return/^(?:operator|sof|keyword c|case|new|[\[{}\(,;:]|=>)$/.test(state.lastType)||(state.lastType=="quasi"&&/\{\s*$/.test(stream.string.slice(0,stream.pos-(backUp||0))))}
CodeMirror.defineMode("javascript",function(config,parserConfig){var indentUnit=config.indentUnit;var statementIndent=parserConfig.statementIndent;var jsonldMode=parserConfig.jsonld;var jsonMode=parserConfig.json||jsonldMode;var isTS=parserConfig.typescript;var wordRE=parserConfig.wordCharacters||/[\w$\xa1-\uffff]/;var keywords=function(){function kw(type){return{type:type,style:"keyword"};}
var A=kw("keyword a"),B=kw("keyword b"),C=kw("keyword c");var operator=kw("operator"),atom={type:"atom",style:"atom"};var jsKeywords={"if":kw("if"),"while":A,"with":A,"else":B,"do":B,"try":B,"finally":B,"return":C,"break":C,"continue":C,"new":kw("new"),"delete":C,"throw":C,"debugger":C,"var":kw("var"),"const":kw("var"),"let":kw("var"),"function":kw("function"),"catch":kw("catch"),"for":kw("for"),"switch":kw("switch"),"case":kw("case"),"default":kw("default"),"in":operator,"typeof":operator,"instanceof":operator,"true":atom,"false":atom,"null":atom,"undefined":atom,"NaN":atom,"Infinity":atom,"this":kw("this"),"class":kw("class"),"super":kw("atom"),"yield":C,"export":kw("export"),"import":kw("import"),"extends":C,"await":C,"async":kw("async")};if(isTS){var type={type:"variable",style:"variable-3"};var tsKeywords={"interface":kw("class"),"implements":C,"namespace":C,"module":kw("module"),"enum":kw("module"),"type":kw("type"),"public":kw("modifier"),"private":kw("modifier"),"protected":kw("modifier"),"abstract":kw("modifier"),"as":operator,"string":type,"number":type,"boolean":type,"any":type};for(var attr in tsKeywords){jsKeywords[attr]=tsKeywords[attr];}}
return jsKeywords;}();var isOperatorChar=/[+\-*&%=<>!?|~^]/;var isJsonldKeyword=/^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;function readRegexp(stream){var escaped=false,next,inSet=false;while((next=stream.next())!=null){if(!escaped){if(next=="/"&&!inSet)return;if(next=="[")inSet=true;else if(inSet&&next=="]")inSet=false;}
escaped=!escaped&&next=="\\";}}
var type,content;function ret(tp,style,cont){type=tp;content=cont;return style;}
function tokenBase(stream,state){var ch=stream.next();if(ch=='"'||ch=="'"){state.tokenize=tokenString(ch);return state.tokenize(stream,state);}else if(ch=="."&&stream.match(/^\d+(?:[eE][+\-]?\d+)?/)){return ret("number","number");}else if(ch=="."&&stream.match("..")){return ret("spread","meta");}else if(/[\[\]{}\(\),;\:\.]/.test(ch)){return ret(ch);}else if(ch=="="&&stream.eat(">")){return ret("=>","operator");}else if(ch=="0"&&stream.eat(/x/i)){stream.eatWhile(/[\da-f]/i);return ret("number","number");}else if(ch=="0"&&stream.eat(/o/i)){stream.eatWhile(/[0-7]/i);return ret("number","number");}else if(ch=="0"&&stream.eat(/b/i)){stream.eatWhile(/[01]/i);return ret("number","number");}else if(/\d/.test(ch)){stream.match(/^\d*(?:\.\d*)?(?:[eE][+\-]?\d+)?/);return ret("number","number");}else if(ch=="/"){if(stream.eat("*")){state.tokenize=tokenComment;return tokenComment(stream,state);}else if(stream.eat("/")){stream.skipToEnd();return ret("comment","comment");}else if(expressionAllowed(stream,state,1)){readRegexp(stream);stream.match(/^\b(([gimyu])(?![gimyu]*\2))+\b/);return ret("regexp","string-2");}else{stream.eatWhile(isOperatorChar);return ret("operator","operator",stream.current());}}else if(ch=="`"){state.tokenize=tokenQuasi;return tokenQuasi(stream,state);}else if(ch=="#"){stream.skipToEnd();return ret("error","error");}else if(isOperatorChar.test(ch)){stream.eatWhile(isOperatorChar);return ret("operator","operator",stream.current());}else if(wordRE.test(ch)){stream.eatWhile(wordRE);var word=stream.current(),known=keywords.propertyIsEnumerable(word)&&keywords[word];return(known&&state.lastType!=".")?ret(known.type,known.style,word):ret("variable","variable",word);}}
function tokenString(quote){return function(stream,state){var escaped=false,next;if(jsonldMode&&stream.peek()=="@"&&stream.match(isJsonldKeyword)){state.tokenize=tokenBase;return ret("jsonld-keyword","meta");}
while((next=stream.next())!=null){if(next==quote&&!escaped)break;escaped=!escaped&&next=="\\";}
if(!escaped)state.tokenize=tokenBase;return ret("string","string");};}
function tokenComment(stream,state){var maybeEnd=false,ch;while(ch=stream.next()){if(ch=="/"&&maybeEnd){state.tokenize=tokenBase;break;}
maybeEnd=(ch=="*");}
return ret("comment","comment");}
function tokenQuasi(stream,state){var escaped=false,next;while((next=stream.next())!=null){if(!escaped&&(next=="`"||next=="$"&&stream.eat("{"))){state.tokenize=tokenBase;break;}
escaped=!escaped&&next=="\\";}
return ret("quasi","string-2",stream.current());}
var brackets="([{}])";function findFatArrow(stream,state){if(state.fatArrowAt)state.fatArrowAt=null;var arrow=stream.string.indexOf("=>",stream.start);if(arrow<0)return;if(isTS){var m=/:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(stream.string.slice(stream.start,arrow))
if(m)arrow=m.index}
var depth=0,sawSomething=false;for(var pos=arrow-1;pos>=0;--pos){var ch=stream.string.charAt(pos);var bracket=brackets.indexOf(ch);if(bracket>=0&&bracket<3){if(!depth){++pos;break;}
if(--depth==0){if(ch=="(")sawSomething=true;break;}}else if(bracket>=3&&bracket<6){++depth;}else if(wordRE.test(ch)){sawSomething=true;}else if(/["'\/]/.test(ch)){return;}else if(sawSomething&&!depth){++pos;break;}}
if(sawSomething&&!depth)state.fatArrowAt=pos;}
var atomicTypes={"atom":true,"number":true,"variable":true,"string":true,"regexp":true,"this":true,"jsonld-keyword":true};function JSLexical(indented,column,type,align,prev,info){this.indented=indented;this.column=column;this.type=type;this.prev=prev;this.info=info;if(align!=null)this.align=align;}
function inScope(state,varname){for(var v=state.localVars;v;v=v.next)
if(v.name==varname)return true;for(var cx=state.context;cx;cx=cx.prev){for(var v=cx.vars;v;v=v.next)
if(v.name==varname)return true;}}
function parseJS(state,style,type,content,stream){var cc=state.cc;cx.state=state;cx.stream=stream;cx.marked=null,cx.cc=cc;cx.style=style;if(!state.lexical.hasOwnProperty("align"))
state.lexical.align=true;while(true){var combinator=cc.length?cc.pop():jsonMode?expression:statement;if(combinator(type,content)){while(cc.length&&cc[cc.length-1].lex)
cc.pop()();if(cx.marked)return cx.marked;if(type=="variable"&&inScope(state,content))return"variable-2";return style;}}}
var cx={state:null,column:null,marked:null,cc:null};function pass(){for(var i=arguments.length-1;i>=0;i--)cx.cc.push(arguments[i]);}
function cont(){pass.apply(null,arguments);return true;}
function register(varname){function inList(list){for(var v=list;v;v=v.next)
if(v.name==varname)return true;return false;}
var state=cx.state;cx.marked="def";if(state.context){if(inList(state.localVars))return;state.localVars={name:varname,next:state.localVars};}else{if(inList(state.globalVars))return;if(parserConfig.globalVars)
state.globalVars={name:varname,next:state.globalVars};}}
var defaultVars={name:"this",next:{name:"arguments"}};function pushcontext(){cx.state.context={prev:cx.state.context,vars:cx.state.localVars};cx.state.localVars=defaultVars;}
function popcontext(){cx.state.localVars=cx.state.context.vars;cx.state.context=cx.state.context.prev;}
function pushlex(type,info){var result=function(){var state=cx.state,indent=state.indented;if(state.lexical.type=="stat")indent=state.lexical.indented;else for(var outer=state.lexical;outer&&outer.type==")"&&outer.align;outer=outer.prev)
indent=outer.indented;state.lexical=new JSLexical(indent,cx.stream.column(),type,null,state.lexical,info);};result.lex=true;return result;}
function poplex(){var state=cx.state;if(state.lexical.prev){if(state.lexical.type==")")
state.indented=state.lexical.indented;state.lexical=state.lexical.prev;}}
poplex.lex=true;function expect(wanted){function exp(type){if(type==wanted)return cont();else if(wanted==";")return pass();else return cont(exp);};return exp;}
function statement(type,value){if(type=="var")return cont(pushlex("vardef",value.length),vardef,expect(";"),poplex);if(type=="keyword a")return cont(pushlex("form"),parenExpr,statement,poplex);if(type=="keyword b")return cont(pushlex("form"),statement,poplex);if(type=="{")return cont(pushlex("}"),block,poplex);if(type==";")return cont();if(type=="if"){if(cx.state.lexical.info=="else"&&cx.state.cc[cx.state.cc.length-1]==poplex)
cx.state.cc.pop()();return cont(pushlex("form"),parenExpr,statement,poplex,maybeelse);}
if(type=="function")return cont(functiondef);if(type=="for")return cont(pushlex("form"),forspec,statement,poplex);if(type=="variable")return cont(pushlex("stat"),maybelabel);if(type=="switch")return cont(pushlex("form"),parenExpr,pushlex("}","switch"),expect("{"),block,poplex,poplex);if(type=="case")return cont(expression,expect(":"));if(type=="default")return cont(expect(":"));if(type=="catch")return cont(pushlex("form"),pushcontext,expect("("),funarg,expect(")"),statement,poplex,popcontext);if(type=="class")return cont(pushlex("form"),className,poplex);if(type=="export")return cont(pushlex("stat"),afterExport,poplex);if(type=="import")return cont(pushlex("stat"),afterImport,poplex);if(type=="module")return cont(pushlex("form"),pattern,pushlex("}"),expect("{"),block,poplex,poplex)
if(type=="type")return cont(typeexpr,expect("operator"),typeexpr,expect(";"));if(type=="async")return cont(statement)
return pass(pushlex("stat"),expression,expect(";"),poplex);}
function expression(type){return expressionInner(type,false);}
function expressionNoComma(type){return expressionInner(type,true);}
function parenExpr(type){if(type!="(")return pass()
return cont(pushlex(")"),expression,expect(")"),poplex)}
function expressionInner(type,noComma){if(cx.state.fatArrowAt==cx.stream.start){var body=noComma?arrowBodyNoComma:arrowBody;if(type=="(")return cont(pushcontext,pushlex(")"),commasep(pattern,")"),poplex,expect("=>"),body,popcontext);else if(type=="variable")return pass(pushcontext,pattern,expect("=>"),body,popcontext);}
var maybeop=noComma?maybeoperatorNoComma:maybeoperatorComma;if(atomicTypes.hasOwnProperty(type))return cont(maybeop);if(type=="function")return cont(functiondef,maybeop);if(type=="class")return cont(pushlex("form"),classExpression,poplex);if(type=="keyword c"||type=="async")return cont(noComma?maybeexpressionNoComma:maybeexpression);if(type=="(")return cont(pushlex(")"),maybeexpression,expect(")"),poplex,maybeop);if(type=="operator"||type=="spread")return cont(noComma?expressionNoComma:expression);if(type=="[")return cont(pushlex("]"),arrayLiteral,poplex,maybeop);if(type=="{")return contCommasep(objprop,"}",null,maybeop);if(type=="quasi")return pass(quasi,maybeop);if(type=="new")return cont(maybeTarget(noComma));return cont();}
function maybeexpression(type){if(type.match(/[;\}\)\],]/))return pass();return pass(expression);}
function maybeexpressionNoComma(type){if(type.match(/[;\}\)\],]/))return pass();return pass(expressionNoComma);}
function maybeoperatorComma(type,value){if(type==",")return cont(expression);return maybeoperatorNoComma(type,value,false);}
function maybeoperatorNoComma(type,value,noComma){var me=noComma==false?maybeoperatorComma:maybeoperatorNoComma;var expr=noComma==false?expression:expressionNoComma;if(type=="=>")return cont(pushcontext,noComma?arrowBodyNoComma:arrowBody,popcontext);if(type=="operator"){if(/\+\+|--/.test(value))return cont(me);if(value=="?")return cont(expression,expect(":"),expr);return cont(expr);}
if(type=="quasi"){return pass(quasi,me);}
if(type==";")return;if(type=="(")return contCommasep(expressionNoComma,")","call",me);if(type==".")return cont(property,me);if(type=="[")return cont(pushlex("]"),maybeexpression,expect("]"),poplex,me);}
function quasi(type,value){if(type!="quasi")return pass();if(value.slice(value.length-2)!="${")return cont(quasi);return cont(expression,continueQuasi);}
function continueQuasi(type){if(type=="}"){cx.marked="string-2";cx.state.tokenize=tokenQuasi;return cont(quasi);}}
function arrowBody(type){findFatArrow(cx.stream,cx.state);return pass(type=="{"?statement:expression);}
function arrowBodyNoComma(type){findFatArrow(cx.stream,cx.state);return pass(type=="{"?statement:expressionNoComma);}
function maybeTarget(noComma){return function(type){if(type==".")return cont(noComma?targetNoComma:target);else return pass(noComma?expressionNoComma:expression);};}
function target(_,value){if(value=="target"){cx.marked="keyword";return cont(maybeoperatorComma);}}
function targetNoComma(_,value){if(value=="target"){cx.marked="keyword";return cont(maybeoperatorNoComma);}}
function maybelabel(type){if(type==":")return cont(poplex,statement);return pass(maybeoperatorComma,expect(";"),poplex);}
function property(type){if(type=="variable"){cx.marked="property";return cont();}}
function objprop(type,value){if(type=="async"){cx.marked="property";return cont(objprop);}else if(type=="variable"||cx.style=="keyword"){cx.marked="property";if(value=="get"||value=="set")return cont(getterSetter);return cont(afterprop);}else if(type=="number"||type=="string"){cx.marked=jsonldMode?"property":(cx.style+" property");return cont(afterprop);}else if(type=="jsonld-keyword"){return cont(afterprop);}else if(type=="modifier"){return cont(objprop)}else if(type=="["){return cont(expression,expect("]"),afterprop);}else if(type=="spread"){return cont(expression);}else if(type==":"){return pass(afterprop)}}
function getterSetter(type){if(type!="variable")return pass(afterprop);cx.marked="property";return cont(functiondef);}
function afterprop(type){if(type==":")return cont(expressionNoComma);if(type=="(")return pass(functiondef);}
function commasep(what,end){function proceed(type,value){if(type==","){var lex=cx.state.lexical;if(lex.info=="call")lex.pos=(lex.pos||0)+1;return cont(function(type,value){if(type==end||value==end)return pass()
return pass(what)},proceed);}
if(type==end||value==end)return cont();return cont(expect(end));}
return function(type,value){if(type==end||value==end)return cont();return pass(what,proceed);};}
function contCommasep(what,end,info){for(var i=3;i<arguments.length;i++)
cx.cc.push(arguments[i]);return cont(pushlex(end,info),commasep(what,end),poplex);}
function block(type){if(type=="}")return cont();return pass(statement,block);}
function maybetype(type,value){if(isTS){if(type==":")return cont(typeexpr);if(value=="?")return cont(maybetype);}}
function typeexpr(type){if(type=="variable"){cx.marked="variable-3";return cont(afterType);}
if(type=="{")return cont(commasep(typeprop,"}"))
if(type=="(")return cont(commasep(typearg,")"),maybeReturnType)}
function maybeReturnType(type){if(type=="=>")return cont(typeexpr)}
function typeprop(type){if(type=="variable"||cx.style=="keyword"){cx.marked="property"
return cont(typeprop)}else if(type==":"){return cont(typeexpr)}}
function typearg(type){if(type=="variable")return cont(typearg)
else if(type==":")return cont(typeexpr)}
function afterType(type,value){if(value=="<")return cont(commasep(typeexpr,">"),afterType)
if(type=="[")return cont(expect("]"),afterType)}
function vardef(){return pass(pattern,maybetype,maybeAssign,vardefCont);}
function pattern(type,value){if(type=="modifier")return cont(pattern)
if(type=="variable"){register(value);return cont();}
if(type=="spread")return cont(pattern);if(type=="[")return contCommasep(pattern,"]");if(type=="{")return contCommasep(proppattern,"}");}
function proppattern(type,value){if(type=="variable"&&!cx.stream.match(/^\s*:/,false)){register(value);return cont(maybeAssign);}
if(type=="variable")cx.marked="property";if(type=="spread")return cont(pattern);if(type=="}")return pass();return cont(expect(":"),pattern,maybeAssign);}
function maybeAssign(_type,value){if(value=="=")return cont(expressionNoComma);}
function vardefCont(type){if(type==",")return cont(vardef);}
function maybeelse(type,value){if(type=="keyword b"&&value=="else")return cont(pushlex("form","else"),statement,poplex);}
function forspec(type){if(type=="(")return cont(pushlex(")"),forspec1,expect(")"),poplex);}
function forspec1(type){if(type=="var")return cont(vardef,expect(";"),forspec2);if(type==";")return cont(forspec2);if(type=="variable")return cont(formaybeinof);return pass(expression,expect(";"),forspec2);}
function formaybeinof(_type,value){if(value=="in"||value=="of"){cx.marked="keyword";return cont(expression);}
return cont(maybeoperatorComma,forspec2);}
function forspec2(type,value){if(type==";")return cont(forspec3);if(value=="in"||value=="of"){cx.marked="keyword";return cont(expression);}
return pass(expression,expect(";"),forspec3);}
function forspec3(type){if(type!=")")cont(expression);}
function functiondef(type,value){if(value=="*"){cx.marked="keyword";return cont(functiondef);}
if(type=="variable"){register(value);return cont(functiondef);}
if(type=="(")return cont(pushcontext,pushlex(")"),commasep(funarg,")"),poplex,maybetype,statement,popcontext);}
function funarg(type){if(type=="spread")return cont(funarg);return pass(pattern,maybetype,maybeAssign);}
function classExpression(type,value){if(type=="variable")return className(type,value);return classNameAfter(type,value);}
function className(type,value){if(type=="variable"){register(value);return cont(classNameAfter);}}
function classNameAfter(type,value){if(value=="extends"||value=="implements")return cont(isTS?typeexpr:expression,classNameAfter);if(type=="{")return cont(pushlex("}"),classBody,poplex);}
function classBody(type,value){if(type=="variable"||cx.style=="keyword"){if((value=="static"||value=="get"||value=="set"||(isTS&&(value=="public"||value=="private"||value=="protected"||value=="readonly"||value=="abstract")))&&cx.stream.match(/^\s+[\w$\xa1-\uffff]/,false)){cx.marked="keyword";return cont(classBody);}
cx.marked="property";return cont(isTS?classfield:functiondef,classBody);}
if(value=="*"){cx.marked="keyword";return cont(classBody);}
if(type==";")return cont(classBody);if(type=="}")return cont();}
function classfield(type,value){if(value=="?")return cont(classfield)
if(type==":")return cont(typeexpr,maybeAssign)
return pass(functiondef)}
function afterExport(_type,value){if(value=="*"){cx.marked="keyword";return cont(maybeFrom,expect(";"));}
if(value=="default"){cx.marked="keyword";return cont(expression,expect(";"));}
return pass(statement);}
function afterImport(type){if(type=="string")return cont();return pass(importSpec,maybeFrom);}
function importSpec(type,value){if(type=="{")return contCommasep(importSpec,"}");if(type=="variable")register(value);if(value=="*")cx.marked="keyword";return cont(maybeAs);}
function maybeAs(_type,value){if(value=="as"){cx.marked="keyword";return cont(importSpec);}}
function maybeFrom(_type,value){if(value=="from"){cx.marked="keyword";return cont(expression);}}
function arrayLiteral(type){if(type=="]")return cont();return pass(commasep(expressionNoComma,"]"));}
function isContinuedStatement(state,textAfter){return state.lastType=="operator"||state.lastType==","||isOperatorChar.test(textAfter.charAt(0))||/[,.]/.test(textAfter.charAt(0));}
return{startState:function(basecolumn){var state={tokenize:tokenBase,lastType:"sof",cc:[],lexical:new JSLexical((basecolumn||0)-indentUnit,0,"block",false),localVars:parserConfig.localVars,context:parserConfig.localVars&&{vars:parserConfig.localVars},indented:basecolumn||0};if(parserConfig.globalVars&&typeof parserConfig.globalVars=="object")
state.globalVars=parserConfig.globalVars;return state;},token:function(stream,state){if(stream.sol()){if(!state.lexical.hasOwnProperty("align"))
state.lexical.align=false;state.indented=stream.indentation();findFatArrow(stream,state);}
if(state.tokenize!=tokenComment&&stream.eatSpace())return null;var style=state.tokenize(stream,state);if(type=="comment")return style;state.lastType=type=="operator"&&(content=="++"||content=="--")?"incdec":type;return parseJS(state,style,type,content,stream);},indent:function(state,textAfter){if(state.tokenize==tokenComment)return CodeMirror.Pass;if(state.tokenize!=tokenBase)return 0;var firstChar=textAfter&&textAfter.charAt(0),lexical=state.lexical,top
if(!/^\s*else\b/.test(textAfter))for(var i=state.cc.length-1;i>=0;--i){var c=state.cc[i];if(c==poplex)lexical=lexical.prev;else if(c!=maybeelse)break;}
while((lexical.type=="stat"||lexical.type=="form")&&(firstChar=="}"||((top=state.cc[state.cc.length-1])&&(top==maybeoperatorComma||top==maybeoperatorNoComma)&&!/^[,\.=+\-*:?[\(]/.test(textAfter))))
lexical=lexical.prev;if(statementIndent&&lexical.type==")"&&lexical.prev.type=="stat")
lexical=lexical.prev;var type=lexical.type,closing=firstChar==type;if(type=="vardef")return lexical.indented+(state.lastType=="operator"||state.lastType==","?lexical.info+1:0);else if(type=="form"&&firstChar=="{")return lexical.indented;else if(type=="form")return lexical.indented+indentUnit;else if(type=="stat")
return lexical.indented+(isContinuedStatement(state,textAfter)?statementIndent||indentUnit:0);else if(lexical.info=="switch"&&!closing&&parserConfig.doubleIndentSwitch!=false)
return lexical.indented+(/^(?:case|default)\b/.test(textAfter)?indentUnit:2*indentUnit);else if(lexical.align)return lexical.column+(closing?0:1);else return lexical.indented+(closing?0:indentUnit);},electricInput:/^\s*(?:case .*?:|default:|\{|\})$/,blockCommentStart:jsonMode?null:"/*",blockCommentEnd:jsonMode?null:"*/",lineComment:jsonMode?null:"//",fold:"brace",closeBrackets:"()[]{}''\"\"``",helperType:jsonMode?"json":"javascript",jsonldMode:jsonldMode,jsonMode:jsonMode,expressionAllowed:expressionAllowed,skipExpression:function(state){var top=state.cc[state.cc.length-1]
if(top==expression||top==expressionNoComma)state.cc.pop()}};});CodeMirror.registerHelper("wordChars","javascript",/[\w$]/);CodeMirror.defineMIME("text/javascript","javascript");CodeMirror.defineMIME("text/ecmascript","javascript");CodeMirror.defineMIME("application/javascript","javascript");CodeMirror.defineMIME("application/x-javascript","javascript");CodeMirror.defineMIME("application/ecmascript","javascript");CodeMirror.defineMIME("application/json",{name:"javascript",json:true});CodeMirror.defineMIME("application/x-json",{name:"javascript",json:true});CodeMirror.defineMIME("application/ld+json",{name:"javascript",jsonld:true});CodeMirror.defineMIME("text/typescript",{name:"javascript",typescript:true});CodeMirror.defineMIME("application/typescript",{name:"javascript",typescript:true});});;(function(mod){if(typeof exports=="object"&&typeof module=="object")
mod(require("../../lib/codemirror"));else if(typeof define=="function"&&define.amd)
define(["../../lib/codemirror"],mod);else
mod(CodeMirror);})(function(CodeMirror){"use strict";var htmlConfig={autoSelfClosers:{'area':true,'base':true,'br':true,'col':true,'command':true,'embed':true,'frame':true,'hr':true,'img':true,'input':true,'keygen':true,'link':true,'meta':true,'param':true,'source':true,'track':true,'wbr':true,'menuitem':true},implicitlyClosed:{'dd':true,'li':true,'optgroup':true,'option':true,'p':true,'rp':true,'rt':true,'tbody':true,'td':true,'tfoot':true,'th':true,'tr':true},contextGrabbers:{'dd':{'dd':true,'dt':true},'dt':{'dd':true,'dt':true},'li':{'li':true},'option':{'option':true,'optgroup':true},'optgroup':{'optgroup':true},'p':{'address':true,'article':true,'aside':true,'blockquote':true,'dir':true,'div':true,'dl':true,'fieldset':true,'footer':true,'form':true,'h1':true,'h2':true,'h3':true,'h4':true,'h5':true,'h6':true,'header':true,'hgroup':true,'hr':true,'menu':true,'nav':true,'ol':true,'p':true,'pre':true,'section':true,'table':true,'ul':true},'rp':{'rp':true,'rt':true},'rt':{'rp':true,'rt':true},'tbody':{'tbody':true,'tfoot':true},'td':{'td':true,'th':true},'tfoot':{'tbody':true},'th':{'td':true,'th':true},'thead':{'tbody':true,'tfoot':true},'tr':{'tr':true}},doNotIndent:{"pre":true},allowUnquoted:true,allowMissing:true,caseFold:true}
var xmlConfig={autoSelfClosers:{},implicitlyClosed:{},contextGrabbers:{},doNotIndent:{},allowUnquoted:false,allowMissing:false,caseFold:false}
CodeMirror.defineMode("xml",function(editorConf,config_){var indentUnit=editorConf.indentUnit
var config={}
var defaults=config_.htmlMode?htmlConfig:xmlConfig
for(var prop in defaults)config[prop]=defaults[prop]
for(var prop in config_)config[prop]=config_[prop]
var type,setStyle;function inText(stream,state){function chain(parser){state.tokenize=parser;return parser(stream,state);}
var ch=stream.next();if(ch=="<"){if(stream.eat("!")){if(stream.eat("[")){if(stream.match("CDATA["))return chain(inBlock("atom","]]>"));else return null;}else if(stream.match("--")){return chain(inBlock("comment","-->"));}else if(stream.match("DOCTYPE",true,true)){stream.eatWhile(/[\w\._\-]/);return chain(doctype(1));}else{return null;}}else if(stream.eat("?")){stream.eatWhile(/[\w\._\-]/);state.tokenize=inBlock("meta","?>");return"meta";}else{type=stream.eat("/")?"closeTag":"openTag";state.tokenize=inTag;return"tag bracket";}}else if(ch=="&"){var ok;if(stream.eat("#")){if(stream.eat("x")){ok=stream.eatWhile(/[a-fA-F\d]/)&&stream.eat(";");}else{ok=stream.eatWhile(/[\d]/)&&stream.eat(";");}}else{ok=stream.eatWhile(/[\w\.\-:]/)&&stream.eat(";");}
return ok?"atom":"error";}else{stream.eatWhile(/[^&<]/);return null;}}
inText.isInText=true;function inTag(stream,state){var ch=stream.next();if(ch==">"||(ch=="/"&&stream.eat(">"))){state.tokenize=inText;type=ch==">"?"endTag":"selfcloseTag";return"tag bracket";}else if(ch=="="){type="equals";return null;}else if(ch=="<"){state.tokenize=inText;state.state=baseState;state.tagName=state.tagStart=null;var next=state.tokenize(stream,state);return next?next+" tag error":"tag error";}else if(/[\'\"]/.test(ch)){state.tokenize=inAttribute(ch);state.stringStartCol=stream.column();return state.tokenize(stream,state);}else{stream.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/);return"word";}}
function inAttribute(quote){var closure=function(stream,state){while(!stream.eol()){if(stream.next()==quote){state.tokenize=inTag;break;}}
return"string";};closure.isInAttribute=true;return closure;}
function inBlock(style,terminator){return function(stream,state){while(!stream.eol()){if(stream.match(terminator)){state.tokenize=inText;break;}
stream.next();}
return style;};}
function doctype(depth){return function(stream,state){var ch;while((ch=stream.next())!=null){if(ch=="<"){state.tokenize=doctype(depth+1);return state.tokenize(stream,state);}else if(ch==">"){if(depth==1){state.tokenize=inText;break;}else{state.tokenize=doctype(depth-1);return state.tokenize(stream,state);}}}
return"meta";};}
function Context(state,tagName,startOfLine){this.prev=state.context;this.tagName=tagName;this.indent=state.indented;this.startOfLine=startOfLine;if(config.doNotIndent.hasOwnProperty(tagName)||(state.context&&state.context.noIndent))
this.noIndent=true;}
function popContext(state){if(state.context)state.context=state.context.prev;}
function maybePopContext(state,nextTagName){var parentTagName;while(true){if(!state.context){return;}
parentTagName=state.context.tagName;if(!config.contextGrabbers.hasOwnProperty(parentTagName)||!config.contextGrabbers[parentTagName].hasOwnProperty(nextTagName)){return;}
popContext(state);}}
function baseState(type,stream,state){if(type=="openTag"){state.tagStart=stream.column();return tagNameState;}else if(type=="closeTag"){return closeTagNameState;}else{return baseState;}}
function tagNameState(type,stream,state){if(type=="word"){state.tagName=stream.current();setStyle="tag";return attrState;}else{setStyle="error";return tagNameState;}}
function closeTagNameState(type,stream,state){if(type=="word"){var tagName=stream.current();if(state.context&&state.context.tagName!=tagName&&config.implicitlyClosed.hasOwnProperty(state.context.tagName))
popContext(state);if((state.context&&state.context.tagName==tagName)||config.matchClosing===false){setStyle="tag";return closeState;}else{setStyle="tag error";return closeStateErr;}}else{setStyle="error";return closeStateErr;}}
function closeState(type,_stream,state){if(type!="endTag"){setStyle="error";return closeState;}
popContext(state);return baseState;}
function closeStateErr(type,stream,state){setStyle="error";return closeState(type,stream,state);}
function attrState(type,_stream,state){if(type=="word"){setStyle="attribute";return attrEqState;}else if(type=="endTag"||type=="selfcloseTag"){var tagName=state.tagName,tagStart=state.tagStart;state.tagName=state.tagStart=null;if(type=="selfcloseTag"||config.autoSelfClosers.hasOwnProperty(tagName)){maybePopContext(state,tagName);}else{maybePopContext(state,tagName);state.context=new Context(state,tagName,tagStart==state.indented);}
return baseState;}
setStyle="error";return attrState;}
function attrEqState(type,stream,state){if(type=="equals")return attrValueState;if(!config.allowMissing)setStyle="error";return attrState(type,stream,state);}
function attrValueState(type,stream,state){if(type=="string")return attrContinuedState;if(type=="word"&&config.allowUnquoted){setStyle="string";return attrState;}
setStyle="error";return attrState(type,stream,state);}
function attrContinuedState(type,stream,state){if(type=="string")return attrContinuedState;return attrState(type,stream,state);}
return{startState:function(baseIndent){var state={tokenize:inText,state:baseState,indented:baseIndent||0,tagName:null,tagStart:null,context:null}
if(baseIndent!=null)state.baseIndent=baseIndent
return state},token:function(stream,state){if(!state.tagName&&stream.sol())
state.indented=stream.indentation();if(stream.eatSpace())return null;type=null;var style=state.tokenize(stream,state);if((style||type)&&style!="comment"){setStyle=null;state.state=state.state(type||style,stream,state);if(setStyle)
style=setStyle=="error"?style+" error":setStyle;}
return style;},indent:function(state,textAfter,fullLine){var context=state.context;if(state.tokenize.isInAttribute){if(state.tagStart==state.indented)
return state.stringStartCol+1;else
return state.indented+indentUnit;}
if(context&&context.noIndent)return CodeMirror.Pass;if(state.tokenize!=inTag&&state.tokenize!=inText)
return fullLine?fullLine.match(/^(\s*)/)[0].length:0;if(state.tagName){if(config.multilineTagIndentPastTag!==false)
return state.tagStart+state.tagName.length+2;else
return state.tagStart+indentUnit*(config.multilineTagIndentFactor||1);}
if(config.alignCDATA&&/<!\[CDATA\[/.test(textAfter))return 0;var tagAfter=textAfter&&/^<(\/)?([\w_:\.-]*)/.exec(textAfter);if(tagAfter&&tagAfter[1]){while(context){if(context.tagName==tagAfter[2]){context=context.prev;break;}else if(config.implicitlyClosed.hasOwnProperty(context.tagName)){context=context.prev;}else{break;}}}else if(tagAfter){while(context){var grabbers=config.contextGrabbers[context.tagName];if(grabbers&&grabbers.hasOwnProperty(tagAfter[2]))
context=context.prev;else
break;}}
while(context&&context.prev&&!context.startOfLine)
context=context.prev;if(context)return context.indent+indentUnit;else return state.baseIndent||0;},electricInput:/<\/[\s\w:]+>$/,blockCommentStart:"<!--",blockCommentEnd:"-->",configuration:config.htmlMode?"html":"xml",helperType:config.htmlMode?"html":"xml",skipAttribute:function(state){if(state.state==attrValueState)
state.state=attrState}};});CodeMirror.defineMIME("text/xml","xml");CodeMirror.defineMIME("application/xml","xml");if(!CodeMirror.mimeModes.hasOwnProperty("text/html"))
CodeMirror.defineMIME("text/html",{name:"xml",htmlMode:true});});;(function(mod){if(typeof exports=="object"&&typeof module=="object")
mod(require("../../lib/codemirror"),require("../xml/xml"),require("../javascript/javascript"),require("../css/css"));else if(typeof define=="function"&&define.amd)
define(["../../lib/codemirror","../xml/xml","../javascript/javascript","../css/css"],mod);else
mod(CodeMirror);})(function(CodeMirror){"use strict";var defaultTags={script:[["lang",/(javascript|babel)/i,"javascript"],["type",/^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^$/i,"javascript"],["type",/./,"text/plain"],[null,null,"javascript"]],style:[["lang",/^css$/i,"css"],["type",/^(text\/)?(x-)?(stylesheet|css)$/i,"css"],["type",/./,"text/plain"],[null,null,"css"]]};function maybeBackup(stream,pat,style){var cur=stream.current(),close=cur.search(pat);if(close>-1){stream.backUp(cur.length-close);}else if(cur.match(/<\/?$/)){stream.backUp(cur.length);if(!stream.match(pat,false))stream.match(cur);}
return style;}
var attrRegexpCache={};function getAttrRegexp(attr){var regexp=attrRegexpCache[attr];if(regexp)return regexp;return attrRegexpCache[attr]=new RegExp("\\s+"+attr+"\\s*=\\s*('|\")?([^'\"]+)('|\")?\\s*");}
function getAttrValue(text,attr){var match=text.match(getAttrRegexp(attr))
return match?match[2]:""}
function getTagRegexp(tagName,anchored){return new RegExp((anchored?"^":"")+"<\/\s*"+tagName+"\s*>","i");}
function addTags(from,to){for(var tag in from){var dest=to[tag]||(to[tag]=[]);var source=from[tag];for(var i=source.length-1;i>=0;i--)
dest.unshift(source[i])}}
function findMatchingMode(tagInfo,tagText){for(var i=0;i<tagInfo.length;i++){var spec=tagInfo[i];if(!spec[0]||spec[1].test(getAttrValue(tagText,spec[0])))return spec[2];}}
CodeMirror.defineMode("htmlmixed",function(config,parserConfig){var htmlMode=CodeMirror.getMode(config,{name:"xml",htmlMode:true,multilineTagIndentFactor:parserConfig.multilineTagIndentFactor,multilineTagIndentPastTag:parserConfig.multilineTagIndentPastTag});var tags={};var configTags=parserConfig&&parserConfig.tags,configScript=parserConfig&&parserConfig.scriptTypes;addTags(defaultTags,tags);if(configTags)addTags(configTags,tags);if(configScript)for(var i=configScript.length-1;i>=0;i--)
tags.script.unshift(["type",configScript[i].matches,configScript[i].mode])
function html(stream,state){var style=htmlMode.token(stream,state.htmlState),tag=/\btag\b/.test(style),tagName
if(tag&&!/[<>\s\/]/.test(stream.current())&&(tagName=state.htmlState.tagName&&state.htmlState.tagName.toLowerCase())&&tags.hasOwnProperty(tagName)){state.inTag=tagName+" "}else if(state.inTag&&tag&&/>$/.test(stream.current())){var inTag=/^([\S]+) (.*)/.exec(state.inTag)
state.inTag=null
var modeSpec=stream.current()==">"&&findMatchingMode(tags[inTag[1]],inTag[2])
var mode=CodeMirror.getMode(config,modeSpec)
var endTagA=getTagRegexp(inTag[1],true),endTag=getTagRegexp(inTag[1],false);state.token=function(stream,state){if(stream.match(endTagA,false)){state.token=html;state.localState=state.localMode=null;return null;}
return maybeBackup(stream,endTag,state.localMode.token(stream,state.localState));};state.localMode=mode;state.localState=CodeMirror.startState(mode,htmlMode.indent(state.htmlState,""));}else if(state.inTag){state.inTag+=stream.current()
if(stream.eol())state.inTag+=" "}
return style;};return{startState:function(){var state=CodeMirror.startState(htmlMode);return{token:html,inTag:null,localMode:null,localState:null,htmlState:state};},copyState:function(state){var local;if(state.localState){local=CodeMirror.copyState(state.localMode,state.localState);}
return{token:state.token,inTag:state.inTag,localMode:state.localMode,localState:local,htmlState:CodeMirror.copyState(htmlMode,state.htmlState)};},token:function(stream,state){return state.token(stream,state);},indent:function(state,textAfter){if(!state.localMode||/^\s*<\//.test(textAfter))
return htmlMode.indent(state.htmlState,textAfter);else if(state.localMode.indent)
return state.localMode.indent(state.localState,textAfter);else
return CodeMirror.Pass;},innerMode:function(state){return{state:state.localState||state.htmlState,mode:state.localMode||htmlMode};}};},"xml","javascript","css");CodeMirror.defineMIME("text/html","htmlmixed");});;(function(mod){if(typeof exports=="object"&&typeof module=="object")
mod(require("../../lib/codemirror"),require("../htmlmixed/htmlmixed"),require("../../addon/mode/multiplex"));else if(typeof define=="function"&&define.amd)
define(["../../lib/codemirror","../htmlmixed/htmlmixed","../../addon/mode/multiplex"],mod);else
mod(CodeMirror);})(function(CodeMirror){"use strict";CodeMirror.defineMode("htmlembedded",function(config,parserConfig){return CodeMirror.multiplexingMode(CodeMirror.getMode(config,"htmlmixed"),{open:parserConfig.open||parserConfig.scriptStartRegex||"<%",close:parserConfig.close||parserConfig.scriptEndRegex||"%>",mode:CodeMirror.getMode(config,parserConfig.scriptingModeSpec)});},"htmlmixed");CodeMirror.defineMIME("application/x-ejs",{name:"htmlembedded",scriptingModeSpec:"javascript"});CodeMirror.defineMIME("application/x-aspx",{name:"htmlembedded",scriptingModeSpec:"text/x-csharp"});CodeMirror.defineMIME("application/x-jsp",{name:"htmlembedded",scriptingModeSpec:"text/x-java"});CodeMirror.defineMIME("application/x-erb",{name:"htmlembedded",scriptingModeSpec:"ruby"});});;TextEditor.CodeMirrorUtils={};TextEditor.CodeMirrorUtils.toPos=function(range){return{start:new CodeMirror.Pos(range.startLine,range.startColumn),end:new CodeMirror.Pos(range.endLine,range.endColumn)};};TextEditor.CodeMirrorUtils.toRange=function(start,end){return new Common.TextRange(start.line,start.ch,end.line,end.ch);};TextEditor.CodeMirrorUtils.changeObjectToEditOperation=function(changeObject){var oldRange=TextEditor.CodeMirrorUtils.toRange(changeObject.from,changeObject.to);var newRange=oldRange.clone();var linesAdded=changeObject.text.length;if(linesAdded===0){newRange.endLine=newRange.startLine;newRange.endColumn=newRange.startColumn;}else if(linesAdded===1){newRange.endLine=newRange.startLine;newRange.endColumn=newRange.startColumn+changeObject.text[0].length;}else{newRange.endLine=newRange.startLine+linesAdded-1;newRange.endColumn=changeObject.text[linesAdded-1].length;}
return{oldRange:oldRange,newRange:newRange};};TextEditor.CodeMirrorUtils.pullLines=function(codeMirror,linesCount){var lines=[];codeMirror.eachLine(0,linesCount,onLineHandle);return lines;function onLineHandle(lineHandle){lines.push(lineHandle.text);}};TextEditor.CodeMirrorUtils.appendThemeStyle=function(element){if(UI.themeSupport.hasTheme())
return;var backgroundColor=InspectorFrontendHost.getSelectionBackgroundColor();var backgroundColorRule=backgroundColor?'.CodeMirror .CodeMirror-selected { background-color: '+backgroundColor+';}':'';var foregroundColor=InspectorFrontendHost.getSelectionForegroundColor();var foregroundColorRule=foregroundColor?'.CodeMirror .CodeMirror-selectedtext:not(.CodeMirror-persist-highlight) { color: '+foregroundColor+'!important;}':'';var selectionRule=(foregroundColor&&backgroundColor)?'.CodeMirror-line::selection, .CodeMirror-line > span::selection, .CodeMirror-line > span > span::selection { background: '+
backgroundColor+'; color: '+foregroundColor+' !important }':'';var style=createElement('style');if(foregroundColorRule||backgroundColorRule)
style.textContent=backgroundColorRule+foregroundColorRule+selectionRule;element.appendChild(style);};TextEditor.CodeMirrorUtils.TokenizerFactory=class{createTokenizer(mimeType){var mode=CodeMirror.getMode({indentUnit:2},mimeType);var state=CodeMirror.startState(mode);function tokenize(line,callback){var stream=new CodeMirror.StringStream(line);while(!stream.eol()){var style=mode.token(stream,state);var value=stream.current();callback(value,style,stream.start,stream.start+value.length);stream.start=stream.pos;}}
return tokenize;}};TextEditor.CodeMirrorCSSLoadView=class extends UI.VBox{constructor(){super();this.element.classList.add('hidden');this.registerRequiredCSS('cm/codemirror.css');this.registerRequiredCSS('text_editor/cmdevtools.css');TextEditor.CodeMirrorUtils.appendThemeStyle(this.element);}};;TextEditor.TextEditorAutocompleteController=class{constructor(textEditor,codeMirror,config){this._textEditor=textEditor;this._codeMirror=codeMirror;this._config=config;this._initialized=false;this._onScroll=this._onScroll.bind(this);this._onCursorActivity=this._onCursorActivity.bind(this);this._changes=this._changes.bind(this);this._blur=this._blur.bind(this);this._beforeChange=this._beforeChange.bind(this);this._mouseDown=this.clearAutocomplete.bind(this);this._codeMirror.on('changes',this._changes);this._lastHintText='';this._hintElement=createElementWithClass('span','auto-complete-text');}
_initializeIfNeeded(){if(this._initialized)
return;this._initialized=true;this._codeMirror.on('scroll',this._onScroll);this._codeMirror.on('cursorActivity',this._onCursorActivity);this._codeMirror.on('mousedown',this._mouseDown);this._codeMirror.on('blur',this._blur);if(this._config.isWordChar){this._codeMirror.on('beforeChange',this._beforeChange);this._dictionary=new Common.TextDictionary();this._addWordsFromText(this._codeMirror.getValue());}}
dispose(){this._codeMirror.off('changes',this._changes);if(this._initialized){this._codeMirror.off('scroll',this._onScroll);this._codeMirror.off('cursorActivity',this._onCursorActivity);this._codeMirror.off('mousedown',this._mouseDown);this._codeMirror.off('blur',this._blur);}
if(this._dictionary){this._codeMirror.off('beforeChange',this._beforeChange);this._dictionary.reset();}}
_beforeChange(codeMirror,changeObject){this._updatedLines=this._updatedLines||{};for(var i=changeObject.from.line;i<=changeObject.to.line;++i)
this._updatedLines[i]=this._codeMirror.getLine(i);}
_addWordsFromText(text){Common.TextUtils.textToWords(text,(this._config.isWordChar),addWord.bind(this));function addWord(word){if(word.length&&(word[0]<'0'||word[0]>'9'))
this._dictionary.addWord(word);}}
_removeWordsFromText(text){Common.TextUtils.textToWords(text,(this._config.isWordChar),word=>this._dictionary.removeWord(word));}
_substituteRange(lineNumber,columnNumber){var range=this._config.substituteRangeCallback?this._config.substituteRangeCallback(lineNumber,columnNumber):null;if(!range&&this._config.isWordChar)
range=this._textEditor.wordRangeForCursorPosition(lineNumber,columnNumber,this._config.isWordChar);return range;}
_wordsWithQuery(queryRange,substituteRange,force,tokenType){var external=this._config.suggestionsCallback?this._config.suggestionsCallback(queryRange,substituteRange,force,tokenType):null;if(external)
return external;if(!this._dictionary||(!force&&queryRange.isEmpty()))
return Promise.resolve([]);var completions=this._dictionary.wordsWithPrefix(this._textEditor.text(queryRange));var substituteWord=this._textEditor.text(substituteRange);if(this._dictionary.wordCount(substituteWord)===1)
completions=completions.filter(word=>word!==substituteWord);completions.sort((a,b)=>this._dictionary.wordCount(b)-this._dictionary.wordCount(a)||a.length-b.length);return Promise.resolve(completions.map(item=>({text:item})));}
_changes(codeMirror,changes){if(!changes.length)
return;if(this._dictionary&&this._updatedLines){for(var lineNumber in this._updatedLines)
this._removeWordsFromText(this._updatedLines[lineNumber]);delete this._updatedLines;var linesToUpdate={};for(var changeIndex=0;changeIndex<changes.length;++changeIndex){var changeObject=changes[changeIndex];var editInfo=TextEditor.CodeMirrorUtils.changeObjectToEditOperation(changeObject);for(var i=editInfo.newRange.startLine;i<=editInfo.newRange.endLine;++i)
linesToUpdate[i]=this._codeMirror.getLine(i);}
for(var lineNumber in linesToUpdate)
this._addWordsFromText(linesToUpdate[lineNumber]);}
var singleCharInput=false;var singleCharDelete=false;var cursor=this._codeMirror.getCursor('head');for(var changeIndex=0;changeIndex<changes.length;++changeIndex){var changeObject=changes[changeIndex];if(changeObject.origin==='+input'&&changeObject.text.length===1&&changeObject.text[0].length===1&&changeObject.to.line===cursor.line&&changeObject.to.ch+1===cursor.ch){singleCharInput=true;break;}
if(changeObject.origin==='+delete'&&changeObject.removed.length===1&&changeObject.removed[0].length===1&&changeObject.to.line===cursor.line&&changeObject.to.ch-1===cursor.ch){singleCharDelete=true;break;}}
if(this._queryRange){if(singleCharInput)
this._queryRange.endColumn++;else if(singleCharDelete)
this._queryRange.endColumn--;if(singleCharDelete||singleCharInput)
this._setHint(this._lastHintText);}
if(singleCharInput||singleCharDelete)
setImmediate(this.autocomplete.bind(this));else
this.clearAutocomplete();}
_blur(){this.clearAutocomplete();}
_validateSelectionsContexts(mainSelection){var selections=this._codeMirror.listSelections();if(selections.length<=1)
return true;var mainSelectionContext=this._textEditor.text(mainSelection);for(var i=0;i<selections.length;++i){var wordRange=this._substituteRange(selections[i].head.line,selections[i].head.ch);if(!wordRange)
return false;var context=this._textEditor.text(wordRange);if(context!==mainSelectionContext)
return false;}
return true;}
autocomplete(force){this._initializeIfNeeded();if(this._codeMirror.somethingSelected()){this.clearAutocomplete();return;}
var cursor=this._codeMirror.getCursor('head');var substituteRange=this._substituteRange(cursor.line,cursor.ch);if(!substituteRange||!this._validateSelectionsContexts(substituteRange)){this.clearAutocomplete();return;}
var queryRange=substituteRange.clone();queryRange.endColumn=cursor.ch;var query=this._textEditor.text(queryRange);var hadSuggestBox=false;if(this._suggestBox)
hadSuggestBox=true;var token=this._textEditor.tokenAtTextPosition(substituteRange.startLine,substituteRange.startColumn);var tokenType=(token&&token.type)||'';this._wordsWithQuery(queryRange,substituteRange,force,tokenType).then(wordsAcquired.bind(this));function wordsAcquired(wordsWithQuery){if(!wordsWithQuery.length||(wordsWithQuery.length===1&&query===wordsWithQuery[0].text)||(!this._suggestBox&&hadSuggestBox)){this.clearAutocomplete();this._onSuggestionsShownForTest([]);return;}
if(!this._suggestBox){this._suggestBox=new UI.SuggestBox(this,20,this._config.captureEnter);this._suggestBox.setDefaultSelectionIsDimmed(!!this._config.captureEnter);}
var oldQueryRange=this._queryRange;this._queryRange=queryRange;if(!oldQueryRange||queryRange.startLine!==oldQueryRange.startLine||queryRange.startColumn!==oldQueryRange.startColumn)
this._updateAnchorBox();this._suggestBox.updateSuggestions(this._anchorBox,wordsWithQuery,true,!this._isCursorAtEndOfLine(),query);this._onSuggestionsShownForTest(wordsWithQuery);}}
_setHint(hint){var query=this._textEditor.text(this._queryRange);if(!this._isCursorAtEndOfLine()||!hint.startsWith(query)){this._clearHint();return;}
var suffix=hint.substring(query.length).split('\n')[0];this._hintElement.textContent=suffix;var cursor=this._codeMirror.getCursor('to');if(this._hintMarker){var position=this._hintMarker.position();if(!position||!position.equal(Common.TextRange.createFromLocation(cursor.line,cursor.ch))){this._hintMarker.clear();this._hintMarker=null;}}
if(!this._hintMarker){this._hintMarker=this._textEditor.addBookmark(cursor.line,cursor.ch,this._hintElement,TextEditor.TextEditorAutocompleteController.HintBookmark,true);}else if(this._lastHintText!==hint){this._hintMarker.refresh();}
this._lastHintText=hint;}
_clearHint(){if(!this._hintElement.textContent)
return;this._lastHintText='';this._hintElement.textContent='';if(this._hintMarker)
this._hintMarker.refresh();}
_onSuggestionsShownForTest(suggestions){}
_onSuggestionsHiddenForTest(){}
clearAutocomplete(){if(!this._suggestBox)
return;this._suggestBox.hide();this._suggestBox=null;this._queryRange=null;this._anchorBox=null;this._clearHint();this._onSuggestionsHiddenForTest();}
keyDown(event){if(!this._suggestBox)
return false;switch(event.keyCode){case UI.KeyboardShortcut.Keys.Tab.code:this._suggestBox.acceptSuggestion();this.clearAutocomplete();return true;case UI.KeyboardShortcut.Keys.End.code:case UI.KeyboardShortcut.Keys.Right.code:if(this._isCursorAtEndOfLine()){this._suggestBox.acceptSuggestion();this.clearAutocomplete();return true;}else{this.clearAutocomplete();return false;}
case UI.KeyboardShortcut.Keys.Left.code:case UI.KeyboardShortcut.Keys.Home.code:this.clearAutocomplete();return false;case UI.KeyboardShortcut.Keys.Esc.code:this.clearAutocomplete();return true;}
return this._suggestBox.keyPressed(event);}
_isCursorAtEndOfLine(){var cursor=this._codeMirror.getCursor('to');return cursor.ch===this._codeMirror.getLine(cursor.line).length;}
applySuggestion(suggestion,isIntermediateSuggestion){this._currentSuggestion=suggestion;this._setHint(suggestion);}
acceptSuggestion(){var selections=this._codeMirror.listSelections().slice();var queryLength=this._queryRange.endColumn-this._queryRange.startColumn;for(var i=selections.length-1;i>=0;--i){var start=selections[i].head;var end=new CodeMirror.Pos(start.line,start.ch-queryLength);this._codeMirror.replaceRange(this._currentSuggestion,start,end,'+autocomplete');}}
_onScroll(){if(!this._suggestBox)
return;var cursor=this._codeMirror.getCursor();var scrollInfo=this._codeMirror.getScrollInfo();var topmostLineNumber=this._codeMirror.lineAtHeight(scrollInfo.top,'local');var bottomLine=this._codeMirror.lineAtHeight(scrollInfo.top+scrollInfo.clientHeight,'local');if(cursor.line<topmostLineNumber||cursor.line>bottomLine){this.clearAutocomplete();}else{this._updateAnchorBox();this._suggestBox.setPosition(this._anchorBox);}}
_onCursorActivity(){if(!this._suggestBox)
return;var cursor=this._codeMirror.getCursor();var shouldCloseAutocomplete=!(cursor.line===this._queryRange.startLine&&this._queryRange.startColumn<=cursor.ch&&cursor.ch<=this._queryRange.endColumn);if(cursor.line===this._queryRange.startLine&&cursor.ch===this._queryRange.endColumn+1){var line=this._codeMirror.getLine(cursor.line);shouldCloseAutocomplete=this._config.isWordChar?!this._config.isWordChar(line.charAt(cursor.ch-1)):false;}
if(shouldCloseAutocomplete)
this.clearAutocomplete();this._onCursorActivityHandledForTest();}
_onCursorActivityHandledForTest(){}
_updateAnchorBox(){var line=this._queryRange.startLine;var column=this._queryRange.startColumn;var metrics=this._textEditor.cursorPositionToCoordinates(line,column);this._anchorBox=metrics?new AnchorBox(metrics.x,metrics.y,0,metrics.height):null;}};TextEditor.TextEditorAutocompleteController.HintBookmark=Symbol('hint');;TextEditor.CodeMirrorTextEditor=class extends UI.VBox{constructor(options){super();this._options=options;this.registerRequiredCSS('cm/codemirror.css');this.registerRequiredCSS('text_editor/cmdevtools.css');TextEditor.CodeMirrorUtils.appendThemeStyle(this.element);this._codeMirror=new window.CodeMirror(this.element,{lineNumbers:options.lineNumbers,matchBrackets:true,smartIndent:true,styleSelectedText:true,electricChars:true,styleActiveLine:true,indentUnit:4,lineWrapping:options.lineWrapping,lineWiseCopyCut:false});this._codeMirrorElement=this.element.lastElementChild;this._codeMirror._codeMirrorTextEditor=this;CodeMirror.keyMap['devtools-common']={'Left':'goCharLeft','Right':'goCharRight','Up':'goLineUp','Down':'goLineDown','End':'goLineEnd','Home':'goLineStartSmart','PageUp':'goSmartPageUp','PageDown':'goSmartPageDown','Delete':'delCharAfter','Backspace':'delCharBefore','Tab':'defaultTab','Shift-Tab':'indentLess','Enter':'newlineAndIndent','Ctrl-Space':'autocomplete','Esc':'dismiss','Ctrl-M':'gotoMatchingBracket'};CodeMirror.keyMap['devtools-pc']={'Ctrl-A':'selectAll','Ctrl-Z':'undoAndReveal','Shift-Ctrl-Z':'redoAndReveal','Ctrl-Y':'redo','Ctrl-Home':'goDocStart','Ctrl-Up':'goDocStart','Ctrl-End':'goDocEnd','Ctrl-Down':'goDocEnd','Ctrl-Left':'goGroupLeft','Ctrl-Right':'goGroupRight','Alt-Left':'moveCamelLeft','Alt-Right':'moveCamelRight','Shift-Alt-Left':'selectCamelLeft','Shift-Alt-Right':'selectCamelRight','Ctrl-Backspace':'delGroupBefore','Ctrl-Delete':'delGroupAfter','Ctrl-/':'toggleComment','Ctrl-D':'selectNextOccurrence','Ctrl-U':'undoLastSelection',fallthrough:'devtools-common'};CodeMirror.keyMap['devtools-mac']={'Cmd-A':'selectAll','Cmd-Z':'undoAndReveal','Shift-Cmd-Z':'redoAndReveal','Cmd-Up':'goDocStart','Cmd-Down':'goDocEnd','Alt-Left':'goGroupLeft','Alt-Right':'goGroupRight','Ctrl-Left':'moveCamelLeft','Ctrl-Right':'moveCamelRight','Ctrl-A':'goLineLeft','Ctrl-E':'goLineRight','Ctrl-B':'goCharLeft','Ctrl-F':'goCharRight','Ctrl-Alt-B':'goGroupLeft','Ctrl-Alt-F':'goGroupRight','Ctrl-H':'delCharBefore','Ctrl-D':'delCharAfter','Ctrl-K':'killLine','Ctrl-T':'transposeChars','Shift-Ctrl-Left':'selectCamelLeft','Shift-Ctrl-Right':'selectCamelRight','Cmd-Left':'goLineStartSmart','Cmd-Right':'goLineEnd','Cmd-Backspace':'delLineLeft','Alt-Backspace':'delGroupBefore','Alt-Delete':'delGroupAfter','Cmd-/':'toggleComment','Cmd-D':'selectNextOccurrence','Cmd-U':'undoLastSelection',fallthrough:'devtools-common'};if(options.bracketMatchingSetting)
options.bracketMatchingSetting.addChangeListener(this._enableBracketMatchingIfNeeded,this);this._enableBracketMatchingIfNeeded();this._codeMirror.setOption('keyMap',Host.isMac()?'devtools-mac':'devtools-pc');this._codeMirror.addKeyMap({'\'':'maybeAvoidSmartSingleQuotes','\'"\'':'maybeAvoidSmartDoubleQuotes'});this._codeMirror.setOption('flattenSpans',false);this._codeMirror.setOption('maxHighlightLength',TextEditor.CodeMirrorTextEditor.maxHighlightLength);this._codeMirror.setOption('mode',null);this._codeMirror.setOption('crudeMeasuringFrom',1000);this._shouldClearHistory=true;this._lineSeparator='\n';TextEditor.CodeMirrorTextEditor._fixWordMovement(this._codeMirror);this._selectNextOccurrenceController=new TextEditor.CodeMirrorTextEditor.SelectNextOccurrenceController(this,this._codeMirror);this._codeMirror.on('changes',this._changes.bind(this));this._codeMirror.on('beforeSelectionChange',this._beforeSelectionChange.bind(this));this._codeMirror.on('keyHandled',this._onKeyHandled.bind(this));this.element.style.overflow='hidden';this._codeMirrorElement.classList.add('source-code');this._codeMirrorElement.classList.add('fill');this._decorations=new Multimap();this.element.addEventListener('focus',this._handleElementFocus.bind(this),false);this.element.addEventListener('keydown',this._handleKeyDown.bind(this),true);this.element.addEventListener('keydown',this._handlePostKeyDown.bind(this),false);this.element.tabIndex=0;this._needsRefresh=true;this._readOnly=false;this._mimeType='';if(options.mimeType)
this.setMimeType(options.mimeType);if(options.autoHeight)
this._codeMirror.setSize(null,'auto');}
static autocompleteCommand(codeMirror){var autocompleteController=codeMirror._codeMirrorTextEditor._autocompleteController;if(autocompleteController)
autocompleteController.autocomplete(true);}
static undoLastSelectionCommand(codeMirror){codeMirror._codeMirrorTextEditor._selectNextOccurrenceController.undoLastSelection();}
static selectNextOccurrenceCommand(codeMirror){codeMirror._codeMirrorTextEditor._selectNextOccurrenceController.selectNextOccurrence();}
static moveCamelLeftCommand(shift,codeMirror){codeMirror._codeMirrorTextEditor._doCamelCaseMovement(-1,shift);}
static moveCamelRightCommand(shift,codeMirror){codeMirror._codeMirrorTextEditor._doCamelCaseMovement(1,shift);}
static _maybeAvoidSmartQuotes(quoteCharacter,codeMirror){var textEditor=codeMirror._codeMirrorTextEditor;if(!codeMirror.getOption('autoCloseBrackets'))
return CodeMirror.Pass;var selections=textEditor.selections();if(selections.length!==1||!selections[0].isEmpty())
return CodeMirror.Pass;var selection=selections[0];var token=textEditor.tokenAtTextPosition(selection.startLine,selection.startColumn);if(!token||!token.type||token.type.indexOf('string')===-1)
return CodeMirror.Pass;var line=textEditor.line(selection.startLine);var tokenValue=line.substring(token.startColumn,token.endColumn);if(tokenValue[0]===tokenValue[tokenValue.length-1]&&(tokenValue[0]==='\''||tokenValue[0]==='"'))
return CodeMirror.Pass;codeMirror.replaceSelection(quoteCharacter);}
static _overrideModeWithPrefixedTokens(modeName,tokenPrefix){var oldModeName=modeName+'-old';if(CodeMirror.modes[oldModeName])
return;CodeMirror.defineMode(oldModeName,CodeMirror.modes[modeName]);CodeMirror.defineMode(modeName,modeConstructor);function modeConstructor(config,parserConfig){var innerConfig={};for(var i in parserConfig)
innerConfig[i]=parserConfig[i];innerConfig.name=oldModeName;var codeMirrorMode=CodeMirror.getMode(config,innerConfig);codeMirrorMode.name=modeName;codeMirrorMode.token=tokenOverride.bind(null,codeMirrorMode.token);return codeMirrorMode;}
function tokenOverride(superToken,stream,state){var token=superToken(stream,state);return token?tokenPrefix+token.split(/ +/).join(' '+tokenPrefix):token;}}
static _collectUninstalledModes(mimeType){var installed=TextEditor.CodeMirrorTextEditor._loadedMimeModeExtensions;var nameToExtension=new Map();var extensions=self.runtime.extensions(TextEditor.CodeMirrorMimeMode);for(var extension of extensions)
nameToExtension.set(extension.descriptor()['fileName'],extension);var modesToLoad=new Set();for(var extension of extensions){var descriptor=extension.descriptor();if(installed.has(extension)||descriptor['mimeTypes'].indexOf(mimeType)===-1)
continue;modesToLoad.add(extension);var deps=descriptor['dependencies']||[];for(var i=0;i<deps.length;++i){var extension=nameToExtension.get(deps[i]);if(extension&&!installed.has(extension))
modesToLoad.add(extension);}}
return Array.from(modesToLoad);}
static _installMimeTypeModes(extensions){var promises=extensions.map(extension=>extension.instance().then(installMode.bind(null,extension)));return Promise.all(promises);function installMode(extension,instance){if(TextEditor.CodeMirrorTextEditor._loadedMimeModeExtensions.has(extension))
return;var mode=(instance);mode.install(extension);TextEditor.CodeMirrorTextEditor._loadedMimeModeExtensions.add(extension);}}
static _fixWordMovement(codeMirror){function moveLeft(shift,codeMirror){codeMirror.setExtending(shift);var cursor=codeMirror.getCursor('head');codeMirror.execCommand('goGroupLeft');var newCursor=codeMirror.getCursor('head');if(newCursor.ch===0&&newCursor.line!==0){codeMirror.setExtending(false);return;}
var skippedText=codeMirror.getRange(newCursor,cursor,'#');if(/^\s+$/.test(skippedText))
codeMirror.execCommand('goGroupLeft');codeMirror.setExtending(false);}
function moveRight(shift,codeMirror){codeMirror.setExtending(shift);var cursor=codeMirror.getCursor('head');codeMirror.execCommand('goGroupRight');var newCursor=codeMirror.getCursor('head');if(newCursor.ch===0&&newCursor.line!==0){codeMirror.setExtending(false);return;}
var skippedText=codeMirror.getRange(cursor,newCursor,'#');if(/^\s+$/.test(skippedText))
codeMirror.execCommand('goGroupRight');codeMirror.setExtending(false);}
var modifierKey=Host.isMac()?'Alt':'Ctrl';var leftKey=modifierKey+'-Left';var rightKey=modifierKey+'-Right';var keyMap={};keyMap[leftKey]=moveLeft.bind(null,false);keyMap[rightKey]=moveRight.bind(null,false);keyMap['Shift-'+leftKey]=moveLeft.bind(null,true);keyMap['Shift-'+rightKey]=moveRight.bind(null,true);codeMirror.addKeyMap(keyMap);}
codeMirror(){return this._codeMirror;}
widget(){return this;}
_onKeyHandled(){UI.shortcutRegistry.dismissPendingShortcutAction();}
_normalizePositionForOverlappingColumn(lineNumber,lineLength,charNumber){var linesCount=this._codeMirror.lineCount();var columnNumber=charNumber;if(charNumber<0&&lineNumber>0){--lineNumber;columnNumber=this.line(lineNumber).length;}else if(charNumber>=lineLength&&lineNumber<linesCount-1){++lineNumber;columnNumber=0;}else{columnNumber=Number.constrain(charNumber,0,lineLength);}
return{lineNumber:lineNumber,columnNumber:columnNumber};}
_camelCaseMoveFromPosition(lineNumber,columnNumber,direction){function valid(charNumber,length){return charNumber>=0&&charNumber<length;}
function isWordStart(text,charNumber){var position=charNumber;var nextPosition=charNumber+1;return valid(position,text.length)&&valid(nextPosition,text.length)&&Common.TextUtils.isWordChar(text[position])&&Common.TextUtils.isWordChar(text[nextPosition])&&Common.TextUtils.isUpperCase(text[position])&&Common.TextUtils.isLowerCase(text[nextPosition]);}
function isWordEnd(text,charNumber){var position=charNumber;var prevPosition=charNumber-1;return valid(position,text.length)&&valid(prevPosition,text.length)&&Common.TextUtils.isWordChar(text[position])&&Common.TextUtils.isWordChar(text[prevPosition])&&Common.TextUtils.isUpperCase(text[position])&&Common.TextUtils.isLowerCase(text[prevPosition]);}
function constrainPosition(lineNumber,lineLength,columnNumber){return{lineNumber:lineNumber,columnNumber:Number.constrain(columnNumber,0,lineLength)};}
var text=this.line(lineNumber);var length=text.length;if((columnNumber===length&&direction===1)||(columnNumber===0&&direction===-1))
return this._normalizePositionForOverlappingColumn(lineNumber,length,columnNumber+direction);var charNumber=direction===1?columnNumber:columnNumber-1;while(valid(charNumber,length)&&Common.TextUtils.isSpaceChar(text[charNumber]))
charNumber+=direction;if(!valid(charNumber,length))
return constrainPosition(lineNumber,length,charNumber);if(Common.TextUtils.isStopChar(text[charNumber])){while(valid(charNumber,length)&&Common.TextUtils.isStopChar(text[charNumber]))
charNumber+=direction;if(!valid(charNumber,length))
return constrainPosition(lineNumber,length,charNumber);return{lineNumber:lineNumber,columnNumber:direction===-1?charNumber+1:charNumber};}
charNumber+=direction;while(valid(charNumber,length)&&!isWordStart(text,charNumber)&&!isWordEnd(text,charNumber)&&Common.TextUtils.isWordChar(text[charNumber]))
charNumber+=direction;if(!valid(charNumber,length))
return constrainPosition(lineNumber,length,charNumber);if(isWordStart(text,charNumber)||isWordEnd(text,charNumber))
return{lineNumber:lineNumber,columnNumber:charNumber};return{lineNumber:lineNumber,columnNumber:direction===-1?charNumber+1:charNumber};}
_doCamelCaseMovement(direction,shift){var selections=this.selections();for(var i=0;i<selections.length;++i){var selection=selections[i];var move=this._camelCaseMoveFromPosition(selection.endLine,selection.endColumn,direction);selection.endLine=move.lineNumber;selection.endColumn=move.columnNumber;if(!shift)
selections[i]=selection.collapseToEnd();}
this.setSelections(selections);}
dispose(){if(this._options.bracketMatchingSetting)
this._options.bracketMatchingSetting.removeChangeListener(this._enableBracketMatchingIfNeeded,this);}
_enableBracketMatchingIfNeeded(){this._codeMirror.setOption('autoCloseBrackets',(this._options.bracketMatchingSetting&&this._options.bracketMatchingSetting.get())?{explode:false}:false);}
wasShown(){if(this._needsRefresh)
this.refresh();}
refresh(){if(this.isShowing()){this._codeMirror.refresh();this._needsRefresh=false;return;}
this._needsRefresh=true;}
willHide(){delete this._editorSizeInSync;}
undo(){this._codeMirror.undo();}
redo(){this._codeMirror.redo();}
_handleKeyDown(e){if(this._autocompleteController&&this._autocompleteController.keyDown(e))
e.consume(true);}
_handlePostKeyDown(e){if(e.defaultPrevented)
e.consume(true);}
configureAutocomplete(config){if(this._autocompleteController){this._autocompleteController.dispose();delete this._autocompleteController;}
if(config)
this._autocompleteController=new TextEditor.TextEditorAutocompleteController(this,this._codeMirror,config);}
cursorPositionToCoordinates(lineNumber,column){if(lineNumber>=this._codeMirror.lineCount()||lineNumber<0||column<0||column>this._codeMirror.getLine(lineNumber).length)
return null;var metrics=this._codeMirror.cursorCoords(new CodeMirror.Pos(lineNumber,column));return{x:metrics.left,y:metrics.top,height:metrics.bottom-metrics.top};}
coordinatesToCursorPosition(x,y){var element=this.element.ownerDocument.elementFromPoint(x,y);if(!element||!element.isSelfOrDescendant(this._codeMirror.getWrapperElement()))
return null;var gutterBox=this._codeMirror.getGutterElement().boxInWindow();if(x>=gutterBox.x&&x<=gutterBox.x+gutterBox.width&&y>=gutterBox.y&&y<=gutterBox.y+gutterBox.height)
return null;var coords=this._codeMirror.coordsChar({left:x,top:y});return TextEditor.CodeMirrorUtils.toRange(coords,coords);}
tokenAtTextPosition(lineNumber,column){if(lineNumber<0||lineNumber>=this._codeMirror.lineCount())
return null;var token=this._codeMirror.getTokenAt(new CodeMirror.Pos(lineNumber,(column||0)+1));if(!token)
return null;return{startColumn:token.start,endColumn:token.end,type:token.type};}
isClean(){return this._codeMirror.isClean();}
markClean(){this._codeMirror.markClean();}
_hasLongLines(){function lineIterator(lineHandle){if(lineHandle.text.length>TextEditor.CodeMirrorTextEditor.LongLineModeLineLengthThreshold)
hasLongLines=true;return hasLongLines;}
var hasLongLines=false;this._codeMirror.eachLine(lineIterator);return hasLongLines;}
_enableLongLinesMode(){this._codeMirror.setOption('styleSelectedText',false);}
_disableLongLinesMode(){this._codeMirror.setOption('styleSelectedText',true);}
setMimeType(mimeType){this._mimeType=mimeType;var modesToLoad=TextEditor.CodeMirrorTextEditor._collectUninstalledModes(mimeType);if(!modesToLoad.length)
setMode.call(this);else
TextEditor.CodeMirrorTextEditor._installMimeTypeModes(modesToLoad).then(setMode.bind(this));function setMode(){var rewrittenMimeType=this.rewriteMimeType(mimeType);if(this._codeMirror.options.mode!==rewrittenMimeType)
this._codeMirror.setOption('mode',rewrittenMimeType);}}
rewriteMimeType(mimeType){return mimeType;}
mimeType(){return this._mimeType;}
setReadOnly(readOnly){if(this._readOnly===readOnly)
return;this.clearPositionHighlight();this._readOnly=readOnly;this.element.classList.toggle('CodeMirror-readonly',readOnly);this._codeMirror.setOption('readOnly',readOnly);}
readOnly(){return!!this._codeMirror.getOption('readOnly');}
addKeyDownHandler(handler){this._codeMirror.on('keydown',(CodeMirror,event)=>handler(event));}
addBookmark(lineNumber,columnNumber,element,type,insertBefore){var bookmark=new TextEditor.TextEditorBookMark(this._codeMirror.setBookmark(new CodeMirror.Pos(lineNumber,columnNumber),{widget:element,insertLeft:insertBefore}),type,this);this._updateDecorations(lineNumber);return bookmark;}
bookmarks(range,type){var pos=TextEditor.CodeMirrorUtils.toPos(range);var markers=this._codeMirror.findMarksAt(pos.start);if(!range.isEmpty()){var middleMarkers=this._codeMirror.findMarks(pos.start,pos.end);var endMarkers=this._codeMirror.findMarksAt(pos.end);markers=markers.concat(middleMarkers,endMarkers);}
var bookmarks=[];for(var i=0;i<markers.length;i++){var bookmark=markers[i][TextEditor.TextEditorBookMark._symbol];if(bookmark&&(!type||bookmark.type()===type))
bookmarks.push(bookmark);}
return bookmarks;}
focus(){this._codeMirror.focus();}
hasFocus(){return this._codeMirror.hasFocus();}
_handleElementFocus(){this._codeMirror.focus();}
operation(operation){this._codeMirror.operation(operation);}
scrollLineIntoView(lineNumber){this._innerRevealLine(lineNumber,this._codeMirror.getScrollInfo());}
_innerRevealLine(lineNumber,scrollInfo){var topLine=this._codeMirror.lineAtHeight(scrollInfo.top,'local');var bottomLine=this._codeMirror.lineAtHeight(scrollInfo.top+scrollInfo.clientHeight,'local');var linesPerScreen=bottomLine-topLine+1;if(lineNumber<topLine){var topLineToReveal=Math.max(lineNumber-(linesPerScreen/2)+1,0)|0;this._codeMirror.scrollIntoView(new CodeMirror.Pos(topLineToReveal,0));}else if(lineNumber>bottomLine){var bottomLineToReveal=Math.min(lineNumber+(linesPerScreen/2)-1,this.linesCount-1)|0;this._codeMirror.scrollIntoView(new CodeMirror.Pos(bottomLineToReveal,0));}}
addDecoration(element,lineNumber,startColumn,endColumn){var widget=this._codeMirror.addLineWidget(lineNumber,element);var update=null;if(typeof startColumn!=='undefined'){if(typeof endColumn==='undefined')
endColumn=Infinity;update=this._updateFloatingDecoration.bind(this,element,lineNumber,startColumn,endColumn);update();}
this._decorations.set(lineNumber,{element:element,update:update,widget:widget});}
_updateFloatingDecoration(element,lineNumber,startColumn,endColumn){var base=this._codeMirror.cursorCoords(new CodeMirror.Pos(lineNumber,0),'page');var start=this._codeMirror.cursorCoords(new CodeMirror.Pos(lineNumber,startColumn),'page');var end=this._codeMirror.charCoords(new CodeMirror.Pos(lineNumber,endColumn),'page');element.style.width=(end.right-start.left)+'px';element.style.left=(start.left-base.left)+'px';}
_updateDecorations(lineNumber){this._decorations.get(lineNumber).forEach(innerUpdateDecorations);function innerUpdateDecorations(decoration){if(decoration.update)
decoration.update();}}
removeDecoration(element,lineNumber){this._decorations.get(lineNumber).forEach(innerRemoveDecoration.bind(this));function innerRemoveDecoration(decoration){if(decoration.element!==element)
return;this._codeMirror.removeLineWidget(decoration.widget);this._decorations.remove(lineNumber,decoration);}}
revealPosition(lineNumber,columnNumber,shouldHighlight){lineNumber=Number.constrain(lineNumber,0,this._codeMirror.lineCount()-1);if(typeof columnNumber!=='number')
columnNumber=0;columnNumber=Number.constrain(columnNumber,0,this._codeMirror.getLine(lineNumber).length);this.clearPositionHighlight();this._highlightedLine=this._codeMirror.getLineHandle(lineNumber);if(!this._highlightedLine)
return;this.scrollLineIntoView(lineNumber);if(shouldHighlight){this._codeMirror.addLineClass(this._highlightedLine,null,this._readOnly?'cm-readonly-highlight':'cm-highlight');if(!this._readOnly)
this._clearHighlightTimeout=setTimeout(this.clearPositionHighlight.bind(this),2000);}
this.setSelection(Common.TextRange.createFromLocation(lineNumber,columnNumber));}
clearPositionHighlight(){if(this._clearHighlightTimeout)
clearTimeout(this._clearHighlightTimeout);delete this._clearHighlightTimeout;if(this._highlightedLine){this._codeMirror.removeLineClass(this._highlightedLine,null,this._readOnly?'cm-readonly-highlight':'cm-highlight');}
delete this._highlightedLine;}
elementsToRestoreScrollPositionsFor(){return[];}
_updatePaddingBottom(width,height){if(!this._options.padBottom)
return;var scrollInfo=this._codeMirror.getScrollInfo();var newPaddingBottom;var linesElement=this._codeMirrorElement.querySelector('.CodeMirror-lines');var lineCount=this._codeMirror.lineCount();if(lineCount<=1){newPaddingBottom=0;}else{newPaddingBottom=Math.max(scrollInfo.clientHeight-this._codeMirror.getLineHandle(this._codeMirror.lastLine()).height,0);}
newPaddingBottom+='px';linesElement.style.paddingBottom=newPaddingBottom;this._codeMirror.setSize(width,height);}
_resizeEditor(){var parentElement=this.element.parentElement;if(!parentElement||!this.isShowing())
return;this._codeMirror.operation(()=>{var scrollLeft=this._codeMirror.doc.scrollLeft;var scrollTop=this._codeMirror.doc.scrollTop;var width=parentElement.offsetWidth;var height=parentElement.offsetHeight-this.element.offsetTop;if(this._options.autoHeight){this._codeMirror.setSize(width,'auto');}else{this._codeMirror.setSize(width,height);this._updatePaddingBottom(width,height);}
this._codeMirror.scrollTo(scrollLeft,scrollTop);});}
onResize(){if(this._autocompleteController)
this._autocompleteController.clearAutocomplete();this._resizeEditor();this._editorSizeInSync=true;if(this._selectionSetScheduled){delete this._selectionSetScheduled;this.setSelection(this._lastSelection);}}
editRange(range,text,origin){var pos=TextEditor.CodeMirrorUtils.toPos(range);this._codeMirror.replaceRange(text,pos.start,pos.end,origin);return TextEditor.CodeMirrorUtils.toRange(pos.start,this._codeMirror.posFromIndex(this._codeMirror.indexFromPos(pos.start)+text.length));}
clearAutocomplete(){if(this._autocompleteController)
this._autocompleteController.clearAutocomplete();}
wordRangeForCursorPosition(lineNumber,column,isWordChar){var line=this.line(lineNumber);var wordStart=column;if(column!==0&&isWordChar(line.charAt(column-1))){wordStart=column-1;while(wordStart>0&&isWordChar(line.charAt(wordStart-1)))
--wordStart;}
var wordEnd=column;while(wordEnd<line.length&&isWordChar(line.charAt(wordEnd)))
++wordEnd;return new Common.TextRange(lineNumber,wordStart,lineNumber,wordEnd);}
_changes(codeMirror,changes){if(!changes.length)
return;var hasOneLine=this._codeMirror.lineCount()===1;if(hasOneLine!==this._hasOneLine)
this._resizeEditor();this._hasOneLine=hasOneLine;this._decorations.valuesArray().forEach(decoration=>this._codeMirror.removeLineWidget(decoration.widget));this._decorations.clear();}
_beforeSelectionChange(codeMirror,selection){this._selectNextOccurrenceController.selectionWillChange();}
scrollToLine(lineNumber){var pos=new CodeMirror.Pos(lineNumber,0);var coords=this._codeMirror.charCoords(pos,'local');this._codeMirror.scrollTo(0,coords.top);}
firstVisibleLine(){return this._codeMirror.lineAtHeight(this._codeMirror.getScrollInfo().top,'local');}
scrollTop(){return this._codeMirror.getScrollInfo().top;}
setScrollTop(scrollTop){this._codeMirror.scrollTo(0,scrollTop);}
lastVisibleLine(){var scrollInfo=this._codeMirror.getScrollInfo();return this._codeMirror.lineAtHeight(scrollInfo.top+scrollInfo.clientHeight,'local');}
selection(){var start=this._codeMirror.getCursor('anchor');var end=this._codeMirror.getCursor('head');return TextEditor.CodeMirrorUtils.toRange(start,end);}
selections(){var selectionList=this._codeMirror.listSelections();var result=[];for(var i=0;i<selectionList.length;++i){var selection=selectionList[i];result.push(TextEditor.CodeMirrorUtils.toRange(selection.anchor,selection.head));}
return result;}
lastSelection(){return this._lastSelection;}
setSelection(textRange){this._lastSelection=textRange;if(!this._editorSizeInSync){this._selectionSetScheduled=true;return;}
var pos=TextEditor.CodeMirrorUtils.toPos(textRange);this._codeMirror.setSelection(pos.start,pos.end);}
setSelections(ranges,primarySelectionIndex){var selections=[];for(var i=0;i<ranges.length;++i){var selection=TextEditor.CodeMirrorUtils.toPos(ranges[i]);selections.push({anchor:selection.start,head:selection.end});}
primarySelectionIndex=primarySelectionIndex||0;this._codeMirror.setSelections(selections,primarySelectionIndex,{scroll:false});}
_detectLineSeparator(text){this._lineSeparator=text.indexOf('\r\n')>=0?'\r\n':'\n';}
setText(text){if(text.length>TextEditor.CodeMirrorTextEditor.MaxEditableTextSize){this.configureAutocomplete(null);this.setReadOnly(true);}
this._codeMirror.setValue(text);if(this._shouldClearHistory){this._codeMirror.clearHistory();this._shouldClearHistory=false;}
this._detectLineSeparator(text);if(this._hasLongLines())
this._enableLongLinesMode();else
this._disableLongLinesMode();}
text(textRange){if(!textRange)
return this._codeMirror.getValue(this._lineSeparator);var pos=TextEditor.CodeMirrorUtils.toPos(textRange.normalize());return this._codeMirror.getRange(pos.start,pos.end,this._lineSeparator);}
fullRange(){var lineCount=this.linesCount;var lastLine=this._codeMirror.getLine(lineCount-1);return TextEditor.CodeMirrorUtils.toRange(new CodeMirror.Pos(0,0),new CodeMirror.Pos(lineCount-1,lastLine.length));}
line(lineNumber){return this._codeMirror.getLine(lineNumber);}
get linesCount(){return this._codeMirror.lineCount();}
newlineAndIndent(){this._codeMirror.execCommand('newlineAndIndent');}
textEditorPositionHandle(lineNumber,columnNumber){return new TextEditor.CodeMirrorPositionHandle(this._codeMirror,new CodeMirror.Pos(lineNumber,columnNumber));}};TextEditor.CodeMirrorTextEditor.maxHighlightLength=1000;CodeMirror.commands.autocomplete=TextEditor.CodeMirrorTextEditor.autocompleteCommand;CodeMirror.commands.undoLastSelection=TextEditor.CodeMirrorTextEditor.undoLastSelectionCommand;CodeMirror.commands.selectNextOccurrence=TextEditor.CodeMirrorTextEditor.selectNextOccurrenceCommand;CodeMirror.commands.moveCamelLeft=TextEditor.CodeMirrorTextEditor.moveCamelLeftCommand.bind(null,false);CodeMirror.commands.selectCamelLeft=TextEditor.CodeMirrorTextEditor.moveCamelLeftCommand.bind(null,true);CodeMirror.commands.moveCamelRight=TextEditor.CodeMirrorTextEditor.moveCamelRightCommand.bind(null,false);CodeMirror.commands.selectCamelRight=TextEditor.CodeMirrorTextEditor.moveCamelRightCommand.bind(null,true);CodeMirror.commands.gotoMatchingBracket=function(codeMirror){var updatedSelections=[];var selections=codeMirror.listSelections();for(var i=0;i<selections.length;++i){var selection=selections[i];var cursor=selection.head;var matchingBracket=codeMirror.findMatchingBracket(cursor,false,{maxScanLines:10000});var updatedHead=cursor;if(matchingBracket&&matchingBracket.match){var columnCorrection=CodeMirror.cmpPos(matchingBracket.from,cursor)===0?1:0;updatedHead=new CodeMirror.Pos(matchingBracket.to.line,matchingBracket.to.ch+columnCorrection);}
updatedSelections.push({anchor:updatedHead,head:updatedHead});}
codeMirror.setSelections(updatedSelections);};CodeMirror.commands.undoAndReveal=function(codemirror){var scrollInfo=codemirror.getScrollInfo();codemirror.execCommand('undo');var cursor=codemirror.getCursor('start');codemirror._codeMirrorTextEditor._innerRevealLine(cursor.line,scrollInfo);var autocompleteController=codemirror._codeMirrorTextEditor._autocompleteController;if(autocompleteController)
autocompleteController.clearAutocomplete();};CodeMirror.commands.redoAndReveal=function(codemirror){var scrollInfo=codemirror.getScrollInfo();codemirror.execCommand('redo');var cursor=codemirror.getCursor('start');codemirror._codeMirrorTextEditor._innerRevealLine(cursor.line,scrollInfo);var autocompleteController=codemirror._codeMirrorTextEditor._autocompleteController;if(autocompleteController)
autocompleteController.clearAutocomplete();};CodeMirror.commands.dismiss=function(codemirror){var selections=codemirror.listSelections();var selection=selections[0];if(selections.length===1){if(TextEditor.CodeMirrorUtils.toRange(selection.anchor,selection.head).isEmpty())
return CodeMirror.Pass;codemirror.setSelection(selection.anchor,selection.anchor,{scroll:false});codemirror._codeMirrorTextEditor.scrollLineIntoView(selection.anchor.line);return;}
codemirror.setSelection(selection.anchor,selection.head,{scroll:false});codemirror._codeMirrorTextEditor.scrollLineIntoView(selection.anchor.line);};CodeMirror.commands.goSmartPageUp=function(codemirror){if(codemirror._codeMirrorTextEditor.selection().equal(Common.TextRange.createFromLocation(0,0)))
return CodeMirror.Pass;codemirror.execCommand('goPageUp');};CodeMirror.commands.goSmartPageDown=function(codemirror){if(codemirror._codeMirrorTextEditor.selection().equal(codemirror._codeMirrorTextEditor.fullRange().collapseToEnd()))
return CodeMirror.Pass;codemirror.execCommand('goPageDown');};CodeMirror.commands.maybeAvoidSmartSingleQuotes=TextEditor.CodeMirrorTextEditor._maybeAvoidSmartQuotes.bind(null,'\'');CodeMirror.commands.maybeAvoidSmartDoubleQuotes=TextEditor.CodeMirrorTextEditor._maybeAvoidSmartQuotes.bind(null,'"');TextEditor.CodeMirrorTextEditor.LongLineModeLineLengthThreshold=2000;TextEditor.CodeMirrorTextEditor.MaxEditableTextSize=1024*1024*10;TextEditor.CodeMirrorPositionHandle=class{constructor(codeMirror,pos){this._codeMirror=codeMirror;this._lineHandle=codeMirror.getLineHandle(pos.line);this._columnNumber=pos.ch;}
resolve(){var lineNumber=this._lineHandle?this._codeMirror.getLineNumber(this._lineHandle):null;if(typeof lineNumber!=='number')
return null;return{lineNumber:lineNumber,columnNumber:this._columnNumber};}
equal(positionHandle){return positionHandle._lineHandle===this._lineHandle&&positionHandle._columnNumber===this._columnNumber&&positionHandle._codeMirror===this._codeMirror;}};TextEditor.CodeMirrorTextEditor.SelectNextOccurrenceController=class{constructor(textEditor,codeMirror){this._textEditor=textEditor;this._codeMirror=codeMirror;}
selectionWillChange(){if(!this._muteSelectionListener)
delete this._fullWordSelection;}
_findRange(selections,range){for(var i=0;i<selections.length;++i){if(range.equal(selections[i]))
return true;}
return false;}
undoLastSelection(){this._muteSelectionListener=true;this._codeMirror.execCommand('undoSelection');this._muteSelectionListener=false;}
selectNextOccurrence(){var selections=this._textEditor.selections();var anyEmptySelection=false;for(var i=0;i<selections.length;++i){var selection=selections[i];anyEmptySelection=anyEmptySelection||selection.isEmpty();if(selection.startLine!==selection.endLine)
return;}
if(anyEmptySelection){this._expandSelectionsToWords(selections);return;}
var last=selections[selections.length-1];var next=last;do
next=this._findNextOccurrence(next,!!this._fullWordSelection);while(next&&this._findRange(selections,next)&&!next.equal(last));if(!next)
return;selections.push(next);this._muteSelectionListener=true;this._textEditor.setSelections(selections,selections.length-1);delete this._muteSelectionListener;this._textEditor.scrollLineIntoView(next.startLine);}
_expandSelectionsToWords(selections){var newSelections=[];for(var i=0;i<selections.length;++i){var selection=selections[i];var startRangeWord=this._textEditor.wordRangeForCursorPosition(selection.startLine,selection.startColumn,Common.TextUtils.isWordChar)||Common.TextRange.createFromLocation(selection.startLine,selection.startColumn);var endRangeWord=this._textEditor.wordRangeForCursorPosition(selection.endLine,selection.endColumn,Common.TextUtils.isWordChar)||Common.TextRange.createFromLocation(selection.endLine,selection.endColumn);var newSelection=new Common.TextRange(startRangeWord.startLine,startRangeWord.startColumn,endRangeWord.endLine,endRangeWord.endColumn);newSelections.push(newSelection);}
this._textEditor.setSelections(newSelections,newSelections.length-1);this._fullWordSelection=true;}
_findNextOccurrence(range,fullWord){range=range.normalize();var matchedLineNumber;var matchedColumnNumber;var textToFind=this._textEditor.text(range);function findWordInLine(wordRegex,lineNumber,lineText,from,to){if(typeof matchedLineNumber==='number')
return true;wordRegex.lastIndex=from;var result=wordRegex.exec(lineText);if(!result||result.index+textToFind.length>to)
return false;matchedLineNumber=lineNumber;matchedColumnNumber=result.index;return true;}
var iteratedLineNumber;function lineIterator(regex,lineHandle){if(findWordInLine(regex,iteratedLineNumber++,lineHandle.text,0,lineHandle.text.length))
return true;}
var regexSource=textToFind.escapeForRegExp();if(fullWord)
regexSource='\\b'+regexSource+'\\b';var wordRegex=new RegExp(regexSource,'g');var currentLineText=this._codeMirror.getLine(range.startLine);findWordInLine(wordRegex,range.startLine,currentLineText,range.endColumn,currentLineText.length);iteratedLineNumber=range.startLine+1;this._codeMirror.eachLine(range.startLine+1,this._codeMirror.lineCount(),lineIterator.bind(null,wordRegex));iteratedLineNumber=0;this._codeMirror.eachLine(0,range.startLine,lineIterator.bind(null,wordRegex));findWordInLine(wordRegex,range.startLine,currentLineText,0,range.startColumn);if(typeof matchedLineNumber!=='number')
return null;return new Common.TextRange(matchedLineNumber,matchedColumnNumber,matchedLineNumber,matchedColumnNumber+textToFind.length);}};TextEditor.TextEditorPositionHandle=function(){};TextEditor.TextEditorPositionHandle.prototype={resolve(){},equal(positionHandle){}};TextEditor.CodeMirrorTextEditor._overrideModeWithPrefixedTokens('css','css-');TextEditor.CodeMirrorTextEditor._overrideModeWithPrefixedTokens('javascript','js-');TextEditor.CodeMirrorTextEditor._overrideModeWithPrefixedTokens('xml','xml-');TextEditor.CodeMirrorTextEditor._loadedMimeModeExtensions=new Set();TextEditor.CodeMirrorMimeMode=function(){};TextEditor.CodeMirrorMimeMode.prototype={install(extension){}};TextEditor.TextEditorBookMark=class{constructor(marker,type,editor){marker[TextEditor.TextEditorBookMark._symbol]=this;this._marker=marker;this._type=type;this._editor=editor;}
clear(){var position=this._marker.find();this._marker.clear();if(position)
this._editor._updateDecorations(position.line);}
refresh(){this._marker.changed();var position=this._marker.find();if(position)
this._editor._updateDecorations(position.line);}
type(){return this._type;}
position(){var pos=this._marker.find();return pos?Common.TextRange.createFromLocation(pos.line,pos.ch):null;}};TextEditor.TextEditorBookMark._symbol=Symbol('TextEditor.TextEditorBookMark');TextEditor.CodeMirrorTextEditor.Decoration;TextEditor.CodeMirrorTextEditorFactory=class{createEditor(options){return new TextEditor.CodeMirrorTextEditor(options);}};;self['TestRunner']=self['TestRunner']||{};self.testRunner;TestRunner.executeTestScript=function(){fetch(`${Runtime.queryParam('test')}`).then(data=>data.text()).then(testScript=>eval(`(function(){${testScript}})()`)).catch(error=>{TestRunner.addResult(`Unable to execute test script because of error: ${error}`);TestRunner.completeTest();});};TestRunner._results=[];TestRunner.completeTest=function(){if(!self.testRunner){console.log('Test Done');return;}
Array.prototype.forEach.call(document.documentElement.childNodes,x=>x.remove());var outputElement=document.createElement('div');if(outputElement.style){outputElement.style.whiteSpace='pre';outputElement.style.height='10px';outputElement.style.overflow='hidden';}
document.documentElement.appendChild(outputElement);for(var i=0;i<TestRunner._results.length;i++){outputElement.appendChild(document.createTextNode(TestRunner._results[i]));outputElement.appendChild(document.createElement('br'));}
TestRunner._results=[];self.testRunner.notifyDone();};TestRunner.addResult=function(text){if(self.testRunner)
TestRunner._results.push(String(text));else
console.log(text);};TestRunner.runTests=function(tests){nextTest();function nextTest(){var test=tests.shift();if(!test){TestRunner.completeTest();return;}
TestRunner.addResult('\ntest: '+test.name);var testPromise=test();if(!(testPromise instanceof Promise))
testPromise=Promise.resolve();testPromise.then(nextTest);}};TestRunner.addSniffer=function(receiver,methodName){return new Promise(function(resolve,reject){var original=receiver[methodName];if(typeof original!=='function'){reject('Cannot find method to override: '+methodName);return;}
receiver[methodName]=function(var_args){try{var result=original.apply(this,arguments);}finally{receiver[methodName]=original;}
try{Array.prototype.push.call(arguments,result);resolve.apply(this,arguments);}catch(e){reject('Exception in overridden method \''+methodName+'\': '+e);TestRunner.completeTest();}
return result;};});};TestRunner.loadLazyModules=function(lazyModules){return Promise.all(lazyModules.map(lazyModule=>self.runtime.loadModulePromise(lazyModule)));};TestRunner.createKeyEvent=function(key,ctrlKey,altKey,shiftKey,metaKey){return new KeyboardEvent('keydown',{key:key,bubbles:true,cancelable:true,ctrlKey:!!ctrlKey,altKey:!!altKey,shiftKey:!!shiftKey,metaKey:!!metaKey});};(function(){function completeTestOnError(message,source,lineno,colno,error){TestRunner.addResult('TEST ENDED IN ERROR: '+error.stack);TestRunner.completeTest();}
self['onerror']=completeTestOnError;})();;self['Shell']=self['Shell']||{};Shell.TestShell=class{constructor(){runOnWindowLoad(this.initializeUnitTest.bind(this));}
initializeUnitTest(){var globalStorage=new Common.SettingsStorage({},InspectorFrontendHost.setPreference,InspectorFrontendHost.removePreference,InspectorFrontendHost.clearPreferences);var storagePrefix='';var localStorage=new Common.SettingsStorage({},undefined,undefined,undefined,storagePrefix);Common.settings=new Common.Settings(globalStorage,localStorage);UI.viewManager=new UI.ViewManager();UI.initializeUIUtils(document,Common.settings.createSetting('uiTheme','default'));UI.installComponentRootStyles((document.body));UI.zoomManager=new UI.ZoomManager(self,InspectorFrontendHost);UI.inspectorView=UI.InspectorView.instance();UI.ContextMenu.initialize();UI.ContextMenu.installHandler(document);UI.Tooltip.installHandler(document);var rootView=new UI.RootView();UI.inspectorView.show(rootView.element);rootView.attachToDocument(document);TestRunner.executeTestScript();}};new Shell.TestShell();;self['Diff']=self['Diff']||{};Diff.Diff={charDiff:function(text1,text2,cleanup){var differ=new diff_match_patch();var diff=differ.diff_main(text1,text2);if(cleanup)
differ.diff_cleanupSemantic(diff);return diff;},lineDiff:function(lines1,lines2){var idMap=new Common.CharacterIdMap();var text1=lines1.map(line=>idMap.toChar(line)).join('');var text2=lines2.map(line=>idMap.toChar(line)).join('');var diff=Diff.Diff.charDiff(text1,text2);var lineDiff=[];for(var i=0;i<diff.length;i++){var lines=[];for(var j=0;j<diff[i][1].length;j++)
lines.push(idMap.fromChar(diff[i][1][j]));lineDiff.push({0:diff[i][0],1:lines});}
return lineDiff;},convertToEditDiff:function(diff){var normalized=[];var added=0;var removed=0;for(var i=0;i<diff.length;++i){var token=diff[i];if(token[0]===Diff.Diff.Operation.Equal){flush();normalized.push([Diff.Diff.Operation.Equal,token[1].length]);}else if(token[0]===Diff.Diff.Operation.Delete){removed+=token[1].length;}else{added+=token[1].length;}}
flush();return normalized;function flush(){if(added&&removed){var min=Math.min(added,removed);normalized.push([Diff.Diff.Operation.Edit,min]);added-=min;removed-=min;}
if(added||removed){var balance=added-removed;var type=balance<0?Diff.Diff.Operation.Delete:Diff.Diff.Operation.Insert;normalized.push([type,Math.abs(balance)]);added=0;removed=0;}}}};Diff.Diff.Operation={Equal:0,Insert:1,Delete:-1,Edit:2};Diff.Diff.DiffArray;;(function(){function diff_match_patch(){this.Diff_Timeout=1;this.Diff_EditCost=4;this.Match_Threshold=0.5;this.Match_Distance=1E3;this.Patch_DeleteThreshold=0.5;this.Patch_Margin=4;this.Match_MaxBits=32}
diff_match_patch.prototype.diff_main=function(a,b,c,d){"undefined"==typeof d&&(d=0>=this.Diff_Timeout?Number.MAX_VALUE:(new Date).getTime()+1E3*this.Diff_Timeout);if(null==a||null==b)throw Error("Null input. (diff_main)");if(a==b)return a?[[0,a]]:[];"undefined"==typeof c&&(c=!0);var e=c,f=this.diff_commonPrefix(a,b);c=a.substring(0,f);a=a.substring(f);b=b.substring(f);var f=this.diff_commonSuffix(a,b),g=a.substring(a.length-f);a=a.substring(0,a.length-f);b=b.substring(0,b.length-f);a=this.diff_compute_(a,b,e,d);c&&a.unshift([0,c]);g&&a.push([0,g]);this.diff_cleanupMerge(a);return a};diff_match_patch.prototype.diff_compute_=function(a,b,c,d){if(!a)return[[1,b]];if(!b)return[[-1,a]];var e=a.length>b.length?a:b,f=a.length>b.length?b:a,g=e.indexOf(f);return-1!=g?(c=[[1,e.substring(0,g)],[0,f],[1,e.substring(g+f.length)]],a.length>b.length&&(c[0][0]=c[2][0]=-1),c):1==f.length?[[-1,a],[1,b]]:(e=this.diff_halfMatch_(a,b))?(f=e[0],a=e[1],g=e[2],b=e[3],e=e[4],f=this.diff_main(f,g,c,d),c=this.diff_main(a,b,c,d),f.concat([[0,e]],c)):c&&100<a.length&&100<b.length?this.diff_lineMode_(a,b,d):this.diff_bisect_(a,b,d)};diff_match_patch.prototype.diff_lineMode_=function(a,b,c){var d=this.diff_linesToChars_(a,b);a=d.chars1;b=d.chars2;d=d.lineArray;a=this.diff_main(a,b,!1,c);this.diff_charsToLines_(a,d);this.diff_cleanupSemantic(a);a.push([0,""]);for(var e=d=b=0,f="",g="";b<a.length;){switch(a[b][0]){case 1:e++;g+=a[b][1];break;case-1:d++;f+=a[b][1];break;case 0:if(1<=d&&1<=e){a.splice(b-d-e,d+e);b=b-d-e;d=this.diff_main(f,g,!1,c);for(e=d.length-1;0<=e;e--)a.splice(b,0,d[e]);b+=d.length}d=e=0;g=f=""}b++}a.pop();return a};diff_match_patch.prototype.diff_bisect_=function(a,b,c){for(var d=a.length,e=b.length,f=Math.ceil((d+e)/2),g=f,h=2*f,j=Array(h),i=Array(h),k=0;k<h;k++)j[k]=-1,i[k]=-1;j[g+1]=0;i[g+1]=0;for(var k=d-e,q=0!=k%2,r=0,t=0,p=0,w=0,v=0;v<f&&!((new Date).getTime()>c);v++){for(var n=-v+r;n<=v-t;n+=2){var l=g+n,m;m=n==-v||n!=v&&j[l-1]<j[l+1]?j[l+1]:j[l-1]+1;for(var s=m-n;m<d&&s<e&&a.charAt(m)==b.charAt(s);)m++,s++;j[l]=m;if(m>d)t+=2;else if(s>e)r+=2;else if(q&&(l=g+k-n,0<=l&&l<h&&-1!=i[l])){var u=d-i[l];if(m>=u)return this.diff_bisectSplit_(a,b,m,s,c)}}for(n=-v+p;n<=v-w;n+=2){l=g+n;u=n==-v||n!=v&&i[l-1]<i[l+1]?i[l+1]:i[l-1]+1;for(m=u-n;u<d&&m<e&&a.charAt(d-u-1)==b.charAt(e-m-1);)u++,m++;i[l]=u;if(u>d)w+=2;else if(m>e)p+=2;else if(!q&&(l=g+k-n,0<=l&&(l<h&&-1!=j[l])&&(m=j[l],s=g+m-l,u=d-u,m>=u)))return this.diff_bisectSplit_(a,b,m,s,c)}}return[[-1,a],[1,b]]};diff_match_patch.prototype.diff_bisectSplit_=function(a,b,c,d,e){var f=a.substring(0,c),g=b.substring(0,d);a=a.substring(c);b=b.substring(d);f=this.diff_main(f,g,!1,e);e=this.diff_main(a,b,!1,e);return f.concat(e)};diff_match_patch.prototype.diff_linesToChars_=function(a,b){function c(a){for(var b="",c=0,f=-1,g=d.length;f<a.length-1;){f=a.indexOf("\n",c);-1==f&&(f=a.length-1);var r=a.substring(c,f+1),c=f+1;(e.hasOwnProperty?e.hasOwnProperty(r):void 0!==e[r])?b+=String.fromCharCode(e[r]):(b+=String.fromCharCode(g),e[r]=g,d[g++]=r)}return b}var d=[],e={};d[0]="";var f=c(a),g=c(b);return{chars1:f,chars2:g,lineArray:d}};diff_match_patch.prototype.diff_charsToLines_=function(a,b){for(var c=0;c<a.length;c++){for(var d=a[c][1],e=[],f=0;f<d.length;f++)e[f]=b[d.charCodeAt(f)];a[c][1]=e.join("")}};diff_match_patch.prototype.diff_commonPrefix=function(a,b){if(!a||!b||a.charAt(0)!=b.charAt(0))return 0;for(var c=0,d=Math.min(a.length,b.length),e=d,f=0;c<e;)a.substring(f,e)==b.substring(f,e)?f=c=e:d=e,e=Math.floor((d-c)/2+c);return e};diff_match_patch.prototype.diff_commonSuffix=function(a,b){if(!a||!b||a.charAt(a.length-1)!=b.charAt(b.length-1))return 0;for(var c=0,d=Math.min(a.length,b.length),e=d,f=0;c<e;)a.substring(a.length-e,a.length-f)==b.substring(b.length-e,b.length-f)?f=c=e:d=e,e=Math.floor((d-c)/2+c);return e};diff_match_patch.prototype.diff_commonOverlap_=function(a,b){var c=a.length,d=b.length;if(0==c||0==d)return 0;c>d?a=a.substring(c-d):c<d&&(b=b.substring(0,c));c=Math.min(c,d);if(a==b)return c;for(var d=0,e=1;;){var f=a.substring(c-e),f=b.indexOf(f);if(-1==f)return d;e+=f;if(0==f||a.substring(c-e)==b.substring(0,e))d=e,e++}};diff_match_patch.prototype.diff_halfMatch_=function(a,b){function c(a,b,c){for(var d=a.substring(c,c+Math.floor(a.length/4)),e=-1,g="",h,j,n,l;-1!=(e=b.indexOf(d,e+1));){var m=f.diff_commonPrefix(a.substring(c),b.substring(e)),s=f.diff_commonSuffix(a.substring(0,c),b.substring(0,e));g.length<s+m&&(g=b.substring(e-s,e)+b.substring(e,e+m),h=a.substring(0,c-s),j=a.substring(c+m),n=b.substring(0,e-s),l=b.substring(e+m))}return 2*g.length>=a.length?[h,j,n,l,g]:null}if(0>=this.Diff_Timeout)return null;var d=a.length>b.length?a:b,e=a.length>b.length?b:a;if(4>d.length||2*e.length<d.length)return null;var f=this,g=c(d,e,Math.ceil(d.length/4)),d=c(d,e,Math.ceil(d.length/2)),h;if(!g&&!d)return null;h=d?g?g[4].length>d[4].length?g:d:d:g;var j;a.length>b.length?(g=h[0],d=h[1],e=h[2],j=h[3]):(e=h[0],j=h[1],g=h[2],d=h[3]);h=h[4];return[g,d,e,j,h]};diff_match_patch.prototype.diff_cleanupSemantic=function(a){for(var b=!1,c=[],d=0,e=null,f=0,g=0,h=0,j=0,i=0;f<a.length;)0==a[f][0]?(c[d++]=f,g=j,h=i,i=j=0,e=a[f][1]):(1==a[f][0]?j+=a[f][1].length:i+=a[f][1].length,e&&(e.length<=Math.max(g,h)&&e.length<=Math.max(j,i))&&(a.splice(c[d-1],0,[-1,e]),a[c[d-1]+1][0]=1,d--,d--,f=0<d?c[d-1]:-1,i=j=h=g=0,e=null,b=!0)),f++;b&&this.diff_cleanupMerge(a);this.diff_cleanupSemanticLossless(a);for(f=1;f<a.length;){if(-1==a[f-1][0]&&1==a[f][0]){b=a[f-1][1];c=a[f][1];d=this.diff_commonOverlap_(b,c);e=this.diff_commonOverlap_(c,b);if(d>=e){if(d>=b.length/2||d>=c.length/2)a.splice(f,0,[0,c.substring(0,d)]),a[f-1][1]=b.substring(0,b.length-d),a[f+1][1]=c.substring(d),f++}else if(e>=b.length/2||e>=c.length/2)a.splice(f,0,[0,b.substring(0,e)]),a[f-1][0]=1,a[f-1][1]=c.substring(0,c.length-e),a[f+1][0]=-1,a[f+1][1]=b.substring(e),f++;f++}f++}};diff_match_patch.prototype.diff_cleanupSemanticLossless=function(a){function b(a,b){if(!a||!b)return 6;var c=a.charAt(a.length-1),d=b.charAt(0),e=c.match(diff_match_patch.nonAlphaNumericRegex_),f=d.match(diff_match_patch.nonAlphaNumericRegex_),g=e&&c.match(diff_match_patch.whitespaceRegex_),h=f&&d.match(diff_match_patch.whitespaceRegex_),c=g&&c.match(diff_match_patch.linebreakRegex_),d=h&&d.match(diff_match_patch.linebreakRegex_),i=c&&a.match(diff_match_patch.blanklineEndRegex_),j=d&&b.match(diff_match_patch.blanklineStartRegex_);return i||j?5:c||d?4:e&&!g&&h?3:g||h?2:e||f?1:0}for(var c=1;c<a.length-1;){if(0==a[c-1][0]&&0==a[c+1][0]){var d=a[c-1][1],e=a[c][1],f=a[c+1][1],g=this.diff_commonSuffix(d,e);if(g)var h=e.substring(e.length-g),d=d.substring(0,d.length-g),e=h+e.substring(0,e.length-g),f=h+f;for(var g=d,h=e,j=f,i=b(d,e)+b(e,f);e.charAt(0)===f.charAt(0);){var d=d+e.charAt(0),e=e.substring(1)+f.charAt(0),f=f.substring(1),k=b(d,e)+b(e,f);k>=i&&(i=k,g=d,h=e,j=f)}a[c-1][1]!=g&&(g?a[c-1][1]=g:(a.splice(c-1,1),c--),a[c][1]=h,j?a[c+1][1]=j:(a.splice(c+1,1),c--))}c++}};diff_match_patch.nonAlphaNumericRegex_=/[^a-zA-Z0-9]/;diff_match_patch.whitespaceRegex_=/\s/;diff_match_patch.linebreakRegex_=/[\r\n]/;diff_match_patch.blanklineEndRegex_=/\n\r?\n$/;diff_match_patch.blanklineStartRegex_=/^\r?\n\r?\n/;diff_match_patch.prototype.diff_cleanupEfficiency=function(a){for(var b=!1,c=[],d=0,e=null,f=0,g=!1,h=!1,j=!1,i=!1;f<a.length;){if(0==a[f][0])a[f][1].length<this.Diff_EditCost&&(j||i)?(c[d++]=f,g=j,h=i,e=a[f][1]):(d=0,e=null),j=i=!1;else if(-1==a[f][0]?i=!0:j=!0,e&&(g&&h&&j&&i||e.length<this.Diff_EditCost/2&&3==g+h+j+i))a.splice(c[d-1],0,[-1,e]),a[c[d-1]+1][0]=1,d--,e=null,g&&h?(j=i=!0,d=0):(d--,f=0<d?c[d-1]:-1,j=i=!1),b=!0;f++}b&&this.diff_cleanupMerge(a)};diff_match_patch.prototype.diff_cleanupMerge=function(a){a.push([0,""]);for(var b=0,c=0,d=0,e="",f="",g;b<a.length;)switch(a[b][0]){case 1:d++;f+=a[b][1];b++;break;case-1:c++;e+=a[b][1];b++;break;case 0:1<c+d?(0!==c&&0!==d&&(g=this.diff_commonPrefix(f,e),0!==g&&(0<b-c-d&&0==a[b-c-d-1][0]?a[b-c-d-1][1]+=f.substring(0,g):(a.splice(0,0,[0,f.substring(0,g)]),b++),f=f.substring(g),e=e.substring(g)),g=this.diff_commonSuffix(f,e),0!==g&&(a[b][1]=f.substring(f.length-g)+a[b][1],f=f.substring(0,f.length-
g),e=e.substring(0,e.length-g))),0===c?a.splice(b-d,c+d,[1,f]):0===d?a.splice(b-c,c+d,[-1,e]):a.splice(b-c-d,c+d,[-1,e],[1,f]),b=b-c-d+(c?1:0)+(d?1:0)+1):0!==b&&0==a[b-1][0]?(a[b-1][1]+=a[b][1],a.splice(b,1)):b++,c=d=0,f=e=""}""===a[a.length-1][1]&&a.pop();c=!1;for(b=1;b<a.length-1;)0==a[b-1][0]&&0==a[b+1][0]&&(a[b][1].substring(a[b][1].length-a[b-1][1].length)==a[b-1][1]?(a[b][1]=a[b-1][1]+a[b][1].substring(0,a[b][1].length-a[b-1][1].length),a[b+1][1]=a[b-1][1]+a[b+1][1],a.splice(b-1,1),c=!0):a[b][1].substring(0,a[b+1][1].length)==a[b+1][1]&&(a[b-1][1]+=a[b+1][1],a[b][1]=a[b][1].substring(a[b+1][1].length)+a[b+1][1],a.splice(b+1,1),c=!0)),b++;c&&this.diff_cleanupMerge(a)};diff_match_patch.prototype.diff_xIndex=function(a,b){var c=0,d=0,e=0,f=0,g;for(g=0;g<a.length;g++){1!==a[g][0]&&(c+=a[g][1].length);-1!==a[g][0]&&(d+=a[g][1].length);if(c>b)break;e=c;f=d}return a.length!=g&&-1===a[g][0]?f:f+(b-e)};diff_match_patch.prototype.diff_prettyHtml=function(a){for(var b=[],c=/&/g,d=/</g,e=/>/g,f=/\n/g,g=0;g<a.length;g++){var h=a[g][0],j=a[g][1],j=j.replace(c,"&amp;").replace(d,"&lt;").replace(e,"&gt;").replace(f,"&para;<br>");switch(h){case 1:b[g]='<ins style="background:#e6ffe6;">'+j+"</ins>";break;case-1:b[g]='<del style="background:#ffe6e6;">'+j+"</del>";break;case 0:b[g]="<span>"+j+"</span>"}}return b.join("")};diff_match_patch.prototype.diff_text1=function(a){for(var b=[],c=0;c<a.length;c++)1!==a[c][0]&&(b[c]=a[c][1]);return b.join("")};diff_match_patch.prototype.diff_text2=function(a){for(var b=[],c=0;c<a.length;c++)-1!==a[c][0]&&(b[c]=a[c][1]);return b.join("")};diff_match_patch.prototype.diff_levenshtein=function(a){for(var b=0,c=0,d=0,e=0;e<a.length;e++){var f=a[e][0],g=a[e][1];switch(f){case 1:c+=g.length;break;case-1:d+=g.length;break;case 0:b+=Math.max(c,d),d=c=0}}return b+=Math.max(c,d)};diff_match_patch.prototype.diff_toDelta=function(a){for(var b=[],c=0;c<a.length;c++)switch(a[c][0]){case 1:b[c]="+"+encodeURI(a[c][1]);break;case-1:b[c]="-"+a[c][1].length;break;case 0:b[c]="="+a[c][1].length}return b.join("\t").replace(/%20/g," ")};diff_match_patch.prototype.diff_fromDelta=function(a,b){for(var c=[],d=0,e=0,f=b.split(/\t/g),g=0;g<f.length;g++){var h=f[g].substring(1);switch(f[g].charAt(0)){case"+":try{c[d++]=[1,decodeURI(h)]}catch(j){throw Error("Illegal escape in diff_fromDelta: "+h);}break;case"-":case"=":var i=parseInt(h,10);if(isNaN(i)||0>i)throw Error("Invalid number in diff_fromDelta: "+h);h=a.substring(e,e+=i);"="==f[g].charAt(0)?c[d++]=[0,h]:c[d++]=[-1,h];break;default:if(f[g])throw Error("Invalid diff operation in diff_fromDelta: "+
f[g]);}}if(e!=a.length)throw Error("Delta length ("+e+") does not equal source text length ("+a.length+").");return c};diff_match_patch.prototype.match_main=function(a,b,c){if(null==a||null==b||null==c)throw Error("Null input. (match_main)");c=Math.max(0,Math.min(c,a.length));return a==b?0:a.length?a.substring(c,c+b.length)==b?c:this.match_bitap_(a,b,c):-1};diff_match_patch.prototype.match_bitap_=function(a,b,c){function d(a,d){var e=a/b.length,g=Math.abs(c-d);return!f.Match_Distance?g?1:e:e+g/f.Match_Distance}if(b.length>this.Match_MaxBits)throw Error("Pattern too long for this browser.");var e=this.match_alphabet_(b),f=this,g=this.Match_Threshold,h=a.indexOf(b,c);-1!=h&&(g=Math.min(d(0,h),g),h=a.lastIndexOf(b,c+b.length),-1!=h&&(g=Math.min(d(0,h),g)));for(var j=1<<b.length-1,h=-1,i,k,q=b.length+a.length,r,t=0;t<b.length;t++){i=0;for(k=q;i<k;)d(t,c+
k)<=g?i=k:q=k,k=Math.floor((q-i)/2+i);q=k;i=Math.max(1,c-k+1);var p=Math.min(c+k,a.length)+b.length;k=Array(p+2);for(k[p+1]=(1<<t)-1;p>=i;p--){var w=e[a.charAt(p-1)];k[p]=0===t?(k[p+1]<<1|1)&w:(k[p+1]<<1|1)&w|((r[p+1]|r[p])<<1|1)|r[p+1];if(k[p]&j&&(w=d(t,p-1),w<=g))if(g=w,h=p-1,h>c)i=Math.max(1,2*c-h);else break}if(d(t+1,c)>g)break;r=k}return h};diff_match_patch.prototype.match_alphabet_=function(a){for(var b={},c=0;c<a.length;c++)b[a.charAt(c)]=0;for(c=0;c<a.length;c++)b[a.charAt(c)]|=1<<a.length-c-1;return b};diff_match_patch.prototype.patch_addContext_=function(a,b){if(0!=b.length){for(var c=b.substring(a.start2,a.start2+a.length1),d=0;b.indexOf(c)!=b.lastIndexOf(c)&&c.length<this.Match_MaxBits-this.Patch_Margin-this.Patch_Margin;)d+=this.Patch_Margin,c=b.substring(a.start2-d,a.start2+a.length1+d);d+=this.Patch_Margin;(c=b.substring(a.start2-d,a.start2))&&a.diffs.unshift([0,c]);(d=b.substring(a.start2+a.length1,a.start2+a.length1+d))&&a.diffs.push([0,d]);a.start1-=c.length;a.start2-=c.length;a.length1+=c.length+d.length;a.length2+=c.length+d.length}};diff_match_patch.prototype.patch_make=function(a,b,c){var d;if("string"==typeof a&&"string"==typeof b&&"undefined"==typeof c)d=a,b=this.diff_main(d,b,!0),2<b.length&&(this.diff_cleanupSemantic(b),this.diff_cleanupEfficiency(b));else if(a&&"object"==typeof a&&"undefined"==typeof b&&"undefined"==typeof c)b=a,d=this.diff_text1(b);else if("string"==typeof a&&b&&"object"==typeof b&&"undefined"==typeof c)d=a;else if("string"==typeof a&&"string"==typeof b&&c&&"object"==typeof c)d=a,b=c;else throw Error("Unknown call format to patch_make.");if(0===b.length)return[];c=[];a=new diff_match_patch.patch_obj;for(var e=0,f=0,g=0,h=d,j=0;j<b.length;j++){var i=b[j][0],k=b[j][1];!e&&0!==i&&(a.start1=f,a.start2=g);switch(i){case 1:a.diffs[e++]=b[j];a.length2+=k.length;d=d.substring(0,g)+k+d.substring(g);break;case-1:a.length1+=k.length;a.diffs[e++]=b[j];d=d.substring(0,g)+d.substring(g+k.length);break;case 0:k.length<=2*this.Patch_Margin&&e&&b.length!=j+1?(a.diffs[e++]=b[j],a.length1+=k.length,a.length2+=k.length):k.length>=2*this.Patch_Margin&&e&&(this.patch_addContext_(a,h),c.push(a),a=new diff_match_patch.patch_obj,e=0,h=d,f=g)}1!==i&&(f+=k.length);-1!==i&&(g+=k.length)}e&&(this.patch_addContext_(a,h),c.push(a));return c};diff_match_patch.prototype.patch_deepCopy=function(a){for(var b=[],c=0;c<a.length;c++){var d=a[c],e=new diff_match_patch.patch_obj;e.diffs=[];for(var f=0;f<d.diffs.length;f++)e.diffs[f]=d.diffs[f].slice();e.start1=d.start1;e.start2=d.start2;e.length1=d.length1;e.length2=d.length2;b[c]=e}return b};diff_match_patch.prototype.patch_apply=function(a,b){if(0==a.length)return[b,[]];a=this.patch_deepCopy(a);var c=this.patch_addPadding(a);b=c+b+c;this.patch_splitMax(a);for(var d=0,e=[],f=0;f<a.length;f++){var g=a[f].start2+d,h=this.diff_text1(a[f].diffs),j,i=-1;if(h.length>this.Match_MaxBits){if(j=this.match_main(b,h.substring(0,this.Match_MaxBits),g),-1!=j&&(i=this.match_main(b,h.substring(h.length-this.Match_MaxBits),g+h.length-this.Match_MaxBits),-1==i||j>=i))j=-1}else j=this.match_main(b,h,g);if(-1==j)e[f]=!1,d-=a[f].length2-a[f].length1;else if(e[f]=!0,d=j-g,g=-1==i?b.substring(j,j+h.length):b.substring(j,i+this.Match_MaxBits),h==g)b=b.substring(0,j)+this.diff_text2(a[f].diffs)+b.substring(j+h.length);else if(g=this.diff_main(h,g,!1),h.length>this.Match_MaxBits&&this.diff_levenshtein(g)/h.length>this.Patch_DeleteThreshold)e[f]=!1;else{this.diff_cleanupSemanticLossless(g);for(var h=0,k,i=0;i<a[f].diffs.length;i++){var q=a[f].diffs[i];0!==q[0]&&(k=this.diff_xIndex(g,h));1===q[0]?b=b.substring(0,j+k)+q[1]+b.substring(j+k):-1===q[0]&&(b=b.substring(0,j+k)+b.substring(j+this.diff_xIndex(g,h+q[1].length)));-1!==q[0]&&(h+=q[1].length)}}}b=b.substring(c.length,b.length-c.length);return[b,e]};diff_match_patch.prototype.patch_addPadding=function(a){for(var b=this.Patch_Margin,c="",d=1;d<=b;d++)c+=String.fromCharCode(d);for(d=0;d<a.length;d++)a[d].start1+=b,a[d].start2+=b;var d=a[0],e=d.diffs;if(0==e.length||0!=e[0][0])e.unshift([0,c]),d.start1-=b,d.start2-=b,d.length1+=b,d.length2+=b;else if(b>e[0][1].length){var f=b-e[0][1].length;e[0][1]=c.substring(e[0][1].length)+e[0][1];d.start1-=f;d.start2-=f;d.length1+=f;d.length2+=f}d=a[a.length-1];e=d.diffs;0==e.length||0!=e[e.length-1][0]?(e.push([0,c]),d.length1+=b,d.length2+=b):b>e[e.length-1][1].length&&(f=b-e[e.length-1][1].length,e[e.length-1][1]+=c.substring(0,f),d.length1+=f,d.length2+=f);return c};diff_match_patch.prototype.patch_splitMax=function(a){for(var b=this.Match_MaxBits,c=0;c<a.length;c++)if(!(a[c].length1<=b)){var d=a[c];a.splice(c--,1);for(var e=d.start1,f=d.start2,g="";0!==d.diffs.length;){var h=new diff_match_patch.patch_obj,j=!0;h.start1=e-g.length;h.start2=f-g.length;""!==g&&(h.length1=h.length2=g.length,h.diffs.push([0,g]));for(;0!==d.diffs.length&&h.length1<b-this.Patch_Margin;){var g=d.diffs[0][0],i=d.diffs[0][1];1===g?(h.length2+=i.length,f+=i.length,h.diffs.push(d.diffs.shift()),j=!1):-1===g&&1==h.diffs.length&&0==h.diffs[0][0]&&i.length>2*b?(h.length1+=i.length,e+=i.length,j=!1,h.diffs.push([g,i]),d.diffs.shift()):(i=i.substring(0,b-h.length1-this.Patch_Margin),h.length1+=i.length,e+=i.length,0===g?(h.length2+=i.length,f+=i.length):j=!1,h.diffs.push([g,i]),i==d.diffs[0][1]?d.diffs.shift():d.diffs[0][1]=d.diffs[0][1].substring(i.length))}g=this.diff_text2(h.diffs);g=g.substring(g.length-this.Patch_Margin);i=this.diff_text1(d.diffs).substring(0,this.Patch_Margin);""!==i&&(h.length1+=i.length,h.length2+=i.length,0!==h.diffs.length&&0===h.diffs[h.diffs.length-1][0]?h.diffs[h.diffs.length-1][1]+=i:h.diffs.push([0,i]));j||a.splice(++c,0,h)}}};diff_match_patch.prototype.patch_toText=function(a){for(var b=[],c=0;c<a.length;c++)b[c]=a[c];return b.join("")};diff_match_patch.prototype.patch_fromText=function(a){var b=[];if(!a)return b;a=a.split("\n");for(var c=0,d=/^@@ -(\d+),?(\d*) \+(\d+),?(\d*) @@$/;c<a.length;){var e=a[c].match(d);if(!e)throw Error("Invalid patch string: "+a[c]);var f=new diff_match_patch.patch_obj;b.push(f);f.start1=parseInt(e[1],10);""===e[2]?(f.start1--,f.length1=1):"0"==e[2]?f.length1=0:(f.start1--,f.length1=parseInt(e[2],10));f.start2=parseInt(e[3],10);""===e[4]?(f.start2--,f.length2=1):"0"==e[4]?f.length2=0:(f.start2--,f.length2=parseInt(e[4],10));for(c++;c<a.length;){e=a[c].charAt(0);try{var g=decodeURI(a[c].substring(1))}catch(h){throw Error("Illegal escape in patch_fromText: "+g);}if("-"==e)f.diffs.push([-1,g]);else if("+"==e)f.diffs.push([1,g]);else if(" "==e)f.diffs.push([0,g]);else if("@"==e)break;else if(""!==e)throw Error('Invalid patch mode "'+e+'" in: '+g);c++}}return b};diff_match_patch.patch_obj=function(){this.diffs=[];this.start2=this.start1=null;this.length2=this.length1=0};diff_match_patch.patch_obj.prototype.toString=function(){var a,b;a=0===this.length1?this.start1+",0":1==this.length1?this.start1+1:this.start1+1+","+this.length1;b=0===this.length2?this.start2+",0":1==this.length2?this.start2+1:this.start2+1+","+this.length2;a=["@@ -"+a+" +"+b+" @@\n"];var c;for(b=0;b<this.diffs.length;b++){switch(this.diffs[b][0]){case 1:c="+";break;case-1:c="-";break;case 0:c=" "}a[b+1]=c+encodeURI(this.diffs[b][1])+"\n"}return a.join("").replace(/%20/g," ")};this.diff_match_patch=diff_match_patch;this.DIFF_DELETE=-1;this.DIFF_INSERT=1;this.DIFF_EQUAL=0;})();self['CmModes']=self['CmModes']||{};CmModes.DefaultCodeMirrorMimeMode=function()
{}
CmModes.DefaultCodeMirrorMimeMode.prototype={install:function(extension)
{var modeFileName=extension.descriptor()["fileName"];var modeContent=extension.module().resource(modeFileName);self.eval(modeContent+"\n//# sourceURL="+modeFileName);}};self['Workspace']=self['Workspace']||{};Workspace.FileManager=class extends Common.Object{constructor(){super();this._savedURLsSetting=Common.settings.createLocalSetting('savedURLs',{});this._saveCallbacks={};InspectorFrontendHost.events.addEventListener(InspectorFrontendHostAPI.Events.SavedURL,this._savedURL,this);InspectorFrontendHost.events.addEventListener(InspectorFrontendHostAPI.Events.CanceledSaveURL,this._canceledSaveURL,this);InspectorFrontendHost.events.addEventListener(InspectorFrontendHostAPI.Events.AppendedToURL,this._appendedToURL,this);}
save(url,content,forceSaveAs,callback){var savedURLs=this._savedURLsSetting.get();delete savedURLs[url];this._savedURLsSetting.set(savedURLs);this._saveCallbacks[url]=callback||null;InspectorFrontendHost.save(url,content,forceSaveAs);}
_savedURL(event){var url=(event.data);var savedURLs=this._savedURLsSetting.get();savedURLs[url]=true;this._savedURLsSetting.set(savedURLs);this.dispatchEventToListeners(Workspace.FileManager.Events.SavedURL,url);this._invokeSaveCallback(url,true);}
_invokeSaveCallback(url,accepted){var callback=this._saveCallbacks[url];delete this._saveCallbacks[url];if(callback)
callback(accepted);}
_canceledSaveURL(event){var url=(event.data);this._invokeSaveCallback(url,false);}
isURLSaved(url){var savedURLs=this._savedURLsSetting.get();return savedURLs[url];}
append(url,content){InspectorFrontendHost.append(url,content);}
close(url){}
_appendedToURL(event){var url=(event.data);this.dispatchEventToListeners(Workspace.FileManager.Events.AppendedToURL,url);}};Workspace.FileManager.Events={SavedURL:Symbol('SavedURL'),AppendedToURL:Symbol('AppendedToURL')};Workspace.fileManager;;Workspace.FileSystemMapping=class extends Common.Object{constructor(fileSystemManager){super();this._fileSystemMappingSetting=Common.settings.createLocalSetting('fileSystemMapping',{});this._fileSystemMappings={};this._loadFromSettings();this._eventListeners=[fileSystemManager.addEventListener(Workspace.IsolatedFileSystemManager.Events.FileSystemAdded,this._fileSystemAdded,this),fileSystemManager.addEventListener(Workspace.IsolatedFileSystemManager.Events.FileSystemRemoved,this._fileSystemRemoved,this),];fileSystemManager.waitForFileSystems().then(this._fileSystemsLoaded.bind(this));}
_fileSystemsLoaded(fileSystems){for(var fileSystem of fileSystems)
this._addMappingsForFilesystem(fileSystem);}
_fileSystemAdded(event){var fileSystem=(event.data);this._addMappingsForFilesystem(fileSystem);}
_addMappingsForFilesystem(fileSystem){this.addFileSystem(fileSystem.path());var mappings=fileSystem.projectProperty('mappings');for(var i=0;Array.isArray(mappings)&&i<mappings.length;++i){var mapping=mappings[i];if(!mapping||typeof mapping!=='object')
continue;var folder=mapping['folder'];var url=mapping['url'];if(typeof folder!=='string'||typeof url!=='string')
continue;this.addNonConfigurableFileMapping(fileSystem.path(),url,folder);}}
_fileSystemRemoved(event){var fileSystem=(event.data);this.removeFileSystem(fileSystem.path());}
_loadFromSettings(){var savedMapping=this._fileSystemMappingSetting.get();this._fileSystemMappings={};for(var fileSystemPath in savedMapping){var savedFileSystemMappings=savedMapping[fileSystemPath];fileSystemPath=Common.ParsedURL.platformPathToURL(fileSystemPath);this._fileSystemMappings[fileSystemPath]=[];var fileSystemMappings=this._fileSystemMappings[fileSystemPath];for(var i=0;i<savedFileSystemMappings.length;++i){var savedEntry=savedFileSystemMappings[i];var entry=new Workspace.FileSystemMapping.Entry(fileSystemPath,savedEntry.urlPrefix,savedEntry.pathPrefix,true);fileSystemMappings.push(entry);}}
this._rebuildIndexes();}
_saveToSettings(){var setting={};for(var fileSystemPath in this._fileSystemMappings){setting[fileSystemPath]=[];var entries=this._fileSystemMappings[fileSystemPath];for(var entry of entries){if(entry.configurable)
setting[fileSystemPath].push(entry);}}
this._fileSystemMappingSetting.set(setting);}
_rebuildIndexes(){this._mappingForURLPrefix={};this._urlPrefixes=[];for(var fileSystemPath in this._fileSystemMappings){var fileSystemMapping=this._fileSystemMappings[fileSystemPath];for(var i=0;i<fileSystemMapping.length;++i){var entry=fileSystemMapping[i];if(this._mappingForURLPrefix[entry.urlPrefix]&&!entry.configurable)
continue;this._mappingForURLPrefix[entry.urlPrefix]=entry;if(this._urlPrefixes.indexOf(entry.urlPrefix)===-1)
this._urlPrefixes.push(entry.urlPrefix);}}
this._urlPrefixes.sort();}
addFileSystem(fileSystemPath){if(this._fileSystemMappings[fileSystemPath])
return;this._fileSystemMappings[fileSystemPath]=[];this._saveToSettings();}
removeFileSystem(fileSystemPath){if(!this._fileSystemMappings[fileSystemPath])
return;delete this._fileSystemMappings[fileSystemPath];this._rebuildIndexes();this._saveToSettings();}
addFileMapping(fileSystemPath,urlPrefix,pathPrefix){if(!urlPrefix.endsWith('/'))
urlPrefix+='/';if(!pathPrefix.endsWith('/'))
pathPrefix+='/';if(!pathPrefix.startsWith('/'))
pathPrefix='/'+pathPrefix;this._innerAddFileMapping(fileSystemPath,urlPrefix,pathPrefix,true);this._saveToSettings();}
addNonConfigurableFileMapping(fileSystemPath,urlPrefix,pathPrefix){this._innerAddFileMapping(fileSystemPath,urlPrefix,pathPrefix,false);}
_innerAddFileMapping(fileSystemPath,urlPrefix,pathPrefix,configurable){var entry=new Workspace.FileSystemMapping.Entry(fileSystemPath,urlPrefix,pathPrefix,configurable);this._fileSystemMappings[fileSystemPath].push(entry);this._rebuildIndexes();this.dispatchEventToListeners(Workspace.FileSystemMapping.Events.FileMappingAdded,entry);}
removeFileMapping(fileSystemPath,urlPrefix,pathPrefix){var entry=this._configurableMappingEntryForPathPrefix(fileSystemPath,pathPrefix);if(!entry)
return;this._fileSystemMappings[fileSystemPath].remove(entry);this._rebuildIndexes();this._saveToSettings();this.dispatchEventToListeners(Workspace.FileSystemMapping.Events.FileMappingRemoved,entry);}
_mappingEntryForURL(url){for(var i=this._urlPrefixes.length-1;i>=0;--i){var urlPrefix=this._urlPrefixes[i];if(url.startsWith(urlPrefix))
return this._mappingForURLPrefix[urlPrefix];}
return null;}
_mappingEntryForPath(fileSystemPath,filePath){var entries=this._fileSystemMappings[fileSystemPath];if(!entries)
return null;var entry=null;for(var i=0;i<entries.length;++i){var pathPrefix=entries[i].pathPrefix;if(entry&&entry.configurable&&!entries[i].configurable)
continue;if(entry&&entry.pathPrefix.length>pathPrefix.length)
continue;if(filePath.startsWith(pathPrefix))
entry=entries[i];}
return entry;}
_configurableMappingEntryForPathPrefix(fileSystemPath,pathPrefix){var entries=this._fileSystemMappings[fileSystemPath];for(var i=0;i<entries.length;++i){if(entries[i].configurable&&pathPrefix===entries[i].pathPrefix)
return entries[i];}
return null;}
mappingEntries(fileSystemPath){return this._fileSystemMappings[fileSystemPath].slice();}
hasMappingForNetworkURL(url){return!!this._mappingEntryForURL(url);}
fileForURL(url){var entry=this._mappingEntryForURL(url);if(!entry)
return null;var file={};file.fileSystemPath=entry.fileSystemPath;file.fileURL=entry.fileSystemPath+entry.pathPrefix+url.substr(entry.urlPrefix.length);return file;}
networkURLForFileSystemURL(fileSystemPath,filePath){var relativePath=filePath.substring(fileSystemPath.length);var entry=this._mappingEntryForPath(fileSystemPath,relativePath);if(!entry)
return'';return entry.urlPrefix+relativePath.substring(entry.pathPrefix.length);}
removeMappingForURL(url){var entry=this._mappingEntryForURL(url);if(!entry||!entry.configurable)
return;this._fileSystemMappings[entry.fileSystemPath].remove(entry);this._saveToSettings();}
addMappingForResource(url,fileSystemPath,filePath){var commonPathSuffixLength=0;for(var i=0;i<filePath.length;++i){var filePathCharacter=filePath[filePath.length-1-i];var urlCharacter=url[url.length-1-i];if(filePathCharacter!==urlCharacter)
break;if(filePathCharacter==='/')
commonPathSuffixLength=i;}
var from=fileSystemPath.length;var to=filePath.length-commonPathSuffixLength;var pathPrefix=filePath.substring(from,to);var urlPrefix=url.substr(0,url.length-commonPathSuffixLength);if(to>=from)
this.addFileMapping(fileSystemPath,urlPrefix,pathPrefix);else
this.addFileMapping(fileSystemPath,urlPrefix+pathPrefix,'/');}
resetForTesting(){this._fileSystemMappings={};}
dispose(){Common.EventTarget.removeEventListeners(this._eventListeners);}};Workspace.FileSystemMapping.Events={FileMappingAdded:Symbol('FileMappingAdded'),FileMappingRemoved:Symbol('FileMappingRemoved')};Workspace.FileSystemMapping.Entry=class{constructor(fileSystemPath,urlPrefix,pathPrefix,configurable){this.fileSystemPath=fileSystemPath;this.urlPrefix=urlPrefix;this.pathPrefix=pathPrefix;this.configurable=configurable;}};Workspace.fileSystemMapping;;Workspace.IsolatedFileSystem=class{constructor(manager,path,embedderPath,domFileSystem){this._manager=manager;this._path=path;this._embedderPath=embedderPath;this._domFileSystem=domFileSystem;this._excludedFoldersSetting=Common.settings.createLocalSetting('workspaceExcludedFolders',{});this._excludedFolders=new Set(this._excludedFoldersSetting.get()[path]||[]);this._nonConfigurableExcludedFolders=new Set();this._initialFilePaths=new Set();this._initialGitFolders=new Set();}
static create(manager,path,embedderPath,name,rootURL){var domFileSystem=InspectorFrontendHost.isolatedFileSystem(name,rootURL);if(!domFileSystem)
return Promise.resolve((null));var fileSystem=new Workspace.IsolatedFileSystem(manager,path,embedderPath,domFileSystem);var fileContentPromise=fileSystem.requestFileContentPromise('.devtools');return fileContentPromise.then(onConfigAvailable).then(()=>fileSystem).catchException((null));function onConfigAvailable(projectText){if(projectText){try{var projectObject=JSON.parse(projectText);fileSystem._initializeProject(typeof projectObject==='object'?(projectObject):null);}catch(e){Common.console.error('Invalid project file: '+projectText);}}
return fileSystem._initializeFilePaths();}}
static errorMessage(error){return Common.UIString('File system error: %s',error.message);}
getMetadata(path){var fulfill;var promise=new Promise(f=>fulfill=f);this._domFileSystem.root.getFile(path,undefined,fileEntryLoaded,errorHandler);return promise;function fileEntryLoaded(entry){entry.getMetadata(fulfill,errorHandler);}
function errorHandler(error){var errorMessage=Workspace.IsolatedFileSystem.errorMessage(error);console.error(errorMessage+' when getting file metadata \''+path);fulfill(null);}}
initialFilePaths(){return this._initialFilePaths.valuesArray();}
initialGitFolders(){return this._initialGitFolders.valuesArray();}
path(){return this._path;}
embedderPath(){return this._embedderPath;}
_initializeProject(projectObject){this._projectObject=projectObject;var projectExcludes=this.projectProperty('excludes');if(Array.isArray(projectExcludes)){for(var folder of(projectExcludes)){if(typeof folder==='string')
this._nonConfigurableExcludedFolders.add(folder);}}}
projectProperty(key){return this._projectObject?this._projectObject[key]:null;}
_initializeFilePaths(){var fulfill;var promise=new Promise(x=>fulfill=x);var pendingRequests=1;var boundInnerCallback=innerCallback.bind(this);this._requestEntries('',boundInnerCallback);return promise;function innerCallback(entries){for(var i=0;i<entries.length;++i){var entry=entries[i];if(!entry.isDirectory){if(this._isFileExcluded(entry.fullPath))
continue;this._initialFilePaths.add(entry.fullPath.substr(1));}else{if(entry.fullPath.endsWith('/.git')){var lastSlash=entry.fullPath.lastIndexOf('/');var parentFolder=entry.fullPath.substring(1,lastSlash);this._initialGitFolders.add(parentFolder);}
if(this._isFileExcluded(entry.fullPath+'/'))
continue;++pendingRequests;this._requestEntries(entry.fullPath,boundInnerCallback);}}
if((--pendingRequests===0))
fulfill();}}
createFile(path,name,callback){var newFileIndex=1;if(!name)
name='NewFile';var nameCandidate;this._domFileSystem.root.getDirectory(path,undefined,dirEntryLoaded.bind(this),errorHandler.bind(this));function dirEntryLoaded(dirEntry){var nameCandidate=name;if(newFileIndex>1)
nameCandidate+=newFileIndex;++newFileIndex;dirEntry.getFile(nameCandidate,{create:true,exclusive:true},fileCreated,fileCreationError.bind(this));function fileCreated(entry){callback(entry.fullPath.substr(1));}
function fileCreationError(error){if(error.name==='InvalidModificationError'){dirEntryLoaded.call(this,dirEntry);return;}
var errorMessage=Workspace.IsolatedFileSystem.errorMessage(error);console.error(errorMessage+' when testing if file exists \''+(this._path+'/'+path+'/'+nameCandidate)+'\'');callback(null);}}
function errorHandler(error){var errorMessage=Workspace.IsolatedFileSystem.errorMessage(error);var filePath=this._path+'/'+path;if(nameCandidate)
filePath+='/'+nameCandidate;console.error(errorMessage+' when getting content for file \''+(filePath)+'\'');callback(null);}}
deleteFile(path){this._domFileSystem.root.getFile(path,undefined,fileEntryLoaded.bind(this),errorHandler.bind(this));function fileEntryLoaded(fileEntry){fileEntry.remove(fileEntryRemoved,errorHandler.bind(this));}
function fileEntryRemoved(){}
function errorHandler(error){var errorMessage=Workspace.IsolatedFileSystem.errorMessage(error);console.error(errorMessage+' when deleting file \''+(this._path+'/'+path)+'\'');}}
requestFileContentPromise(path){var fulfill;var promise=new Promise(x=>fulfill=x);this.requestFileContent(path,fulfill);return promise;}
requestFileContent(path,callback){this._domFileSystem.root.getFile(path,undefined,fileEntryLoaded.bind(this),errorHandler.bind(this));function fileEntryLoaded(entry){entry.file(fileLoaded,errorHandler.bind(this));}
function fileLoaded(file){var reader=new FileReader();reader.onloadend=readerLoadEnd;if(Workspace.IsolatedFileSystem.ImageExtensions.has(Common.ParsedURL.extractExtension(path)))
reader.readAsDataURL(file);else
reader.readAsText(file);}
function readerLoadEnd(){var string=null;try{string=(this.result);}catch(e){console.error('Can\'t read file: '+path+': '+e);}
callback(string);}
function errorHandler(error){if(error.name==='NotFoundError'){callback(null);return;}
var errorMessage=Workspace.IsolatedFileSystem.errorMessage(error);console.error(errorMessage+' when getting content for file \''+(this._path+'/'+path)+'\'');callback(null);}}
setFileContent(path,content,callback){Host.userMetrics.actionTaken(Host.UserMetrics.Action.FileSavedInWorkspace);this._domFileSystem.root.getFile(path,{create:true},fileEntryLoaded.bind(this),errorHandler.bind(this));function fileEntryLoaded(entry){entry.createWriter(fileWriterCreated.bind(this),errorHandler.bind(this));}
function fileWriterCreated(fileWriter){fileWriter.onerror=errorHandler.bind(this);fileWriter.onwriteend=fileWritten;var blob=new Blob([content],{type:'text/plain'});fileWriter.write(blob);function fileWritten(){fileWriter.onwriteend=callback;fileWriter.truncate(blob.size);}}
function errorHandler(error){var errorMessage=Workspace.IsolatedFileSystem.errorMessage(error);console.error(errorMessage+' when setting content for file \''+(this._path+'/'+path)+'\'');callback();}}
renameFile(path,newName,callback){newName=newName?newName.trim():newName;if(!newName||newName.indexOf('/')!==-1){callback(false);return;}
var fileEntry;var dirEntry;this._domFileSystem.root.getFile(path,undefined,fileEntryLoaded.bind(this),errorHandler.bind(this));function fileEntryLoaded(entry){if(entry.name===newName){callback(false);return;}
fileEntry=entry;fileEntry.getParent(dirEntryLoaded.bind(this),errorHandler.bind(this));}
function dirEntryLoaded(entry){dirEntry=entry;dirEntry.getFile(newName,null,newFileEntryLoaded,newFileEntryLoadErrorHandler.bind(this));}
function newFileEntryLoaded(entry){callback(false);}
function newFileEntryLoadErrorHandler(error){if(error.name!=='NotFoundError'){callback(false);return;}
fileEntry.moveTo(dirEntry,newName,fileRenamed,errorHandler.bind(this));}
function fileRenamed(entry){callback(true,entry.name);}
function errorHandler(error){var errorMessage=Workspace.IsolatedFileSystem.errorMessage(error);console.error(errorMessage+' when renaming file \''+(this._path+'/'+path)+'\' to \''+newName+'\'');callback(false);}}
_readDirectory(dirEntry,callback){var dirReader=dirEntry.createReader();var entries=[];function innerCallback(results){if(!results.length){callback(entries.sort());}else{entries=entries.concat(toArray(results));dirReader.readEntries(innerCallback,errorHandler);}}
function toArray(list){return Array.prototype.slice.call(list||[],0);}
dirReader.readEntries(innerCallback,errorHandler);function errorHandler(error){var errorMessage=Workspace.IsolatedFileSystem.errorMessage(error);console.error(errorMessage+' when reading directory \''+dirEntry.fullPath+'\'');callback([]);}}
_requestEntries(path,callback){this._domFileSystem.root.getDirectory(path,undefined,innerCallback.bind(this),errorHandler);function innerCallback(dirEntry){this._readDirectory(dirEntry,callback);}
function errorHandler(error){var errorMessage=Workspace.IsolatedFileSystem.errorMessage(error);console.error(errorMessage+' when requesting entry \''+path+'\'');callback([]);}}
_saveExcludedFolders(){var settingValue=this._excludedFoldersSetting.get();settingValue[this._path]=this._excludedFolders.valuesArray();this._excludedFoldersSetting.set(settingValue);}
addExcludedFolder(path){this._excludedFolders.add(path);this._saveExcludedFolders();this._manager.dispatchEventToListeners(Workspace.IsolatedFileSystemManager.Events.ExcludedFolderAdded,path);}
removeExcludedFolder(path){this._excludedFolders.delete(path);this._saveExcludedFolders();this._manager.dispatchEventToListeners(Workspace.IsolatedFileSystemManager.Events.ExcludedFolderRemoved,path);}
fileSystemRemoved(){var settingValue=this._excludedFoldersSetting.get();delete settingValue[this._path];this._excludedFoldersSetting.set(settingValue);}
_isFileExcluded(folderPath){if(this._nonConfigurableExcludedFolders.has(folderPath)||this._excludedFolders.has(folderPath))
return true;var regex=this._manager.workspaceFolderExcludePatternSetting().asRegExp();return!!(regex&&regex.test(folderPath));}
excludedFolders(){return this._excludedFolders;}
nonConfigurableExcludedFolders(){return this._nonConfigurableExcludedFolders;}
searchInPath(query,progress,callback){var requestId=this._manager.registerCallback(innerCallback);InspectorFrontendHost.searchInPath(requestId,this._embedderPath,query);function innerCallback(files){files=files.map(embedderPath=>Common.ParsedURL.platformPathToURL(embedderPath));progress.worked(1);callback(files);}}
indexContent(progress){progress.setTotalWork(1);var requestId=this._manager.registerProgress(progress);InspectorFrontendHost.indexPath(requestId,this._embedderPath);}};Workspace.IsolatedFileSystem.ImageExtensions=new Set(['jpeg','jpg','svg','gif','webp','png','ico','tiff','tif','bmp']);;Workspace.IsolatedFileSystemManager=class extends Common.Object{constructor(){super();this._fileSystems=new Map();this._callbacks=new Map();this._progresses=new Map();InspectorFrontendHost.events.addEventListener(InspectorFrontendHostAPI.Events.FileSystemRemoved,this._onFileSystemRemoved,this);InspectorFrontendHost.events.addEventListener(InspectorFrontendHostAPI.Events.FileSystemAdded,this._onFileSystemAdded,this);InspectorFrontendHost.events.addEventListener(InspectorFrontendHostAPI.Events.FileSystemFilesChangedAddedRemoved,this._onFileSystemFilesChanged,this);InspectorFrontendHost.events.addEventListener(InspectorFrontendHostAPI.Events.IndexingTotalWorkCalculated,this._onIndexingTotalWorkCalculated,this);InspectorFrontendHost.events.addEventListener(InspectorFrontendHostAPI.Events.IndexingWorked,this._onIndexingWorked,this);InspectorFrontendHost.events.addEventListener(InspectorFrontendHostAPI.Events.IndexingDone,this._onIndexingDone,this);InspectorFrontendHost.events.addEventListener(InspectorFrontendHostAPI.Events.SearchCompleted,this._onSearchCompleted,this);this._initExcludePatterSetting();this._fileSystemsLoadedPromise=this._requestFileSystems();}
_requestFileSystems(){var fulfill;var promise=new Promise(f=>fulfill=f);InspectorFrontendHost.events.addEventListener(InspectorFrontendHostAPI.Events.FileSystemsLoaded,onFileSystemsLoaded,this);InspectorFrontendHost.requestFileSystems();return promise;function onFileSystemsLoaded(event){var fileSystems=(event.data);var promises=[];for(var i=0;i<fileSystems.length;++i)
promises.push(this._innerAddFileSystem(fileSystems[i],false));Promise.all(promises).then(onFileSystemsAdded);}
function onFileSystemsAdded(fileSystems){fulfill(fileSystems.filter(fs=>!!fs));}}
addFileSystem(){InspectorFrontendHost.addFileSystem('');}
removeFileSystem(fileSystem){InspectorFrontendHost.removeFileSystem(fileSystem.embedderPath());}
waitForFileSystems(){return this._fileSystemsLoadedPromise;}
_innerAddFileSystem(fileSystem,dispatchEvent){var embedderPath=fileSystem.fileSystemPath;var fileSystemURL=Common.ParsedURL.platformPathToURL(fileSystem.fileSystemPath);var promise=Workspace.IsolatedFileSystem.create(this,fileSystemURL,embedderPath,fileSystem.fileSystemName,fileSystem.rootURL);return promise.then(storeFileSystem.bind(this));function storeFileSystem(fileSystem){if(!fileSystem)
return null;this._fileSystems.set(fileSystemURL,fileSystem);if(dispatchEvent)
this.dispatchEventToListeners(Workspace.IsolatedFileSystemManager.Events.FileSystemAdded,fileSystem);return fileSystem;}}
_onFileSystemAdded(event){var errorMessage=(event.data['errorMessage']);var fileSystem=(event.data['fileSystem']);if(errorMessage)
Common.console.error(errorMessage);else if(fileSystem)
this._innerAddFileSystem(fileSystem,true);}
_onFileSystemRemoved(event){var embedderPath=(event.data);var fileSystemPath=Common.ParsedURL.platformPathToURL(embedderPath);var isolatedFileSystem=this._fileSystems.get(fileSystemPath);if(!isolatedFileSystem)
return;this._fileSystems.delete(fileSystemPath);isolatedFileSystem.fileSystemRemoved();this.dispatchEventToListeners(Workspace.IsolatedFileSystemManager.Events.FileSystemRemoved,isolatedFileSystem);}
_onFileSystemFilesChanged(event){var paths=(event.data);var urlPaths={};urlPaths.changed=paths.changed.map(embedderPath=>Common.ParsedURL.platformPathToURL(embedderPath));urlPaths.added=paths.added.map(embedderPath=>Common.ParsedURL.platformPathToURL(embedderPath));urlPaths.removed=paths.removed.map(embedderPath=>Common.ParsedURL.platformPathToURL(embedderPath));this.dispatchEventToListeners(Workspace.IsolatedFileSystemManager.Events.FileSystemFilesChanged,urlPaths);}
fileSystems(){return this._fileSystems.valuesArray();}
fileSystem(fileSystemPath){return this._fileSystems.get(fileSystemPath)||null;}
_initExcludePatterSetting(){var defaultCommonExcludedFolders=['/node_modules/','/bower_components/','/\\.devtools','/\\.git/','/\\.sass-cache/','/\\.hg/','/\\.idea/','/\\.svn/','/\\.cache/','/\\.project/'];var defaultWinExcludedFolders=['/Thumbs.db$','/ehthumbs.db$','/Desktop.ini$','/\\$RECYCLE.BIN/'];var defaultMacExcludedFolders=['/\\.DS_Store$','/\\.Trashes$','/\\.Spotlight-V100$','/\\.AppleDouble$','/\\.LSOverride$','/Icon$','/\\._.*$'];var defaultLinuxExcludedFolders=['/.*~$'];var defaultExcludedFolders=defaultCommonExcludedFolders;if(Host.isWin())
defaultExcludedFolders=defaultExcludedFolders.concat(defaultWinExcludedFolders);else if(Host.isMac())
defaultExcludedFolders=defaultExcludedFolders.concat(defaultMacExcludedFolders);else
defaultExcludedFolders=defaultExcludedFolders.concat(defaultLinuxExcludedFolders);var defaultExcludedFoldersPattern=defaultExcludedFolders.join('|');this._workspaceFolderExcludePatternSetting=Common.settings.createRegExpSetting('workspaceFolderExcludePattern',defaultExcludedFoldersPattern,Host.isWin()?'i':'');}
workspaceFolderExcludePatternSetting(){return this._workspaceFolderExcludePatternSetting;}
registerCallback(callback){var requestId=++Workspace.IsolatedFileSystemManager._lastRequestId;this._callbacks.set(requestId,callback);return requestId;}
registerProgress(progress){var requestId=++Workspace.IsolatedFileSystemManager._lastRequestId;this._progresses.set(requestId,progress);return requestId;}
_onIndexingTotalWorkCalculated(event){var requestId=(event.data['requestId']);var totalWork=(event.data['totalWork']);var progress=this._progresses.get(requestId);if(!progress)
return;progress.setTotalWork(totalWork);}
_onIndexingWorked(event){var requestId=(event.data['requestId']);var worked=(event.data['worked']);var progress=this._progresses.get(requestId);if(!progress)
return;progress.worked(worked);if(progress.isCanceled()){InspectorFrontendHost.stopIndexing(requestId);this._onIndexingDone(event);}}
_onIndexingDone(event){var requestId=(event.data['requestId']);var progress=this._progresses.get(requestId);if(!progress)
return;progress.done();this._progresses.delete(requestId);}
_onSearchCompleted(event){var requestId=(event.data['requestId']);var files=(event.data['files']);var callback=this._callbacks.get(requestId);if(!callback)
return;callback.call(null,files);this._callbacks.delete(requestId);}};Workspace.IsolatedFileSystemManager.FileSystem;Workspace.IsolatedFileSystemManager.FilesChangedData;Workspace.IsolatedFileSystemManager.Events={FileSystemAdded:Symbol('FileSystemAdded'),FileSystemRemoved:Symbol('FileSystemRemoved'),FileSystemFilesChanged:Symbol('FileSystemFilesChanged'),ExcludedFolderAdded:Symbol('ExcludedFolderAdded'),ExcludedFolderRemoved:Symbol('ExcludedFolderRemoved')};Workspace.IsolatedFileSystemManager._lastRequestId=0;Workspace.isolatedFileSystemManager;;Workspace.SearchConfig=class{constructor(query,ignoreCase,isRegex){this._query=query;this._ignoreCase=ignoreCase;this._isRegex=isRegex;this._parse();}
static fromPlainObject(object){return new Workspace.SearchConfig(object.query,object.ignoreCase,object.isRegex);}
query(){return this._query;}
ignoreCase(){return this._ignoreCase;}
isRegex(){return this._isRegex;}
toPlainObject(){return{query:this.query(),ignoreCase:this.ignoreCase(),isRegex:this.isRegex()};}
_parse(){var quotedPattern=/"([^\\"]|\\.)+"/;var unquotedWordPattern=/(\s*(?!-?f(ile)?:)[^\\ ]|\\.)+/;var unquotedPattern=unquotedWordPattern.source+'(\\s+'+unquotedWordPattern.source+')*';var pattern=['(\\s*'+Workspace.SearchConfig.FilePatternRegex.source+'\\s*)','('+quotedPattern.source+')','('+unquotedPattern+')',].join('|');var regexp=new RegExp(pattern,'g');var queryParts=this._query.match(regexp)||[];this._fileQueries=[];this._queries=[];for(var i=0;i<queryParts.length;++i){var queryPart=queryParts[i];if(!queryPart)
continue;var fileQuery=this._parseFileQuery(queryPart);if(fileQuery){this._fileQueries.push(fileQuery);this._fileRegexQueries=this._fileRegexQueries||[];this._fileRegexQueries.push({regex:new RegExp(fileQuery.text,this.ignoreCase?'i':''),isNegative:fileQuery.isNegative});continue;}
if(this._isRegex){this._queries.push(queryPart);continue;}
if(queryPart.startsWith('"')){if(!queryPart.endsWith('"'))
continue;this._queries.push(this._parseQuotedQuery(queryPart));continue;}
this._queries.push(this._parseUnquotedQuery(queryPart));}}
filePathMatchesFileQuery(filePath){if(!this._fileRegexQueries)
return true;for(var i=0;i<this._fileRegexQueries.length;++i){if(!!filePath.match(this._fileRegexQueries[i].regex)===this._fileRegexQueries[i].isNegative)
return false;}
return true;}
queries(){return this._queries;}
_parseUnquotedQuery(query){return query.replace(/\\(.)/g,'$1');}
_parseQuotedQuery(query){return query.substring(1,query.length-1).replace(/\\(.)/g,'$1');}
_parseFileQuery(query){var match=query.match(Workspace.SearchConfig.FilePatternRegex);if(!match)
return null;var isNegative=!!match[1];query=match[3];var result='';for(var i=0;i<query.length;++i){var char=query[i];if(char==='*'){result+='.*';}else if(char==='\\'){++i;var nextChar=query[i];if(nextChar===' ')
result+=' ';}else{if(String.regexSpecialCharacters().indexOf(query.charAt(i))!==-1)
result+='\\';result+=query.charAt(i);}}
return new Workspace.SearchConfig.QueryTerm(result,isNegative);}};Workspace.SearchConfig.FilePatternRegex=/(-)?f(ile)?:((?:[^\\ ]|\\.)+)/;Workspace.SearchConfig.RegexQuery;Workspace.SearchConfig.QueryTerm=class{constructor(text,isNegative){this.text=text;this.isNegative=isNegative;}};;Workspace.UISourceCode=class extends Common.Object{constructor(project,url,contentType){super();this._project=project;this._url=url;var parsedURL=url.asParsedURL();if(parsedURL){this._origin=parsedURL.securityOrigin();this._parentURL=this._origin+parsedURL.folderPathComponents;this._name=parsedURL.lastPathComponent;if(parsedURL.queryParams)
this._name+='?'+parsedURL.queryParams;}else{this._origin='';this._parentURL='';this._name=url;}
this._contentType=contentType;this._requestContentPromise=null;this._decorations=null;this._history=null;this._messages=null;this._contentLoaded=false;this._content=null;this._forceLoadOnCheckContent=false;this._checkingContent=false;this._lastAcceptedContent=null;this._workingCopy=null;this._workingCopyGetter=null;}
requestMetadata(){return this._project.requestMetadata(this);}
name(){return this._name;}
url(){return this._url;}
parentURL(){return this._parentURL;}
origin(){return this._origin;}
fullDisplayName(){return this._project.fullDisplayName(this);}
displayName(skipTrim){if(!this._name)
return Common.UIString('(index)');var name=this._name;try{name=decodeURI(name);}catch(e){}
return skipTrim?name:name.trimEnd(100);}
canRename(){return this._project.canRename();}
rename(newName,callback){this._project.rename(this,newName,innerCallback.bind(this));function innerCallback(success,newName,newURL,newContentType){if(success){this._updateName((newName),(newURL),(newContentType));}
callback(success);}}
remove(){this._project.deleteFile(this);}
_updateName(name,url,contentType){this._url=this._url.substring(0,this._url.length-this._name.length)+name;this._name=name;if(url)
this._url=url;if(contentType)
this._contentType=contentType;this.dispatchEventToListeners(Workspace.UISourceCode.Events.TitleChanged,this);}
contentURL(){return this.url();}
contentType(){return this._contentType;}
project(){return this._project;}
requestContent(){if(this._requestContentPromise)
return this._requestContentPromise;if(this._contentLoaded){this._requestContentPromise=Promise.resolve(this._content);}else{var fulfill;this._requestContentPromise=new Promise(x=>fulfill=x);this._project.requestFileContent(this,content=>{this._contentLoaded=true;this._content=content;fulfill(content);});}
return this._requestContentPromise;}
checkContentUpdated(){if(!this._contentLoaded&&!this._forceLoadOnCheckContent)
return;if(!this._project.canSetFileContent()||this._checkingContent)
return;this._checkingContent=true;this._project.requestFileContent(this,contentLoaded.bind(this));function contentLoaded(updatedContent){this._checkingContent=false;if(updatedContent===null){var workingCopy=this.workingCopy();this._contentCommitted('',false);this.setWorkingCopy(workingCopy);return;}
if(this._lastAcceptedContent===updatedContent)
return;if(this._content===updatedContent){this._lastAcceptedContent=null;return;}
if(!this.isDirty()||this._workingCopy===updatedContent){this._contentCommitted(updatedContent,false);return;}
var shouldUpdate=window.confirm(Common.UIString('This file was changed externally. Would you like to reload it?'));if(shouldUpdate)
this._contentCommitted(updatedContent,false);else
this._lastAcceptedContent=updatedContent;}}
forceLoadOnCheckContent(){this._forceLoadOnCheckContent=true;}
requestOriginalContent(){var callback;var promise=new Promise(fulfill=>callback=fulfill);this._project.requestFileContent(this,callback);return promise;}
_commitContent(content){if(this._project.canSetFileContent()){this._project.setFileContent(this,content,function(){});}else if(this._url&&Workspace.fileManager.isURLSaved(this._url)){Workspace.fileManager.save(this._url,content,false,function(){});Workspace.fileManager.close(this._url);}
this._contentCommitted(content,true);}
_contentCommitted(content,committedByUser){this._lastAcceptedContent=null;this._content=content;this._contentLoaded=true;this._requestContentPromise=null;if(!this._history)
this._history=[];var lastRevision=this._history.length?this._history[this._history.length-1]:null;if(!lastRevision||lastRevision._content!==this._content){var revision=new Workspace.Revision(this,this._content,new Date());this._history.push(revision);}
this._innerResetWorkingCopy();this.dispatchEventToListeners(Workspace.UISourceCode.Events.WorkingCopyCommitted,{uiSourceCode:this,content:content});this._project.workspace().dispatchEventToListeners(Workspace.Workspace.Events.WorkingCopyCommitted,{uiSourceCode:this,content:content});if(committedByUser){this._project.workspace().dispatchEventToListeners(Workspace.Workspace.Events.WorkingCopyCommittedByUser,{uiSourceCode:this,content:content});}}
saveAs(){Workspace.fileManager.save(this._url,this.workingCopy(),true,callback.bind(this));Workspace.fileManager.close(this._url);function callback(accepted){if(accepted)
this._contentCommitted(this.workingCopy(),true);}}
addRevision(content){this._commitContent(content);}
revertToOriginal(){function callback(content){if(typeof content!=='string')
return;this.addRevision(content);}
Host.userMetrics.actionTaken(Host.UserMetrics.Action.RevisionApplied);return this.requestOriginalContent().then(callback.bind(this));}
revertAndClearHistory(callback){function revert(content){if(typeof content!=='string')
return;this.addRevision(content);this._history=null;callback(this);}
Host.userMetrics.actionTaken(Host.UserMetrics.Action.RevisionApplied);this.requestOriginalContent().then(revert.bind(this));}
history(){if(!this._history)
this._history=[];return this._history;}
workingCopy(){if(this._workingCopyGetter){this._workingCopy=this._workingCopyGetter();this._workingCopyGetter=null;}
if(this.isDirty())
return(this._workingCopy);return this._content||'';}
resetWorkingCopy(){this._innerResetWorkingCopy();this._workingCopyChanged();}
_innerResetWorkingCopy(){this._workingCopy=null;this._workingCopyGetter=null;}
setWorkingCopy(newWorkingCopy){this._workingCopy=newWorkingCopy;this._workingCopyGetter=null;this._workingCopyChanged();}
setWorkingCopyGetter(workingCopyGetter){this._workingCopyGetter=workingCopyGetter;this._workingCopyChanged();}
_workingCopyChanged(){this._removeAllMessages();this.dispatchEventToListeners(Workspace.UISourceCode.Events.WorkingCopyChanged,this);this._project.workspace().dispatchEventToListeners(Workspace.Workspace.Events.WorkingCopyChanged,{uiSourceCode:this});}
removeWorkingCopyGetter(){if(!this._workingCopyGetter)
return;this._workingCopy=this._workingCopyGetter();this._workingCopyGetter=null;}
commitWorkingCopy(){if(this.isDirty())
this._commitContent(this.workingCopy());}
isDirty(){return this._workingCopy!==null||this._workingCopyGetter!==null;}
extension(){return Common.ParsedURL.extractExtension(this._name);}
content(){return this._content;}
searchInContent(query,caseSensitive,isRegex,callback){var content=this.content();if(!content){this._project.searchInFileContent(this,query,caseSensitive,isRegex,callback);return;}
setTimeout(doSearch.bind(null,content),0);function doSearch(content){callback(Common.ContentProvider.performSearchInContent(content,query,caseSensitive,isRegex));}}
contentLoaded(){return this._contentLoaded;}
uiLocation(lineNumber,columnNumber){if(typeof columnNumber==='undefined')
columnNumber=0;return new Workspace.UILocation(this,lineNumber,columnNumber);}
messages(){return this._messages?new Set(this._messages):new Set();}
addLineMessage(level,text,lineNumber,columnNumber){return this.addMessage(level,text,new Common.TextRange(lineNumber,columnNumber||0,lineNumber,columnNumber||0));}
addMessage(level,text,range){var message=new Workspace.UISourceCode.Message(this,level,text,range);if(!this._messages)
this._messages=new Set();this._messages.add(message);this.dispatchEventToListeners(Workspace.UISourceCode.Events.MessageAdded,message);return message;}
removeMessage(message){if(this._messages&&this._messages.delete(message))
this.dispatchEventToListeners(Workspace.UISourceCode.Events.MessageRemoved,message);}
_removeAllMessages(){if(!this._messages)
return;for(var message of this._messages)
this.dispatchEventToListeners(Workspace.UISourceCode.Events.MessageRemoved,message);this._messages=null;}
addLineDecoration(lineNumber,type,data){this.addDecoration(Common.TextRange.createFromLocation(lineNumber,0),type,data);}
addDecoration(range,type,data){var marker=new Workspace.UISourceCode.LineMarker(range,type,data);if(!this._decorations)
this._decorations=new Multimap();this._decorations.set(type,marker);this.dispatchEventToListeners(Workspace.UISourceCode.Events.LineDecorationAdded,marker);}
removeDecorationsForType(type){if(!this._decorations)
return;var markers=this._decorations.get(type);this._decorations.removeAll(type);markers.forEach(marker=>{this.dispatchEventToListeners(Workspace.UISourceCode.Events.LineDecorationRemoved,marker);});}
allDecorations(){return this._decorations?this._decorations.valuesArray():[];}
removeAllDecorations(){if(!this._decorations)
return;var decorationList=this._decorations.valuesArray();this._decorations.clear();decorationList.forEach(marker=>this.dispatchEventToListeners(Workspace.UISourceCode.Events.LineDecorationRemoved,marker));}
decorationsForType(type){return this._decorations?this._decorations.get(type):null;}};Workspace.UISourceCode.Events={WorkingCopyChanged:Symbol('WorkingCopyChanged'),WorkingCopyCommitted:Symbol('WorkingCopyCommitted'),TitleChanged:Symbol('TitleChanged'),MessageAdded:Symbol('MessageAdded'),MessageRemoved:Symbol('MessageRemoved'),LineDecorationAdded:Symbol('LineDecorationAdded'),LineDecorationRemoved:Symbol('LineDecorationRemoved')};Workspace.UILocation=class{constructor(uiSourceCode,lineNumber,columnNumber){this.uiSourceCode=uiSourceCode;this.lineNumber=lineNumber;this.columnNumber=columnNumber;}
linkText(){var linkText=this.uiSourceCode.displayName();if(typeof this.lineNumber==='number')
linkText+=':'+(this.lineNumber+1);return linkText;}
id(){return this.uiSourceCode.project().id()+':'+this.uiSourceCode.url()+':'+this.lineNumber+':'+
this.columnNumber;}
toUIString(){return this.uiSourceCode.url()+':'+(this.lineNumber+1);}
static comparator(location1,location2){return location1.compareTo(location2);}
compareTo(other){if(this.uiSourceCode.url()!==other.uiSourceCode.url())
return this.uiSourceCode.url()>other.uiSourceCode.url()?1:-1;if(this.lineNumber!==other.lineNumber)
return this.lineNumber-other.lineNumber;return this.columnNumber-other.columnNumber;}};Workspace.Revision=class{constructor(uiSourceCode,content,timestamp){this._uiSourceCode=uiSourceCode;this._content=content;this._timestamp=timestamp;}
get uiSourceCode(){return this._uiSourceCode;}
get timestamp(){return this._timestamp;}
get content(){return this._content||null;}
revertToThis(){function revert(content){if(content&&this._uiSourceCode._content!==content)
this._uiSourceCode.addRevision(content);}
Host.userMetrics.actionTaken(Host.UserMetrics.Action.RevisionApplied);return this.requestContent().then(revert.bind(this));}
contentURL(){return this._uiSourceCode.url();}
contentType(){return this._uiSourceCode.contentType();}
requestContent(){return Promise.resolve((this._content||''));}
searchInContent(query,caseSensitive,isRegex,callback){callback([]);}};Workspace.UISourceCode.Message=class{constructor(uiSourceCode,level,text,range){this._uiSourceCode=uiSourceCode;this._level=level;this._text=text;this._range=range;}
uiSourceCode(){return this._uiSourceCode;}
level(){return this._level;}
text(){return this._text;}
range(){return this._range;}
lineNumber(){return this._range.startLine;}
columnNumber(){return this._range.startColumn;}
isEqual(another){return this._uiSourceCode===another._uiSourceCode&&this.text()===another.text()&&this.level()===another.level()&&this.range().equal(another.range());}
remove(){this._uiSourceCode.removeMessage(this);}};Workspace.UISourceCode.Message.Level={Error:'Error',Warning:'Warning'};Workspace.UISourceCode.LineMarker=class{constructor(range,type,data){this._range=range;this._type=type;this._data=data;}
range(){return this._range;}
type(){return this._type;}
data(){return this._data;}};Workspace.UISourceCodeMetadata=class{constructor(modificationTime,contentSize){this.modificationTime=modificationTime;this.contentSize=contentSize;}};;Workspace.ProjectSearchConfig=function(){};Workspace.ProjectSearchConfig.prototype={query(){},ignoreCase(){},isRegex(){},queries(){},filePathMatchesFileQuery(filePath){}};Workspace.Project=function(){};Workspace.Project.prototype={workspace(){},id(){},type(){},isServiceProject(){},displayName(){},requestMetadata(uiSourceCode){},requestFileContent(uiSourceCode,callback){},canSetFileContent(){},setFileContent(uiSourceCode,newContent,callback){},fullDisplayName(uiSourceCode){},canRename(){},rename(uiSourceCode,newName,callback){},excludeFolder(path){},createFile(path,name,content,callback){},deleteFile(uiSourceCode){},remove(){},searchInFileContent(uiSourceCode,query,caseSensitive,isRegex,callback){},findFilesMatchingSearchRequest(searchConfig,filesMathingFileQuery,progress,callback){},indexContent(progress){},uiSourceCodeForURL(url){},uiSourceCodes(){}};Workspace.projectTypes={Debugger:'debugger',Formatter:'formatter',Network:'network',Snippets:'snippets',FileSystem:'filesystem',ContentScripts:'contentscripts',Service:'service'};Workspace.ProjectStore=class{constructor(workspace,id,type,displayName){this._workspace=workspace;this._id=id;this._type=type;this._displayName=displayName;this._uiSourceCodesMap=new Map();this._uiSourceCodesList=[];this._project=(this);}
id(){return this._id;}
type(){return this._type;}
displayName(){return this._displayName;}
workspace(){return this._workspace;}
createUISourceCode(url,contentType){return new Workspace.UISourceCode(this._project,url,contentType);}
addUISourceCode(uiSourceCode,replace){var url=uiSourceCode.url();if(this.uiSourceCodeForURL(url)){if(replace)
this.removeUISourceCode(url);else
return false;}
this._uiSourceCodesMap.set(url,{uiSourceCode:uiSourceCode,index:this._uiSourceCodesList.length});this._uiSourceCodesList.push(uiSourceCode);this._workspace.dispatchEventToListeners(Workspace.Workspace.Events.UISourceCodeAdded,uiSourceCode);return true;}
removeUISourceCode(url){var uiSourceCode=this.uiSourceCodeForURL(url);if(!uiSourceCode)
return;var entry=this._uiSourceCodesMap.get(url);var movedUISourceCode=this._uiSourceCodesList[this._uiSourceCodesList.length-1];this._uiSourceCodesList[entry.index]=movedUISourceCode;var movedEntry=this._uiSourceCodesMap.get(movedUISourceCode.url());movedEntry.index=entry.index;this._uiSourceCodesList.splice(this._uiSourceCodesList.length-1,1);this._uiSourceCodesMap.delete(url);this._workspace.dispatchEventToListeners(Workspace.Workspace.Events.UISourceCodeRemoved,entry.uiSourceCode);}
removeProject(){this._workspace._removeProject(this._project);this._uiSourceCodesMap=new Map();this._uiSourceCodesList=[];}
uiSourceCodeForURL(url){var entry=this._uiSourceCodesMap.get(url);return entry?entry.uiSourceCode:null;}
uiSourceCodes(){return this._uiSourceCodesList;}
renameUISourceCode(uiSourceCode,newName){var oldPath=uiSourceCode.url();var newPath=uiSourceCode.parentURL()?uiSourceCode.parentURL()+'/'+newName:newName;var value=(this._uiSourceCodesMap.get(oldPath));this._uiSourceCodesMap.set(newPath,value);this._uiSourceCodesMap.delete(oldPath);}};Workspace.Workspace=class extends Common.Object{constructor(){super();this._projects=new Map();this._hasResourceContentTrackingExtensions=false;}
uiSourceCode(projectId,url){var project=this._projects.get(projectId);return project?project.uiSourceCodeForURL(url):null;}
uiSourceCodeForURL(url){for(var project of this._projects.values()){var uiSourceCode=project.uiSourceCodeForURL(url);if(uiSourceCode)
return uiSourceCode;}
return null;}
uiSourceCodesForProjectType(type){var result=[];for(var project of this._projects.values()){if(project.type()===type)
result=result.concat(project.uiSourceCodes());}
return result;}
addProject(project){console.assert(!this._projects.has(project.id()),`A project with id ${project.id()} already exists!`);this._projects.set(project.id(),project);this.dispatchEventToListeners(Workspace.Workspace.Events.ProjectAdded,project);}
_removeProject(project){this._projects.delete(project.id());this.dispatchEventToListeners(Workspace.Workspace.Events.ProjectRemoved,project);}
project(projectId){return this._projects.get(projectId)||null;}
projects(){return this._projects.valuesArray();}
projectsForType(type){function filterByType(project){return project.type()===type;}
return this.projects().filter(filterByType);}
uiSourceCodes(){var result=[];for(var project of this._projects.values())
result=result.concat(project.uiSourceCodes());return result;}
setHasResourceContentTrackingExtensions(hasExtensions){this._hasResourceContentTrackingExtensions=hasExtensions;}
Runtime.startApplication('unit_test_runner');