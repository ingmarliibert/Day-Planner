/**
 * Created by Liibert on 18.03.2016.
 */
iter = function(object, func, times, callback = undefined) {
    for(var i = 0; i < times; i++) {
        object = func.call(object, callback)
    }
    return object;
};