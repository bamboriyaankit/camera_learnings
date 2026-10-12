'use strict';
// Original teaching text with dated sources; unreviewed foundations remain labeled.
window.FIELD_GUIDE = {
  lessons: [
    { id: 'light', title: 'A photograph starts with light', category: 'THE STARTING POINT', time: 4, symbol: '☀', intro: 'Before the buttons and numbers, understand what your camera is actually doing.', definition: 'A camera records light reflected from a scene. The lens focuses that light onto the sensor, which turns it into information for an image.', sections: [
      ['Follow the light', 'Light falls on your subject, reflects into the lens, passes through its aperture, and reaches the sensor during the exposure. The camera then turns the recorded information into a photograph.'],
      ['Meet the three controls', 'Aperture changes the size of the lens opening. Shutter speed changes how long light is recorded. ISO affects how the recorded signal becomes image brightness. Raising ISO does not collect more light.'],
      ['When to think about the light', 'Before changing settings, look at your subject. Is the light soft or harsh? Is the face brighter or darker than the background? Moving closer to a window can help more than changing a camera setting.'],
      ['The trade-off', 'A bright-looking photograph does not always contain a lot of captured light. Brightening a poorly lit exposure can reveal noise: random-looking grain or color variation. More useful light gives you more choices.']
    ], exercise: 'Put an everyday object near a window. Photograph it facing the window, then from the side. Compare the shadows. Keep it simple: automatic mode is fine for this first exercise.', question: 'Which change actually adds more light to the scene?', options: ['Raising ISO', 'Moving the subject closer to a bright window', 'Cropping the photograph'], answer: 1, explanation: 'The window lights the subject. ISO changes image brightness from the recorded signal; cropping changes the framing.' },
    { id: 'aperture', title: 'Aperture: choose what stands out', category: 'EXPOSURE FOUNDATIONS', time: 6, symbol: '◉', intro: 'A small number, a larger opening, and a new way to separate your subject from its surroundings.', definition: 'Aperture is the opening inside your lens that lets light through. A smaller f-number, such as f/2.8, means a larger relative opening than f/8.', sections: [
      ['What changes in your photo?', 'With other settings fixed, a wider aperture lets in more light. It also gives less depth of field: a smaller range of distances looks sharp. A smaller opening gives more depth of field but lets in less light.'],
      ['When to use a wide aperture', 'Try f/2.8–f/4 for one person or a small detail you want to separate from the background. Focus carefully on the important part, such as the nearer eye. More distance between subject and background also helps background blur.'],
      ['When to use a smaller aperture', 'Try f/5.6–f/8 for a group or a landscape when you want more of the scene sharp. Focus placement and subject distances still matter. A high f-number alone cannot guarantee a sharp group.'],
      ['Watch the trade-off', 'Less light may require a slower shutter or higher ISO. Very small apertures can soften fine detail through diffraction, the spreading of light through the opening. The highest f-number is not automatically the sharpest.']
    ], exercise: 'Use Aperture Priority (A). Photograph an object with space behind it at f/2.8, f/4, and f/8 if your lens allows. Keep your position, zoom, and focus point the same. Compare background blur and the shutter speed the camera chose.', question: 'Which setting gives the wider opening?', options: ['f/8', 'f/16', 'f/2.8'], answer: 2, explanation: 'The smaller f-number means the larger relative opening. At the same distance and focal length, it usually gives less depth of field.' },
    { id: 'shutter', title: 'Shutter speed: decide how time looks', category: 'EXPOSURE FOUNDATIONS', time: 6, symbol: '↗', intro: 'Freeze a quick moment or let movement become part of the picture.', definition: 'Shutter speed is how long the sensor records light for one photograph. 1/1000 second is a shorter, faster exposure than 1/60 second.', sections: [
      ['Read the fraction', '1/500 means one five-hundredth of a second. The bigger denominator means less time. A display of 1 second means much more time than 1/500 second.'],
      ['When to go faster', 'For a person standing fairly still, start around 1/125–1/250 second. For running children or pets, try 1/500–1/1000 or faster. Speed, direction, distance, focal length, and your steadiness all influence what works.'],
      ['When to go slower', 'A longer exposure can show flowing water, passing traffic, or a moving hand as a blur. Support the camera so that stationary parts stay sharp. In daylight, a long exposure may let in too much light.'],
      ['Watch the trade-off', 'A faster shutter captures less light. You may need a wider aperture, higher ISO, or brighter surroundings. A tripod reduces camera movement, but cannot freeze a moving person.']
    ], exercise: 'In good light, photograph a moving hand in Shutter Priority (S) at 1/60 and 1/500 second. Keep the camera steady. Compare the movement and check whether the faster photograph became too dark.', question: 'Your subject is blurred by movement. What should you try first?', options: ['A faster shutter speed', 'A longer exposure', 'A tighter crop'], answer: 0, explanation: 'A faster shutter records less of the movement. Then check whether you need more light, a wider aperture, or higher ISO.' },
    { id: 'iso', title: 'ISO: work with the light you have', category: 'EXPOSURE FOUNDATIONS', time: 5, symbol: '▥', intro: 'Understand image brightness without treating a high ISO number as a mistake.', definition: 'ISO affects how the camera amplifies or interprets the recorded signal to produce image brightness. Increasing ISO does not add light to the sensor.', sections: [
      ['What changes?', 'At the same aperture and shutter speed, a higher ISO generally makes the rendered image brighter. If Auto ISO is active, the camera chooses this value for you.'],
      ['When to keep it low', 'Use a low ISO, such as 100, when there is enough light for your chosen aperture and shutter speed. This generally leaves more room to retain bright detail.'],
      ['When to raise it', 'In a dim room, you may need a fast shutter to keep a person sharp. Once your aperture is suitably wide, raising ISO can give a usable brightness while preserving that shutter speed. Some visible noise is often preferable to unintended motion blur.'],
      ['Watch the trade-off', 'High ISO usually reduces highlight headroom. Noisy low-light photographs often start with too little captured light. If possible, improve lighting or allow a longer exposure when your subject is still. There is no single maximum ISO that suits every photo.']
    ], exercise: 'With a stationary subject, set Manual mode, a fixed aperture and shutter speed, and manual ISO. Take photos at ISO 100, 400, and 1600. Choose light where these remain usable. Compare brightness; remember that the light captured stayed the same.', question: 'Does raising ISO collect additional light?', options: ['Yes', 'No'], answer: 1, explanation: 'Light collection depends on scene light, aperture, and exposure time. ISO affects the resulting signal and brightness.' },
    { id: 'balance', title: 'Bring the three settings together', category: 'EXPOSURE FOUNDATIONS', time: 6, symbol: '△', intro: 'Choose the look first. Then balance brightness around it.', definition: 'A stop is a doubling or halving. Exposure settings can be balanced in stops, but each setting has a different effect on your photograph.', sections: [
      ['A simple example', 'Changing from 1/125 to 1/250 second halves the time for collecting light. Opening from f/4 to f/2.8 admits approximately twice as much light per unit time, balancing that change if the scene stays the same.'],
      ['Choose your priority', 'For movement, choose shutter speed first. For depth of field, choose aperture first. If both matter, choose both in Manual mode, then adjust ISO or the available light. Auto ISO can still automate part of the process in Manual mode.'],
      ['When the photo is too bright or dark', 'In P, A or S, exposure compensation asks for a brighter or darker result than the meter would normally choose. On the a6400 it also works in M with ISO AUTO, but not in M with a fixed ISO, Intelligent Auto, Superior Auto or Scene Selection. Its effect depends on the settings the camera can change and whether they have reached their limits.'],
      ['Watch the trade-off', 'Raising ISO can restore similar displayed brightness after shortening shutter time, but it cannot restore the lost captured light. Equally bright photos can have different noise, movement, and depth of field.']
    ], exercise: 'Photograph a still object in Aperture Priority at f/2.8 and f/4. Inspect shutter speed and ISO in playback. Which setting changed to compensate? Describe the result in one sentence.', question: 'Changing 1/125 to 1/250 second does what to capture time?', options: ['Doubles it', 'Halves it', 'Keeps it the same'], answer: 1, explanation: 'The exposure is half as long. If nothing else changes, the sensor receives half as much light.' },
    { id: 'focus', title: 'Focus: put sharpness where it matters', category: 'LENS & OPTICS', time: 5, symbol: '⊙', intro: 'Learn the difference between missed focus, camera shake, and subject movement.', definition: 'Focusing adjusts the lens so that a chosen distance is rendered sharply. Depth of field is the range of distances that look acceptably sharp around it.', sections: [
      ['Choose the important part', 'For a portrait, the nearer eye is usually the priority. For an object, choose the detail that tells its story. The camera does not always know what you consider important.'],
      ['AF-S, AF-C, and AF-A', 'AF-S (Single-shot AF) locks focus when it finds a still subject. AF-C (Continuous AF) keeps adjusting while you hold the shutter halfway, making it a useful starting point for movement. AF-A (Automatic AF) switches between these behaviors based on whether the camera thinks the subject is moving; its availability depends on lens support.'],
      ['Manual focus and DMF', 'MF (Manual Focus) lets you adjust focus yourself with the lens focus ring. DMF uses autofocus first, then lets you fine-tune manually. Manual focus is different from M on the mode dial: M controls exposure, so you can use manual exposure with autofocus.'],
      ['Find the setting on your a6400', 'For still photographs, open MENU → Camera Settings1 → Focus Mode. Choose the method that suits the subject. Sony lists only AF-C and MF for movies; some choices depend on the shooting mode and lens. The camera-practice lessons and Camera reference explain focus areas, eye detection, tracking, magnification and peaking.'],
      ['Recognize the problem', 'If the background is sharp but the subject is not, focus may be misplaced. If the whole frame looks smeared, suspect camera movement. If only the moving subject is smeared, suspect shutter speed. More than one cause can happen at once.'],
      ['Watch the trade-off', 'A wide aperture can leave very little room for focus errors. A smaller aperture can help, but needs more light or another exposure adjustment. Moving closer also makes focus placement more demanding.']
    ], exercise: 'Arrange three objects at different distances. Focus on the middle one and photograph at a wide then smaller aperture. Inspect which objects look sharp, and note any shutter-speed change.', question: 'The background is sharp but the person is soft. What should you inspect?', options: ['The file name', 'Where the camera focused', 'The battery percentage'], answer: 1, explanation: 'Sharpness at the wrong distance suggests misplaced focus. Check for subject movement as well.', source: {label:'Sony a6400 Help Guide: Focus Mode',url:'https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002273481.html',checked:'2026-10-11'} },
    { id: 'focal-length', title: '18 to 50mm: explore your framing', category: 'LENS & OPTICS', time: 5, symbol: '⌑', intro: 'Your zoom lens offers many ways to frame a scene. Start by keeping your feet still.', definition: 'Focal length is an optical property measured in millimetres. On the same camera, a shorter focal length shows a wider scene; a longer one frames a smaller part of it.', sections: [
      ['When to use the wide end', 'Try 18mm when you want more of a room, landscape, or surrounding story in the photograph. Watch the edges: distracting objects can easily sneak into a wide frame.'],
      ['When to use the long end', 'Try 50mm for tighter framing of a face, object, or distant detail. Your subject fills more of the frame from the same position. Make sure your shutter speed is fast enough for steady results.'],
      ['Zooming versus moving', 'Zooming from the same spot changes framing. Moving changes perspective: how large and separated objects appear relative to each other. Moving very close to a face can exaggerate its nearer features.'],
      ['Watch the trade-off', 'You may need to step back to fit a subject at 50mm, and space may limit you. A crop factor describes angle of view compared with another sensor size; it does not physically change your lens’s focal length or f-number.']
    ], exercise: 'From one position, photograph the same scene at 18, 35, and 50mm. Then choose a focal length and move closer. Compare framing and the relationship between foreground and background.', question: 'What changes perspective?', options: ['Moving the camera to a different position', 'Only changing ISO', 'Renaming the image'], answer: 0, explanation: 'Camera position changes the relationships between objects. Zooming from a fixed position mainly changes the field of view.' },
    { id:'file-format', title:'JPEG or RAW: what should you keep?', category:'FILES & SHARING', time:6, symbol:'▧', intro:'Choose a file for today’s sharing and decide whether you want an editing original for later.', definition:'JPEG is a processed image ready to view and share. RAW keeps more capture information for flexible editing. RAW & JPEG saves both versions from the same photograph.', sections:[
      ['Start with what you need today', 'If you want to practise and share immediately without editing, JPEG is a sensible choice. If you want to keep an editing original for later and have space on the card and computer, choose RAW & JPEG. RAW alone suits a workflow where you are prepared to process every selected photograph before sharing.'],
      ['Find it on your a6400', 'Open MENU → Camera Settings1 → File Format. Sony lists RAW, RAW & JPEG, and JPEG. File Format chooses the type of file; JPEG Quality and JPEG Image Size are separate settings. The “Keep a detailed, shareable JPEG” lesson and Camera reference explain those settings.'],
      ['What RAW gives you', 'RAW gives more flexibility when adjusting white balance, tones, and color in a compatible editor. It cannot recover missed focus or every clipped highlight. Your a6400 records compressed RAW files; do not look for the uncompressed/lossless RAW choices offered by some other Sony models.'],
      ['Watch the trade-off', 'RAW & JPEG uses more card and computer space because it creates two files. RAW files also need compatible viewing or editing software. Certain camera processing options, including Auto HDR and Picture Effect, are unavailable with RAW. The free Mac editing workflow will be covered later.'],
      ['Share the JPEG; keep the original', 'For friends and family, share a JPEG copied from the camera or exported from your edit. Keep the RAW separately if you captured one. For printing or an important image, offer a full-resolution JPEG download. Use a smaller JPEG copy for casual viewing when you want to save storage and data. Renaming a RAW file to .jpg does not convert it.'],
      ['A phone transfer may change the file', 'Sony’s Send to Smartphone documentation says RAW images are converted to JPEG when sent, and transfer size can be Original, 2M, or VGA. Receiving a picture on your phone does not prove that the original RAW was backed up. Use a cable or card import when you need the actual originals.']
    ], exercise:'Choose JPEG or RAW & JPEG based on your current needs. Take one test photograph, copy its files to your computer, and check which file types exist. If you chose both, keep the pair together and use the JPEG for sharing.', question:'Which choice gives you a ready-to-share photo and an editing original from the same shot?', options:['JPEG only','RAW & JPEG','Changing the filename to .jpg'], answer:1, explanation:'RAW & JPEG saves both. Share the JPEG and keep the RAW if you want editing flexibility later.', source:{label:'Sony a6400 Help Guide: File Format (still image)',url:'https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002279217.html',checked:'2026-10-11'} }
  ],
  guides: [
    { id: 'portrait', title: 'A portrait by the window', tag: 'PEOPLE', symbol: '◒', intro: 'Soft daylight, one person, and a simple background.', settings: ['35–50mm', 'f/2.8–f/4', '1/125–1/250s', 'Auto ISO'], steps: ['Place the person near a window with light falling across their face.', 'Leave space between the person and the background. Focus on the nearer eye.', 'Check that the face is sharp. Raise shutter speed if they move; close the aperture a little if too little of the face is sharp.'], lesson: 'aperture' },
    { id: 'landscape', title: 'A landscape with depth', tag: 'OUTDOORS', symbol: '△', intro: 'A still scene with foreground and distance.', settings: ['18–24mm', 'f/5.6–f/8', 'Check for shake', 'Low ISO if possible'], steps: ['Find a clear subject and look for a foreground that adds context.', 'Choose Aperture Priority and check the shutter speed before shooting handheld.', 'Review near and far detail. Adjust focus placement; use stable support if the shutter becomes slow.'], lesson: 'focus' },
    { id: 'motion', title: 'Children, pets & movement', tag: 'ACTION', symbol: '↗', intro: 'Give yourself enough light and room to follow the action.', settings: ['Room to frame', 'f/2.8–f/4', '1/500–1/1000s', 'Auto ISO'], steps: ['Choose a fast shutter as a starting point and a focus mode intended for moving subjects.', 'Keep following the subject as you shoot. Leave space in the direction they are moving.', 'If movement is still blurred, go faster. If the frame is dark, check exposure limits or move to brighter light.'], lesson: 'shutter' },
    { id: 'indoor', title: 'Everyday moments indoors', tag: 'LOW LIGHT', symbol: '☷', intro: 'Start with the available light, then protect your shutter speed.', settings: ['18–35mm', 'f/2.8 if available', '1/125s or faster for people', 'Raise ISO as needed'], steps: ['Move your subject toward a window or another useful light source.', 'Watch the shutter speed. A wide aperture in Aperture Priority does not guarantee a fast shutter.', 'Review motion and color. Raise ISO when needed; adjust white balance if the image looks too orange or blue.'], lesson: 'iso' }
  ],
  sharing: {
    checked:'2026-10-11',
    providers:[
      {name:'Google Drive', allowance:'15 GB shared', best:'Downloadable JPEGs and original files', limit:'Shared with Gmail and Google Photos; your available space may be much smaller. Uploads stop when storage is full.', url:'https://drive.google.com/'},
      {name:'Google Photos', allowance:'The same Google 15 GB', best:'An easy album for friends and family', limit:'Not an extra 15 GB. Original quality uses storage; Storage saver also uses storage and can reduce image size/quality.', url:'https://photos.google.com/'},
      {name:'Dropbox Basic', allowance:'2 GB', best:'A small folder of downloadable photographs', limit:'Smaller allowance. Link recipients can view/download without a Dropbox account. Free sharing remains subject to provider limits.', url:'https://www.dropbox.com/basic'}
    ],
    methods:[
      {id:'drive',title:'A download link with Google Drive',tag:'RECOMMENDED · KEEP THE FILE QUALITY',intro:'Use this when relatives want to download JPEGs, print a favorite, or keep their own copy.',steps:[
        'On your Mac, open drive.google.com and sign in to your personal Google account. Create a folder for the occasion and upload only the photos you want to share.',
        'Select the folder and open Share. For selected people, keep General access set to Restricted and add their email addresses as Viewers.',
        'For a link that works without signing in, choose Anyone with the link and Viewer. Anyone who receives or forwards this link can open it.',
        'Check the sharing settings if you want recipients to download files. Copy the link and paste it into your family chat or email.',
        'For an anyone-link, test it in a private/incognito browser window. For restricted sharing, ask an intended recipient to confirm access. Opening it while signed in as the owner is not an access test.'
      ],tradeoff:'Drive stores the file you upload; the preview is not a quality check. Ask recipients to download the JPEG, rather than screenshot the preview. Changing permissions later cannot remove copies they already downloaded.',source:'https://support.google.com/drive/answer/2494822?hl=en'},
      {id:'album',title:'An album with Google Photos',tag:'RECOMMENDED · EASY FAMILY VIEWING',intro:'A good choice for a trip, birthday, or family day when people mainly want to browse pictures.',steps:[
        'Open photos.google.com on your Mac, or Google Photos on your Android device. Upload the selected JPEGs and check the backup quality setting.',
        'Choose Original quality if retaining the uploaded resolution and quality matters. Storage saver compresses photos and resizes images larger than 16 MP to 16 MP, with some exceptions.',
        'Create an album, give it a useful name, and add only the photographs you intend to share.',
        'Use Share to invite people, or create a link for people without a Google account. Review whether others can add photographs or comments.',
        'Send the album link and check it from a recipient’s point of view. Keep an independent copy of your important originals.'
      ],tradeoff:'Anyone with an album link can view it. Drive, Photos, and Gmail share the same Google allowance. Storage saver is not unlimited free storage, and resizing is unsuitable when you need the original resolution.',source:'https://support.google.com/photos/answer/6131416?hl=en'},
      {id:'nearby',title:'Nearby transfers with LocalSend',tag:'RECOMMENDED · MAC + ANDROID',intro:'Use this between your MacBook Air M4, Galaxy Tab S9, and Nothing Phone (2), or with a friend nearby.',steps:[
        'Use the free LocalSend app on both devices. It supports macOS and Android, with no account required.',
        'Connect both devices to the same trusted local network and allow local-network access if asked. Internet access is not required for the transfer.',
        'Select your JPEGs or original files on the sending device, choose the receiving device, and accept the transfer there.',
        'Check the receiving folder and open a file before removing any source copies. Choose a destination folder in the app settings if needed.'
      ],tradeoff:'This transfers actual files locally, with no cloud storage quota. Both devices must be reachable on the local network; guest-network isolation or a firewall can prevent discovery. It does not create a link for someone far away.',source:'https://localsend.org/'},
      {id:'chat',title:'A few photographs in a chat',tag:'QUICK EVERYDAY SHARING',intro:'Send a small selection through the messaging app your family already uses.',steps:[
        'Choose JPEGs so recipients can view them easily. Send the best few rather than every frame.',
        'A normal photo attachment may be resized or recompressed. An HD option may improve it, but does not necessarily preserve the exact original file.',
        'If the app offers a file/document attachment, use that when preserving the file matters, then check the received image. For predictable original-file delivery, use a Drive download link instead.',
        'Check the recipients before sending and retain your own originals.'
      ],tradeoff:'Quality, attachment size, and delivery behavior vary by app and version. Chat is convenient for viewing, but should not be your only archive.',source:null},
      {id:'email',title:'Email or a small download folder',tag:'WHEN THEY PREFER EMAIL',intro:'Useful for a few pictures or for someone who does not use your usual messaging app.',steps:[
        'Attach a few JPEGs, or include a shared-folder link for a larger collection.',
        'Use the actual attachment/download option instead of copying a tiny preview into the email.',
        'Tell the recipient whether the files are full-resolution or smaller viewing copies.',
        'If the email reports an attachment-size limit, send a Drive or Dropbox link instead of splitting the set into many messages.'
      ],tradeoff:'Attachment limits vary between email providers. Email copies can also consume mailbox storage; for a Google account, Gmail shares storage with Drive and Photos.',source:'https://support.google.com/drive/answer/6374270?hl=en'},
      {id:'dropbox',title:'A small shared folder with Dropbox',tag:'ANOTHER FREE LINK OPTION',intro:'Useful if you or your family already use Dropbox and the collection fits its smaller free allowance.',steps:[
        'Use Dropbox Basic in your browser. Upload the selected files or a folder; no desktop app is required for browser uploads.',
        'Create a shared link for the file or folder and copy it into your message.',
        'Recipients can open the link to view and download without needing a Dropbox account.',
        'Check remaining storage and retain your own copies. Select the free Basic plan; a paid trial is not needed for this workflow.'
      ],tradeoff:'Basic includes 2 GB. Do not assume premium link controls, such as custom expiry or password protection, are included. Review current limits before sharing a very large collection.',source:'https://www.dropbox.com/basic'},
      {id:'offline',title:'Use an existing USB drive or local connection',tag:'NO CLOUD NEEDED',intro:'A practical option for large collections or when the recipient is with you and internet is limited.',steps:[
        'If you already have a compatible USB drive or storage device, copy the selected JPEGs into a clearly named folder.',
        'Safely eject it, connect it to the recipient’s device, and check that the files open. Do not format a drive just to share photos without first checking what is already on it.',
        'For Apple-to-Apple sharing, AirDrop is another nearby option. It is not a direct Mac-to-Android solution; LocalSend covers your Mac/Android combination.',
        'For public social-media posts, upload viewing copies and expect platform processing. A social post is not a dependable original-file delivery method.'
      ],tradeoff:'Use hardware you already own to keep this free. Removable-drive compatibility and platform behavior vary. None of these methods replaces a separate backup.',source:null}
    ],
    sources:[
      ['Google storage allowance','https://support.google.com/drive/answer/6374270?hl=en'],
      ['Drive sharing and permissions','https://support.google.com/drive/answer/2494822?hl=en'],
      ['Google Photos sharing','https://support.google.com/photos/answer/6131416?hl=en'],
      ['Google Photos backup quality','https://support.google.com/photos/answer/6220791?hl=en'],
      ['Dropbox Basic','https://www.dropbox.com/basic'],
      ['LocalSend features and device support','https://localsend.org/'],
      ['Apple Image Capture import guide','https://support.apple.com/guide/image-capture/transfer-images-imgcp1003/mac'],
      ['Sony a6400 USB Connection','https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241316.html'],
      ['Sony a6400 Send to Smartphone','https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264727.html'],
      ['Sony mobile-app naming and device support','https://support.d-imaging.sony.co.jp/app/iemobile/en/devices/']
    ]
  },
  glossary: [
    ['Aperture', 'The lens opening. A lower f-number means a wider relative opening.', 'aperture'],
    ['Shutter speed', 'How long light is recorded. A shorter exposure helps freeze movement.', 'shutter'],
    ['ISO', 'A setting affecting how the recorded signal becomes image brightness.', 'iso'],
    ['Depth of field', 'The range of distances that look acceptably sharp.', 'focus'],
    ['Focal length', 'An optical property in millimetres that affects framing and angle of view.', 'focal-length'],
    ['Exposure compensation', 'A request for a brighter or darker automatic exposure result.', 'balance'],
    ['White balance', 'An adjustment to neutral colors under different light sources.', 'light'],
    ['Histogram', 'A graph of image tones from dark to bright; useful for reviewing brightness.', 'balance'],
    ['Noise', 'Random-looking grain or color variation, often visible when little light was captured.', 'iso'],
    ['Perspective', 'The apparent size and position relationships between objects, determined by camera position.', 'focal-length'],
    ['RAW and JPEG', 'RAW retains sensor data for flexible editing; JPEG is a processed, compressed image.', 'file-format'],
    ['Stop', 'A doubling or halving used to compare exposure settings.', 'balance']
  ]
};

