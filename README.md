# wp_project
在執行前請先yarn install
然後分別使用yarn frontend 和 yarn backend即可開始使用
記得backend裡面要有你自己的.env才能連上你自己的後端


或者你可能會想試試我們deploy的:
https://wpfinalproject-production-be6b.up.railway.app/

另外這份project裡面藏了三個彩蛋，第一個全部找到並通知我們的同學，會獲得神秘大禮物：自費享用新馬辣（公館店）優惠卷乙張！！

有任何問題或疑惑可以通知
jason501002@gmail.com


**Spec:**

- general：
1. 使用material UI和style component進行前端設計
2. 用ui提供的auto來實作支援不同螢幕尺寸，即使是手機也可以看
3. 使用react的hook實現交互作用
4. 使用express、babel來實現後端

frontend：

- homepage
1. header有資工系logo
2. footer有copyright和彩蛋1
3. body分別用圖片展示資工系，以及component=Paper來增加質感
4. 背景用混色+微透明呈現
5. icon是從MUI拿來的

- login
1. 把座位格式寫在Cell.js裡面方便每次的code，例外Cell.js有彩蛋3
2. 有對button鎖disable，要填寫帳號和密碼才能按button
3. forget password會跳轉到貼心提醒頁面
4. terms of use點進去有彩蛋2
5. 帳號密碼輸入欄有placeholder
6. 支援瀏覽器去紀錄你輸入的帳號密碼
7. 對重複租借和歸還查看功能輸錯帳號密碼會跳轉到警告頁面
8. 點下 submit button 之後會從前端 call seathandling 的 function 從 db 取資料並且轉化成座位表

- wheretosit
1. 提供兩種場地圖片供參考，並做成斜線切割

- selecting
1. 沒人借的座位是綠色按鈕，有人借的是disabled按鈕，自己借的是黃色按鈕
2. 座位附上座位編號
3. 在租借的時候，按可租借的座位按鈕可以一鍵租借，租借後會跳出視窗讓你回到主畫面
4. 在歸還的時候，除了自己的按鈕其他都是disable，而按自己的座位按鈕可以一鍵歸還，歸還後會跳出視窗讓你回到主畫面
5. 右邊藍色按鈕可以一鍵回到主頁面

- api
1. 連接前後端

- ApiFunc
1. 讓前端能以比較好懂的格式呼叫後端的async function，以利協作。

backend：

- server
1. 套用express來定義框架
2. 連接mongodb

- Seats
1. 透過get和post定義了所有前端所需用到的函式，包括查詢帳號是否存在或重複、查詢所有借用者、查詢一個座位是否為空、透過帳號查詢位置以及歸還座位。

- Seat
1. 定義mongodb的儲存格式，包含一個帳號的租借資訊，有帳號、密碼、位置。

- 可以進步的部分：
1. 一開始寫前端框架的時候忘記使用 useNavigate 、 useContext 等功能，使得後期有點不好改 code 。
2. 取 db 資料的時間（在 login ）與上傳到 db 的時間（selecting 結束）中間會有 race condition 的問題。（不同使用者可能借到相同位置）
    1. 解決方式一：上 read/write lock 並限時讓單一使用者擁有 lock 的時間
        - 會因為 lock 資源稀缺，會讓使用者等待而降低使用者體驗 
    2. 解決方式二：check-and-set，點擊按鈕時 call func. 檢查座位是否為空
        - 會有外觀座位 db 與 借用 check 的 db 不同的問題
