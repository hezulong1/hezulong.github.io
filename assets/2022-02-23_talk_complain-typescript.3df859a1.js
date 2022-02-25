import{_ as c}from"./Post.5496ee9e.js";import{n as s,f as d,w as p,o as u,a as e,l}from"./vendor.52c9c703.js";import"./app.0dcf2857.js";const r=e("div",{class:"prose m-auto"},[e("p",null,"\u8BF4\u8D77 TypeScript\uFF0C\u8BA4\u8BC6\u7684\u8FD8\u86EE\u65E9\uFF0C\u56E0\u4E3A\u4E0D\u559C\u6B22\u5F3A\u7C7B\u578B\uFF0C\u6240\u4EE5\u5E76\u4E0D\u662F\u5F88\u559C\u6B22\u3002\u4F46\u662F\u968F\u7740\u8D8A\u6765\u8D8A\u591A\u7684\u7A0B\u5E8F\u5458\u4F7F\u7528\uFF0C\u6162\u6162\u7684\u6211\u4E5F\u91CD\u65B0\u5BA1\u89C6\u81EA\u5DF1\uFF0C\u662F\u4E0D\u662F\u592A\u4E95\u5E95\u4E4B\u86D9\u4E86\u3002"),e("p",null,[l("\u6240\u4EE5\u6211\u6700\u8FD1\u53C8\u91CD\u65B0\u62FE\u8D77\uFF0C\u4E00\u8FB9\u9605\u8BFB\u4E00\u4E9B\u4F18\u79C0\u7684 TypeScript \u6E90\u7801\uFF0C\u4E00\u8FB9\u7F16\u5199\u5C0F\u5DE5\u5177 "),e("a",{href:"https://www.npmjs.com/package/resize-detector-typescript",target:"_blank",rel:"noopener"},"resize-detector"),l("\uFF0C\u4E3A\u4E86\u5DE9\u56FA\u4E0B\u6240\u5B66\u3002\u7EC8\u4E8E\u7ED3\u675F\u4E86\uFF0C\u5BF9\u6BD4\u4E4B\u524D\u6211\u4F7F\u7528 js \u76F4\u63A5\u5F00\u53D1\u529F\u80FD\uFF0C\u5728\u4F7F\u7528 ts \u65F6\u5019\uFF0C\u8C08\u4E0B\u6211\u4F7F\u7528\u540E\u7684\u4E00\u4E9B\u60F3\u6CD5\uFF1A")]),e("p",null,[l("\u9996\u5148\u662F\u73AF\u5883\u642D\u5EFA\uFF0C\u8BF4\u5B9E\u8BDD\u771F\u7684\u8981\u770B\u4E2A\u4EBA\uFF0C\u4F60\u662F\u559C\u6B22\u7B80\u5355\u7248\u8FD8\u662F\u8FDB\u9636\u7248\u8FD8\u662F\u5B8C\u6574\u7248\uFF0C\u56E0\u4E3A\u6211\u662F\u57FA\u4E8E\u4E00\u4E2A\u5F00\u6E90\u7684\u7B2C\u4E09\u65B9\u5E93\u7F16\u5199\uFF0C\u81EA\u7136\u9700\u8981\u5B8C\u6574\u3002\u7136\u540E\u6211\u5C31"),e("em",null,"\u5230\u5904"),l("\u627E\u5404\u79CD\u914D\u7F6E\uFF0C\u7EC8\u4E8E\u914D\u5236\u51FA\u9002\u5408\u81EA\u5DF1\u7684\u3002\u4E0D\u8FC7\u56E0\u4E3A\u662F\u521D\u7248\uFF0C\u5230\u73B0\u5728\u4F9D\u65E7\u4E0D\u662F\u5F88\u6EE1\u610F\uFF0C\u4F46\u52C9\u5F3A\u53EF\u4EE5\u4F7F\u7528\u4E86\u3002")]),e("p",null,"\u90A3\u4E48\u73AF\u5883\u642D\u5EFA\u5B8C\u6BD5\uFF0C\u5C31\u8981\u5F00\u59CB\u5199\u4EE3\u7801\u4E86\uFF0C\u5199\u4EE3\u7801\u9014\u4E2D\u6211\u53D1\u73B0\uFF0C\u4E4B\u524D\u58F0\u660E\u4E86\u5982\u4E0B\u7684\u7C7B\u578B\uFF1A"),e("pre",{class:"language-ts"},[e("code",{class:"language-ts"},[e("span",{class:"token keyword"},"export"),l(),e("span",{class:"token keyword"},"type"),l(),e("span",{class:"token class-name"},[e("span",{class:"token constant"},"XXX")]),l(),e("span",{class:"token operator"},"="),l(),e("span",{class:"token builtin"},"string"),l(),e("span",{class:"token operator"},"|"),l(),e("span",{class:"token keyword"},"undefined"),l(),e("span",{class:"token operator"},"|"),l(),e("span",{class:"token keyword"},"null"),l(`
`)])]),e("p",null,[l("\u56E0\u4E3A\u6211\u9700\u8981\u4F7F\u7528\u8FD9\u79CD\u7C7B\u578B\uFF0C\u7ED3\u679C\u65E0\u610F\u95F4\u770B\u5230\u4E00\u4E2A type\uFF0C\u53EB\u505A "),e("code",null,"PropertyKey"),l("\uFF0C\u548C\u6211\u8FD9\u79CD\u7C7B\u578B\u4E00\u6A21\u4E00\u6837\uFF0C\u8FD9\u5C31\u5F88\u5C34\u5C2C\u4E86\uFF0C\u7B49\u4E8E\u6211\u91CD\u590D\u5B9A\u4E49\u4E86\u4E00\u4E2A\u53D8\u91CF\u3002\u800C\u8FD9\u4E2A "),e("code",null,"PropertyKey"),l(" \u5B83\u662F\u4E2A\u5168\u5C40\u53D8\u91CF\uFF0C\u8FD9\u662F\u5185\u7F6E\u7684\u3002\u6709\u4EBA\u53EF\u80FD\u4F1A\u8BF4\u4F60\u4E0D\u4F1A\u53BB\u53C2\u8003\u770B\u4E0B lib.dom \u5E93\u554A\uFF0C\u53EF\u662F\u5173\u952E\u5982\u679C\u4E00\u4E2A\u65B0\u624B\u6765\u505A\uFF0C\u4ED6\u77E5\u9053\u8FD9\u4E2A\u5E93\u5417\uFF1F")]),e("p",null,[l("\u8FD9\u662F\u5199\u7C7B\u578B\u9047\u5230\u7684\u7B2C\u4E00\u4E2A\u95EE\u9898\uFF1A"),e("strong",null,"\u5185\u7F6E\u7C7B\u578B/\u63A5\u53E3\u4E0D\u77E5\u9053\u5982\u4F55\u5BFB\u627E"),l("\u3002")]),e("p",null,[l("\u5F53\u7136\u7B2C\u4E00\u4E2A\u95EE\u9898\u5BF9\u4E8E\u6211\u6765\u8BF4\u8FD8\u662F\u5F88\u597D\u89E3\u51B3\u7684\uFF0C\u90A3\u4E48\u7B2C\u4E8C\u4E2A\u95EE\u9898\u5C31\u6709\u4E9B\u590D\u6742\uFF0C\u5C31\u662F\u6211\u5199\u4E86\u4E00\u4E2A\u516C\u5171\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u5728 ts \u4E2D\u56E0\u4E3A\u4E0D\u540C\u7684\u63A5\u53E3\u5B9E\u73B0\u90FD\u5B9A\u4E49\u4E86\u4E00\u5957\u81EA\u5DF1\u7684\u56DE\u8C03\u7C7B\u578B\uFF0C\u7ED3\u679C\u5C31\u662F\u6211\u5199\u7684\u8FD9\u4E2A\u65B9\u6CD5\u4E0D\u505C\u7684\u5728\u8F6C\u5316\u7C7B\u578B\uFF08\u76EE\u524D\u4E5F\u662F\u8FD9\u4E48\u505A\u7684\uFF0C\u5E94\u8BE5\u53EF\u4EE5\u4F18\u5316\uFF09\u3002\u4E8E\u662F\u6211\u5C31\u60F3\u5230\u80FD\u4E0D\u80FD\u6839\u636E\u8C01\u4F7F\u7528\uFF0C\u90A3\u4E48\u6839\u636E\u4F7F\u7528\u8005\u6765\u63A8\u65AD\u7C7B\u578B\u3002\u7B54\u6848\u81EA\u7136\u662F\u6709\u7684\uFF0C\u6BD5\u7ADF\u6211\u662F\u4E2A\u540E\u6765\u8005\uFF0C\u5728\u7F51\u7EDC\u4E0A\u7684\u5217\u5B50\u4E2D\u6211\u77E5\u9053\u4E86 "),e("code",null,"extends"),l(" \u548C "),e("code",null,"infer"),l(" \u5173\u952E\u5B57\uFF0C\u8BF4\u771F\u7684\uFF0C\u81F3\u5C11\u5F53\u65F6\u6211\u6FC0\u52A8\u4E86\uFF0C\u6709\u89E3\u51B3\u65B9\u6848\u3002\u53EF\u4EE5\u7F51\u7EDC\u4E0A\u8BF4\u7684\u771F\u7684\u592A\u57FA\u7840\uFF0C\u6216\u8005\u5B98\u7F51\u793A\u4F8B\uFF0C\u867D\u7136\u770B\u4E86\u5F88\u591A\uFF0C\u4F46\u662F\u8BF4\u6E05\u695A\u7684\u6CA1\u51E0\u4E2A\uFF0C\u81F3\u4E8E\u5230\u73B0\u5728\u6211\u5BF9\u8FD9\u4E2A "),e("code",null,"infer"),l(" \u53EA\u6709\u7279\u5B9A\u73AF\u5883\u624D\u53EF\u4EE5\u660E\u767D\u5982\u4F55\u5199\uFF0C\u63A5\u53E3\u5C31\u662F\u6211\u4F9D\u65E7\u6CA1\u6709\u627E\u5230\u65B9\u6CD5\u53BB\u5B9E\u73B0\u6211\u7684\u60F3\u6CD5\uFF08\u6709\u4E00\u7BC7"),e("a",{href:"https://my.oschina.net/u/4318809/blog/4293100",target:"_blank",rel:"noopener"},"\u6587\u7AE0"),l(" \u6211\u4E2A\u4EBA\u89C9\u7740\u8BB2\u7684\u8FD8\u884C\uFF0C\u56E0\u4E3A\u4E0D\u662F\u76F2\u76EE\u7684\u7C98\u8D34\u590D\u5236\uFF09\u3002\u8FD9\u662F\u6211\u9047\u5230\u7684\u7B2C\u4E8C\u4E2A\u95EE\u9898\uFF1A"),e("strong",null,"\u5982\u4F55\u7F16\u5199\u9AD8\u6821\u7684\u68C0\u6D4B\u7C7B\u578B"),l("\u3002")]),e("p",null,[l("\u9047\u5230\u7684\u7B2C\u4E09\u4E2A\u5C31\u662F\u5173\u4E8E"),e("code",null,"eslint"),l("\uFF0C\u6211\u4F7F\u7528\u7684\u662F"),e("code",null,"ts"),l("\u56E2\u961F\u81EA\u5BB6\u4EA7\u54C1 "),e("code",null,"@typescript-eslint/eslint-plugin"),l("\uFF0C\u53EF\u4EE5\u8BF4\u63D0\u793A\u7684\u8FD8\u4E0D\u9519\uFF0C\u4F46\u662F\u6BCF\u6B21\u5728\u5199\u5230"),e("code",null,"js"),l("\u4E2D\u7684"),e("code",null,"object"),l("\u7C7B\u578B\u6211\u5C31\u662F\u5F88\u7EA0\u7ED3\uFF0C\u56E0\u4E3A\u63A8\u8350\u6211\u4F7F\u7528"),e("code",null,"Record"),l("\u7C7B\u578B\uFF0C\u6211\u4E5F\u542C\u8BDD\u4E86\uFF0C\u7528\u4E0A\u540E\u53D1\u73B0\u4E00\u4E2A\u5F88\u5C34\u5C2C\u7684\uFF0C\u6211\u81EA\u5DF1\u5B9A\u4E49\u7684"),e("code",null,"option"),l("\u5BF9\u8C61\u4E0D\u80FD\u88AB"),e("code",null,"Record"),l("\u7C7B\u578B\u517C\u5BB9\uFF0C\u6211\u5B9A\u4E49\u7684"),e("code",null,"options"),l("\u7C7B\u578B\u5C31\u662F"),e("code",null,"<string, unknow>"),l("\uFF0C"),e("code",null,"Record"),l("\u7C7B\u578B\u4E5F\u662F"),e("code",null,"Record<string, unknow>"),l("\u4E3A\u4EC0\u4E48\u4E0D\u884C\u5462\uFF0C\u540E\u6765\u6211\u6362\u6210\u4E86"),e("code",null,"object"),l("\u7C7B\u578B\u5C31\u53EF\u4EE5\uFF0C\u5C31\u76EE\u524D\u800C\u8A00\uFF0C\u5173\u4E8E\u5BF9\u8C61\u7684\u8868\u793A\u6211\u4F9D\u65E7\u4E0D\u662F\u5F88\u6E05\u695A\u600E\u4E48\u5199\uFF0C\u662F\u5199"),e("code",null,"Object"),l("\uFF0C\u8FD8\u662F"),e("code",null,"object"),l("\uFF0C\u8FD8\u662F"),e("code",null,"Record"),l("\uFF0C\u867D\u7136"),e("code",null,"eslint"),l("\u63A8\u8350\u4F7F\u7528"),e("code",null,"Record"),l("\uFF0C\u6211\u662F\u771F\u7684\u8FF7\u7CCA\u4E86\u3002\u8FD9\u53EA\u662F\u6211\u4E3E\u5F97\u4E00\u4E2A\u5217\u5B50\uFF0C\u5176\u5B9E\u5C31\u662F\u60F3\u8BF4\u6211\u9047\u5230\u7684\u7B2C\u4E09\u4E2A\u95EE\u9898\uFF1A"),e("strong",null,"\u5230\u5E95\u5E94\u8BE5\u5982\u4F55\u4F7F\u7528\u5408\u7406\u7684\u7C7B\u578B"),l("\u3002")]),e("p",null,[e("s",null,[l("\u90A3\u4E48\u7B2C\u56DB\u4E2A\u95EE\u9898\uFF0C\u6211\u9700\u8981\u5411\u539F\u59CB\u5BF9\u8C61"),e("code",null,"HTMLElement"),l("\u6DFB\u52A0\u5C5E\u6027\uFF0C\u4F46\u662F"),e("code",null,"ts"),l("\u63D0\u793A\u4E0D\u53EF\u4EE5\uFF0C\u6211\u4E5F\u80FD\u7406\u89E3\uFF0C\u6240\u4EE5\u6211\u4E3A\u4E86\u4E0D\u6C61\u67D3\u8FD9\u4E2A"),e("code",null,"HTMLElement"),l("\uFF0C\u6211\u91CD\u65B0\u58F0\u660E\u4E86\u4E00\u4E2A\u65B0\u7684\u63A5\u53E3\uFF08\u5047\u8BBE\u662F"),e("code",null,"IDomNode"),l("\uFF09\u7EE7\u627F"),e("code",null,"HTMLElement"),l("\uFF0C\u7136\u540E\u6211\u5C31\u57FA\u4E8E\u6211\u58F0\u660E\u7684\u65B0\u7684\u63A5\u53E3"),e("code",null,"IDomNode"),l("\u5199\uFF0C\u5199\u5230\u6700\u540E\u90FD\u662F\u6CA1\u6709\u95EE\u9898\u7684\uFF0C\u53D1\u5E03\u5B8C\u6211\u6D4B\u8BD5\uFF0C\u53D1\u73B0\u5F53\u7136\u8C03\u7528\u65B9\u6CD5\u4F20\u5165"),e("code",null,"HTMLElement"),l("\uFF0C\u63D0\u793A\u4E0D\u884C\uFF0C\u56E0\u4E3A"),e("code",null,"HTMLElement"),l("\u6CA1\u6709"),e("code",null,"IDomNode"),l("\u4E0A\u7684\u4E00\u4E9B\u5C5E\u6027\uFF0C\u5173\u952E\u6211\u8FD9\u4E2A"),e("code",null,"IDomNode"),l("\u53C8\u4E0D\u662F\u4E00\u4E0A\u6765\u5C31\u6709\uFF0C\u96BE\u9053\u6211\u9700\u8981\u81EA\u5DF1\u518D\u5199\u4E2A\u65B9\u6CD5\u5C06\u6BCF\u4E00\u4E2A"),e("code",null,"HTMLElement"),l("\u521D\u59CB\u5316\u6210"),e("code",null,"IDomNode"),l("\uFF0C\u6700\u540E\u6211\u5148\u4F7F\u7528\u4E86\u6298\u4E2D\u529E\u6CD5\uFF0C\u5C06\u6240\u6709\u7684"),e("code",null,"IDomNode"),l("\u7C7B\u7684\u5C5E\u6027\u53D8\u6210\u53EF\u9009\uFF0C\u8FD9\u5C31\u5BFC\u81F4\u53EA\u8981\u662F\u4F7F\u7528\u5230"),e("code",null,"IDomNode"),l("\u7684\u5C5E\u6027\u5C31\u5FC5\u987B\u5148\u5224\u7A7A\uFF0C\u867D\u7136\u6211\u53EF\u4EE5\u80AF\u5B9A\u4ED6\u4EEC\u5B58\u5728\uFF0C\u4F46\u662F"),e("code",null,"ts"),l("\u4E0D\u4FE1\u4ED6\u4EEC\u662F\u5B58\u5728\u7684\u3002\u6240\u4EE5\u6211\u53C8\u5199\u4E86\u4E00\u5806\u65B9\u6CD5\u5224\u7A7A\uFF0C\u611F\u89C9\u663E\u5F97\u5F88\u591A\u4F59\u3002")]),l(" [\u4ECA\u5929\u7A81\u7136\u5F00\u7A8D\u4E86\uFF0C\u6211\u5E94\u8BE5\u5728\u5185\u90E8\u81EA\u884C\u5C06"),e("code",null,"HTMLElement"),l("\u8F6C\u6210 "),e("code",null,"IDomNode"),l("\u8F6C\u5316\u624D\u53EF\u4EE5\uFF0C\u679C\u771F\u8FD8\u662F\u4F7F\u7528\u7684\u59FF\u52BF\u4E0D\u5BF9\u3002]")]),e("p",null,"\u5DEE\u4E0D\u591A\u4E86\uFF0C\u5176\u5B9E\u7F51\u4E0A\u5F88\u591A\u8BC4\u8BBA\u5BF9\u6BD4\uFF0C\u5F53\u7136\u90FD\u4E0D\u53CA\u81EA\u5DF1\u53BB\u5199\u5199\uFF0C\u4F7F\u7528\u4E2D\u51FA\u73B0\u5F88\u591A\u95EE\u9898\uFF0C\u5373\u4FBF\u5230\u73B0\u5728\u53D1\u5E03\u4E86\uFF0C\u6211\u4E5F\u4E0D\u6562\u8BF4\u8FD9\u662F\u7A33\u5B9A\u7248\uFF0C\u53EA\u80FD\u53D1\u5E03\u4E86\u4E00\u4E2Aalpha\u7248\u672C\u3002TypeScript \u6B63\u5982\u5B57\u9762\u53EF\u4EE5\u5F88\u597D\u7684\u68C0\u6D4B\u7C7B\u578B\uFF0C\u4F46\u662F\u591A\u6570\u9700\u8981\u81EA\u5DF1\u5408\u7406\u7F16\u5199\u4E00\u4E9B\u68C0\u6D4B\u7C7B\u578B\u6765\u63A8\u65AD\u3002"),e("p",null,[l("\u8BF4\u771F\u7684\u6211\u89C9\u5F97\u8FD8\u662F\u86EE\u641E\u7B11\uFF0C\u4EE5\u524D\u76F4\u63A5\u5199"),e("code",null,"es5"),l("\uFF0C\u540E\u6765"),e("code",null,"es6"),l("\u51FA\u6765\u4E86\uFF0C\u5199"),e("code",null,"es6"),l("\uFF0C\u4F46\u662F\u4E3A\u4E86\u7167\u987E\u8001\u6D4F\u89C8\u5668\uFF0C\u6700\u540E\u5C06"),e("code",null,"es6"),l("\u8F6C\u6210"),e("code",null,"es5"),l("\u5728\u7F16\u5199\uFF0C\u73B0\u5728\u662F\u5199"),e("code",null,"typescript"),l("\uFF0C\u518D\u8F6C\u6210es6\uFF0C\u611F\u89C9\u6709\u6BD2\u554A\u{1F604}\u3002")]),e("p",null,[l("\u611F\u89C9\u662F\u4E0D\u662F\u6211\u4F7F\u7528"),e("code",null,"typescript"),l("\u7684\u59FF\u52BF\u4E0D\u5BF9\uFF0C\u5C31\u76EE\u524D\u800C\u8A00\uFF0C\u66F4\u591A\u611F\u89C9\u50CF\u662F\u67B7\u9501\uFF0C\u4E5F\u8BB8\u540E\u9762\u4F7F\u7528\u591A\u4E86\u53EF\u80FD\u4F1A\u597D\u4E00\u4E9B\u3002\u90A3\u65F6\u5019\u5C31\u4F1A\u51FA\u73B0"),e("strong",null,"\u771F\u76F8\u8B66\u544A"),l("\u4E86\u5427\u3002")])],-1),_="\u5410\u69FD TypeScript",f="2022-02-23T00:00:00.000Z",b="8\u5206\u949F",h="\u6587\u7AE0\u9996\u53D1\u4E8E 2020/08/18\uFF0C\u8FD9\u91CC\u53EA\u662F\u8FC1\u79FB",w="\u65E7",N="talk",S=[{property:"og:title",content:"\u5410\u69FD TypeScript"}],D={setup(a,{expose:o}){const n={title:"\u5410\u69FD TypeScript",date:"2022-02-23T00:00:00.000Z",duration:"8\u5206\u949F",subtitle:"\u6587\u7AE0\u9996\u53D1\u4E8E 2020/08/18\uFF0C\u8FD9\u91CC\u53EA\u662F\u8FC1\u79FB",tag:"\u65E7",type:"talk",meta:[{property:"og:title",content:"\u5410\u69FD TypeScript"}]};return o({frontmatter:n}),s({title:"\u5410\u69FD TypeScript",meta:[{property:"og:title",content:"\u5410\u69FD TypeScript"}]}),(m,y)=>{const t=c;return u(),d(t,{frontmatter:n},{default:p(()=>[r]),_:1})}}};export{f as date,D as default,b as duration,S as meta,h as subtitle,w as tag,_ as title,N as type};
