BUILDER = ./builder.rb

all: audiolib uilib phoenix_prototype phoenix_igoogle igoogle

audiolib:
	$(BUILDER) js/audiolib/audiolib

uilib:
	$(BUILDER) js/uilib/uilib

phoenix_prototype:
	$(BUILDER) js/phoenix/phoenix_prototype

phoenix_igoogle:
	$(BUILDER) js/phoenix/phoenix_igoogle

igoogle: audiolib uilib phoenix_igoogle
	$(BUILDER) liveradio_igoogle
	mv liveradio_igoogle.js liveradio_igoogle.xml

clean:
	find . -name "*~" -exec rm {} \;

perm:
	chmod -R a+rw .
	find . -type d | xargs chmod a+x
