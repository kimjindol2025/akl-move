module.exports = {
  apps: [{
    name: 'akl-move',
    cwd: '/home/kimjin/services/akl-move',
    script: 'node',
    args: '/home/kimjin/freelang-v11/bootstrap.js run app/server.fl',
    env: { PORT: '39060' },
    autorestart: true,
    max_restarts: 5,
    out_file: '/home/kimjin/services/akl-move/logs/out.log',
    error_file: '/home/kimjin/services/akl-move/logs/err.log',
    merge_logs: true
  }]
};
