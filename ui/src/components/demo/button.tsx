import { FC } from 'react';
import './index.css';

const MyButton: FC = () => {
  // JSX 比 HTML 更加严格。你必须闭合标签，如 <br />。
  // 你的组件也不能返回多个 JSX 标签。
  // 你必须将它们包裹到一个共享的父级中，比如 <div>...</div> 或使用空的 <>...</> 包裹
  return (
    <>
      {/* 在 React 中，你可以使用 className 来指定一个 CSS 的 class。它与 HTML 的 class 属性的工作方式相同 */}
      <button className="myButton">I'm a button</button>
    </>
  );
};
// 你可以据此识别 React 组件。React 组件必须以大写字母开头，而 HTML 标签则必须是小写字母。
// export default 关键字指定了文件中的主要组件
export default MyButton;
