/**
 * Created by chenjie on 2015/7/5.
 */

var _ = require('underscore');
var models      = require('../../models/index');
var Users    = models.Users;
var IntegralLog = models.IntegralLog;
var tools       = require('../../tools');
var queueClient = tools.queueRedisClient();

function pop(){
    queueClient.BRPOP('queueData', 0, function(err, data){
        console.log(arguments)
        if (data && _.isArray(data) && data.length > 1){
            var doc = JSON.parse(data[1]);
            /*if (doc.token == 'tvmcj' || doc.wxToken == 'tvmcj'){
                return pop()
            }*/
            console.log(doc)
            if (doc.queueDataCollection){
                var cloName = doc.queueDataCollection
                delete doc.queueDataCollection

                console.log(doc)

                if (doc.updateAction){
                    models[cloName].findOneAndUpdate(doc.updateAction.spec, doc.updateAction.updateSpec, function(err){
                        if(err) {
                            console.log('update: ' + cloName + '日志fail');
                            queueClient.lpush('errQueueData', data[1])
                        } else {
                            console.log('update: ' + cloName + '日志success');
                        }
                        pop()
                    })
                } else {
                    new models[cloName](doc).save(function(err){
                        if(err) {
                            console.log('添加' + cloName + '日志fail');
                            queueClient.lpush('errQueueData', data[1])
                        } else {
                            console.log('添加' + cloName + '日志success');
                        }
                        pop()
                    })
                }
            } else {
                pop()
            }
        } else {
            pop()
        }
    })
}
pop()
