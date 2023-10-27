"use client";
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var me_1 = require("@/hooks/me");
var navigation_1 = require("next/navigation");
var react_1 = require("react");
var react_spinners_1 = require("react-spinners");
var ToggleButton_1 = require("./ui/ToggleButton");
function FollowBtn(_a) {
    var _this = this;
    var user = _a.user;
    var username = user.username;
    var _b = me_1["default"](), loggedInUser = _b.user, toggleFollow = _b.toggleFollow;
    var router = navigation_1.useRouter();
    var _c = react_1.useTransition(), isPending = _c[0], startTransition = _c[1];
    var _d = react_1.useState(false), isFetching = _d[0], setIsFetching = _d[1];
    var isUpdating = isPending || isFetching;
    var showButton = loggedInUser && loggedInUser.username !== username;
    var following = loggedInUser &&
        loggedInUser.following.find(function (item) { return item.username === username; });
    var text = following ? "Unfollow" : "Follow";
    var handleFollow = function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setIsFetching(true);
                    return [4 /*yield*/, toggleFollow(user.id, !following)];
                case 1:
                    _a.sent();
                    setIsFetching(false);
                    startTransition(function () {
                        router.refresh();
                        // 클라이언트에서 리프레시가 발생하고 서버로부터 바뀐 데이터를 받아올것이다.
                        // 호출해도 이미 렌더링된 메모리는 그대로 유지되고 브라우저 히스토리도 변경 되지 않고
                        // 하위 컴포넌트까지 업데이트가 될 것이지만 클라이언트에서 필요한 메모리, 변수들은 전혀 영향을 받지 않는다.
                        // 이미 ssr로 처리된 프리렌더링 된 페이지가 있는데 트리상의 필요한 부분만 쏙 업데이트 해주는 것이다.
                        // 새로운 usetransition 을 사용하면 라우터가 리프레시 되는 동안 의미있는 로딩 스피너를 보여줄 수 있다.
                        // 작업이 끝날때까지 의미있는 로딩 스피너를 보여준다.
                    });
                    return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement(React.Fragment, null, showButton && (React.createElement("div", { className: 'relative' },
        isUpdating && (React.createElement("div", { className: 'absolute z-20 inset-0 flex justify-center items-center' },
            React.createElement(react_spinners_1.PulseLoader, { size: 6 }))),
        React.createElement(ToggleButton_1["default"], { disabled: isUpdating, text: text, onClick: handleFollow, gray: text === "Unfollow" })))));
}
exports["default"] = FollowBtn;
