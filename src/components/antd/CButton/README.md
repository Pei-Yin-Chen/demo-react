# CButton - 自定義按鈕組件

`CButton` 是基於 Ant Design 的 `Button` 進行擴展，支援 **Ant Design Icons** 和 **SVG Icons**，並允許控制 `iconPosition`。

## 🚀 安裝與使用

### 1️⃣ 安裝依賴
```sh
npm install antd
```

### 2️⃣ 使用 Ant Design 圖示
```tsx
import CButton from "@/components/CButton";
import { SearchOutlined } from "@ant-design/icons";

<CButton type="primary" icon={<SearchOutlined />} iconPosition="start">
  搜尋
</CButton>
```

### 3️⃣ 使用 SVG 圖示
```tsx
<CButton type="default" iconName="icon-search-normal" iconSize={20} iconPosition="end">
  搜尋
</CButton>
```
`iconName` 的格式通常是 `icon-name-status`，其中 `icon-name` 是圖示名稱，`status` 用於表示圖示狀態。圖示的名稱會根據狀態（如 `normal`, `hover`, `active`）動態改變。

---

## 📖 API (Props 說明)

| Prop 名稱       | 類型                         | 預設值  | 說明 |
|---------------|------------------|------|------|
| `type`       | `BaseButtonProps["type"]` | -    | 按鈕類型（`primary`, `default`, `link` 等） |
| `icon`       | `ReactNode` | -    | **Ant Design** 的 Icon |
| `iconName`   | `string` | -    | **SVG** Icon 的名稱，使用自訂的 `SvgIcon` 渲染圖示格式，通常為 icon-name-status |
| `iconSize`   | `number` | `16` | SVG Icon 的大小，傳遞給 `SvgIcon` 組件 |
| `iconClassName` | `string` | - | 自定義 SVG Icon 類名，傳遞給 `SvgIcon` 組件 |
| `iconPosition` | `"start" \| "end"` | `"start"` | Icon 位置 |
| `colorClass` | `string` | - | 自定義按鈕顏色樣式 |
| `children`   | `string` | - | 按鈕文字 |

---

## ⚠️ 注意事項
- **`icon` 與 `iconName` 不能同時使用**，否則 `icon` 會優先顯示。
- **`iconPosition` 只會影響 `iconName` 或 `icon` 的顯示順序**，但 `children` 仍需要確保 CSS 允許正確排列。

---

## 📌 目錄結構
```sh
/src
  /components
    /CButton
      CButton.tsx
      README.md
```
