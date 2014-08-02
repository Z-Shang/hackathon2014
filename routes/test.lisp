(ql:quickload :cl-json)

(cl-json:to-json-file "test.json"
                      'date "2014 Aug 2nd"
                      'hospital "xiehe hospital"
                      'dept 'hentai
                      'ident 123456765432
                      'kind 'm_chk
                      'checkItem 'brain-hole
                      'done 'true
                      'reportNum 1236765432345676552353465
                      'fromQR 'true)

(sb-ext:exit)
