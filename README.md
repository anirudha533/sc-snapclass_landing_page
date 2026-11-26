# SnapClass frontend

This Flask landing page introduces the SnapClass project and includes an interactive attendance preview with sample data.

Run these commands from this folder:

```bash
python3 -m venv .venv
source .venv/bin/activate
python -m pip install -r requirements.txt
python -m flask --app app run --port 5001
```

Open http://localhost:5001. The attendance links default to the local Streamlit app at http://localhost:8501. Set `SNAPCLASS_PORTAL_URL` to your deployed Streamlit URL when hosting the landing page.

The Flask page needs no Supabase credentials. The preview runs in the browser and does not save attendance.

## Photography

Both classroom photos are by Vitaly Gariev and are used under the [Unsplash License](https://unsplash.com/license).

- [Teacher lecturing students](https://unsplash.com/photos/teacher-lecturing-students-in-a-classroom-setting-14jNrPntbgk)
- [Students smiling in a lecture hall](https://unsplash.com/photos/students-smiling-in-a-lecture-hall-classroom-NGLWZV4xOPg)

## Technology marks

Flask, Streamlit, and Supabase marks are from [Simple Icons](https://simpleicons.org/). The face-scan and voice waveform icons are original illustrations.
