
// 日期转字符串，日期之间用-分割
export const dateToStringWithDash = (date: Date, format: string = "zh-CN"): string => {
  try {
    const formatter = new Intl.DateTimeFormat(format, {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: false,
      timeZone: "Asia/Shanghai" // add timeZone option for China time
    });
    return formatter.format(date).replace(/\//g, '-');
  } catch (error) {
    console.error(error);
    return "Invalid Date";
  }
}

// 日期转字符串，只包含日期，日期之间用-分割
export const dateToDateOnlyStringWithDash = (date: Date, format: string = "zh-CN"): string => {
  try {
    const formatter = new Intl.DateTimeFormat(format, {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      timeZone: "Asia/Shanghai" // add timeZone option for China time
    });
    return formatter.format(date).replace(/\//g, '-');
  } catch (error) {
    console.error(error);
    return "Invalid Date";
  }
}

interface TreeNode {
  id: number;
  name: string;
  children?: TreeNode[];
}

// 扁平化数组数据转化为树形结构数据方法
const flatToTree = (flatArray: any[], parentId?: number): TreeNode[] => {
  const tree: TreeNode[] = [];
  flatArray.forEach((item) => {
    if (item.parentId === parentId) {
      const node: TreeNode = {
        id: item.id,
        name: item.name,
      };
      const children = flatToTree(flatArray, item.id);
      if (children.length) {
        node.children = children;
      }
      tree.push(node);
    }
  });
  return tree;
}