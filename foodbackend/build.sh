#!/usr/bin/env bash
# exit on error
set -o errexit

pip install -r requirements.txt

python manage.py collectstatic --no-input
python manage.py migrate

# Auto-create superuser on Render (set these env vars in Render dashboard):
#   DJANGO_SUPERUSER_USERNAME  (default: admin)
#   DJANGO_SUPERUSER_EMAIL     (default: admin@example.com)
#   DJANGO_SUPERUSER_PASSWORD  (REQUIRED - set this in Render)
if [ -n "$DJANGO_SUPERUSER_PASSWORD" ]; then
    python manage.py createsuperuser \
        --noinput \
        --username "${DJANGO_SUPERUSER_USERNAME:-admin}" \
        --email "${DJANGO_SUPERUSER_EMAIL:-admin@example.com}" \
        2>/dev/null || echo "Superuser already exists, skipping."
fi
