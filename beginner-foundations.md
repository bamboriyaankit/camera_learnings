# Camera foundations: start from zero

Status: first teaching draft, 2026-10-11. This is content for the future website, not a published lesson. General concepts are drafted below; camera-specific menu steps and equipment specifications still require the source checks in `research.md`.

Implementation note: `content.js` now includes eight lessons based on this draft, including a dedicated JPEG/RAW lesson and source-checked focus-mode introductions. See `research.md` for the specific verified Sony menu paths and `camera-reference-plan.md` for the full reference still to build. The Share photos section explains free transfer, album, and download-link workflows.

## How we will learn

Each topic follows the same pattern: **simple meaning → visible effect → when to use it → trade-off → try it yourself**. Introduce one idea at a time and connect it to the learner's camera. Definitions should be available beside unfamiliar terms rather than requiring a separate glossary visit.

Start with these lessons, in this order:

1. How light becomes a photograph: scene, lens, aperture, shutter, sensor, image.
2. Reading camera numbers: millimetres, fractions of a second, f-numbers, and ISO.
3. Aperture: brightness and how much of the scene looks sharp.
4. Shutter speed: freezing or showing movement.
5. ISO: managing image brightness when light and motion limit your choices.
6. Combining the three settings; understanding a stop of change.
7. Focus and depth of field; recognizing different causes of blur.
8. Focal length, angle of view, distance, and perspective.
9. Camera modes, metering, and exposure compensation.
10. White balance, histogram, highlights, shadows, and noise.
11. RAW/JPEG, reviewing photos, and safe file handling.
12. A guided first shoot and a simple review of what worked.

Camera handling and a basic automatic-mode first photo can precede these lessons. Do not require understanding every term before letting the learner take a photograph.

## 1. How a camera makes a photograph

Light reflects off your subject and enters the lens. The lens brings that light into focus on the sensor, which records it as an electrical signal. The camera processes that information into an image file.

The **aperture** controls the size of the light opening. The **shutter speed** controls how long light is recorded. **ISO** affects how the recorded signal is amplified/interpreted to produce image brightness. Increasing ISO does not collect additional light.

**Exposure**, in its physical sense, is the amount of light reaching the sensor per unit area during the capture. Scene brightness, aperture, and shutter time affect it. The brightness of the displayed image also depends on ISO and processing.

## 2. The three main settings

| Setting | Simple meaning | What the numbers mean | When to change it | Trade-off |
| --- | --- | --- | --- | --- |
| Aperture | The opening inside the lens that lets light through | f/2.8 is a wider opening than f/8 | Open it for more light or less depth of field; close it for more depth of field | A wider opening can leave parts of the subject out of focus; a smaller opening needs more light or a longer exposure |
| Shutter speed | How long the sensor records light for one photograph | 1/1000 second is shorter/faster than 1/60 second | Use a short time to freeze movement; a longer time to show movement | Shorter times collect less light; longer times can reveal camera shake and subject motion |
| ISO | A setting that affects how the captured signal becomes image brightness | ISO 1600 generally produces a brighter image than ISO 100 at the same aperture and shutter speed | Raise it when the aperture and shutter speed needed for the shot would otherwise give an overly dark image | High ISO usually reduces highlight headroom; low-light images often show more noise because little light was captured |

The comparisons above assume other relevant settings stay fixed. In automatic or priority modes, the camera may adjust another setting to keep the image brightness similar.

### Aperture in practice

The f-number is focal length divided by the effective opening diameter. You do not need to calculate it while shooting; remember that a smaller f-number means a larger relative opening.

For one person's portrait, try f/2.8–f/4 as a starting point if the lens supports it. Focus on the nearer eye and check whether enough of the face is sharp. For a group at different distances, try f/5.6–f/8 and arrange people at similar distances where possible. These numbers are starting points, not a guarantee that everyone will be sharp.

The aperture range needed also depends on focal length, distance, framing, and how large you view the image. Very small apertures such as f/16 can soften fine detail through diffraction; the highest f-number is not automatically the sharpest choice.

### Shutter speed in practice

For a person standing fairly still, start around 1/125–1/250 second. For active children or pets, try 1/500–1/1000 second or faster. Subject speed, direction, distance, focal length, and your steadiness affect what is enough.

For intentional motion blur, try a longer exposure with a supported camera and a moving subject. A tripod steadies the camera; it cannot stop a person moving during the exposure. Start long-exposure practice with an ordinary indoor scene or in shade; bright daylight may require additional light reduction.

### ISO in practice

Use a low ISO such as 100 when there is enough light for the aperture and shutter speed you need. In dim conditions, a higher ISO can help you retain a shutter speed that keeps the subject sharp. A sharp photo with some noise is often more useful than a clean-looking photo spoiled by unintended motion blur.

Auto ISO can let the camera handle this choice while you concentrate on aperture or shutter speed. Learn how to inspect the values the camera chose and whether it reached an ISO limit. Exact a6400 configuration steps will be added after verification.

## 3. How the settings work together

A **stop** is a doubling or halving. Changing shutter speed from 1/125 to 1/250 second halves capture time and collects half as much light. Opening the aperture from f/4 to f/2.8 admits approximately twice as much light per unit time, balancing that change if the scene stays the same.

Raising ISO from 400 to 800 can restore similar displayed brightness after halving shutter time, but it does not restore the lost captured light. That distinction helps explain why two equally bright photos can have different noise and detail.

Decide in this order:

1. What matters for this photo: movement, depth of field, or both?
2. Choose a shutter speed and aperture that support that result.
3. Adjust ISO, use Auto ISO, or improve the available light.
4. Review sharpness and brightness; change the setting responsible for the problem.