// Camera practice expansion; stable lesson IDs preserve existing progress.
window.FIELD_GUIDE.lessons.push(...[
  {
    "id": "first-day",
    "title": "Your first day with the a6400",
    "time": 10,
    "definition": "A setup check makes sure the camera can record a file, focus where you intend, and show you the result.",
    "intro": "Finish with three test photographs you can find, enlarge, and copy safely.",
    "prerequisites": [
      "light",
      "balance",
      "file-format"
    ],
    "sections": [
      [
        "Before you start",
        "Use your camera, attached lens, charged battery, and existing compatible memory card. These instructions use the English a6400 Help Guide. You confirmed the Sigma 18–50mm F2.8 DC DN | Contemporary, Sony E mount, on 2026-10-11. You reported body version 2.00 and lens version 03 on 2026-10-11. MENU → Setup → Version shows the camera software version. The current face/eye instructions below require version 2.00 or later; checking the version does not install an update."
      ],
      [
        "1. Charge and handle the camera",
        "Turn the camera off before charging with the battery inserted, using the supplied micro USB cable and AC adaptor as Sony describes. An orange charge lamp lights during charging and goes out when finished; flashing can mean a temperature pause or error. Use the strap and support the lens as well as the grip."
      ],
      [
        "2. Check the card and lens",
        "Turn the camera off and wait until the access lamp is off before removing the card or battery. Match the card notch to the compartment diagram; never force it. Keep an already attached lens in place. If changing lenses, power off, work in a clean place, point the mount downward, align the white mounting marks and turn gently until locked. Do not touch the exposed sensor or contacts."
      ],
      [
        "3. Keep existing photographs safe",
        "Sony recommends in-camera formatting when first using a card with this camera. MENU → Setup → Format permanently erases everything on the card, including protected images. First copy valuable files and open the copies to verify them. Skip formatting if you are unsure what is on the card; it is not a routine step before each shoot."
      ],
      [
        "4. Find your way around",
        "Press MENU, use the rear control wheel’s directions to select a tab or item, and press its center to confirm. MENU goes back. The top control dial rotates; the rear control wheel rotates and has directional presses. Fn opens a shortcut menu while shooting; its contents can be customized, so the full MENU paths in these lessons are the dependable reference."
      ],
      [
        "5. Make the display readable",
        "On first power-on, follow the language, area, date and time prompts. If already set, use MENU → Setup → Date/Time Setup and Area Setting. Look through the viewfinder and adjust its diopter dial until the display lettering is sharp. This adjusts the finder for your eyesight; it does not focus the photograph."
      ],
      [
        "6. Set up one still subject",
        "Place a cup near a window. Choose A on the mode dial and turn the top control dial to f/4 if available. Set MENU → Camera Settings1 → ISO Setting → ISO → ISO AUTO; Drive Mode → Single Shooting; Focus Mode → Single-shot AF; Focus Area → Center; AF w/ shutter → On. Set File Format → JPEG, JPEG Quality → Fine, JPEG Image Size → L, and Aspect Ratio → 3:2. These are practice starting points, not universal settings."
      ],
      [
        "7. Focus, record, review",
        "Keep the cup in the center, hold the shutter halfway until focus is confirmed, then press fully. Support the camera steadily and watch the shutter speed; if it becomes too slow for a sharp handheld result, find brighter light or stable support. Use playback, then MENU → Playback → Enlarge Image. Turn the wheel to change magnification, use its directions to inspect the cup, and press the center to exit. Check three frames rather than judging only the small preview."
      ],
      [
        "If something looks wrong",
        "No focus on half-press? Check AF w/ shutter is On and Focus Mode is not Manual Focus. A burst instead of one picture? Check Drive Mode. A menu choice is unavailable? Check the mode dial is A and follow the restriction listed in the menu reference. Copy your test JPEGs using the Share photos instructions and open them before deleting anything from the card."
      ]
    ],
    "exercise": "Take three photos of the cup. Enlarge each to inspect focus, copy them to your Mac, and write down the camera version and any menu label that differs. Do not mark this exercise finished just because the shutter made a sound.",
    "question": "What does Format do?",
    "options": [
      "Only removes blurry photos",
      "Permanently erases all card data, including protected images",
      "Charges the battery"
    ],
    "answer": 1,
    "explanation": "Copy and verify valuable files before formatting. Protected images are not protected from Format.",
    "sources": [
      {
        "label": "Charging in camera",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264626.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Inserting/removing a memory card",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264631.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Attaching/removing a lens",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002273484.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Format",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241321.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Version",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241328.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Using MENU items",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264637.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Fn menu",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241247.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Identifying parts",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002280308.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Language, date and time",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264634.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Enlarge Image",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264710.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Drive Mode",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264679.html",
        "checked": "2026-10-11"
      },
      {
        "label": "AF w/ shutter",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241208.html",
        "checked": "2026-10-11"
      }
    ],
    "category": "CAMERA IN PRACTICE",
    "symbol": "◎",
    "stage": "controls"
  },
  {
    "id": "focus-area",
    "title": "Choose where autofocus looks",
    "time": 8,
    "definition": "Focus mode decides when the camera focuses. Focus area decides where it looks for a subject.",
    "intro": "Tell the camera which object matters when the background keeps winning.",
    "prerequisites": [
      "focus",
      "first-day"
    ],
    "sections": [
      [
        "Start with a still object",
        "Choose A on the mode dial. Set MENU → Camera Settings1 → Focus Mode → Single-shot AF, then Focus Area → Flexible Spot. Choose the medium spot as a starting point. A smaller spot is more precise but can struggle on a plain surface; aim at a visible edge with contrast."
      ],
      [
        "Move the area deliberately",
        "Sony uses the Focus Standard function to enter or leave focus-frame movement: press the button assigned to Focus Standard, then use the control wheel’s directions. Button assignments may have changed. Check MENU → Camera Settings2 → Custom Key if needed. Alternatively, enable MENU → Setup → Touch Operation → On and drag the focus frame on the monitor. Half-press to focus, then take the photo."
      ],
      [
        "Understand the six area families",
        "Wide lets the camera choose across the frame. Zone narrows that choice to a larger region you place. Center fixes the area in the middle. Flexible Spot places a small frame precisely, with S, M and L sizes. Expand Flexible Spot uses surrounding points if its selected point cannot focus. Tracking starts from your chosen area and follows the subject while you hold the shutter halfway."
      ],
      [
        "When to use each",
        "Try Flexible Spot for a cup behind foreground objects, Zone for a moving subject within one part of the frame, and Wide for an uncluttered scene where automatic selection is easy to check. A smaller area gives you control but needs careful placement. A larger area makes initial acquisition easier but may choose the wrong subject."
      ],
      [
        "Restrictions that explain missing choices",
        "Focus Area is locked to Wide in Intelligent Auto, Superior Auto, Scene Selection and Smile Shutter. Tracking in this menu requires Continuous AF, still-photo mode, and Subject Detection set to Human rather than Animal. Digital zoom functions also disable normal focus-area selection; use the lens’s optical zoom ring for these exercises."
      ],
      [
        "Review the right kind of error",
        "A sharp background with a soft cup suggests focus went to the wrong distance. A smear across the whole picture can be camera shake; a blurred moving subject with a sharp background can be subject motion. Fix the shutter speed as well as focus when needed."
      ]
    ],
    "exercise": "Place two objects at different distances. Keep the camera in one position and use Flexible Spot to focus on each in turn. Compare enlarged playback. Record which object is sharp and whether a wider area made selection harder.",
    "question": "The camera keeps selecting the background. What gives you more precise control?",
    "options": [
      "Flexible Spot placed on the subject",
      "A different file name",
      "Higher JPEG compression"
    ],
    "answer": 0,
    "explanation": "A placed focus area directs autofocus toward your intended subject; it still needs enough contrast and light.",
    "sources": [
      {
        "label": "Focus Area",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264665.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Focus Mode",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002273481.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Touch Operation",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002273547.html",
        "checked": "2026-10-11"
      }
    ],
    "category": "CAMERA IN PRACTICE",
    "symbol": "◎",
    "stage": "controls"
  },
  {
    "id": "eye-tracking",
    "title": "Keep a person in focus",
    "time": 9,
    "definition": "Eye AF looks for an eye. Tracking follows the selected subject as its position changes. Neither freezes movement during the exposure.",
    "intro": "Practise a portrait first, then a person walking slowly toward you in daylight.",
    "prerequisites": [
      "focus-area",
      "shutter"
    ],
    "sections": [
      [
        "Check the firmware context",
        "The current Sony Face/Eye AF Set. page applies to camera software version 2.00 or later. Check MENU → Setup → Version. If these choices differ on your camera, use Flexible Spot on the eye while we check your version; do not assume a newer Sony camera’s menus apply."
      ],
      [
        "1. Set a human portrait baseline",
        "In still-photo mode, choose MENU → Camera Settings1 → Focus Mode → Continuous AF. Set AF w/ shutter → On. Open Face/Eye AF Set.: Face/Eye Priority in AF → On, Subject Detection → Human, Right/Left Eye Select → Auto, and Face Detect. Frame Disp. → On. Choose Focus Area → Wide for a single person against a simple background."
      ],
      [
        "2. Watch what it finds",
        "Half-press and hold the shutter while pointing at the person. Check whether the focus indication is on the intended face or eye, then shoot. Eye detection can fail with sunglasses, hair, low light, a small face or heavy movement. If it finds the face but not the eye, get a clearer view or place Flexible Spot on the near eye and inspect the result."
      ],
      [
        "3. Start tracking intentionally",
        "Set Focus Area to Tracking, then use the left/right sides of the wheel to choose a starting area such as Tracking: Flexible Spot M. Put that area over the intended person, hold the shutter halfway and follow them. Press fully to take a photo. Release and start again on the right person if tracking switches away. Tracking changes the area; Continuous AF continues adjusting the focus distance."
      ],
      [
        "4. Give motion enough shutter speed",
        "Try S mode and 1/500s with ISO AUTO for a slow walk in good light. This is a starting point: faster movement may need 1/1000s or faster. If the aperture display blinks or the image is dark, check available light and exposure limits. A tracking box over the face is not proof that the recorded eye is sharp."
      ],
      [
        "An optional touch route",
        "For monitor shooting, set MENU → Setup → Touch Operation → On and MENU → Camera Settings2 → Func. of Touch Operation → Touch Tracking. Touch the intended subject, then half-press to focus and shoot. This is a separate way to start tracking; use the shutter-start method first if touch behavior is confusing."
      ],
      [
        "People and animals use different choices",
        "Human is for people; Animal detects animal eyes, not animal faces, and cannot identify every animal reliably. With Animal selected, Tracking is unavailable and Right/Left Eye Select cannot be used. For a moving pet, try Continuous AF with Zone or Wide and inspect results. Switch Subject Detection back to Human before the person-tracking exercise."
      ],
      [
        "Still photos and movies differ",
        "This a6400 Eye AF function is unavailable during movie recording. Tracking under Focus Area is also a still-photo choice. Touch Tracking has its own movie support and restrictions. Do not transfer these still-photo instructions unchanged into a video shoot."
      ]
    ],
    "exercise": "With a willing person in daylight, take five single photos while they stand still, then five while they walk slowly. Review the near eye at enlargement. Write “sharp eyes / attempts,” your shutter speed, and the cause of each miss. A higher keeper count is stronger evidence than an AF box alone.",
    "question": "Tracking is unavailable with Subject Detection set to Animal. What does Sony document?",
    "options": [
      "Buy a faster card to enable it",
      "Animal detection cannot be combined with Tracking on this camera",
      "Tracking always works in every mode"
    ],
    "answer": 1,
    "explanation": "Use an ordinary area with animal detection, or switch to Human for the person-tracking exercise.",
    "sources": [
      {
        "label": "Face/Eye AF Set. — firmware 2.00+",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002280329.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Focus Area",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264665.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Tracking function",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002280315.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Touch Tracking",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002280339.html",
        "checked": "2026-10-11"
      },
      {
        "label": "AF w/ shutter",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241208.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Shutter Priority",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241171.html",
        "checked": "2026-10-11"
      }
    ],
    "category": "CAMERA IN PRACTICE",
    "symbol": "◎",
    "stage": "controls"
  },
  {
    "id": "manual-focus",
    "title": "Focus by hand: MF, DMF and magnification",
    "time": 8,
    "definition": "Manual focus means turning the lens focus ring yourself. Magnification enlarges the preview so you can judge the detail.",
    "intro": "Use a still subject to learn precise focus without relying only on colored outlines.",
    "prerequisites": [
      "focus",
      "first-day"
    ],
    "sections": [
      [
        "Separate focusing from exposure",
        "MF controls focus. M on the mode dial controls shutter speed and aperture. You can use MF in A mode, or autofocus in M mode. Leave the exposure mode at A for this exercise so you only learn one new control at a time."
      ],
      [
        "1. Try Manual Focus",
        "Choose MENU → Camera Settings1 → Focus Mode → Manual Focus. Keep the camera and a textured subject still. Turn the lens focus ring, rather than its zoom ring, while watching fine detail become clearer or softer. If the viewfinder lettering itself is blurry, adjust the diopter before judging the image."
      ],
      [
        "2. Enlarge the preview",
        "Set MENU → Camera Settings1 → MF Assist → On. Turning the focus ring in MF or DMF automatically enlarges the preview. For deliberate control, open MENU → Camera Settings1 → Focus Magnifier, press the wheel center to enlarge and use the directions to choose the detail to inspect. Turn the focus ring slowly, then take the picture. This is a focusing preview, not extra recorded resolution."
      ],
      [
        "3. Treat peaking as a clue",
        "MENU → Camera Settings1 → Peaking Setting provides Peaking Display, Peaking Level and Peaking Color. Enable the display and choose a color that stands out against your subject. Peaking marks edges the camera considers sharp; texture and the lens affect the result. It can highlight something that is not precisely at your intended focus. Confirm the actual detail with magnification and enlarged playback."
      ],
      [
        "4. Try DMF for a fine correction",
        "Choose Focus Mode → DMF. Half-press the shutter to autofocus, keep holding it halfway and turn the focus ring to refine the result, then press fully. This is useful for a stationary detail when autofocus gets close but chooses a slightly different surface. It is not continuous autofocus for a moving person."
      ],
      [
        "Know the limits",
        "MF Assist is for still images and is unavailable with a mount adaptor; Sony directs those cases to Focus Magnifier instead. Magnifier half-press behavior depends on AF in Focus Mag.: Off cancels the magnified view, while On can autofocus again in AF modes. Peaking outlines are display aids and are not shown on devices connected by HDMI."
      ],
      [
        "Return to normal shooting",
        "After the still-life exercise, change Focus Mode back to Single-shot AF for still objects or Continuous AF for movement. If the next photo stays unfocused on half-press, check whether you left the camera in MF."
      ]
    ],
    "exercise": "Photograph a printed label or textured object using AF-S, MF with magnification, and DMF. Keep distance, framing and exposure the same. Enlarge each photo. Record whether your manual adjustment improved the intended letters, and how long it took.",
    "question": "What is the best way to confirm focus after peaking highlights an edge?",
    "options": [
      "Assume every highlighted edge is perfectly focused",
      "Inspect the intended detail with magnification and enlarged playback",
      "Change to M exposure mode"
    ],
    "answer": 1,
    "explanation": "Peaking is a contrast-based aid; magnification lets you judge the detail that matters.",
    "sources": [
      {
        "label": "Manual Focus",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241194.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Direct manual focus",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241195.html",
        "checked": "2026-10-11"
      },
      {
        "label": "MF Assist",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264668.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Focus Magnifier",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241206.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Peaking Setting",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002279214.html",
        "checked": "2026-10-11"
      }
    ],
    "category": "CAMERA IN PRACTICE",
    "symbol": "◎",
    "stage": "controls"
  },
  {
    "id": "exposure-controls",
    "title": "Use A, S and M with confidence",
    "time": 9,
    "definition": "An exposure mode decides who chooses aperture and shutter speed. Auto ISO lets the camera choose ISO within its allowed range.",
    "intro": "Control background blur, freeze movement, or hold both settings while the light changes.",
    "prerequisites": [
      "balance",
      "aperture",
      "shutter",
      "iso"
    ],
    "sections": [
      [
        "A: choose the aperture",
        "Turn the mode dial to A and use the top control dial to choose an f-number. The camera chooses shutter speed; with ISO AUTO it also chooses ISO. Try f/4 for a still object, or f/2.8 for more separation if available. Watch the chosen shutter speed. If it blinks, the camera cannot obtain its target exposure with the current setup. A mode does not guarantee motion sharpness."
      ],
      [
        "S: choose the shutter speed",
        "Turn the mode dial to S and use the top control dial to choose shutter speed. The camera chooses aperture and, with ISO AUTO, ISO. Try 1/500s for a walking person in daylight. Faster shutter speeds reduce motion blur but admit light for less time. A blinking aperture value warns that the exposure target is out of reach; change the speed, ISO range or available light."
      ],
      [
        "M: choose both",
        "Turn the mode dial to M. With Sony’s SS F/no. dial arrangement, turn the rear control wheel for shutter speed and the top control dial for aperture. MENU → Camera Settings2 → Dial/Wheel Setup can swap them; check it if the wrong value changes. Try 1/250s and f/4 for a gently moving portrait in good light, then adjust after reviewing. Autofocus still works in M."
      ],
      [
        "Decide what ISO should do",
        "MENU → Camera Settings1 → ISO Setting → ISO → ISO AUTO lets the camera vary ISO in P, A, S or M. On ISO AUTO, press right to set ISO AUTO Minimum and Maximum. A learning range such as 100–6400 can be a starting point, but it is a preference about noise and available light, not a guarantee. If M with Auto ISO reaches its limit, the ISO indication can blink; add light or reconsider shutter/aperture instead of accepting a dark photo."
      ],
      [
        "Fully manual exposure",
        "In M, choose a numeric ISO if you want aperture, shutter speed and ISO all fixed. The MM indicator compares your settings with the camera’s meter: plus is brighter, minus is darker, and zero is the meter’s estimate. The meter does not know your intent. Fixed settings stay fixed when the light changes, so check the actual photo."
      ],
      [
        "Make automatic exposure brighter or darker",
        "MENU → Camera Settings1 → Exposure Comp. adjusts the target brightness. Start at 0, try +0.3 if the subject is too dark or −0.3 if important bright detail is disappearing, then review. It works in M only with ISO AUTO; with numeric ISO, change aperture, shutter or ISO yourself. Compensation cannot recover detail that was never recorded."
      ],
      [
        "Metering is a brightness decision",
        "MENU → Camera Settings1 → Metering Mode → Multi is a useful starting point: it evaluates multiple parts of the picture. This is separate from Focus Area, which chooses where to focus. Spot meters a small area; Highlight prioritizes bright regions and may leave your subject dark. Learn Multi and exposure compensation before changing metering for every scene."
      ]
    ],
    "exercise": "In good light, photograph a still object in A at f/4, a moving hand in S at 1/500s, and the object in M at f/4 and 1/250s with ISO AUTO. Read all three settings from the display each time. Change compensation and notice which value the camera adjusts.",
    "question": "In M with numeric ISO, how do you change image brightness?",
    "options": [
      "Use compensation and expect the camera to change fixed settings",
      "Change aperture, shutter speed, ISO or the light",
      "Change Focus Area"
    ],
    "answer": 1,
    "explanation": "M with numeric ISO fixes all three settings. Compensation changes the target in M only when ISO AUTO is selected.",
    "sources": [
      {
        "label": "Aperture Priority",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264645.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Shutter Priority",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241171.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Manual Exposure",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264646.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Dial/Wheel Setup",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002273556.html",
        "checked": "2026-10-11"
      },
      {
        "label": "ISO",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264686.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Exposure Comp.",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264676.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Metering Mode",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241212.html",
        "checked": "2026-10-11"
      }
    ],
    "category": "CAMERA IN PRACTICE",
    "symbol": "◎",
    "stage": "controls"
  },
  {
    "id": "jpeg-settings",
    "title": "Keep a detailed, shareable JPEG",
    "time": 6,
    "definition": "Quality controls JPEG compression. Image size controls pixel dimensions. Aspect ratio controls the shape of the picture.",
    "intro": "Keep useful detail in your camera files before making smaller sharing copies.",
    "prerequisites": [
      "file-format"
    ],
    "sections": [
      [
        "Choose a practical baseline",
        "For general still-photo practice, try MENU → Camera Settings1 → File Format → JPEG or RAW & JPEG; JPEG Quality → Fine; JPEG Image Size → L; Aspect Ratio → 3:2; Color Space → sRGB. These are recommendations, not settings Sony requires. Use Extra fine when you prefer less JPEG compression and can spare the storage."
      ],
      [
        "Quality: compression, not focus",
        "JPEG Quality offers Extra fine, Fine and Standard. Extra fine compresses least and generally makes the largest files; Standard compresses most and fits more photos, with more image-quality loss. It applies to the JPEG when File Format is JPEG or RAW & JPEG. It cannot repair missed focus or motion blur and does not change the RAW data."
      ],
      [
        "Size: keep pixels when they matter",
        "At 3:2, L is 6000 × 4000 (24M), M is 4240 × 2832 (12M), and S is 3008 × 2000 (6.0M). M here means medium in the size menu, and M after a number means megapixels, or millions of pixels. Large files give more room for cropping or printing; smaller ones save storage. In RAW & JPEG, RAW remains L regardless of the chosen JPEG size."
      ],
      [
        "Shape: compose for the result",
        "Aspect Ratio offers 3:2, 16:9 and 1:1. Start with 3:2 for a general photo. Use 16:9 for a deliberately wide screen composition, or 1:1 for a square. L is 6000 × 3376 at 16:9 and 4000 × 4000 at 1:1. Changing the shape does not create more captured detail. Check the edges while composing."
      ],
      [
        "Color space: start with sRGB",
        "A color space tells software how to interpret color numbers. Sony offers sRGB and AdobeRGB. Use sRGB for ordinary sharing and straightforward printing. AdobeRGB supports a wider color range in a managed workflow, but unsupported apps or printers can display it incorrectly. It is not a “better colors” switch."
      ],
      [
        "Make sharing copies later",
        "Keep your original files independently. If a relative needs a full-resolution copy, share a download of the JPEG rather than a screenshot. A small chat preview does not tell you whether the original is detailed. The editing and resizing workflow remains a later lesson."
      ]
    ],
    "exercise": "Photograph a textured object with the same exposure and focus using L/Fine and S/Standard JPEGs. On your Mac, compare dimensions, file sizes and fine detail at the same final viewing size. Restore L/Fine afterward if that suits your storage.",
    "question": "Which setting changes the pixel dimensions of the JPEG?",
    "options": [
      "JPEG Image Size",
      "Focus Mode",
      "JPEG Quality alone"
    ],
    "answer": 0,
    "explanation": "Image Size chooses dimensions. Quality chooses compression. Both affect storage, but they do different jobs.",
    "sources": [
      {
        "label": "File Format",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002279217.html",
        "checked": "2026-10-11"
      },
      {
        "label": "JPEG Quality",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002279218.html",
        "checked": "2026-10-11"
      },
      {
        "label": "JPEG Image Size",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002279216.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Aspect Ratio",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264662.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Color Space",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241268.html",
        "checked": "2026-10-11"
      }
    ],
    "category": "CAMERA IN PRACTICE",
    "symbol": "◎",
    "stage": "controls"
  },
  {
    "id": "better-photos",
    "title": "Make a photo you prefer to your phone’s",
    "time": 10,
    "definition": "A better photograph has visible strengths you can name: a sharp subject, purposeful background, useful detail, pleasing light and a clear composition.",
    "intro": "Use your current phone and camera to practise, then compare results fairly. No new purchase is needed.",
    "prerequisites": [
      "eye-tracking",
      "exposure-controls",
      "jpeg-settings"
    ],
    "sections": [
      [
        "Choose one visible goal",
        "Start with a window-lit portrait or a still object separated from its background. Decide in advance what you want to improve: a sharper eye, less distracting background, nicer light on the face, or more natural fine detail. This assignment is a comparison method, not a measured claim about current iPhone or Samsung models."
      ],
      [
        "Make the camera photograph deliberately",
        "For a portrait, try 35–50mm, f/2.8–f/4 and 1/250s with ISO AUTO in M. Focus on the near eye using the human eye-AF lesson. Move the subject away from a cluttered background and turn them toward soft window light. Inspect both eyes; use a smaller opening if too little of the face is sharp, or a faster shutter if it moves. These illustrative settings are starting points, not sample EXIF."
      ],
      [
        "Keep the comparison honest",
        "Use your Nothing Phone (2) now. If a flagship iPhone or Samsung is available to borrow, record its exact model and camera mode; do not assume your phone represents those models. Shoot at similar times in the same light, keep subject and camera positions as close as practical, and match framing. Record any crop, zoom, portrait blur, night mode or other automatic processing."
      ],
      [
        "Compare two useful questions",
        "For a controlled comparison, match scene, framing and the intended final viewing size, with camera JPEGs and the phone’s ordinary ready-to-share output. For an everyday preference comparison, also let each device use the mode you would normally choose, such as the phone’s portrait mode, and label it. Keep those results separate so you know whether you tested hardware, processing or the whole shooting workflow."
      ],
      [
        "Judge the pictures before the devices",
        "On the same screen at the same display brightness and size, hide the filenames if possible. Score each from 1 to 5 for subject sharpness, background distraction, light and skin color, retained bright/dark detail, and overall preference. Then enlarge the files to diagnose flaws; do not compare both at 100% if their different pixel counts make the subject different sizes and call that a fair viewing test."
      ],
      [
        "Repeat and learn from misses",
        "Make five attempts on each device so one lucky frame does not decide the outcome. Record sharp keepers out of five and the time/effort needed. If the phone wins, identify why: missed camera focus, motion blur, poor exposure, different framing, or processing you prefer. Phone processing may help some scenes; technique matters, and the camera need not win every category. Change one thing and repeat."
      ],
      [
        "Keep conclusions proportional",
        "Write “I preferred this camera portrait because…” instead of “this camera always beats phones.” Keep a ready-to-share JPEG comparison separate from any future edited RAW comparison. Save files on your own device and put scores and observations in this lesson’s note. Photo uploads and editing are later phases."
      ]
    ],
    "exercise": "Create five camera photos and five phone photos of the same scene. Record device/mode, framing differences, keeper counts, the five scores, and one change for the next attempt. Your success criterion is a repeatable visible improvement you can explain, not a promised win against an untested flagship.",
    "question": "What makes this a useful comparison?",
    "options": [
      "Assuming the camera must win",
      "Comparing similar scenes and viewing sizes, recording differences, and naming visible strengths",
      "Judging only by the brand"
    ],
    "answer": 1,
    "explanation": "Control the conditions, state what differed, and base your conclusion on the photographs you actually made.",
    "sources": [
      {
        "label": "Sony Manual Exposure",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264646.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Sony Face/Eye AF Set.",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002280329.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Sony JPEG Quality",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002279218.html",
        "checked": "2026-10-11"
      }
    ],
    "category": "CAMERA IN PRACTICE",
    "symbol": "◎",
    "stage": "controls"
  }
]);
window.FIELD_GUIDE.menuGroups = [
  {
    "name": "Camera Settings1",
    "entries": [
      {
        "id": "camera-settings1-tp0002279217",
        "label": "File Format (still image)",
        "source": {
          "label": "File Format (still image)",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002279217.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings1-tp0002279218",
        "label": "JPEG Quality (still image)",
        "source": {
          "label": "JPEG Quality (still image)",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002279218.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings1-tp0002279216",
        "label": "JPEG Image Size (still image)",
        "source": {
          "label": "JPEG Image Size (still image)",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002279216.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings1-tp0002264662",
        "label": "Aspect Ratio (still image)",
        "source": {
          "label": "Aspect Ratio (still image)",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264662.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings1-tp0002264664",
        "label": "Panorama: Size",
        "source": {
          "label": "Panorama: Size",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264664.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings1-tp0002241189",
        "label": "Panorama: Direction",
        "source": {
          "label": "Panorama: Direction",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241189.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings1-tp0002241265",
        "label": "Long Exposure NR (still image)",
        "source": {
          "label": "Long Exposure NR (still image)",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241265.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings1-tp0002264705",
        "label": "High ISO NR (still image)",
        "source": {
          "label": "High ISO NR (still image)",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264705.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings1-tp0002241268",
        "label": "Color Space (still image)",
        "source": {
          "label": "Color Space (still image)",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241268.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings1-tp0002279238",
        "label": "Lens Comp.",
        "source": {
          "label": "Lens Comp.",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002279238.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings1-tp0002273567",
        "label": "Switching the auto mode (Auto Mode)",
        "source": {
          "label": "Switching the auto mode (Auto Mode)",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002273567.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings1-tp0002264644",
        "label": "Scene Selection",
        "source": {
          "label": "Scene Selection",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264644.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings1-tp0002241276",
        "label": "Superior Auto Img. Extract.",
        "source": {
          "label": "Superior Auto Img. Extract.",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241276.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings1-tp0002264679",
        "label": "Drive Mode",
        "source": {
          "label": "Drive Mode",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264679.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings1-tp0002264684",
        "label": "Bracket Settings",
        "source": {
          "label": "Bracket Settings",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264684.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings1-tp0002280327",
        "label": "Interval Shoot Func.",
        "source": {
          "label": "Interval Shoot Func.",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002280327.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings1-tp0002241175",
        "label": "Recall (Camera Settings1/Camera Settings2)",
        "source": {
          "label": "Recall (Camera Settings1/Camera Settings2)",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241175.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings1-tp0002241246",
        "label": "Memory (Camera Settings1/Camera Settings2)",
        "source": {
          "label": "Memory (Camera Settings1/Camera Settings2)",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241246.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings1-tp0002278035",
        "label": "Registering shooting settings to a custom key (Reg. Custom Shoot Set)",
        "source": {
          "label": "Registering shooting settings to a custom key (Reg. Custom Shoot Set)",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002278035.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings1-tp0002273481",
        "label": "Focus Mode",
        "source": {
          "label": "Focus Mode",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002273481.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings1-tp0002264674",
        "label": "Priority Set in AF-S",
        "source": {
          "label": "Priority Set in AF-S",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264674.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings1-tp0002264675",
        "label": "Priority Set in AF-C",
        "source": {
          "label": "Priority Set in AF-C",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264675.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings1-tp0002264665",
        "label": "Focus Area",
        "source": {
          "label": "Focus Area",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264665.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings1-tp0002280328",
        "label": "Focus Area Limit",
        "source": {
          "label": "Focus Area Limit",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002280328.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings1-tp0002278024",
        "label": "Adjusting the focus area settings to the camera’s orientation (horizontal/vertical) (Switch V/H AF Area)",
        "source": {
          "label": "Adjusting the focus area settings to the camera’s orientation (horizontal/vertical) (Switch V/H AF Area)",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002278024.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings1-tp0002264670",
        "label": "AF Illuminator (still image)",
        "source": {
          "label": "AF Illuminator (still image)",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264670.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings1-tp0002280329",
        "label": "Face/Eye AF Set.",
        "source": {
          "label": "Face/Eye AF Set.",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002280329.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings1-tp0002241208",
        "label": "AF w/ shutter (still image)",
        "source": {
          "label": "AF w/ shutter (still image)",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241208.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings1-tp0002264669",
        "label": "Pre-AF (still image)",
        "source": {
          "label": "Pre-AF (still image)",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264669.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings1-tp0002241272",
        "label": "Eye-Start AF (still image)",
        "source": {
          "label": "Eye-Start AF (still image)",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241272.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings1-tp0002278025",
        "label": "Registering the current focus area (AF Area Registration) (still image)",
        "source": {
          "label": "Registering the current focus area (AF Area Registration) (still image)",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002278025.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings1-tp0002278026",
        "label": "Deleting a registered AF Area (Del. Regist. AF Area)",
        "source": {
          "label": "Deleting a registered AF Area (Del. Regist. AF Area)",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002278026.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings1-tp0002273515",
        "label": "AF Area Auto Clear",
        "source": {
          "label": "AF Area Auto Clear",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002273515.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings1-tp0002264671",
        "label": "Disp. cont. AF area",
        "source": {
          "label": "Disp. cont. AF area",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264671.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings1-tp0002280338",
        "label": "Circ. of Focus Point",
        "source": {
          "label": "Circ. of Focus Point",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002280338.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings1-tp0002241204",
        "label": "AF Micro Adj.",
        "source": {
          "label": "AF Micro Adj.",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241204.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings1-tp0002264676",
        "label": "Exposure Comp.",
        "source": {
          "label": "Exposure Comp.",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264676.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings1-tp0002264686",
        "label": "ISO Setting: ISO",
        "source": {
          "label": "ISO Setting: ISO",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264686.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings1-tp0002280317",
        "label": "ISO Setting: ISO Range Limit",
        "source": {
          "label": "ISO Setting: ISO Range Limit",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002280317.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings1-tp0002264687",
        "label": "ISO Setting: ISO AUTO Min. SS",
        "source": {
          "label": "ISO Setting: ISO AUTO Min. SS",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264687.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings1-tp0002241212",
        "label": "Metering Mode",
        "source": {
          "label": "Metering Mode",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241212.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings1-tp0002279219",
        "label": "Face Priority in Multi Metering",
        "source": {
          "label": "Face Priority in Multi Metering",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002279219.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings1-tp0002273498",
        "label": "Spot Metering Point",
        "source": {
          "label": "Spot Metering Point",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002273498.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings1-tp0002241218",
        "label": "Exposure step",
        "source": {
          "label": "Exposure step",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241218.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings1-tp0002241214",
        "label": "AEL w/ shutter (still image)",
        "source": {
          "label": "AEL w/ shutter (still image)",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241214.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings1-tp0002273499",
        "label": "Exposure Std. Adjust",
        "source": {
          "label": "Exposure Std. Adjust",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002273499.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings1-tp0002264655",
        "label": "Flash Mode",
        "source": {
          "label": "Flash Mode",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264655.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings1-tp0002264656",
        "label": "Flash Comp.",
        "source": {
          "label": "Flash Comp.",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264656.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings1-tp0002241215",
        "label": "Exp.comp.set",
        "source": {
          "label": "Exp.comp.set",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241215.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings1-tp0002273471",
        "label": "Wireless Flash",
        "source": {
          "label": "Wireless Flash",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002273471.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings1-tp0002241262",
        "label": "Red Eye Reduction",
        "source": {
          "label": "Red Eye Reduction",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241262.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings1-tp0002264690",
        "label": "White Balance",
        "source": {
          "label": "White Balance",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264690.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings1-tp0002273491",
        "label": "Priority Set in AWB",
        "source": {
          "label": "Priority Set in AWB",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002273491.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings1-tp0002264688",
        "label": "D-Range Optimizer (DRO)",
        "source": {
          "label": "D-Range Optimizer (DRO)",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264688.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings1-tp0002264689",
        "label": "Auto HDR",
        "source": {
          "label": "Auto HDR",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264689.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings1-tp0002264693",
        "label": "Creative Style",
        "source": {
          "label": "Creative Style",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264693.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings1-tp0002264692",
        "label": "Picture Effect",
        "source": {
          "label": "Picture Effect",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264692.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings1-tp0002273496",
        "label": "Picture Profile",
        "source": {
          "label": "Picture Profile",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002273496.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings1-tp0002241258",
        "label": "Soft Skin Effect (still image)",
        "source": {
          "label": "Soft Skin Effect (still image)",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241258.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings1-tp0002280318",
        "label": "Shutter AWB Lock (still image)",
        "source": {
          "label": "Shutter AWB Lock (still image)",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002280318.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings1-tp0002241206",
        "label": "Focus Magnifier",
        "source": {
          "label": "Focus Magnifier",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241206.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings1-tp0002241197",
        "label": "Focus Magnif. Time",
        "source": {
          "label": "Focus Magnif. Time",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241197.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings1-tp0002273478",
        "label": "Initial Focus Mag. (still image)",
        "source": {
          "label": "Initial Focus Mag. (still image)",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002273478.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings1-tp0002273545",
        "label": "AF in Focus Mag. (still image)",
        "source": {
          "label": "AF in Focus Mag. (still image)",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002273545.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings1-tp0002264668",
        "label": "MF Assist (still image)",
        "source": {
          "label": "MF Assist (still image)",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264668.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings1-tp0002279214",
        "label": "Peaking Setting",
        "source": {
          "label": "Peaking Setting",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002279214.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings1-tp0002241259",
        "label": "Face Registration (New Registration)",
        "source": {
          "label": "Face Registration (New Registration)",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241259.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings1-tp0002241260",
        "label": "Face Registration (Order Exchanging)",
        "source": {
          "label": "Face Registration (Order Exchanging)",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241260.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings1-tp0002264704",
        "label": "Face Registration (Delete)",
        "source": {
          "label": "Face Registration (Delete)",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264704.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings1-tp0002279222",
        "label": "Regist. Faces Priority",
        "source": {
          "label": "Regist. Faces Priority",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002279222.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings1-tp0002264703",
        "label": "Smile Shutter",
        "source": {
          "label": "Smile Shutter",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264703.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings1-tp0002241263",
        "label": "Auto Object Framing (still image)",
        "source": {
          "label": "Auto Object Framing (still image)",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241263.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings1-tp0002251226",
        "label": "Self-portrait/ -timer",
        "source": {
          "label": "Self-portrait/ -timer",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002251226.html",
          "checked": "2026-10-11"
        }
      }
    ]
  },
  {
    "name": "Camera Settings2",
    "entries": [
      {
        "id": "camera-settings2-tp0002264648",
        "label": "Movie: Exposure Mode",
        "source": {
          "label": "Movie: Exposure Mode",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264648.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings2-tp0002278029",
        "label": "S&Q Motion: Exposure Mode",
        "source": {
          "label": "S&Q Motion: Exposure Mode",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002278029.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings2-tp0002264695",
        "label": "File Format (movie)",
        "source": {
          "label": "File Format (movie)",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264695.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings2-tp0002264696",
        "label": "Record Setting (movie)",
        "source": {
          "label": "Record Setting (movie)",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264696.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings2-tp0002273493",
        "label": "S&Q Settings",
        "source": {
          "label": "S&Q Settings",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002273493.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings2-tp0002278969",
        "label": "Proxy Recording",
        "source": {
          "label": "Proxy Recording",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002278969.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings2-tp0002273555",
        "label": "AF drive speed (movie)",
        "source": {
          "label": "AF drive speed (movie)",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002273555.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings2-tp0002273505",
        "label": "AF Tracking Sens. (movie)",
        "source": {
          "label": "AF Tracking Sens. (movie)",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002273505.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings2-tp0002241243",
        "label": "Auto Slow Shutter (movie)",
        "source": {
          "label": "Auto Slow Shutter (movie)",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241243.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings2-tp0002280319",
        "label": "Initial Focus Mag. (movie)",
        "source": {
          "label": "Initial Focus Mag. (movie)",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002280319.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings2-tp0002241239",
        "label": "Audio Recording",
        "source": {
          "label": "Audio Recording",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241239.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings2-tp0002241240",
        "label": "Audio Rec Level",
        "source": {
          "label": "Audio Rec Level",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241240.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings2-tp0002264701",
        "label": "Audio Level Display",
        "source": {
          "label": "Audio Level Display",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264701.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings2-tp0002241242",
        "label": "Wind Noise Reduct.",
        "source": {
          "label": "Wind Noise Reduct.",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241242.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings2-tp0002264698",
        "label": "Marker Display (movie)",
        "source": {
          "label": "Marker Display (movie)",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264698.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings2-tp0002264699",
        "label": "Marker Settings (movie)",
        "source": {
          "label": "Marker Settings (movie)",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264699.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings2-tp0002278033",
        "label": "Movie w/ shutter",
        "source": {
          "label": "Movie w/ shutter",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002278033.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings2-tp0002273510",
        "label": "Silent Shooting (still image)",
        "source": {
          "label": "Silent Shooting (still image)",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002273510.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings2-tp0002241275",
        "label": "e-Front Curtain Shutter",
        "source": {
          "label": "e-Front Curtain Shutter",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241275.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings2-tp0002241274",
        "label": "Release w/o Lens",
        "source": {
          "label": "Release w/o Lens",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241274.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings2-tp0002264708",
        "label": "Release w/o Card",
        "source": {
          "label": "Release w/o Card",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264708.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings2-tp0002273522",
        "label": "SteadyShot",
        "source": {
          "label": "SteadyShot",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002273522.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings2-tp0002273526",
        "label": "Clear Image Zoom/Digital Zoom (Zoom)",
        "source": {
          "label": "Clear Image Zoom/Digital Zoom (Zoom)",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002273526.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings2-tp0002241178",
        "label": "Zoom Setting",
        "source": {
          "label": "Zoom Setting",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241178.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings2-tp0002273554",
        "label": "Zoom Ring Rotate",
        "source": {
          "label": "Zoom Ring Rotate",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002273554.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings2-tp0002264659",
        "label": "DISP Button (Monitor/Finder)",
        "source": {
          "label": "DISP Button (Monitor/Finder)",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264659.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings2-tp0002241273",
        "label": "FINDER/MONITOR",
        "source": {
          "label": "FINDER/MONITOR",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241273.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings2-tp0002273558",
        "label": "Finder Frame Rate (still image)",
        "source": {
          "label": "Finder Frame Rate (still image)",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002273558.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings2-tp0002279220",
        "label": "Zebra Setting",
        "source": {
          "label": "Zebra Setting",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002279220.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings2-tp0002264706",
        "label": "Grid Line",
        "source": {
          "label": "Grid Line",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264706.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings2-tp0002264677",
        "label": "Exposure Set. Guide",
        "source": {
          "label": "Exposure Set. Guide",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264677.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings2-tp0002241271",
        "label": "Live View Display",
        "source": {
          "label": "Live View Display",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241271.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings2-tp0002241270",
        "label": "Auto Review",
        "source": {
          "label": "Auto Review",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241270.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings2-tp0002279228",
        "label": "Assigning frequently used functions to buttons (Custom Key)",
        "source": {
          "label": "Assigning frequently used functions to buttons (Custom Key)",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002279228.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings2-tp0002241247",
        "label": "Using Fn (Function) button (Function menu)",
        "source": {
          "label": "Using Fn (Function) button (Function menu)",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241247.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings2-tp0002280322",
        "label": "Changing the function of the dial temporarily (My Dial Settings)",
        "source": {
          "label": "Changing the function of the dial temporarily (My Dial Settings)",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002280322.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings2-tp0002273556",
        "label": "Dial/Wheel Setup",
        "source": {
          "label": "Dial/Wheel Setup",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002273556.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings2-tp0002279229",
        "label": "Av/Tv Rotate",
        "source": {
          "label": "Av/Tv Rotate",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002279229.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings2-tp0002273553",
        "label": "Dial/Wheel Ev Comp",
        "source": {
          "label": "Dial/Wheel Ev Comp",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002273553.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings2-tp0002273549",
        "label": "Func. of Touch Operation: Touch Shutter",
        "source": {
          "label": "Func. of Touch Operation: Touch Shutter",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002273549.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings2-tp0002273548",
        "label": "Func. of Touch Operation: Touch Focus",
        "source": {
          "label": "Func. of Touch Operation: Touch Focus",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002273548.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings2-tp0002280339",
        "label": "Func. of Touch Operation: Touch Tracking",
        "source": {
          "label": "Func. of Touch Operation: Touch Tracking",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002280339.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings2-tp0002241244",
        "label": "MOVIE Button",
        "source": {
          "label": "MOVIE Button",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241244.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings2-tp0002241281",
        "label": "Dial / Wheel Lock",
        "source": {
          "label": "Dial / Wheel Lock",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241281.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "camera-settings2-tp0002273559",
        "label": "Audio signals",
        "source": {
          "label": "Audio signals",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002273559.html",
          "checked": "2026-10-11"
        }
      }
    ]
  },
  {
    "name": "Network",
    "entries": [
      {
        "id": "network-tp0002264727",
        "label": "Send to Smartphone Func.: Send to Smartphone",
        "source": {
          "label": "Send to Smartphone Func.: Send to Smartphone",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264727.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "network-tp0002278972",
        "label": "Send to Smartphone Func.: Sending Target (proxy movies)",
        "source": {
          "label": "Send to Smartphone Func.: Sending Target (proxy movies)",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002278972.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "network-tp0002264729",
        "label": "Send to Computer",
        "source": {
          "label": "Send to Computer",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264729.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "network-tp0002264730",
        "label": "View on TV",
        "source": {
          "label": "View on TV",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264730.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "network-tp0002273504",
        "label": "Ctrl w/ Smartphone",
        "source": {
          "label": "Ctrl w/ Smartphone",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002273504.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "network-tp0002241340",
        "label": "Airplane Mode",
        "source": {
          "label": "Airplane Mode",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241340.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "network-tp0002241341",
        "label": "Wi-Fi Settings: WPS Push",
        "source": {
          "label": "Wi-Fi Settings: WPS Push",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241341.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "network-tp0002241342",
        "label": "Wi-Fi Settings: Access Point Set.",
        "source": {
          "label": "Wi-Fi Settings: Access Point Set.",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241342.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "network-tp0002241344",
        "label": "Wi-Fi Settings: Disp MAC Address",
        "source": {
          "label": "Wi-Fi Settings: Disp MAC Address",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241344.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "network-tp0002241345",
        "label": "Wi-Fi Settings: SSID/PW Reset",
        "source": {
          "label": "Wi-Fi Settings: SSID/PW Reset",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241345.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "network-tp0002273523",
        "label": "Bluetooth Settings",
        "source": {
          "label": "Bluetooth Settings",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002273523.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "network-tp0002273573",
        "label": "Location Info. Link Set.",
        "source": {
          "label": "Location Info. Link Set.",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002273573.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "network-tp0002241343",
        "label": "Edit Device Name",
        "source": {
          "label": "Edit Device Name",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241343.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "network-tp0002273560",
        "label": "Reset Network Set.",
        "source": {
          "label": "Reset Network Set.",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002273560.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "network-tp0002392817",
        "label": "Bluetooth Rmt Ctrl",
        "source": {
          "label": "Bluetooth Rmt Ctrl",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002392817.html",
          "checked": "2026-10-11"
        }
      }
    ]
  },
  {
    "name": "Playback",
    "entries": [
      {
        "id": "playback-tp0002241298",
        "label": "Protecting images (Protect)",
        "source": {
          "label": "Protecting images (Protect)",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241298.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "playback-tp0002241297",
        "label": "Rotating an image (Rotate)",
        "source": {
          "label": "Rotating an image (Rotate)",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241297.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "playback-tp0002241290",
        "label": "Deleting multiple selected images (Delete)",
        "source": {
          "label": "Deleting multiple selected images (Delete)",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241290.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "playback-tp0002279225",
        "label": "Rating",
        "source": {
          "label": "Rating",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002279225.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "playback-tp0002279226",
        "label": "Rating Set(Custom Key)",
        "source": {
          "label": "Rating Set(Custom Key)",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002279226.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "playback-tp0002241293",
        "label": "Specifying images to be printed (Specify Printing)",
        "source": {
          "label": "Specifying images to be printed (Specify Printing)",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241293.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "playback-tp0002273473",
        "label": "Photo Capture",
        "source": {
          "label": "Photo Capture",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002273473.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "playback-tp0002264710",
        "label": "Enlarging an image being played back (Enlarge Image)",
        "source": {
          "label": "Enlarging an image being played back (Enlarge Image)",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264710.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "playback-tp0002273477",
        "label": "Enlarge Initial Mag.",
        "source": {
          "label": "Enlarge Initial Mag.",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002273477.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "playback-tp0002273480",
        "label": "Enlarge Initial Position",
        "source": {
          "label": "Enlarge Initial Position",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002273480.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "playback-tp0002280320",
        "label": "Cont. PB for Interval",
        "source": {
          "label": "Cont. PB for Interval",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002280320.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "playback-tp0002280321",
        "label": "PB Speed for Interval",
        "source": {
          "label": "PB Speed for Interval",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002280321.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "playback-tp0002241296",
        "label": "Playing back images using slideshow (Slide Show)",
        "source": {
          "label": "Playing back images using slideshow (Slide Show)",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241296.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "playback-tp0002241294",
        "label": "Switching between still images and movies (View Mode)",
        "source": {
          "label": "Switching between still images and movies (View Mode)",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241294.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "playback-tp0002241287",
        "label": "Playing back images on the image index screen (Image Index)",
        "source": {
          "label": "Playing back images on the image index screen (Image Index)",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241287.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "playback-tp0002278971",
        "label": "Display as Group",
        "source": {
          "label": "Display as Group",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002278971.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "playback-tp0002241295",
        "label": "Rotating recorded images automatically (Display Rotation)",
        "source": {
          "label": "Rotating recorded images automatically (Display Rotation)",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241295.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "playback-tp0002279224",
        "label": "Setting the method for jumping between images (Image Jump Setting)",
        "source": {
          "label": "Setting the method for jumping between images (Image Jump Setting)",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002279224.html",
          "checked": "2026-10-11"
        }
      }
    ]
  },
  {
    "name": "Setup",
    "entries": [
      {
        "id": "setup-tp0002264714",
        "label": "Monitor Brightness",
        "source": {
          "label": "Monitor Brightness",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264714.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "setup-tp0002264715",
        "label": "Viewfinder Bright.",
        "source": {
          "label": "Viewfinder Bright.",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264715.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "setup-tp0002273557",
        "label": "Finder Color Temp.",
        "source": {
          "label": "Finder Color Temp.",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002273557.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "setup-tp0002273532",
        "label": "Gamma Disp. Assist",
        "source": {
          "label": "Gamma Disp. Assist",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002273532.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "setup-tp0002241304",
        "label": "Volume Settings",
        "source": {
          "label": "Volume Settings",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241304.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "setup-tp0002241307",
        "label": "Tile Menu",
        "source": {
          "label": "Tile Menu",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241307.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "setup-tp0002264716",
        "label": "Mode Dial Guide",
        "source": {
          "label": "Mode Dial Guide",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264716.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "setup-tp0002241309",
        "label": "Delete confirm.",
        "source": {
          "label": "Delete confirm.",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241309.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "setup-tp0002241310",
        "label": "Display Quality",
        "source": {
          "label": "Display Quality",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241310.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "setup-tp0002264717",
        "label": "Power Save Start Time",
        "source": {
          "label": "Power Save Start Time",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264717.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "setup-tp0002278042",
        "label": "Auto Power OFF Temp.",
        "source": {
          "label": "Auto Power OFF Temp.",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002278042.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "setup-tp0002241763",
        "label": "NTSC/PAL Selector",
        "source": {
          "label": "NTSC/PAL Selector",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241763.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "setup-tp0002241312",
        "label": "Cleaning Mode",
        "source": {
          "label": "Cleaning Mode",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241312.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "setup-tp0002273547",
        "label": "Touch Operation",
        "source": {
          "label": "Touch Operation",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002273547.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "setup-tp0002279215",
        "label": "Touch Panel/Pad",
        "source": {
          "label": "Touch Panel/Pad",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002279215.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "setup-tp0002278967",
        "label": "Touch Pad Settings",
        "source": {
          "label": "Touch Pad Settings",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002278967.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "setup-tp0002241313",
        "label": "Demo Mode",
        "source": {
          "label": "Demo Mode",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241313.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "setup-tp0002273501",
        "label": "TC/UB Settings",
        "source": {
          "label": "TC/UB Settings",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002273501.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "setup-tp0002273472",
        "label": "IR Remote Ctrl",
        "source": {
          "label": "IR Remote Ctrl",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002273472.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "setup-tp0002241314",
        "label": "HDMI Settings: HDMI Resolution",
        "source": {
          "label": "HDMI Settings: HDMI Resolution",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241314.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "setup-tp0002264718",
        "label": "HDMI Settings: 24p/60p Output (movie) (Only for 1080 60i compatible models)",
        "source": {
          "label": "HDMI Settings: 24p/60p Output (movie) (Only for 1080 60i compatible models)",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264718.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "setup-tp0002241318",
        "label": "HDMI Settings: HDMI Info. Display",
        "source": {
          "label": "HDMI Settings: HDMI Info. Display",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241318.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "setup-tp0002273500",
        "label": "HDMI Settings: TC Output (movie)",
        "source": {
          "label": "HDMI Settings: TC Output (movie)",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002273500.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "setup-tp0002273475",
        "label": "HDMI Settings: REC Control (movie)",
        "source": {
          "label": "HDMI Settings: REC Control (movie)",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002273475.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "setup-tp0002241315",
        "label": "HDMI Settings: CTRL FOR HDMI",
        "source": {
          "label": "HDMI Settings: CTRL FOR HDMI",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241315.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "setup-tp0002273469",
        "label": "4K Output Select (movie)",
        "source": {
          "label": "4K Output Select (movie)",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002273469.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "setup-tp0002241316",
        "label": "USB Connection",
        "source": {
          "label": "USB Connection",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241316.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "setup-tp0002241317",
        "label": "USB LUN Setting",
        "source": {
          "label": "USB LUN Setting",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241317.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "setup-tp0002264719",
        "label": "USB Power Supply",
        "source": {
          "label": "USB Power Supply",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264719.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "setup-tp0002273494",
        "label": "PC Remote Settings: Still Img. Save Dest.",
        "source": {
          "label": "PC Remote Settings: Still Img. Save Dest.",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002273494.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "setup-tp0002273485",
        "label": "PC Remote Settings: RAW+J PC Save Img",
        "source": {
          "label": "PC Remote Settings: RAW+J PC Save Img",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002273485.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "setup-tp0002241762",
        "label": "Language",
        "source": {
          "label": "Language",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241762.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "setup-tp0002241319",
        "label": "Date/Time Setup",
        "source": {
          "label": "Date/Time Setup",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241319.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "setup-tp0002241320",
        "label": "Area Setting",
        "source": {
          "label": "Area Setting",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241320.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "setup-tp0002264720",
        "label": "Copyright Info",
        "source": {
          "label": "Copyright Info",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264720.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "setup-tp0002241321",
        "label": "Format",
        "source": {
          "label": "Format",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241321.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "setup-tp0002273502",
        "label": "File Number",
        "source": {
          "label": "File Number",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002273502.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "setup-tp0002273511",
        "label": "Set File Name",
        "source": {
          "label": "Set File Name",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002273511.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "setup-tp0002241323",
        "label": "Select REC Folder",
        "source": {
          "label": "Select REC Folder",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241323.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "setup-tp0002241324",
        "label": "New Folder",
        "source": {
          "label": "New Folder",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241324.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "setup-tp0002241325",
        "label": "Folder Name",
        "source": {
          "label": "Folder Name",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241325.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "setup-tp0002241326",
        "label": "Recover Image DB",
        "source": {
          "label": "Recover Image DB",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241326.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "setup-tp0002241327",
        "label": "Display Media Info.",
        "source": {
          "label": "Display Media Info.",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241327.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "setup-tp0002241328",
        "label": "Version",
        "source": {
          "label": "Version",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241328.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "setup-tp0002241330",
        "label": "Setting Reset",
        "source": {
          "label": "Setting Reset",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241330.html",
          "checked": "2026-10-11"
        }
      }
    ]
  },
  {
    "name": "My Menu",
    "entries": [
      {
        "id": "my-menu-tp0002278037",
        "label": "Add Item",
        "source": {
          "label": "Add Item",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002278037.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "my-menu-tp0002278038",
        "label": "Sort Item",
        "source": {
          "label": "Sort Item",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002278038.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "my-menu-tp0002278039",
        "label": "Delete Item",
        "source": {
          "label": "Delete Item",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002278039.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "my-menu-tp0002278040",
        "label": "Delete Page",
        "source": {
          "label": "Delete Page",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002278040.html",
          "checked": "2026-10-11"
        }
      },
      {
        "id": "my-menu-tp0002278041",
        "label": "Delete All",
        "source": {
          "label": "Delete All",
          "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002278041.html",
          "checked": "2026-10-11"
        }
      }
    ]
  }
];
window.FIELD_GUIDE.menuReference = {
  "TP0002279217": {
    "label": "File Format",
    "path": "MENU → Camera Settings1 → File Format",
    "meaning": "Chooses which kind of still-photo file is recorded.",
    "choices": [
      "JPEG: processed and ready to share.",
      "RAW: compressed camera data for later processing.",
      "RAW & JPEG: both files from one exposure."
    ],
    "start": "JPEG for immediate sharing; RAW & JPEG if you want an editing original and have storage.",
    "limits": "RAW options disable some processing, including Auto HDR and Picture Effect. This camera does not offer uncompressed or lossless-compressed RAW choices.",
    "affects": "Recorded still files and storage use; it does not repair focus.",
    "lesson": "file-format"
  },
  "TP0002279218": {
    "label": "JPEG Quality",
    "path": "MENU → Camera Settings1 → JPEG Quality",
    "meaning": "Chooses how heavily the JPEG is compressed.",
    "choices": [
      "Extra fine: least compression and larger files.",
      "Fine: a practical balance of quality and storage.",
      "Standard: more compression and smaller files."
    ],
    "start": "Fine for practice; Extra fine if conserving detail matters more than file size.",
    "limits": "Requires File Format JPEG or RAW & JPEG. Changing quality does not increase the image dimensions.",
    "affects": "JPEG rendering and file size; not RAW data.",
    "lesson": "jpeg-settings"
  },
  "TP0002279216": {
    "label": "JPEG Image Size",
    "path": "MENU → Camera Settings1 → JPEG Image Size",
    "meaning": "Chooses the pixel dimensions of the JPEG.",
    "choices": [
      "3:2 — L 6000 × 4000; M 4240 × 2832; S 3008 × 2000.",
      "16:9 — L 6000 × 3376; M 4240 × 2400; S 3008 × 1688.",
      "1:1 — L 4000 × 4000; M 2832 × 2832; S 2000 × 2000."
    ],
    "start": "L keeps more pixels for cropping or printing. Make smaller sharing copies later.",
    "limits": "Dimensions depend on Aspect Ratio. RAW size stays L when recording RAW or RAW & JPEG. Smaller JPEGs discard detail that later enlargement cannot restore.",
    "affects": "JPEG dimensions and storage; does not reduce RAW size.",
    "lesson": "jpeg-settings"
  },
  "TP0002264662": {
    "label": "Aspect Ratio",
    "path": "MENU → Camera Settings1 → Aspect Ratio",
    "meaning": "Chooses the width-to-height shape used for your composition.",
    "choices": [
      "3:2: general photographic rectangle.",
      "16:9: wider shape for screen compositions.",
      "1:1: square."
    ],
    "start": "3:2 for general photography; try 1:1 only when you want a square composition.",
    "limits": "The available JPEG dimensions change with this setting. This guide does not promise identical RAW crop handling in every editor.",
    "affects": "Still-photo composition and JPEG shape.",
    "lesson": "jpeg-settings"
  },
  "TP0002241268": {
    "label": "Color Space",
    "path": "MENU → Camera Settings1 → Color Space",
    "meaning": "Tells software how the recorded color numbers should be interpreted.",
    "choices": [
      "sRGB: standard choice for ordinary sharing and straightforward printing.",
      "AdobeRGB: wider color range for a workflow with compatible color management."
    ],
    "start": "sRGB for camera JPEGs you will share directly with family.",
    "limits": "AdobeRGB needs compatible apps/printers; otherwise colors can display or print incorrectly. AdobeRGB filenames begin with an underscore. It is not an automatic saturation enhancement.",
    "affects": "Still-image color representation; not added sharpness or extra captured light.",
    "lesson": "jpeg-settings"
  },
  "TP0002273481": {
    "label": "Focus Mode",
    "path": "MENU → Camera Settings1 → Focus Mode",
    "meaning": "Decides whether and when autofocus adjusts distance, or lets you focus manually.",
    "choices": [
      "Single-shot AF (AF-S): focuses and locks while the shutter stays halfway down.",
      "Automatic AF (AF-A): switches between still and continuous behavior based on subject motion.",
      "Continuous AF (AF-C): keeps focusing while the shutter is held halfway.",
      "DMF: autofocus first, then refine with the focus ring while holding halfway.",
      "Manual Focus (MF): turn the focus ring yourself."
    ],
    "start": "AF-S for a still cup; AF-C for a walking person.",
    "limits": "Some modes are restricted by shooting mode or lens. Movie recording allows Continuous AF or Manual Focus. In AF-C there is no focus-confirmation beep. MF is separate from M exposure mode.",
    "affects": "Focus distance, in both still and supported movie modes.",
    "lesson": "focus"
  },
  "TP0002264665": {
    "label": "Focus Area",
    "path": "MENU → Camera Settings1 → Focus Area",
    "meaning": "Chooses where autofocus looks and where tracking starts.",
    "choices": [
      "Wide: automatic selection across the frame.",
      "Zone: automatic selection within a region you place.",
      "Center: fixed central area.",
      "Flexible Spot: move a frame, in S/M/L sizes.",
      "Expand Flexible Spot: neighboring points help when the selected point cannot focus.",
      "Tracking: follows from the chosen start area while you hold the shutter halfway. Use left/right to select its area variant."
    ],
    "start": "Flexible Spot M for a stationary detail; Tracking: Flexible Spot M for a person in AF-C.",
    "limits": "Tracking requires Continuous AF, still-photo mode and Human subject detection. Auto/Scene modes and Smile Shutter lock the area to Wide. Non-optical zoom disables normal area selection.",
    "affects": "Autofocus selection; it does not control exposure metering or freeze motion.",
    "lesson": "focus-area"
  },
  "TP0002280329": {
    "label": "Face/Eye AF Set.",
    "path": "MENU → Camera Settings1 → Face/Eye AF Set.",
    "meaning": "Prioritizes a detected face or eye when autofocus runs.",
    "choices": [
      "Face/Eye Priority in AF: On enables face/eye priority; Off disables it.",
      "Subject Detection: Human detects human faces/eyes; Animal detects animal eyes.",
      "Right/Left Eye Select: Auto, Right Eye or Left Eye; right/left refers to the subject.",
      "Face Detect. Frame Disp.: On/Off for human face frames.",
      "Animal Eye Display: On/Off for animal eye frames."
    ],
    "start": "For one person: priority On, Human, eye Auto, face-frame display On.",
    "limits": "Sony’s current instructions require firmware 2.00+; your body version 2.00 was confirmed on 2026-10-11. Animal disables Tracking and right/left selection. Eye AF is unavailable in movies. Focus Magnifier, non-optical zoom and some scene/effect modes disable face/eye detection. Small/hidden eyes and poor light can defeat detection.",
    "affects": "Autofocus priority and display overlays; no guarantee of sharp recorded eyes.",
    "lesson": "eye-tracking"
  },
  "TP0002241208": {
    "label": "AF w/ shutter",
    "path": "MENU → Camera Settings1 → AF w/ shutter",
    "meaning": "Decides whether half-pressing the shutter activates autofocus.",
    "choices": [
      "On: half-press starts autofocus.",
      "Off: half-press does not start autofocus; a separate assigned AF control can be used."
    ],
    "start": "On while learning the half-press workflow.",
    "limits": "It does not make Manual Focus into autofocus. If Off, check your custom AF button before assuming the lens has failed.",
    "affects": "Autofocus activation for still photos.",
    "lesson": "first-day"
  },
  "TP0002241212": {
    "label": "Metering Mode",
    "path": "MENU → Camera Settings1 → Metering Mode",
    "meaning": "Chooses which brightness information the camera uses to estimate exposure.",
    "choices": [
      "Multi: evaluates multiple parts of the frame.",
      "Center: averages the frame with extra weight near the center.",
      "Spot: measures a small region; Standard or Large size.",
      "Entire Screen Avg.: averages the whole frame for steadier exposure as composition changes.",
      "Highlight: emphasizes bright regions to reduce overexposure."
    ],
    "start": "Multi with exposure compensation for ordinary portraits and scenes.",
    "limits": "Auto/Scene modes and non-optical zoom lock this to Multi. Spot location depends on Spot Metering Point. Highlight can leave a person dark when a much brighter region exists.",
    "affects": "Exposure calculation, not autofocus placement.",
    "lesson": "exposure-controls"
  },
  "TP0002264676": {
    "label": "Exposure Comp.",
    "path": "MENU → Camera Settings1 → Exposure Comp.",
    "meaning": "Requests a brighter or darker result from automatic exposure.",
    "choices": [
      "0 EV: no requested offset.",
      "Positive values: brighter target.",
      "Negative values: darker target.",
      "Still range: −5 to +5 EV. Movie range: −2 to +2 EV. EV expresses exposure differences; one EV is one stop."
    ],
    "start": "Start at 0 and try a small +0.3 or −0.3 change after reviewing your subject.",
    "limits": "Unavailable in Intelligent Auto, Superior Auto and Scene Selection. In M it requires ISO AUTO. The screen previews only the −3 to +3 EV brightness range for stills; exposure limits and flash may prevent the intended result.",
    "affects": "Automatic exposure target; cannot restore clipped detail in an existing photo.",
    "lesson": "exposure-controls"
  },
  "TP0002264668": {
    "label": "MF Assist",
    "path": "MENU → Camera Settings1 → MF Assist",
    "meaning": "Automatically enlarges the preview when you turn the focus ring.",
    "choices": [
      "On: automatic magnification while focusing manually.",
      "Off: no automatic magnification. Use Focus Magnifier explicitly when needed."
    ],
    "start": "On when learning MF on a stationary detail.",
    "limits": "Works in MF or DMF still-photo shooting. Not available for movies or with a mount adaptor; use Focus Magnifier instead. Focus Magnif. Time controls how long enlargement remains.",
    "affects": "Shooting display only; no extra recorded pixels.",
    "lesson": "manual-focus"
  },
  "TP0002273556": {
    "label": "Dial/Wheel Setup",
    "path": "MENU → Camera Settings2 → Dial/Wheel Setup",
    "meaning": "Swaps aperture and shutter controls in M.",
    "choices": [
      "SS F/no.: rear wheel sets shutter; top dial sets aperture.",
      "F/no. SS: rear wheel sets aperture; top dial sets shutter."
    ],
    "start": "SS F/no. matches the M walkthrough in this guide.",
    "limits": "Enabled in M exposure mode. Check this if the control you turn changes the unexpected value.",
    "affects": "Control assignment; changing this setting alone does not change image quality.",
    "lesson": "exposure-controls"
  },
  "TP0002241321": {
    "label": "Format",
    "path": "MENU → Setup → Format",
    "meaning": "Prepares a memory card for use by erasing its contents.",
    "choices": [
      "This is an action, not an image-quality choice. Proceed only after copying and checking valuable files; otherwise leave the screen without formatting."
    ],
    "start": "Use when first preparing a card for this camera after verifying your backup, not before every shoot.",
    "limits": "Permanently erases ALL card data, including protected images and registered M1–M4 settings. Do not remove the card while the access lamp is on. Sony says formatting is unavailable below 1% battery; use a sufficiently charged battery.",
    "affects": "Destructive card operation affecting originals, not just display or JPEG settings.",
    "lesson": "first-day"
  },
  "TP0002241328": {
    "label": "Version",
    "path": "MENU → Setup → Version",
    "meaning": "Displays the camera software version and supported lens/adaptor version.",
    "choices": [
      "Read-only version display; this screen does not install an update."
    ],
    "start": "Record the values before following firmware-specific instructions. User-confirmed body: ILCE-6400 2.00; lens: 03 (2026-10-11).",
    "limits": "A lens or adaptor version appears only when supported. A version number alone does not identify the exact lens model. Firmware installation is outside this lesson.",
    "affects": "Information display only.",
    "lesson": "first-day"
  }
};

// Camera-controls increment: Sony sources checked 2026-10-11.
window.FIELD_GUIDE.lessons.push(...[
  {
    "id": "auto-program",
    "title": "Auto and P: choose how much to control",
    "time": 9,
    "definition": "Auto chooses most settings for you. P (Program Auto) chooses shutter speed and aperture while leaving other shooting choices available.",
    "intro": "Get a quick photograph, then learn to spot when the camera’s choices need your help.",
    "prerequisites": [
      "first-day",
      "exposure-controls"
    ],
    "sections": [
      [
        "Two Auto modes, one dial position",
        "Turn the mode dial to Auto, then MENU → Camera Settings1 → Auto Mode. Intelligent Auto recognizes a scene and chooses settings. Superior Auto can take multiple frames and combine them for some dark or backlit scenes. Scene recognition can be wrong; neither mode guarantees a sharp subject or a pleasing background. Most settings are automatic, so a greyed-out control in Auto may be expected."
      ],
      [
        "Try Intelligent Auto first",
        "Use a stationary subject in good light. Choose Intelligent Auto, half-press to focus, then press fully. Review the subject at enlarged size. Look at the recorded shutter speed, aperture and ISO: those choices help explain motion blur, background detail and noise. Auto is useful when speed of operation matters more than controlling every setting."
      ],
      [
        "What Superior Auto adds",
        "Superior Auto may make a composite: one result assembled from several captures. Keep the camera steady until it finishes; capture and processing can take longer. Movement between captures can make this a poor choice for an unpredictable subject. With File Format RAW or RAW & JPEG, the camera cannot make the composite. Try JPEG for this experiment. MENU → Camera Settings1 → Superior Auto Img. Extract. → Auto normally saves the selected result; Off saves all continuously captured images, with documented exceptions such as Hand-held Twilight saving one combined image. “Off” does not turn Superior Auto off."
      ],
      [
        "P gives you room to learn",
        "Turn the dial to P. The camera chooses shutter speed and aperture, but you can choose ISO, focus, drive mode and exposure compensation. Start with ISO AUTO, Single Shooting, AF-S for a still subject and a focus area you can place reliably. In P, choosing numeric ISO fixes that sensitivity while the camera still chooses shutter/aperture. P does not mean professional, and M exposure does not mean manual focus."
      ],
      [
        "Program shift: change the pair",
        "Without flash, turn the top control dial in P. P becomes P*: the camera offers different shutter/aperture pairs for the same exposure target. For example, a faster shutter paired with a wider aperture trades background depth for less motion blur; this is an illustration, not measured camera data. Brightness and lens limits can prevent a shift. As light changes, the values can change while preserving the shift. Change out of P or turn the camera off to cancel it. Use A when aperture is your priority, or S when shutter speed is your priority."
      ],
      [
        "Auto ISO’s shutter threshold is not a guarantee",
        "In P or A with ISO AUTO, MENU → Camera Settings1 → ISO Setting → ISO AUTO Min. SS chooses when the camera starts raising ISO instead of lengthening exposure. Try 1/250 for a gently moving person in good light, then inspect the result and choose faster if needed. If ISO reaches its allowed maximum, the shutter can still become slower than this threshold. Check the actual shutter speed before shooting. ISO AUTO limits are set under ISO → ISO AUTO → right side of the wheel; ISO Range Limit instead limits manually selected ISO values."
      ],
      [
        "Ask for a different brightness",
        "Exposure compensation changes the automatic exposure target; program shift changes the shutter/aperture combination. In P, start at 0 EV and try −0.3 EV if a bright subject loses detail, or +0.3 EV if the subject looks too dark. Review and adjust. Compensation is unavailable in Intelligent Auto and Superior Auto. A slower shutter can still blur movement even if the brightness looks right."
      ],
      [
        "Choose by the photograph you need",
        "Use Intelligent Auto for a quick start; try Superior Auto for a still dark/backlit JPEG scene; choose P to control focus, drive and brightness without choosing aperture/shutter directly. Move to A for background control or S for action. The useful comparison with your phone is the resulting subject detail and timing, not the letter on the camera dial."
      ]
    ],
    "exercise": "Photograph the same window-lit object in Intelligent Auto and P. In P, make one shifted pair and one small exposure-compensation change. Compare four images at the same viewing size; record which change affected brightness and which affected depth or motion. Cancel P* and return compensation to 0 afterward.",
    "question": "In P with ISO AUTO, will ISO AUTO Min. SS always prevent a slower shutter?",
    "options": [
      "Yes, it is a hard shutter-speed lock",
      "No; the camera can go slower once the Auto ISO maximum is reached",
      "It controls the autofocus motor"
    ],
    "answer": 1,
    "explanation": "It is the threshold for raising ISO, not an absolute floor. Watch the displayed shutter speed and use S or M when direct shutter control is needed.",
    "sources": [
      {
        "label": "Auto Mode",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002273567.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Intelligent Auto",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241165.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Superior Auto",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002273552.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Superior Auto Img. Extract.",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241276.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Program Auto and Program Shift",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264642.html",
        "checked": "2026-10-11"
      },
      {
        "label": "ISO AUTO Min. SS",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264687.html",
        "checked": "2026-10-11"
      },
      {
        "label": "ISO Range Limit",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002280317.html",
        "checked": "2026-10-11"
      },
      {
        "label": "ISO and Auto ISO limits",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264686.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Exposure compensation",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264676.html",
        "checked": "2026-10-11"
      }
    ],
    "category": "CAMERA CONTROLS",
    "symbol": "◎",
    "stage": "controls"
  },
  {
    "id": "drive-bracketing",
    "title": "One shot, a burst, or a bracket?",
    "time": 12,
    "definition": "Drive mode controls when and how many still photographs you record. Bracketing deliberately varies a setting across a group of images.",
    "intro": "Choose timing for a moving subject, reduce shutter-press shake, and compare exposure choices without starting an editing workflow.",
    "prerequisites": [
      "auto-program",
      "focus-area"
    ],
    "sections": [
      [
        "Find Drive Mode",
        "Use MENU → Camera Settings1 → Drive Mode. Select a family, then use the wheel’s left/right sides for its variants. A burst is several captures while holding the shutter; a self-timer delays capture; a bracket varies exposure or rendering. These choices do not replace focus mode or shutter speed. Return to Single Shooting after an exercise to avoid unexpected sequences."
      ],
      [
        "Single shots and short bursts",
        "Single Shooting is the everyday one-picture choice. Cont. Shooting keeps taking pictures while you hold the shutter. Hi+ prioritizes maximum speed, but its display is not a real-time view of the subject. Hi, Mid and Lo offer a real-time view and can make following movement easier. Start with Mid and brief bursts of a walking subject. More frames use more card space and take longer to review; a burst cannot fix a shutter speed that is too slow."
      ],
      [
        "Keep focus and brightness following",
        "For a subject moving toward you, use Continuous AF (AF-C), a suitable focus area and MENU → Camera Settings1 → AEL w/ shutter → Auto or Off. AEL means automatic exposure lock; On can hold brightness at the half-press. Sony documents that at apertures beyond f/11, Hi+, Hi and Mid lock focus to the first frame. For this practice, try S, 1/500 and ISO AUTO in good light; confirm the aperture does not go beyond f/11, and review sharpness. AF-C release priority also affects whether the camera waits for focus. The <a href=\"#lesson/autofocus-controls\">autofocus troubleshooting lesson</a> explains it."
      ],
      [
        "Timers: let the camera settle",
        "Self-timer offers 2, 5 or 10 seconds before one picture. Use 2 seconds with stable support to reduce movement from pressing the shutter. Use 5 or 10 seconds to get into a photograph, with focus planned at the subject’s position. Self-timer(Cont) takes 3 or 5 frames after a 2-, 5- or 10-second delay—useful for choosing a group photo with fewer blinks. Press the shutter again or Drive Mode to stop a countdown; select Single Shooting to leave timer mode. A timer does not make a moving subject still."
      ],
      [
        "Exposure brackets: several brightness choices",
        "Cont. Bracket records an exposure sequence while you hold the shutter until it finishes. Single Bracket needs a press for each image and allows refocusing/reframing between shots. Select the spacing in EV (one EV is one stop) and frame count shown on the camera. Sony’s documented 0.3EV 3 Image example gives a base exposure and one 0.3 EV darker and lighter frame. Start there with a still scene; use wider spacing if the visible difference is too small. Exposure compensation offsets the whole sequence. These are separate files to inspect and choose from, not an automatically merged HDR photograph."
      ],
      [
        "Bracket controls and dependencies",
        "First select a bracket drive mode, then MENU → Camera Settings1 → Bracket Settings. Selftimer during Bracket offers OFF, 2 Sec, 5 Sec or 10 Sec; use this instead of replacing the bracket with the ordinary self-timer. Bracket order is 0→−→+ (base first) or −→0→+ (dark to bright) for exposure and white-balance brackets. Bracketing is unavailable in Intelligent Auto, Superior Auto, Scene Selection and Sweep Panorama. In M with Auto ISO it varies ISO; in M with a numeric ISO it varies shutter speed. With flash, Cont. Bracket also requires a separate press for each frame. Auto review shows the last frame, so inspect the full sequence in playback."
      ],
      [
        "Other brackets are different experiments",
        "WB bracket varies white balance—the color correction that makes a neutral object look neutral. It records three color variants: Lo makes smaller changes, Hi larger. DRO Bracket varies D-Range Optimizer, the camera’s adjustment of light/dark tones: Lo uses levels 1/2/3, Hi uses 1/3/5. Use JPEG for a simple comparison of these rendered looks. DRO is not an exposure bracket or a way to repair missed focus. Select the result you prefer; detailed processing and merging stay in a later phase."
      ],
      [
        "When a drive choice is unavailable",
        "Cont. Shooting is restricted by Sweep Panorama, Scene Selection other than Sports Action, Auto HDR, Multi Frame NR, Smile Shutter and certain Picture Effects. Flash slows bursts. Self-timer is unavailable with Sweep Panorama, Sports Action and Smile Shutter. Check the mode and processing options before assuming a fault. Silent Shooting can introduce stripes under flickering light or distort movement; start with Silent Shooting Off for this exercise, and do not assume turning off the sound improves action photos."
      ]
    ],
    "exercise": "In good daylight, compare five deliberate single shots with two brief AF-C bursts of someone walking, with their agreement. Count sharp, well-timed keepers as a fraction of all captures. Then support the camera safely for a still scene and make a three-frame exposure bracket. Inspect every frame, choose one JPEG and note why. Return Drive Mode to Single Shooting.",
    "question": "What is the normal difference between Cont. Bracket and Single Bracket without flash?",
    "options": [
      "Continuous holds the shutter through the sequence; Single needs a press for each frame",
      "Single Bracket automatically merges the photos",
      "Continuous bracketing automatically tracks focus in every mode"
    ],
    "answer": 0,
    "explanation": "Drive controls sequence timing. Focus mode and other dependencies still matter, and an exposure bracket is a set of separate photographs.",
    "sources": [
      {
        "label": "Drive Mode",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264679.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Cont. Shooting",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264680.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Self-timer",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241223.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Self-timer(Cont)",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241224.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Cont. Bracket",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241225.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Single Bracket",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264681.html",
        "checked": "2026-10-11"
      },
      {
        "label": "WB bracket",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264682.html",
        "checked": "2026-10-11"
      },
      {
        "label": "DRO Bracket",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241227.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Bracket Settings",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264684.html",
        "checked": "2026-10-11"
      },
      {
        "label": "AEL w/ shutter",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241214.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Silent Shooting",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002273510.html",
        "checked": "2026-10-11"
      },
      {
        "label": "D-Range Optimizer",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264688.html",
        "checked": "2026-10-11"
      }
    ],
    "category": "CAMERA CONTROLS",
    "symbol": "◎",
    "stage": "controls"
  },
  {
    "id": "custom-controls",
    "title": "Make the buttons work for you",
    "time": 10,
    "definition": "A custom key runs an assigned function. Fn holds quick shooting settings. My Menu holds shortcuts to full menu items.",
    "intro": "Build a small, reversible shortcut setup so you can react before a good moment passes.",
    "prerequisites": [
      "first-day",
      "eye-tracking",
      "drive-bracketing"
    ],
    "sections": [
      [
        "Know which control you are touching",
        "The top mode dial chooses Auto/P/A/S/M and other shooting modes. The top control dial changes the current exposure value or P shift. The rear wheel rotates and accepts directional presses; its center confirms choices. C1 is a custom button on top. C2 is the rear custom button used for Delete in playback. Fn opens shooting shortcuts and serves Send to Smartphone in playback. Button meanings depend on context; this lesson changes shooting controls only."
      ],
      [
        "The AF/MF/AEL lever matters",
        "The small lever selects which assignment the button inside it uses. In the ordinary arrangement, the AF/MF position temporarily swaps autofocus/manual focus while held, while AEL locks automatic exposure. Custom Key can change either assignment, so check the lever and your current mapping if the button behaves unexpectedly. A hold function lasts while you press; a toggle stays active until you press again. A focus hold freezes focus distance; exposure lock freezes exposure. They solve different problems."
      ],
      [
        "Record first, then change one assignment",
        "Write down the current button assignment in your notebook before changing it. MENU → Camera Settings2 → Custom Key has separate still-photo, movie and playback entries identified by icons. Choose the still-photo entry for these steps. Available functions depend on the chosen key; do not assume every button can run every function or that still assignments always work in movies. Not set can disable an easily bumped shortcut. This is a personal choice, not a recommended factory reset."
      ],
      [
        "Try Sony’s AEL → Eye AF example",
        "In the still Custom Key entry, use left/right to reach Rear1, choose AEL Button, press center, find Eye AF with the wheel directions, then press center. Set the lever to AEL. For a person, use Face/Eye AF Set. → Subject Detection → Human. Hold the reassigned button while shooting; if the eye is detected, the camera focuses on it. This replaces exposure lock at that lever position, so restore the recorded assignment if you prefer AEL. Eye detection can fail; inspect the recorded eye rather than trusting only the frame."
      ],
      [
        "AF On is an optional separate focus trigger",
        "The a6400 lets you assign AF On to a suitable custom key. It activates autofocus according to Focus Mode without needing a shutter half-press. First test the assigned key with AF w/ shutter still On. Only if you want separate focus and capture controls, set MENU → Camera Settings1 → AF w/ shutter → Off. Then use the assigned key to focus and the shutter to capture. Return AF w/ shutter to On to restore the beginner half-press workflow. Pre-AF may still adjust focus before either press; the next lesson covers that dependency."
      ],
      [
        "Arrange Fn without losing your bearings",
        "In shooting mode, use DISP to choose a view other than For viewfinder, then press Fn for the 12-function menu. Select with wheel directions; turn the wheel to change a setting and press center. Press center on an item to open its detailed screen. To replace a slot: MENU → Camera Settings2 → Function Menu Set. → choose the slot → choose its new function. Sony’s example replaces Drive Mode with Grid Line. For practice, record the old slot and try Grid Line in a slot you seldom use; retain quick access to Drive Mode if you use bursts. Full MENU paths still work if your Fn layout differs."
      ],
      [
        "Build a small My Menu",
        "MENU → My Menu → Add Item: select an item with the wheel directions, then choose its destination. Try Focus Area Limit, AF w/ shutter and Bracket Settings. These are suggestions for the present exercises; leave destructive Format out of your quick practice list. My Menu can hold up to 30 items, excluding Playback menu items and View on TV. Sort Item moves an entry to a chosen destination. It is a shortcut list, not a saved camera-settings preset."
      ],
      [
        "Remove shortcuts, not photographs",
        "Within My Menu, Delete Item removes the selected shortcut; Delete Page removes a page’s shortcuts; Delete All → OK clears the shortcut list. Those operations do not delete photographs or remove the original menu settings. Read the full path: Playback Delete and Setup Format have different consequences. Restore any experimental button/Fn mapping manually from your notes. To diagnose accidental changes, check mode dial, lever position, drive mode, exposure compensation and focus mode before resetting the camera."
      ]
    ],
    "exercise": "Write down one existing shooting-button assignment and one Fn slot. Change and test one shortcut at a time. Add three useful items to My Menu, sort them, then delete one shortcut and verify the original menu item is still available. Photograph the same still subject before and after; the goal is quicker access, not a new image-processing effect. Restore any mapping you did not prefer.",
    "question": "What does MENU → My Menu → Delete All remove?",
    "options": [
      "All photographs on the card",
      "All shortcuts in My Menu",
      "All autofocus settings from the camera"
    ],
    "answer": 1,
    "explanation": "It clears My Menu’s shortcut list. It is different from deleting photos in Playback or formatting the card in Setup.",
    "sources": [
      {
        "label": "Identifying parts",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002280308.html",
        "checked": "2026-10-11"
      },
      {
        "label": "AF/MF/AEL switch lever",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002273574.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Custom Key",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002279228.html",
        "checked": "2026-10-11"
      },
      {
        "label": "AF/MF control",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241202.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Focus Hold",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002273149.html",
        "checked": "2026-10-11"
      },
      {
        "label": "AF On",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241209.html",
        "checked": "2026-10-11"
      },
      {
        "label": "AF w/ shutter",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241208.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Fn and Function Menu Set.",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241247.html",
        "checked": "2026-10-11"
      },
      {
        "label": "My Menu: Add Item",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002278037.html",
        "checked": "2026-10-11"
      },
      {
        "label": "My Menu: Sort Item",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002278038.html",
        "checked": "2026-10-11"
      },
      {
        "label": "My Menu: Delete Item",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002278039.html",
        "checked": "2026-10-11"
      },
      {
        "label": "My Menu: Delete Page",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002278040.html",
        "checked": "2026-10-11"
      },
      {
        "label": "My Menu: Delete All",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002278041.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Face/Eye AF Set.",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002280329.html",
        "checked": "2026-10-11"
      }
    ],
    "category": "CAMERA CONTROLS",
    "symbol": "◎",
    "stage": "controls"
  },
  {
    "id": "autofocus-controls",
    "title": "Why autofocus behaves differently",
    "time": 12,
    "definition": "Autofocus depends on a chain: its trigger, focus mode, focus area, subject detection and release rules must work together.",
    "intro": "Diagnose a missing focus area, unexpected refocusing, or a shutter that waits—one setting at a time.",
    "prerequisites": [
      "custom-controls",
      "manual-focus"
    ],
    "sections": [
      [
        "Begin with a known still-photo setup",
        "Choose P/A/S/M, Single Shooting, AF-S, Flexible Spot M, AF w/ shutter On and Pre-AF Off. Use a well-lit stationary object with a clear edge, far enough away for the lens to focus. These are diagnostic starting points. If the camera focuses on the intended detail but the photo is smeared, investigate camera shake or subject motion with the <a href=\"#lesson/shutter\">shutter-speed lesson</a>. Autofocus cannot freeze movement."
      ],
      [
        "No focus on half-press—or focus without a press",
        "If half-press does nothing, check Focus Mode is not MF and AF w/ shutter is On. A custom AF/MF toggle may also have changed the mode. If the lens refocuses before you press anything, check MENU → Camera Settings1 → Pre-AF. On adjusts focus in advance with an E-mount lens; Off makes the beginner workflow easier to observe. AF On is an assigned trigger, not a separate focus mode. Eye-Start AF is different from Eye AF: it starts AF when using the finder with specific LA-EA2/LA-EA4 A-mount adapter setups. It is not the eye-detection setting for your confirmed native E-mount Sigma."
      ],
      [
        "The shutter waits—or releases before focus",
        "Priority Set in AF-S covers AF-S, DMF and stationary AF-A; Priority Set in AF-C applies to continuous AF with movement. AF waits for focus; Release permits capture even without confirmed focus; Balanced Emphasis balances the two. Start with AF for the still subject and Balanced Emphasis for the walking-subject experiment. If the shutter waits, seek a clearer edge, more light or more distance. Release priority may capture timing at the cost of out-of-focus images; it cannot repair focus."
      ],
      [
        "A focus area disappeared, or jumps when you rotate",
        "Focus Area Limit controls which area types appear in MENU and Fn; re-check a missing type and select OK. Removing a check can also change registered/orientation-dependent areas. Switch V/H AF Area can store different point positions, or positions and area types, for landscape and either portrait orientation. Set Off while learning one setup. Orientation switching does not happen during AF, bursts, half-press, timer countdown or magnification, among other restrictions. If a point wraps to the opposite edge, Circ. of Focus Point is set to Circulate."
      ],
      [
        "Move or recall a focus point deliberately",
        "Assign Focus Standard to a supported custom key such as the center button: in Zone/Flexible Spot/Expand Flexible Spot it lets the wheel directions move the frame; in Wide/Center it focuses at the center. AF Area Registration stores a reusable frame: turn it On, position the area, then hold Fn to register. Assign Regist. AF Area hold to recall while holding, or Regist AF Area tggle to toggle. Reg. AF Area+AF On also starts AF. Del. Regist. AF Area removes only the saved frame position. Registration locks Dial / Wheel Lock to Unlock; leave registration Off until you need predictable point recall."
      ],
      [
        "Touch panel versus touch pad",
        "Set MENU → Setup → Touch Operation → On. Touch Panel/Pad chooses monitor touch (panel), finder shooting touch (pad), or both. In Camera Settings2 → Func. of Touch Operation, Touch Focus positions focus; Touch Tracking follows a touched subject. In stills, half-press to focus, then fully press to capture. For Flexible Spot/Expand Flexible Spot, touch moves the frame. With other areas, Touch Focus sets a touched position. Cancel with the center button. Touch Pad Settings offers absolute positioning (touch maps to a location) or relative positioning (drag moves the point), plus active area and vertical-operation controls to reduce nose touches. Try Touch Panel Only first if finder use causes accidental moves."
      ],
      [
        "Tracking and eye detection have different restrictions",
        "Focus Area → Tracking requires AF-C and still shooting. Touch Tracking has its own rules and can also be used in supported movie modes. Both are disabled with Subject Detection Animal; use animal eye detection without tracking. Touch Tracking is also unavailable with MF, non-optical zoom, LA-EA2/LA-EA4, Sweep Panorama, Hand-held Twilight/Anti Motion Blur and 120p/100p movie recording. For a person, start with Human and Face/Eye Priority in AF On. Firmware 2.00 supports the face/eye instructions used here; your body version is confirmed, but this walkthrough has not been tested on your camera."
      ],
      [
        "Magnification changes the AF tools available",
        "Focus Magnifier enlarges the preview. AF in Focus Mag. On lets half-press autofocus in the enlarged area; Off makes half-press exit magnification. Magnified AF does not work with AF-C, mount adapters, movies, Sweep Panorama or certain AF-A combinations. While enlarged, eye AF, face/eye priority and Pre-AF are unavailable. Exposure and white balance cannot be adjusted there. Use AF-S on a supported still setup, or MF and the lens ring. Focus Magnif. Time offers 2 Sec, 5 Sec or No Limit; Initial Focus Mag. starts at x1.0 or x5.9 for stills. Peaking marks contrast edges and is only an aid—confirm actual detail at magnification."
      ],
      [
        "Lights and frames are clues",
        "AF Illuminator Auto can assist a dark stationary subject; it does not operate during AF-C, moving AF-A, movies, magnification, certain scenes or with a mount adapter. AF Area Auto Clear On hides the area after focus; Off leaves it visible. Disp. cont. AF area On shows in-focus areas for AF-C with Wide/Zone. A missing overlay is not proof that autofocus stopped. AF Micro Adj. is for specified A-mount lenses on LA-EA2/LA-EA4; do not use it to tune the native Sigma setup."
      ],
      [
        "Still and movie controls are not interchangeable",
        "AF drive speed (Fast/Normal/Slow) and AF Tracking Sens. (Responsive/Standard) in Camera Settings2 affect movies, not still-photo burst tracking. Movies support AF-C or MF, and this camera’s eye AF is unavailable during movie recording. Movie Initial Focus Mag. is x1.0/x4.0, separate from the still setting. These limits help explain greyed-out options; a full video course remains later. Use the <a href=\"#lesson/eye-tracking\">eye and tracking lesson</a> for the still-photo exercise, then the reference for a particular control."
      ]
    ],
    "exercise": "With a still object, observe Pre-AF On then Off, restore Off, and compare AF-S priority AF versus Release without deliberately relying on an unfocused shot. Hide and restore one Focus Area Limit choice. Test Touch Panel Only, then deliberately try pad movement through the finder if useful. Record each result and any label mismatch. Finish with your usual half-press AF setup and five sharp, intentional single photographs.",
    "question": "Your preferred focus-area type is missing from both MENU and Fn. What should you check?",
    "options": [
      "AF Micro Adj. for the native Sigma lens",
      "Focus Area Limit, then the restrictions of your shooting/focus mode",
      "JPEG Quality"
    ],
    "answer": 1,
    "explanation": "Focus Area Limit hides unchecked types, and shooting/focus modes impose additional restrictions. AF Micro Adj. is for particular A-mount adapter combinations.",
    "sources": [
      {
        "label": "AF w/ shutter",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241208.html",
        "checked": "2026-10-11"
      },
      {
        "label": "AF On",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241209.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Pre-AF",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264669.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Eye-Start AF",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241272.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Priority Set in AF-S",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264674.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Priority Set in AF-C",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264675.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Focus Area Limit",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002280328.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Switch V/H AF Area",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002278024.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Circ. of Focus Point",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002280338.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Focus Standard",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002273529.html",
        "checked": "2026-10-11"
      },
      {
        "label": "AF Area Registration",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002278025.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Del. Regist. AF Area",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002278026.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Touch Operation",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002273547.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Touch Panel/Pad",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002279215.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Touch Pad Settings",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002278967.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Touch Focus",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002273548.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Touch Tracking",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002280339.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Focus Area",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264665.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Face/Eye AF Set.",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002280329.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Focus Magnifier",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241206.html",
        "checked": "2026-10-11"
      },
      {
        "label": "AF in Focus Mag.",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002273545.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Focus Magnif. Time",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241197.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Initial Focus Mag. (still)",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002273478.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Peaking Setting",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002279214.html",
        "checked": "2026-10-11"
      },
      {
        "label": "AF Illuminator",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264670.html",
        "checked": "2026-10-11"
      },
      {
        "label": "AF Area Auto Clear",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002273515.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Disp. cont. AF area",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264671.html",
        "checked": "2026-10-11"
      },
      {
        "label": "AF Micro Adj.",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241204.html",
        "checked": "2026-10-11"
      },
      {
        "label": "AF drive speed",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002273555.html",
        "checked": "2026-10-11"
      },
      {
        "label": "AF Tracking Sens.",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002273505.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Initial Focus Mag. (movie)",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002280319.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Focus Mode",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002273481.html",
        "checked": "2026-10-11"
      }
    ],
    "category": "CAMERA CONTROLS",
    "symbol": "◎",
    "stage": "controls"
  }
]);
Object.assign(window.FIELD_GUIDE.menuReference, {
  "TP0002273567": {
    "label": "Auto Mode",
    "path": "MENU → Camera Settings1 → Auto Mode",
    "meaning": "Selects which automatic scene-recognition mode the Auto dial position uses.",
    "choices": [
      "Intelligent Auto: recognizes a scene and sets most shooting controls automatically.",
      "Superior Auto: can capture and combine several frames for a dark/backlit scene; recording can take longer."
    ],
    "start": "Use Intelligent Auto for a quick well-lit snapshot; try Superior Auto with a still JPEG scene.",
    "limits": "Set the mode dial to Auto first. Most controls are automatic. Non-optical zoom prevents scene recognition. RAW/RAW & JPEG prevent Superior Auto composite creation; recognition may be wrong.",
    "affects": "Still-photo capture and automatic processing; not a guarantee of image quality.",
    "lesson": "auto-program",
    "sources": [
      {
        "label": "Intelligent Auto",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241165.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Superior Auto",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002273552.html",
        "checked": "2026-10-11"
      }
    ]
  },
  "TP0002241276": {
    "label": "Superior Auto Img. Extract.",
    "path": "MENU → Camera Settings1 → Superior Auto Img. Extract.",
    "meaning": "Decides whether Superior Auto keeps its selected result or the continuously captured images.",
    "choices": [
      "Auto: save one appropriate image selected by the camera.",
      "Off: save all images in the sequence, subject to exceptions."
    ],
    "start": "Auto keeps the practice sequence simpler to review. Use Off only if you want the extra individual files.",
    "limits": "Hand-held Twilight still saves one combined image with Off. Auto Framing can save two with Auto. RAW options limit the function; Silent Shooting On disables it. Off here does not disable Superior Auto.",
    "affects": "Recorded still files and card use.",
    "lesson": "auto-program",
    "sources": [
      {
        "label": "Silent Shooting restrictions",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002273510.html",
        "checked": "2026-10-11"
      }
    ]
  },
  "TP0002264679": {
    "label": "Drive Mode",
    "path": "MENU → Camera Settings1 → Drive Mode",
    "meaning": "Chooses single captures, repeated captures, delayed captures or a set of variants.",
    "choices": [
      "Single Shooting: one normal photograph per press.",
      "Cont. Shooting: hold the shutter for a burst. Hi+ is fastest; Hi/Mid/Lo provide a real-time subject view.",
      "Self-timer: one photo after 2, 5 or 10 seconds.",
      "Self-timer(Cont): 3 or 5 photos after 2, 5 or 10 seconds.",
      "Cont. Bracket: hold through an exposure sequence. Single Bracket: press separately for each image. Choose the displayed EV spacing and frame count; Sony documents 0.3EV 3 Image as an example, not the full option list.",
      "WB bracket: three white-balance/color variants. Lo changes color less; Hi changes it more.",
      "DRO Bracket: three tonal-rendering variants. Lo uses DRO levels 1/2/3; Hi uses 1/3/5."
    ],
    "start": "Single Shooting for a still cup; Mid with AF-C for short walking-subject bursts; a 2-second timer with stable support.",
    "limits": "Sports Action disables Single Shooting. Continuous is unavailable in Sweep Panorama, scenes other than Sports Action, Auto HDR, Multi Frame NR, Smile Shutter and Picture Effects Soft Focus/HDR Painting/Rich-tone Mono./Miniature/Watercolor/Illustration. Timer is unavailable in Sweep Panorama, Sports Action and Smile Shutter. Exposure brackets require a mode other than Auto, Scene Selection or Sweep Panorama. For continuous focus/exposure use AF-C and AEL w/ shutter Auto/Off; beyond f/11 Hi+/Hi/Mid lock focus to the first frame. Hi+ lacks a live subject view; flash slows bursts and requires a press per bracket frame. In M, brackets vary Auto ISO or, with numeric ISO, shutter speed.",
    "affects": "Still capture timing, file count and bracket variants. More files need more card space; bracketing does not merge an HDR image or correct missed focus.",
    "lesson": "drive-bracketing",
    "sources": [
      {
        "label": "Cont. Shooting",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264680.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Self-timer",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241223.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Self-timer(Cont)",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241224.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Cont. Bracket",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241225.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Single Bracket",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264681.html",
        "checked": "2026-10-11"
      },
      {
        "label": "WB bracket",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264682.html",
        "checked": "2026-10-11"
      },
      {
        "label": "DRO Bracket",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241227.html",
        "checked": "2026-10-11"
      }
    ]
  },
  "TP0002264684": {
    "label": "Bracket Settings",
    "path": "MENU → Camera Settings1 → Bracket Settings",
    "meaning": "Sets a bracket countdown and the order of exposure or white-balance variants.",
    "choices": [
      "Selftimer during Bracket: OFF takes no timed delay; 2 Sec, 5 Sec or 10 Sec delays capture.",
      "Bracket order: 0→−→+ starts with the base result; −→0→+ runs darker to brighter (or the corresponding white-balance order)."
    ],
    "start": "For a supported still scene, choose a bracket Drive Mode first, then a 2-second bracket timer and 0→−→+.",
    "limits": "Select a bracket drive mode before configuring it. The ordinary Self-timer replaces bracket drive mode; use Selftimer during Bracket instead. Bracket order applies to exposure and WB bracketing. Auto/Scene/Panorama restrictions still apply.",
    "affects": "Timing/order of separate still files, not automatic merging.",
    "lesson": "drive-bracketing"
  },
  "TP0002264687": {
    "label": "ISO AUTO Min. SS",
    "path": "MENU → Camera Settings1 → ISO Setting → ISO AUTO Min. SS",
    "meaning": "Sets the shutter-speed threshold at which Auto ISO starts increasing sensitivity in P or A.",
    "choices": [
      "FASTER / FAST: raise ISO at faster shutter speeds than Standard; useful for motion, at the cost of higher ISO.",
      "STD: camera chooses the threshold from lens focal length.",
      "SLOW / SLOWER: allow slower shutter speeds before raising ISO; steadier subjects/support are needed.",
      "Numeric shutter speed from 1/4000 to 30 seconds: choose a specific threshold. Adjacent named steps differ by 1 EV."
    ],
    "start": "Try 1/250 for a gently moving person, then check motion blur and choose faster when needed.",
    "limits": "Requires P/A and ISO AUTO (including supported Multi Frame NR Auto ISO). If Auto ISO reaches its maximum, the camera can use a slower shutter. Flash can override the threshold; sync is limited to 1/160 second. S/M give direct shutter control.",
    "affects": "Automatic exposure choices and the balance between motion blur and high-ISO noise.",
    "lesson": "auto-program"
  },
  "TP0002280317": {
    "label": "ISO Range Limit",
    "path": "MENU → Camera Settings1 → ISO Setting → ISO Range Limit",
    "meaning": "Limits which ISO values you can select manually.",
    "choices": [
      "Minimum: lowest manually selectable ISO.",
      "Maximum: highest manually selectable ISO. Choose from the values available in the current shooting setup."
    ],
    "start": "Leave the range broad while learning. Use this if you repeatedly select unwanted numeric ISO values.",
    "limits": "This is not the Auto ISO range. Set that via ISO → ISO AUTO → right side of wheel → ISO AUTO Minimum/Maximum. Picture Profile Gamma changes available ISO values. Reset these limits to restore hidden numeric choices.",
    "affects": "Manual ISO selection availability; does not itself lock a shutter speed.",
    "lesson": "auto-program"
  },
  "TP0002241214": {
    "label": "AEL w/ shutter",
    "path": "MENU → Camera Settings1 → AEL w/ shutter",
    "meaning": "Decides whether half-pressing the shutter locks automatic exposure.",
    "choices": [
      "Auto: locks after AF-S focus; moving AF-A or burst shooting cancels the fixed exposure.",
      "On: fixes exposure on half-press.",
      "Off: does not lock exposure on half-press; exposure can keep adjusting in bursts."
    ],
    "start": "Auto for general use; Off for a moving subject when exposure should keep changing during the burst.",
    "limits": "AEL-button operation takes priority. Exposure lock is different from focus lock and from AF w/ shutter. Sony recommends Auto or Off with AF-C for continuous focus/exposure.",
    "affects": "Still-photo automatic exposure behavior.",
    "lesson": "drive-bracketing"
  },
  "TP0002273510": {
    "label": "Silent Shooting",
    "path": "MENU → Camera Settings2 → Silent Shooting",
    "meaning": "Uses silent still-photo capture, while lens and other operating sounds can remain.",
    "choices": [
      "On: capture without the normal shutter sound.",
      "Off: disable Silent Shooting."
    ],
    "start": "Off for the first action/bracket exercise. Try On only when quiet capture is useful and inspect for banding or distorted movement.",
    "limits": "Selectable only in P/A/S/M. On disables flash, Auto HDR, Picture Effect, Picture Profile, Long Exposure NR, e-Front Curtain Shutter, Superior Auto Img. Extract., BULB and Multi Frame NR. Moving subjects/camera can distort; flickering or instantaneous light can cause stripes. Very bright sources at low ISO can record dark tones. Focus/timer beeps are controlled separately by Audio signals. Startup capture availability is delayed by about 0.5 seconds.",
    "affects": "Still capture method and possible image artifacts, not just speaker volume.",
    "lesson": "drive-bracketing"
  },
  "TP0002279228": {
    "label": "Custom Key",
    "path": "MENU → Camera Settings2 → Custom Key",
    "meaning": "Assigns a function to a button so you can call it without opening the full menu.",
    "choices": [
      "Still-photo, movie and playback Custom Key entries have separate icon-marked assignments.",
      "Choose a supported button and a function from its list; availability varies by button. Not set disables its assigned shortcut.",
      "AF/MF Button and AEL Button are separate assignments selected by the lever. C1, C2 and wheel buttons are also assignable; lens focus-hold assignment requires a lens with that button.",
      "Examples: AEL Button → Eye AF; AF On for a separate AF trigger; Focus Hold to freeze focus; AF/MF hold/toggle to switch focusing method.",
      "Movie Follow Custom (still icon) follows a still assignment only if supported in movies. Playback Follow Custom (shooting icons) switches to shooting and recalls the function."
    ],
    "start": "Record the existing AEL assignment, choose still Custom Key → Rear1 → AEL Button → Eye AF, set the lever to AEL, and test while holding it. Restore the old mapping if preferred.",
    "limits": "Assignable functions are not identical for every key or mode; the on-camera list is authoritative for that key. Focus Standard and AF/MF Control Hold cannot be assigned to Left/Right/Down. Reassigning AEL replaces exposure lock in that lever position. No focus-hold button on the confirmed Sigma lens is required for the body-button exercises.",
    "affects": "Control mapping; changes how you access a function, not image quality by itself.",
    "lesson": "custom-controls",
    "sources": [
      {
        "label": "AF On",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241209.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Focus Standard",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002273529.html",
        "checked": "2026-10-11"
      },
      {
        "label": "AF/MF control",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241202.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Focus Hold",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002273149.html",
        "checked": "2026-10-11"
      },
      {
        "label": "AF/MF/AEL lever",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002273574.html",
        "checked": "2026-10-11"
      }
    ]
  },
  "TP0002241247": {
    "label": "Function Menu Set. / Fn",
    "path": "MENU → Camera Settings2 → Function Menu Set.; press Fn in shooting mode to use it",
    "meaning": "Configures the 12 shortcuts opened by Fn during shooting.",
    "choices": [
      "Function Menu Set.: choose a slot, then replace its function with one from the offered list. Sony’s example replaces Drive Mode with Grid Line.",
      "Fn while shooting: select a function with wheel directions, turn the wheel to choose its setting, and press center.",
      "Center on a selected function opens its dedicated setting screen; some functions also use the top control dial for finer adjustment."
    ],
    "start": "Retain quick access to Drive Mode if you use bursts. Record one seldom-used slot and try Grid Line there, then restore it if not helpful.",
    "limits": "Use DISP to select a screen other than For viewfinder for this walkthrough. In playback, Fn serves Send to Smartphone instead. A shortcut does not bypass the selected function’s mode restrictions. The source describes 12 slots, not a newer camera’s separate photo/movie Fn layouts.",
    "affects": "Shooting shortcut layout; changing a setting through Fn has the same effect as through MENU.",
    "lesson": "custom-controls"
  },
  "TP0002278037": {
    "label": "Add Item",
    "path": "MENU → My Menu → Add Item",
    "meaning": "Adds a shortcut to a full menu item in My Menu.",
    "choices": [
      "Choose the menu item using wheel directions, then choose its destination. Up to 30 items can be registered."
    ],
    "start": "Try adding Focus Area Limit, AF w/ shutter and Bracket Settings for the current exercises.",
    "limits": "Playback menu items and View on TV cannot be added. A shortcut does not bypass the original item’s mode restrictions.",
    "affects": "My Menu organization only; no changes to recorded files.",
    "lesson": "custom-controls"
  },
  "TP0002278038": {
    "label": "Sort Item",
    "path": "MENU → My Menu → Sort Item",
    "meaning": "Moves an existing My Menu shortcut.",
    "choices": [
      "Choose an item with wheel directions, then choose its destination."
    ],
    "start": "Put the item you use most often first.",
    "limits": "Requires an existing My Menu item. Moving it changes only the shortcut order.",
    "affects": "My Menu organization only; no changes to recorded files.",
    "lesson": "custom-controls"
  },
  "TP0002278039": {
    "label": "Delete Item",
    "path": "MENU → My Menu → Delete Item",
    "meaning": "Removes one shortcut from My Menu.",
    "choices": [
      "Select the shortcut with wheel directions and press center to remove it."
    ],
    "start": "Remove a shortcut you no longer use; the original setting remains in its original menu.",
    "limits": "This is My Menu deletion, not Playback Delete. It does not delete photos or reset the linked setting.",
    "affects": "My Menu organization only; no changes to recorded files.",
    "lesson": "custom-controls"
  },
  "TP0002278040": {
    "label": "Delete Page",
    "path": "MENU → My Menu → Delete Page",
    "meaning": "Removes all shortcuts on one My Menu page.",
    "choices": [
      "Select the page with left/right and press center to remove its items."
    ],
    "start": "Use when you want to rebuild one page; record the shortcuts first if you may want them back.",
    "limits": "Removes a page’s shortcuts only, not the original menu items, camera settings or photographs.",
    "affects": "My Menu organization only; no changes to recorded files.",
    "lesson": "custom-controls"
  },
  "TP0002278041": {
    "label": "Delete All",
    "path": "MENU → My Menu → Delete All",
    "meaning": "Clears the entire My Menu shortcut list.",
    "choices": [
      "Select Delete All, then OK to clear the list; leave without confirming if you want to keep it."
    ],
    "start": "Use only when deliberately rebuilding My Menu. For one unwanted shortcut, use Delete Item.",
    "limits": "Clears all My Menu shortcuts, not photographs or the linked settings. Setup Format and Playback Delete are different operations.",
    "affects": "My Menu organization only; no changes to recorded files.",
    "lesson": "custom-controls"
  },
  "TP0002264674": {
    "label": "Priority Set in AF-S",
    "path": "MENU → Camera Settings1 → Priority Set in AF-S",
    "meaning": "Chooses the balance between confirmed focus and immediate shutter release.",
    "choices": [
      "AF: waits for focus before release.",
      "Release: permits a shot even when focus has not been confirmed.",
      "Balanced Emphasis: balances focus and release timing."
    ],
    "start": "AF for a stationary practice subject; inspect the actual photographs.",
    "limits": "Applies to AF-S, DMF and AF-A when the subject is still. AF priority can delay a shot on a low-contrast or difficult subject. Release priority can record an unfocused image; it does not improve focusing.",
    "affects": "Still-photo release timing and chance of an in-focus result.",
    "lesson": "autofocus-controls"
  },
  "TP0002264675": {
    "label": "Priority Set in AF-C",
    "path": "MENU → Camera Settings1 → Priority Set in AF-C",
    "meaning": "Chooses the balance between confirmed focus and immediate shutter release.",
    "choices": [
      "AF: waits for focus before release.",
      "Release: permits a shot even when focus has not been confirmed.",
      "Balanced Emphasis: balances focus and release timing."
    ],
    "start": "Balanced Emphasis for a walking-subject experiment; inspect the actual photographs.",
    "limits": "Applies to continuous AF when the subject is moving. AF priority can delay a shot on a low-contrast or difficult subject. Release priority can record an unfocused image; it does not improve focusing.",
    "affects": "Still-photo release timing and chance of an in-focus result.",
    "lesson": "autofocus-controls"
  },
  "TP0002280328": {
    "label": "Focus Area Limit",
    "path": "MENU → Camera Settings1 → Focus Area Limit",
    "meaning": "Hides focus-area types you do not want to cycle through.",
    "choices": [
      "Checked area types remain available; unchecked types disappear from both MENU and Fn. Select OK to apply.",
      "An assigned Switch Focus Area key cycles through the allowed types."
    ],
    "start": "Keep all types available initially. Later retain just the areas you regularly use, such as Wide and Flexible Spot.",
    "limits": "To recover a missing area, check it again. Removing a type registered in Switch V/H AF Area or AF Area Registration changes the registered settings. Mode restrictions still apply.",
    "affects": "Available area choices, not image pixels or the sensor’s physical focusing coverage.",
    "lesson": "autofocus-controls"
  },
  "TP0002278024": {
    "label": "Switch V/H AF Area",
    "path": "MENU → Camera Settings1 → Switch V/H AF Area",
    "meaning": "Remembers focus-frame choices separately for horizontal and two vertical camera orientations.",
    "choices": [
      "Off: keep the same focus-area choice across orientations.",
      "AF Point Only: switch frame position but keep the area type.",
      "AF Point + AF Area: switch both position and type."
    ],
    "start": "Off while learning; later try AF Point Only to keep a portrait focus point near the face when rotating.",
    "limits": "Changing this setting discards orientation-specific focus settings. Switching is suspended in Auto/Movie/S&Q, movie recording, half-press/active AF, bursts, timer countdown, digital zoom and magnification. On a vertical first shot after power-on the horizontal/last setting may be used. Orientation cannot be detected with the lens pointing up/down.",
    "affects": "Focus-area selection for stills; does not rotate or crop the saved photograph.",
    "lesson": "autofocus-controls"
  },
  "TP0002264670": {
    "label": "AF Illuminator",
    "path": "MENU → Camera Settings1 → AF Illuminator",
    "meaning": "Supplies a focusing light in dark surroundings while acquiring focus.",
    "choices": [
      "Auto: illuminate automatically when needed.",
      "Off: do not use the focusing light."
    ],
    "start": "Auto for a still indoor object; Off if the light distracts the subject, with enough ambient light for focusing.",
    "limits": "Unavailable in Movie/S&Q, Sweep Panorama, AF-C, moving AF-A, Focus Magnifier, Landscape/Sports Action/Night Scene and with a mount adapter. A compatible flash with an AF illuminator can also supply light. Do not look directly at the lamp at close range.",
    "affects": "Still autofocus assistance, not flash exposure or continuous lighting for the photo.",
    "lesson": "autofocus-controls"
  },
  "TP0002264669": {
    "label": "Pre-AF",
    "path": "MENU → Camera Settings1 → Pre-AF",
    "meaning": "Lets the camera adjust focus before you half-press the shutter.",
    "choices": [
      "On: focus in advance.",
      "Off: no advance focus from this function."
    ],
    "start": "Off for the diagnostic exercise so you can observe when half-press or AF On starts focus.",
    "limits": "Available only with an E-mount lens. The display can shake during focusing. AF w/ shutter Off alone does not disable Pre-AF; check both if you want only a separate AF trigger.",
    "affects": "Still autofocus timing; no change to the meaning of AF-S/AF-C.",
    "lesson": "autofocus-controls"
  },
  "TP0002241272": {
    "label": "Eye-Start AF",
    "path": "MENU → Camera Settings1 → Eye-Start AF",
    "meaning": "Starts autofocus when you look into the electronic viewfinder with a supported A-mount adapter setup.",
    "choices": [
      "On: finder use starts AF on supported equipment.",
      "Off: finder use does not start AF through this function."
    ],
    "start": "Not applicable to the confirmed native E-mount Sigma setup; use Face/Eye AF Set. for eye detection.",
    "limits": "Requires an A-mount lens with LA-EA2 or LA-EA4. The eye sensor trigger is different from focusing on the subject’s eye.",
    "affects": "Still autofocus activation with specific adapted lenses.",
    "lesson": "autofocus-controls"
  },
  "TP0002278025": {
    "label": "AF Area Registration",
    "path": "MENU → Camera Settings1 → AF Area Registration",
    "meaning": "Saves a focus-frame position for quick recall with an assigned key.",
    "choices": [
      "On: enable registration; choose and position the area, then hold Fn to save it. A registered frame flashes.",
      "Off: disable registration. Del. Regist. AF Area is the separate action for deleting the saved position.",
      "Custom Key → Regist. AF Area hold: recall while held; Regist AF Area tggle: toggle recall; Reg. AF Area+AF On: recall and autofocus."
    ],
    "start": "Leave Off initially. For a predictable subject position, enable it, register the frame and test a supported custom key.",
    "limits": "Cannot register in Movie/S&Q, during Touch Focus/Touch Tracking, digital zoom, active focusing or focus lock. Cannot recall in Auto/Movie/S&Q. Regist. AF Area hold cannot use Left/Right/Down buttons. On fixes Dial / Wheel Lock to Unlock. Focus Area Limit changes can alter the saved setting.",
    "affects": "Stored still-photo focus-area position and button recall; not a saved focus distance or camera-settings preset.",
    "lesson": "autofocus-controls"
  },
  "TP0002278026": {
    "label": "Del. Regist. AF Area",
    "path": "MENU → Camera Settings1 → Del. Regist. AF Area",
    "meaning": "Deletes the frame position saved by AF Area Registration.",
    "choices": [
      "Run this action to remove the registered focus-frame position."
    ],
    "start": "Use when a saved position is no longer useful; record it first if you want to recreate it.",
    "limits": "Affects the registered area, not photographs or the lens’s focusing calibration.",
    "affects": "Stored focus-area recall only.",
    "lesson": "autofocus-controls"
  },
  "TP0002273515": {
    "label": "AF Area Auto Clear",
    "path": "MENU → Camera Settings1 → AF Area Auto Clear",
    "meaning": "Chooses whether the focus-area overlay stays visible after focus is achieved.",
    "choices": [
      "On: the area disappears shortly after focus.",
      "Off: the area remains displayed."
    ],
    "start": "Off while learning so you can see which area you selected.",
    "limits": "A disappearing overlay does not itself mean autofocus failed. This changes display behavior, not the chosen focus area.",
    "affects": "Display only; no overlay is added to the photograph.",
    "lesson": "autofocus-controls"
  },
  "TP0002264671": {
    "label": "Disp. cont. AF area",
    "path": "MENU → Camera Settings1 → Disp. cont. AF area",
    "meaning": "Shows which area is in focus during continuous AF with Wide or Zone.",
    "choices": [
      "On: show the in-focus area.",
      "Off: hide that area display."
    ],
    "start": "On for the AF-C burst exercise so you can observe the camera’s selection.",
    "limits": "Applies to AF-C with Wide/Zone. With Center/Flexible Spot/Expand Flexible Spot, the in-focus frames turn green. An overlay is not a guarantee of sharp recorded detail.",
    "affects": "Autofocus display feedback only.",
    "lesson": "autofocus-controls"
  },
  "TP0002280338": {
    "label": "Circ. of Focus Point",
    "path": "MENU → Camera Settings1 → Circ. of Focus Point",
    "meaning": "Chooses what happens when you move the focus frame beyond an edge.",
    "choices": [
      "Does Not Circulate: stop at the edge.",
      "Circulate: jump to the opposite edge."
    ],
    "start": "Does Not Circulate while learning; Circulate if you frequently move between opposite sides.",
    "limits": "Applies with Zone, Flexible Spot and Expand Flexible Spot. Unexpected wrapping may be this setting, not tracking a subject.",
    "affects": "Focus-frame navigation only.",
    "lesson": "autofocus-controls"
  },
  "TP0002241204": {
    "label": "AF Micro Adj.",
    "path": "MENU → Camera Settings1 → AF Micro Adj.",
    "meaning": "Calibrates AF position for supported A-mount lenses using LA-EA2/LA-EA4 adapters.",
    "choices": [
      "AF Adjustment Set.: On enables adjustments.",
      "amount: larger values shift focus farther away, smaller values nearer; ±0 is the neutral/no registered adjustment.",
      "Clear: reset all registered lens adjustments."
    ],
    "start": "Do not use for the confirmed native E-mount Sigma setup. Diagnose focus mode, area, subject distance and shutter speed instead.",
    "limits": "Sony supports specified Sony/Minolta/Konica-Minolta A-mount lenses; unsupported-lens adjustment can affect supported-lens records. Stores up to 30 lenses; a dash means full. Setting an existing record to ±0 frees registration, or Clear removes all. Same-specification lenses cannot be adjusted independently. Incorrect adjustment can worsen focus.",
    "affects": "Autofocus calibration records for specific adapted lenses; inapplicable to the confirmed lens.",
    "lesson": "autofocus-controls"
  },
  "TP0002241206": {
    "label": "Focus Magnifier",
    "path": "MENU → Camera Settings1 → Focus Magnifier",
    "meaning": "Enlarges the preview so you can inspect focus before capture.",
    "choices": [
      "Open Focus Magnifier; press wheel center to change enlargement and directions to move the area.",
      "Delete button during this shooting view recenters the enlarged position. In MF, turn the focus ring to adjust.",
      "With AF in Focus Mag. On, half-press performs AF; with Off, half-press exits. Full press captures and exits.",
      "With Touch Operation and appropriate Panel/Pad enabled, MF double-tap can start magnification; dragging moves the area and double-tap again exits."
    ],
    "start": "Use with a stationary detail and stable support, checking actual texture rather than only peaking outlines.",
    "limits": "AF in Focus Mag. imposes separate focus-mode restrictions. Initial Focus Mag. and Focus Magnif. Time set the initial view/duration. The Delete button has a different role in playback—always check the current screen.",
    "affects": "Shooting preview only; it does not add pixels, crop the file or enlarge the saved subject.",
    "lesson": "autofocus-controls",
    "sources": [
      {
        "label": "AF in Focus Mag.",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002273545.html",
        "checked": "2026-10-11"
      }
    ]
  },
  "TP0002241197": {
    "label": "Focus Magnif. Time",
    "path": "MENU → Camera Settings1 → Focus Magnif. Time",
    "meaning": "Sets how long MF Assist or Focus Magnifier stays enlarged.",
    "choices": [
      "2 Sec: show for two seconds.",
      "5 Sec: show for five seconds.",
      "No Limit: stay enlarged until a shutter operation ends the view."
    ],
    "start": "5 Sec for quick checks; No Limit for a supported, carefully focused still life.",
    "limits": "This controls magnification duration, not shutter time. AF in Focus Mag. changes what half-press does.",
    "affects": "Shooting display only.",
    "lesson": "autofocus-controls"
  },
  "TP0002273478": {
    "label": "Initial Focus Mag. (still image)",
    "path": "MENU → Camera Settings1 → Initial Focus Mag.",
    "meaning": "Sets the first preview scale when opening Focus Magnifier for stills.",
    "choices": [
      "x1.0: begin with the normal view to place the magnification area.",
      "x5.9: begin enlarged 5.9 times."
    ],
    "start": "x1.0 while learning to place the frame; x5.9 for quickly checking a known detail.",
    "limits": "This is the still-image entry; the similarly named movie setting uses different scales.",
    "affects": "Preview enlargement only, not recorded image size.",
    "lesson": "autofocus-controls"
  },
  "TP0002273545": {
    "label": "AF in Focus Mag.",
    "path": "MENU → Camera Settings1 → AF in Focus Mag.",
    "meaning": "Allows autofocus within an enlarged still-photo preview.",
    "choices": [
      "On: half-press focuses on the small central point of the enlarged area.",
      "Off: half-press cancels magnification."
    ],
    "start": "On with AF-S and a well-lit static detail on stable support; magnify and position the area before half-pressing.",
    "limits": "Unavailable in Sweep Panorama, movies, AF-C, with a mount adapter, AF-A outside P/A/S/M, or AF-A with Cont. Shooting. Edges may be hard to focus. While enlarged, exposure/white balance cannot be adjusted and Eye AF, Eye-Start AF, Pre-AF, Face/Eye Priority in AF and Auto Object Framing are unavailable.",
    "affects": "AF behavior inside the enlarged display; no increase in captured resolution.",
    "lesson": "autofocus-controls"
  },
  "TP0002279214": {
    "label": "Peaking Setting",
    "path": "MENU → Camera Settings1 → Peaking Setting",
    "meaning": "Marks sharp-looking edges to assist manual focus or DMF.",
    "choices": [
      "Peaking Display: enable/disable the outlines.",
      "Peaking Level: adjust edge enhancement strength.",
      "Peaking Color: choose an outline color visible against the subject."
    ],
    "start": "Enable for a static MF exercise, choose a visible color/level on the camera, and confirm the detail with magnification.",
    "limits": "Works during MF/DMF. Edge response varies with the subject and lens; peaking is not proof of perfect focus. Outlines are not shown on HDMI-connected devices. Sony’s source names these three controls but does not enumerate their level/color values.",
    "affects": "Display assistance only; no outlines are burned into saved photos.",
    "lesson": "autofocus-controls"
  },
  "TP0002273547": {
    "label": "Touch Operation",
    "path": "MENU → Setup → Touch Operation",
    "meaning": "Enables or disables touch operation of the monitor.",
    "choices": [
      "On: allow supported touch operations.",
      "Off: disable touch operations."
    ],
    "start": "On for touch focusing; Off if unwanted touches keep moving your focus point.",
    "limits": "Touch Panel/Pad chooses monitor/finder contexts; Func. of Touch Operation chooses focus, tracking or shutter behavior. Enabling touch does not bypass those functions’ restrictions.",
    "affects": "Touch input only; the selected touch function determines any focus/capture effect.",
    "lesson": "autofocus-controls"
  },
  "TP0002279215": {
    "label": "Touch Panel/Pad",
    "path": "MENU → Setup → Touch Panel/Pad",
    "meaning": "Selects when the monitor acts as a touch control.",
    "choices": [
      "Touch Panel+Pad: both monitor shooting and finder shooting.",
      "Touch Panel Only: monitor shooting only.",
      "Touch Pad Only: finder shooting only."
    ],
    "start": "Touch Panel Only if your face accidentally moves the focus point while using the finder.",
    "limits": "Requires Touch Operation On for use. Touch Pad Settings further controls finder touch behavior.",
    "affects": "Touch availability in shooting contexts.",
    "lesson": "autofocus-controls"
  },
  "TP0002278967": {
    "label": "Touch Pad Settings",
    "path": "MENU → Setup → Touch Pad Settings",
    "meaning": "Configures monitor touch input while you look through the finder.",
    "choices": [
      "Operation in Vertical Orientation: enable or disable touch-pad use during vertical finder shooting.",
      "Touch Position Mode → Absolute Position: the touched location maps directly to a focus-frame location.",
      "Touch Position Mode → Relative Position: dragging moves the frame by the direction and distance of the drag.",
      "Operation Area: choose the active pad region shown on the camera to reduce accidental touches. With Absolute Position that region maps to the full frame."
    ],
    "start": "Try Relative Position and an active region comfortable for your thumb. Disable vertical operation if nose touches move the point.",
    "limits": "Needs Touch Operation On and a Touch Panel/Pad choice that includes pad use. These are finder controls, not changes to the recorded image area. Sony’s text does not enumerate the region presets; choose using the on-camera diagram.",
    "affects": "Focus-frame input during finder shooting.",
    "lesson": "autofocus-controls"
  },
  "TP0002273548": {
    "label": "Touch Focus",
    "path": "MENU → Camera Settings2 → Func. of Touch Operation → Touch Focus",
    "meaning": "Uses a monitor touch to select a focus position.",
    "choices": [
      "Select Touch Focus under Func. of Touch Operation; touch the subject, then half-press for still AF and press fully to capture.",
      "With Flexible Spot/Expand Flexible Spot, touch moves the focus frame. With other areas it sets a touched focus position.",
      "During supported movie monitor shooting, touching uses spot focus and temporarily switches to MF; cancel with the center button or the on-screen cancel control."
    ],
    "start": "Use Touch Operation On and Touch Panel Only to practise with a stationary object, then cancel with the wheel center.",
    "limits": "Unavailable for touch autofocus in Sweep Panorama, MF, digital zoom or LA-EA2/LA-EA4. MF double-tap magnification is a different touch feature. Movie spot focus is not available through the finder.",
    "affects": "Focus position/behavior in stills and movies; Touch Focus itself is not Touch Shutter.",
    "lesson": "autofocus-controls"
  },
  "TP0002280339": {
    "label": "Touch Tracking",
    "path": "MENU → Camera Settings2 → Func. of Touch Operation → Touch Tracking",
    "meaning": "Selects a subject to follow by touching the monitor.",
    "choices": [
      "Select Touch Tracking under Func. of Touch Operation; touch the subject to start, half-press to focus, fully press for a still photo.",
      "Cancel using the wheel center or the on-screen cancel control."
    ],
    "start": "For a walking person, use Touch Operation On, Human subject detection and AF-C, then inspect the recorded focus.",
    "limits": "Unavailable with MF, Animal detection, Smart/Clear Image/Digital Zoom, LA-EA2/LA-EA4, Sweep Panorama, Hand-held Twilight/Anti Motion Blur, or 120p/100p movie recording. Touch Tracking and Focus Area Tracking have different mode rules; do not assume all tracking is still-only.",
    "affects": "Subject tracking in supported still/movie modes, not guaranteed eye detection.",
    "lesson": "autofocus-controls"
  },
  "TP0002273555": {
    "label": "AF drive speed (movie)",
    "path": "MENU → Camera Settings2 → AF drive speed",
    "meaning": "Sets how quickly movie autofocus changes focus.",
    "choices": [
      "Fast: faster transitions for active scenes.",
      "Normal: ordinary transition speed.",
      "Slow: smoother transitions between subjects."
    ],
    "start": "Normal when beginning movies; use still AF controls for the burst exercise.",
    "limits": "Movie autofocus setting, not still-photo burst speed or still tracking sensitivity. The camera must be using autofocus for it to affect focusing.",
    "affects": "Movie autofocus transitions only.",
    "lesson": "autofocus-controls"
  },
  "TP0002273505": {
    "label": "AF Tracking Sens. (movie)",
    "path": "MENU → Camera Settings2 → AF Tracking Sens.",
    "meaning": "Sets how readily movie autofocus responds to subject changes.",
    "choices": [
      "Responsive: higher sensitivity for quickly moving subjects.",
      "Standard: ordinary sensitivity, useful around obstacles or crowds."
    ],
    "start": "Standard for a first movie experiment; this does not tune AF-C still bursts.",
    "limits": "Movie autofocus setting. Do not confuse it with Focus Area Tracking or Touch Tracking.",
    "affects": "Movie autofocus response only.",
    "lesson": "autofocus-controls"
  },
  "TP0002280319": {
    "label": "Initial Focus Mag. (movie)",
    "path": "MENU → Camera Settings2 → Initial Focus Mag.",
    "meaning": "Sets the first Focus Magnifier scale in movie shooting mode.",
    "choices": [
      "x1.0: normal shooting view.",
      "x4.0: four-times enlarged preview."
    ],
    "start": "x1.0 to place the area before checking it closely.",
    "limits": "Separate from Camera Settings1’s still-image Initial Focus Mag. AF in Focus Mag. is not available during movie shooting.",
    "affects": "Movie shooting preview, not recorded resolution.",
    "lesson": "autofocus-controls"
  }
});
window.FIELD_GUIDE.glossary.push(...[
  [
    "Program shift",
    "Changes the shutter/aperture pair in P while keeping the exposure target.",
    "auto-program"
  ],
  [
    "Drive mode",
    "Chooses single, repeated, timed or bracketed still captures.",
    "drive-bracketing"
  ],
  [
    "Bracketing",
    "Records a set of variants, such as darker and lighter exposures.",
    "drive-bracketing"
  ],
  [
    "Custom key",
    "A button whose assigned function you can change.",
    "custom-controls"
  ],
  [
    "My Menu",
    "A personal list of shortcuts to full menu items.",
    "custom-controls"
  ],
  [
    "Release priority",
    "Allows capture without waiting for confirmed focus.",
    "autofocus-controls"
  ]
]);

// Capture fluency and composition/light increment, 2026-10-12.
window.FIELD_GUIDE.lessons.push(...[
  {
    "id": "lens-fieldwork",
    "title": "Know what your 18–50mm can do",
    "time": 9,
    "definition": "Your zoom changes the field of view. Camera position changes perspective, and the lens has a closest distance at which it can focus.",
    "intro": "Use your confirmed Sigma lens for wider scenes, tighter portraits and close details without guessing its limits.",
    "prerequisites": [
      "focal-length",
      "manual-focus"
    ],
    "sections": [
      [
        "Your exact lens is confirmed",
        "You confirmed Sigma 18–50mm F2.8 DC DN | Contemporary for Sony E mount on 2026-10-11. Sigma identifies it as an APS-C mirrorless lens, matching the a6400’s APS-C sensor. DC names the sensor-format family; this lesson uses the Sony E version’s specifications. Lens firmware 03 and body firmware 2.00 were reported separately; those numbers do not describe focal length or aperture."
      ],
      [
        "18mm, 35mm, 50mm: start with framing",
        "From one position, 18mm includes more of the scene and 50mm frames a smaller part. Use the lens’s zoom ring to try 18, 35 and 50mm. On the a6400, 18–50mm gives approximately the same angle of view as 27–75mm on a 35mm-format camera; the lens remains physically 18–50mm. This comparison does not change its f-number or turn the camera into a different format."
      ],
      [
        "A constant maximum aperture",
        "F2.8 means f/2.8 is available as the widest aperture throughout this zoom range. It does not mean every photograph uses f/2.8. In A mode, try f/2.8 for separation, f/4 for more tolerance, and f/8 when more of the scene needs to look sharp. The camera adjusts shutter speed; watch it in dim light. Sigma lists f/22 as the smallest aperture, not as a recommended sharpness setting. Subject distance and the background also matter."
      ],
      [
        "Closest focus is measured from the camera’s sensor",
        "Sigma lists minimum focusing distance as 12.1 cm at the wide end (18mm) and 30 cm at the long end (50mm). Measure from the sensor-plane mark on the camera body, not from the front glass. The space between the front of the lens and the subject—working distance—is smaller. For a first attempt, stay comfortably farther away, then approach slowly while checking focus. Do not press the lens against an object."
      ],
      [
        "Close-up does not mean unlimited magnification",
        "At the wide end, Sigma lists maximum magnification 1:2.8; at the long end, 1:5. These ratios describe how large the subject’s image is on the sensor compared with the real object. Neither is 1:1 life-size macro. Macro scene mode cannot make the lens focus closer than its limit. Sigma instructs removing the hood when working at the wide end’s minimum distance; keep the glass protected and avoid blocking the light with the lens."
      ],
      [
        "Two close-up approaches",
        "Try a small object at 50mm from a comfortable distance, then at 18mm closer to it. Keep the important detail similarly sized in the frame. Compare the background and the relative sizes of nearer and farther details. Use AF-S on a clear edge, or magnified MF on stable support. If the lens hunts when you approach, move back before changing camera calibration settings."
      ],
      [
        "Useful specifications, not a shopping list",
        "For Sony E, Sigma lists a 55mm filter thread, 61.6 × 76.5mm diameter/length and 290g weight. Other mounts have different dimensions. You do not need a new filter or support to do this lesson. Support the camera carefully and inspect shutter speed; the a6400 SteadyShot menu is lens-dependent and is not a universal fix for blur with this lens. A faster shutter can help camera shake and subject motion; choose it based on the result."
      ]
    ],
    "exercise": "Make a six-photo series: one scene at 18/35/50mm without moving, then one small object at comfortable distances using 18 and 50mm, followed by one improved version. Record where focus struggled and which framing you prefer. Compare real subject detail at the same viewing size, not only background blur.",
    "question": "Where is the 12.1 cm minimum focusing distance measured from?",
    "options": [
      "The front of the lens hood",
      "The sensor-plane mark on the camera body",
      "The nearest edge of the camera strap"
    ],
    "answer": 1,
    "explanation": "Focusing distance is measured from the sensor plane. Working distance from the front of the lens is smaller; start farther away and approach carefully.",
    "sources": [
      {
        "label": "Sigma 18–50mm F2.8 DC DN | Contemporary: specifications and close focus",
        "url": "https://www.sigma-global.com/en/lenses/c021_18_50_28/",
        "checked": "2026-10-11"
      },
      {
        "label": "Sony: sensor-plane mark and minimum focus",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002280308.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Sony a6400 specifications and angle-of-view equivalence",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002280326.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Sony: Macro scene does not change minimum focus",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264644.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Sony: lens-dependent SteadyShot",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002273522.html",
        "checked": "2026-10-11"
      }
    ],
    "stage": "controls",
    "category": "CAMERA IN PRACTICE",
    "symbol": "◒",
    "sourceNote": "See the source dates below. Sony verifies camera operation, Sigma the lens, and Nikon general photographic principles where linked. Exercises and starting settings are original practice guidance, not guaranteed results. Physical-camera testing remains pending."
  },
  {
    "id": "memory-scenes",
    "title": "Save a setup, then know what comes back",
    "time": 11,
    "definition": "Memory stores shooting settings. Recall loads them. My Dial changes what a dial controls; Scene Selection lets the camera choose a scene-based setup.",
    "intro": "Prepare for a repeatable situation while checking the settings that can surprise you after recall.",
    "prerequisites": [
      "custom-controls",
      "exposure-controls"
    ],
    "sections": [
      [
        "Four shortcuts with different jobs",
        "My Menu is a list of menu links. Memory stores a camera setup for later use. Reg. Custom Shoot Set temporarily recalls selected settings while you hold a button. My Dial changes the functions assigned to the dial and wheel. None of these names means saving a photo or backing up your card."
      ],
      [
        "Register an ordinary still-subject setup",
        "Choose A, an aperture such as f/4, ISO AUTO, AF-S and Single Shooting. Check each value first. MENU → Camera Settings1 → Memory (still/movie icons): choose an unused number and press the wheel center. Sony documents up to three body registrations and four card slots M1–M4; use the numbers shown on your camera. The registration screen shows which settings can be saved. Write down any existing preset before overwriting it. Program Shift cannot be stored."
      ],
      [
        "Recall, inspect, then shoot",
        "Turn the mode dial to MR. Use the wheel or left/right to select the saved number and press center; Camera Settings1 → Recall is the corresponding menu entry. Check the displayed exposure mode, shutter/aperture, ISO, focus and drive before shooting. Recalled values take priority over your previous settings. To update the saved setup, change the values and register again to the same number; do not assume a temporary adjustment has updated the preset. M1–M4 depend on the inserted card and are erased by formatting it."
      ],
      [
        "A temporary action setup",
        "For a sudden movement in P/A/S/M, Reg. Custom Shoot Set can hold a second setup ready. Choose Recall Custom hold 1, 2 or 3, check only the functions you want to recall, set their values (or Import Current Setting), then Register. Assign that Recall Custom hold number through the still-photo Custom Key entry. Hold the assigned key while shooting; release to return to the original setup. Exposure, focus and drive choices are supported, but self-timer is excluded. This is useful only after you understand the individual settings."
      ],
      [
        "My Dial changes the controls",
        "MENU → Camera Settings2 → My Dial Settings lets you assign dial/wheel functions to My Dial 1, 2 or 3, then OK. Sony’s example pairs the wheel with ISO and the top dial with Av (aperture). Assign My Dial 1 during Hold to a supported custom key to test it while held; release restores the normal control mapping. My Dial 1→2→3 cycles through sets; Toggle My Dial keeps a set active until pressed again. The values you changed are not automatically undone when the mapping returns. Empty sets are skipped, and My Dial temporarily overrides Dial / Wheel Lock."
      ],
      [
        "Scene Selection is a different route",
        "Turn the mode dial to SCN, then turn the top dial to choose a scene. Portrait, Sports Action, Macro, Landscape, Sunset, Night Scene, Hand-held Twilight, Night Portrait and Anti Motion Blur are available. They choose settings for their intended situations; they do not remove lighting or lens limits. Sports Action uses a held-shutter burst. Night Portrait needs the built-in flash raised manually. Night Scene/Night Portrait can use slow shutters, so use stable support."
      ],
      [
        "Scene modes can change file handling",
        "Hand-held Twilight and Anti Motion Blur make four captures and combine a result; selecting either with RAW or RAW & JPEG temporarily changes File Format to JPEG. They can struggle with erratic movement, very close subjects, repeated patterns or flickering light. Macro does not shorten minimum focusing distance. Use the reference for all scene choices. For a repeatable learning comparison, P/A/S/M gives clearer control over what you changed."
      ],
      [
        "Undo the experiment deliberately",
        "Leave MR or SCN for A/P to return to an ordinary mode and inspect the active values. Restore any custom-button assignment from your notes. A saved setup is a starting point for similar conditions, not a promise that the same settings work in different light. Keep the notebook record of what you saved; formatting the card is not a shortcut-cleanup method."
      ]
    ],
    "exercise": "Record a spare Memory slot’s current contents, then save a still-subject setup only if overwriting it is acceptable. Change a few shooting values, recall your setup and compare every indicator before taking a test photo. Try one My Dial hold assignment and observe which mapping returns and which changed value remains. Restore unwanted changes.",
    "question": "What happens when you release a My Dial “during Hold” button?",
    "options": [
      "Every exposure value returns to its previous value",
      "The dial/wheel mappings return; values you changed may remain",
      "The camera deletes the saved pictures"
    ],
    "answer": 1,
    "explanation": "My Dial changes control assignments. It is different from Recall Custom hold, which temporarily recalls selected shooting settings.",
    "sources": [
      {
        "label": "Memory",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241246.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Recall",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241175.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Reg. Custom Shoot Set",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002278035.html",
        "checked": "2026-10-11"
      },
      {
        "label": "My Dial Settings",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002280322.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Scene Selection",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264644.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Format and card memories",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241321.html",
        "checked": "2026-10-11"
      }
    ],
    "stage": "controls",
    "category": "CAMERA IN PRACTICE",
    "symbol": "◒",
    "sourceNote": "See the source dates below. Sony verifies camera operation, Sigma the lens, and Nikon general photographic principles where linked. Exercises and starting settings are original practice guidance, not guaranteed results. Physical-camera testing remains pending."
  },
  {
    "id": "people-priority",
    "title": "Choose the person and the moment",
    "time": 8,
    "definition": "Registered-face priority helps the camera prefer a known face. Smile Shutter releases automatically when it detects a smile.",
    "intro": "Use these optional aids deliberately, then return to a simple eye-focus workflow when timing matters more.",
    "prerequisites": [
      "eye-tracking",
      "autofocus-controls"
    ],
    "sections": [
      [
        "Ordinary eye AF does not require registration",
        "For one person, start with Face/Eye Priority in AF On and Subject Detection Human. Use AF-C for movement or AF-S for a still pose, and check the recorded eye at enlarged size. Face Registration is an optional priority aid when several people are in the frame; it does not make an unrecognizable face sharp."
      ],
      [
        "Register a willing subject",
        "If useful, explain the exercise to your subject first. MENU → Camera Settings1 → Face Registration → New Registration. In good light, frame the face from the front within the guide, press the shutter, then choose Enter at confirmation. Up to eight faces can be registered. A mask, hat or sunglasses can interfere. This operation stores face-registration data in the camera; it is not a cloud upload."
      ],
      [
        "Turn on the priority and set its order",
        "Set MENU → Camera Settings1 → Regist. Faces Priority → On. It needs Face/Eye Priority in AF On and, on your firmware 2.00, Subject Detection Human. The face registered first has priority; Face Registration → Order Exchanging lets you select a face and move it to a new position. Off disables the preference while keeping registrations. Always inspect which face is actually selected."
      ],
      [
        "Deletion has a surprising limit",
        "Face Registration → Delete removes a selected registration from use, but Sony says its registered-face data remains in the product. Face Registration → Delete All removes all registered-face data. If the exercise is finished and you want that data removed, use Delete All only after checking that you also intend to remove any other registrations. These are face records, not the photographs on the card."
      ],
      [
        "Smile Shutter can choose the timing for you",
        "MENU → Camera Settings1 → Smile Shutter offers Off, On: Slight Smile, On: Normal Smile and On: Big Smile. The camera can take a photo when it detects the chosen smile strength. Try Normal Smile briefly with a willing subject, then turn it Off. You can press the shutter yourself while it is active; after the shot it returns to smile detection. It can miss an expression or mistake something else for a face."
      ],
      [
        "Know when it is unavailable",
        "Smile Shutter is unavailable during movies/S&Q, Sweep Panorama, Picture Effect, Focus Magnifier, and Landscape/Night Scene/Sunset/Hand-held Twilight/Anti Motion Blur scenes. It also changes the behavior of other controls: focus area is Wide and burst/timer choices are restricted. With Touch Tracking active, touching a face confines smile detection to that face. Check the mode first if an option is unavailable."
      ],
      [
        "Choose the expression you actually want",
        "A smile is only one expression. A quiet look, interaction or glance can make a more interesting picture. If automatic release fights your timing, use Smile Shutter Off, a deliberate focus area and short bursts or single shots. Compare the expression, eye sharpness and background—not just how many photos the camera captured."
      ]
    ],
    "exercise": "With someone’s agreement, try ordinary Human eye AF first. If registration is useful, record a face, enable priority and test a second composition. Briefly try Smile Shutter, then turn it Off. Review the sharpness and expression in each result. Decide whether to keep registrations; remember that Delete All removes every registered-face record.",
    "question": "Which action removes the registered-face data according to Sony?",
    "options": [
      "Face Registration → Delete All",
      "Deleting one photograph from playback",
      "Regist. Faces Priority → Off"
    ],
    "answer": 0,
    "explanation": "Delete All removes all registered-face data. Delete for one face leaves its data in the camera, and priority Off only disables the preference.",
    "sources": [
      {
        "label": "Face Registration: New Registration",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241259.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Face Registration: Order Exchanging",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241260.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Face Registration: Delete and retained data",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264704.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Regist. Faces Priority",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002279222.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Smile Shutter",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264703.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Focus Area restrictions",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264665.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Continuous shooting restrictions",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264680.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Self-timer restrictions",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241223.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Face/Eye AF Set.",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002280329.html",
        "checked": "2026-10-11"
      }
    ],
    "stage": "controls",
    "category": "CAMERA IN PRACTICE",
    "symbol": "◒",
    "sourceNote": "See the source dates below. Sony verifies camera operation, Sigma the lens, and Nikon general photographic principles where linked. Exercises and starting settings are original practice guidance, not guaranteed results. Physical-camera testing remains pending."
  },
  {
    "id": "composition",
    "title": "Build a frame around one idea",
    "time": 9,
    "definition": "Composition is how you arrange the subject, background and empty space inside the photograph.",
    "intro": "Make the viewer notice what you noticed, using your feet, camera height and the 18–50mm zoom.",
    "prerequisites": [
      "lens-fieldwork"
    ],
    "sections": [
      [
        "Name the subject before changing settings",
        "Choose one simple idea: a person’s expression, the shape of a cup, or a tree against the sky. Ask what the viewer should notice first. A technically sharp picture can still feel unclear if several bright or detailed objects compete for attention. This lesson is an experiment in visual choices, not a formula for what everyone must like."
      ],
      [
        "Check the background and all four edges",
        "Before shooting, scan behind the subject and around the frame. Look for a pole that appears to grow from a head, a bright patch pulling attention away, or a cut-off object at the edge. Move a step sideways, raise/lower the camera or wait for the background to clear. Use a safe position; do not step backward into a road or obstacle while looking through the finder."
      ],
      [
        "Use thirds as a starting guide",
        "MENU → Camera Settings2 → Grid Line → Rule of 3rds Grid divides the frame into nine rectangles. Try the subject near an intersection and compare a centered version. Give a person space in the direction they face if that supports your idea. A centered arrangement may be better for symmetry or a direct portrait. The grid is a composition aid, not a scoring system, and it does not appear in the recorded picture."
      ],
      [
        "Separate moving from zooming",
        "From one position, zoom to remove unwanted edges. Then deliberately change position and reframe. The second action changes the relationship of near and far objects. With the 18–50mm, try a wider environmental view first, then a tighter view that keeps only the key subject. If you get very close to a face, inspect the proportions before assuming the longest focal length is always the right answer."
      ],
      [
        "Lines, layers and breathing space",
        "A path or railing can lead the eye toward a subject; it can also lead away from it. Try a foreground element, main subject and distant background to suggest depth, keeping the important detail in focus. Empty space can make the subject easier to notice. Compare two versions and describe the change with concrete words such as “the bright sign is gone” instead of “this is more professional.”"
      ],
      [
        "Level deliberately",
        "For a horizon or architecture, enable Level in MENU → Camera Settings2 → DISP Button → Monitor or Finder, then Enter, and cycle DISP to that view. Sony notes a possible error of almost ±1° and larger errors at steep tilt, so use visible lines too. A tilted frame can be intentional, but a nearly-level horizon often looks accidental. Grid Line and Level help at capture; this is not an editing/crop lesson."
      ],
      [
        "Review a small sequence",
        "Compare centered, off-center and simplified-background versions at the same viewing size. First describe where your eye goes. Then check the intended subject’s focus and the frame edges. If your phone is available, make a similar framing from the same position and compare at the same size. Record a preference without treating one camera or one composition rule as an automatic winner."
      ]
    ],
    "exercise": "Choose a stationary subject and make three pairs: centered/thirds, busy/cleaner background, and wide/tight framing. Change only the intended choice in each pair. Select one frame and write what you removed or arranged to make the idea clearer. The supplied diagram is only an illustration; your real photos are the evidence.",
    "question": "What is the most useful response to a distracting object behind your subject?",
    "options": [
      "Always raise ISO",
      "Try changing camera position or framing, then check the edges again",
      "Always place every subject on a thirds intersection"
    ],
    "answer": 1,
    "explanation": "Position and framing can remove the distraction. Thirds is an optional guide, not a rule that fixes every scene.",
    "sources": [
      {
        "label": "Sony a6400 Grid Line",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264706.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Sony a6400 DISP and Level",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264659.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Sigma: 18–50mm zoom and angle of view",
        "url": "https://www.sigma-global.com/en/lenses/c021_18_50_28/",
        "checked": "2026-10-11"
      },
      {
        "label": "Nikon: 5 Easy Composition Guidelines (general composition, not Sony menus)",
        "url": "https://www.nikonusa.com/learn-and-explore/c/tips-and-techniques/5-easy-composition-guidelines",
        "checked": "2026-10-12"
      }
    ],
    "stage": "fieldcraft",
    "category": "COMPOSITION & LIGHT",
    "symbol": "◒",
    "sourceNote": "See the source dates below. Sony verifies camera operation, Sigma the lens, and Nikon general photographic principles where linked. Exercises and starting settings are original practice guidance, not guaranteed results. Physical-camera testing remains pending."
  },
  {
    "id": "available-light",
    "title": "Find better light before changing gear",
    "time": 11,
    "definition": "Available light is the light already in the scene. Its direction, shadow pattern and color can change the feeling of a photograph.",
    "intro": "Use a window or open shade to make a simple JPEG portrait or still life, then compare what moving the subject changes.",
    "prerequisites": [
      "composition",
      "jpeg-settings",
      "exposure-controls"
    ],
    "sections": [
      [
        "Start with one window and one subject",
        "Place a cup or willing person near a window in daylight. Turn off nearby indoor lamps if you can do so comfortably, to simplify the mix of light colors. Use your existing camera and lens; no lighting purchase is required. Start in A around f/4 with ISO AUTO, AF-S for a still object or AF-C/Human eye AF for a moving person. These are starting points. Watch shutter speed and review sharpness before judging the light."
      ],
      [
        "Observe direction and shadow edges",
        "Make one picture with the window behind you, then one with it beside the subject. Look for where shadows fall and whether they reveal shape or hide a feature. Direct sun and light through a larger window or thin curtain can produce different shadow edges; photograph both when available and compare. “Soft” light means a more gradual light-to-shadow transition, not a blurred or less-sharp photograph. Choose the pattern that suits the subject."
      ],
      [
        "Try open shade",
        "Outside, try a shaded location facing a bright open area. Avoid patches of direct sunlight across the face for the first comparison. Move the subject or camera and watch the eyes and background. Shade can still be dim, and a bright background can make the subject look dark. Check the actual result instead of assuming outdoors always provides enough light or that shade is always best."
      ],
      [
        "A bright background is an exposure choice",
        "With the light behind the subject, the face and background may need very different exposures. In P/A/S or M with Auto ISO, try a small positive exposure-compensation adjustment if the face is too dark, then check whether important bright details are lost. Another option is to move the subject or change the background. A white wall or card you already have can be tried opposite the window to return some light; keep it stable and compare with/without. Not every bright reflection needs detail, but decide intentionally."
      ],
      [
        "White balance changes the color interpretation",
        "MENU → Camera Settings1 → White Balance → Auto is a useful starting point. For a window scene, compare Auto and Daylight; for shade, compare Auto and Shade. A preset is named for the light it compensates, not an artistic filter you must use in every matching location. If the look is too warm or cool, choose the version that represents your intention. In Auto/SCN shooting, White Balance is fixed to Auto; use P/A/S/M for this exercise. White balance affects the camera-rendered JPEG; it is not a focus adjustment."
      ],
      [
        "Keep a sequence’s color consistent",
        "Under warm lamps with White Balance Auto, Priority Set in AWB offers Standard, Ambience (retain more warm atmosphere) and White (prioritize neutral white at low color temperature). Compare them if that lighting is available. Shutter AWB Lock can hold color on half-press or during a burst; Off returns normal automatic adjustment. A lock is useful only while the light stays similar. Mixed sources can leave different parts of the subject different colors; moving or switching off one source can be more useful than repeatedly changing WB."
      ],
      [
        "Read brightness aids without trusting them blindly",
        "DISP Button can enable Histogram, a graph of how much of the preview is dark or bright. There is no ideal histogram shape for every scene; a bright wall naturally pushes it right. Check important bright texture in playback as well. Zebra Setting overlays stripes at a chosen brightness level; it is a threshold guide, not a universal skin-tone or RAW-clipping detector. Start by understanding the display before relying on it. With Live View Display → Setting Effect OFF, preview brightness can differ from the captured photo; Setting Effect ON is the useful baseline for this exercise."
      ],
      [
        "Make a fair before-and-after",
        "Keep framing, subject and viewing size similar while changing one light choice. Score eye/detail sharpness, expression/shape, important highlights, color and background. A preferred camera photograph comes from those visible results, not merely a wider aperture. Keep the original files; selecting the best JPEG is enough today. Editing, artificial-flash technique and cloud storage remain separate later work."
      ]
    ],
    "exercise": "Make four pictures: front-window light, side-window light, one position with a simpler background, and that position with a tested white-balance choice. Keep the subject size similar and note exposure settings. Pick the best two at equal viewing size and explain the visible differences. If using a person, prioritize comfort over keeping them in harsh light.",
    "question": "What does “soft light” describe?",
    "options": [
      "An out-of-focus subject",
      "A gradual transition from lit areas to shadows",
      "A low-resolution JPEG"
    ],
    "answer": 1,
    "explanation": "Light softness describes shadow transitions. Focus, camera movement and shutter speed still determine whether the subject is sharp.",
    "sources": [
      {
        "label": "White Balance",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264690.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Priority Set in AWB",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002273491.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Shutter AWB Lock",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002280318.html",
        "checked": "2026-10-11"
      },
      {
        "label": "DISP and Histogram",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264659.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Zebra Setting",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002279220.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Live View Display",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002241271.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Exposure compensation",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002264676.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Human face/eye AF",
        "url": "https://helpguide.sony.net/ilc/1810/v1/en/contents/TP0002280329.html",
        "checked": "2026-10-11"
      },
      {
        "label": "Nikon: Photography Glossary (ambient light, soft lighting and reflectors)",
        "url": "https://www.nikonusa.com/learn-and-explore/photography-glossary",
        "checked": "2026-10-12"
      }
    ],
    "stage": "fieldcraft",
    "category": "COMPOSITION & LIGHT",
    "symbol": "◒",
    "sourceNote": "See the source dates below. Sony verifies camera operation, Sigma the lens, and Nikon general photographic principles where linked. Exercises and starting settings are original practice guidance, not guaranteed results. Physical-camera testing remains pending."
  }
]);
Object.assign(window.FIELD_GUIDE.menuReference, {
  "TP0002241246": {
    "label": "Memory",
    "path": "MENU → Camera Settings1 → Memory (still/movie icons)",
    "meaning": "Stores selected shooting settings for later recall.",
    "choices": [
      "Choose one of the body registration numbers shown on the camera; Sony documents up to three body registrations.",
      "M1–M4: four memory-card registrations; require an inserted card.",
      "Set up the camera first, choose a destination and press center. Change and re-register to overwrite an existing setup."
    ],
    "start": "Use a spare slot for a repeatable still-subject setup, after recording anything already saved there.",
    "limits": "The camera’s registration screen identifies the settings that can be saved. Program Shift cannot be registered. Overwriting replaces the stored setup; formatting the card erases M1–M4. This is not a photo backup.",
    "affects": "Saved camera settings, not image files.",
    "lesson": "memory-scenes"
  },
  "TP0002241175": {
    "label": "Recall",
    "path": "MENU → Camera Settings1 → Recall (still/movie icons); mode dial MR",
    "meaning": "Loads a previously registered shooting setup.",
    "choices": [
      "Turn the mode dial to MR, select the number with the wheel or left/right, then press center.",
      "Camera Settings1 → Recall also selects registered settings. M1–M4 use the inserted card; registrations from another camera of the same model can be recalled."
    ],
    "start": "Recall your still-subject setup, then inspect exposure, ISO, focus and drive indicators before the test photograph.",
    "limits": "Requires a registered setup. Recalled settings take priority and can invalidate the settings you just chose. Card memories require the appropriate card. A temporary change is not a saved update; use Memory to re-register.",
    "affects": "Active shooting settings and resulting capture behavior.",
    "lesson": "memory-scenes"
  },
  "TP0002278035": {
    "label": "Reg. Custom Shoot Set",
    "path": "MENU → Camera Settings1 → Reg. Custom Shoot Set",
    "meaning": "Registers selected shooting settings to recall temporarily while holding an assigned key.",
    "choices": [
      "Recall Custom hold 1/2/3: choose one registration, check the functions to recall, set values, then Register.",
      "Import Current Setting: import the current camera setup into the selected registration.",
      "Assign the matching Recall Custom hold number using still-photo Custom Key; hold while shooting and release to return."
    ],
    "start": "After learning the individual controls, prepare a faster-shutter/AF-C setup for occasional movement and test it before relying on it.",
    "limits": "Recall Custom hold works only in P/A/S/M. The registerable functions are shown on the camera and include exposure/focus/drive, excluding self-timer. Lens and camera state can prevent saved settings taking effect. Record prior custom-button mappings before changing them.",
    "affects": "Temporary shooting values, unlike My Dial’s control mappings.",
    "lesson": "memory-scenes"
  },
  "TP0002280322": {
    "label": "My Dial Settings",
    "path": "MENU → Camera Settings2 → My Dial Settings",
    "meaning": "Stores alternative functions for the top control dial and rear control wheel.",
    "choices": [
      "My Dial 1/2/3: assign each control a function, or -- (Not set), then OK.",
      "Custom Key → My Dial 1/2/3 during Hold: use that mapping only while held.",
      "My Dial 1→2→3: cycle normal → 1 → 2 → 3 → normal, skipping completely empty sets.",
      "Toggle My Dial 1/2/3: press to activate; press again for normal controls."
    ],
    "start": "Try My Dial 1 with the wheel on ISO and dial on Av (aperture), using a during Hold button in A. Record the original button assignment first.",
    "limits": "Available functions are listed on-camera. Empty sets are not recalled. Dial / Wheel Lock is temporarily overridden. Releasing a hold restores mappings, not necessarily the values you changed with them. This is not Memory recall.",
    "affects": "Dial/wheel control assignments during supported still/movie shooting.",
    "lesson": "memory-scenes"
  },
  "TP0002264644": {
    "label": "Scene Selection",
    "path": "Mode dial → SCN → turn the control dial to select the scene",
    "meaning": "Chooses a scene-based automatic shooting setup.",
    "choices": [
      "Portrait: emphasizes the person and background separation.",
      "Sports Action: aims for a fast shutter and takes a burst while the shutter is held.",
      "Macro: a close-up scene setup, without changing the lens’s minimum focusing distance.",
      "Landscape: a scene-wide sharpness and vivid-color setup.",
      "Sunset: emphasizes sunset colors.",
      "Night Scene: retains a night-scene look; slow shutter may need support.",
      "Hand-held Twilight: four captures combined to reduce noise/blur in a night scene.",
      "Night Portrait: a night portrait using flash; raise the flash manually and support for slow shutters.",
      "Anti Motion Blur: four captures combined for an indoor scene without flash."
    ],
    "start": "Try Portrait or Landscape once and compare with the P/A setup you already understand.",
    "limits": "Turn the dial to SCN, then turn the top control dial to choose a scene. Hand-held Twilight/Anti Motion Blur temporarily change RAW/RAW & JPEG to JPEG. Erratic movement, very close subjects, repeated patterns and flickering lights can defeat composite processing. Scene settings restrict other controls; no scene guarantees sharpness.",
    "affects": "Still exposure/processing and, in composite modes, file handling.",
    "lesson": "memory-scenes"
  },
  "TP0002241259": {
    "label": "Face Registration: New Registration",
    "path": "MENU → Camera Settings1 → Face Registration → New Registration",
    "meaning": "Stores a face for optional focusing priority.",
    "choices": [
      "Frame the face in the guide, press the shutter, then Enter at confirmation. Up to eight faces can be registered."
    ],
    "start": "Use a willing subject, facing front in good light, when choosing between several familiar people is useful.",
    "limits": "Obscuring hats/masks/sunglasses can prevent correct registration. Priority also requires Regist. Faces Priority On, Face/Eye Priority in AF On and Human detection on firmware 2.00+. Registration is not needed for ordinary eye AF.",
    "affects": "Face-registration data in the camera and optional AF priority; not a cloud upload.",
    "lesson": "people-priority"
  },
  "TP0002241260": {
    "label": "Face Registration: Order Exchanging",
    "path": "MENU → Camera Settings1 → Face Registration → Order Exchanging",
    "meaning": "Changes the priority order of registered faces.",
    "choices": [
      "Select a registered face, then select its destination in the list. The first registered/listed face has higher priority."
    ],
    "start": "Move the intended main subject ahead of other registrations, then verify which face is selected in the scene.",
    "limits": "Requires registrations and enabled registered-face priority to be useful. It does not guarantee that an obscured face can be detected.",
    "affects": "Face-priority order, not photo order or image files.",
    "lesson": "people-priority"
  },
  "TP0002264704": {
    "label": "Face Registration: Delete",
    "path": "MENU → Camera Settings1 → Face Registration → Delete (or Delete All)",
    "meaning": "Removes one or all registered-face entries, with different data-retention effects.",
    "choices": [
      "Delete: remove a selected registration from use; Sony says its face data remains in the product.",
      "Delete All: remove all registered-face data from the product."
    ],
    "start": "If removing face data after an exercise, use Delete All only after confirming all registrations may be removed.",
    "limits": "Deleting an individual entry is not complete removal of its face data. Delete All affects every registered face. These operations are separate from Playback Delete and do not erase card photographs.",
    "affects": "Face-registration records/data in the camera.",
    "lesson": "people-priority"
  },
  "TP0002279222": {
    "label": "Regist. Faces Priority",
    "path": "MENU → Camera Settings1 → Regist. Faces Priority",
    "meaning": "Gives higher focusing priority to registered human faces.",
    "choices": [
      "On: prefer registered faces.",
      "Off: focus without extra registered-face preference; retain registrations."
    ],
    "start": "Off for a simple one-person eye-AF exercise; On when prioritizing a known person in a group is useful.",
    "limits": "Requires Face Registration, Face/Eye Priority in AF On and Subject Detection Human on firmware 2.00 or later. It cannot reliably prioritize a face that is not detected.",
    "affects": "Autofocus preference; not an eye-sharpness guarantee.",
    "lesson": "people-priority"
  },
  "TP0002264703": {
    "label": "Smile Shutter",
    "path": "MENU → Camera Settings1 → Smile Shutter",
    "meaning": "Automatically releases the shutter when it detects a smile.",
    "choices": [
      "Off: no smile-triggered capture.",
      "On: Slight Smile / Normal Smile / Big Smile: select the smile strength used for release."
    ],
    "start": "Off for deliberate expression/timing. Briefly try Normal Smile with a willing subject, then restore Off.",
    "limits": "Unavailable in movies/S&Q, Sweep Panorama, Picture Effect, Focus Magnifier, and Landscape/Night Scene/Sunset/Hand-held Twilight/Anti Motion Blur scenes. Up to eight faces can be detected but detection may fail or mistake other objects. A manual shot returns to active smile detection. With Touch Tracking, a touched face becomes the smile target. Focus-area and drive restrictions also apply.",
    "affects": "Automatic still-photo timing and file creation; turn Off when the experiment ends.",
    "lesson": "people-priority"
  },
  "TP0002264706": {
    "label": "Grid Line",
    "path": "MENU → Camera Settings2 → Grid Line",
    "meaning": "Overlays composition guides on the shooting display.",
    "choices": [
      "Rule of 3rds Grid: divides the picture into thirds; try the subject near a line/intersection.",
      "Square Grid: helps align horizontal/vertical elements.",
      "Diag. + Square Grid: adds diagonal composition guides.",
      "Off: hide the grid."
    ],
    "start": "Try Rule of 3rds Grid, then compare a centered composition; choose the arrangement that supports the subject.",
    "limits": "An optional guide, not a rule for every scene. It does not change focus, exposure or the saved composition.",
    "affects": "Shooting display only; no grid in the recorded photograph.",
    "lesson": "composition"
  },
  "TP0002264659": {
    "label": "DISP Button (Monitor/Finder)",
    "path": "MENU → Camera Settings2 → DISP Button → Monitor or Finder → select views → Enter",
    "meaning": "Chooses the shooting display views available when cycling DISP.",
    "choices": [
      "Choose Monitor or Finder, check the desired views, then Enter.",
      "Graphic Display: basic information with graphical shutter/aperture indicators.",
      "Display All Info.: recording information. No Disp. Info.: hide it.",
      "Histogram: brightness distribution graph.",
      "Level: front-back and horizontal tilt indicators; green indicates level.",
      "For viewfinder (Monitor only): shooting information without the subject view.",
      "Monitor Off (Monitor only): monitor off during shooting; still usable for playback and MENU."
    ],
    "start": "Enable Histogram and Level alongside a normal information view, then press DISP to compare them.",
    "limits": "Monitor and Finder lists differ. The level can err by almost ±1° and more with steep tilt. A histogram has no ideal universal shape and does not tell you what the subject should look like.",
    "affects": "Shooting display choices only.",
    "lesson": "composition"
  },
  "TP0002264690": {
    "label": "White Balance",
    "path": "MENU → Camera Settings1 → White Balance",
    "meaning": "Adjusts the interpretation of color under the light falling on the subject.",
    "choices": [
      "Auto: camera estimates the light color.",
      "Daylight / Shade / Cloudy: daylight-family presets.",
      "Incandescent: warm-lamp preset. Fluor.: Warm White / Cool White / Day White / Daylight: fluorescent presets.",
      "Flash: flash preset. Underwater Auto: automatic underwater color adjustment.",
      "C.Temp./Filter: color temperature and color-compensation adjustment.",
      "Custom 1/2/3: stored measured-white settings. Press right for fine adjustment where supported."
    ],
    "start": "Auto for the first window-light photograph; compare Daylight or Shade in P/A/S/M for a consistent intended look.",
    "limits": "Fixed to Auto in Intelligent Auto, Superior Auto and Scene Selection. Some lamp spectra, such as mercury/sodium, prevent accurate correction. Mixed light can affect different parts of the subject differently. A custom measurement needs the separate Sony measurement procedure; no unsupported temperature range is asserted here.",
    "affects": "Camera-rendered JPEG/movie color and the initial interpretation of RAW; not focus or the physical color of the light.",
    "lesson": "available-light"
  },
  "TP0002273491": {
    "label": "Priority Set in AWB",
    "path": "MENU → Camera Settings1 → Priority Set in AWB",
    "meaning": "Chooses which color tendency automatic white balance should prioritize under warm lighting.",
    "choices": [
      "Standard: ordinary automatic adjustment.",
      "Ambience: retain the light source’s warm atmosphere.",
      "White: prioritize neutral whites with low-color-temperature light."
    ],
    "start": "Standard first; compare Ambience and White under a warm lamp and choose intentionally.",
    "limits": "Applies when White Balance is Auto. It does not replace the light source or guarantee identical skin tones in mixed light.",
    "affects": "Automatic color rendering preference.",
    "lesson": "available-light"
  },
  "TP0002280318": {
    "label": "Shutter AWB Lock",
    "path": "MENU → Camera Settings1 → Shutter AWB Lock",
    "meaning": "Holds automatic white balance during half-press or a burst.",
    "choices": [
      "Shut. Halfway Down: lock while half-pressed and during continuous shooting.",
      "Cont. Shooting: keep the first frame’s white balance through the burst.",
      "Off: ordinary automatic adjustment.",
      "Separate custom-key AWB Lock Hold locks while held; AWB Lock Toggle locks until pressed again. These can also be assigned for movies."
    ],
    "start": "Off for changing light; try Cont. Shooting for a consistent burst under steady light.",
    "limits": "Shutter AWB Lock applies to stills with White Balance Auto or Underwater Auto. A lock made before flash fires can give unnatural color; Sony advises appropriate Off/Cont. Shooting behavior without key lock, or White Balance Flash. Unlock when the lighting changes.",
    "affects": "Still automatic white-balance timing; separate from exposure/focus lock.",
    "lesson": "available-light"
  },
  "TP0002279220": {
    "label": "Zebra Setting",
    "path": "MENU → Camera Settings2 → Zebra Setting",
    "meaning": "Overlays stripes where the preview brightness meets a selected threshold or range.",
    "choices": [
      "Zebra Display: show/hide stripes.",
      "Zebra Level: choose the brightness criterion, expressed in IRE (a video-signal brightness scale).",
      "Custom1 supports a standard brightness and range for checking an exposure band; Custom2 supports a minimum brightness for checking areas at/above it. These are Sony’s documented default custom roles."
    ],
    "start": "Learn the histogram and playback checks first; then experiment with stripes on a bright textured object while making small exposure changes.",
    "limits": "Sony’s page does not enumerate every numeric level. Select a level according to the purpose; there is no universal skin-tone setting or promise of exact RAW clipping detection. Zebra is not shown on HDMI devices.",
    "affects": "Brightness feedback overlay only; not added to captured photographs.",
    "lesson": "available-light"
  },
  "TP0002241271": {
    "label": "Live View Display",
    "path": "MENU → Camera Settings2 → Live View Display",
    "meaning": "Chooses whether the preview reflects exposure/color/effect settings.",
    "choices": [
      "Setting Effect ON: preview approximates the image with exposure compensation, white balance, Creative Style and Picture Effect applied.",
      "Setting Effect OFF: prioritize a viewable composition preview even when the capture settings would look darker or different."
    ],
    "start": "Setting Effect ON for the window-light JPEG exercise; still inspect the recorded photo.",
    "limits": "OFF cannot be selected in Intelligent Auto, Superior Auto, Sweep Panorama, Movie, S&Q or Scene Selection. With OFF, the displayed brightness need not match the shot. Sony mentions OFF for composition with third-party studio flash; flash technique is a later lesson.",
    "affects": "Shooting preview, not a change to recorded exposure by itself.",
    "lesson": "available-light"
  }
});
window.FIELD_GUIDE.glossary.push(...[
  [
    "Composition",
    "How you arrange the subject, background and space inside the frame.",
    "composition"
  ],
  [
    "Working distance",
    "The space between the front of the lens and the subject.",
    "lens-fieldwork"
  ],
  [
    "Memory recall",
    "Loading a previously registered shooting setup.",
    "memory-scenes"
  ],
  [
    "Soft light",
    "Light with gradual transitions between illuminated areas and shadows.",
    "available-light"
  ]
]);
window.FIELD_GUIDE.glossary.find(term => term[0] === 'White balance')[2] = 'available-light';window.FIELD_GUIDE.glossary.find(term => term[0] === 'Histogram')[2] = 'available-light';

// Exposure, flash and JPEG practice. Keep all earlier IDs and the notebook schema.
(() => {
  const data = window.FIELD_GUIDE;
  const sony = (id, label, checked = '2026-10-12') => ({label, url:`https://helpguide.sony.net/ilc/1810/v1/en/contents/${id}.html`, checked});
  const compositionSource = {label:'Nikon: 5 Easy Composition Guidelines (general principles)', url:'https://www.nikonusa.com/learn-and-explore/c/tips-and-techniques/5-easy-composition-guidelines', checked:'2026-10-12'};
  const lightSource = {label:'Nikon Photography Glossary (ambient light, soft light, reflectors)', url:'https://www.nikonusa.com/learn-and-explore/photography-glossary', checked:'2026-10-12'};
  const note = 'Sony sources establish documented a6400 behavior; Nikon supports general photographic principles where linked. Settings, comparison sequences and review prompts are original assignments, not measured results. Source dates are listed below. Physical-camera testing on body 2.00 / Sigma lens 03 remains pending.';
  const exposureSources = [sony('TP0002264676','Exposure Comp.'), sony('TP0002241212','Metering Mode'), sony('TP0002241213','AE lock'), sony('TP0002264646','Manual Exposure'), sony('TP0002264686','ISO'), sony('TP0002264659','DISP Button / Histogram','2026-10-11'), sony('TP0002279220','Zebra Setting','2026-10-11'), sony('TP0002241271','Live View Display','2026-10-11')];
  const flashSources = [sony('TP0002264653','Using flash'), sony('TP0002264655','Flash Mode'), sony('TP0002264656','Flash Comp.'), sony('TP0002241215','Exp.comp.set'), sony('TP0002280326','Specifications: flash sync and recycling'), sony('TP0002273510','Silent Shooting','2026-10-11'), sony('TP0002241275','e-Front Curtain Shutter'), sony('TP0002273471','Wireless Flash')];
  data.lessons.push(
    {id:'exposure-decisions', title:'Expose for what matters', stage:'controls', category:'EXPOSURE IN PRACTICE', symbol:'◐', time:11,
      intro:'Use stops, metering and a recorded test frame to make a deliberate brightness decision.',
      definition:'Metering is the camera’s estimate of scene brightness. It helps choose settings; it does not know which detail or mood you want to preserve.',
      prerequisites:['balance','exposure-controls','available-light'], sections:[
        ['Trade stops without confusing light and brightness', 'One stop doubles or halves a quantity. In steady light, f/4 at 1/125 second and f/2.8 at 1/250 collect approximately the same light at a fixed ISO. The second pair gives less depth of field and freezes more movement. Keeping f/4 and raising ISO 400 to 800 after going to 1/250 can restore similar image brightness, but captures half the light. These are illustrative settings, not example EXIF from a photograph.'],
        ['Start with Multi, then choose what deserves priority', 'MENU → Camera Settings1 → Metering Mode → Multi considers areas across the frame. Face Priority in Multi Metering can favor detected human faces. Center weights the middle; Spot reads a small circle; Entire Screen Avg. averages the frame; Highlight emphasizes bright areas and can leave the person dark. None guarantees retained detail. Focus selects a distance; metering selects a brightness measurement.'],
        ['A spot is not automatically the moving eye', 'Spot Metering Point → Focus Point Link follows Flexible Spot or Expand Flexible Spot placement. With Tracking: Flexible Spot or Tracking: Expand Flexible Spot, it uses the tracking start position, not the subject’s later position. Metering a white shirt versus a black shirt can suggest different exposure even in identical light. Begin with Multi and review before adding this complication.'],
        ['Adjust the target in small steps', 'In P/A/S, use MENU → Camera Settings1 → Exposure Comp. Try +0.3 or +0.7 EV when the face is too dark, or negative compensation when important bright detail is lost. In M with ISO AUTO, compensation changes the automatic ISO target; in M with a fixed ISO, change aperture, shutter or ISO yourself. Compensation is unavailable in Auto/SCN. Check actual values and blinking limits, not just the compensation number. Exposure step selects 0.3EV or 0.5EV increments.'],
        ['Lock a useful reading when reframing', 'For a steady-light scene, take a reading that gives the subject the intended brightness. With the AF/MF/AEL lever at AEL and the button assigned to AEL hold, hold it to lock exposure, re-focus on the subject and shoot while holding. Release to unlock. If the button was reassigned to Eye AF, it will do that instead: inspect its assignment first. AEL w/ shutter is a separate half-press policy. A lock does not follow changing light and does not lock subject focus for you.'],
        ['Check the recorded photograph', 'Enable Histogram through MENU → Camera Settings2 → DISP Button → Monitor or Finder, then cycle DISP. Dark tones are on the left and bright tones on the right. An edge pile-up is a reason to inspect important detail, not proof the picture is wrong; black backgrounds and tiny reflections may be intentional. Use the saved image as well as the preview. Zebras mark your selected brightness threshold/range, not a universal skin tone or guaranteed RAW clipping boundary. With Live View Display → Setting Effect OFF, preview brightness is especially unsuitable for judging the final exposure.'],
        ['When one exposure cannot hold everything', 'Dynamic range is the span from dark to bright detail a capture can retain. If brightening a backlit face loses the window, compensation cannot preserve both by itself. Choose the face or the view, move the subject, change your angle, or add fill light. DRO changes tone rendering; Auto HDR combines captures and has movement/file-format limits. Exposure Std. Adjust is a persistent metering calibration, not a routine rescue control: leave it at zero while learning.']
      ], exercise:'Use a stationary object beside a bright window. In A, f/4, ISO AUTO and Multi, take 0, −0.7 and +0.7 EV frames without changing composition. Record shutter/ISO and compare subject detail and window detail. Then choose a useful reading, hold AEL and reframe once. Confirm the lock indicator; release it and return compensation to 0. Write which detail you chose to preserve and why.',
      question:'In M with a fixed ISO, what changes a too-dark exposure?', options:['Exposure compensation alone','Changing aperture, shutter time, ISO or the light','Switching the histogram off'], answer:1, explanation:'The a6400 needs ISO AUTO for exposure compensation in M. With fixed ISO, you change the capture settings or light yourself.', sources:exposureSources, sourceNote:note},
    {id:'flash-basics', title:'Use the built-in flash deliberately', stage:'controls', category:'LIGHT YOU CAN ADD', symbol:'ϟ', time:11,
      intro:'Make a small fill-light comparison without buying a flash or changing your whole setup.',
      definition:'Ambient light is the light already in the scene. Flash adds a brief burst. Fill flash lifts a darker subject while some of the existing light remains visible.',
      prerequisites:['exposure-decisions','available-light'], sections:[
        ['Prepare the a6400 and Sigma', 'Use P/A/S/M for deliberate control. Set MENU → Camera Settings2 → Silent Shooting → Off; flash is unavailable when it is On. Sony recommends e-Front Curtain Shutter → Off with third-party lenses, so use Off for this Sigma exercise. This is Sony’s general guidance, not a measured fault with your particular lens/firmware. Remove the lens hood, stay at least 1 metre from the subject and check for lens shadows. Press the flash pop-up button and let the unit rise fully; it does not pop up by itself.'],
        ['Start with Fill-flash', 'MENU → Camera Settings1 → Flash Mode → Fill-flash fires on each shot when the flash is ready. Autoflash lets the camera decide in supported modes; Flash Off is also mode-dependent. To stop using the built-in flash, return the tilted monitor to its ordinary position and gently press the flash down. Do not force or hold the flash head at an angle to improvise bounce lighting.'],
        ['Respect sync speed and recycling', 'Flash sync is the shutter timing that lets the flash illuminate the whole frame. Sony specifies 1/160 second for this camera with Sony flash. For the built-in-flash exercise, start at 1/125 and do not plan on 1/250 or faster; this is different from an available-light portrait recipe. Wait for recharge between frames; Sony gives about four seconds, with actual waiting dependent on use. An external high-speed-sync workflow needs separately verified compatible equipment.'],
        ['Control flash and the room separately', 'For a repeatable first comparison, try M, 1/125 second, f/4 and fixed ISO 400, then adjust ISO for the room before making your pair. At fixed aperture/ISO, a slower shutter records more ambient light; it can also record subject blur around the flash-lit image. Flash Comp. changes flash output from −3 to +3 EV. Try 0 then −1 EV if the nearby face looks too strongly lit. More positive compensation cannot exceed the flash’s power or reach.'],
        ['Ordinary compensation can change flash too', 'MENU → Camera Settings1 → Exp.comp.set chooses Ambient&flash or Ambient only. With Ambient&flash, exposure compensation also biases flash output; Ambient only confines that compensation to the ambient-light exposure. Record the current choice before changing it. Use fixed manual exposure and Flash Comp. for the first flash-strength test so automatic changes do not hide what happened.'],
        ['Slow and rear sync are creative choices', 'Slow Sync. uses a slower shutter to record more background light and increases blur risk. Rear Sync. fires near the end of the exposure, affecting where a moving subject’s light trail appears. Neither guarantees frozen movement. Red Eye Reduction adds pre-flashes and can still fail; tell a willing subject to hold the pose. Direct flash can produce hard shadows, reflections and different color from warm room light.'],
        ['If the result is disappointing', 'A dark lower edge suggests hood/lens obstruction: remove the hood, move farther away or use a longer zoom setting and reframe. A bright subject with a black room needs more ambient exposure or a better location, not necessarily more flash. If flash will not fire, check Silent Shooting, recharge, mode and whether Multi Frame NR is active. Wireless Flash does not turn this pop-up flash into a wireless controller; Sony requires compatible external equipment.']
      ], exercise:'With a willing person or an object at least 1 metre away, make a fixed-setting pair with the flash down, then raised in Fill-flash. Try 0 and −1 EV Flash Comp. without changing distance or exposure. Inspect the subject, background, shadows and any lower-edge obstruction. Use a slower shutter only with a still subject and support. Finish by lowering the flash and restoring any unwanted setting changes.',
      question:'The subject is bright enough but the room is dark. What is a useful controlled experiment?', options:['Increase flash power without checking anything','At fixed ISO/aperture, try a slower shutter for more ambient light and watch for blur','Turn on Silent Shooting to strengthen the flash'], answer:1, explanation:'A longer exposure records more room light. It may also record movement, even though the flash fires briefly.', sources:flashSources.concat([sony('TP0002241262','Red Eye Reduction'),sony('TP0002264686','Multi Frame NR restrictions'),lightSource]), sourceNote:note},
    {id:'jpeg-processing', title:'Shape the JPEG inside the camera', stage:'controls', category:'READY-TO-SHARE COLOR', symbol:'▧', time:12,
      intro:'Choose a natural starting look, compare one processing control at a time, and understand what cannot be undone in a JPEG.',
      definition:'In-camera processing turns captured information into a finished JPEG: its color, tone contrast, edge emphasis and noise smoothing. It cannot repair missed focus or collect light that never reached the sensor.',
      prerequisites:['file-format','jpeg-settings','exposure-decisions'], sections:[
        ['Make a repeatable baseline', 'In A or M, use JPEG or RAW & JPEG, Fine or Extra fine, L, 3:2 and sRGB as a practical starting point. Set MENU → Camera Settings1 → Picture Profile → Off and Picture Effect → Off. Picture Profile is an advanced tone/color system shared between stills and movies; log profiles assume later processing and are not a shortcut to a pleasing ready-to-share JPEG. Keep that deeper workflow for a later lesson.'],
        ['White balance first, style second', 'White balance changes how neutral colors are rendered. Under one steady light source, compare Auto with a suitable preset such as Daylight before adjusting style. Mixed daylight and warm lamps can color different parts of a face differently; a single white balance cannot make every source neutral. Move or switch off an unnecessary lamp when practical. Keep the same white balance for a style comparison.'],
        ['Creative Style controls the rendered look', 'MENU → Camera Settings1 → Creative Style offers Standard, Portrait and other looks. Standard is a useful baseline; Portrait aims for softer skin tone, not automatic retouching or better focus. Contrast increases light/dark separation; Saturation increases color vividness; Sharpness emphasizes edges. Compare small adjustments and inspect eyelashes, skin and bright fabric. More edge emphasis does not fix motion blur. The reference explains every named style and the six Style Boxes; the source does not enumerate all slider values.'],
        ['DRO works on one capture', 'MENU → Camera Settings1 → DRO/Auto HDR → D-Range Optimizer adjusts tones in areas of one image. Compare Off with Auto or Lv1 before trying stronger Lv2–Lv5. Lifting dark areas can reveal noise. It is a rendering aid, not a replacement for more light or a guarantee of recovered clipped highlights. It does not give a RAW file extra captured dynamic range.'],
        ['Auto HDR uses three captures', 'DRO/Auto HDR → Auto HDR requires JPEG only, with Silent Shooting Off and Picture Effect/Picture Profile Off. It takes three exposures and saves two results: a normal exposure and the combined image. Exposure Diff. Auto chooses the range; manual choices run from 1.0 to 6.0EV. Sony’s 2.0EV example means −1, 0 and +1 EV, not ±2. Keep the camera and subject still and wait for processing. Moving people, leaves or flickering light may leave mismatched outlines; flash has little benefit here. Compare this on a still room scene, not a family moment.'],
        ['Noise reduction has two different jobs', 'High ISO NR → Normal, Low or Off changes smoothing in still JPEGs. It is unavailable with RAW only and does not act on the RAW file in RAW & JPEG. Compare fine texture as well as grain. Long Exposure NR instead works at shutter times of one second or longer and can add a wait about as long as the exposure. Sony also lists Long Exposure NR among the conditions that limit RAW recording to 12 bits per pixel instead of the usual 14: fewer numerical levels for the recorded data, not fewer image pixels. It may not run in continuous/bracket and some scene modes, and Silent Shooting disables it.'],
        ['Lens corrections and artistic effects', 'Lens Comp. offers shading, chromatic-aberration and distortion correction for compatible lenses: dark corners, colored edge fringes and bowed lines. Available controls depend on the attached lens; Distortion Comp. can be locked to Auto. Do not infer this Sigma/firmware’s exact support or a RAW editor’s behavior from the generic Sony menu. Picture Effect produces stronger artistic looks and requires JPEG only; some effects combine frames or need processing time. Keep it Off for the first natural-color comparison.'],
        ['Keep a usable original and reset deliberately', 'The camera JPEG has its chosen rendering baked in. A RAW file retains more latitude for later processing, but previews and editor defaults may differ; do not assume a black-and-white camera preview means RAW color was destroyed. For ordinary Creative Style/DRO comparisons, RAW & JPEG is an optional way to keep both if you have space. Auto HDR and Picture Effect require switching to JPEG only. Restore your previous format afterward and keep the files you may want for the later Mac editing phase.']
      ], exercise:'Use a still object with textured fabric beside it in steady window light. Fix exposure, focus and white balance. Make Standard and Portrait JPEGs, then compare DRO Off/Auto without also changing style. Inspect texture and shadows at equal viewing size. Optionally switch to JPEG only and make one Auto HDR pair of a still bright-window scene. Record each actual setting, choose your preferred natural result, and restore format, style, DRO and other changed controls.',
      question:'Which operation captures three exposures and saves a normal image plus a combined result?', options:['Creative Style: Portrait','D-Range Optimizer','Auto HDR'], answer:2, explanation:'Auto HDR combines three exposures and requires JPEG only. DRO processes tones from one capture.',
      sources:[sony('TP0002264693','Creative Style'),sony('TP0002264688','D-Range Optimizer'),sony('TP0002264689','Auto HDR'),sony('TP0002264705','High ISO NR'),sony('TP0002241265','Long Exposure NR'),sony('TP0002279238','Lens Comp.'),sony('TP0002264692','Picture Effect'),sony('TP0002273496','Picture Profile'),sony('TP0002264690','White Balance','2026-10-11'),sony('TP0002273510','Silent Shooting','2026-10-11')], sourceNote:note},
    {id:'portrait-light-assignment', title:'Portrait assignment: shape light and space', stage:'fieldcraft', category:'PORTRAIT PRACTICE', symbol:'◒', time:8,
      intro:'Make six thoughtful frames of one willing person, then choose a portrait for a visible reason.',
      definition:'A portrait combines expression, the light on the face and the space around it. A blurred background alone does not make those decisions for you.',
      prerequisites:['composition','available-light','eye-tracking','exposure-decisions'], sections:[
        ['Set a simple brief', 'Allow about 20 minutes near a window without direct sun striking the face. Ask the person which side feels comfortable and explain the short exercise. Use an uncluttered background and leave room behind them when possible. Begin around 35–50mm, f/4 and 1/250 second in M with ISO AUTO. These are available-light starting points: raise shutter speed if movement blurs or change aperture if the required facial detail is not sharp.'],
        ['Make one reliable focus setup', 'Use Continuous AF for natural small movements, Face/Eye Priority in AF On and Subject Detection Human. Confirm that the intended eye is selected, then enlarge the saved image to check it. If detection fails, use a Flexible Spot on the important eye. A green box is helpful feedback, not proof of a sharp recorded portrait.'],
        ['Pair 1: change light direction', 'Make a baseline with the face toward the window, then have the person turn gently so the light falls more from the side. Keep framing and subject position similar. Look for gradual versus abrupt cheek shadows and a visible expression. For each pose check exposure: Auto ISO may change, so record its actual value. This pair tests the overall lighting result, not sensor performance.'],
        ['Pair 2: change the background', 'Keep the preferred pose and light. Take a centered frame, then move your camera slightly to remove a bright distraction or a line crossing the head. Try leaving space in the direction of the person’s gaze. Refocus after moving. Choose the stronger arrangement even if it breaks the rule of thirds.'],
        ['Pair 3: compare light fill', 'If the shadow side is too dark, place an existing white sheet of paper or white board outside the frame on that side to reflect window light back. Have a helper hold it securely. Compare with and without while keeping pose and framing similar. No purchase is required; if it has little effect, change its distance/angle or omit it.'],
        ['Review expression before pixel detail', 'At ordinary viewing size, choose a frame for expression, light and background. Then enlarge the eye and check motion, focus and whether enough of the face is sharp. Check bright skin or fabric for lost detail. If too little is sharp, try f/5.6 and check ISO/exposure again. Repeat only the weakest pair, and record why the new attempt improved.']
      ], exercise:'Deliver a six-frame local set: two light directions, two compositions and two reflector choices. Record shutter, aperture, ISO and compensation from your actual shots. Choose one final JPEG and write one sentence each about expression, eye sharpness, background and light. Keep the originals locally; this assignment does not upload or publish the person’s photographs.',
      question:'The eye is sharp but a bright object behind the head draws attention. What should you try?', options:['Change camera position to simplify the background','Raise ISO automatically','Add stronger sharpening'], answer:0, explanation:'The problem is composition and competing brightness. A small change in position may solve it before any settings change.', sources:[compositionSource,lightSource,sony('TP0002280329','Face/Eye AF Set.','2026-10-11'),...exposureSources.slice(0,4)], sourceNote:note},
    {id:'indoor-light-assignment', title:'Indoor assignment: a moment in useful light', stage:'fieldcraft', category:'INDOOR PRACTICE', symbol:'☷', time:8,
      intro:'Build a small indoor story while controlling motion, mixed color and distracting backgrounds.',
      definition:'Mixed light means different light sources illuminate the same scene. It can leave one side of a subject blue and another orange, even when the overall exposure looks right.',
      prerequisites:['portrait-light-assignment','jpeg-processing','flash-basics'], sections:[
        ['Choose one activity and three frames', 'Ask a willing person to read, prepare a snack or arrange flowers. Plan an establishing frame showing the room, a medium frame showing the activity, and a close detail of hands or an object. Try 18–24mm for context and 35–50mm for details; move back if the lens cannot focus or faces near the edge look stretched. Keep enough background to tell the story and exclude clutter that does not help.'],
        ['Find a useful pool of light', 'Compare the subject deep in the room with a position nearer a window. If a warm lamp colors only one side of the face, switch it off when appropriate or choose one light source for the subject. Photograph both versions with the same framing and compare skin/object color. A white-balance preset cannot neutralize every differently lit part of the scene at once.'],
        ['Protect the moment', 'For gentle hand movement start in M around 1/250, f/2.8–f/4 and ISO AUTO. For faster activity try 1/500 or faster. If ISO reaches its limit and the result is dark, improve the light, open the aperture if suitable or time a pause; do not blindly slow the shutter. Check the saved hand and eye detail. For layered objects at different distances, f/5.6 may be more useful, with the corresponding light/ISO trade-off.'],
        ['Check artificial-light problems', 'Set Silent Shooting Off for this exercise; Sony warns of stripes under flickering light with silent capture. Take several tests if LEDs or other lamps remain. If brightness/color varies or bands remain, change the light source or location. Slowing shutter can sometimes help but conflicts with freezing movement; do not assume one shutter speed solves every lamp.'],
        ['Optional flash comparison during a pause', 'For a stationary subject, make the separate built-in-flash exercise at 1/125, fixed ISO and f/4, at least 1 metre away with the hood removed. Wait for recharge and compare the existing-light atmosphere with the added fill. Do not carry the 1/250–1/500 available-light recipe straight into built-in flash. Review hard shadows, shiny surfaces and mixed warm/flash color. Skip flash if it interrupts the moment.'],
        ['Choose a coherent three-photo story', 'Choose one useful wide, medium and detail frame. View them at equal size and compare color, subject sharpness and clutter. Keep white balance and Creative Style consistent under the same light; adapt if you move to a different light source. Make a second attempt at the weakest frame and note whether moving, timing or changing a setting made the difference.']
      ], exercise:'Allow 25 minutes. Make a three-photo indoor story, plus one comparison of the original location and improved light. Record the failed-frame cause—motion, focus, brightness, color or background—and repeat that frame with one deliberate change. Save the JPEGs and any RAW partners locally for later editing practice.',
      question:'One side of a face is orange from a lamp and the other blue from a window. What is a useful first change?', options:['Apply maximum saturation','Change the light mix or subject position','Assume one white-balance value can neutralize both sides'], answer:1, explanation:'Changing which light reaches the subject can simplify mixed color before capture.', sources:[compositionSource,lightSource,sony('TP0002264690','White Balance','2026-10-11'),sony('TP0002273510','Silent Shooting','2026-10-11'),...flashSources.slice(0,5)], sourceNote:note},
    {id:'backlit-assignment', title:'Backlight assignment: choose face, view or silhouette', stage:'fieldcraft', category:'BACKLIGHT PRACTICE', symbol:'☀', time:8,
      intro:'Compare three intentions in the same bright-window scene, with a clear reason for each exposure.',
      definition:'Backlight comes from behind the subject toward the camera. It can outline a subject beautifully while leaving the face much darker than the background.',
      prerequisites:['exposure-decisions','flash-basics','composition'], sections:[
        ['Use a window as a safe, repeatable background', 'Place a willing person or a distinctively shaped object in front of a bright window. Keep direct sun out of the frame for this exercise. Start with Multi, A, f/4 and ISO AUTO; check shutter speed for motion. Keep camera position, focal length and focus target similar while comparing exposure choices.'],
        ['Frame 1: prioritize the face', 'Take a baseline, then try positive Exposure Comp. in small steps if the face is too dark. Check the recorded face and bright clothing, not just the meter’s zero. A pale or featureless window may be an acceptable choice when expression is the subject. Record what background detail you gave up.'],
        ['Frame 2: prioritize the view or a silhouette', 'Reduce exposure until important window detail is retained. If the face becomes a silhouette—a dark outline—make that intentional: separate hands and head from other dark shapes, and give the outline room. A silhouette needs readable shape more than visible facial detail. Do not label every dark face a failed exposure.'],
        ['Frame 3: reduce the lighting contrast', 'Keep more of the background by changing the light on the subject: turn the person toward available light, reflect window light with existing white material, or try built-in fill flash. For flash switch to the flash lesson’s 1/125-second manual starting setup, hood off, at least 1 metre away. Set the ambient exposure for the view before raising the flash and adjusting Flash Comp. If the view is too bright even at low ISO, close the aperture; if the flash cannot reach, change position or use the face-priority choice.'],
        ['Judge detail and atmosphere together', 'Compare the three intentions at the same viewing size. Which one tells the story? Inspect face focus, bright detail, distracting reflections and the frame edges. If light shining toward the lens creates a washed-out look, change your angle; with flash down you can also use the lens hood. Auto HDR is an optional still-object experiment, not a dependable fix for a moving portrait.'],
        ['Keep the comparison honest', 'If you compare with your existing phone, use similar framing, light and display size; let the phone use its normal processing and record its mode. Score expression, sharpness, background, retained detail and your preference. Neither camera nor phone is guaranteed to win all three intentions. Keep unedited camera JPEG comparisons separate from later edited-RAW comparisons.']
      ], exercise:'Make a local three-image set: face first, background/silhouette first, and reduced contrast through changed light or fill. Caption each with your intention, actual settings and the detail sacrificed. Pick one preferred result and one change to try next. Return exposure and flash compensation to your usual settings afterward.',
      question:'Positive compensation brightens the face but loses the window view. What does this show?', options:['The scene may need a lighting change or a deliberate detail trade-off','Autofocus has stopped working','More positive compensation must preserve both'], answer:0, explanation:'Compensation changes the exposure target; it cannot reduce the brightness difference between the face and window.', sources:[compositionSource,lightSource,...exposureSources.slice(0,4),...flashSources.slice(0,5)], sourceNote:note}
  );
  const additions = {
    TP0002279219: {label:'Face Priority in Multi Metering', path:'MENU → Camera Settings1 → Face Priority in Multi Metering', meaning:'Gives detected faces priority when measuring brightness in Multi metering.', choices:['On: base metering on detected faces.','Off: use Multi without face-based brightness priority.'], start:'Try On for a human portrait in Multi; review bright skin and the background afterward.', limits:'Only applies in Multi. Locked On in Intelligent Auto/Superior Auto. Does not work when Face/Eye Priority in AF is On with Subject Detection Animal. This is separate from focus priority.', affects:'Automatic exposure target, including RAW and JPEG captures; does not guarantee a correctly exposed face.', lesson:'exposure-decisions'},
    TP0002273498: {label:'Spot Metering Point', path:'MENU → Camera Settings1 → Spot Metering Point', meaning:'Chooses whether the brightness-measuring spot stays central or follows supported focus-area placement.', choices:['Center: meter at the frame center.','Focus Point Link: coordinate with Flexible Spot or Expand Flexible Spot.'], start:'Keep Center until you deliberately use Spot metering; try Focus Point Link for a still off-center subject with Flexible Spot.', limits:'Other focus-area types lock the spot to the center. Tracking: Flexible Spot / Tracking: Expand Flexible Spot use the tracking start position, not the later tracked position. It does not make focus and metering the same operation.', affects:'Spot metering location and exposure decisions, not image sharpness or file processing.', lesson:'exposure-decisions'},
    TP0002241218: {label:'Exposure step', path:'MENU → Camera Settings1 → Exposure step', meaning:'Chooses the size of each adjustment for shutter speed, aperture and exposure compensation.', choices:['0.3EV: one-third-stop increments for finer adjustments.','0.5EV: half-stop increments for larger steps.'], start:'Use 0.3EV while learning; three such steps make one stop.', limits:'This changes adjustment spacing, not exposure by itself. It is not the setting for bracket frame count or the Auto ISO range.', affects:'Exposure control increments; a newly chosen exposure affects both RAW and JPEG.', lesson:'exposure-decisions'},
    TP0002273499: {label:'Exposure Std. Adjust', path:'MENU → Camera Settings1 → Exposure Std. Adjust → metering mode', meaning:'Changes the camera’s baseline metering standard separately for each metering mode.', choices:['Choose Multi, Center, Spot, Entire Screen Average or Highlight.','Set −1 EV to +1 EV in 1/6 EV increments; zero is the unadjusted standard.'], start:'Leave each at 0 while learning. Use ordinary Exposure Comp. for a particular scene; record original values before deliberately calibrating.', limits:'Persists independently of exposure compensation; the displayed compensation value does not include it. Changes the M.M reference and spot AEL standard. Stored separately in Exif. Changing it during bracketing resets the number of bracket shots.', affects:'Metering reference for exposure in RAW/JPEG capture, not a retroactive edit of existing files.', lesson:'exposure-decisions'},
    TP0002264655: {label:'Flash Mode', path:'MENU → Camera Settings1 → Flash Mode', meaning:'Chooses whether and when flash fires during an exposure.', choices:['Flash Off: no flash firing.','Autoflash: fire when the camera judges the light requires it.','Fill-flash: fire for each shot.','Slow Sync.: flash with a slower shutter to retain more background light; watch for blur.','Rear Sync.: fire near the end of the exposure, changing the relationship to motion trails.'], start:'Try Fill-flash with the built-in unit fully raised, 1/125 second and a subject at least 1 metre away. Remove the lens hood and wait for recharge.', limits:'Mode availability/defaults depend on shooting mode. Flash is unavailable with Silent Shooting, Multi Frame NR and movies. The unit does not pop up automatically. Lens shadows can remain even without the hood. Do not use an ambient 1/250 portrait recipe with the built-in flash; Sony specifies 1/160 sync.', affects:'Added light in RAW/JPEG still captures; not a JPEG-only effect.', lesson:'flash-basics', sources:flashSources.filter(s=>!s.url.includes('TP0002264655'))},
    TP0002264656: {label:'Flash Comp.', path:'MENU → Camera Settings1 → Flash Comp.', meaning:'Adjusts flash output without directly changing the ambient-light exposure settings.', choices:['−3.0 EV to +3.0 EV: negative reduces flash output; positive increases it; 0 adds no flash-compensation bias.'], start:'Try 0, then −1 EV for gentler fill on a nearby subject while holding distance and manual exposure fixed.', limits:'Unavailable in Intelligent Auto, Superior Auto, Sweep Panorama and Scene Selection. Positive changes can hit maximum flash power; negative changes can hit minimum output at very close distances. Filters/diffusers affect the result. Ordinary Exposure Comp. may also bias flash depending on Exp.comp.set.', affects:'Flash illumination of RAW/JPEG still captures; no change to existing files.', lesson:'flash-basics', sources:[sony('TP0002241215','Exp.comp.set'),sony('TP0002264653','Using flash')]},
    TP0002241215: {label:'Exp.comp.set', path:'MENU → Camera Settings1 → Exp.comp.set', meaning:'Chooses whether ordinary exposure compensation also adjusts flash output.', choices:['Ambient&flash: exposure compensation controls both ambient light and flash light.','Ambient only: exposure compensation controls ambient light only.'], start:'Record the current setting. Try Ambient only if you want to adjust an automatic ambient exposure and flash compensation separately, then review both subject and background.', limits:'Does not enable compensation in unsupported modes or override flash power limits. In M with fixed ISO, set ambient exposure manually. Flash Comp. remains the direct flash-output adjustment.', affects:'How exposure compensation interacts with flash in still capture, including RAW and JPEG.', lesson:'flash-basics', sources:[sony('TP0002264656','Flash Comp.'),sony('TP0002264676','Exposure Comp.')]},
    TP0002273471: {label:'Wireless Flash', path:'MENU → Camera Settings1 → Wireless Flash', meaning:'Enables compatible external flashes to fire away from the camera using optical or radio control.', choices:['Off: do not use wireless flash.','On: use a compatible external controller/commander and remote flash setup.'], start:'Off for this kit’s built-in-flash exercise; no equipment purchase is needed for the lesson.', limits:'The built-in flash cannot perform this wireless workflow. Sony requires compatible external flash/controller or radio commander/receiver equipment. Follow each device’s manual for pairing/channels; optical signals from another camera may trigger a receiver. Sony suggests AEL hold for the AEL test-flash action. No specific external unit is verified or recommended here.', affects:'External still-flash triggering; not camera Wi-Fi transfer, phone sharing or a software-only lighting upgrade.', lesson:'flash-basics'},
    TP0002241262: {label:'Red Eye Reduction', path:'MENU → Camera Settings1 → Red Eye Reduction', meaning:'Adds two or more pre-flashes to reduce red pupils in flash photographs.', choices:['On: use red-eye-reduction pre-flashes during flash shooting.','Off: do not add those pre-flashes.'], start:'Off for the first object test. Try On if flash portraits show red pupils, and ask the person to hold their pose.', limits:'May not work depending on the person, subject distance or where they look. This is not an existing-photo repair or the control that raises the flash. Extra flashes affect timing and the subject may blink.', affects:'Flash sequence for stills; can change a person’s reaction before RAW/JPEG capture.', lesson:'flash-basics'},
    TP0002264688: {label:'D-Range Optimizer (DRO)', path:'MENU → Camera Settings1 → DRO/Auto HDR → D-Range Optimizer', meaning:'Adjusts light/dark tones in areas of a single capture to render more visible gradation.', choices:['DRO/Auto HDR → Off: disable this tone optimization.','D-Range Optimizer: Auto: camera chooses the adjustment.','D-Range Optimizer: Lv1–Lv5: choose progressively stronger optimization.'], start:'Compare Off with Auto or Lv1 on a still window-lit object; inspect dark texture and noise, then choose the subtler useful result.', limits:'Fixed Off with Sweep Panorama, Multi Frame NR, active Picture Effect or Picture Profile. Sunset/Night Scene/Night Portrait/Hand-held Twilight/Anti Motion Blur scenes force Off; other scenes force DRO Auto. Stronger lifting can reveal noise. It cannot recover clipped capture data.', affects:'Rendered image tones, including the camera JPEG; does not add captured dynamic range to RAW. A RAW editor’s rendering may differ.', lesson:'jpeg-processing'},
    TP0002264689: {label:'Auto HDR', path:'MENU → Camera Settings1 → DRO/Auto HDR → Auto HDR', meaning:'Combines three different exposures in-camera and saves a normal-exposure image plus a combined image.', choices:['Exposure Diff. Auto: camera selects the difference.','Exposure Diff. 1.0EV–6.0EV: choose the span; Sony’s 2.0EV example uses −1, 0 and +1 EV.','DRO/Auto HDR → Off: return to ordinary capture without this combination.'], start:'Try Auto on a motionless room scene with camera support. Review the normal and combined JPEGs for detail and doubled edges.', limits:'JPEG only; unavailable with RAW/RAW & JPEG, Auto/SCN/Panorama, Multi Frame NR, active Picture Effect/Picture Profile or Silent Shooting. Wait for processing before the next shot. Movement, camera shake, flickering light and small scene contrast can spoil the combination. Flash has little effect.', affects:'Three captures and two saved JPEG results; not a RAW bracket set for later merging.', lesson:'jpeg-processing', sources:[sony('TP0002273510','Silent Shooting','2026-10-11')]},
    TP0002264693: {label:'Creative Style', path:'MENU → Camera Settings1 → Creative Style', meaning:'Selects the color/tone rendering and adjusts contrast, saturation and edge emphasis while leaving exposure controls available.', choices:['Standard: general rendering. Vivid: stronger saturation and contrast. Neutral: subdued saturation and sharpness.','Clear: clear tones/highlight colors. Deep: dense colors. Light: bright, light-looking tones.','Portrait: softer skin tones. Landscape: stronger saturation, contrast and sharpness.','Sunset: emphasizes sunset reds. Night Scene: lowers contrast for night scenes. Autumn leaves: emphasizes leaf reds/yellows.','Black & White: monochrome. Sepia: brown-toned monochrome; Saturation cannot be adjusted in either.','Style Box: six numbered slots can hold styles with different adjustments; record contents before overwriting.','Contrast increases light/dark separation; Saturation changes color intensity; Sharpness changes edge emphasis. Use wheel directions to choose and adjust. Sony’s topic does not enumerate every slider value.'], start:'Standard with no added adjustments for a baseline; compare Portrait under unchanged light, exposure and white balance.', limits:'Fixed Standard in Intelligent Auto/Superior Auto/Scene Selection or with active Picture Effect/Picture Profile. Portrait is a rendering style, not eye AF, lighting or an exposure scene mode. Extra sharpness cannot repair motion blur.', affects:'Rendered appearance of JPEG/preview and applicable movie rendering; RAW development can differ from the camera’s look. Existing files are not restyled.', lesson:'jpeg-processing'},
    TP0002264692: {label:'Picture Effect', path:'MENU → Camera Settings1 → Picture Effect', meaning:'Applies an artistic processed look to a capture.', choices:['Off: no effect. Toy Camera: soft image and shaded corners. Pop Color: stronger colors.','Posterization: abstract high-contrast colors or monochrome. Retro Photo: faded sepia look. Soft High-key: bright, soft tones.','Partial Color: retain selected color and make others monochrome. High Contrast Mono.: bold black and white.','Soft Focus: soft-light effect. HDR Painting: painting-like detail/color. Rich-tone Mono.: monochrome with extended gradation.','Miniature: selective-looking blur. Watercolor: paint-like bleeding/blur. Illustration: emphasized outlines.','Some effects have additional settings via left/right on the wheel; the source does not enumerate every nested choice.'], start:'Off for natural JPEG practice. If experimenting, record your format, switch to JPEG only and compare with an ordinary capture first.', limits:'Unavailable in RAW/RAW & JPEG, Auto/SCN/Panorama or Silent Shooting. Soft Focus, HDR Painting, Rich-tone Mono., Miniature, Watercolor and Illustration cannot be previewed fully before shooting, require processing time and cannot be used in movies. HDR Painting/Rich-tone Mono. capture three frames, so movement can spoil them. Partial Color can miss the intended color. Non-optical zoom reduces Toy Camera’s effect.', affects:'Processed JPEG and only the supported movie effects; no RAW capture with this feature. Restore your capture format afterward.', lesson:'jpeg-processing', sources:[sony('TP0002273510','Silent Shooting','2026-10-11')]},
    TP0002241265: {label:'Long Exposure NR', path:'MENU → Camera Settings1 → Long Exposure NR', meaning:'Reduces long-exposure noise at shutter times of one second or longer, with an additional processing wait.', choices:['On: prioritize noise reduction; the wait lasts about as long as the exposure and blocks the next capture.','Off: prioritize timing without this reduction.'], start:'On for a single supported-camera long exposure; allow roughly 10 seconds of extra processing after a 10-second exposure. Do not interrupt writing to the card.', limits:'May not activate in Panorama, Cont. Shooting/Cont. Bracket, Sports Action/Hand-held Twilight/Anti Motion Blur scenes or Multi Frame NR. Cannot select Off in Auto or SCN. Silent Shooting disables it.', affects:'Still long-exposure processing and capture timing. Sony does not exclude RAW here; do not confuse it with JPEG-only High ISO NR.', lesson:'jpeg-processing', sources:[sony('TP0002273510','Silent Shooting','2026-10-11')]},
    TP0002264705: {label:'High ISO NR', path:'MENU → Camera Settings1 → High ISO NR', meaning:'Reduces noise in high-ISO still JPEGs through processing.', choices:['Normal: ordinary noise reduction.','Low: more moderate reduction.','Off: disable this high-ISO noise reduction.'], start:'Compare Normal and Low at the same high ISO, exposure and lighting; inspect grain and fine fabric/skin texture at the intended viewing size.', limits:'Locked Normal in Intelligent Auto/Superior Auto/Scene Selection/Panorama. Unavailable with RAW only; does not act on the RAW image in RAW & JPEG. Does not add light, correct focus or freeze movement.', affects:'Still JPEG processing, not the RAW partner. Different from Long Exposure NR’s timed wait.', lesson:'jpeg-processing'},
    TP0002279238: {label:'Lens Comp.', path:'MENU → Camera Settings1 → Lens Comp.', meaning:'Corrects supported lens characteristics in the image: dark corners, colored fringes and distortion.', choices:['Shading Comp. → Auto/Off: compensate for dark corners.','Chromatic Aberration Comp. → Auto/Off: reduce color deviation toward the corners.','Distortion Comp. → Auto/Off: compensate for geometric distortion.'], start:'Inspect the available choices with your Sigma attached; record them and keep Auto where available for ordinary JPEG practice. Compare a straight-edged object and evenly lit corners if testing Off.', limits:'Requires an automatic-compensation-compliant lens. Shading correction may be incomplete; Distortion Comp. can be fixed Auto depending on the lens. This generic Sony page does not establish all three controls’ behavior for the Sigma on lens firmware 03.', affects:'Camera lens correction and rendered results; not a fix for perspective from camera position. RAW correction/editor handling and exact Sigma compatibility remain separate checks.', lesson:'jpeg-processing'},
    TP0002241275: {label:'e-Front Curtain Shutter', path:'MENU → Camera Settings2 → e-Front Curtain Shutter', meaning:'Uses an electronic start to the exposure to reduce shutter-release lag.', choices:['On: use electronic front-curtain operation.','Off: do not use it.'], start:'Use Off with this Sigma for these exercises, following Sony’s recommendation for third-party lenses. Record your previous setting.', limits:'Sony warns of incorrect/uneven exposure with third-party lenses and of clipped-looking out-of-focus circles with wide apertures at fast shutter speeds. This general warning is not a confirmed defect test of this particular Sigma/firmware. Unavailable with Silent Shooting On.', affects:'Still shutter operation for RAW/JPEG; distinct from Silent Shooting and not a flash high-speed-sync switch.', lesson:'flash-basics', sources:[sony('TP0002273510','Silent Shooting','2026-10-11')]},
    TP0002264677: {label:'Exposure Set. Guide', path:'MENU → Camera Settings2 → Exposure Set. Guide', meaning:'Shows an on-screen guide while you change exposure settings.', choices:['On: display the guide.','Off: hide it.'], start:'On while learning to read changing values; Off if you prefer less display clutter.', limits:'The guide does not change exposure for you or guarantee a correct result. Keep checking shutter speed, aperture, ISO and the recorded image.', affects:'Display only; no guide is recorded into RAW/JPEG files.', lesson:'exposure-decisions'}
  };
  Object.assign(data.menuReference, additions);
  data.menuReference.TP0002241265.affects = 'Still long-exposure processing and capture timing, including RAW. Sony’s File Format page lists Long Exposure NR among conditions limiting RAW to 12 bits per pixel rather than 14; this is numerical precision, not pixel dimensions. Different from High ISO NR.';
  data.menuReference.TP0002241265.sources.push(sony('TP0002279217','File Format: RAW bit-depth restrictions','2026-10-11'));
  data.lessons.find(item=>item.id==='jpeg-processing').sources.push(sony('TP0002279217','File Format and RAW restrictions','2026-10-11'));
  for (const group of data.menuGroups) for (const entry of group.entries) {
    if (additions[entry.id.split('-').pop().toUpperCase()]) entry.source.checked = '2026-10-12';
  }

  // Targeted older-foundation review; do not mark the entire foundations stage verified.
  for (const id of ['shutter','iso','balance']) {
    const lesson = data.lessons.find(item=>item.id===id);
    lesson.sources = id==='shutter' ? [sony('TP0002241171','Shutter Priority','2026-10-11'),sony('TP0002241265','Long Exposure NR'),sony('TP0002280326','Specifications')] : exposureSources;
    lesson.sourceNote = 'Targeted exposure-foundation review, 2026-10-12. Sony sources support the mode behavior and camera limits below; the stop examples and exercises are original teaching guidance. A complete optics/physical-camera review remains pending.';
  }
  data.lessons.find(item=>item.id==='shutter').sections.push(['Available light versus flash', 'The suggested 1/250–1/1000 shutter speeds are available-light starting points. Built-in flash uses a different timing limit: start at 1/125, within Sony’s 1/160 sync specification. See the built-in-flash lesson before combining a fast shutter recipe with flash.']);
  data.lessons.find(item=>item.id==='iso').sections.push(['Use ordinary ISO for the experiment', 'On the a6400 use MENU → Camera Settings1 → ISO Setting → ISO and choose a number. Multi Frame NR is a different choice that combines captures; avoid it for this single-exposure comparison. It cannot be used with RAW/RAW & JPEG or flash.']);
  data.lessons.find(item=>item.id==='exposure-controls').sections.push(['Extend the exposure workflow', 'For backlight, exposure locking and brightness review, continue to <a href="#lesson/exposure-decisions">Expose for what matters</a>. The action/portrait shutter suggestions here assume available light. For the built-in flash, use the separate <a href="#lesson/flash-basics">flash workflow and sync limit</a>.']);
  data.lessons.find(item=>item.id==='jpeg-settings').sections.push(['Then choose the rendering', 'File size and compression are different from the JPEG’s color and tone. Continue to <a href="#lesson/jpeg-processing">Shape the JPEG inside the camera</a> for Creative Style, DRO, Auto HDR and noise reduction.']);
  data.menuReference.TP0002264676.sources = [sony('TP0002241215','Exp.comp.set: ambient/flash interaction')];
  data.menuReference.TP0002241212.sources = [sony('TP0002279219','Face Priority in Multi Metering'),sony('TP0002273498','Spot Metering Point')];
  data.glossary.find(term=>term[0]==='Histogram')[2]='exposure-decisions';
  data.glossary.push(['Fill flash','A flash contribution used to lift a darker subject while retaining some existing light.','flash-basics'],['Flash sync','Shutter timing that allows the flash to illuminate the whole image.','flash-basics'],['Dynamic range','The span from dark to bright detail that a capture or rendering can retain.','exposure-decisions'],['DRO','D-Range Optimizer: local tone adjustment from one capture.','jpeg-processing'],['Auto HDR','An in-camera combination of three exposures, requiring JPEG capture.','jpeg-processing'],['Silhouette','A subject shown as a dark, recognizable outline against a brighter background.','backlit-assignment']);
  const portrait = data.guides.find(item=>item.id==='portrait');
  portrait.lesson='portrait-light-assignment';
  portrait.intro='Available-light starting points for one willing person; review the nearer eye, shadows and background.';
  portrait.steps.push('Try two light directions, two backgrounds and two reflector choices in the linked assignment. These shutter suggestions are for available light; use the separate flash lesson for built-in flash.');
  const indoor = data.guides.find(item=>item.id==='indoor');
  indoor.lesson='indoor-light-assignment';
  indoor.settings=['18–35mm','f/2.8–f/4','Try 1/250s for gentle motion','Auto ISO; check limits'];
  indoor.steps.push('If mixed lamps and window light give uneven color, simplify the light on the subject. Make a wide, medium and detail story; use the linked assignment for flash and flicker checks.');
  data.guides.push({id:'backlit',title:'A face against a bright window',tag:'BACKLIGHT',symbol:'◐',intro:'Choose the face, the window view or an intentional silhouette; change the light if you want more of both.',settings:['A · f/4 starting point','Multi metering','ISO AUTO','Check actual shutter'],steps:['Make a baseline and inspect the face and bright detail. Try small positive compensation for a face-first image.','Try a darker exposure for a readable silhouette or preserved view. Refine the outline and background.','For a third version, turn toward useful light, reflect light with white material or follow the built-in-flash lesson at 1/125 second. Compare the three intentions.'],lesson:'backlit-assignment'});
  // Present the curriculum in stage order. Stable IDs—not row numbers—store progress.
  const stageOrder = {undefined: 0, controls: 1, fieldcraft: 2};
  data.lessons.sort((a, b) => stageOrder[String(a.stage)] - stageOrder[String(b.stage)]);
})();

// Complete-menu pass: concise source-linked explanations for every remaining indexed topic.
// Exact nested lists which Sony does not enumerate remain visibly qualified for camera review.
(() => {
  const data=window.FIELD_GUIDE;
  const source=id=>({label:'Sony a6400 Help Guide',url:`https://helpguide.sony.net/ilc/1810/v1/en/contents/${id}.html`,checked:'2026-10-12'});
  const lesson='field-review';
  const definitions={
    'Panorama: Size':'Chooses the recorded size for Sweep Panorama.','Panorama: Direction':'Chooses the direction you sweep during Sweep Panorama.','Interval Shoot Func.':'Sets interval shooting for a series captured at chosen intervals.','ISO Setting: ISO':'Chooses ISO sensitivity or Auto ISO.','Picture Profile':'Sets advanced tone, gamma and color processing shared by stills and movies.','Soft Skin Effect (still image)':'Applies in-camera smoothing to detected skin in still images.','Auto Object Framing (still image)':'Automatically saves an additional crop around a recognized subject.','Self-portrait/ -timer':'Chooses self-portrait timer behavior when the screen is tilted for self portraits.',
    'Movie: Exposure Mode':'Chooses how exposure is controlled while recording movies.','S&Q Motion: Exposure Mode':'Chooses exposure control for Slow & Quick Motion recording.','File Format (movie)':'Chooses the movie recording file format.','Record Setting (movie)':'Chooses movie resolution, frame rate and recording quality combinations.','S&Q Settings':'Sets the capture and playback frame-rate behavior for Slow & Quick Motion.','Proxy Recording':'Records a smaller proxy movie alongside the main movie where supported.','Auto Slow Shutter (movie)':'Allows the camera to use slower shutter speeds in dark movie scenes.','Audio Recording':'Turns movie audio recording on or off.','Audio Rec Level':'Adjusts movie microphone recording level.','Audio Level Display':'Shows or hides the movie audio-level display.','Wind Noise Reduct.':'Reduces low-frequency wind noise for the built-in microphone.','Marker Display (movie)':'Shows selected movie framing/safety markers on the display.','Marker Settings (movie)':'Chooses which movie markers are available and their settings.','Movie w/ shutter':'Allows the shutter button to start/stop movie recording.','Release w/o Lens':'Allows or prevents shutter release when no lens is recognized.','Release w/o Card':'Allows or prevents shutter release when no memory card is inserted.','SteadyShot':'Controls lens/camera stabilization where the attached lens supports it.','Clear Image Zoom/Digital Zoom (Zoom)':'Chooses digital zoom behavior beyond optical zoom.','Zoom Setting':'Chooses optical-only or available digital zoom operation.','Zoom Ring Rotate':'Chooses the zoom-ring direction for compatible power-zoom lenses.','FINDER/MONITOR':'Chooses how the view switches between viewfinder and monitor.','Finder Frame Rate (still image)':'Chooses the viewfinder display frame-rate mode for still shooting.','Auto Review':'Shows the newly captured image for a selected time.','Av/Tv Rotate':'Chooses the direction dials change aperture/shutter values.','Dial/Wheel Ev Comp':'Assigns exposure compensation to a dial or wheel in supported modes.','Func. of Touch Operation: Touch Shutter':'Chooses touch shutter operation.','MOVIE Button':'Enables or restricts the MOVIE button.','Dial / Wheel Lock':'Locks assigned dials/wheel against accidental changes.','Audio signals':'Controls camera operation sounds.',
    'Send to Smartphone Func.: Send to Smartphone':'Sends selected still images or movies to a paired phone.','Send to Smartphone Func.: Sending Target (proxy movies)':'Chooses whether proxy movies are a phone-transfer target.','Send to Computer':'Transfers images to a configured computer over Wi-Fi.','View on TV':'Displays camera content on a network-connected TV.','Ctrl w/ Smartphone':'Allows a phone app to operate the camera remotely.','Airplane Mode':'Disables wireless communications.','Wi-Fi Settings: WPS Push':'Connects through a compatible router WPS push-button process.','Wi-Fi Settings: Access Point Set.':'Registers/selects Wi-Fi access points.','Wi-Fi Settings: Disp MAC Address':'Displays the camera Wi-Fi MAC address.','Wi-Fi Settings: SSID/PW Reset':'Resets the camera Wi-Fi network name/password.','Bluetooth Settings':'Configures Bluetooth connection behavior.','Location Info. Link Set.':'Controls location information linking from a paired phone.','Edit Device Name':'Changes the camera device name shown to other devices.','Reset Network Set.':'Resets network settings.','Bluetooth Rmt Ctrl':'Enables compatible Bluetooth remote-control operation.',
    'Protecting images (Protect)':'Protects selected images from ordinary deletion.','Rotating an image (Rotate)':'Sets rotation for playback display of an image.','Deleting multiple selected images (Delete)':'Deletes selected images or groups from the card.','Rating':'Assigns a rating to an image.','Rating Set(Custom Key)':'Assigns a rating action to a custom key.','Specifying images to be printed (Specify Printing)':'Adds DPOF print-order information to selected JPEGs.','Photo Capture':'Saves a still frame from a movie.','Enlarging an image being played back (Enlarge Image)':'Magnifies a playback image for inspection.','Enlarge Initial Mag.':'Sets the initial playback magnification.','Enlarge Initial Position':'Sets the initial position for enlarged playback.','Cont. PB for Interval':'Plays interval-shot images continuously.','PB Speed for Interval':'Sets interval-image playback speed.','Playing back images using slideshow (Slide Show)':'Plays images automatically as a slideshow.','Switching between still images and movies (View Mode)':'Filters playback by stills, movies or date/folder views.','Playing back images on the image index screen (Image Index)':'Shows multiple playback thumbnails at once.','Display as Group':'Shows compatible continuous captures as a group.','Rotating recorded images automatically (Display Rotation)':'Chooses automatic playback rotation behavior.','Setting the method for jumping between images (Image Jump Setting)':'Chooses how the control wheel jumps between playback images.',
    'Monitor Brightness':'Adjusts monitor brightness.','Viewfinder Bright.':'Adjusts viewfinder brightness.','Finder Color Temp.':'Adjusts the viewfinder color-temperature appearance.','Gamma Disp. Assist':'Displays a viewing assist for selected movie gamma settings.','Volume Settings':'Adjusts playback volume.','Tile Menu':'Shows or hides tiled MENU tab presentation.','Mode Dial Guide':'Shows a guide when the mode dial changes.','Delete confirm.':'Chooses the default confirmation selection when deleting.','Display Quality':'Chooses display quality mode.','Power Save Start Time':'Sets inactivity time before power saving.','Auto Power OFF Temp.':'Chooses the automatic power-off temperature behavior.','NTSC/PAL Selector':'Changes video-system setting; requires caution because it reformats the card.','Cleaning Mode':'Prepares the camera for sensor cleaning.','Demo Mode':'Controls in-store demonstration playback.','TC/UB Settings':'Configures timecode/user-bit movie metadata.','IR Remote Ctrl':'Enables compatible infrared remote operation.','HDMI Settings: HDMI Resolution':'Chooses HDMI output resolution behavior.','HDMI Settings: 24p/60p Output (movie) (Only for 1080 60i compatible models)':'Chooses supported HDMI movie output behavior for applicable regions.','HDMI Settings: HDMI Info. Display':'Chooses whether camera information appears over HDMI.','HDMI Settings: TC Output (movie)':'Outputs timecode over HDMI in supported movie workflows.','HDMI Settings: REC Control (movie)':'Allows HDMI-connected compatible equipment to start/stop recording.','HDMI Settings: CTRL FOR HDMI':'Enables compatible HDMI-device control.','4K Output Select (movie)':'Chooses supported 4K HDMI output/recording behavior.','USB Connection':'Chooses USB connection mode.','USB LUN Setting':'Changes USB device-recognition mode for compatibility.','USB Power Supply':'Supplies USB power while the camera is on.','PC Remote Settings: Still Img. Save Dest.':'Chooses where stills are saved during supported PC Remote shooting.','PC Remote Settings: RAW+J PC Save Img':'Chooses which files are saved to the computer in supported RAW+JPEG remote shooting.','Language':'Chooses camera interface language.','Date/Time Setup':'Sets date, time and daylight-saving context.','Area Setting':'Sets the camera time-zone area.','Copyright Info':'Registers copyright/creator metadata for new files.','File Number':'Chooses continuous or reset file numbering behavior.','Set File Name':'Sets the file-name prefix where supported.','Select REC Folder':'Selects the recording folder on the card.','New Folder':'Creates a recording folder on the card.','Folder Name':'Chooses folder naming format.','Recover Image DB':'Repairs the camera image database when prompted after card/file issues.','Display Media Info.':'Shows card recording time and image-count capacity.','Setting Reset':'Resets selected camera settings.'
  };
  const destructive=/Delete|Reset|Format|Cleaning|NTSC\/PAL|New Folder|Recover Image DB|SSID\/PW/.test.bind(/Delete|Reset|Format|Cleaning|NTSC\/PAL|New Folder|Recover Image DB|SSID\/PW/);
  const media=/Protect|Rotat|Rating|Print|Photo Capture|Enlarge|PB |Slide|View Mode|Image Index|Group|Image Jump|Folder|File Number|File Name|Media Info|Delete/.test.bind(/Protect|Rotat|Rating|Print|Photo Capture|Enlarge|PB |Slide|View Mode|Image Index|Group|Image Jump|Folder|File Number|File Name|Media Info|Delete/);
  const network=/Smartphone|Computer|TV|Wi-Fi|Bluetooth|Location|Device Name|Network|Airplane/.test.bind(/Smartphone|Computer|TV|Wi-Fi|Bluetooth|Location|Device Name|Network|Airplane/);
  const movie=/movie|Movie|S&Q|Audio|Marker|Gamma|HDMI|4K|TC\/UB/.test.bind(/movie|Movie|S&Q|Audio|Marker|Gamma|HDMI|4K|TC\/UB/);
  for(const group of data.menuGroups) for(const entry of group.entries){
    const id=entry.id.split('-').pop().toUpperCase(); if(data.menuReference[id]) continue;
    const label=entry.label; const mode=movie(label)?'movie recording/output':network(label)?'wireless connection/control':media(label)?'playback/card organization':'camera operation or display';
    data.menuReference[id]={label,path:`MENU → ${group.name} → ${label}`,meaning:definitions[label]||`Controls the ${label} function described by Sony for this camera.`,choices:[`Use the on-camera choices shown after opening ${label}. Sony’s Help Guide page is linked below; it is the authority for regional, mode, lens and firmware-dependent options.`,`This concise reference does not invent a nested value list where Sony’s page does not enumerate it. Record any differing option on your body 2.00 in the field-review lesson.`],start:`Leave the current setting unchanged until you have a specific use. For a first test, photograph or record a harmless sample, review the result, then restore the prior value.`,limits:`Availability depends on the current mode, attached lens, card, connection or region. ${destructive(label)?'This operation can delete, reset, create, repair or alter stored settings/data; read the on-camera confirmation and protect/back up important files first. ':''}${network(label)?'This is a camera connectivity control, not a cloud backup or permission to expose photos. ':''}${movie(label)?'This is movie-specific where named and does not tune still-photo capture. ':''}`,affects:`${mode}; ${media(label)?'it does not alter an already exported copy.':network(label)?'it can expose connection identifiers or send selected files only after you choose an operation.':'it applies to later use, not existing photographs.'}`,lesson,generated:true,sources:[source(id)]}; entry.source.checked='2026-10-12';
  }
  data.lessons.push({id:'field-review',title:'Review the camera in your hands',stage:'controls',category:'FIELD REVIEW & TROUBLESHOOTING',symbol:'✓',time:12,intro:'Turn uncertain menu labels and real photographs into a short, repeatable camera review.',definition:'A field review is a written record of what your own camera did in a real scene. It separates a source-checked instruction from a result you actually observed.',prerequisites:['backlit-assignment','jpeg-processing','flash-basics'],sections:[['Prepare a safe review card','Use a card with room and no unverified important files. Note body 2.00 and lens 03, then photograph the MENU → Setup → Version screen if useful. Do not Format, Setting Reset, Reset Network Set., NTSC/PAL Selector, Delete All or face-data Delete All for this review.'],['Make the three assignment sets','Complete the portrait, indoor and backlit assignments. Record actual aperture, shutter, ISO, metering, compensation, focus mode/area, white balance, JPEG/RAW choice and flash state for the selected frame. A phone photo of the settings screen is an observation, not an EXIF replacement.'],['Diagnose one failure at a time','Soft eye: inspect focus target, subject movement and shutter. Whole-frame smear: inspect camera support/shutter. Dark face against window: choose face, view or added light. Orange/blue mixed light: simplify the light before changing JPEG style. Flash shadow/lower dark edge: remove hood, move farther away, reframe and check 1/125 starting point.'],['Test menus reversibly','For display, playback and connection menus, write the current value, make one reversible change, observe it, then restore it. Do not connect to an unknown Wi-Fi network, expose a phone-transfer password, or use Reset as troubleshooting. The Camera reference now links Sony’s instructions for every indexed topic; use its limits section before changing a setting.'],['Write what differed','Write the exact label, mode dial position, attached lens, result and whether the option was unavailable. A menu item can be greyed out because of mode, file format, lens, card or a conflicting function. This is useful evidence for correcting the guide; do not infer that a different a6400 menu is a fault.'],['Choose the next improvement','Pick one repeatable weakness: focus, movement, light, background, color or timing. Re-shoot only that weakness with one deliberate change. Keep the earlier frame for comparison; do not delete it just because the second is better.']],exercise:'Complete one review sheet for each portrait, indoor and backlit assignment. Include one result that surprised you and one menu item that differed or was unavailable. Save the note here, export your notebook, and keep the original photo files locally. This site does not upload them.',question:'What is the honest response when a documented menu option is unavailable?',options:['Assume the camera is broken','Record mode, lens and conflicting settings, then check the source restriction','Reset every setting immediately'],answer:1,explanation:'Mode, lens, file format and conflicting functions commonly change availability. Record evidence before changing destructive settings.',sources:[source('TP0002241328'),source('TP0002241321'),source('TP0002241330'),source('TP0002264653')],sourceNote:'This lesson provides a real-device review protocol. It does not claim the camera, lens or assignments were physically tested by the site author.'});
  data.lessons.sort((a,b)=>({undefined:0,controls:1,fieldcraft:2})[String(a.stage)]-({undefined:0,controls:1,fieldcraft:2})[String(b.stage)]);
})();
