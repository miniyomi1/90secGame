const w = 800;
const h = 450;

//config內是phaser遊戲內的基礎設定
const gameStart = {
    key: 'gameStart',
    preload: function(){
        //場景初始化，需要載入的資源都在這邊載入
        this.load.image('bg1','../images/bg/bg1.png');
        this.load.image('bg2','../images/bg/bg2.png');
        this.load.image('bg3','../images/bg/bg3.png');
        this.load.image('bg4','../images/bg/bg4.png');
        this.load.image('footer','../images/bg/footer.png');
        this.load.spritesheet('user', 'images/player.png', { frameWidth: 120, frameHeight: 120 });
    },
    create: function(){
        //遊戲資源載入完成後，開始初始化遊戲內相關的設定 
        this.bg4 = this.add.tileSprite(w / 2, h / 2, w, h, 'bg4');
        this.bg3 = this.add.tileSprite(w / 2, h / 2, w, h, 'bg3');
        this.bg2 = this.add.tileSprite(w / 2, h / 2, w, h, 'bg2');
        this.bg1 = this.add.tileSprite(w / 2, h / 2, w, h, 'bg1');
        this.footer = this.add.tileSprite(w / 2, 360+45, w, 90, 'footer');

        this.player = this.add.sprite(120, 120, 'user');
    },
    update: function(){
        //遊戲狀態更新，fps預設是60，所以他會以每秒執行遊戲60次，
        //所有遊戲內的操作都在 update去撰寫
        this.bg1.tilePositionX += 1;
        this.bg2.tilePositionX += 2;
        this.bg3.tilePositionX += 3;

        this.footer.tilePositionX += 4;
        
    }
}
const config = {
    type: Phaser.AUTO,
    width: w,
    height:  h,
    parent: 'app',
    scene:[ gameStart]
    //遊戲狀態
}
//產生一個遊戲空間
const game =new Phaser.Game(config);