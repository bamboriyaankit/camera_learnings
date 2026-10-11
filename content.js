'use strict';
// Original teaching text adapted from beginner-foundations.md. Exact Sony menu instructions are deferred.
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
      ['When the photo is too bright or dark', 'In an automatic or priority mode, exposure compensation asks for a brighter or darker result than the meter would normally choose. Its effect depends on which settings the camera is allowed to change and whether they have reached their limits.'],
      ['Watch the trade-off', 'Raising ISO can restore similar displayed brightness after shortening shutter time, but it cannot restore the lost captured light. Equally bright photos can have different noise, movement, and depth of field.']
    ], exercise: 'Photograph a still object in Aperture Priority at f/2.8 and f/4. Inspect shutter speed and ISO in playback. Which setting changed to compensate? Describe the result in one sentence.', question: 'Changing 1/125 to 1/250 second does what to capture time?', options: ['Doubles it', 'Halves it', 'Keeps it the same'], answer: 1, explanation: 'The exposure is half as long. If nothing else changes, the sensor receives half as much light.' },
    { id: 'focus', title: 'Focus: put sharpness where it matters', category: 'LENS & OPTICS', time: 5, symbol: '⊙', intro: 'Learn the difference between missed focus, camera shake, and subject movement.', definition: 'Focusing adjusts the lens so that a chosen distance is rendered sharply. Depth of field is the range of distances that look acceptably sharp around it.', sections: [
      ['Choose the important part', 'For a portrait, the nearer eye is usually the priority. For an object, choose the detail that tells its story. The camera does not always know what you consider important.'],
      ['AF-S, AF-C, and AF-A', 'AF-S (Single-shot AF) locks focus when it finds a still subject. AF-C (Continuous AF) keeps adjusting while you hold the shutter halfway, making it a useful starting point for movement. AF-A (Automatic AF) switches between these behaviors based on whether the camera thinks the subject is moving; its availability depends on lens support.'],
      ['Manual focus and DMF', 'MF (Manual Focus) lets you adjust focus yourself with the lens focus ring. DMF uses autofocus first, then lets you fine-tune manually. Manual focus is different from M on the mode dial: M controls exposure, so you can use manual exposure with autofocus.'],
      ['Find the setting on your a6400', 'For still photographs, open MENU → Camera Settings1 → Focus Mode. Choose the method that suits the subject. Sony lists only AF-C and MF for movies; some choices depend on the shooting mode and lens. Focus areas, eye detection, tracking, magnification, and peaking will get their own detailed guides.'],
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
        "Use your camera, attached lens, charged battery, and existing compatible memory card. These instructions use the English a6400 Help Guide. The assumed lens is the Sigma 18–50mm F2.8 DC DN Contemporary, Sony E mount; confirm the label on your lens. You reported body version 2.00 and lens version 03 on 2026-10-11. MENU → Setup → Version shows the camera software version. The current face/eye instructions below require version 2.00 or later; checking the version does not install an update."
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
