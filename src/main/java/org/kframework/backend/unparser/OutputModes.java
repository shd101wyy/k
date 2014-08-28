package org.kframework.backend.unparser;

/**
 * Contains functionality generic to all output modes.
 * @author dwightguth
 *
 */
public enum OutputModes {
    PRETTY(true), SMART(true), COMPATIBLE(true), KORE(true), RAW(false), KAST(false), BINARY(false), NONE(false), NO_WRAP(true);

    private boolean isPrettyPrinting;

    private OutputModes(boolean isPrettyPrinting) {
        this.isPrettyPrinting = isPrettyPrinting;
    }

    public boolean isPrettyPrinting() {
        return isPrettyPrinting;
    }
}