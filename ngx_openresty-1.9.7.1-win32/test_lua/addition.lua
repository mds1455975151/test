--
-- Created by IntelliJ IDEA.
-- User: wyq
-- Date: 2016/2/25
-- Time: 16:20
-- To change this template use File | Settings | File Templates.
--
local args = ngx.req.get_uri_args()
ngx.say(args.a + args.b)