In bright light you may need a faster shutter or smaller aperture even at the lowest suitable ISO. In low light you may need more light, a wider aperture, higher ISO, or a longer exposure if the subject allows it.

## 4. Optics and supporting vocabulary

These entries are a teaching checklist and concise reference. Expand them into individual lessons with illustrations and exercises; do not place the entire table in the learner's first screen.

| Term | Clear meaning | Why / when it matters |
| --- | --- | --- |
| Sensor | The light-recording surface inside the camera | Sensor size affects angle of view for a given focal length; resolution affects available detail, but does not guarantee sharp photos |
| Focal length | An optical property of the lens, measured in millimetres | On the same camera, 18mm shows a wider scene than 50mm; choose it to control framing |
| Zoom | Changing focal length with the lens | Lets you change framing from one position; zooming and moving the camera do not produce identical results |
| Angle of view | How much of the scene fits into the picture | Useful for choosing a focal length in a small room or when isolating a distant subject |
| Crop factor | A way to compare angle of view between sensor sizes | Helps interpret full-frame lens advice; it does not physically change your lens's focal length or f-number |
| Focus | Adjusting the lens so a chosen distance is rendered sharply | Place focus on the part of the subject that must be sharp |
| Autofocus / manual focus | The camera adjusts focus / you adjust it yourself | Autofocus suits much everyday shooting; manual focus can help when autofocus struggles or precise repeatability matters |
| Depth of field | The range of distances that look acceptably sharp | Important for separating a portrait subject or keeping a group sharp; affected by aperture, distance, focal length, and viewing conditions |
| Background blur / bokeh | Blur amount / the visual character of out-of-focus areas | Increase subject-to-background separation to help blur a background; bokeh describes the look, not just how much blur exists |
| Perspective | The apparent size and position relationships between objects | Depends on camera position; moving very close to a face can exaggerate nearer features |
| Minimum focusing distance | The closest distance at which the lens can focus, normally measured from the sensor plane | If a close subject will not focus, move back; the limit can change with zoom position |
| Magnification | How large the subject's image is on the sensor compared with its actual size | Important for close-up detail; a lens that focuses close is not necessarily a true macro lens |
| Diffraction | The spreading of light through an opening, which can soften fine detail | Balance a small aperture's extra depth of field against reduced fine-detail sharpness |
| Lens distortion | An optical effect that can bend straight lines in the image | Noticeable in architecture; lens corrections can help, but do not fix all perspective effects |
| Camera shake | Movement of the camera during capture | Use a faster shutter, better support, or suitable stabilization |
| Motion blur | Smearing caused by movement during capture | Use faster shutter speeds to reduce it or slower ones for a deliberate effect |
| White balance | The adjustment used to render neutral colors under different light sources | Change it when a scene looks too blue or orange, or when consistent color is needed across shots |
| Metering | The camera's estimate of scene brightness | Helps set exposure automatically; bright snow or dark backgrounds can lead to results you want to adjust |
| Exposure compensation | A request for a brighter or darker result than the meter would normally select | Use it when automatic exposure produces the wrong brightness; its effect depends on mode and whether the camera can adjust a setting |
| Histogram | A graph of image tones from dark to bright | Helps assess exposure; touching an edge can be intentional, and the in-camera graph usually reflects the processed preview |
| Highlights / shadows | Bright / dark areas of an image | Review whether important detail survives in each |
| Clipping / dynamic range | Lost detail beyond recordable limits / the span of brightness the system can represent | Bright skies and dark interiors may exceed what one exposure can retain |
| Noise | Random-looking grain or color variation | Most noticeable when little light was captured and the image is brightened; improve light capture when possible |
| RAW / JPEG | A file retaining sensor data for flexible processing / a processed, compressed image | Choose RAW for editing flexibility, JPEG for convenience, or both while learning; neither makes incorrect focus recoverable |
| Aperture Priority (A) | You choose aperture; the camera chooses shutter time, and may choose ISO when Auto ISO is enabled | Useful for controlling depth of field; watch the resulting shutter speed |
| Shutter Priority (S) | You choose shutter time; the camera chooses aperture, and may choose ISO when Auto ISO is enabled | Useful for movement; watch for exposure warnings when available light exceeds the camera/lens limits |
| Manual (M) | You choose aperture and shutter time | Useful when both must remain fixed; with Auto ISO, part of exposure control is still automatic |

## 5. First practice assignment

Place an object near a window with some space between it and the background. Keep the camera position, focal length, and focus point the same. Use Aperture Priority and take three photos at f/2.8, f/4, and f/8, where supported. Use stable support if shutter speeds become slow.

Compare the background and the range that looks sharp. Read the shutter speed and ISO recorded for each photograph: the camera may have adjusted them to keep image brightness similar. Record one observation and one question in your notes.

Next, photograph a moving hand in good light using Shutter Priority at 1/60 and 1/500 second. Keep your camera steady and compare hand movement. If the faster shot is too dark, inspect the aperture and ISO limits or move somewhere brighter.

Self-review:

- Can I explain why the background changed between aperture examples?
- Can I distinguish subject movement from missed focus or camera shake?
- Which setting did the camera adjust automatically?
- What will I change deliberately on my next attempt?

## Publication checklist

- Verify model-specific claims and attach primary references before adding exact camera instructions.
- Add clearly labeled aperture, motion, and focal-length comparisons using controlled photographs or honest illustrations.
- Split this draft into short lessons with stable IDs, prerequisites, glossary links, and progress tracking.
- Confirm exercises work with the user's exact lens variant.
- Treat this as the beginning of the curriculum; editing, light, composition, advanced optics, and video remain in the wider plan.
