const data = require('../../../data/post-data.js');

Page({
	data: {
		myData: '',
		isCollect: false,
		id: '',
		myCollect: {},
		// playing:false,
	},
	//注意回调函数的this指向，setData是挂在App原型上的方法
	//注意小程序中的this指向的是app实例，要访问数据需要先访问data这个对象，而不是像vue将数据直接挂在了实例上
	onLoad(option) {
		// getApp方法，获取整个app实例，可以访问整个app的生命周期
		let playing  = getApp().playing;
		this.setData({
			id: option.id,
			playing:playing
		})
		data.postlist.forEach(item => {
			if (item.postId == this.data.id) {
				this.setData({
					myData: item
				})
			}
		});
		// 获取所有缓存
		if (wx.getStorageSync('myCollect')) {
			this.setData({
				myCollect: wx.getStorageSync('myCollect')
			})
		}
		let myCollect = this.data.myCollect;
		// 判断是否被缓存，将缓存中对应的true or false赋值给isCollect

		// console.log(myCollect);
		// 如果storage中已经有了这个id对应的收藏信息，则直接判断
		if (myCollect[this.data.id]) {
			this.setData({
				isCollect: myCollect[this.data.id]
			})
		} else {
			myCollect[this.data.id] = false;
			wx.setStorageSync('myCollect', myCollect);
		}

		// console.log(option.id);

	},

	onShow() {

	},

	music() {
		// console.log(1);
		let myMusic = wx.getBackgroundAudioManager();
		let playing = this.data.playing;
		// let playing  = getApp().playing;
		let _this = this;
		// 因为每一次赋予src都会自动开始播放，所以要实现暂停，初始化歌曲src的信息就不能放在全局作用域中
		if (!playing) {
			// 配置音频文件，记得要在app.json中先注册一个audio
			// 在ios上必须要配置title，否则会报错
			// 注意只能是在线的流媒体文件，不能是本地文件,封面之类的属性也一样要是在线的
			myMusic.src = this.data.myData.music.url;
			myMusic.coverImgUrl = this.data.myData.music.imgUrl;
			myMusic.title = this.data.myData.music.title;
			myMusic.play();
			getApp().playing = true;
			console.log(getApp().playing);
// 			this.setData({
// 				playing: !playing
// 			})
		} else {
			myMusic.pause();
			// 			this.setData({
			// 				playing: !playing
			// 			})
		};
		// 监听播放,不管是在全局控制还是局部页面上控制暂停或播放，都可以监听到
		myMusic.onPlay(function() {
			getApp().playing = true;
			_this.setData({
				playing: true,
			})
		})
		// 监听暂停播放,注意，监听到暂停播放的时候，如果是从全局的播放起暂停，那么会从全局（app）
		// 上调用这个监听的方法，而没有再进入music这个方法来重新初始化playing的值，所以要么在回调函数中
		// 手动在获取一次，要么可以的话就直接写死
		myMusic.onPause(function() {
			getApp().playing = false;
			_this.setData({
				playing: false,
			})
		});
		// 监听停止（播放器手动关闭）
		myMusic.onStop(function() {
			getApp().playing = false;
			_this.setData({
				playing: false,
			})
		});
		// 监听自然播放结束
		myMusic.onEnded(function() {
			getApp().playing = false;
			_this.setData({
				playing: false,
			})
		});


	},
	// 	stopMusic(){
	// 		let myMusic = this.data.myMusic;
	// 		myMusic.pause();
	// 		this.setData({
	// 			playing:!playing
	// 		})
	// 	},

	collection(e) {
		let id = this.data.id;
		let isCollect = this.data.isCollect;
		let newMyCollect = this.data.myCollect;
		if (isCollect) {
			newMyCollect[id] = !isCollect;
			let _this = this;
			// 交互模态框
			wx.showModal({
				title: '提示',
				content: '确定要取消收藏吗？',
				success(res) {
					if (res.confirm) {
						wx.setStorageSync('myCollect', newMyCollect);
						_this.setData({
							isCollect: !isCollect,
						});
						console.log('取消收藏成功');
					}
					if (res.cancel) {
						return;
					}
				}
			})


			// 纯提示弹框
			// 			wx.showToast({
			// 				title:'取消收藏成功',
			// 				icon:'success',
			// 				duration:1000,
			// 				
			// 			})

		} else { //代码重复了，可以先判断一下是否被收藏再来决定
			newMyCollect[id] = !isCollect;
			let _this = this;
			// 使用异步的方法来实现收藏，后续操作放在回调函数中
			wx.setStorage({
				key: 'myCollect',
				data: newMyCollect,
				success(res) {
					// console.log(res);
					_this.setData({
						isCollect: !isCollect
					})
					wx.showToast({
						title: '收藏成功',
						icon: 'success',
						duration: 1000,

					});
					console.log('收藏成功');

				},
				fail() {
					console.log('系统错误');
				}
			})

			// 			wx.setStorageSync('myCollect', newMyCollect);
			// 			this.setData({
			// 				isCollect: !isCollect,
			// 			});
			// 			wx.showToast({
			// 				title: '收藏成功',
			// 				icon: 'success',
			// 				duration: 1000,
			// 
			// 			});
			// 			console.log('收藏成功');
		}
		// 		wx.getStorage({
		// 			key:'myCollect',
		// 			success(res){
		// 				that.setData({
		// 					myCollect:res.data
		// 				})
		// 			}
		// 		});


		// 		if(myCollect == myData.postId){
		// 			console.log(22);
		// 		}
	},

	// 底部弹出一个可选择的列表
	share() {
		wx.showActionSheet({
			itemList: ['A', 'B', 'C'], //最长6个
			success(res) {
				if (res.tapIndex == 0) {
					console.log(`选择了A`);
				} else if (res.tapIndex == 1) {
					console.log('选择了B');
				} else {
					console.log('选择了C');
				};
			}
		})
	},

})
